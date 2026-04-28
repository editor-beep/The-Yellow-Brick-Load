/**
 * YELLOW BRICK LOAD — Passage Registry
 *
 * All passage maps are merged here. The engine looks up nodes
 * by ID from this single flat registry.
 *
 * Characters:
 *   lion       — implemented (rough.docx prose + matrix)
 *   tin_man    — implemented (Volume 2 init + branches; endings stubbed)
 *   scarecrow  — implemented (Straw Harvest oracle + stub endings)
 *   dorothy    — implemented (Nerve Pull oracle + stub endings)
 *   glinda     — implemented (Porcelain Auditor oracle + stub endings)
 *   wizard     — implemented (Curtain Incision oracle + stub endings)
 *   witch_west — implemented (Obsidian Eye oracle + stub endings)
 *   witch_east — implemented (Gravity Crucible oracle + stub endings)
 *
 * Shared enforcers (cross-character threats):
 *   Munchkin Swarm, Winged Monkeys, Kalidah Merge, Poppy Drones
 */

import { lionPassages } from './lion.js'
import { tinManPassages } from './tin_man.js'
import { scarecrowPassages } from './scarecrow.js'
import { dorothyPassages } from './dorothy.js'
import { glindaPassages } from './glinda.js'
import { wizardPassages } from './wizard.js'
import { witchWestPassages } from './witch_west.js'
import { witchEastPassages } from './witch_east.js'
import { enforcerPassages } from './enforcers.js'

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
  ...tinManPassages,
  ...scarecrowPassages,
  ...dorothyPassages,
  ...glindaPassages,
  ...wizardPassages,
  ...witchWestPassages,
  ...witchEastPassages,
  ...enforcerPassages,
  ...ghostSignalPassage,
}

export function getPassage(id) {
  return allPassages[id] || null
}
