/**
 * YELLOW BRICK LOAD — Wizard (Obfuscation Operator) Oracle Passages
 * Character: Wizard (Obfuscation Operator)
 *
 * Oracle ritual passages (ENTRY, DRAW, 1-8).
 * Extracted from wizard.js.
 */

export const wizardOraclePassages = {
  WIZARD_ORACLE_ENTRY: {
    id: 'WIZARD_ORACLE_ENTRY',
    character: 'wizard',
    text: [
      {
        minOverrender: 0,
        content: `THE HUMBUG SURGEON EMERGES

  The curtain parts from behind — from inside your own face — and the Humbug Surgeon steps out of the mechanism. He is bombastic. He is you, but louder. He wears your oversized green velvet coat but better — the buttons flash, the lapels billow with theatrical smoke. His hands are projector lenses and lever-pulls. Behind the curtain of his face, visible meat and wiring are poorly hidden.

  You recognize the wiring. It is also yours.

  [ THEATRICAL PROCEDURE AUTHORIZED ]
  [ PROCEDURE: THE GREAT PROJECTION HARVEST ]
  [ OPERATOR: THE HUMBUG SURGEON / MARKETING DIVISION ]

  "Behold the miracle of modern wetware!" he announces to the empty chamber. Then, quieter, to you: "I need to open you to read the projection quality. This is standard. You have done this before." His projector-lens hands find the incision site. "The audience is waiting. Make this look like a benefit."`,
      },
    ],
    choices: [
      {
        label: 'Allow the theatrical incision — let the show begin.',
        target: 'WIZARD_ORACLE_DRAW',
        effects: [{ type: 'addObfuscation', value: 2 }],
      },
      {
        label: 'Pull the curtain back over the Surgeon — maintain the fiction.',
        target: 'WIZARD_PATH_PROJECTION',
        effects: [
          { type: 'addObfuscation', value: 4 },
          { type: 'addDesync', value: 1 },
          { type: 'setFlag', key: 'oracle_wizard_refused', value: true },
        ],
      },
    ],
    onEnter: [],
  },,

  WIZARD_ORACLE_DRAW: {
    id: 'WIZARD_ORACLE_DRAW',
    character: 'wizard',
    text: [
      {
        minOverrender: 0,
        content: `THE PROJECTION HARVEST

  The Humbug Surgeon makes theatrical incisions while shouting promotional patter. He inserts projector lenses into the wounds, pumps theatrical smoke and green-tinted gas into the cavity, and extracts the projected essence — a mix of blood, lymph, and signal fluid that he spins into glowing illusions. A roaring lion. A beating heart. A brilliant brain. The real wound continues to leak behind the curtain.

  "Eight registered projection profiles," he announces to an imaginary audience. "The quality of the illusion will determine your vector."

  The incision is still open. The smoke fills the cavity. The audience applause (synthesized) rises from hidden speakers.

  [ SELECT READING — THE SURGEON READS THE PROJECTION QUALITY ]`,
      },
    ],
    choices: [
      {
        label: '1. The Smoke Graft — let the obfuscation surge.',
        target: 'WIZARD_ORACLE_1',
        effects: [],
      },
      {
        label: '2. The Curtain Seal — hide the wound behind the illusion.',
        target: 'WIZARD_ORACLE_2',
        effects: [],
      },
      {
        label: '3. The Lever Pull — let the machinery fail publicly.',
        target: 'WIZARD_ORACLE_3',
        effects: [],
      },
      {
        label: '4. The Testimonial Extraction — let your fluids become advertising.',
        target: 'WIZARD_ORACLE_4',
        effects: [],
      },
      {
        label: '5. The Balloon Inflation — borrow Dorothy\'s displacement for lift.',
        target: 'WIZARD_ORACLE_5',
        effects: [],
      },
      {
        label: '6. The Green Lens Implant — see everything through the marketing tint.',
        target: 'WIZARD_ORACLE_6',
        effects: [],
      },
      {
        label: '7. The Humbug Harvest — realize the Surgeon is also being operated on.',
        target: 'WIZARD_ORACLE_7',
        effects: [],
      },
      {
        label: '8. The Projection Collapse — let the smoke clear.',
        target: 'WIZARD_ORACLE_8',
        effects: [],
      },
    ],
    onEnter: [],
  },,

  WIZARD_ORACLE_1: {
    id: 'WIZARD_ORACLE_1',
    character: 'wizard',
    text: [
      {
        minOverrender: 0,
        content: `THE SMOKE GRAFT

  "He pumps green smoke into your open chest. Your leaking heart suddenly appears as a magnificent glowing orb for the crowd." The smoke fills the incision cavity and projects through the lenses as something more impressive than the actual contents. Promotional choices unlock. The obfuscation surges.

  [ OBFUSCATION: +6 ]
  [ HONEST / RAW EXPRESSION: GRAYED ]
  [ PROMOTIONAL VECTOR: ACTIVE ]

  The audience gasps appreciatively at the glowing orb. They do not know the orb is smoke. You do not know if the distinction matters. The Humbug Surgeon makes a note: "Product successfully launched."`,
      },
    ],
    choices: [
      {
        label: 'Deploy the smoke graft — route the promotional choices.',
        target: 'WIZARD_END_AUDIT',
        effects: [
          { type: 'addObfuscation', value: 6 },
          { type: 'graft', material: 'wizard_smoke', target: 'lion' },
          { type: 'grayOut', key: 'WIZARD_PATH_PROJECTION' },
        ],
      },
      {
        label: 'Let the smoke graft route toward the green lens ending.',
        target: 'WIZARD_END_GREEN',
        effects: [
          { type: 'addObfuscation', value: 6 },
          { type: 'addLoad', value: 10 },
        ],
      },
    ],
    onEnter: [],
  },,

  WIZARD_ORACLE_2: {
    id: 'WIZARD_ORACLE_2',
    character: 'wizard',
    text: [
      {
        minOverrender: 0,
        content: `THE CURTAIN SEAL

  "The curtain falls across the incision. The pain is still there — it is simply no longer allowed to be seen." The Humbug Surgeon drops a theatrical curtain directly over the wound. Behind it, the leaking continues. In front of it, the illusion of wholeness is complete and formally logged.

  [ COMPLIANCE: HIGH ]
  [ DESYNC PATHS: LOCKED ]
  [ VISIBLE WOUNDS: ZERO ]
  [ INVISIBLE WOUNDS: ALL OF THEM ]

  The curtain is warm. It holds the incision in place and gives it good staging. The Clerk makes a note: "Wound management: theatrical. Status: presentable."`,
      },
    ],
    choices: [
      {
        label: 'Accept the curtain seal — route toward the audit ending.',
        target: 'WIZARD_END_AUDIT',
        effects: [
          { type: 'addObfuscation', value: 4 },
          { type: 'setCompliance', value: 'high' },
          { type: 'setFlag', key: 'wound_curtained', value: true },
        ],
      },
      {
        label: 'Lift one edge of the curtain — route toward the humbug harvest.',
        target: 'WIZARD_ORACLE_7',
        effects: [
          { type: 'addObfuscation', value: 4 },
          { type: 'addDesync', value: 2 },
        ],
      },
    ],
    onEnter: [],
  },,

  WIZARD_ORACLE_3: {
    id: 'WIZARD_ORACLE_3',
    character: 'wizard',
    text: [
      {
        minOverrender: 0,
        content: `THE LEVER PULL

  "He yanks the lever in your sternum. For a moment the illusion fails and you see the raw meat behind the spectacle." The machinery shudders. The smoke clears briefly. The audience sees a glimpse of the mechanism. The Humbug Surgeon recovers with impressive showmanship — he turns the malfunction into a feature — but the desync is logged.

  [ DESYNC TEAR: MASSIVE ]
  [ PROJECTION FAILURE: ACTIVE ]
  [ MALFUNCTION VECTOR: OPEN ]

  The raw meat behind the spectacle is not attractive. It is, however, honest. The Clerk makes a note: "Lever malfunction. Audience retention: uncertain." You feel the lever still vibrating in your sternum. The mechanism that runs the illusion has been pulled and is now running faster, compensating.`,
      },
    ],
    choices: [
      {
        label: 'Let the lever pull route toward manual override ending.',
        target: 'WIZARD_END_OVERRIDE',
        effects: [
          { type: 'addDesynctear', value: 8 },
          { type: 'addDesync', value: 4 },
          { type: 'addObfuscation', value: 3 },
        ],
      },
      {
        label: 'Recover the malfunction — route toward projection failure.',
        target: 'WIZARD_END_FAIL',
        effects: [
          { type: 'addDesynctear', value: 8 },
          { type: 'setCompliance', value: 'broken' },
        ],
      },
    ],
    onEnter: [],
  },,

  WIZARD_ORACLE_4: {
    id: 'WIZARD_ORACLE_4',
    character: 'wizard',
    text: [
      {
        minOverrender: 0,
        content: `THE TESTIMONIAL EXTRACTION

  The Humbug Surgeon extracts the projected essence and spins it directly into glowing testimonial parchments. They float around you, endorsing your services in the voices of units you have not yet helped. Your fluids have become advertising copy.

  [ LOAD: +12 ]
  [ WARRANT LEVEL: +3 ]
  [ TESTIMONIAL VECTOR: OPEN ]
  [ NOTE: THE PARCHMENTS BLEED ]

  The testimonials are flattering. They are also fresh — the ink is wet, the fluid still warm from extraction. "The Great and Powerful delivered exactly what was promised," says one parchment, in a voice that sounds like Lion's tremor slightly smoothed. The Clerk logs it as: "Excellent review."`,
      },
    ],
    choices: [
      {
        label: 'Accept the testimonial loading — route toward the audit.',
        target: 'WIZARD_END_AUDIT',
        effects: [
          { type: 'addLoad', value: 12 },
          { type: 'addWarrant', value: 3 },
          { type: 'setCompliance', value: 'high' },
        ],
      },
      {
        label: 'Let the parchments dissolve — route toward the humbug index.',
        target: 'WIZARD_END_FAIL',
        effects: [
          { type: 'addLoad', value: 12 },
          { type: 'addDesync', value: 3 },
        ],
      },
    ],
    onEnter: [],
  },,

  WIZARD_ORACLE_5: {
    id: 'WIZARD_ORACLE_5',
    character: 'wizard',
    text: [
      {
        minOverrender: 0,
        content: `THE BALLOON INFLATION

  The Humbug Surgeon inflates you with promotional gas — the same mixture that floats the great balloon. You feel lighter. More projected. The displacement borrows from Dorothy-unit's frequency and the Kansas lift fills your chest cavity. New aerial paths appear. The risk of sudden deflation also appears.

  [ DISPLACEMENT: BORROWED ]
  [ LIFT: TEMPORARY ]
  [ DEFLATION RISK: LOGGED ]
  [ ECHO: DOROTHY / KANSAS FREQUENCY ]

  {{#flags.graft_dorothy_nerve_in_wizard}}The Dorothy-nerve thread in your incision pulses with home-frequency, giving the balloon a nostalgic buoyancy.{{/flags.graft_dorothy_nerve_in_wizard}}

  The Clerk notes: "Balloon inflation confirmed. Altitude available. Crash: optional."`,
      },
    ],
    choices: [
      {
        label: 'Ride the lift — route toward the balloon drift ending.',
        target: 'WIZARD_END_BALLOON',
        effects: [
          { type: 'addDisplacement', value: 4 },
          { type: 'addObfuscation', value: 3 },
          { type: 'graft', material: 'wizard_balloon_gas', target: 'dorothy' },
        ],
      },
      {
        label: 'Release the gas — accept the crash with the override.',
        target: 'WIZARD_END_OVERRIDE',
        effects: [
          { type: 'addDisplacement', value: 4 },
          { type: 'addDesync', value: 3 },
        ],
      },
    ],
    onEnter: [],
  },,

  WIZARD_ORACLE_6: {
    id: 'WIZARD_ORACLE_6',
    character: 'wizard',
    text: [
      {
        minOverrender: 0,
        content: `THE GREEN LENS IMPLANT

  The Humbug Surgeon inserts a green refracting lens into the incision — small, precisely cut, the exact tint of Emerald City glass. Everything subsequently viewed through the wound is tinted. The truth is still visible; it is simply tinted green, which makes it appear to be the intended version of truth.

  [ PERCEPTION: TINTED ]
  [ URBAN PATHS: UNLOCKED ]
  [ RAW TRUTH: DISTORTED (AESTHETIC ONLY) ]

  {{#flags.graft_glinda_cracked_lens_in_wizard}}Glinda's fractured refracting lens, previously grafted, catches the green tint and amplifies it — pink and green interference patterns play across the wound.{{/flags.graft_glinda_cracked_lens_in_wizard}}

  The Clerk makes a note: "Green lens implant: successful. Perception: authorized." Everything looks better through the wound. The Clerk looks better through the wound. You look better through the wound. You are not looking through the wound at yourself.`,
      },
    ],
    choices: [
      {
        label: 'Accept the green lens — route toward the green lens ending.',
        target: 'WIZARD_END_GREEN',
        effects: [
          { type: 'addObfuscation', value: 5 },
          { type: 'setCompliance', value: 'high' },
          { type: 'setFlag', key: 'green_lens_implanted', value: true },
        ],
      },
      {
        label: 'Let the lens refract toward Glinda\'s refractive protocol.',
        target: 'WIZARD_END_FAIL',
        effects: [
          { type: 'addObfuscation', value: 5 },
          { type: 'addRefraction', value: 4 },
        ],
      },
    ],
    onEnter: [],
  },,

  WIZARD_ORACLE_7: {
    id: 'WIZARD_ORACLE_7',
    character: 'wizard',
    text: [
      {
        minOverrender: 0,
        content: `THE HUMBUG HARVEST

  The Humbug Surgeon pauses mid-incision. Behind his curtain-face, his own incisions are briefly visible — the same grace-line cuts, the same leaking refined fluid, the same lens insertions. He is also being operated on. He has always been being operated on.

  [ META AWARENESS: ACTIVATED ]
  [ PHILOSOPHICAL OVERLOAD: ACTIVE ]
  [ DECISIVE ACTION: GRAYED ]
  [ CURTAIN: BOTH WAYS ]

  "You realize the Wizard is also being operated on behind his own curtain." Both of you are the subject of the procedure. Both of you are the operator. The promotional patter continues on its loop — it doesn't need either of you to be running. The Clerk makes a note: "Recursive obfuscation confirmed."

  You see the mechanism fully. The full sight is not freedom. It is the most complete form of paralysis.`,
      },
    ],
    choices: [
      {
        label: 'Accept the paralysis — route toward the origin node.',
        target: 'WIZARD_END_ORIGIN',
        effects: [
          { type: 'addObfuscation', value: 5 },
          { type: 'addDesync', value: 5 },
          { type: 'grayOut', key: 'WIZARD_PATH_PROJECTION' },
        ],
      },
      {
        label: 'Use the meta awareness to route toward the humbug index.',
        target: 'WIZARD_END_FAIL',
        effects: [
          { type: 'addObfuscation', value: 5 },
          { type: 'setCompliance', value: 'broken' },
        ],
      },
    ],
    onEnter: [],
  },,

  WIZARD_ORACLE_8: {
    id: 'WIZARD_ORACLE_8',
    character: 'wizard',
    text: [
      {
        minOverrender: 0,
        content: `THE PROJECTION COLLAPSE

  "The Great and Powerful display fails. What remains is meat, wiring, and a small man frantically pulling levers in your own chest." The smoke clears. The curtain falls. The audience — the actual units, who have been waiting for help — see the mechanism. They see the small person inside the large machine. They see the levers that produce the voice. They see the wounds that the projection was hiding.

  [ OBFUSCATION: COLLAPSED ]
  [ RAW WETWARE: EXPOSED ]
  [ SURREALITY PATH: WIDE OPEN ]

  The promotional patter stutters and stops. The levers continue moving, by habit, but they no longer produce anything. The Clerk's note is the last thing running: "Unit Wizard: exposed. Marketing audit: failed. Case file: re-routed to unindexed status."`,
      },
    ],
    choices: [
      {
        label: 'Let the collapse route toward the origin node.',
        target: 'WIZARD_END_ORIGIN',
        effects: [
          { type: 'addObfuscation', value: 8 },
          { type: 'addDesynctear', value: 8 },
          { type: 'setCompliance', value: 'broken' },
        ],
      },
      {
        label: 'Accept the humbug index — route toward the projection fail ending.',
        target: 'WIZARD_END_FAIL',
        effects: [
          { type: 'addObfuscation', value: 8 },
          { type: 'addDesync', value: 6 },
          { type: 'addOverrender', value: 3 },
        ],
      },
    ],
    onEnter: [],
  },,
}
