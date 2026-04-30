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
        content: `THE MORAL ERROR

  You attempt to lift the house. You claw at the wet wood, your fingernails filling with splintered data. "I have to help her," you sob.

  The Munchkin-class units stop dancing. They look at you with the flat, unblinking eyes of a collective labor-force. To them, death is just a 'Reallocation of Resources.' Your concern is logged as a 'Sentinel Logic Error.'

  The Pink Smog (Glinda) speaks: "The deed is indexed, Dorothy. You cannot un-delete the deleted. You can only compensate the Bureau with service."`,
      },
    ],
    choices: [
      {
        label: "Accept the Debt: 'What must I do to pay for her life?'",
        target: 'D_PATH_TRIAL',
        effects: [{ type: 'addLoad', value: 15 }],
      },
      {
        label: 'Flee the Scene: Run down the Logic Gate (Yellow Brick Road).',
        target: 'D_GRIND_DISPLACEMENT_01',
        effects: [{ type: 'addDisplacement', value: 10 }],
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

  The Munchkin Sector dissolves. You are suddenly standing in a courtroom carved from pressurized wet gypsum. The ceiling is too low; the air is thick with the scent of carbon paper and old, damp wool.

  The Judge is not a person. It is a massive, multi-lens camera array suspended from the ceiling by rusted chains. It whirrs as it focuses on your Silver Slippers.

  "Unit D-97," a voice booms from a speaker filled with grit. "You have performed a Deletion Event without a Warrant. You have converted an Administrator into Dust. How do you propose to balance the ledger?"`,
      },
    ],
    choices: [
      {
        label: "Offer Labor: 'I'll walk the road. I'll do the Wizard's tasks.'",
        target: 'D_TRIAL_LABOR',
        effects: [{ type: 'addLoad', value: 20 }, { type: 'setCompliance', value: 'high' }],
      },
      {
        label: "Offer the Slippers: 'Take the shoes back. I don't want them.'",
        target: 'D_TRIAL_SACRIFICE',
        effects: [{ type: 'addSilverFriction', value: -10 }, { type: 'addWarrant', value: 5 }],
      },
      {
        label: "Argue the Cyclone: 'The weather is the culprit, not me.'",
        target: 'D_TRIAL_METEOROLOGY',
        effects: [{ type: 'addSignalStrength', value: 15 }, { type: 'addDesync', value: 5 }],
      },
    ],
    onEnter: [],
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
}
