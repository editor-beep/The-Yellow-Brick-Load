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
}
