import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { useGameStore, pickInitNode, CHARACTERS_WITH_INIT_B } from '../engine/store.js'
import { getPassage } from '../passages/index.js'

function resetStore() {
  useGameStore.getState().hardReset()
}

describe('useGameStore', () => {
  beforeEach(resetStore)

  // ── Initial state ──────────────────────────────────────────────────────
  it('starts with the expected initial state', () => {
    const s = useGameStore.getState()
    expect(s.load).toBe(0)
    expect(s.desync).toBe(0)
    expect(s.smudge).toBe(0)
    expect(s.compliance).toBe('med')
    expect(s.reset_count).toBe(0)
    expect(s.overrender).toBe(0)
    expect(s.character).toBeNull()
    expect(s.currentNode).toBeNull()
    expect(s.history).toEqual([])
    expect(s.flags).toEqual({})
    expect(s.ghostSignalArmed).toBe(false)
    expect(s.ghostSignalFired).toBe(false)
  })

  // ── goTo ───────────────────────────────────────────────────────────────
  it('goTo sets currentNode and records history', () => {
    const { goTo } = useGameStore.getState()
    goTo('LION_INIT')
    expect(useGameStore.getState().currentNode).toBe('LION_INIT')
    expect(useGameStore.getState().history).toEqual([])

    goTo('LION_SECOND')
    expect(useGameStore.getState().currentNode).toBe('LION_SECOND')
    expect(useGameStore.getState().history).toEqual(['LION_INIT'])
  })

  // ── softReset ──────────────────────────────────────────────────────────
  it('softReset resets most state but preserves history', () => {
    // pickInitNode() randomly picks between the base and "_B" variant for
    // characters that have one (e.g. lion). Force the base variant so this
    // test is deterministic.
    const randomSpy = vi.spyOn(Math, 'random').mockReturnValue(0)

    const store = useGameStore.getState()
    store.selectCharacter('lion')
    store.addLoad(30)
    store.addSmudge(2)
    store.goTo('LION_SECOND')

    store.softReset()

    const s = useGameStore.getState()
    expect(s.load).toBe(0)
    expect(s.smudge).toBe(0)
    expect(s.compliance).toBe('high')
    expect(s.reset_count).toBe(1)
    expect(s.currentNode).toBe('LION_INIT')
    // history is preserved
    expect(s.history.length).toBeGreaterThan(0)

    randomSpy.mockRestore()
  })

  // ── hardReset ──────────────────────────────────────────────────────────
  it('hardReset returns to full initial state', () => {
    const store = useGameStore.getState()
    store.selectCharacter('lion')
    store.addLoad(50)
    store.softReset()

    store.hardReset()

    const s = useGameStore.getState()
    expect(s.load).toBe(0)
    expect(s.character).toBeNull()
    expect(s.currentNode).toBeNull()
    expect(s.reset_count).toBe(0)
    expect(s.history).toEqual([])
  })

  // ── checkGhostSignal ───────────────────────────────────────────────────
  it('arms Ghost Signal when all conditions are met (desync >= 3)', () => {
    const store = useGameStore.getState()
    store.addSmudge(2)
    store.addDesync(1)
    store.addDesync(1)
    store.addDesync(1)
    store.setCompliance('broken')

    store.checkGhostSignal()

    expect(useGameStore.getState().ghostSignalArmed).toBe(true)
  })

  it('does not arm Ghost Signal when desync is exactly 2 (below threshold)', () => {
    const store = useGameStore.getState()
    store.addSmudge(2)
    store.addDesync(1)
    store.addDesync(1)
    store.setCompliance('broken')

    store.checkGhostSignal()

    expect(useGameStore.getState().ghostSignalArmed).toBe(false)
  })

  it('does not fire Ghost Signal twice', () => {
    const store = useGameStore.getState()
    store.addSmudge(2)
    store.addDesync(3)
    store.setCompliance('broken')
    store.checkGhostSignal()
    store.fireGhostSignal()

    useGameStore.setState({ ghostSignalArmed: false })
    store.checkGhostSignal()

    expect(useGameStore.getState().ghostSignalArmed).toBe(false)
  })

  // ── state mutations ────────────────────────────────────────────────────
  it('addLoad caps at 99', () => {
    useGameStore.getState().addLoad(200)
    expect(useGameStore.getState().load).toBe(99)
  })

  it('addSmudge caps at 3', () => {
    useGameStore.getState().addSmudge(10)
    expect(useGameStore.getState().smudge).toBe(3)
  })

  it('addOverrender caps at 5', () => {
    useGameStore.getState().addOverrender(10)
    expect(useGameStore.getState().overrender).toBe(5)
  })

  it('setFlag stores arbitrary key/value pairs', () => {
    useGameStore.getState().setFlag('met_wizard', true)
    useGameStore.getState().setFlag('score', 42)
    const { flags } = useGameStore.getState()
    expect(flags.met_wizard).toBe(true)
    expect(flags.score).toBe(42)
  })
})

// ── pickInitNode ───────────────────────────────────────────────────────────
// The alternate opening scene ("_B" variant) is chosen randomly, so the two
// branches are exercised deterministically by stubbing Math.random. Each
// returned node is confirmed to resolve to a real passage so a missing or
// mistyped opening node can never silently ship.
describe('pickInitNode', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('returns null when no character is given', () => {
    expect(pickInitNode(null)).toBeNull()
    expect(pickInitNode(undefined)).toBeNull()
  })

  it('returns the base node for a character without a "_B" variant', () => {
    // denizen is the only character that has no "_B" opening.
    expect(CHARACTERS_WITH_INIT_B.has('denizen')).toBe(false)

    // The base node is returned regardless of the random draw.
    const low = vi.spyOn(Math, 'random').mockReturnValue(0)
    expect(pickInitNode('denizen')).toBe('DENIZEN_INIT')
    low.mockRestore()

    const high = vi.spyOn(Math, 'random').mockReturnValue(0.99)
    expect(pickInitNode('denizen')).toBe('DENIZEN_INIT')
    high.mockRestore()
  })

  it('picks the base node when Math.random < 0.5 for a character with a "_B" variant', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0)
    for (const character of CHARACTERS_WITH_INIT_B) {
      const base = `${character.toUpperCase()}_INIT`
      expect(pickInitNode(character)).toBe(base)
    }
  })

  it('picks the "_B" node when Math.random >= 0.5 for a character with a "_B" variant', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.5)
    for (const character of CHARACTERS_WITH_INIT_B) {
      const variant = `${character.toUpperCase()}_INIT_B`
      expect(pickInitNode(character)).toBe(variant)
    }
  })

  it('resolves both branches to real passages for every character with a "_B" variant', () => {
    for (const character of CHARACTERS_WITH_INIT_B) {
      const base = vi.spyOn(Math, 'random').mockReturnValue(0)
      const baseNode = pickInitNode(character)
      expect(getPassage(baseNode)).not.toBeNull()
      base.mockRestore()

      const alt = vi.spyOn(Math, 'random').mockReturnValue(0.5)
      const altNode = pickInitNode(character)
      expect(getPassage(altNode)).not.toBeNull()
      alt.mockRestore()
    }
  })

  it('resolves the base node to a real passage for a character without a "_B" variant', () => {
    const spy = vi.spyOn(Math, 'random').mockReturnValue(0.99)
    const node = pickInitNode('denizen')
    expect(node).toBe('DENIZEN_INIT')
    expect(getPassage(node)).not.toBeNull()
    spy.mockRestore()
  })
})
