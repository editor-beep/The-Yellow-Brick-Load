/**
 * YELLOW BRICK LOAD — Game Engine
 * State machine for the behavioral trap.
 *
 * Variables:
 *   load           — progress bar fill (0–100). Never reaches 100.
 *   desync         — system drift counter. Affects rendering.
 *   smudge         — visual corruption level (0–3).
 *   compliance     — "low" | "med" | "high" | "broken"
 *   reset_count    — how many times player has soft-reset
 *   overrender     — text decay level (0–5)
 *   character      — which of the 8 characters is active
 *   currentNode    — passage ID currently rendered
 *   history        — ordered list of visited node IDs
 *   flags          — arbitrary boolean flags for plot state
 *
 * Wetware stats (character-specific, initialized to 0):
 *   vibration      — Lion: tremor intensity
 *   desynctear     — Lion: cross-character desync bleed
 *   corrosion      — Tin Man: oxidation level
 *   lubrication    — Tin Man: oil supply
 *   seizure        — Tin Man: joint-lock severity
 *   utility        — Tin Man: functional value rating
 *   scatter        — Scarecrow: straw dispersal
 *   stitchIntegrity — Scarecrow: seam cohesion
 *   displacement   — Dorothy: location drift
 *   warrantLevel   — Dorothy: Bureau attention level
 *   rubyFriction   — Dorothy: slippers charge
 *   refraction     — Glinda: light/truth distortion
 *   insulation     — Glinda: protective buffer
 *   obfuscation    — Wizard: smoke-and-mirrors density
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
  // ── Wetware stats ──────────────────────────────────────────────────────────
  vibration: 0,        // Lion — tremor intensity
  desynctear: 0,       // Lion — cross-character desync bleed
  corrosion: 0,        // Tin Man — oxidation level
  lubrication: 0,      // Tin Man — oil supply
  seizure: 0,          // Tin Man — joint-lock severity
  utility: 0,          // Tin Man — functional value rating
  scatter: 0,          // Scarecrow — straw dispersal
  stitchIntegrity: 0,  // Scarecrow — seam cohesion
  displacement: 0,     // Dorothy — location drift
  warrantLevel: 0,     // Dorothy — Bureau attention level
  rubyFriction: 0,     // Dorothy — slippers charge
  refraction: 0,       // Glinda — light/truth distortion
  insulation: 0,       // Glinda — protective buffer
  obfuscation: 0,      // Wizard — smoke-and-mirrors density
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

  // ── Wetware Stat Mutations ────────────────────────────────────────────────
  addVibration:      (n) => set((s) => ({ vibration:      s.vibration      + n })),
  addDesynctear:     (n) => set((s) => ({ desynctear:     s.desynctear     + n })),
  addCorrosion:      (n) => set((s) => ({ corrosion:      s.corrosion      + n })),
  addLubrication:    (n) => set((s) => ({ lubrication:    s.lubrication    + n })),
  addSeizure:        (n) => set((s) => ({ seizure:        s.seizure        + n })),
  addUtility:        (n) => set((s) => ({ utility:        s.utility        + n })),
  addScatter:        (n) => set((s) => ({ scatter:        s.scatter        + n })),
  addStitchIntegrity:(n) => set((s) => ({ stitchIntegrity:s.stitchIntegrity + n })),
  addDisplacement:   (n) => set((s) => ({ displacement:   s.displacement   + n })),
  addWarrant:        (n) => set((s) => ({ warrantLevel:   s.warrantLevel   + n })),
  addRubyFriction:   (n) => set((s) => ({ rubyFriction:   s.rubyFriction   + n })),
  addRefraction:     (n) => set((s) => ({ refraction:     s.refraction     + n })),
  addInsulation:     (n) => set((s) => ({ insulation:     s.insulation     + n })),
  addObfuscation:    (n) => set((s) => ({ obfuscation:    s.obfuscation    + n })),
  setWetwareStat:    (stat, val) => set({ [stat]: val }),

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
