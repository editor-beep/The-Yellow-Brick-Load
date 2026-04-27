/**
 * YELLOW BRICK LOAD — Passage Registry
 *
 * All passage maps are merged here. The engine looks up nodes
 * by ID from this single flat registry.
 *
 * Characters:
 *   lion      — implemented (rough.docx prose + matrix)
 *   tin_man   — stub (rough.docx prose available, needs wiring)
 *   scarecrow — stub (rough.docx prose starts, needs wiring)
 *   dorothy   — stub
 *   witch_west — stub
 *   wizard    — stub
 *   glinda    — stub
 *   witch_east — stub
 */

import { lionPassages } from './lion.js'

// Ghost Signal — off-grid, character-agnostic
export const ghostSignalPassage = {
  GHOST_SIGNAL: {
    id: 'GHOST_SIGNAL',
    character: null,
    text: [
      {
        minOverrender: 0,
        content: `[ RESIDUAL SIGNAL DETECTED ]

System Status: Persistent.
Interface: Saturated.
Conclusion: Indeterminate.

Goodbye, Unit {{character}}. I'll see you in the next render.

[ SIGNAL TERMINATED ]`,
      },
    ],
    choices: [],
    onEnter: [],
    isEnding: true,
    isGhostSignal: true,
  },
}

export const allPassages = {
  ...lionPassages,
  ...ghostSignalPassage,
  // Future characters drop in here as their passage files are written:
  // ...tinManPassages,
  // ...scarecrowPassages,
  // ...dorothyPassages,
  // ...witchWestPassages,
  // ...wizardPassages,
  // ...glindaPassages,
  // ...witchEastPassages,
}

export function getPassage(id) {
  return allPassages[id] || null
}
