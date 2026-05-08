/**
 * YELLOW BRICK LOAD — The Denizen (Unit DN-09) Branch Passages
 * Character: denizen
 */

export const denizenBranchPassages = {
  DENIZEN_INIT: {
    id: 'DENIZEN_INIT',
    character: 'denizen',
    text: [
      {
        minOverrender: 0,
        content: `THE ANONYMITY PROTOCOL

You are a unit of negligible mass. You do not have a name; you have a shift. The sky over the Munchkin Sector is bruised violet, heavy with fermented grain and carbon-paper damp.

Thirty near-identical units stoop in rhythm around you. This is the Harvest. Stalk by stalk, you reorganize organic data into Bureau silos while a Winged Monkey circles above, recording compliance.

To be seen is to be audited. To be audited is to be deleted.`,
      },
    ],
    choices: [
      {
        label: 'Keep your head down (Increase Anonymity)',
        target: 'DENIZEN_WORK_LOOP',
        effects: [
          { type: 'addLoad', value: 2 },
          { type: 'setCompliance', value: 'high' },
        ],
      },
      {
        label: 'Look up at the Auditor (Risk Signal Leak)',
        target: 'DENIZEN_AUDIT_TRIGGER',
        effects: [
          { type: 'addDesync', value: 2 },
          { type: 'addSmudge', value: 1 },
        ],
      },
    ],
    onEnter: [],
  },

  DENIZEN_WORK_LOOP: {
    id: 'DENIZEN_WORK_LOOP',
    character: 'denizen',
    text: [
      {
        minOverrender: 0,
        content: `THE HARVEST OF SMALL THINGS

The grain cuts your hands and the soil accepts the blood as ordinary lubricant. Unit D-77 beside you begins to rattle, near structural failure.

If you help, you inherit the load. If you ignore them, they become Slag and the rhythm holds.`,
      },
    ],
    choices: [
      {
        label: 'Absorb D-77’s load (Communal Error)',
        target: 'DENIZEN_END_STRESS_TEST',
        effects: [
          { type: 'addLoad', value: 8 },
          { type: 'addDesync', value: 1 },
        ],
      },
      {
        label: 'Maintain rhythm (Standardized Output)',
        target: 'DENIZEN_END_COMPACTED',
        effects: [
          { type: 'setCompliance', value: 'high' },
        ],
      },
    ],
    onEnter: [],
  },

  DENIZEN_AUDIT_TRIGGER: {
    id: 'DENIZEN_AUDIT_TRIGGER',
    character: 'denizen',
    text: [
      {
        minOverrender: 0,
        content: `THE AUDIT OF THE WHISPER

You looked up. A brass-winged monkey descends and places a red work-order stamp on your forehead. Your shift is reclassified as Stress Testing.

The other units never stop moving.`,
      },
    ],
    choices: [
      {
        label: 'Accept reallocation',
        target: 'DENIZEN_END_STRESS_TEST',
        effects: [
          { type: 'addDesync', value: 2 },
          { type: 'setCompliance', value: 'broken' },
        ],
      },
    ],
    onEnter: [],
  },
}
