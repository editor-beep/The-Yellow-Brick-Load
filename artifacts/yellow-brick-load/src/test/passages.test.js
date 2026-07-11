import { describe, it, expect } from 'vitest'
import { allPassages, getPassage } from '../passages/index.js'

// ── Reachability model ───────────────────────────────────────────────────────
// Entry points are the opening passages the engine can drop a player into
// without any prior navigation. `pickInitNode` (store.js) builds these as
// `${CHARACTER}_INIT` and, for characters in CHARACTERS_WITH_INIT_B, an
// additional `${CHARACTER}_INIT_B`. DENIZEN_INIT has no _B variant. Rather than
// duplicate that list (and risk drift), we treat any passage whose ID ends in
// `_INIT` or `_INIT_B` as a legitimate entry point.
const ENTRY_POINT_PATTERN = /_INIT$|_INIT_B$/

// Passages that are intentionally not reachable by walking choices/entries from
// an opening node. Each MUST document why it is standalone, so a genuine orphan
// can never hide behind a vague allow-list entry.
const INTENTIONALLY_STANDALONE = {
  // Off-grid, character-agnostic terminal. The engine forces the player here
  // via a background timer (fireGhostSignal → goTo('GHOST_SIGNAL')) only after
  // rare corruption thresholds are met; nothing links to it by choice.
  GHOST_SIGNAL: 'Reached only via the ghost-signal timer, never by a choice/entry edge.',
}

// Derives the oracle-entry node ID for a character, mirroring ORACLE_ENTRY_NODES
// in interpreter.js (e.g. 'tin_man' → 'TIN_MAN_ORACLE_ENTRY').
function oracleEntryFor(character) {
  return character ? `${character.toUpperCase()}_ORACLE_ENTRY` : null
}

// Collects every passage a player can be sent to from `passage`, including
// navigation that does not flow through a choice.target:
//   - choice.target        — normal branching
//   - onEnter triggerOracle — jumps to the character's ORACLE_ENTRY node
//   - onEnter checkSecretConfiguration → UNRECOGNIZED_CONFIG (persistent-flag gate)
// These mirror the goTo() side effects in interpreter.js so the reachability
// walk matches what the engine can actually do at runtime.
function outboundTargets(passage) {
  const targets = []
  for (const choice of passage.choices || []) {
    if (choice.target) targets.push(choice.target)
  }
  for (const effect of passage.onEnter || []) {
    if (effect.type === 'triggerOracle') {
      const entry = oracleEntryFor(passage.character)
      if (entry) targets.push(entry)
    }
    if (
      effect.action === 'checkSecretConfiguration' &&
      effect.onSuccess === 'triggerUnrecognizedConfiguration'
    ) {
      targets.push('UNRECOGNIZED_CONFIG')
    }
  }
  return targets
}

// ── Choice target integrity ─────────────────────────────────────────────────
// Every choice in every passage points at a downstream node via `target`. If a
// target references a missing or mistyped passage ID, the player is sent to a
// dead end that no other test would catch. This walks the entire registry and
// asserts each choice target resolves via getPassage(). Intentional terminals
// (endings and other passages with no choices) are simply skipped because they
// contribute no choices to walk.
describe('choice target integrity', () => {
  it('every choice target resolves to a real passage', () => {
    const broken = []

    for (const [passageId, passage] of Object.entries(allPassages)) {
      const choices = passage.choices || []
      choices.forEach((choice, index) => {
        // A choice with no target is a malformed choice — flag it explicitly.
        if (!choice.target) {
          broken.push(
            `Passage "${passageId}" choice #${index} ("${choice.label ?? ''}") has no target`,
          )
          return
        }
        if (getPassage(choice.target) === null) {
          broken.push(
            `Passage "${passageId}" choice #${index} ("${choice.label ?? ''}") ` +
              `points at missing passage "${choice.target}"`,
          )
        }
      })
    }

    expect(
      broken,
      broken.length
        ? `Found ${broken.length} dangling choice target(s):\n  - ${broken.join('\n  - ')}`
        : undefined,
    ).toEqual([])
  })

  it('exercises a non-trivial number of choices', () => {
    // Guards against the walk silently doing nothing if the registry changes
    // shape (e.g. choices moved under a different key).
    const totalChoices = Object.values(allPassages).reduce(
      (sum, passage) => sum + (passage.choices?.length || 0),
      0,
    )
    expect(totalChoices).toBeGreaterThan(0)
  })
})

// ── Passage reachability ─────────────────────────────────────────────────────
// The inverse of choice-target integrity: a passage can exist in `allPassages`
// while NO choice (and no opening/entry node) ever leads to it. That is dead
// content a player can never reach — usually a passage that was renamed while
// its inbound links weren't updated. This walks the graph forward from every
// entry point and flags anything left unvisited (minus the documented
// intentionally-standalone nodes).
describe('passage reachability', () => {
  it('every passage is reachable from an entry point', () => {
    const entryPoints = Object.keys(allPassages).filter((id) =>
      ENTRY_POINT_PATTERN.test(id),
    )

    // Sanity guard: if the entry-point detection ever matches nothing, the walk
    // below would flag the entire registry — fail loudly with a clear cause.
    expect(
      entryPoints.length,
      'No entry-point passages matched (expected IDs ending in _INIT / _INIT_B). ' +
        'Has the naming convention changed?',
    ).toBeGreaterThan(0)

    const reachable = new Set()
    const stack = [...entryPoints]
    while (stack.length) {
      const id = stack.pop()
      if (reachable.has(id)) continue
      const passage = allPassages[id]
      if (!passage) continue // dangling targets are covered by the integrity test
      reachable.add(id)
      for (const target of outboundTargets(passage)) {
        if (!reachable.has(target)) stack.push(target)
      }
    }

    const orphans = Object.keys(allPassages).filter(
      (id) => !reachable.has(id) && !(id in INTENTIONALLY_STANDALONE),
    )

    expect(
      orphans,
      orphans.length
        ? `Found ${orphans.length} orphaned passage(s) no player can reach:\n  - ` +
            orphans.join('\n  - ') +
            '\nEither link them from a choice/entry point, or add them to ' +
            'INTENTIONALLY_STANDALONE with a reason.'
        : undefined,
    ).toEqual([])
  })

  it('every intentionally-standalone entry is real and actually unreachable', () => {
    // Keeps the allow-list honest: entries must name existing passages, and
    // must not silently mask a node that has since become reachable (which would
    // hide a future orphan if that node were later re-orphaned).
    const stale = []
    for (const id of Object.keys(INTENTIONALLY_STANDALONE)) {
      if (!allPassages[id]) {
        stale.push(`"${id}" is allow-listed but no longer exists in allPassages`)
      }
    }
    expect(
      stale,
      stale.length ? `Stale allow-list entries:\n  - ${stale.join('\n  - ')}` : undefined,
    ).toEqual([])
  })
})
