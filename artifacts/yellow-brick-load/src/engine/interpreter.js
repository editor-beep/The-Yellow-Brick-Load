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
 * }
 *
 * Text content supports simple token replacement:
 *   {{load}}  {{desync}}  {{compliance}}  {{character}}  {{flags.KEY}}
 */

import { useGameStore } from './store.js'

// ── Token replacement ────────────────────────────────────────────────────────
export function interpolate(text, state) {
  return text
    .replace(/{{load}}/g, state.load)
    .replace(/{{desync}}/g, state.desync)
    .replace(/{{compliance}}/g, state.compliance)
    .replace(/{{character}}/g, state.character || 'unit')
    .replace(/{{reset_count}}/g, state.reset_count)
    .replace(/{{smudge}}/g, state.smudge)
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

// ── Execute a list of effect descriptors ────────────────────────────────────
export function applyEffects(effects) {
  if (!effects) return
  const store = useGameStore.getState()
  for (const effect of effects) {
    switch (effect.type) {
      case 'addLoad':       store.addLoad(effect.value); break
      case 'addDesync':     store.addDesync(effect.value); break
      case 'addSmudge':     store.addSmudge(effect.value); break
      case 'addOverrender': store.addOverrender(effect.value); break
      case 'setCompliance': store.setCompliance(effect.value); break
      case 'setFlag':       store.setFlag(effect.key, effect.value); break
      case 'softReset':     store.softReset(); break
      case 'checkGhostSignal': store.checkGhostSignal(); break
      case 'armGhostSignal':   store.armGhostSignal(); break
      default:
        console.warn(`[YBL] Unknown effect type: ${effect.type}`)
    }
  }
}

// ── Check if a choice is available ──────────────────────────────────────────
export function isChoiceAvailable(choice, state) {
  if (!choice.condition) return true
  return choice.condition(state)
}
