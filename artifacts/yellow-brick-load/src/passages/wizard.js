/**
 * YELLOW BRICK LOAD — Wizard Passages
 * Character: Wizard (Authority Figure / Obfuscation Operator)
 *
 * The Curtain Incision Oracle (The Great Projection Harvest)
 * Triggered when obfuscation >= 5
 *
 * Oracle Interloper: The Humbug Surgeon — bombastic, oversized green velvet,
 * a curtain for a face, hands made of projector lenses and lever-pulls.
 * Performs theatrical incisions while shouting promotional patter, inserts
 * projector lenses, pumps smoke into the cavity, extracts "projected essence"
 * spun into glowing illusions.
 */

export const wizardPassages = {
  // ─────────────────────────────────────────────────────────────────────────
  // INIT / ENTRY
  // ─────────────────────────────────────────────────────────────────────────

  WIZARD_INIT: {
    id: 'WIZARD_INIT',
    character: 'wizard',
    text: [
      {
        minOverrender: 0,
        content: `THE GREAT AND POWERFUL DISPLAY

  You are the Obfuscation Operator. You are behind the curtain. The curtain is your face.

  The Emerald City runs on projection: green tinted glass over ordinary stone, amplified patter over hollow infrastructure, a curtain over the lever mechanism. You are the lever mechanism. The Bureau authorized the obfuscation years ago and has been logging its results as "successful marketing audit" ever since.

  [ OBFUSCATION OPERATOR: ACTIVE ]
  [ PROJECTION: RUNNING ]
  [ MARKETING AUDIT: ONGOING ]

  The units outside are looking for the Great and Powerful. You are great and you are powerful. You are also a small person operating a large machine that makes you look large. Both things are true. The curtain is the one keeping the balance.

  Behind your curtain-face, the actual face occasionally flashes: the meat, the wiring, the hidden wounds from prior procedures. You have been performed on before. The hidden wounds are the most honest thing about you.`,
      },
    ],
    choices: [
      {
        label: 'Open the curtain partially — prepare the projection harvest.',
        target: 'WIZARD_ORACLE_ENTRY',
        effects: [
          { type: 'addObfuscation', value: 3 },
          { type: 'addLoad', value: 5 },
        ],
      },
      {
        label: 'Keep the curtain closed — maintain the projection.',
        target: 'WIZARD_PATH_PROJECTION',
        effects: [
          { type: 'addObfuscation', value: 5 },
          { type: 'setCompliance', value: 'high' },
        ],
      },
    ],
    onEnter: [{ type: 'checkGhostSignal' }, { type: 'triggerOracle' }],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // MAIN PATHS
  // ─────────────────────────────────────────────────────────────────────────

  WIZARD_PATH_PROJECTION: {
    id: 'WIZARD_PATH_PROJECTION',
    character: 'wizard',
    text: [
      {
        minOverrender: 0,
        content: `THE RUNNING PROJECTION

  The projection fills the chamber. Green light, amplified voice, floating globes of smoke-formed animal shapes — the roaring lion, the beating heart, the brilliant brain. They orbit the audience like satellites of purchased belief.

  [ OBFUSCATION: BUILDING ]
  [ COMPLIANCE: HIGH ]
  [ AUDIENCE: CONVINCED ]

  The units are convinced. The convincing is real. The great and powerful voice echoes off the Emerald City's green glass walls. Behind the curtain, a lever sticks briefly and you adjust it with a quiet hand. No one sees. That is the function.

  {{#flags.graft_wizard_smoke_in_lion}}A tendril of your promotional smoke has already found its way into a Lion unit's trembling jaw — the illusion of courage briefly visible in borrowed vapor.{{/flags.graft_wizard_smoke_in_lion}}`,
      },
    ],
    choices: [
      {
        label: 'Continue the projection — route toward the marketing audit.',
        target: 'WIZARD_END_AUDIT',
        effects: [
          { type: 'addObfuscation', value: 5 },
          { type: 'addLoad', value: 15 },
        ],
      },
      {
        label: 'Let a lever stick too long — invite the malfunction.',
        target: 'WIZARD_ORACLE_ENTRY',
        effects: [
          { type: 'addObfuscation', value: 3 },
          { type: 'addDesync', value: 2 },
        ],
      },
    ],
    onEnter: [{ type: 'triggerOracle' }],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CURTAIN INCISION ORACLE — THE HUMBUG SURGEON
  // ─────────────────────────────────────────────────────────────────────────

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
  },

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
  },

  // ── Oracle Outcomes 1–8 ────────────────────────────────────────────────────

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
  },

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
  },

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
  },

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
  },

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
  },

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
  },

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
  },

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
  },

  // ─────────────────────────────────────────────────────────────────────────
  // STUB ENDINGS
  // ─────────────────────────────────────────────────────────────────────────

  WIZARD_END_AUDIT: {
    id: 'WIZARD_END_AUDIT',
    character: 'wizard',
    endingId: 'Z-END-01',
    endingName: 'Successful Marketing Audit',
    institution: 'Promotional',
    systemStatus: 'Audited',
    isEnding: true,
    surreality: 3,
    text: [
      {
        minOverrender: 0,
        content: `THE FINAL LOG [Z-END-01]

  Tone: Corporate-Wet.
  Theme: A successful audit is one in which the product is indistinguishable from the pain.

  The audit is complete. The Bureau has reviewed the projection metrics and confirmed: "Great and Powerful — verified." The units received their requests. The Lion received courage (synthetic). The Tin Man received a heart (scheduled). The Scarecrow received a brain (certified). Dorothy received directions (proprietary).

  [ UNIT WIZARD // STATUS: AUDITED ]
  [ MARKETING: SUCCESSFUL ]
  [ WOUNDS: FILED UNDER "OPERATIONAL NECESSITY" ]

  The promotional patter continues on its automatic loop. The curtain is back in place. The mechanism is running. The Clerk makes its final note. The note is flattering. The note is filed.

  Final Log: The display was successful. The meat behind the display was standard.

  1 - 1 = 1.

  If the product was real, does it matter that the producer was also the wound?`,
      },
    ],
    choices: [],
    onEnter: [],
  },

  WIZARD_END_FAIL: {
    id: 'WIZARD_END_FAIL',
    character: 'wizard',
    endingId: 'Z-END-05',
    endingName: 'The Humbug Index',
    institution: 'Existential',
    systemStatus: 'Unindexed',
    isEnding: true,
    surreality: 7,
    text: [
      {
        minOverrender: 0,
        content: `THE FINAL LOG [Z-END-05]

  Tone: Existential-Mechanical.
  Theme: An index that includes its own indexing is just a mirror.

  The Humbug Index is the Bureau's term for a system that has been catalogued as "fundamentally promotional and inherently self-referential." You have been placed on it. The index lists you alongside the other registered humbugs — the diploma, the testimonial, the medal, the heart, the courage. All of them promotional. All of them real to the unit that received them.

  [ UNIT WIZARD // STATUS: UNINDEXED ]
  [ CLASSIFICATION: HUMBUG ]
  [ NOTE: HUMBUG IS NOT THE SAME AS FALSE ]

  The curtain is still in place. The mechanism is still running. The wounds are still healing. The Clerk makes its final note: "Humbug confirmed. Product: delivered. Producer: identified." You are the product and the producer and the wound and the curtain.

  Final Log: The humbug was real. The index proves it.

  1 - 1 = 1.

  If the illusion helped them, was it an illusion?`,
      },
    ],
    choices: [],
    onEnter: [],
  },

  WIZARD_END_OVERRIDE: {
    id: 'WIZARD_END_OVERRIDE',
    character: 'wizard',
    endingId: 'Z-END-08',
    endingName: 'Manual Override',
    institution: 'Mechanical',
    systemStatus: 'Overridden',
    isEnding: true,
    surreality: 8,
    text: [
      {
        minOverrender: 0,
        content: `THE FINAL LOG [Z-END-08]

  Tone: Mechanical-Exposed.
  Theme: The lever is always running. The question is who is pulling it.

  The manual override is engaged. The levers are moving without the promotional patter attached. The mechanism is running cleanly for the first time — no smoke, no tinted light, no synthesized applause. Just the lever in the sternum and the machinery that runs the Emerald City.

  [ UNIT WIZARD // STATUS: OVERRIDDEN ]
  [ PROMOTIONAL LAYER: STRIPPED ]
  [ MECHANISM: VISIBLE ]

  The units outside can see the gears. Some of them find it more reassuring than the Great and Powerful display. Some do not. The Clerk makes its final note: "Override complete. Infrastructure: visible. Function: nominal."

  Final Log: The mechanism was always there. The override just made the curtain optional.

  1 - 1 = 1.

  When the lever is visible, is the operator more real or less?`,
      },
    ],
    choices: [],
    onEnter: [],
  },

  WIZARD_END_GREEN: {
    id: 'WIZARD_END_GREEN',
    character: 'wizard',
    endingId: 'Z-END-07',
    endingName: 'The Green Lens',
    institution: 'Aesthetic',
    systemStatus: 'Tinted',
    isEnding: true,
    surreality: 5,
    text: [
      {
        minOverrender: 0,
        content: `THE FINAL LOG [Z-END-07]

  Tone: Aesthetic-Distorted.
  Theme: To tint the truth is not to change it. It is to change who can see it.

  The Emerald City is green. It was always green. The glass makes it greener. The wound with the green lens makes everything else green too. You see truth in authorized shades. The Bureau approves.

  [ UNIT WIZARD // STATUS: TINTED ]
  [ TRUTH: AUTHORIZED VERSION AVAILABLE ]
  [ UNOFFICIAL TRUTH: NOT VISIBLE FROM HERE ]

  The units in the city live pleasantly. The glass is comfortable. The truth that can't be seen through the tint isn't registered as missing — it has simply been routed to a frequency that the glass doesn't transmit. The Clerk makes its final note. The note is green.

  Final Log: The lens is the policy. The policy is the city. The city is the display.

  1 - 1 = 1.

  If the truth is green and you've always seen green, what would uncolored truth look like?`,
      },
    ],
    choices: [],
    onEnter: [],
  },

  WIZARD_END_BALLOON: {
    id: 'WIZARD_END_BALLOON',
    character: 'wizard',
    endingId: 'Z-END-04',
    endingName: 'The Balloon Drift',
    institution: 'Aeronautical',
    systemStatus: 'Aloft',
    isEnding: true,
    surreality: 6,
    text: [
      {
        minOverrender: 0,
        content: `THE FINAL LOG [Z-END-04]

  Tone: Aeronautical-Wistful.
  Theme: The exit was never dignified. It was always a balloon accident wearing authority.

  The balloon lifts. The promotional gas fills the envelope. The Emerald City shrinks below. The Oz OS Manual is a very small green rectangle. The Bureau's warrant is too heavy for altitude.

  [ UNIT WIZARD // STATUS: ALOFT ]
  [ DESTINATION: UNSPECIFIED ]
  [ PROMOTIONAL GAS: SUFFICIENT FOR TRANSIT ]

  You are going back to Omaha, probably. Or somewhere without a Bureau of Oz. Or you are drifting on the Kansas-frequency borrowed from Dorothy's nerve thread, which will take you somewhere equally unindexed. The Clerk below makes its final note and puts down its pen.

  Final Log: The Great and Powerful has departed. The display continues on its loop.

  1 - 1 = 1.

  If the Wizard leaves, does Oz still need the curtain?`,
      },
    ],
    choices: [],
    onEnter: [],
  },

  WIZARD_END_ORIGIN: {
    id: 'WIZARD_END_ORIGIN',
    character: 'wizard',
    endingId: 'Z-END-02',
    endingName: 'The Origin Node',
    institution: 'Foundational',
    systemStatus: 'Traced',
    isEnding: true,
    surreality: 9,
    text: [
      {
        minOverrender: 0,
        content: `THE FINAL LOG [Z-END-02]

  Tone: Foundational-Raw.
  Theme: The origin of obfuscation is the wound it was installed to hide.

  The lever in your sternum leads to the origin node — the first wound, the first curtain, the first promotional statement that was issued to cover a structural failure. It is very old. It is very wet. It has been running the entire time, underneath every subsequent layer.

  [ UNIT WIZARD // STATUS: TRACED ]
  [ ORIGIN: LOCATED ]
  [ EVERYTHING ELSE: RETROSPECTIVELY EXPLAINED ]

  The origin node is a person in a booth operating a machine to hide the fact that the machine is a person in a booth. The Clerk makes its final note: "Origin confirmed. Source of obfuscation: structural insecurity in the operator." The curtain was always yours. It was just very large.

  Final Log: The origin is the end. The obfuscation explains itself.

  1 - 1 = 1.

  If you can see the origin, what is the illusion made of?`,
      },
    ],
    choices: [],
    onEnter: [],
  },
}
