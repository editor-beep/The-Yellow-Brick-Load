import { describe, it, expect } from 'vitest'
import { allPassages, getPassage } from '../passages/index.js'

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
