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
 *   neuralDensity  — Scarecrow: packed-thought density (signal-bleed stat)
 *   hollowing      — Scarecrow: void expansion (signal-bleed stat)
 *   displacement   — Dorothy: location drift
 *   warrantLevel   — Dorothy: Bureau attention level
 *   silverFriction — Dorothy: slippers charge
 *   signalStrength — Dorothy: Kansas signal amplitude (signal-bleed stat)
 *   rubyFriction   — Dorothy: slipper-road conductive heat (signal-bleed stat)
 *   refraction     — Glinda: light/truth distortion
 *   insulation     — Glinda: protective buffer
 *   obfuscation    — Wizard: smoke-and-mirrors density
 *   malice         — Witch West: surveillance malice intensity
 *   thermal        — Witch West: thermodynamic heat level
 *   saturation     — Witch West: crucible saturation (0–100)
 *   loopCount      — Witch West: deep audit loop counter
 */

import { create } from 'zustand'

export const COMPLIANCE_LEVELS = ['low', 'med', 'high', 'broken']

let _ghostSignalTimerPending = false

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
  oracleCard: null,
  // ── Wetware stats ──────────────────────────────────────────────────────────
  vibration: 0,        // Lion — tremor intensity
  desynctear: 0,       // Lion — cross-character desync bleed
  corrosion: 0,        // Tin Man — oxidation level
  lubrication: 0,      // Tin Man — oil supply
  seizure: 0,          // Tin Man — joint-lock severity
  utility: 0,          // Tin Man — functional value rating
  scatter: 0,          // Scarecrow — straw dispersal
  stitchIntegrity: 0,  // Scarecrow — seam cohesion
  neuralDensity: 0,    // Scarecrow — packed-thought density (signal-bleed)
  hollowing: 0,        // Scarecrow — void expansion (signal-bleed)
  displacement: 0,     // Dorothy — location drift
  warrantLevel: 0,     // Dorothy — Bureau attention level
  silverFriction: 0,   // Dorothy — slippers charge
  signalStrength: 0,   // Dorothy — Kansas signal amplitude (signal-bleed)
  rubyFriction: 0,     // Dorothy — slipper-road conductive heat (signal-bleed)
  refraction: 0,       // Glinda — light/truth distortion
  insulation: 0,       // Glinda — protective buffer
  obfuscation: 0,      // Wizard — smoke-and-mirrors density
  giftDurability: 0,  // Shared — degrading gift integrity (5 when gifted; 0 = corrupted)
  malice: 0,           // Witch West — surveillance malice intensity
  thermal: 0,          // Witch West — thermodynamic heat level
  saturation: 0,       // Witch West — crucible saturation (0–100)
  loopCount: 0,        // Witch West — deep audit loop counter
}

export const useGameStore = create((set, get) => ({
  ...INITIAL_STATE,

  // ── Navigation ──────────────────────────────────────────────────────────
  goTo: (nodeId) => {
    const { history, currentNode, flags, giftDurability } = get()
    const nextState = {
      currentNode: nodeId,
      history: currentNode ? [...history, currentNode] : history,
    }
    // Degrade the Symbolic Reclassification gift on every node transition
    if (flags.degrading_gift_received && giftDurability > 0) {
      const newDurability = giftDurability - 1
      nextState.giftDurability = newDurability
      if (newDurability <= 0) {
        nextState.flags = { ...flags, gift_corrupted: true }
      }
    }
    set(nextState)
  },

  // ── Character Selection ──────────────────────────────────────────────────
  selectCharacter: (character) => {
    if (!character) return
    let initNode = `${character.toUpperCase()}_INIT`
    if (character === 'witch_west') {
      initNode = Math.random() < 0.5 ? 'WITCH_WEST_INIT' : 'WITCH_WEST_INIT_B'
      markWitchWestInitSeen(initNode)
    }
    incrementCharacterPlayCount(character)
    set({ character, currentNode: initNode })
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
  addNeuralDensity:  (n) => set((s) => ({ neuralDensity:  s.neuralDensity  + n })),
  addHollowing:      (n) => set((s) => ({ hollowing:      s.hollowing      + n })),
  addDisplacement:   (n) => set((s) => ({ displacement:   s.displacement   + n })),
  addWarrant:        (n) => set((s) => ({ warrantLevel:   s.warrantLevel   + n })),
  addSilverFriction: (n) => set((s) => ({ silverFriction: s.silverFriction + n })),
  addSignalStrength: (n) => set((s) => ({ signalStrength: s.signalStrength + n })),
  addRubyFriction:   (n) => set((s) => ({ rubyFriction:   s.rubyFriction   + n })),
  addRefraction:     (n) => set((s) => ({ refraction:     s.refraction     + n })),
  addInsulation:     (n) => set((s) => ({ insulation:     s.insulation     + n })),
  addObfuscation:    (n) => set((s) => ({ obfuscation:    s.obfuscation    + n })),
  addGiftDurability: (n) => set((s) => ({ giftDurability: Math.max(0, s.giftDurability + n) })),
  setGiftDurability: (n) => set({ giftDurability: n }),
  addMalice:         (n) => set((s) => ({ malice:         s.malice         + n })),
  addThermal:        (n) => set((s) => ({ thermal:        s.thermal        + n })),
  addSaturation:     (n) => set((s) => ({ saturation:     Math.min(100, s.saturation + n) })),
  incrementLoopCounter: () => set((s) => ({ loopCount: s.loopCount + 1 })),
  setWetwareStat:    (stat, val) => set({ [stat]: val }),

  // ── Soft Reset ───────────────────────────────────────────────────────────
  /**
   * Partially resets game state and increments reset_count.
   * Note: `history` is intentionally preserved across a soft reset — it
   * represents the player's cumulative path and should persist for
   * narrative/condition purposes.
   */
  softReset: () => {
    const { character } = get()
    let initNode = `${character.toUpperCase()}_INIT`
    if (character === 'witch_west') {
      initNode = Math.random() < 0.5 ? 'WITCH_WEST_INIT' : 'WITCH_WEST_INIT_B'
    }
    set((s) => ({
      load: 0,
      desync: Math.max(0, s.desync - 1),
      smudge: 0,
      compliance: 'high',
      reset_count: s.reset_count + 1,
      overrender: 0,
      currentNode: initNode,
    }))
  },

  // ── Oracle Card ──────────────────────────────────────────────────────────
  setOracleCard: (card) => set({ oracleCard: card }),
  dismissOracleCard: () => set({ oracleCard: null }),

  // ── Ghost Signal ─────────────────────────────────────────────────────────
  armGhostSignal: () => set({ ghostSignalArmed: true }),
  fireGhostSignal: () => set({ ghostSignalFired: true, currentNode: 'GHOST_SIGNAL' }),

  // ── Check Ghost Signal Conditions ────────────────────────────────────────
  checkGhostSignal: () => {
    const { smudge, desync, compliance, reset_count, ghostSignalArmed, ghostSignalFired } = get()
    if (ghostSignalFired || ghostSignalArmed || _ghostSignalTimerPending) return
    if (smudge >= 2 && desync >= 3 && compliance === 'broken' && reset_count === 0) {
      set({ ghostSignalArmed: true })
      _ghostSignalTimerPending = true
      setTimeout(() => {
        _ghostSignalTimerPending = false
        if (!get().ghostSignalFired) get().fireGhostSignal()
      }, 60000) // 60s silent delay
    }
  },

  // ── Full Reset (new game) ────────────────────────────────────────────────
  hardReset: () => set({ ...INITIAL_STATE }),
}))

// ── Dev-only debug handle ───────────────────────────────────────────────
// Exposes the store on `window.__yblStore` for browser-console debugging
// and end-to-end testing of overlays (e.g. injecting an oracleCard
// without walking the full passage graph). Stripped from production
// builds via the import.meta.env.DEV gate.
if (typeof window !== 'undefined' && import.meta.env?.DEV) {
  window.__yblStore = useGameStore
}

// ── Residual Signal (localStorage persistence) ──────────────────────────────
export const RESIDUAL_KEY = 'ybl_visited'
export const VISIT_COUNT_KEY = 'ybl_visit_count'
export const CHARACTER_PLAY_COUNTS_KEY = 'ybl_character_play_counts'
export const WITCH_WEST_INIT_SEEN_KEY = 'ybl_witch_west_init_seen'
export const PERSISTENT_FLAGS_KEY = 'ybl_persistent_flags'

const ALL_CHARACTERS = ['lion', 'tin_man', 'scarecrow', 'dorothy', 'witch_west', 'witch_east', 'glinda', 'wizard']

function readJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key)
    if (!raw) return fallback
    return JSON.parse(raw)
  } catch {
    return fallback
  }
}

function writeJSON(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

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

export function getCharacterPlayCounts() {
  const stored = readJSON(CHARACTER_PLAY_COUNTS_KEY, {})
  const counts = {}
  for (const id of ALL_CHARACTERS) counts[id] = Number(stored[id] || 0)
  return counts
}

export function incrementCharacterPlayCount(character) {
  if (!character) return
  const counts = getCharacterPlayCounts()
  counts[character] = (counts[character] || 0) + 1
  writeJSON(CHARACTER_PLAY_COUNTS_KEY, counts)
}

export function getWitchWestInitSeen() {
  return readJSON(WITCH_WEST_INIT_SEEN_KEY, { initA: false, initB: false })
}

export function markWitchWestInitSeen(initNode) {
  const seen = getWitchWestInitSeen()
  if (initNode === 'WITCH_WEST_INIT') seen.initA = true
  if (initNode === 'WITCH_WEST_INIT_B') seen.initB = true
  writeJSON(WITCH_WEST_INIT_SEEN_KEY, seen)
}

// ── Persistent Cross-Playthrough Flags ──────────────────────────────────────
// These flags survive hard resets and new-game sessions (localStorage only).
// Currently used by: STANDING INSTRUCTION — THE UNRECOGNIZED CONFIGURATION.
//   lion_refused_reset, tinman_touched_axe, scarecrow_straw_exchange, dorothy_direct_line

export function getPersistentFlags() {
  return readJSON(PERSISTENT_FLAGS_KEY, {})
}

export function setPersistentFlag(key, value = true) {
  const flags = getPersistentFlags()
  flags[key] = value
  writeJSON(PERSISTENT_FLAGS_KEY, flags)
}

export function hasPersistentFlag(key) {
  return !!getPersistentFlags()[key]
}

export function checkAllPersistentFlags(keys) {
  const flags = getPersistentFlags()
  return keys.every((k) => !!flags[k])
}
