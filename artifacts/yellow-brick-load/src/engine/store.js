/**
 * YELLOW BRICK LOAD — Game Engine
 * State machine for the behavioral trap.
 *
 * Variables:
 *   load         — progress bar fill (0–100). Never reaches 100.
 *   desync       — system drift counter. Affects rendering.
 *   smudge       — visual corruption level (0–3).
 *   compliance   — "low" | "med" | "high" | "broken"
 *   reset_count  — how many times player has soft-reset
 *   overrender   — text decay level (0–5)
 *   character    — which of the 8 characters is active
 *   currentNode  — passage ID currently rendered
 *   history      — ordered list of visited node IDs
 *   flags        — arbitrary boolean flags for plot state
 */

import { create } from 'zustand'

export const COMPLIANCE_LEVELS = ['low', 'med', 'high', 'broken']

const INITIAL_STATE = {
  load: 0,
  desync: 0,
  smudge: 0,
  compliance: 'med',
  reset_count: 0,
  overrender: 0,
  character: null,
  currentNode: null,
  history: [],
  flags: {},
  ghostSignalArmed: false,
  ghostSignalFired: false,
}

export const useGameStore = create((set, get) => ({
  ...INITIAL_STATE,

  // ── Navigation ──────────────────────────────────────────────────────────
  goTo: (nodeId) => {
    const { history, currentNode } = get()
    set({
      currentNode: nodeId,
      history: currentNode ? [...history, currentNode] : history,
    })
  },

  // ── Character Selection ──────────────────────────────────────────────────
  selectCharacter: (character) => {
    set({ character, currentNode: `${character.toUpperCase()}_INIT` })
  },

  // ── State Mutations ──────────────────────────────────────────────────────
  addLoad: (n) => set((s) => ({ load: Math.min(99, s.load + n) })),
  addDesync: (n) => set((s) => ({ desync: s.desync + n })),
  addSmudge: (n) => set((s) => ({ smudge: Math.min(3, s.smudge + n) })),
  addOverrender: (n) => set((s) => ({ overrender: Math.min(5, s.overrender + n) })),
  setCompliance: (level) => set({ compliance: level }),
  setFlag: (key, val = true) => set((s) => ({ flags: { ...s.flags, [key]: val } })),

  // ── Soft Reset ───────────────────────────────────────────────────────────
  /**
   * Partially resets game state and increments reset_count.
   * Note: `history` is intentionally preserved across a soft reset — it
   * represents the player's cumulative path and should persist for
   * narrative/condition purposes.
   */
  softReset: () => {
    const { reset_count, character } = get()
    set({
      load: 0,
      desync: Math.max(0, get().desync - 1),
      smudge: 0,
      compliance: 'high',
      reset_count: reset_count + 1,
      overrender: 0,
      currentNode: `${character.toUpperCase()}_INIT`,
    })
  },

  // ── Ghost Signal ─────────────────────────────────────────────────────────
  armGhostSignal: () => set({ ghostSignalArmed: true }),
  fireGhostSignal: () => set({ ghostSignalFired: true, currentNode: 'GHOST_SIGNAL' }),

  // ── Check Ghost Signal Conditions ────────────────────────────────────────
  checkGhostSignal: () => {
    const { smudge, desync, compliance, reset_count, ghostSignalArmed, ghostSignalFired } = get()
    if (ghostSignalFired || ghostSignalArmed) return
    if (smudge >= 2 && desync >= 3 && compliance === 'broken' && reset_count === 0) {
      set({ ghostSignalArmed: true })
      setTimeout(() => {
        if (!get().ghostSignalFired) get().fireGhostSignal()
      }, 60000) // 60s silent delay
    }
  },

  // ── Full Reset (new game) ────────────────────────────────────────────────
  hardReset: () => set({ ...INITIAL_STATE }),
}))

// ── Residual Signal (localStorage persistence) ──────────────────────────────
export const RESIDUAL_KEY = 'ybl_visited'
export const VISIT_COUNT_KEY = 'ybl_visit_count'

export function markVisit() {
  const count = parseInt(localStorage.getItem(VISIT_COUNT_KEY) || '0', 10)
  localStorage.setItem(RESIDUAL_KEY, 'true')
  localStorage.setItem(VISIT_COUNT_KEY, String(count + 1))
}

export function getVisitCount() {
  return parseInt(localStorage.getItem(VISIT_COUNT_KEY) || '0', 10)
}

export function hasVisited() {
  return localStorage.getItem(RESIDUAL_KEY) === 'true'
}
