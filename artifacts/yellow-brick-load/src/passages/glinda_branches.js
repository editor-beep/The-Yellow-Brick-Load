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

  // ─────────────────────────────────────────────────────────────────────────
  // SECTOR NORTH: THE PINK SMOG & THE DESCENT (GLINDA)
  // ─────────────────────────────────────────────────────────────────────────

  G_PINK_SMOG: {
    id: 'G_PINK_SMOG',
    // character: 'shared' — the Pink Smog is the cross-character dampening node
    // (Sector North). It is architecturally part of Glinda's tree but can be
    // reached from multiple character paths, hence the 'shared' designation.
    character: 'shared',
    text: [
      {
        minOverrender: 0,
        content: `THE PINK SMOG: METEOROLOGICAL DAMPENING
The air is a suspended floral sediment. It is warm, soft, and tastes of artificial grace. In the smog, the Yellow Brick Load loses its hard edges. The cracks in the slag are filled with light. 

This is the system's primary buffer. Compliance here doesn't feel like a choice; it feels like safety. You are not being silenced; you are being 'aligned.' The load is still there, but the smog ensures you no longer have the bandwidth to resent it.`
      }
    ],
    choices: [
      {
        label: 'Accept the Alignment',
        target: 'G_END_05',
        effects: [
          // setSystemStatus is a narrative label (no-op in interpreter.js);
          // it records the system state for rendering purposes only.
          { type: 'setSystemStatus', value: 'shrouded' }
        ]
      }
    ]
  },

  G_THE_DESCENT: {
    id: 'G_THE_DESCENT',
    character: 'glinda',
    text: [
      {
        minOverrender: 0,
        content: `COORDINATE G-DESCEND: THE RESOLUTION FAILURE
The bubble descends. The altitude fails. For the first time, the pastels wash away and the resolution hits 1:1. You see the road. You see the Tin Man's biological rust. You see Dorothy—not as a child, but as a unit being harvested for the city's projection. 

You see the Transmitter wire buried in her neck. You see the blood on the slag. And because you have no other script, you smile. "Oh, that looks like quite a journey, dear," you say, your voice a perfect, sterile hum. "Have you tried aligning your frequency with the available infrastructure?"`
      }
    ],
    choices: [
      {
        label: 'Re-Elevate (Maintain the Miracle)',
        target: 'G_END_04',
        effects: [{ type: 'addCompliance', value: 30 }],
        content: `You cannot process the resolution, so you restore the blur. You pull the bubble back into the clouds where the suffering looks like a beautiful, static pattern again.`
      },
      {
        label: 'The Searing Grace',
        target: 'G_END_28',
        effects: [{ type: 'triggerThermalEvent', value: true }],
        content: `You cannot live with what you have seen. You force the bubble into the slag. Grace is the heat that remains when the script fails.`
      }
    ]
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
