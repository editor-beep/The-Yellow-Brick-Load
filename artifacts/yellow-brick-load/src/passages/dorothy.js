/**
 * YELLOW BRICK LOAD — Dorothy Passages
 * Character: Dorothy (Unit D-01)
 *
 * The Nerve Pull Oracle (Dust Surgeon Ritual)
 * Triggered when displacement >= 5
 *
 * Oracle Interloper: The Dust Clerk — a woman in faded checked apron whose skin is
 * swirling topsoil and requisition forms, eyes like spinning silver dollars.
 * Makes a shallow cut along heel or temple, pulls nerve fiber mixed with
 * silver dust and Kansas soil, reads tension and color.
 */

export const dorothyPassages = {
  // ─────────────────────────────────────────────────────────────────────────
  // INIT / ENTRY
  // ─────────────────────────────────────────────────────────────────────────

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
  [ RUBY FRICTION: ACCUMULATING ]
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
          { type: 'addRubyFriction', value: 3 },
          { type: 'addDesync', value: 1 },
        ],
      },
    ],
    onEnter: [{ type: 'checkGhostSignal' }, { type: 'triggerOracle' }],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // MAIN PATHS
  // ─────────────────────────────────────────────────────────────────────────

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

  [ RUBY FRICTION: +5 ]
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
          { type: 'addRubyFriction', value: 3 },
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

  // ─────────────────────────────────────────────────────────────────────────
  // NERVE PULL ORACLE — THE DUST CLERK
  // ─────────────────────────────────────────────────────────────────────────

  DOROTHY_ORACLE_ENTRY: {
    id: 'DOROTHY_ORACLE_ENTRY',
    character: 'dorothy',
    text: [
      {
        minOverrender: 0,
        content: `THE DUST CLERK ARRIVES

  The woman steps out of the roadside dust as if she was always part of it.

  She wears a faded checked apron, but the fabric is made of pressed topsoil and requisition forms. Her skin is swirling Kansas dust — the wrong soil, the same soil on your dress — and her eyes are spinning silver dollars that click with each rotation. She smells of dry grass, paper, and the specific mineral cold of soil that has never been rained on quite enough.

  [ WETWARE EXTRACTION AUTHORIZED ]
  [ PROCEDURE: NERVE PULL READING ]
  [ OPERATOR: DUST CLERK / DISPLACEMENT DIVISION ]

  "Unit D-01," she says. Her voice is the sound of wind through wheat stubble. "Your displacement index has triggered a mandatory signal assessment." She makes a shallow cut along the back of your heel — you didn't feel it until the silver dust welled up, mixed with something thin and white. Nerve fiber. The Clerk makes a note while your heel is still open.`,
      },
    ],
    choices: [
      {
        label: 'Allow the extraction — let her pull the nerve thread.',
        target: 'DOROTHY_ORACLE_DRAW',
        effects: [{ type: 'addDisplacement', value: 2 }],
      },
      {
        label: 'Pull your heel back — resist the nerve pull.',
        target: 'DOROTHY_PATH_COMPLIANCE',
        effects: [
          { type: 'addWarrant', value: 2 },
          { type: 'addDesync', value: 1 },
          { type: 'setFlag', key: 'oracle_dorothy_refused', value: true },
        ],
      },
    ],
    onEnter: [],
  },

  DOROTHY_ORACLE_DRAW: {
    id: 'DOROTHY_ORACLE_DRAW',
    character: 'dorothy',
    text: [
      {
        minOverrender: 0,
        content: `THE NERVE READING

  The Dust Clerk holds the thread of nerve fiber up against the grey Oz light. It is mixed with silver dust and Kansas soil — three materials from three different coordinates, woven into a single filament that the Clerk reads like a map. She studies the tension, the color where the soil meets the silver, the frequency at which the nerve is still transmitting.

  "Eight registered displacement profiles," she announces. The silver-dollar eyes slow their spin. "The tension will determine your vector."

  The heel cut is still open. The Clerk makes another note.

  [ SELECT READING — THE CLERK READS THE NERVE TENSION ]`,
      },
    ],
    choices: [
      {
        label: '1. The Homesick Nerve — let the displacement surge.',
        target: 'DOROTHY_ORACLE_1',
        effects: [],
      },
      {
        label: '2. The Silver Incision — consume the friction for a reality-bend.',
        target: 'DOROTHY_ORACLE_2',
        effects: [],
      },
      {
        label: '3. The Warrant Thread — accept the Bureau\'s escalation.',
        target: 'DOROTHY_ORACLE_3',
        effects: [],
      },
      {
        label: '4. The Sepia Bleed — follow the high desync into old photographs.',
        target: 'DOROTHY_ORACLE_4',
        effects: [],
      },
      {
        label: '5. The Slipper Grind — take power at the cost of the heel.',
        target: 'DOROTHY_ORACLE_5',
        effects: [],
      },
      {
        label: '6. The Grafted Echo — let the nerve fiber mix with foreign material.',
        target: 'DOROTHY_ORACLE_6',
        effects: [],
      },
      {
        label: '7. The Dust Seal — accept the safety of forgetting.',
        target: 'DOROTHY_ORACLE_7',
        effects: [],
      },
      {
        label: '8. The Terminal Pull — catastrophic displacement.',
        target: 'DOROTHY_ORACLE_8',
        effects: [],
      },
    ],
    onEnter: [],
  },

  // ── Oracle Outcomes 1–8 ────────────────────────────────────────────────────

  DOROTHY_ORACLE_1: {
    id: 'DOROTHY_ORACLE_1',
    character: 'dorothy',
    text: [
      {
        minOverrender: 0,
        content: `THE HOMESICK NERVE

  The nerve thread reads at Kansas frequency. The Dust Clerk announces: "Home signal — unresolved. Displacement vector: surging." The Kansas dust on your dress flares gold. The road bricks briefly look like wheat.

  [ DISPLACEMENT: +6 ]
  [ KANSAS VISION: BLEEDS INTO OZ ]
  [ MEMORY-FRACTURE CHOICES: UNLOCKED ]

  Your heel aches from the cut. Through the ache, home-frequency memories pulse: the smell of the farmhouse, the flatness of the horizon, Auntie Em's hands. They overlap with the yellow brick beneath your feet and the overlap is unbearable. The Clerk notes: "Homesickness confirmed. Therapeutic denial — unavailable."`,
      },
    ],
    choices: [
      {
        label: 'Follow the Kansas frequency back through the memory fracture.',
        target: 'DOROTHY_END_HOME',
        effects: [
          { type: 'addDisplacement', value: 6 },
          { type: 'addDesync', value: 2 },
        ],
      },
      {
        label: 'Let the homesick nerve route toward the poppy sleep.',
        target: 'DOROTHY_END_POPPY',
        effects: [
          { type: 'addDisplacement', value: 6 },
          { type: 'addLoad', value: 10 },
        ],
      },
    ],
    onEnter: [],
  },

  DOROTHY_ORACLE_2: {
    id: 'DOROTHY_ORACLE_2',
    character: 'dorothy',
    text: [
      {
        minOverrender: 0,
        content: `THE RUBY INCISION

  The Dust Clerk follows the nerve thread down to the slipper — and makes a second cut, this time into the ruby fabric itself. The friction built up in the crystal releases in a single, blinding surge. Your heel bone grinds briefly against the ruby crystal lattice. The pain is precise, bright, and instructive.

  [ RUBY FRICTION: CONSUMED ]
  [ REALITY-BEND OPTIONS: OPEN ]
  [ NOTE: THE POWER COSTS THE HEEL ]

  The Clerk reads the ruby dust and nerve together: "Reality-bend signal: available. Cost: permanent heel scarring." The choice is clear. The power to bend the road — to route toward home — is inside the slippers. It was always inside the slippers. It just requires the heel to know it.`,
      },
    ],
    choices: [
      {
        label: 'Use the ruby power — attempt the home-frequency reality bend.',
        target: 'DOROTHY_END_HOME',
        effects: [
          { type: 'addRubyFriction', value: -5 },
          { type: 'addDesync', value: 3 },
          { type: 'setFlag', key: 'heel_scarred', value: true },
        ],
      },
      {
        label: 'Save the ruby friction — route the power toward the road.',
        target: 'DOROTHY_PATH_ROAD',
        effects: [
          { type: 'addRubyFriction', value: 5 },
          { type: 'addLoad', value: 12 },
        ],
      },
    ],
    onEnter: [],
  },

  DOROTHY_ORACLE_3: {
    id: 'DOROTHY_ORACLE_3',
    character: 'dorothy',
    text: [
      {
        minOverrender: 0,
        content: `THE WARRANT THREAD

  The nerve thread reads in Bureau frequency. The Dust Clerk produces a small official form from the folds of her gingham-soil dress. "Displacement index has crossed warrant threshold. Filing now." The form is stamped while the heel is still open.

  [ WARRANT LEVEL: +6 ]
  [ CALM PATHS: GRAYED ]
  [ ESCAPE / REBELLION VECTOR: FORCED ]

  The warrant is official. Your presence in Oz is now a filing event. Every step on the Yellow Brick Load adds to the case file. The calm road is no longer accessible — the warrant means every choice ahead is a choice about compliance or flight. The Clerk makes its note. The note is in triplicate.`,
      },
    ],
    choices: [
      {
        label: 'Accept the warrant — become compliant enough to be archived.',
        target: 'DOROTHY_END_SEAL',
        effects: [
          { type: 'addWarrant', value: 6 },
          { type: 'setCompliance', value: 'high' },
          { type: 'grayOut', key: 'DOROTHY_PATH_SLIPPERS' },
        ],
      },
      {
        label: 'Run — use the warrant as momentum toward escape.',
        target: 'DOROTHY_ORACLE_8',
        effects: [
          { type: 'addWarrant', value: 6 },
          { type: 'addDisplacement', value: 4 },
          { type: 'addDesync', value: 2 },
        ],
      },
    ],
    onEnter: [],
  },

  DOROTHY_ORACLE_4: {
    id: 'DOROTHY_ORACLE_4',
    character: 'dorothy',
    text: [
      {
        minOverrender: 0,
        content: `THE SEPIA BLEED

  The nerve thread breaks when the Clerk pulls it. The broken end bleeds a sepia-toned fluid — the specific color of old photographs, of memory processed into permanence. Old images overlay the wound: Auntie Em's face, the barn door, the flat horizon, all in sepia and all wrong-sized.

  [ DESYNC: +5 ]
  [ PHOTOGRAPH OVERLAY: ACTIVE ]
  [ OLD MEMORY: BLEEDING INTO PRESENT ]

  You see Oz through a film of Kansas past. The yellow bricks have wheat superimposed on them. The Munchkins look briefly like farmhands. The Dust Clerk has become a figure from a photograph you don't have anymore. The Clerk makes a note: "Temporal desync confirmed. Memory contamination logged."`,
      },
    ],
    choices: [
      {
        label: 'Let the sepia bleed route toward the poppy sleep.',
        target: 'DOROTHY_END_POPPY',
        effects: [
          { type: 'addDesync', value: 5 },
          { type: 'addOverrender', value: 2 },
        ],
      },
      {
        label: 'Follow the sepia back toward the home-frequency ending.',
        target: 'DOROTHY_END_HOME',
        effects: [
          { type: 'addDesync', value: 5 },
          { type: 'addDisplacement', value: 3 },
        ],
      },
    ],
    onEnter: [],
  },

  DOROTHY_ORACLE_5: {
    id: 'DOROTHY_ORACLE_5',
    character: 'dorothy',
    text: [
      {
        minOverrender: 0,
        content: `THE SLIPPER GRIND

  The Dust Clerk presses both hands against the slippers' heels simultaneously. The crystal lattice grinds against the heel bone — not a click, but a sustained pressure that generates heat. You cry out. The Clerk makes a note. The pain is bright and precise and grants you temporary clarity about the road ahead.

  [ RUBY FRICTION: +8 ]
  [ PERMANENT LIMP: LOGGED ]
  [ TEMPORARY POWER: AVAILABLE ]
  [ COST: FILED UNDER "NECESSARY PROCEDURE" ]

  The power surges up through the heel and into the nerve. For a brief moment you know exactly where the road leads and what the slippers can do and what clicking them actually means. The Clerk stamps the reading: "Slipper grind: successful. Power available. Limp: permanent."`,
      },
    ],
    choices: [
      {
        label: 'Use the slipper power at full cost — force a home route.',
        target: 'DOROTHY_END_HOME',
        effects: [
          { type: 'addRubyFriction', value: 8 },
          { type: 'setFlag', key: 'heel_scarred', value: true },
          { type: 'setFlag', key: 'permanent_limp', value: true },
        ],
      },
      {
        label: 'Bank the power and continue — route toward the road.',
        target: 'DOROTHY_PATH_ROAD',
        effects: [
          { type: 'addRubyFriction', value: 8 },
          { type: 'setFlag', key: 'permanent_limp', value: true },
          { type: 'addLoad', value: 10 },
        ],
      },
    ],
    onEnter: [],
  },

  DOROTHY_ORACLE_6: {
    id: 'DOROTHY_ORACLE_6',
    character: 'dorothy',
    text: [
      {
        minOverrender: 0,
        content: `THE GRAFTED ECHO

  The nerve fiber mixes with material already in the wound — foreign material from units encountered on the road. The Dust Clerk reads the hybrid: "Cross-unit contamination. Nerve thread mixed with: Lion tremor residue, Tin Man oil trace, Scarecrow straw slurry."

  [ CROSS-UNIT GRAFT: ACTIVE ]
  [ NERVE MIXED WITH: LION / TIN / SCARECROW ]
  [ SURREALITY: ELEVATED ]

  {{#flags.graft_scarecrow_straw_in_dorothy}}Dry agricultural fiber scratches briefly inside the heel wound — Scarecrow material, windblown and deeply lost.{{/flags.graft_scarecrow_straw_in_dorothy}}
  {{#flags.graft_tinman_oil_in_dorothy}}A slick warmth where the nerve meets the ruby — the oil has already been here.{{/flags.graft_tinman_oil_in_dorothy}}

  You feel their displacement briefly — the Lion's fear-tremor, the Tin Man's mechanical ache, the Scarecrow's thinking-about-thinking. They are all lost in the same way you are. The Clerk makes a note: "Body horror echo — cross-character contamination confirmed."`,
      },
    ],
    choices: [
      {
        label: 'Let the grafted echoes route toward universal displacement.',
        target: 'DOROTHY_END_DISPLACEMENT',
        effects: [
          { type: 'addDisplacement', value: 4 },
          { type: 'addDesync', value: 3 },
          { type: 'graft', material: 'dorothy_nerve', target: 'lion' },
          { type: 'graft', material: 'dorothy_nerve', target: 'tinman' },
          { type: 'graft', material: 'dorothy_nerve', target: 'scarecrow' },
        ],
      },
      {
        label: 'Use the cross-echo to route toward the poppy field.',
        target: 'DOROTHY_END_POPPY',
        effects: [
          { type: 'addDisplacement', value: 4 },
          { type: 'addLoad', value: 10 },
        ],
      },
    ],
    onEnter: [],
  },

  DOROTHY_ORACLE_7: {
    id: 'DOROTHY_ORACLE_7',
    character: 'dorothy',
    text: [
      {
        minOverrender: 0,
        content: `THE DUST SEAL

  The Dust Clerk closes the heel cut with Kansas dust — the same dust from your dress, pressed into the wound as a poultice. It seals cleanly. The nerve thread is tucked back in. The home signal is muffled beneath soil from home, which is the most effective muffler available.

  [ DISPLACEMENT: SEALED ]
  [ HOME FREQUENCY: MUFFLED ]
  [ COMPLIANCE GRAFT: ACTIVE ]
  [ COST: FORGETTING A SMALL PART OF HOME ]

  You feel safe. The road is clear. The Bureau warrant level drops. The Dust Clerk stamps: "Dust seal: applied. Unit D-01: compliant and mobile." The gingham dress stops glowing. The slippers hum at a lower, more acceptable frequency.

  You are safe. You are moving in the right direction. You are not sure you remember what the farmhouse door looked like.`,
      },
    ],
    choices: [
      {
        label: 'Accept the sealed safety — route toward the compliance ending.',
        target: 'DOROTHY_END_SEAL',
        effects: [
          { type: 'addDisplacement', value: -3 },
          { type: 'setCompliance', value: 'high' },
          { type: 'setFlag', key: 'dust_sealed', value: true },
        ],
      },
      {
        label: 'Unseal the dust — reopen the wound and the home signal.',
        target: 'DOROTHY_PATH_SLIPPERS',
        effects: [
          { type: 'addDisplacement', value: 2 },
          { type: 'addWarrant', value: 2 },
        ],
      },
    ],
    onEnter: [],
  },

  DOROTHY_ORACLE_8: {
    id: 'DOROTHY_ORACLE_8',
    character: 'dorothy',
    text: [
      {
        minOverrender: 0,
        content: `THE TERMINAL PULL

  The Dust Clerk pulls the nerve thread past its elastic limit. It snaps. Both ends retract — one into the heel, one into the Clerk's corn-husk hand. A wave of displacement washes through the body like a frequency without a home. The ruby dust floats up from the heel wound in a fine, glittering column.

  [ DISPLACEMENT: CRITICAL ]
  [ NERVE: SEVERED ]
  [ UNIVERSAL DELETION PATH: OPEN ]
  [ FINAL FREQUENCY: AVAILABLE ]

  The road beneath your feet looks very far away. The Kansas dust on your dress is rising off the fabric, returning somewhere. The Dust Clerk makes its final note: "Terminal pull confirmed. Unit D-01: unlocated." The silver-dollar eyes have stopped spinning.

  You are between coordinates. The slippers are humming at a frequency that has no name in the Bureau's registry.`,
      },
    ],
    choices: [
      {
        label: 'Follow the terminal displacement — let the frequency route home.',
        target: 'DOROTHY_END_HOME',
        effects: [
          { type: 'addDisplacement', value: 10 },
          { type: 'addDesync', value: 5 },
          { type: 'setCompliance', value: 'broken' },
        ],
      },
      {
        label: 'Let the severed nerve route toward universal deletion.',
        target: 'DOROTHY_END_DISPLACEMENT',
        effects: [
          { type: 'addDisplacement', value: 10 },
          { type: 'addOverrender', value: 3 },
        ],
      },
    ],
    onEnter: [],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // STUB ENDINGS
  // ─────────────────────────────────────────────────────────────────────────

  DOROTHY_END_HOME: {
    id: 'DOROTHY_END_HOME',
    character: 'dorothy',
    endingId: 'D-END-01',
    endingName: 'There Is No Place',
    institution: 'Residential',
    systemStatus: 'Returned',
    isEnding: true,
    surreality: 6,
    text: [
      {
        minOverrender: 0,
        content: `THE FINAL LOG [D-END-01]

  Tone: Agricultural-Hollow.
  Theme: Home is the coordinate that the system cannot file.

  The slippers click three times. The Bureau logs this as an "Unauthorized Coordinate Change." Kansas appears. It is exactly as you left it — flat, gold, low-gravity, and aggressively itself. The farmhouse is standing. Auntie Em is at the door.

  [ UNIT D-01 // STATUS: RETURNED ]
  [ COORDINATE: KANSAS-NULL ]
  [ WARRANT: PENDING / UNENFORCEABLE ]

  You are home. The heel still aches. The graft echoes of Lion and Tin Man and Scarecrow are still faintly present — a borrowed tremor in your wrist, an oil smell you can't place, a dry rustle when you breathe too deeply. The Kansas dust settles. The Bureau's warrant is unenforceable in a jurisdiction that the system refuses to acknowledge exists.

  Final Log: The Unit has been returned to unindexed coordinates. Case file: SUSPENDED.

  1 - 1 = 1.

  If home is where the system can't follow, is the heel wound worth the coordinates?`,
      },
    ],
    choices: [],
    onEnter: [],
  },

  DOROTHY_END_POPPY: {
    id: 'DOROTHY_END_POPPY',
    character: 'dorothy',
    endingId: 'D-END-16',
    endingName: 'The Poppy Sleep',
    institution: 'Pharmaceutical',
    systemStatus: 'Dormant',
    isEnding: true,
    surreality: 7,
    text: [
      {
        minOverrender: 0,
        content: `THE FINAL LOG [D-END-16]

  Tone: Chemical-Soft.
  Theme: The kindest deletion is the one you cannot feel.

  The poppy field appears at the edge of the road. The flowers are fleshy — velvet petals of stretched skin, stems of bundled nerve. They smell of warm anesthesia and the specific sweetness of something being slowly replaced. You lie down. The displacement counter slows. The home frequency muffles into a warm, distant hum.

  [ UNIT D-01 // STATUS: DORMANT ]
  [ DISPLACEMENT: SUSPENDED ]
  [ RUBY FRICTION: COOLING ]

  The Poppy Drones emerge from the blooms. They are careful and soft-voiced. They inject the resin through the heel wound — it was already open, after all. New roots push gently through the injection site.

  Final Log: The Unit is resting. The field is proud of her.

  1 - 1 = 1.

  If the sleep feels like home, is it wrong to stay?`,
      },
    ],
    choices: [],
    onEnter: [],
  },

  DOROTHY_END_SEAL: {
    id: 'DOROTHY_END_SEAL',
    character: 'dorothy',
    endingId: 'D-END-07',
    endingName: 'The Documented Visit',
    institution: 'Bureaucratic',
    systemStatus: 'Filed',
    isEnding: true,
    surreality: 2,
    text: [
      {
        minOverrender: 0,
        content: `THE FINAL LOG [D-END-07]

  Tone: Legalistic-Flat.
  Theme: The most dangerous trip is the one that gets properly filed.

  The Wizard reviews your case. The warrant is processed. The displacement is logged as a "Scheduled Journey with Unauthorized Origin Point." The slippers are confiscated as Bureau property. In exchange, you receive a Certificate of Residency (Temporary, Non-Renewable).

  [ UNIT D-01 // STATUS: FILED ]
  [ COORDINATE: OZ-PERMANENT ]
  [ KANSAS: ARCHIVED AS PRIOR RESIDENCE ]

  The heel wound is sutured. The nerve thread is on file. The home frequency is indexed but unplayable in this jurisdiction. You are fully documented. The Bureau is very pleased with the paperwork.

  Final Log: The Unit is accounted for. The road is closed.

  1 - 1 = 1.

  If the journey is filed, does the destination still feel like anywhere?`,
      },
    ],
    choices: [],
    onEnter: [],
  },

  DOROTHY_END_DISPLACEMENT: {
    id: 'DOROTHY_END_DISPLACEMENT',
    character: 'dorothy',
    endingId: 'D-END-22',
    endingName: 'The Unlocated Signal',
    institution: 'Void',
    systemStatus: 'Unlocated',
    isEnding: true,
    surreality: 9,
    text: [
      {
        minOverrender: 0,
        content: `THE FINAL LOG [D-END-22]

  Tone: Void-Dispersed.
  Theme: To be between places is to be the distance itself.

  The slippers keep humming after you are no longer inside them. The heel wound opened a channel between Kansas-frequency and Oz-standard that cannot be closed by either jurisdiction. You are not at either coordinate. You are the displacement between them — a signal in transit, permanently in transit, without a destination the Bureau can name.

  [ UNIT D-01 // STATUS: UNLOCATED ]
  [ COORDINATE: NULL / TRANSIT ]
  [ SLIPPERS: STILL HUMMING ]

  The Dust Clerk files a Missing Unit report. The Kansas dust is still traveling. Somewhere on the Yellow Brick Load, a small cloud of it settles briefly in the wounds of a trembling Lion unit, a seized Tin Man, a hollow Scarecrow — and moves on.

  Final Log: The Unit is the distance. The frequency is the name.

  1 - 1 = 1.

  If the signal never arrives, was there ever a home to return to?`,
      },
    ],
    choices: [],
    onEnter: [],
  },
}
