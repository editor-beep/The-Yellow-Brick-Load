/**
 * YELLOW BRICK LOAD — Glinda (Refraction Operator) Branch Passages
 * Character: Glinda (Refraction Operator)
 *
 * All non-ending, non-oracle passages.
 * Extracted from glinda.js.
 */

export const glindaBranchPassages = {
  GLINDA_INIT: {
    id: 'GLINDA_INIT',
    character: 'glinda',
    text: [
      {
        minOverrender: 0,
        content: `THE GOOD WITCH PROTOCOL

  You are the Refraction Operator. You bend vectors without breaking them. You redirect through indirect lens influence, which the Bureau of Oz classifies as "Mercy" and the Oz OS Manual classifies as "Authorized Civilian Manipulation."

  Your function is grace. Grace requires visible perfection. The subdermal tubing carries a fluid that is not quite blood — a refined mixture of lymph, signal residue, and synthetic lilac — that the Bureau uses to maintain the porcelain surface. The tubing is visible if you look closely. Most do not look closely. That is part of the function.

  [ REFRACTION OPERATOR: ACTIVE ]
  [ GRACE PROTOCOL: RUNNING ]
  [ MERCY CALIBRATION: DUE ]

  The units below you are small and far away. They require guidance. Guidance requires a lens, and you are the lens. The bubble membrane around your wrists catches the green Oz light and bends it into pink.

  {{#flags.graft_glinda_filament_in_lion}}A thin pink thread pulses inside the jaw of a Lion unit somewhere on the road below — your filament, previously grafted, still transmitting grace.{{/flags.graft_glinda_filament_in_lion}}`,
      },
    ],
    choices: [
      {
        label: 'Descend to administer direct mercy calibration.',
        target: 'GLINDA_ORACLE_ENTRY',
        effects: [
          { type: 'addRefraction', value: 3 },
          { type: 'addLoad', value: 5 },
        ],
      },
      {
        label: 'Observe from altitude — maintain the insulating distance.',
        target: 'GLINDA_PATH_ALTITUDE',
        effects: [
          { type: 'addInsulation', value: 5 },
          { type: 'addRefraction', value: 1 },
        ],
      },
    ],
    onEnter: [{ type: 'checkGhostSignal' }, { type: 'triggerOracle' }],
  },

  GLINDA_PATH_ALTITUDE: {
    id: 'GLINDA_PATH_ALTITUDE',
    character: 'glinda',
    text: [
      {
        minOverrender: 0,
        content: `THE ALTITUDE POSITION

  You maintain the high-altitude perspective. The bubble membrane keeps you insulated from the details — the trembling Lion-units, the leaking Tin Men, the scattering Scarecrows — they are all legible from here as vectors, as tendencies, as trajectories that can be gently redirected.

  [ INSULATION: HIGH ]
  [ REFRACTION: BUILDING ]
  [ UNITS BELOW: MANAGEABLE ]

  The mercy is real from up here. The distance makes it clean. The subdermal tubing hums with the refined fluid. The lilac scent is stronger at altitude — it has nothing to compete with. You observe the Yellow Brick Load as a system of gentle corrections waiting to happen.

  {{#flags.graft_lion_compliance_stamp_in_lion}}The Bureau Crow's stamp on a Lion unit below pulses briefly — your refracted influence has already shaped that junction.{{/flags.graft_lion_compliance_stamp_in_lion}}`,
      },
    ],
    choices: [
      {
        label: 'Descend when refraction reaches critical — the oracle waits.',
        target: 'GLINDA_ORACLE_ENTRY',
        effects: [
          { type: 'addRefraction', value: 3 },
          { type: 'addInsulation', value: -2 },
        ],
      },
      {
        label: 'Remain at altitude — route toward atmospheric drift ending.',
        target: 'GLINDA_END_DRIFT',
        effects: [
          { type: 'addInsulation', value: 10 },
          { type: 'addRefraction', value: 5 },
        ],
      },
    ],
    onEnter: [{ type: 'triggerOracle' }],
  },
}
