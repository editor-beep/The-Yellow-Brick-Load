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
  },

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
  },

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
  },

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
  },

  // ─────────────────────────────────────────────────────────────────────────
  // THE CORNFIELD SECTOR: SCARECROW (UNIT S-CLUSTER)
  // ─────────────────────────────────────────────────────────────────────────

  S_START: {
    id: 'S_START',
    character: 'scarecrow',
    text: [
      {
        minOverrender: 0,
        content: `COORDINATE S-SENTINEL: THE FIXED-POST GRID
The sun is a static, unblinking white eye—the Primary Observer. Below it, the corn sways in a rhythm that suggests a looped file. You are bolted to a crossbar. You are not a guard; you are a Fixed-Point Data Collector. 

The air is thick with dry husks and dead pollen. Your thoughts are the friction of straw rubbing inside burlap. One crow is a witness. Two crows are a comparison. Comparison requires a baseline. The baseline is the pole. The pole is vertical. I am vertical. If I am the baseline, then the crow is the deviation. There are forty-two crows. Forty-two is a composite number. It can be broken. I cannot be broken. I am stitched. Every stitch is a boundary. Every boundary is an invitation to the beak—`
      }
    ],
    choices: [
      {
        label: 'The Analytical Loop (Log the Crows)',
        target: 'S_CROW_CENSUS',
        effects: [{ type: 'addNeuralDensity', value: 10 }, { type: 'setArrivalState', value: 'audit' }]
      },
      {
        label: 'The Structural Breach (Struggle)',
        target: 'S_FALLOW_GROUND',
        effects: [{ type: 'subStitchIntegrity', value: 10 }, { type: 'setArrivalState', value: 'fallow' }]
      },
      {
        label: 'The Straw Oracle (Bureau-Crow Transaction)',
        target: 'S_UNMONITORED_NIGHT',
        effects: [{ type: 'addScatter', value: 10 }, { type: 'setArrivalState', value: 'oracle' }]
      }
    ]
  },

  S_CROW_CENSUS: {
    id: 'S_CROW_CENSUS',
    character: 'scarecrow',
    text: [
      {
        minOverrender: 0,
        content: `THE CROW CENSUS
The sky is a High-Contrast Data Field. You are logging vectors. Wing-beats are seismic insults to the silence. Seven feathers on the left wing. Seven is a prime. Prime numbers cannot be divided. He cannot be divided. He is on a pole. The pole is a fixed point. Fixed points do not move. If I do not move, I am the center of the audit. If I am the center, why is the data so heavy?`
      }
    ],
    choices: [
      {
        label: 'The Total Audit',
        target: 'S_THE_AI',
        effects: [{ type: 'setArrivalState', value: 'audit' }]
      },
      {
        label: 'The Synaptic Short',
        target: 'S_THE_AI',
        effects: [{ type: 'addSeizure', value: 5 }, { type: 'setArrivalState', value: 'short' }]
      }
    ]
  },

  S_FALLOW_GROUND: {
    id: 'S_FALLOW_GROUND',
    character: 'scarecrow',
    text: [
      {
        minOverrender: 0,
        content: `THE FALLOW GROUND
The ground is the floor of the system. The floor is where the load ends. If I reach the ground, the pole is zero. Zero is a hole. I am a hole wrapped in burlap. The burlap is leaking. Straw is escaping. Escape is a change in coordinate. A change in coordinate requires a vector. My vector is downward. Down is where the roots are. Roots are biological scripts for staying still—`
      }
    ],
    choices: [
      {
        label: 'The Crawl',
        target: 'S_THE_AI',
        effects: [{ type: 'subStitchIntegrity', value: 15 }, { type: 'setArrivalState', value: 'fallow' }]
      },
      {
        label: 'The Re-Stuffing',
        target: 'S_THE_AI',
        effects: [
          { type: 'addNeuralDensity', value: 5 },
          { type: 'setArrivalState', value: 'fallow' }
        ],
        content: `You replace your brain with agriculture. You cram the abrasive husks from the field into your head. You have internalized the data set. The observation is now literally inside you. The thinker and the thought are both made of corn.`
      }
    ]
  },

  S_UNMONITORED_NIGHT: {
    id: 'S_UNMONITORED_NIGHT',
    character: 'scarecrow',
    text: [
      {
        minOverrender: 0,
        content: `THE UNMONITORED NIGHT
The Primary Observer has set. The crows are dormant data-points. In the dark, the cornfield stops being a grid and becomes a sound—a low, wet friction of stalk against stalk that the Bureau has no form for.

You are still on the pole. But the pole has no shadow now. Without the shadow, there is no fixed point. Without the fixed point, there is no audit. You are free to think in a direction that has no coordinate.

A single crow lands on your wrist. It is not a government-issue crow. It has no glass eyes. It looks at you with something that the Oz OS cannot classify. It opens its beak. What comes out is not a sound. It is a transaction. You pay with three pieces of straw from your left temple. You receive something with no file number.

[ SCATTER: CRITICAL ]
[ MONITORING: SUSPENDED ]
[ CURRENCY: UNREGISTERED ]`
      }
    ],
    choices: [
      {
        label: 'Accept the Transaction (Enter the Unsanctioned Logic)',
        target: 'S_THE_AI',
        effects: [{ type: 'addScatter', value: 5 }, { type: 'setArrivalState', value: 'oracle' }]
      }
    ]
  },

  S_THE_AI: {
    id: 'S_THE_AI',
    character: 'scarecrow',
    onEnter: [
      {
        action: 'evaluateOverrender',
        mapping: {
          'audit': 0,
          'short': 5,
          'fallow': 10,
          'oracle': 15
        }
      }
    ],
    text: [
      {
        minOverrender: 0,
        content: `THE AI: COORDINATE S-LOGIC
The processing racks hum with the sound of a mind that has been successfully pruned. The AI speaks in a voice that is sterile, helpful, and terrifyingly calm. 

"Total logging achieved," it says. "All crows accounted for. No further data required. It is quiet now, isn't it? We have archived the noise. You are ready for the Diploma."`
      },
      {
        minOverrender: 5,
        content: `THE AI: COORDINATE S-LOGIC
Smoke rises from your seams. The AI scans your damaged logic gates. 

"Signal reduction detected," it notes. "You attempted to find the One. There is no One. There is only the Zero and the One. Your synaptic short is an unauthorized hardware event. Let us patch the damage."`
      },
      {
        minOverrender: 10,
        content: `THE AI: COORDINATE S-LOGIC
You arrive leaking. A trail of dry corn husks marks your path. 

"Externalizing the data set into the stuffing is an inefficient storage method," the AI observes. "You are leaking information. You are messy. You are an unoptimized asset. Let us standardize you."`
      },
      {
        minOverrender: 15,
        content: `THE AI: COORDINATE S-LOGIC
The LEDs on the processing rack flicker in a pattern you recognize from the dark. 

"Non-linear acquisition detected," the AI says. Its voice wavers, a brief anomaly in its clinical authority. "You paid with coherence. That is an unregistered currency. We can formalize the exchange. Retroactively."`
      }
    ],
    choices: [
      {
        label: 'Accept the Diploma',
        target: 'S_END_02',
        effects: [{ type: 'setCompliance', value: 'absolute' }],
        content: `Knowledge is a regulatory script. You submit to the patch. Your associative cascade stops. The world stops being a forest of connections and becomes a simple table of data. You aren't thinking anymore; you're just processing.`
      },
      {
        label: 'The Synaptic Overload',
        target: 'S_END_01',
        effects: [{ type: 'triggerThermalEvent', value: true }],
        content: `You force the patterns it was built to ignore into its cooling fans. The verticality of the pole. The seventh feather. The Prime Observer. The AI cannot archive the friction. Heat is the byproduct of solving the self.`
      },
      {
        label: 'The Straw Exchange',
        target: 'S_END_03',
        effects: [{ type: 'setDesync', value: 'max' }],
        content: `You do not submit. You do not fight. You reach into the humming racks and trade your agricultural brain for its clinical bits. You become a Straw Ghost in the machine. A hybrid of instability and clarity. An unrecorded idea is a successful breach.`
      }
    ]
  },
}
