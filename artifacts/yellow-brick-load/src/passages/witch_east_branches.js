/**
 * YELLOW BRICK LOAD — Witch East (Unit E-00) Branch Passages
 * Character: Witch East (Unit E-00)
 *
 * All non-ending, non-oracle passages.
 * Extracted from witch_east.js.
 */

export const witchEastBranchPassages = {
  WITCH_EAST_INIT: {
    id: 'WITCH_EAST_INIT',
    character: 'witch_east',
    text: [
      {
        minOverrender: 0,
        content: `COORDINATE 0-0: THE ASSAY BEGINS

Log begins at T-minus reset. You are Unit E-Cluster, the primary enforcer of Sector East. The sky is no longer a meteorological event; it is a falling mass of unindexed wood and gray displacement.

The system has called for an audit. Gravity is the only auditor that doesn't accept bribes. You have seconds to calibrate the impact. Will you run the Crucible, or will you attempt to redirect the payload? 1-1 = ...calculating.`,
      },
    ],
    choices: [
      {
        label: 'Begin the assay — run the Gravity Crucible before impact.',
        target: 'WITCH_EAST_ORACLE_ENTRY',
        effects: [
          { type: 'addLoad', value: 20 },
          { type: 'addDisplacement', value: 3 },
        ],
      },
      {
        label: 'Attempt to redirect the falling mass — deploy regulatory pressure.',
        target: 'WITCH_EAST_PATH_GRAVITY',
        effects: [
          { type: 'addWarrant', value: 5 },
          { type: 'addDisplacement', value: 2 },
        ],
      },
      {
        label: 'Pre-file the post-mortem — accept the deletion before it occurs.',
        target: 'WITCH_EAST_PATH_COORD_00',
        effects: [
          { type: 'addLoad', value: 25 },
          { type: 'addDisplacement', value: 5 },
          { type: 'setCompliance', value: 'high' },
        ],
      },
    ],
    onEnter: [{ type: 'checkGhostSignal' }, { type: 'triggerOracle' }],
  },

  WITCH_EAST_PATH_GRAVITY: {
    id: 'WITCH_EAST_PATH_GRAVITY',
    character: 'witch_east',
    text: [
      {
        minOverrender: 0,
        content: `THE GRAVITATIONAL DEPLOYMENT

  The gravity field projects outward in expanding rings of bureaucratic pressure. The Munchkins sink slightly lower. The yellow bricks press harder into the earth. The displacement field from the incoming object is catalogued as "Unauthorized Kinetic Event — Class: Residential."

  [ GRAVITATIONAL FIELD: MAXIMUM ]
  [ DISPLACEMENT: ESCALATING ]
  [ INCOMING: RESIDENTIAL STRUCTURE ]
  [ NOTE: MAXIMUM GRAVITY WILL NOT STOP THE HOUSE ]

  The Weight Assessor is sprinting across the field with its mass-measurement clamps extended. The archive timestamp reads: seventeen minutes remaining. The silver shoes have already registered the weight of the incoming structure — they know, even if you haven't been officially notified yet.

  The gravity field presses down. The house presses down harder.`,
      },
    ],
    choices: [
      {
        label: 'Maintain the field until impact — read the displacement pattern.',
        target: 'WITCH_EAST_ORACLE_ENTRY',
        effects: [
          { type: 'addDisplacement', value: 3 },
          { type: 'addDesync', value: 1 },
        ],
      },
      {
        label: 'Attempt evacuation and secure the silver shoes.',
        target: 'WITCH_EAST_END_SHOES',
        effects: [
          { type: 'addDisplacement', value: 5 },
          { type: 'addLoad', value: 15 },
        ],
      },
      {
        label: 'Collapse the field early — let the Coordinate go to post-mortem audit.',
        target: 'WITCH_EAST_PATH_COORD_00',
        effects: [
          { type: 'addLoad', value: 20 },
          { type: 'addDesync', value: 2 },
          { type: 'addWarrant', value: 6 },
        ],
      },
    ],
    onEnter: [{ type: 'triggerOracle' }],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // COORDINATE 0-0: THE CONVERGENCE NODE (POST-MORTEM)
  // The only node where the Ending has already happened.
  // ─────────────────────────────────────────────────────────────────────────

  WITCH_EAST_PATH_COORD_00: {
    id: 'WITCH_EAST_PATH_COORD_00',
    character: 'witch_east',
    text: [
      {
        minOverrender: 0,
        content: `COORDINATE 0-0: THE IMPACT SITE — POST-MORTEM AUDIT

Impact detected. Log begins at T-minus zero. The house is not a building; it is a kinetic payload. I am the first and final auditor of the structure. I am being measured by the earth. 1-1 = 0. No, 1-1 = 1. The residue is conductive. Can you hear the slippers humming in the dark?

The deletion has already occurred. The end has already happened. What remains is Residual Magnetism — Theorem 21 — the conductive charge left in the slag of the impact site after the kinetic payload arrived.

[ UNIT E-00 // STATUS: DELETED ]
[ ARCHIVE: ACTIVE — POST-MORTEM SESSION ]
[ RESIDUAL MAGNETISM: DETECTABLE ]
[ COORDINATE: 0-0 ]

You are not the administrator. You are the recording of the administrator's deletion. The house is still here, geometrically. The slippers are still here, humming. The Weight Assessor stands at the perimeter with its clamps extended, awaiting classification.

Three audit paths are available. The deletion must be categorized.`
      }
    ],
    choices: [
      {
        label: 'The Forensic Audit — reconstruct the final moments (Gravity as Auditor)',
        target: 'WITCH_EAST_END_CRUSH',
        effects: [
          { type: 'addDisplacement', value: 5 },
          { type: 'addWarrant', value: 5 },
        ],
        content: `You examine the gravitational data. The weight differentials. The trajectory. Theorem 20: Gravity as Auditor. You reconstruct the administrator's final arc and find what the Bureau did not file: this was not an accident. This was a System-Wide Reset.`
      },
      {
        label: 'The Slipper Transfer — focus on the Conductive Artifact (Residual Magnetism)',
        target: 'WITCH_EAST_END_GHOST',
        effects: [
          { type: 'addDisplacement', value: 3 },
          { type: 'addSilverFriction', value: 10 },
        ],
        content: `You do not look at the body. You look at what survived the meat-deletion. Theorem 21: Residual Magnetism. The slippers hum with the administrator's entire gravitational archive, waiting for a new custodian. You become the instruction set.`
      },
      {
        label: 'The System Denial — refuse deletion, persist as Ghost Bit',
        target: 'WITCH_EAST_END_GHOST_BIT',
        effects: [
          { type: 'addDesync', value: 8 },
          { type: 'setFlag', key: 'witch_east_ghost_bit', value: true },
        ],
        content: `You refuse to be categorized. You stay in the Residual Magnetism of the impact site, neither filed nor erased. An error at Coordinate 0-0. The Weight Assessor cannot classify you. The Bureau cannot log you. You exist as a permanent ghost bit in the slag.`
      }
    ],
    onEnter: [{ type: 'triggerOracle' }],
  },
}
