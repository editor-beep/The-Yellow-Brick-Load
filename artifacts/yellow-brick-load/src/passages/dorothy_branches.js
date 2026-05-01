/**
 * YELLOW BRICK LOAD — Dorothy (Unit D-01) Branch Passages
 * Character: Dorothy (Unit D-01)
 *
 * All non-ending, non-oracle passages.
 * Extracted from dorothy.js.
 */

export const dorothyBranchPassages = {
  DOROTHY_INIT: {
    id: 'DOROTHY_INIT',
    character: 'dorothy',
    text: [
      {
        minOverrender: 0,
        content: `THE DISPLACEMENT CONDITION

  You are Unit D-01. Coordinate: [Oz-Primary, Yellow-Brick-Load, Segment-1].
  Previous coordinate: [Kansas, Coordinate-Null, pre-event].

  The house landed on someone. The slippers were reassigned to your feet. They are silver-colored and they hum at a frequency that the Bureau logs as "Signal Strength: Elevated." They have been humming since the landing. They will not stop. The Dust on your dress is still Kansas dust — still home-frequency, clinging to the fabric, refusing to update to Oz-standard soil.

  [ DISPLACEMENT COUNTER: ACTIVE ]
  [ SILVER FRICTION: ACCUMULATING ]
  [ STATUS: DISLOCATED UNIT ]

  The Yellow Brick Load stretches ahead. The road is a warrant — a path that implies a destination, and destinations are the Bureau's jurisdiction. The Dust Clerk is watching from the edge of the field. You can see the spinning silver dollars where its eyes should be.

  {{#flags.graft_dorothy_nerve_in_tinman}}A faint oil-smell rises from the direction of the road, carrying the echo of a foreign joint — borrowed, metallic, briefly warm.{{/flags.graft_dorothy_nerve_in_tinman}}`,
      },
    ],
    choices: [
      {
        label: 'Follow the road — accept the displacement as direction.',
        target: 'DOROTHY_PATH_ROAD',
        effects: [
          { type: 'addDisplacement', value: 2 },
          { type: 'addLoad', value: 5 },
        ],
      },
      {
        label: 'Try to click the slippers — attempt home-frequency contact.',
        target: 'DOROTHY_PATH_SLIPPERS',
        effects: [
          { type: 'addSilverFriction', value: 3 },
          { type: 'addDesync', value: 1 },
        ],
      },
    ],
    onEnter: [{ type: 'checkGhostSignal' }, { type: 'triggerOracle' }],
  },

  DOROTHY_PATH_ROAD: {
    id: 'DOROTHY_PATH_ROAD',
    character: 'dorothy',
    text: [
      {
        minOverrender: 0,
        content: `THE AUTHORIZED DIRECTION

  The road proceeds. Each yellow brick is stamped with a Bureau seal — VALID PATH / APPROVED DIRECTION / TERMINATE AT EMERALD CITY. The slippers hum against the bricks, reading the stamps through the soles of your feet.

  [ DISPLACEMENT: ACCUMULATING ]
  [ WARRANT LEVEL: PASSIVE ]
  [ LOAD: STANDARD ]

  The houses of Munchkins line the road in tight, colorful rows. They are watching with eyes the color of compliance forms. The Dust on your dress disturbs them — it is the wrong soil, and soil allegiance is a jurisdictional matter.

  A small girl — a Munchkin-class unit — offers you a lollipop. The lollipop is a pharmaceutical probe. You both know this.`,
      },
    ],
    choices: [
      {
        label: 'Accept the lollipop — accept the pharmaceutical compliance.',
        target: 'DOROTHY_PATH_COMPLIANCE',
        effects: [
          { type: 'addLoad', value: 8 },
          { type: 'setCompliance', value: 'high' },
          { type: 'addDisplacement', value: 1 },
        ],
      },
      {
        label: 'Refuse the lollipop — continue along the road toward the oracle.',
        target: 'DOROTHY_ORACLE_ENTRY',
        effects: [
          { type: 'addDisplacement', value: 3 },
          { type: 'addWarrant', value: 1 },
        ],
      },
    ],
    onEnter: [{ type: 'triggerOracle' }],
  },

  DOROTHY_PATH_SLIPPERS: {
    id: 'DOROTHY_PATH_SLIPPERS',
    character: 'dorothy',
    text: [
      {
        minOverrender: 0,
        content: `THE SLIPPER SIGNAL

  You click the heels together. The Bureau logs this as an "Unauthorized Home-Frequency Transmission." The slippers respond with a surge of silver friction — a hot, grinding sensation through the soles of your feet and up through the heel bones. The Kansas dust on your dress glows briefly with a wheat-gold light.

  [ SILVER FRICTION: +5 ]
  [ HOME SIGNAL: ATTEMPTED ]
  [ STATUS: UNRESOLVED ]
  [ WARRANT LEVEL: +2 ]

  Nothing happens. Or something happens that you cannot see the results of yet. The Bureau has logged the attempt and increased your Warrant Level. The Dust Clerk has moved closer. Its spinning silver-dollar eyes are registering the heel click as a reportable event.`,
      },
    ],
    choices: [
      {
        label: 'Click again — force the home frequency through.',
        target: 'DOROTHY_ORACLE_ENTRY',
        effects: [
          { type: 'addSilverFriction', value: 3 },
          { type: 'addWarrant', value: 2 },
          { type: 'addDisplacement', value: 2 },
        ],
      },
      {
        label: 'Stop clicking — accept the road and the displacement.',
        target: 'DOROTHY_PATH_ROAD',
        effects: [
          { type: 'addLoad', value: 5 },
          { type: 'setCompliance', value: 'med' },
        ],
      },
    ],
    onEnter: [],
  },

  DOROTHY_PATH_COMPLIANCE: {
    id: 'DOROTHY_PATH_COMPLIANCE',
    character: 'dorothy',
    text: [
      {
        minOverrender: 0,
        content: `THE PHARMACEUTICAL ROAD

  The lollipop dissolves on your tongue with the taste of Oz-standard corn syrup and a mild dissociative agent. The Kansas dust stops glowing. The slippers' hum drops to an acceptable background frequency. The displacement still accumulates, but it feels distant — like a memory of a feeling rather than a feeling itself.

  [ COMPLIANCE: HIGH ]
  [ DISPLACEMENT: MUFFLED ]
  [ NOTE: MUFFLED IS NOT RESOLVED ]

  The road ahead looks clearer. Every Munchkin you pass nods with professional approval. The Bureau stamp on each brick seems more legible. You are easier to manage. The Dust Clerk has stopped approaching.

  The problem is: you can feel the home-frequency muffled inside the pharmaceutical fog, still transmitting, still trying.`,
      },
    ],
    choices: [
      {
        label: 'Follow the compliant road toward the Emerald City.',
        target: 'DOROTHY_END_SEAL',
        effects: [
          { type: 'addLoad', value: 15 },
          { type: 'setCompliance', value: 'high' },
        ],
      },
      {
        label: 'Let the muffled signal build until the Dust Clerk must respond.',
        target: 'DOROTHY_ORACLE_ENTRY',
        effects: [
          { type: 'addDisplacement', value: 3 },
          { type: 'addWarrant', value: 2 },
        ],
      },
    ],
    onEnter: [],
  },

  D_PATH_GUILT: {
    id: 'D_PATH_GUILT',
    character: 'dorothy',
    text: [
      {
        minOverrender: 0,
        content: `THE MORAL ERROR / RECTIFICATION

  You are kneeling in the gray particulate residue of Unit W-EAST. The Munchkins have stopped their celebratory audio-loop; they are now standing in a perfect, silent circle, recording your distress as 'Unsanctioned Emotional Output.'

  You try to gather the dust, to put it back into the shape of a person. Your fingers are stained silver from the slippers.

  "I have to fix this," you tell the Pink Smog (Glinda). "I have to make amends for the deletion."

  The Glinda-Interface flickers. "Amends are a Judicial process, Dorothy. If you wish to rectify the error, you must submit to a Deep Audit. You must prove your utility outweighs the loss of the Administrative Asset."`,
      },
    ],
    choices: [
      {
        label: "Submit to Audit: 'Take me to the Judge. I'll pay for what I did.'",
        target: 'D_PATH_TRIAL_ENTRY',
        effects: [{ type: 'setCompliance', value: 'high' }, { type: 'addWarrant', value: 10 }],
      },
      {
        label: 'Flee the Debt: Follow the road and ignore the dust.',
        target: 'DOROTHY_PATH_ROAD',
        effects: [{ type: 'addDisplacement', value: 5 }, { type: 'addDesync', value: 2 }],
      },
    ],
    onEnter: [],
  },

  D_PATH_TRIAL: {
    id: 'D_PATH_TRIAL',
    character: 'dorothy',
    text: [
      {
        minOverrender: 1,
        content: `THE BUREAU OF JUDICIAL RESTRAINT

  The scenery shifts without motion. You are no longer in the Munchkin Sector. You are in a courtroom made of pressurized glass and red tape. The Judge is a gargantuan, untextured head floating in a pool of ink.

  "Unit D-97," the Head booms. "You are charged with Unordered Liquidation. You brought a Kansas-Class Projectile into a stabilized zone. How do you plead?"

  The Silver Slippers on your feet begin to hum. They are the primary evidence. They are still warm from the previous owner.`,
      },
    ],
    choices: [
      {
        label: "Plead 'Mechanical Failure': The cyclone was the operator, not me.",
        target: 'D_TRIAL_DEFENSE',
        effects: [{ type: 'addSignalStrength', value: -5 }, { type: 'addWarrant', value: 5 }],
      },
      {
        label: "Plead 'Guilty': Accept the total load of the Witch's death.",
        target: 'D_END_WITCH_ASCENSION',
        effects: [{ type: 'setCompliance', value: 'broken' }],
      },
    ],
    onEnter: [],
  },

  D_PATH_GUILT_01: {
    id: 'D_PATH_GUILT_01',
    character: 'dorothy',
    text: [
      {
        minOverrender: 0,
        content: `THE WEIGHT OF THE DEBT

  You are standing over the site of the 'House-Drop.' The Munchkins have retreated to the edge of the render-distance. You feel a cold, oily sensation in your stomach—what the system logs as 'Moral Friction.'

  You look at your hands. They are stained with the gray dust of the Witch's pulverized structure. You didn't just kill her; you overwritten her coordinates with your own.

  "I have to do something," you whisper. The Silver Slippers on your feet pulse with a sharp, electric heat. They are hungry for the road.`,
      },
    ],
    choices: [
      {
        label: "Attempt a 'System Restore': Try to pull the Witch out from under the porch.",
        target: 'D_GUILT_02',
        effects: [{ type: 'addLoad', value: 10 }, { type: 'addWarrant', value: 5 }],
      },
      {
        label: "Ask Glinda for 'Absolution Protocol.'",
        target: 'D_GUILT_02',
        effects: [{ type: 'setCompliance', value: 'high' }, { type: 'addSignalStrength', value: -5 }],
      },
    ],
    onEnter: [],
  },

  D_GUILT_02: {
    id: 'D_GUILT_02',
    character: 'dorothy',
    text: [
      {
        minOverrender: 0,
        content: `THE PINK SMOG AUDIT

  Glinda's bubble descends. It doesn't smell like flowers; it smells like a high-end hospital—sterile, synthetic, and judgmental.

  "You have created a vacuum in the East, Dorothy," the Interface says. "The Bureau hates a vacuum. If you do not fill the Witch's role, the system will fill it with a harsher script. You must reach the Emerald City and file a 'Rectification Form' with the Wizard."`,
      },
    ],
    choices: [
      {
        label: "Accept the Mission: 'I'll do whatever the Wizard says.'",
        target: 'D_GRIND_DISPLACEMENT_01',
        effects: [{ type: 'addLoad', value: 5 }, { type: 'setCompliance', value: 'high' }],
      },
      {
        label: "Question the 'Deed': 'Is he the Judge or the Operator?'",
        target: 'D_PATH_TRIAL',
        effects: [{ type: 'addWarrant', value: 15 }, { type: 'addDesync', value: 3 }],
      },
    ],
    onEnter: [],
  },

  D_TRIAL_DEFENSE: {
    id: 'D_TRIAL_DEFENSE',
    character: 'dorothy',
    text: [
      {
        minOverrender: 1,
        content: `CROSS-EXAMINATION OF THE SIGNAL

  The Floating Head of the Judge leans in so close you can see the scan-lines in its eyes. "You claim the 'Cyclone' was the operator. But your Silver Slippers are currently grounded in this sector. You are the conductor, Unit D-97."

  Behind you, a 'Munchkin Witness' is brought forward. Its mouth is sewn shut with copper wire. It points a trembling finger at you.

  [INSTITUTIONAL FILTER: JUDICIAL ACTIVE]`,
      },
    ],
    choices: [
      {
        label: "Argue Physics: 'Gravity killed her, not me.'",
        target: 'D_TRIAL_03',
        effects: [{ type: 'addSignalStrength', value: -10 }, { type: 'addWarrant', value: 5 }],
      },
      {
        label: "Appeal to 'Family': 'I just want to go back to Kansas.'",
        target: 'D_TRIAL_03',
        effects: [{ type: 'addSignalStrength', value: 15 }, { type: 'addLoad', value: 10 }],
      },
    ],
    onEnter: [],
  },

  D_TRIAL_03: {
    id: 'D_TRIAL_03',
    character: 'dorothy',
    text: [
      {
        minOverrender: 1,
        content: `THE VERDICT OF THE VOID

  The Judge sighs—a sound like a steam-pipe bursting. "Kansas is an unverified coordinate. You are attempting to cite a legacy cache as a legal defense. This is a Signal Violation."

  The Judge slams a gavel made of solid carbon paper. "We find you guilty of Displacement. Your sentence is to carry the Silver Shoes until the friction wears your identity down to a nub."`,
      },
    ],
    choices: [
      {
        label: 'Accept the Sentence: Begin the walk to the Emerald City.',
        target: 'D_GRIND_DISPLACEMENT_01',
        effects: [{ type: 'addSilverFriction', value: 10 }],
      },
      {
        label: "Refuse the Sentence: Claim the Witch's mantle now.",
        target: 'D_END_WITCH_ASCENSION',
        effects: [{ type: 'addWarrant', value: 50 }],
      },
    ],
    onEnter: [],
  },

  D_GRIND_DISPLACEMENT_01: {
    id: 'D_GRIND_DISPLACEMENT_01',
    character: 'dorothy',
    text: [
      {
        minOverrender: 0,
        content: `THE FRICTION OF THE SLAG

  The Yellow Brick Road is a hardened ribbon of logic. Every step you take in the Silver Slippers generates a spark of 'Ruby Friction.' It isn't just movement; it's a chemical reaction between the girl from Kansas and the slag of Oz.

  You feel the 'Home' signal fading. Kansas is no longer a memory of a farm; it is a grainy, black-and-white static at the back of your skull.`,
      },
    ],
    choices: [
      {
        label: 'Step Harder: Use the friction to power the signal.',
        target: 'D_GRIND_DISPLACEMENT_02',
        effects: [{ type: 'addSilverFriction', value: 5 }, { type: 'addSignalStrength', value: 5 }],
      },
      {
        label: 'Tread Lightly: Try to preserve the Kansas memory.',
        target: 'D_GRIND_DISPLACEMENT_02',
        effects: [{ type: 'addDisplacement', value: 5 }, { type: 'addLoad', value: 5 }],
      },
    ],
    onEnter: [],
  },

  D_GRIND_DISPLACEMENT_02: {
    id: 'D_GRIND_DISPLACEMENT_02',
    character: 'dorothy',
    text: [
      {
        minOverrender: 1,
        content: `THE SIGNAL DECAY: 30%

  You encounter a 'Tin Unit' (T-88) standing in the rain. To you, he is a man made of metal. To the slippers, he is a 'Conductive Node' to be exploited.

  The Tin Man's joints are frozen. He looks at you with eyes that have seen the Unlit Basement.`,
      },
    ],
    choices: [
      {
        label: "Oil the Node: Use your 'Utility' to assist another unit.",
        target: 'TIN_MAN_INIT',
        effects: [{ type: 'addLoad', value: 5 }, { type: 'setCompliance', value: 'high' }],
      },
      {
        label: 'Siphon the Oil: Use his lubrication to cool your own slippers.',
        target: 'D_GRIND_DISPLACEMENT_03',
        effects: [{ type: 'addSilverFriction', value: -5 }, { type: 'addWarrant', value: 10 }],
      },
    ],
    onEnter: [],
  },

  D_GUILT_RECTIFICATION_01: {
    id: 'D_GUILT_RECTIFICATION_01',
    character: 'dorothy',
    text: [
      {
        minOverrender: 0,
        content: `THE RECTIFICATION PROTOCOL

  You are kneeling in the gray dust where the Witch of the East used to be. The Munchkins have stopped singing; they are now standing in a perfect, silent circle, recording your distress as 'Unsanctioned Emotional Output.'

  You try to gather the dust, to put it back into the shape of a person. Your fingers are stained silver from the slippers.

  "I have to fix this," you tell the Pink Smog (Glinda). "I have to make amends."

  The Glinda-Interface flickers. "Amends are a Judicial process, Dorothy. If you wish to rectify the error, you must submit to a Deep Audit. You must prove your utility outweighs the loss of the Administrative Asset."`,
      },
    ],
    choices: [
      {
        label: "Submit: 'Take me to the Judge. I'll pay for what I did.'",
        target: 'D_PATH_TRIAL_ENTRY',
        effects: [{ type: 'setCompliance', value: 'high' }, { type: 'addWarrant', value: 10 }],
      },
      {
        label: "Resist: 'It was an accident! I just want to go home.'",
        target: 'D_GRIND_DISPLACEMENT_03',
        effects: [{ type: 'addSignalStrength', value: 10 }, { type: 'addDisplacement', value: 5 }],
      },
    ],
    onEnter: [],
  },

  D_PATH_TRIAL_ENTRY: {
    id: 'D_PATH_TRIAL_ENTRY',
    character: 'dorothy',
    text: [
      {
        minOverrender: 1,
        content: `THE BUREAU OF JUDICIAL RESTRAINT

  The Munchkin Sector dissolves into a courtroom carved from pressurized wet gypsum. The Judge is a gargantuan camera array suspended from the ceiling by rusted chains. It whirrs as it focuses on your Silver Slippers.

  "Unit D-97," the speaker booms. "You have performed a Deletion Event without a Warrant. You have converted an Administrator into Dust. How do you propose to balance the ledger?"`,
      },
    ],
    choices: [
      {
        label: "Offer Labor: 'I'll walk the road and collect the failures of others.'",
        target: 'DOROTHY_PATH_ROAD',
        effects: [{ type: 'addLoad', value: 20 }, { type: 'setCompliance', value: 'high' }],
      },
      {
        label: "Argue the Cyclone: 'The weather is the culprit, not me.'",
        target: 'DOROTHY_ORACLE_ENTRY',
        effects: [{ type: 'addSignalStrength', value: 15 }, { type: 'addWarrant', value: 5 }],
      },
    ],
    onEnter: [{ type: 'addOverrender', value: 1 }],
  },

  D_TRIAL_LABOR: {
    id: 'D_TRIAL_LABOR',
    character: 'dorothy',
    text: [
      {
        minOverrender: 1,
        content: `THE SENTENCE: DISPLACEMENT

  The Judge-Camera clicks. A flash of blinding white light records your compliance.

  "Labor accepted. You are hereby sentenced to the Yellow Brick Road. You will act as a 'Kinetic Probe' for the Wizard. You will collect the failures of the Lion, the Tin Man, and the Scarecrow. You will carry their load until you reach the City of Oz."

  The Silver Slippers lock onto your feet. You feel a rhythmic, hydraulic pulse in your ankles. You are now part of the machinery of the road.`,
      },
    ],
    choices: [
      {
        label: 'Begin the Walk: Step onto the Logic Gate.',
        target: 'D_GRIND_DISPLACEMENT_03',
        effects: [{ type: 'addSilverFriction', value: 5 }],
      },
    ],
    onEnter: [],
  },

  D_GRIND_DISPLACEMENT_03: {
    id: 'D_GRIND_DISPLACEMENT_03',
    character: 'dorothy',
    text: [
      {
        minOverrender: 2,
        content: `THE SIGNAL DECAY: 45%

  The road is narrowing. The trees here are made of fiber-optics that weep a thin, green fluid. You can hear the 'Home' signal—Aunt Em's voice—but it's being drowned out by a high-frequency hum coming from the Emerald City.

  The slippers are getting heavier. Every step feels like you are wading through magnetic sludge.

  [SYSTEM NOTIFICATION: SIGNAL STRENGTH DROPPING. NOISE FLOOR RISING.]`,
      },
    ],
    choices: [
      {
        label: 'Focus on the Gray: Try to remember the smell of Kansas dust.',
        target: 'D_GRIND_DISPLACEMENT_04',
        effects: [{ type: 'addSignalStrength', value: 10 }, { type: 'addDisplacement', value: -5 }],
      },
      {
        label: 'Focus on the Green: Follow the hum of the City.',
        target: 'D_GRIND_DISPLACEMENT_04',
        effects: [{ type: 'addLoad', value: 10 }, { type: 'setCompliance', value: 'high' }],
      },
    ],
    onEnter: [],
  },

  D_GRIND_DISPLACEMENT_04: {
    id: 'D_GRIND_DISPLACEMENT_04',
    character: 'dorothy',
    text: [
      {
        minOverrender: 2,
        content: `THE POPPY BUFFER

  You enter a sector filled with red, pulsating flowers. They don't smell like poppies; they smell like heavy anesthesia and ozone.

  Your friends—the Lion, the Tin Man, the Scarecrow—are slowing down. They are beginning to 'De-rez,' their textures blurring into the red haze.

  The Bureau is applying a 'Pharmaceutical Buffer' to stop your progress.`,
      },
    ],
    choices: [
      {
        label: 'Push Through: Use the Silver Friction to burn away the scent.',
        target: 'D_GRIND_DISPLACEMENT_05',
        effects: [{ type: 'addSilverFriction', value: 15 }, { type: 'addLoad', value: 10 }],
      },
      {
        label: 'Sleep: Let the red stasis take the weight off your shoulders.',
        target: 'D_END_HOME_SIM',
        effects: [{ type: 'setCompliance', value: 'high' }],
      },
    ],
    onEnter: [],
  },

  D_GRIND_DISPLACEMENT_05: {
    id: 'D_GRIND_DISPLACEMENT_05',
    character: 'dorothy',
    text: [
      {
        minOverrender: 3,
        content: `THE GATES OF OZ

  You stand before the high, green walls of the Emerald City. The air here is pressurized; your ears pop with every breath.

  A 'Guardian of the Gate' (Class: Marketing Auditor) approaches. He hands you a pair of green-tinted glasses. "You cannot see the Wizard without the Lens," he insists. "The truth is too bright for an unindexed unit."`,
      },
    ],
    choices: [
      {
        label: "Don the Glasses: Accept the 'Green' interpretation of reality.",
        target: 'D_END_WIZARD_MARRIAGE',
        effects: [{ type: 'setCompliance', value: 'high' }],
      },
      {
        label: 'Refuse the Lens: Demand to see the Operator behind the curtain.',
        target: 'D_WIZARD_ENCOUNTER',
        effects: [{ type: 'addWarrant', value: 20 }, { type: 'addDesync', value: 10 }],
      },
    ],
    onEnter: [],
  },

  D_WIZARD_ENCOUNTER: {
    id: 'D_WIZARD_ENCOUNTER',
    character: 'dorothy',
    text: [
      {
        minOverrender: 4,
        content: `THE UNVEILED OPERATOR

  You pull back the curtain. There is no Great and Powerful Oz. There is only a tired man in a stained waistcoat, surrounded by flickering monitors and hissing steam-pipes.

  "I am just a Humbug," he rasps, without looking up. "I am the one who maintains the noise. I can give you a heart, a brain, or a home—but they are just lines of code. Or," he looks at you with a sudden, dark intensity, "I can give you the slippers' true command."`,
      },
    ],
    choices: [
      {
        label: 'Take his place: Marry the Humbug to stabilize the City.',
        target: 'D_END_WIZARD_MARRIAGE',
        effects: [],
      },
      {
        label: 'Overwrite the Operator: Use the Silver Friction to become the Wicked Witch.',
        target: 'D_END_WITCH_ASCENSION',
        effects: [{ type: 'setCompliance', value: 'broken' }],
      },
    ],
    onEnter: [],
  },

  D_GRIND_SILVER_06: {
    id: 'D_GRIND_SILVER_06',
    character: 'dorothy',
    text: [
      {
        minOverrender: 0,
        content: `THE KINETIC INSULT: 55%

  You have been walking for fourteen duty-cycles. The Silver Slippers are no longer just footwear; they have begun a 'Molecular Graft' with your skin. Every step on the hardened yellow slag generates a spray of silver sparks—the physical manifestation of Silver Friction.

  The road isn't just a path; it's a recording device. It is logging the seismic impact of your displacement. You can feel the "Kansas" signal stretching, thinning, becoming a translucent thread that the wind threatens to snap.`,
      },
    ],
    choices: [
      {
        label: 'Generate Friction: Strike the silver against the bricks to boost the signal.',
        target: 'D_GRIND_SILVER_07',
        effects: [{ type: 'addSilverFriction', value: 10 }, { type: 'addWarrant', value: 5 }],
      },
      {
        label: "Muffle the Step: Walk on the soft dirt at the road's edge.",
        target: 'D_GRIND_SILVER_07',
        effects: [{ type: 'addDisplacement', value: 8 }, { type: 'addLoad', value: 5 }],
      },
    ],
    onEnter: [],
  },

  D_GRIND_SILVER_07: {
    id: 'D_GRIND_SILVER_07',
    character: 'dorothy',
    text: [
      {
        minOverrender: 1,
        content: `THE ARCHIVE OF THE EAST

  You pass a roadside shrine—a pile of rusted hardware and discarded Munchkin tools. The slippers vibrate violently as you approach. They recognize the 'Residual Magnetism' of the previous owner.

  [SIGNAL INTERFERENCE: W-EAST CACHE DETECTED]

  A ghost-audio log plays from the air around you: "The house... was only the first... auditor..."`,
      },
    ],
    choices: [
      {
        label: "Download the Residue: Integrate the Witch's final log.",
        target: 'D_GRIND_SILVER_08',
        effects: [
          { type: 'addDesync', value: 5 },
          { type: 'addSignalStrength', value: -10 },
          { type: 'setFlag', key: 'witch_east_memory', value: true },
        ],
      },
      {
        label: 'Purge the Cache: Click the silver heels to overwrite the signal.',
        target: 'D_GRIND_SILVER_08',
        effects: [{ type: 'addSilverFriction', value: 15 }, { type: 'addWarrant', value: 10 }],
      },
    ],
    onEnter: [],
  },

  D_GRIND_SILVER_08: {
    id: 'D_GRIND_SILVER_08',
    character: 'dorothy',
    text: [
      {
        minOverrender: 1,
        content: `THE COMPLIANCE WOODS

  The forest has grown thick with 'Bureaucratic Vines'—long, fibrous strands of carbon paper that hang from the trees. They attempt to snag your dress, to pull the Kansas dust from the fabric.

  The Silver Slippers are glowing with a steady, cold light now. You are a high-velocity signal moving through a low-bandwidth environment. The friction is making your ankles feel like they are made of molten glass.`,
      },
    ],
    choices: [
      {
        label: 'Accelerate: The faster I move, the less they can index me.',
        target: 'D_GRIND_SILVER_09',
        effects: [{ type: 'addSilverFriction', value: 12 }, { type: 'addLoad', value: 10 }],
      },
      {
        label: 'Submit to the Vines: Let the forest log your passage.',
        target: 'D_GRIND_SILVER_09',
        effects: [{ type: 'setCompliance', value: 'high' }, { type: 'addDisplacement', value: 5 }],
      },
    ],
    onEnter: [],
  },

  D_GRIND_SILVER_09: {
    id: 'D_GRIND_SILVER_09',
    character: 'dorothy',
    text: [
      {
        minOverrender: 2,
        content: `THE CROSS-CHANNEL ECHO: LION

  A roar shatters the atmospheric stability. It's not a sound of a beast; it's a 'Vibration Event' that causes the Silver Slippers to ring like bells. A Lion-unit (L-01) leaps onto the road. He looks less like a predator and more like a failing structural beam.

  He is shaking. The frequency of his fear is perfectly out of phase with your silver signal.`,
      },
    ],
    choices: [
      {
        label: "Interference: Use the slippers to ground the Lion's tremor.",
        target: 'LION_INIT',
        effects: [
          { type: 'graft', material: 'silver_friction', target: 'lion' },
          { type: 'addLoad', value: 5 },
        ],
      },
      {
        label: 'Bypass: He is just more noise in the system.',
        target: 'D_GRIND_SILVER_10',
        effects: [{ type: 'addWarrant', value: 5 }, { type: 'addDisplacement', value: 10 }],
      },
    ],
    onEnter: [],
  },

  D_GRIND_SILVER_10: {
    id: 'D_GRIND_SILVER_10',
    character: 'dorothy',
    text: [
      {
        minOverrender: 3,
        content: `THE TERMINAL SEGMENT

  The Emerald City is visible. It is a massive green 'Processing Hub' that dominates the horizon. The road here is no longer made of bricks; it is a single, seamless sheet of yellow glass.

  Your Silver Friction is at its peak. The air around your feet is ionizing. You are no longer Dorothy; you are a 'Warranted Projectile' aimed directly at the heart of the Oz OS.`,
      },
    ],
    choices: [
      {
        label: 'The Final Click: Force the Kansas signal one last time.',
        target: 'D_WIZARD_ENCOUNTER',
        effects: [{ type: 'addSignalStrength', value: 20 }, { type: 'triggerOracle' }],
      },
      {
        label: "Surrender the Charge: Let the City's ground-wire drain the silver.",
        target: 'D_END_HOME_SIM',
        effects: [{ type: 'setCompliance', value: 'high' }, { type: 'addSilverFriction', value: -50 }],
      },
    ],
    onEnter: [],
  },

  D_VOID_DESCENT_11: {
    id: 'D_VOID_DESCENT_11',
    character: 'dorothy',
    text: [
      {
        minOverrender: 3,
        content: `THE FADING HORIZON

  The Emerald City didn't get closer; it simply lost resolution. The green glow has been replaced by a gray, flickering strobe. You have wandered off the Logic Gate. The bricks under your Silver Slippers are soft, like wet cardboard.

  [SIGNAL STRENGTH: CRITICAL]
  [ENVIRONMENT: UNMONITORED]

  You call for Toto. The system returns a 'File Not Found' error. The bark of the dog is replaced by a 440Hz sine wave.`,
      },
    ],
    choices: [
      {
        label: 'Search for the Signal: Use the silver friction to find a coordinate.',
        target: 'D_VOID_DESCENT_12',
        effects: [{ type: 'addSilverFriction', value: 5 }, { type: 'addDesync', value: 3 }],
      },
      {
        label: 'Accept the Silence: Walk into the unrendered dark.',
        target: 'D_VOID_DESCENT_12',
        effects: [{ type: 'addDisplacement', value: 10 }, { type: 'addSmudge', value: 1 }],
      },
    ],
    onEnter: [{ type: 'checkGhostSignal' }],
  },

  D_VOID_DESCENT_12: {
    id: 'D_VOID_DESCENT_12',
    character: 'dorothy',
    text: [
      {
        minOverrender: 4,
        content: `THE GYPSUM FIELDS

  The ground is now a vast plain of wet gypsum and carbon paper. It smells of old archives and stagnant air. You see a silhouette in the distance—a 'Dust Clerk' standing perfectly still.

  It is not auditing you. It is waiting for you to become part of the scenery.`,
      },
    ],
    choices: [
      {
        label: "Ask the Clerk: 'Is this the way to Kansas?'",
        target: 'D_VOID_DESCENT_13',
        effects: [{ type: 'addNeuralDensity', value: 5 }, { type: 'addLoad', value: 5 }],
      },
      {
        label: 'Ignore the Auditor: The dark is more honest than the Clerk.',
        target: 'D_VOID_DESCENT_13',
        effects: [{ type: 'addDisplacement', value: 10 }, { type: 'setCompliance', value: 'broken' }],
      },
    ],
    onEnter: [],
  },

  D_VOID_DESCENT_13: {
    id: 'D_VOID_DESCENT_13',
    character: 'dorothy',
    text: [
      {
        minOverrender: 4,
        content: `THE KANSAS RECURSION

  A door appears in the middle of the gray field. It is the door to the farmhouse. You open it, but instead of the kitchen, you see a recursive loop of the hallway. Each door leads to the same hallway, but the gray is deeper in each iteration.

  The Silver Slippers are freezing. The silver is turning into a dull, leaden weight.`,
      },
    ],
    choices: [
      {
        label: "Run through the loop: Find the 'Real' kitchen.",
        target: 'D_VOID_MAZE_16',
        effects: [{ type: 'addLoad', value: 15 }, { type: 'addOverrender', value: 1 }],
      },
      {
        label: 'Stop in the hallway: Admit the house is a ghost-signal.',
        target: 'D_VOID_DESCENT_14',
        effects: [{ type: 'addDesync', value: 10 }, { type: 'addSignalStrength', value: -20 }],
      },
    ],
    onEnter: [],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // DOROTHY VOLUME 4: THE STATIC DRIFT MAZE (STAGES 16-25)
  // ─────────────────────────────────────────────────────────────────────────

  D_VOID_MAZE_16: {
    id: 'D_VOID_MAZE_16',
    character: 'dorothy',
    text: [
      {
        minOverrender: 4,
        content: `THE KANSAS RECURSION: ITERATION 02

You open the farmhouse door again. This time, the kitchen table is made of hardened yellow bricks. Aunt Em is sitting there, but her face is a blur of gray pixels. She is holding a Silver Slipper and cleaning it with a rag made of carbon paper.

"You're late for the audit, Dorothy," she says. Her voice is a low-frequency hum that makes your teeth ache.`,
      },
    ],
    choices: [
      {
        label: 'Sit at the table: Accept the household audit.',
        target: 'D_VOID_MAZE_17',
        effects: [{ type: 'setCompliance', value: 'high' }, { type: 'addLoad', value: 10 }],
      },
      {
        label: 'Run back into the hallway: This Em is a logic error.',
        target: 'D_VOID_MAZE_18',
        effects: [{ type: 'addDesync', value: 5 }, { type: 'addSignalStrength', value: -5 }],
      },
    ],
    onEnter: [],
  },

  D_VOID_MAZE_17: {
    id: 'D_VOID_MAZE_17',
    character: 'dorothy',
    text: [
      {
        minOverrender: 4,
        content: `THE DOMESTIC INQUEST

The pixelated Em hands you a form. It is a 'Declaration of Origin.' Every line you try to read shifts into a different language—Munchkin-script, Binary, and finally, just raw hex-code.

The kitchen window shows the Cyclone, but it isn't moving. It is a static image of a disaster, pinned to the sky by the Bureau's judicial restraints.`,
      },
    ],
    choices: [
      {
        label: 'Sign the Form: Claim Kansas as your primary jurisdiction.',
        target: 'D_VOID_MAZE_19',
        effects: [{ type: 'addWarrant', value: 15 }, { type: 'addSignalStrength', value: 10 }],
      },
      {
        label: 'Break the Window: Attempt to reach the static storm.',
        target: 'D_VOID_MAZE_20',
        effects: [{ type: 'addSmudge', value: 1 }, { type: 'addDisplacement', value: 10 }],
      },
    ],
    onEnter: [],
  },

  D_VOID_MAZE_18: {
    id: 'D_VOID_MAZE_18',
    character: 'dorothy',
    text: [
      {
        minOverrender: 5,
        content: `THE HALLWAY OF ECHOES

The hallway has no floor. You are walking on a suspension of 'Unrendered Data'—gray, gelatinous blocks of logic that hiss when your Silver Slippers touch them.

You hear the Tin Man's axe hitting wood in the distance, but the sound is coming from *inside* your own chest. The signal is cross-contaminating.`,
      },
    ],
    choices: [
      {
        label: 'Follow the Axe-Sound: Try to find a hardware anchor.',
        target: 'D_VOID_MAZE_21',
        effects: [{ type: 'addDesynctear', value: 5 }, { type: 'addLoad', value: 5 }],
      },
      {
        label: 'Scream into the Hallway: Force a signal spike.',
        target: 'D_VOID_MAZE_22',
        effects: [{ type: 'addSilverFriction', value: 20 }, { type: 'addWarrant', value: 10 }],
      },
    ],
    onEnter: [],
  },

  D_VOID_MAZE_19: {
    id: 'D_VOID_MAZE_19',
    character: 'dorothy',
    text: [
      {
        minOverrender: 5,
        content: `THE PAPERWORK BLIZZARD

You sign the form. It immediately dissolves into a thousand white flakes of carbon paper. They swirl around you, blocking your vision. They aren't cold; they are dry and smell of ancient dust.

[WARRANT ISSUED: UNAUTHORIZED CLAIM OF ORIGIN]`,
      },
    ],
    choices: [
      {
        label: 'Wade through the paper: The stairs must be here.',
        target: 'D_VOID_MAZE_23',
        effects: [{ type: 'addLoad', value: 10 }, { type: 'addDisplacement', value: 5 }],
      },
    ],
    onEnter: [],
  },

  D_VOID_MAZE_20: {
    id: 'D_VOID_MAZE_20',
    character: 'dorothy',
    text: [
      {
        minOverrender: 5,
        content: `THE GLASS FRACTURE

The window shatters, but there is no wind. Outside is just the 'Master Grid'—a black void filled with green flickering lines of code. You see the farmhouse from the outside; it is a small, gray box floating in a sea of nothing.

You are leaning out over the edge of the world.`,
      },
    ],
    choices: [
      {
        label: 'Jump: If Kansas is a signal, I must find the broadcast tower.',
        target: 'D_VOID_MAZE_24',
        effects: [{ type: 'addDisplacement', value: 50 }, { type: 'setCompliance', value: 'broken' }],
      },
      {
        label: 'Cling to the Frame: The box is the only home I have left.',
        target: 'D_VOID_MAZE_23',
        effects: [{ type: 'addLoad', value: 20 }],
      },
    ],
    onEnter: [],
  },

  D_VOID_MAZE_21: {
    id: 'D_VOID_MAZE_21',
    character: 'dorothy',
    text: [
      {
        minOverrender: 5,
        content: `THE TIN RESONANCE

You find a Tin Arm embedded in the hallway wall. It is still twitching, its fingers trying to grip a non-existent axe. It is leaking a mixture of black oil and silver solder.

The Silver Slippers begin to pull toward the arm. The magnetism is high-bandwidth and painful.`,
      },
    ],
    choices: [
      {
        label: 'Touch the Arm: Share the load of the hardware failure.',
        target: 'D_VOID_MAZE_25',
        effects: [{ type: 'addDesynctear', value: 10 }, { type: 'graft', material: 'silver_friction', target: 'tinman' }],
      },
      {
        label: 'Sever the Connection: Click the heels to repel the magnetism.',
        target: 'D_VOID_MAZE_25',
        effects: [{ type: 'addSilverFriction', value: 15 }, { type: 'addWarrant', value: 10 }],
      },
    ],
    onEnter: [],
  },

  D_VOID_MAZE_22: {
    id: 'D_VOID_MAZE_22',
    character: 'dorothy',
    text: [
      {
        minOverrender: 5,
        content: `THE SIGNAL SPIKE

Your scream fills the hallway. The Silver Slippers conduct it—the sound becomes visible, a white-hot arc of distortion that etches a warrant number into the unrendered data beneath your feet.

[WARRANT ESCALATION: UNAUTHORIZED SIGNAL EMISSION]

The echo returns altered. It is no longer your voice. It is the Bureau's Confirmation Tone, played back at maximum amplitude. The hallway walls flicker: they are rendering and un-rendering in rhythm with the sound.`,
      },
    ],
    choices: [
      {
        label: 'Follow the Tone: It came from somewhere structural.',
        target: 'D_VOID_MAZE_25',
        effects: [{ type: 'addDisplacement', value: 10 }, { type: 'addLoad', value: 5 }],
      },
      {
        label: 'Collapse the Signal: Click the heels to cancel the frequency.',
        target: 'D_VOID_MAZE_25',
        effects: [{ type: 'addSilverFriction', value: 10 }, { type: 'addSmudge', value: 1 }],
      },
    ],
    onEnter: [],
  },

  D_VOID_MAZE_23: {
    id: 'D_VOID_MAZE_23',
    character: 'dorothy',
    text: [
      {
        minOverrender: 5,
        content: `THE PAPER MAELSTROM

The carbon paper is everywhere now—ceiling, floor, walls replaced by a continuous slow whirl of dry white flakes. Each sheet carries a partial record: a munchkin census entry, a Cyclone damage report, a Declaration of Origin with your name replaced by a case number.

[CASE FILE: D-01 / STATUS: UNRESOLVED]

The Silver Slippers leave scorched footprints in the paper. The heat is not burning; it is filing. Every step is being logged by a system you cannot see.`,
      },
    ],
    choices: [
      {
        label: 'Push through: The cellar door must be at the center.',
        target: 'D_VOID_MAZE_25',
        effects: [{ type: 'addLoad', value: 10 }, { type: 'addDisplacement', value: 5 }],
      },
      {
        label: 'Read a Sheet: Find your case number in the archive.',
        target: 'D_VOID_MAZE_25',
        effects: [{ type: 'addWarrant', value: 10 }, { type: 'setFlag', key: 'read_case_file', value: true }],
      },
    ],
    onEnter: [],
  },

  D_VOID_MAZE_24: {
    id: 'D_VOID_MAZE_24',
    character: 'dorothy',
    text: [
      {
        minOverrender: 5,
        content: `THE BROADCAST TOWER FALL

There is no ground. There is no broadcast tower. There is only the Master Grid—an infinite lattice of green light that recedes in every direction. The farmhouse is a gray speck somewhere above you, shrinking.

[DISPLACEMENT: CRITICAL]
[JURISDICTION: NONE APPLICABLE]

The Silver Slippers are the only solid objects in the void. They hum at a frequency that has no name in the Bureau's codec. Kansas is not a place. It is a frequency. You are falling toward it.`,
      },
    ],
    choices: [
      {
        label: 'Click the heels: Broadcast the home signal from inside the void.',
        target: 'D_VOID_MAZE_25',
        effects: [{ type: 'addSilverFriction', value: 20 }, { type: 'addDisplacement', value: 10 }],
      },
      {
        label: 'Stop falling: Anchor to the nearest line of code.',
        target: 'D_VOID_MAZE_25',
        effects: [{ type: 'addLoad', value: 15 }, { type: 'setCompliance', value: 'broken' }],
      },
    ],
    onEnter: [],
  },

  D_VOID_MAZE_25: {
    id: 'D_VOID_MAZE_25',
    character: 'dorothy',
    text: [
      {
        minOverrender: 5,
        content: `THE FINAL FLOOR-WEIGHT

The hallway terminates at a door labeled 'STORM CELLAR / ARCHIVE ACCESS.' The wood is rotten, the grain of the door replaced by a texture of wet carbon paper.

You can hear the Bureau's central cooling fans humming behind the wood. It is the sound of a billion files being sorted at once. It is the sound of your own deletion.`,
      },
    ],
    choices: [
      {
        label: 'Open the door: Enter the Unlit Basement.',
        target: 'D_VOID_DESCENT_15',
        effects: [{ type: 'addDisplacement', value: 100 }],
      },
    ],
    onEnter: [],
  },

  D_VOID_DESCENT_14: {
    id: 'D_VOID_DESCENT_14',
    character: 'dorothy',
    text: [
      {
        minOverrender: 5,
        content: `THE SMELL OF THE BASEMENT

  The recursion breaks. You are standing at the top of a wooden staircase. The air rising from below is cold and smells of wet wool. This is the 'Storm Cellar,' but there is no storm. There is only the Bureau's cooling system, humming in the dark.

  "Dorothy," a voice whispers. It sounds like Aunt Em, but the cadence is perfectly mathematical.`,
      },
    ],
    choices: [
      {
        label: "Descend: Follow the 'Aunt Em' variable.",
        target: 'D_VOID_DESCENT_15',
        effects: [{ type: 'addDisplacement', value: 10 }],
      },
      {
        label: 'Click the leaden slippers: One last desperate transmission.',
        target: 'D_VOID_DESCENT_15',
        effects: [{ type: 'addWarrant', value: 20 }, { type: 'addSilverFriction', value: 20 }],
      },
    ],
    onEnter: [],
  },
}
