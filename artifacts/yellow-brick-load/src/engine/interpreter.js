/**
 * YELLOW BRICK LOAD — Passage Interpreter
 *
 * A "passage" is a plain JS object with this shape:
 *
 * {
 *   id: 'LION_COURAGE_TEST',
 *   character: 'lion',          // which character this belongs to
 *   text: [                     // array of text blocks (supports overrender variants)
 *     { minOverrender: 0, content: 'The road narrows.' },
 *     { minOverrender: 3, content: 'The road narrows narrows narrows—' },
 *   ],
 *   choices: [
 *     {
 *       label: 'Step forward.',
 *       target: 'LION_ADVANCE',
 *       effects: [
 *         { type: 'addLoad', value: 5 },
 *         { type: 'addDesync', value: 1 },
 *       ],
 *       condition: null,        // optional: fn(state) => bool
 *     },
 *   ],
 *   onEnter: [                  // side effects that fire when passage loads
 *     { type: 'addSmudge', value: 1 },
 *     { type: 'checkGhostSignal' },
 *   ],
 *   fake: false,                // if true, all choices collapse to same target
 *   voiceSwap: {               // optional: character-keyed internal signal text
 *     lion: '...',             //   shown as a separate "voice card" below passage text
 *     dorothy: '...',          //   missing character keys fall back to GENERIC_SYSTEM_VOICE
 *   },                        //   use getVoiceSwapContent(passage, characterId) to resolve
 * }
 *
 * Text content supports simple token replacement:
 *   {{load}}  {{desync}}  {{compliance}}  {{character}}  {{flags.KEY}}
 *   {{warrantLevel}}  {{malice}}  {{thermal}}  {{saturation}}
 *   {{stats.KEY}}  (any top-level state property by name)
 *   {{#flags.KEY}}conditional text{{/flags.KEY}}  (shown only when flag is truthy)
 */

import { useGameStore } from './store.js'
import { getInterloperForCharacter } from '../data/statInterlopers.js'
import { checkAllPersistentFlags, setPersistentFlag } from './store.js'

let _globalResetPending = false

// ── Token replacement ────────────────────────────────────────────────────────
export function interpolate(text, state) {
  return text
    // Conditional blocks: {{#flags.KEY}}content{{/flags.KEY}}
    .replace(/\{\{#flags\.([^}]+)\}\}([\s\S]*?)\{\{\/flags\.\1\}\}/g, (_, key, content) =>
      state.flags && state.flags[key] ? content : ''
    )
    .replace(/{{load}}/g, state.load)
    .replace(/{{desync}}/g, state.desync)
    .replace(/{{compliance}}/g, state.compliance)
    .replace(/{{character}}/g, state.character || 'unit')
    .replace(/{{reset_count}}/g, state.reset_count)
    .replace(/{{smudge}}/g, state.smudge)
    // ── Witch West stat tokens ────────────────────────────────────────────
    .replace(/{{warrantLevel}}/g, state.warrantLevel)
    .replace(/{{malice}}/g, state.malice)
    .replace(/{{thermal}}/g, state.thermal)
    .replace(/{{saturation}}/g, state.saturation)
    // ── Generic {{stats.KEY}} namespace ──────────────────────────────────
    .replace(/{{stats\.([^}]+)}}/g, (_, key) =>
      state[key] !== undefined ? state[key] : ''
    )
    .replace(/{{flags\.([^}]+)}}/g, (_, key) =>
      state.flags && state.flags[key] !== undefined ? state.flags[key] : ''
    )
}

// ── Resolve which text block to show ────────────────────────────────────────
export function resolveText(passage, overrender) {
  const blocks = [...passage.text].sort((a, b) => b.minOverrender - a.minOverrender)
  const active = blocks.find((b) => overrender >= b.minOverrender)
  return active ? active.content : ''
}

// ── Oracle trigger thresholds (keyed by character ID) ───────────────────────
const ORACLE_THRESHOLDS = {
  lion:       (s) => s.vibration     >= 7,
  tin_man:    (s) => s.corrosion     >= 10,
  scarecrow:  (s) => s.scatter       >= 5,
  dorothy:    (s) => s.displacement  >= 5,
  glinda:     (s) => s.refraction    >= 5,
  wizard:     (s) => s.obfuscation   >= 5,
  witch_west: (s) => s.warrantLevel  >= 5,
  witch_east: (s) => s.displacement  >= 3,
}

// Maps character IDs to their oracle entry passage IDs
const ORACLE_ENTRY_NODES = {
  lion:       'LION_ORACLE_ENTRY',
  tin_man:    'TIN_MAN_ORACLE_ENTRY',
  scarecrow:  'SCARECROW_ORACLE_ENTRY',
  dorothy:    'DOROTHY_ORACLE_ENTRY',
  glinda:     'GLINDA_ORACLE_ENTRY',
  wizard:     'WIZARD_ORACLE_ENTRY',
  witch_west: 'WITCH_WEST_ORACLE_ENTRY',
  witch_east: 'WITCH_EAST_ORACLE_ENTRY',
}

/**
 * Returns true when the given character's unique wetware stat has crossed the
 * threshold that triggers their oracle ritual.
 */
export function shouldTriggerOracle(character, state) {
  if (!character) return false
  const check = ORACLE_THRESHOLDS[character]
  return check ? check(state) : false
}

// ── Execute a list of effect descriptors ────────────────────────────────────
export function applyEffects(effects) {
  if (!effects) return
  const store = useGameStore.getState()
  for (const effect of effects) {
    // ── Action-based onEnter descriptors (use `action` property) ────────────
    if (effect.action) {
      _applyAction(effect, store)
      continue
    }
    switch (effect.type) {
      case 'addLoad':            store.addLoad(effect.value); break
      case 'addDesync':          store.addDesync(effect.value); break
      case 'addSmudge':          store.addSmudge(effect.value); break
      case 'addOverrender':      store.addOverrender(effect.value); break
      case 'setCompliance': {
        if (effect.value == null) break
        // Normalise signal-bleed compliance aliases to canonical values
        const complianceMap = {
          baseline: 'low',
          static: 'high',
          none: 'low',
          high: 'high',
          med: 'med',
          low: 'low',
          broken: 'broken',
          absolute: 'broken',
        }
        const normalised = complianceMap[String(effect.value).toLowerCase()] ?? effect.value
        if (normalised === 'high' && String(effect.value).toLowerCase() === 'static') {
          store.setFlag('compliance_locked', true)
        }
        store.setCompliance(normalised)
        break
      }
      case 'setFlag':            store.setFlag(effect.key, effect.value); break
      case 'softReset':          store.softReset(); break
      case 'checkGhostSignal':   store.checkGhostSignal(); break
      case 'armGhostSignal':     store.armGhostSignal(); break
      // ── Wetware stat effects ─────────────────────────────────────────────
      case 'addVibration':       store.addVibration(effect.value); break
      case 'addDesynctear':      store.addDesynctear(effect.value); break
      case 'addCorrosion':       store.addCorrosion(effect.value); break
      case 'addLubrication':     store.addLubrication(effect.value); break
      case 'addSeizure':         store.addSeizure(effect.value); break
      case 'addUtility':         store.addUtility(effect.value); break
      case 'addScatter':         store.addScatter(effect.value); break
      case 'addStitchIntegrity': store.addStitchIntegrity(effect.value); break
      case 'addNeuralDensity':   store.addNeuralDensity(effect.value); break
      case 'addHollowing':       store.addHollowing(effect.value); break
      case 'addDisplacement':    store.addDisplacement(effect.value); break
      case 'addWarrant':         store.addWarrant(effect.value); break
      case 'addSilverFriction':  store.addSilverFriction(effect.value); break
      case 'addSignalStrength':  store.addSignalStrength(effect.value); break
      case 'addRefraction':      store.addRefraction(effect.value); break
      case 'addInsulation':      store.addInsulation(effect.value); break
      case 'addObfuscation':     store.addObfuscation(effect.value); break
      // ── Witch West stat effects ──────────────────────────────────────────
      case 'addMalice':          store.addMalice(effect.value); break
      case 'addThermal':         store.addThermal(effect.value); break
      case 'addSaturation':      store.addSaturation(effect.value); break
      case 'incrementLoopCounter': store.incrementLoopCounter(); break
      case 'checkEndingThreshold': break  // evaluated by UI, no-op here
      case 'checkLoopCount':     break    // evaluated by UI, no-op here
      case 'setSystemStatus':    break    // narrative label, no-op here
      case 'setWetwareStat':     store.setWetwareStat(effect.stat, effect.value); break
      case 'modifyTag':          store.setFlag(`tag_${effect.value}`, true); break
      case 'triggerEvent':       store.setFlag(`event_${effect.value}`, true); break
      // ── Convergence / arrival-state effects ─────────────────────────────
      case 'setArrivalState':    store.setArrivalState(effect.value); break
      case 'setDisplacement': {
        const dval = effect.value === 'max' ? 100 : Number(effect.value)
        if (isNaN(dval)) {
          console.warn(`[YBL] setDisplacement: invalid value "${effect.value}"`)
          break
        }
        store.setDisplacement(dval)
        break
      }
      case 'setDesync': {
        const dsval = effect.value === 'max' ? 100 : Number(effect.value)
        if (isNaN(dsval)) {
          console.warn(`[YBL] setDesync: invalid value "${effect.value}"`)
          break
        }
        store.setDesync(dsval)
        break
      }
      case 'lockLocation':
        // Prevents return-to-hub navigation once a terminal exit ramp is taken
        store.setFlag('location_locked', Boolean(effect.value))
        break
      case 'setPersistentFlag':  setPersistentFlag(effect.key, effect.value !== undefined ? effect.value : true); break
      // ── Shared / Marketing Filter effects ───────────────────────────────
      case 'addCompliance':
        // From problem-statement passage data. Semantically "raise compliance to max"
        // — compliance is a string level, so this maps to setCompliance('high').
        store.setCompliance('high')
        break
      case 'receiveDegradingGift':
        // Initialize a Symbolic Reclassification: durability = 5 transitions
        store.setFlag('degrading_gift_received', true)
        store.setGiftDurability(5)
        break
      case 'triggerSystemCrash':
        // Theorem 23 failure: projection collapses under a hardware demand
        store.addOverrender(5)
        store.addDesync(10)
        store.setCompliance('broken')
        store.addSmudge(3)
        break
      case 'triggerThermalEvent':
        // Searing Grace: the bubble hits the slag — grace as heat at impact velocity
        store.addOverrender(5)
        store.addLoad(30)
        store.addSmudge(3)
        store.setFlag('thermal_event_fired', true)
        break
      case 'globalReset':
        // UNRECOGNIZED CONFIGURATION: total state wipe after a reading delay.
        // Fires hardReset after 8 seconds so the player can read the final prose.
        if (_globalResetPending) break
        _globalResetPending = true
        setTimeout(() => {
          _globalResetPending = false
          useGameStore.getState().hardReset()
        }, 8000)
        break
      // ── Graft / gray-out / unlock effects ───────────────────────────────
      case 'graft':
        // Records cross-character material application: flags.graft_<material>_in_<target>
        store.setFlag(`graft_${effect.material}_in_${effect.target}`, true)
        break
      case 'grayOut':
        // Disables a choice by setting flags.grayOut_<key> = true
        store.setFlag(`grayOut_${effect.key}`, true)
        break
      case 'unlock':
        // Re-enables a previously grayed-out choice
        store.setFlag(`grayOut_${effect.key}`, false)
        break
      // ── Oracle trigger ───────────────────────────────────────────────────
      case 'triggerOracle': {
        const state = useGameStore.getState()
        const { character, flags } = state
        const alreadyTriggered = flags[`oracle_${character}_triggered`]
        if (character && !alreadyTriggered && shouldTriggerOracle(character, state)) {
          store.setFlag(`oracle_${character}_triggered`, true)
          // Show the character's stat interloper card as the popup
          const interloper = getInterloperForCharacter(character)
          if (interloper) {
            store.setOracleCard(interloper)
            // Apply the interloper's game effect immediately
            const fx = interloper.effects ?? (interloper.effect ? [interloper.effect] : null)
            if (fx) applyEffects(fx)
          }
          const entryNode = ORACLE_ENTRY_NODES[character]
          if (entryNode) store.goTo(entryNode)
        }
        break
      }
      default:
        console.warn(`[YBL] Unknown effect type: ${effect.type}`)
    }
  }
}

// ── Handle action-based onEnter descriptors ──────────────────────────────────
function _applyAction(descriptor, store) {
  switch (descriptor.action) {
    case 'checkSecretConfiguration': {
      // Checks four persistent cross-playthrough flags.
      // If all are set, fires onSuccess action.
      const { requirements, onSuccess } = descriptor
      if (requirements && checkAllPersistentFlags(requirements)) {
        if (onSuccess === 'triggerUnrecognizedConfiguration') {
          _triggerUnrecognizedConfiguration(store)
        }
      }
      break
    }
    case 'pushToVisitedBy': {
      // Records that a character has visited the current convergence node.
      store.pushToVisitedBy(descriptor.value)
      break
    }
    case 'evaluateOverrender': {
      // Maps the current arrivalState to an overrender increment and applies it.
      const { mapping } = descriptor
      const state = useGameStore.getState()
      const arrived = state.arrivalState
      if (mapping && arrived != null && mapping[arrived] !== undefined) {
        store.addOverrender(mapping[arrived])
      }
      break
    }
    default:
      console.warn(`[YBL] Unknown action: ${descriptor.action}`)
  }
}

function _triggerUnrecognizedConfiguration(store) {
  store.setFlag('unrecognized_config_triggered', true)
  store.goTo('UNRECOGNIZED_CONFIG')
}

// ── Voice-Swap: Generic System Voice fallback ────────────────────────────────
// Returned when a passage has voiceSwap content but the active character has
// no entry in the swap object — signifies full assimilation into the system.
const GENERIC_SYSTEM_VOICE =
  `[ UNIT: UNCLASSIFIED ] Your frequency is within standard operational parameters. The system has no unique readout for your current designation. Your signal has been normalized. There is nothing to report at this node. Continue your load.`

/**
 * Returns the voice-swap text for a given passage and character.
 *
 * - If the passage has no `voiceSwap` property, returns null (nothing to show).
 * - If `voiceSwap[characterId]` exists, returns that character's unique text.
 * - Otherwise returns GENERIC_SYSTEM_VOICE, indicating the unit has been
 *   fully assimilated and its individual frequency suppressed.
 *
 * @param {object} passage     - The resolved passage object
 * @param {string} characterId - The active character ID (e.g. 'lion', 'tinman')
 * @returns {string|null}
 */
export function getVoiceSwapContent(passage, characterId) {
  if (!passage || !passage.voiceSwap) return null
  const swap = passage.voiceSwap
  if (characterId && Object.prototype.hasOwnProperty.call(swap, characterId)) {
    return swap[characterId]
  }
  return GENERIC_SYSTEM_VOICE
}

// ── Check if a choice is available ──────────────────────────────────────────
export function isChoiceAvailable(choice, state) {
  // showIf: { var: 'visitedBy', contains: 'lion' } — convergence-node visibility
  if (choice.showIf) {
    const { var: varName, contains } = choice.showIf
    if (varName === 'visitedBy') {
      const visitedBy = state.visitedBy || []
      if (!visitedBy.includes(contains)) return false
    }
  }
  if (!choice.condition) return true
  return choice.condition(state)
}
