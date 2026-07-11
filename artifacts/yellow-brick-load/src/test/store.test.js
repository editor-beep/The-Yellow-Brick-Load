import { describe, it, expect, beforeEach, vi } from 'vitest'
import { useGameStore } from '../engine/store.js'

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
