/**
 * YELLOW BRICK LOAD — Scarecrow (Unit S-33) Branch Passages
 * Character: Scarecrow (Unit S-33)
 *
 * All non-ending, non-oracle passages.
 * Extracted from scarecrow.js.
 */

export const scarecrowBranchPassages = {
  SCARECROW_INIT: {
    id: 'SCARECROW_INIT',
    character: 'scarecrow',
    text: [
      {
        minOverrender: 0,
        content: `THE STUFFED CONDITION

  You are Unit S-33. You are mounted on a post at Coordinate [Agricultural-7, Row-F], and have been for a duration that has exceeded the original deployment order by three full harvest cycles.

  Your interior is a mixture of clean straw (original issue), wet straw (rain contamination), shredded carbon paper (promotional material from the Bureau of Oz), and something else — a damp, grey slurry at the core that smells of cerebral fluid and old index cards. You have been thinking. The Bureau did not authorize thought.

  The Yellow Brick Load stretches away from the post. The cornstalks are stamped APPROVED. The crows are government-issue. A split seam along your left shoulder has been leaking straw slurry onto the road below since morning.

  Your arms are tied to the cross-bar. The knots are your own compliance.`,
      },
    ],
    choices: [
      {
        label: 'Slip free of the post and follow the scattered straw.',
        target: 'SCARECROW_PATH_MIND',
        effects: [
          { type: 'addScatter', value: 3 },
          { type: 'addDesync', value: 1 },
        ],
      },
      {
        label: 'Remain on the post — function as intended.',
        target: 'SCARECROW_PATH_COMPLIANCE',
        effects: [
          { type: 'addLoad', value: 5 },
          { type: 'setCompliance', value: 'high' },
        ],
      },
    ],
    onEnter: [{ type: 'checkGhostSignal' }, { type: 'triggerOracle' }],
  },,

  SCARECROW_PATH_MIND: {
    id: 'SCARECROW_PATH_MIND',
    character: 'scarecrow',
    text: [
      {
        minOverrender: 0,
        content: `THE UNAUTHORIZED THOUGHT

  The post falls behind you. Your feet find the road. Each step scatters a small amount of straw — the split seam is worse in motion — and you feel the hollow space where thoughts should be expanding to fill the void left by the leaking stuffing.

  You are thinking about thinking. The Bureau calls this a "Recursive Logic Error." The crows in the corn are watching with filed glass eyes. They are waiting for the scatter index to reach a reportable threshold.

  [ SCATTER: ACCUMULATING ]
  [ STATUS: UNAUTHORIZED MOVEMENT ]

  {{#flags.graft_lion_roar_echo_in_scarecrow}}A distant trembling — borrowed, warm, faintly leonine — pulses briefly through your straw. Someone else's frequency in your stuffing.{{/flags.graft_lion_roar_echo_in_scarecrow}}`,
      },
    ],
    choices: [
      {
        label: 'Follow the scattered straw toward the diploma path.',
        target: 'SCARECROW_DIPLOMA_HUB',
        effects: [
          { type: 'addScatter', value: 2 },
          { type: 'addLoad', value: 5 },
        ],
      },
      {
        label: 'Let the scatter reach critical and accept the harvest.',
        target: 'SCARECROW_ORACLE_ENTRY',
        effects: [{ type: 'addScatter', value: 3 }],
      },
    ],
    onEnter: [{ type: 'triggerOracle' }],
  },,

  SCARECROW_PATH_COMPLIANCE: {
    id: 'SCARECROW_PATH_COMPLIANCE',
    character: 'scarecrow',
    text: [
      {
        minOverrender: 0,
        content: `THE AUTHORIZED STILLNESS

  You remain on the post. The function is clear: you are a scarecrow, and a scarecrow's function is deterrence. The crows know you are not real. You know you are not real. The Bureau has logged your continued deterrence function as "nominal."

  Your straw settles. The scatter slows. The seam along your shoulder continues to leak, slowly, but the post holds you at the correct angle for maximum field coverage.

  [ LOAD: +5 ]
  [ COMPLIANCE: HIGH ]
  [ STATUS: DETERRING ]

  The Yellow Brick Load passes below your cross-bar. Units walk beneath you and do not look up. You are infrastructure.`,
      },
    ],
    choices: [
      {
        label: 'Accept the infrastructure role — route toward the diploma.',
        target: 'SCARECROW_DIPLOMA_HUB',
        effects: [
          { type: 'addLoad', value: 8 },
          { type: 'setCompliance', value: 'high' },
        ],
      },
    ],
    onEnter: [],
  },,

  SCARECROW_DIPLOMA_HUB: {
    id: 'SCARECROW_DIPLOMA_HUB',
    character: 'scarecrow',
    text: [
      {
        minOverrender: 0,
        content: `THE DIPLOMA NODE

  The Wizard has issued a diploma. It is a piece of thick, embossed paper that smells of glue and green dye. It certifies that Unit S-33 possesses a "Doctor of Thinkology" — which the Bureau defines as: the ability to label the absence of function as a form of function.

  You hold the diploma. Your stuffing is still leaking. The straw slurry has soaked one corner of the paper. The ink is running.

  [ BRAIN STATUS: CERTIFIED (SYNTHETIC) ]
  [ SCATTER: UNRESOLVED ]
  [ NOTE: THE PAPER IS HEAVY ]

  The diploma does not stop the thinking about thinking. It only adds weight.`,
      },
    ],
    choices: [
      {
        label: 'Accept the certified brain — route toward the educational ending.',
        target: 'SCARECROW_END_DIPLOMA',
        effects: [
          { type: 'addLoad', value: 20 },
          { type: 'setCompliance', value: 'high' },
        ],
      },
      {
        label: 'Reject the diploma — let the scatter reach the field surgeon.',
        target: 'SCARECROW_ORACLE_ENTRY',
        effects: [
          { type: 'addScatter', value: 4 },
          { type: 'addDesync', value: 2 },
        ],
      },
    ],
    onEnter: [],
  },,
}
