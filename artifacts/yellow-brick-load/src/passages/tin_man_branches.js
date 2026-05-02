/**
 * YELLOW BRICK LOAD — Tin Man (Unit T-88) Branch Passages
 * Character: Tin Man (Unit T-88)
 *
 * All non-ending, non-oracle passages.
 * Extracted from tin_man.js.
 */

export const tinManBranchPassages = {
  TIN_MAN_INIT: {
    id: "TIN_MAN_INIT",
    character: "tinman",
    text: [
      {
        minOverrender: 0,
        content: `THE SEIZED STATE

You are Unit T-88. You have been standing at Coordinate [42.1, -85.5] for a duration that has outlasted the original warranty of your joints.

The rain has performed a slow audit of your exterior, replacing the silver luster with a blooming, orange necrosis of rust. Inside the tin, there is a flicker—a residual heat from the 'Wetware' that once occupied this space. It is a ghost-signal of a girl, a house, and the scent of damp sawdust.

The Hardware demands stillness to prevent further structural failure. The Wetware demands a scream that your rusted diaphragm cannot execute.

The Girl with the silver shoes stands before you, holding a pressurized canister of Grade-A Industrial Lubricant.`,
      },
    ],
    choices: [
      {
        label: "Prioritize Wetware: Attempt to remember the name 'Nick'.",
        target: "T_PATH_WETWARE",
        effects: [
          { type: "addSmudge", value: 10 },
          { type: "addCorrosion", value: 5 },
        ],
      },
      {
        label: "Prioritize Hardware: Submit to the Oil Can for optimal utility.",
        target: "T_PATH_HARDWARE",
        effects: [
          { type: "setCompliance", value: "high" },
          { type: "addLubrication", value: 15 },
        ],
      },
    ],
    onEnter: [{ type: "checkGhostSignal" }, { type: "triggerOracle" }],
  },

  T_PATH_WETWARE: {
    id: "T_PATH_WETWARE",
    character: "tinman",
    text: [
      {
        minOverrender: 0,
        content: `THE RESIDUAL MEAT

You bypass the logic gates of the tin shell and reach into the unlit basement of your memory. The name 'Nick' vibrates against your copper wires like a short circuit.

This is an 'Illegal Operation.'

By prioritizing the wetware, you force the rusted joints to move without lubrication. The sound is a high-decibel shriek of metal-on-metal—a mechanical agony that the system logs as 'Sentimental Residue.'

"I... felt... something," you grind out. The Girl looks at you with a mix of pity and technical curiosity.

You have gained a soul-fragment, but you have stripped the threading on your primary elbow joint.`,
      },
    ],
    choices: [
      {
        label: "Request a Heart to stabilize the Wetware.",
        target: "T_END_01",
        effects: [{ type: "addLoad", value: 10 }],
      },
      {
        label: "Let the memory burn until you seize again.",
        target: "T_END_02",
        effects: [{ type: "addCorrosion", value: 20 }],
      },
    ],
    onEnter: [],
  },

  T_PATH_HARDWARE: {
    id: "T_PATH_HARDWARE",
    character: "tinman",
    text: [
      {
        minOverrender: 0,
        content: `THE OPTIMIZED SHELL

You ignore the phantom itch of the meat-memory. You are a vessel. You are a tool.

You open your jaw-hinge to receive the lubricant. The oil coats the oxidized flakes, suppressing the friction and silencing the 'Nick' signal. The system returns to a 60fps Range of Motion.

You are now fully indexed as a Labor Unit. The void in your chest is no longer an ache; it is simply a displacement of air that makes you more aerodynamic for the coming task.`,
      },
    ],
    choices: [
      {
        label: "Report for Duty at the Logging Script.",
        target: "T_END_21",
        effects: [{ type: "setCompliance", value: "absolute" }],
      },
      {
        label: "Ask for a Heart as a performance-enhancing patch.",
        target: "T_END_03",
        effects: [{ type: "addUtility", value: 10 }],
      },
    ],
    onEnter: [],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // THE WOODS SECTOR: TIN MAN (UNIT T-CLUSTER)
  // ─────────────────────────────────────────────────────────────────────────

  T_WOODS_START: {
    id: 'T_WOODS_START',
    character: 'tinman',
    text: [
      {
        minOverrender: 0,
        content: `THE LOW-FIDELITY FOREST
The trees here are rendered in a resolution that suggests the Oz OS has forgotten the purpose of shade. The air smells of wet gypsum and oxygen-starved mulch. You are standing in Sector West, a zone where biological assets are flagged for 'De-prioritization.'

Your internal sensors detect a Cache Collision. This is not a memory of a life; it is a system conflict between the 'Nick Chopper' data-legacy and your current metallic housing. The forest floor is a slurry of grey mud and carbon paper.`
      }
    ],
    choices: [
      {
        label: 'Seek the source.',
        target: 'T_FELLED_TREE',
        effects: [{ type: 'addLoad', value: 2 }, { type: 'setPath', value: 'wetware' }]
      },
      {
        label: 'Locate maintenance.',
        target: 'T_OIL_STATION',
        effects: [{ type: 'addCompliance', value: 2 }, { type: 'setPath', value: 'hardware' }]
      }
    ]
  },

  T_FELLED_TREE: {
    id: 'T_FELLED_TREE',
    character: 'tinman',
    text: [
      {
        minOverrender: 0,
        content: `COORDINATE T-X77: THE INDEXED WOUND
The tree is no longer biological; it is a Static Data Point rendered in high-contrast grayscale. Lodged in its center is the axe. It is not a tool. It is the Auditor's Gavel.

It vibrates at the frequency of a closed file. Standing here triggers a Seizure Check. The friction of the coordinate—the literal emotional resistance of this space—is drying your joints. Every second you remain costs Lubrication.`
      }
    ],
    choices: [
      {
        label: 'Touch the Axe (Audit the Impact)',
        target: 'T_HOUSE_NEVER_WAS',
        effects: [{ type: 'addSeizure', value: 5 }, { type: 'addDesync', value: 3 }]
      },
      {
        label: 'File a Dispute (Judicial Protocol)',
        target: 'T_PILE_OF_LIMBS',
        effects: [
          { type: 'addLoad', value: 8 },
          { type: 'setArrivalState', value: 'dispute' }
        ]
      },
      {
        label: 'Pull the Axe (The Kinetic Harvest)',
        target: 'T_PILE_OF_LIMBS',
        effects: [
          { type: 'subLubrication', value: 10 },
          { type: 'setArrivalState', value: 'extraction' }
        ]
      }
    ]
  },

  T_HOUSE_NEVER_WAS: {
    id: 'T_HOUSE_NEVER_WAS',
    character: 'tinman',
    text: [
      {
        minOverrender: 0,
        content: `THE HOUSE THAT NEVER WAS
The walls are the color of unpolished zinc and smell of a construction site abandoned mid-breath. This is an architectural glitch—a home rendered from a corrupted cache. The floorboards do not meet the walls.

You are searching for a User Signal (Nimmie Amee), but the registry is empty. There is only a High-Frequency Silence that tastes like cold metal.`
      }
    ],
    choices: [
      {
        label: 'Occupy the Blueprint',
        target: 'T_END_01',
        effects: [{ type: 'setCompliance', value: 'high' }]
      },
      {
        label: 'Deconstruct the Walls',
        target: 'T_PILE_OF_LIMBS',
        effects: [
          { type: 'addDesync', value: 10 },
          { type: 'setArrivalState', value: 'ghost_signal' }
        ]
      },
      {
        label: 'Trigger Maintenance Log (The Bureau-Crow Query)',
        target: 'T_END_06',
        effects: [
          { type: 'addLoad', value: 5 },
          { type: 'setCompliance', value: 'absolute' }
        ]
      }
    ]
  },

  T_OIL_STATION: {
    id: 'T_OIL_STATION',
    character: 'tinman',
    text: [
      {
        minOverrender: 0,
        content: `COORDINATE T-LUBE: MAINTENANCE KIOSK
Hoses fray overhead like dead vines. Iridescent sludge coats the ground. The station does not offer relief; it offers an exchange. You can hear the system humming, waiting for your authorization code.`
      }
    ],
    choices: [
      {
        label: 'The Automated Patch',
        target: 'T_LOGGING_SCRIPT',
        effects: [{ type: 'addCompliance', value: 5 }, { type: 'addLubrication', value: 5 }]
      },
      {
        label: 'The Manual Scavenge',
        target: 'T_LOGGING_SCRIPT',
        effects: [{ type: 'addCorrosion', value: 5 }, { type: 'subCompliance', value: 2 }]
      }
    ]
  },

  T_LOGGING_SCRIPT: {
    id: 'T_LOGGING_SCRIPT',
    character: 'tinman',
    text: [
      {
        minOverrender: 0,
        content: `THE LOGGING SCRIPT
The 'trees' here are vertical columns of compressed carbon paper. When you strike them, they do not splinter; they produce a sound like a filing cabinet slamming shut. You are caught in an iterative labor loop.`
      }
    ],
    choices: [
      {
        label: 'Efficiency Optimization',
        target: 'T_HOLLOW',
        effects: [{ type: 'addLoad', value: 5 }, { type: 'subVibration', value: 3 }]
      },
      {
        label: 'Mechanical Jam',
        target: 'T_HOLLOW',
        effects: [{ type: 'addSeizure', value: 5 }, { type: 'setPath', value: 'error' }]
      }
    ]
  },

  T_HOLLOW: {
    id: 'T_HOLLOW',
    character: 'tinman',
    text: [
      {
        minOverrender: 0,
        content: `THE HOLLOW (COORDINATE T-VOID)
An atmospheric puncture. The Oz OS has stopped rendering environmental detail. There is only a flat, grey plane and the sound of your own internal cooling fans. You are a hollow vessel (Theorem 7).`
      }
    ],
    choices: [
      {
        label: 'The Internal Echo',
        target: 'T_PILE_OF_LIMBS',
        effects: [{ type: 'setArrivalState', value: 'surplus' }]
      },
      {
        label: 'The Diagnostic Query',
        target: 'T_PILE_OF_LIMBS',
        effects: [{ type: 'setArrivalState', value: 'grave' }]
      }
    ]
  },

  T_PILE_OF_LIMBS: {
    id: 'T_PILE_OF_LIMBS',
    character: 'tinman',
    onEnter: [
      {
        // surplus path sees industrial waste; all other paths (the informed/the wounded) see the grave
        action: 'evaluateOverrender',
        mapping: {
          'surplus': 0,
          'grave': 5,
          'ghost_signal': 5,
          'dispute': 5,
          'extraction': 5
        }
      }
    ],
    text: [
      {
        minOverrender: 0,
        content: `THE PILE OF LIMBS (INDUSTRIAL SURPLUS)
You arrive at a mountain of discarded components. These are standardized valves and hydraulic struts, identical to your own. You strike your chest and the sound matches the resonance of the pile. You are walking over a history of failed maintenance cycles. This is not a graveyard; it is an overstocked warehouse of your own obsolescence.`
      },
      {
        minOverrender: 5,
        content: `THE PILE OF LIMBS (THE MASS GRAVE)
The system's audit trail leads here. These are not just parts; they are 'Meat Legacies.' You see the transition from organic to tin frozen in the rust. The pile is a vertical record of every time a part of 'Nick' was traded for a part of 'Unit T.' The metallic fingers seem to twitch in the flickering light.`
      }
    ],
    choices: [
      {
        label: 'The Self-Inventory',
        target: 'T_END_13',
        effects: [{ type: 'addLoad', value: 10 }],
        content: `You reach into the scrap and pull out a heart-shaped clock. It is rusted shut—a timepiece that can no longer measure anything but the decay of the void.`
      },
      {
        label: 'Re-Integration',
        target: 'T_END_20',
        effects: [{ type: 'addLubrication', value: 10 }, { type: 'addDesync', value: 5 }]
      },
      {
        label: 'The Pyre',
        target: 'T_END_19',
        effects: [{ type: 'triggerThermalEvent', value: true }],
        content: `You strike your heel against the iron. You don't want the parts; you want the friction. As the pile ignites, the heat begins to soften your joints. Heat is the final empathy the system allows.`
      }
    ]
  },
}
