/**
 * YELLOW BRICK LOAD — Passage Registry
 *
 * All passage maps are merged here. The engine looks up nodes
 * by ID from this single flat registry.
 *
 * Each character's passages are split into three files:
 *   _branches  — init, path choices, hub passages
 *   _endings   — all isEnding: true passages
 *   _oracle    — ORACLE_ENTRY, ORACLE_DRAW, ORACLE_1–8
 *
 * Shared enforcers (cross-character threats):
 *   Munchkin Swarm, Winged Monkeys, Kalidah Merge, Poppy Drones
 *
 * Shared node architecture (cross-character story hubs):
 *   Z_WIZARDS_HALL, SHARED_UNMOORED_NIGHT, and supporting stubs
 */

import { lionBranchPassages }      from './lion_branches.js'
import { lionEndingPassages }       from './lion_endings.js'
import { lionOraclePassages }       from './lion_oracle.js'

import { tinManBranchPassages }     from './tin_man_branches.js'
import { tinManEndingPassages }     from './tin_man_endings.js'
import { tinManOraclePassages }     from './tin_man_oracle.js'

import { scarecrowBranchPassages }  from './scarecrow_branches.js'
import { scarecrowEndingPassages }  from './scarecrow_endings.js'
import { scarecrowOraclePassages }  from './scarecrow_oracle.js'

import { dorothyBranchPassages }    from './dorothy_branches.js'
import { dorothyEndingPassages }    from './dorothy_endings.js'
import { dorothyOraclePassages }    from './dorothy_oracle.js'

import { glindaBranchPassages }     from './glinda_branches.js'
import { glindaEndingPassages }     from './glinda_endings.js'
import { glindaOraclePassages }     from './glinda_oracle.js'

import { wizardBranchPassages }     from './wizard_branches.js'
import { wizardEndingPassages }     from './wizard_endings.js'
import { wizardOraclePassages }     from './wizard_oracle.js'

import { witchWestBranchPassages }  from './witch_west_branches.js'
import { witchWestEndingPassages }  from './witch_west_endings.js'
import { witchWestOraclePassages }  from './witch_west_oracle.js'

import { witchEastBranchPassages }  from './witch_east_branches.js'
import { witchEastEndingPassages }  from './witch_east_endings.js'
import { witchEastOraclePassages }  from './witch_east_oracle.js'

import { denizenBranchPassages }    from './denizen_branches.js'
import { denizenEndingPassages }    from './denizen_endings.js'

import { enforcerPassages }         from './enforcers.js'
import { sharedPassages }            from './shared_passages.js'

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
  ...lionBranchPassages,    ...lionEndingPassages,    ...lionOraclePassages,
  ...tinManBranchPassages,  ...tinManEndingPassages,  ...tinManOraclePassages,
  ...scarecrowBranchPassages, ...scarecrowEndingPassages, ...scarecrowOraclePassages,
  ...dorothyBranchPassages, ...dorothyEndingPassages, ...dorothyOraclePassages,
  ...glindaBranchPassages,  ...glindaEndingPassages,  ...glindaOraclePassages,
  ...wizardBranchPassages,  ...wizardEndingPassages,  ...wizardOraclePassages,
  ...witchWestBranchPassages, ...witchWestEndingPassages, ...witchWestOraclePassages,
  ...witchEastBranchPassages, ...witchEastEndingPassages, ...witchEastOraclePassages,
  ...denizenBranchPassages, ...denizenEndingPassages,
  ...enforcerPassages,
  ...sharedPassages,
  ...ghostSignalPassage,
}

export function getPassage(id) {
  return allPassages[id] || null
}
