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
        content: `THE GRAVITY ADMINISTRATOR — ARCHIVE ACCESS

  You are accessing an archived instance. Unit E-00 — the Wicked Witch of the East — was removed from active status when a Coordinate [Kansas, Coordinate-Null] residential structure executed an unauthorized kinetic event at Munchkin Landing Zone 7. The unit is no longer present. The archive runs from the last twelve hours of operation.

  You are the Gravitational Operator. You manage the weight of things. The Munchkins operate under your administrative gravity — their compact bodies, their stout legs, their small movements — all are governed by the gravitational field you project. Silver shoes, silver regulatory filings, silver authority.

  [ ARCHIVE INSTANCE: ACTIVE ]
  [ LAST SESSION: PRE-HOUSE IMPACT ]
  [ GRAVITY FIELD: STANDARD ]
  [ NOTE: THE HOUSE IS APPROACHING ]

  The displacement counter is already high. Something is moving that should not be moving. Something is falling that is not weather. The Weight Assessor has been dispatched for an emergency assay. There is very little time.`,
      },
    ],
    choices: [
      {
        label: 'Begin the assay — run the Gravity Crucible before impact.',
        target: 'WITCH_EAST_ORACLE_ENTRY',
        effects: [
          { type: 'addDisplacement', value: 3 },
          { type: 'addLoad', value: 5 },
        ],
      },
      {
        label: 'Attempt to redirect the falling mass — deploy regulatory pressure.',
        target: 'WITCH_EAST_PATH_GRAVITY',
        effects: [
          { type: 'addWarrant', value: 3 },
          { type: 'addDisplacement', value: 2 },
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
        label: 'Attempt evacuation — route toward the silver shoes transfer.',
        target: 'WITCH_EAST_END_SHOES',
        effects: [
          { type: 'addDisplacement', value: 5 },
          { type: 'addLoad', value: 15 },
        ],
      },
    ],
    onEnter: [{ type: 'triggerOracle' }],
  },
}
