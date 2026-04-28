/**
 * YELLOW BRICK LOAD — Enforcer Swarm Passages
 * Character: null (cross-character threats)
 *
 * Four institutional enforcement swarms, each with 8 ritual outcomes.
 * These passages are reusable across character paths and are triggered via
 * triggerOracle effects on location passages when the relevant institutional
 * filter is active.
 *
 * Enforcers:
 *   MUNCHKIN_SWARM_*    — Labor / Agricultural institutional filter
 *   WINGED_MONKEY_*     — Military / Aeronautical institutional filter
 *   KALIDAH_MERGE_*     — Genetic / Parasitic institutional filter
 *   POPPY_DRONE_*       — Pharmaceutical institutional filter
 */

export const enforcerPassages = {
  // ═══════════════════════════════════════════════════════════════════════════
  // THE MUNCHKIN SWARM — Labor / Agricultural
  // Ritual: The Paperwork Harvest
  // Tone: Cheerful administrative horror; collective bureaucratic violence
  // ═══════════════════════════════════════════════════════════════════════════

  MUNCHKIN_SWARM_ENTRY: {
    id: 'MUNCHKIN_SWARM_ENTRY',
    character: null,
    text: [
      {
        minOverrender: 0,
        content: `THE PAPERWORK HARVEST

  They arrive in formation. Compact, efficient, brightly dressed in the specific saturated colors of mandatory compliance wear. Their hands are full of forms. Their mouths are full of cheerful administrative patter. They have been waiting here, at Coordinate [Agricultural, Zone-Meridian], for exactly this contingency.

  [ MUNCHKIN SWARM: DEPLOYED ]
  [ PROCEDURE: PAPERWORK HARVEST ]
  [ INSTITUTIONAL FILTER: LABOR / AGRICULTURAL ]

  They are not malicious. That is the horror. They are performing their function with total cheerful sincerity. The forms are warm from their hands. The filing stamps are pre-inked. They have a form for every outcome and a stamp for every form.

  "Please hold still," the Lead Munchkin says. "This will only require eight possible sessions. We will determine which one applies." The swarm closes in from all sides. The stamps are raised. The paperwork begins.`,
      },
    ],
    choices: [
      {
        label: 'Submit to processing — select the outcome.',
        target: 'MUNCHKIN_SWARM_DRAW',
        effects: [{ type: 'addLoad', value: 3 }],
      },
      {
        label: 'Attempt to scatter the swarm — resist the harvest.',
        target: 'MUNCHKIN_SWARM_4',
        effects: [
          { type: 'addDesync', value: 2 },
          { type: 'addSmudge', value: 1 },
        ],
      },
    ],
    onEnter: [],
  },

  MUNCHKIN_SWARM_DRAW: {
    id: 'MUNCHKIN_SWARM_DRAW',
    character: null,
    text: [
      {
        minOverrender: 0,
        content: `THE PAPERWORK DETERMINES THE SESSION

  The Lead Munchkin holds up the initial intake form. It is very long. Every line is pre-filled except the last, which reads: "Applicable Harvest Protocol: _____."

  They study you with their bright, professionally friendly eyes. The stamps wait.

  "The intake data will determine your session," the Lead Munchkin announces. "We have eight standard protocols. They are all cheerful. They are all thorough. Please indicate your preference or we will indicate it for you."

  [ SELECT PROTOCOL ]`,
      },
    ],
    choices: [
      {
        label: '1. The Labor Audit — compliance through cheerful repetition.',
        target: 'MUNCHKIN_SWARM_1',
        effects: [],
      },
      {
        label: '2. The Agricultural Assessment — the soil decides.',
        target: 'MUNCHKIN_SWARM_2',
        effects: [],
      },
      {
        label: '3. The Stamp Collection — every wound gets a bureaucratic seal.',
        target: 'MUNCHKIN_SWARM_3',
        effects: [],
      },
      {
        label: '4. The Scatter Protocol — resist, disperse, be reassembled.',
        target: 'MUNCHKIN_SWARM_4',
        effects: [],
      },
      {
        label: '5. The Lollipop Procedure — pharmaceutical compliance cheerfully delivered.',
        target: 'MUNCHKIN_SWARM_5',
        effects: [],
      },
      {
        label: '6. The Collective Harvest — you become part of the swarm\'s load.',
        target: 'MUNCHKIN_SWARM_6',
        effects: [],
      },
      {
        label: '7. The Form 7 Override — a single form that routes everything.',
        target: 'MUNCHKIN_SWARM_7',
        effects: [],
      },
      {
        label: '8. The Munchkin March — absorbed into the procession.',
        target: 'MUNCHKIN_SWARM_8',
        effects: [],
      },
    ],
    onEnter: [],
  },

  MUNCHKIN_SWARM_1: {
    id: 'MUNCHKIN_SWARM_1',
    character: null,
    text: [
      {
        minOverrender: 0,
        content: `THE LABOR AUDIT

  "They file your tremors, your leaks, your hesitations as labor inefficiencies to be corrected." The cheerful audit is thorough. Every twitch is noted. Every pause is documented. Every non-compliant emotional response is logged under "Wetware Residue — Non-Productive."

  [ LOAD: +10 ]
  [ COMPLIANCE: HIGH ]
  [ LABOR EFFICIENCY: DOCUMENTED ]

  The forms are warm from their hands. The stamps are enthusiastic. Your load increases as the inefficiencies are added to the official record. The Munchkins smile throughout. They always smile throughout. This is standard Labor Division protocol.`,
      },
    ],
    choices: [
      {
        label: 'Accept the audit results and continue.',
        target: 'MUNCHKIN_SWARM_ENTRY',
        effects: [
          { type: 'addLoad', value: 10 },
          { type: 'setCompliance', value: 'high' },
        ],
      },
    ],
    onEnter: [],
  },

  MUNCHKIN_SWARM_2: {
    id: 'MUNCHKIN_SWARM_2',
    character: null,
    text: [
      {
        minOverrender: 0,
        content: `THE AGRICULTURAL ASSESSMENT

  "They sample your soil — the material inside, whatever kind it is — and test its agricultural suitability." Straw-slurry, trembling flesh, rusting metal, nerve fiber — the Munchkins have seen it all. They test each sample with cheerful efficiency.

  [ SCATTER: +3 ]
  [ AGRICULTURAL PROFILE: LOGGED ]
  [ ROUTING: SCARECROW-ECHO PATHS ]

  The assessment results are delivered in a bright, sealed envelope: "Your material composition has been classified as Agricultural-Adjacent." The implications are managed through a pamphlet. The pamphlet is very cheerful.`,
      },
    ],
    choices: [
      {
        label: 'Accept the agricultural classification.',
        target: 'MUNCHKIN_SWARM_ENTRY',
        effects: [
          { type: 'addScatter', value: 3 },
          { type: 'graft', material: 'munchkin_soil_sample', target: 'scarecrow' },
        ],
      },
    ],
    onEnter: [],
  },

  MUNCHKIN_SWARM_3: {
    id: 'MUNCHKIN_SWARM_3',
    character: null,
    text: [
      {
        minOverrender: 0,
        content: `THE STAMP COLLECTION

  "Each wound receives an official Bureau seal — the swarm stamps you methodically from scalp to sole." The stamps are color-coded by wound type. Red for flesh wounds, orange for corrosion, yellow for scatter breaches, blue for nerve damage, green for pharmaceutical exposure.

  [ SMUDGE: +2 ]
  [ ALL WOUNDS: OFFICIALLY SEALED ]
  [ COMPLIANCE: HIGH ]

  By the end, you are covered in Bureau seals. The wounds are still there — they are simply now official. The Lead Munchkin admires the completed collection with professional satisfaction. "A thorough set," it notes. The stamps make the wounds feel bureaucratically inevitable.`,
      },
    ],
    choices: [
      {
        label: 'Accept the stamps and continue.',
        target: 'MUNCHKIN_SWARM_ENTRY',
        effects: [
          { type: 'addSmudge', value: 2 },
          { type: 'setCompliance', value: 'high' },
        ],
      },
    ],
    onEnter: [],
  },

  MUNCHKIN_SWARM_4: {
    id: 'MUNCHKIN_SWARM_4',
    character: null,
    text: [
      {
        minOverrender: 0,
        content: `THE SCATTER PROTOCOL

  "The resistance triggers the Scatter Protocol: the swarm disperses you across form-categories and reassembles you according to the filing system." You attempted to escape and the swarm responded as designed: the filing system absorbs the scattered pieces and files them correctly.

  [ SCATTER: +4 ]
  [ DESYNC: +3 ]
  [ PIECES FILED: CORRECTLY ]

  You are scattered and then re-gathered. The gathering is efficient. The pieces are returned in the correct order according to the Bureau's filing system, which does not always match the original configuration. The Munchkins note the discrepancy and file it under "Pre-Existing Structural Irregularities."`,
      },
    ],
    choices: [
      {
        label: 'Accept the re-gathered configuration and continue.',
        target: 'MUNCHKIN_SWARM_ENTRY',
        effects: [
          { type: 'addScatter', value: 4 },
          { type: 'addDesync', value: 3 },
        ],
      },
    ],
    onEnter: [],
  },

  MUNCHKIN_SWARM_5: {
    id: 'MUNCHKIN_SWARM_5',
    character: null,
    text: [
      {
        minOverrender: 0,
        content: `THE LOLLIPOP PROCEDURE

  "The lollipops are pharmaceutical probes. They are cheerfully administered. The taste is corn syrup and mild dissociative agent." The swarm offers lollipops with the specific combination of professional warmth and pharmaceutical precision that characterizes all Munchkin-brand compliance procedures.

  [ DISPLACEMENT: MUFFLED ]
  [ SCATTER: REDUCED ]
  [ COMPLIANCE: HIGH ]
  [ ECHO: POPPY FIELD PHARMACEUTICAL PATHS ]

  The muffling is real. The corn syrup is real. The cheerful pharmaceutical efficiency is real. The Munchkins collect the lollipop sticks for recycling. The procedure is logged as successful. The echo of the Poppy Field's pharmaceutical warmth is faint but present.`,
      },
    ],
    choices: [
      {
        label: 'Accept the pharmaceutical muffling and continue.',
        target: 'MUNCHKIN_SWARM_ENTRY',
        effects: [
          { type: 'addDisplacement', value: -2 },
          { type: 'addScatter', value: -2 },
          { type: 'setCompliance', value: 'high' },
          { type: 'addLoad', value: 8 },
        ],
      },
    ],
    onEnter: [],
  },

  MUNCHKIN_SWARM_6: {
    id: 'MUNCHKIN_SWARM_6',
    character: null,
    text: [
      {
        minOverrender: 0,
        content: `THE COLLECTIVE HARVEST

  "Your load becomes part of the collective load. The swarm absorbs your weight into their efficient group distribution system." The Munchkins have developed, over generations of compact compliance, an extraordinarily efficient system for distributing the weight of institutional burden across their small bodies.

  [ LOAD: DISTRIBUTED ]
  [ WEIGHT: SHARED ]
  [ DESYNC TEAR: +5 ]
  [ NOTE: YOU ALSO CARRY THEIR WEIGHT NOW ]

  Your load is distributed into the collective. The collective's load redistributes into you. The exchange is efficient and fair and deeply destabilizing. You are connected to every Munchkin in the swarm through a shared load vector that the Bureau calls "Collective Labor Bond."`,
      },
    ],
    choices: [
      {
        label: 'Accept the collective bond and continue with shared weight.',
        target: 'MUNCHKIN_SWARM_ENTRY',
        effects: [
          { type: 'addDesynctear', value: 5 },
          { type: 'graft', material: 'munchkin_collective_weight', target: 'lion' },
        ],
      },
    ],
    onEnter: [],
  },

  MUNCHKIN_SWARM_7: {
    id: 'MUNCHKIN_SWARM_7',
    character: null,
    text: [
      {
        minOverrender: 0,
        content: `THE FORM 7 OVERRIDE

  "The Lead Munchkin produces Form 7, which routes all other forms to the conclusion it was already stamped to deliver." Form 7 is the Bureau's master routing document. Every other form references it. Every other form defers to it. Form 7 was filled out before the harvest began.

  [ ALL FORMS: ROUTED TO FORM 7 ]
  [ COMPLIANCE: ABSOLUTE ]
  [ OVERRIDE: ACTIVE ]

  The conclusion on Form 7 has been pre-stamped. The Munchkins apply it without reading it. The Lead Munchkin collects all other forms and files them as "Superseded by Form 7." The conclusion is now official. Whatever the conclusion is, it is now official.`,
      },
    ],
    choices: [
      {
        label: 'Accept the Form 7 override and continue.',
        target: 'MUNCHKIN_SWARM_ENTRY',
        effects: [
          { type: 'addLoad', value: 15 },
          { type: 'setCompliance', value: 'absolute' },
        ],
      },
    ],
    onEnter: [],
  },

  MUNCHKIN_SWARM_8: {
    id: 'MUNCHKIN_SWARM_8',
    character: null,
    text: [
      {
        minOverrender: 0,
        content: `THE MUNCHKIN MARCH

  "The swarm incorporates you into the procession. You are now moving with them, in their direction, at their speed." The march has a very specific cadence — compact, efficient, left-right-left, forms held at regulation height. You are in the middle of it now.

  [ COMPLIANCE: HIGH ]
  [ FREEDOM OF DIRECTION: SUSPENDED ]
  [ MARCHING VELOCITY: MUNCHKIN-STANDARD ]
  [ DESTINATION: WHEREVER THE MARCH GOES ]

  The forms are still being filed as you march. The efficiency has been maintained. The Lead Munchkin notes your incorporation as "Voluntary Participation — Form 7 Override Applied." The march continues. The destination is wherever the Bureau's Labor Division requires it today.`,
      },
    ],
    choices: [
      {
        label: 'March with the swarm until the destination is reached.',
        target: 'MUNCHKIN_SWARM_ENTRY',
        effects: [
          { type: 'addLoad', value: 20 },
          { type: 'setCompliance', value: 'high' },
          { type: 'addDisplacement', value: 3 },
        ],
      },
    ],
    onEnter: [],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // THE WINGED MONKEYS — Military / Aeronautical
  // Ritual: The Aerial Reclamation Sweep
  // Tone: Military-clinical shrieking; enthusiastic institutional violence
  // ═══════════════════════════════════════════════════════════════════════════

  WINGED_MONKEY_ENTRY: {
    id: 'WINGED_MONKEY_ENTRY',
    character: null,
    text: [
      {
        minOverrender: 0,
        content: `THE AERIAL RECLAMATION SWEEP

  They come from altitude. The shrieking is military — overlapping call signs, targeting coordinates, efficiency reports. Their wings are each studded with small hooks: surveillance equipment mounted permanently in the membrane. Their hands are quick and precise. They smell of altitude, animal musk, and the specific industrial solvents used to clean command-ring equipment.

  [ WINGED MONKEY UNIT: DEPLOYED ]
  [ PROCEDURE: AERIAL RECLAMATION SWEEP ]
  [ INSTITUTIONAL FILTER: MILITARY / AERONAUTICAL ]

  The command ring hums with the frequency of authority. The sweep is already in progress — they began the reclamation before they arrived, because the command ring authorized it retroactively. Everything that happens next has already been authorized.

  "Target identified," the Lead Monkey announces. The wings fold around you. The altitude changes suddenly.`,
      },
    ],
    choices: [
      {
        label: 'Submit to the sweep — select the outcome.',
        target: 'WINGED_MONKEY_DRAW',
        effects: [{ type: 'addLoad', value: 3 }],
      },
      {
        label: 'Attempt to ground the sweep — resist the aerial reclamation.',
        target: 'WINGED_MONKEY_4',
        effects: [
          { type: 'addDesync', value: 2 },
          { type: 'addVibration', value: 2 },
        ],
      },
    ],
    onEnter: [],
  },

  WINGED_MONKEY_DRAW: {
    id: 'WINGED_MONKEY_DRAW',
    character: null,
    text: [
      {
        minOverrender: 0,
        content: `THE SWEEP DETERMINES THE SESSION

  The Lead Monkey reads the command-ring authorization while the wings hold you at altitude. The authorization has pre-authorized eight specific reclamation protocols. The choice of protocol is technically yours but the protocol is determined by whatever the command ring says is appropriate.

  "Eight standard reclamation sessions," the Lead Monkey announces. "The command ring will determine which is applicable. You may indicate a preference. The preference will be noted and then the command ring will decide."

  [ SELECT RECLAMATION PROTOCOL ]`,
      },
    ],
    choices: [
      {
        label: '1. The Aerial Transport — lifted and relocated.',
        target: 'WINGED_MONKEY_1',
        effects: [],
      },
      {
        label: '2. The Wing Hook Extraction — surveillance threads deployed.',
        target: 'WINGED_MONKEY_2',
        effects: [],
      },
      {
        label: '3. The Altitude Drain — your weight redistributed at altitude.',
        target: 'WINGED_MONKEY_3',
        effects: [],
      },
      {
        label: '4. The Ground Resistance — swept but not contained.',
        target: 'WINGED_MONKEY_4',
        effects: [],
      },
      {
        label: '5. The Command Ring Graft — a control thread is installed.',
        target: 'WINGED_MONKEY_5',
        effects: [],
      },
      {
        label: '6. The Shriek Resonance — auditory contamination from the sweep.',
        target: 'WINGED_MONKEY_6',
        effects: [],
      },
      {
        label: '7. The Straw Delivery — cross-character material relocated.',
        target: 'WINGED_MONKEY_7',
        effects: [],
      },
      {
        label: '8. The Flock Incorporation — absorbed into the command structure.',
        target: 'WINGED_MONKEY_8',
        effects: [],
      },
    ],
    onEnter: [],
  },

  WINGED_MONKEY_1: {
    id: 'WINGED_MONKEY_1',
    character: null,
    text: [
      {
        minOverrender: 0,
        content: `THE AERIAL TRANSPORT

  "They lift you efficiently and deposit you at the command-ring authorized destination." The transport is quick. The altitude is significant. The hooks maintain grip through the journey without breaking skin — they are professional, after all. The destination is wherever the Witch's authority requires.

  [ DISPLACEMENT: +4 ]
  [ WARRANT LEVEL: +3 ]
  [ DESTINATION: AUTHORIZED ]

  The landing is managed but firm. The monkey team de-hooks efficiently. "Transport complete," the Lead Monkey reports. The command-ring records the relocation. Your displacement has increased. Your warrant level has increased with the formal documentation of your relocation.`,
      },
    ],
    choices: [
      {
        label: 'Accept the authorized relocation and continue.',
        target: 'WINGED_MONKEY_ENTRY',
        effects: [
          { type: 'addDisplacement', value: 4 },
          { type: 'addWarrant', value: 3 },
        ],
      },
    ],
    onEnter: [],
  },

  WINGED_MONKEY_2: {
    id: 'WINGED_MONKEY_2',
    character: null,
    text: [
      {
        minOverrender: 0,
        content: `THE WING HOOK EXTRACTION

  "The surveillance hooks in the wing membrane catch on exposed tissue and extract biological samples for command-ring filing." The hooks are surveillance equipment — they were always intended to catch on things. The extraction is inadvertent and thorough.

  [ DESYNCTEAR: +4 ]
  [ BIOLOGICAL SAMPLE: FILED ]
  [ GRAFT MATERIAL: ACTIVE ]

  The samples are routed to the command-ring archive. "Cross-unit biological material detected," the Lead Monkey announces. "Routing to relevant authority files." Whatever was extracted from you is now part of the West Witch's surveillance record.`,
      },
    ],
    choices: [
      {
        label: 'Accept the extraction and continue.',
        target: 'WINGED_MONKEY_ENTRY',
        effects: [
          { type: 'addDesynctear', value: 4 },
          { type: 'graft', material: 'monkey_extracted_sample', target: 'witch_west' },
        ],
      },
    ],
    onEnter: [],
  },

  WINGED_MONKEY_3: {
    id: 'WINGED_MONKEY_3',
    character: null,
    text: [
      {
        minOverrender: 0,
        content: `THE ALTITUDE DRAIN

  "At altitude, the physical weight of anxiety, grief, and material load drops away — temporarily." The altitude effect is real. The weight of institutional load, scatter, corrosion, and tremor becomes briefly lighter at sufficient height. The drain is pharmaceutical in nature — altitude as a therapeutic agent.

  [ LOAD: REDUCED (TEMPORARY) ]
  [ NOTE: WEIGHT RETURNS AT LANDING ]
  [ DRIFT RISK: ELEVATED ]

  The Lead Monkey holds altitude for an extended period. "Authorized rest period," it announces. The rest period ends. The altitude decreases. The weight returns at exactly the same gradient as the altitude loss. The drain was real. The weight is still yours.`,
      },
    ],
    choices: [
      {
        label: 'Accept the temporary drain and return to ground.',
        target: 'WINGED_MONKEY_ENTRY',
        effects: [
          { type: 'addLoad', value: -8 },
          { type: 'addDisplacement', value: 3 },
        ],
      },
    ],
    onEnter: [],
  },

  WINGED_MONKEY_4: {
    id: 'WINGED_MONKEY_4',
    character: null,
    text: [
      {
        minOverrender: 0,
        content: `THE GROUND RESISTANCE

  "The unit resists the aerial sweep with sufficient ground-based force to prevent full reclamation — partial contact only." The resistance is noted in the command-ring record as "Kinetic Non-Compliance." The monkey team was unable to achieve full reclamation. The partial contact left hook-marks.

  [ DESYNC: +3 ]
  [ WARRANT: +4 ]
  [ PARTIAL CONTACT: LOGGED ]

  The marks from the partial sweep are registered as "Evidence of Resistance." The warrant level increases with the formal documentation. The monkey team returns to altitude. The command ring has already authorized a follow-up sweep. The resistance was real. Its consequences are also real.`,
      },
    ],
    choices: [
      {
        label: 'Accept the logged resistance and its consequences.',
        target: 'WINGED_MONKEY_ENTRY',
        effects: [
          { type: 'addDesync', value: 3 },
          { type: 'addWarrant', value: 4 },
        ],
      },
    ],
    onEnter: [],
  },

  WINGED_MONKEY_5: {
    id: 'WINGED_MONKEY_5',
    character: null,
    text: [
      {
        minOverrender: 0,
        content: `THE COMMAND RING GRAFT

  "A command thread is installed — a permanent monitoring link to the witch's command ring." The graft is small, efficient, and irreversible. A thin command-ring thread, spliced from the lead monkey's own control apparatus, is inserted through the wing-hook entry wound.

  [ COMPLIANCE: FORCED HIGH ]
  [ SURVEILLANCE GRAFT: PERMANENT ]
  [ ALL CHOICES: NOW VISIBLE TO COMMAND RING ]

  "All subsequent choices will be visible to the command ring." The thread is warm. It will stay warm. The Lead Monkey marks the installation complete on the command-ring log. Your choices are now monitored choices.`,
      },
    ],
    choices: [
      {
        label: 'Accept the monitoring installation and continue.',
        target: 'WINGED_MONKEY_ENTRY',
        effects: [
          { type: 'setCompliance', value: 'high' },
          { type: 'graft', material: 'monkey_command_thread', target: 'witch_west' },
          { type: 'addWarrant', value: 3 },
        ],
      },
    ],
    onEnter: [],
  },

  WINGED_MONKEY_6: {
    id: 'WINGED_MONKEY_6',
    character: null,
    text: [
      {
        minOverrender: 0,
        content: `THE SHRIEK RESONANCE

  "The monkey team's overlapping shriek frequencies create a resonance pattern inside your hollow spaces." The military call-signs overlap and create standing waves inside any hollow cavity — Tin Man's chest, Scarecrow's stuffing void, the acoustic space behind Lion's ribcage. The resonance is physically documented by the command ring.

  [ DESYNC: +4 ]
  [ HOLLOW CAVITIES: RESONATING ]
  [ ECHO MATERIAL: DEPOSITED ]

  The shriek resonance leaves a trace — a standing acoustic ghost in the hollow spaces. The Lead Monkey notes: "Resonance confirmed. Echo material: active." You will hear the military frequency in your hollow spaces for some time.`,
      },
    ],
    choices: [
      {
        label: 'Accept the resonance deposit and continue.',
        target: 'WINGED_MONKEY_ENTRY',
        effects: [
          { type: 'addDesync', value: 4 },
          { type: 'graft', material: 'monkey_shriek_resonance', target: 'tinman' },
        ],
      },
    ],
    onEnter: [],
  },

  WINGED_MONKEY_7: {
    id: 'WINGED_MONKEY_7',
    character: null,
    text: [
      {
        minOverrender: 0,
        content: `THE STRAW DELIVERY

  "The monkeys have been carrying straw — Scarecrow-origin material from a previous sweep — and deposit it into open wounds during the current reclamation." The cross-character contamination is logged as "Inadvertent Material Transfer." The straw is from the last agricultural unit processed.

  [ SCATTER: +3 ]
  [ GRAFT: SCARECROW MATERIAL → CURRENT UNIT ]
  [ PREVIOUS UNIT'S THOUGHTS: IN YOUR WOUNDS ]

  Dried straw mixed with cerebral fluid — the thinking-about-thinking residue of a previous unit — is now embedded in your wounds. The Scarecrow's recursive self-reflection is now, briefly, a physical presence in your biology.`,
      },
    ],
    choices: [
      {
        label: 'Accept the straw deposit and continue.',
        target: 'WINGED_MONKEY_ENTRY',
        effects: [
          { type: 'addScatter', value: 3 },
          { type: 'graft', material: 'scarecrow_straw', target: 'lion' },
        ],
      },
    ],
    onEnter: [],
  },

  WINGED_MONKEY_8: {
    id: 'WINGED_MONKEY_8',
    character: null,
    text: [
      {
        minOverrender: 0,
        content: `THE FLOCK INCORPORATION

  "The command ring authorizes full flock incorporation — you are now flying with them, in formation, as a temporary command-ring unit." The command ring has determined that transportation to the destination is more efficient if you participate actively in the sweep rather than as passive cargo.

  [ COMPLIANCE: HIGH ]
  [ FLOCK FORMATION: ACTIVE ]
  [ COMMAND RING: TEMPORARY LINK ]
  [ ALTITUDE: SIGNIFICANT ]

  You are flying. The altitude is significant. The command ring frequency is very loud at this altitude. The Lead Monkey is running the formation very efficiently. Below, the Yellow Brick Load is a thin yellow line. You are very high. You are going somewhere at military speed.`,
      },
    ],
    choices: [
      {
        label: 'Fly with the flock to the authorized destination.',
        target: 'WINGED_MONKEY_ENTRY',
        effects: [
          { type: 'addDisplacement', value: 6 },
          { type: 'addLoad', value: 15 },
          { type: 'setCompliance', value: 'high' },
        ],
      },
    ],
    onEnter: [],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // THE KALIDAH MERGE — Genetic / Parasitic
  // Ritual: The Kalidah Merge Embrace
  // Tone: Gurgling bureaucratic growls; intimate unwanted fusion; composite horror
  // ═══════════════════════════════════════════════════════════════════════════

  KALIDAH_MERGE_ENTRY: {
    id: 'KALIDAH_MERGE_ENTRY',
    character: null,
    text: [
      {
        minOverrender: 0,
        content: `THE KALIDAH MERGE EMBRACE

  It emerges from the unmapped thicket. Bear-tiger hybrid, but wrong — seams splitting wider than anatomy allows, mismatched limbs from multiple previous merges, straw and lymph and oil leaking from exposed junctions. One arm ends in a clawed bear paw, one in a rusting axe. Multiple partially-formed heads murmur overlapping audit logs.

  [ KALIDAH UNIT: DEPLOYED ]
  [ PROCEDURE: MERGE EMBRACE ]
  [ INSTITUTIONAL FILTER: GENETIC / PARASITIC ]

  "Unit assimilation… proceeding… error… merge approved…" it gurgles. The vocalizations are bureaucratic fragments — the absorbed audit logs of every previous merge. It pins you against the thicket with multiple clawed limbs. Its seams begin to open.

  The merge is authorized. The merge is always authorized, retroactively, once it has begun.

  You feel your meat begin to pull toward it.`,
      },
    ],
    choices: [
      {
        label: 'Submit to the merge — select the embrace outcome.',
        target: 'KALIDAH_MERGE_DRAW',
        effects: [{ type: 'addDesynctear', value: 3 }],
      },
      {
        label: 'Resist the embrace — force separation before seam contact.',
        target: 'KALIDAH_MERGE_7',
        effects: [
          { type: 'addDesync', value: 3 },
          { type: 'addSmudge', value: 1 },
        ],
      },
    ],
    onEnter: [],
  },

  KALIDAH_MERGE_DRAW: {
    id: 'KALIDAH_MERGE_DRAW',
    character: null,
    text: [
      {
        minOverrender: 0,
        content: `THE MERGE READING

  The Kalidah presses its opened seams against yours. The wet, gurgling vocalizations increase — it is processing the merge data, logging the material exchange, running its own diagnostic. The seams are warm and wet and the contact is total.

  "Eight registered merge protocols," it gurgle-announces. "The tissue exchange will determine the outcome." The seams have opened enough to allow selection. The choice of outcome is brief — the merge does not pause for deliberation.

  [ SELECT MERGE PROTOCOL — THE SEAMS MAKE CONTACT ]`,
      },
    ],
    choices: [
      {
        label: '1. The Seam Press — desync tear surge, hybrid paths unlock.',
        target: 'KALIDAH_MERGE_1',
        effects: [],
      },
      {
        label: '2. The Straw-Metal Graft — Scarecrow and Tin Man cross-contamination.',
        target: 'KALIDAH_MERGE_2',
        effects: [],
      },
      {
        label: '3. The Jaw Overwrite — vibration synchronizes with Kalidah growl.',
        target: 'KALIDAH_MERGE_3',
        effects: [],
      },
      {
        label: '4. The Limb Assimilation — a limb is replaced with composite parts.',
        target: 'KALIDAH_MERGE_4',
        effects: [],
      },
      {
        label: '5. The Leakage Communion — massive fluid exchange across all types.',
        target: 'KALIDAH_MERGE_5',
        effects: [],
      },
      {
        label: '6. The Composite Cackle — psychological fracture, audit-loop voices.',
        target: 'KALIDAH_MERGE_6',
        effects: [],
      },
      {
        label: '7. The Failed Separation — both bodies tear apart messily.',
        target: 'KALIDAH_MERGE_7',
        effects: [],
      },
      {
        label: '8. The Swarm Merge — catastrophic multi-Kalidah integration.',
        target: 'KALIDAH_MERGE_8',
        effects: [],
      },
    ],
    onEnter: [],
  },

  KALIDAH_MERGE_1: {
    id: 'KALIDAH_MERGE_1',
    character: null,
    text: [
      {
        minOverrender: 0,
        content: `THE SEAM PRESS

  "Its split chest opens against your own. You feel your ribs trying to knit with its mismatched bones." The Desync Tear surges dramatically. The seam contact activates hybrid pathway options and grays out any choice that relies on individual integrity.

  [ DESYNCTEAR: +6 ]
  [ HYBRID / PARASITIC PATHS: UNLOCKED ]
  [ INDIVIDUAL INTEGRITY CHOICES: GRAYED ]

  "Unit seam contact confirmed… hybrid resonance… approved…" it gurgles. The warm, wet pressure of its split chest against yours is intimate and wrong and deeply logged.`,
      },
    ],
    choices: [
      {
        label: 'Follow the hybrid paths opened by the seam press.',
        target: 'KALIDAH_MERGE_ENTRY',
        effects: [
          { type: 'addDesynctear', value: 6 },
          { type: 'addDesync', value: 2 },
          { type: 'graft', material: 'kalidah_seam_contact', target: 'lion' },
        ],
      },
    ],
    onEnter: [],
  },

  KALIDAH_MERGE_2: {
    id: 'KALIDAH_MERGE_2',
    character: null,
    text: [
      {
        minOverrender: 0,
        content: `THE STRAW-METAL GRAFT

  "It rips straw from one wound and bolts rusting plates into another." A strong cross with Scarecrow and Tin Man material simultaneously. The Kalidah's composite body has absorbed both, and now exchanges them laterally — straw and rust, scatter and corrosion, agricultural and industrial.

  [ SCATTER: +3 ]
  [ CORROSION: +3 ]
  [ CROSS-CHARACTER: SCARECROW / TIN MAN ECHO ]

  "Agricultural-industrial exchange… logged… filing now…" The flesh-echoes across characters are immediate and physical. You carry both types of decay now, in equal measure.`,
      },
    ],
    choices: [
      {
        label: 'Accept the straw-metal composite and continue.',
        target: 'KALIDAH_MERGE_ENTRY',
        effects: [
          { type: 'addScatter', value: 3 },
          { type: 'addCorrosion', value: 3 },
          { type: 'graft', material: 'kalidah_straw_metal', target: 'scarecrow' },
          { type: 'graft', material: 'kalidah_straw_metal', target: 'tinman' },
        ],
      },
    ],
    onEnter: [],
  },

  KALIDAH_MERGE_3: {
    id: 'KALIDAH_MERGE_3',
    character: null,
    text: [
      {
        minOverrender: 0,
        content: `THE JAW OVERWRITE

  "Your tremor synchronizes with the Kalidah's growl." The vibration locks into hybrid rhythm. The merge overwrites the existing tremor frequency with the Kalidah's gurgling audit-log frequency. Roaring merge paths open — the growl is large enough to carry the whole body toward the merge ending.

  [ VIBRATION: SYNCHRONIZED / OVERWRITTEN ]
  [ ROAR MERGE PATHS: UNLOCKED ]
  [ ROUTE: TOWARD L-END-28 THE KALIDAH MERGE ]

  "Tremor… synchronized… jaw overwrite… approved…" The new vibration frequency is not yours. It is older and wetter and has been through more merges. It knows the way to the end.`,
      },
    ],
    choices: [
      {
        label: 'Follow the jaw overwrite into the Kalidah Merge ending.',
        target: 'KALIDAH_MERGE_ENTRY',
        effects: [
          { type: 'addVibration', value: 5 },
          { type: 'addDesynctear', value: 5 },
          { type: 'graft', material: 'kalidah_jaw_frequency', target: 'lion' },
        ],
      },
    ],
    onEnter: [],
  },

  KALIDAH_MERGE_4: {
    id: 'KALIDAH_MERGE_4',
    character: null,
    text: [
      {
        minOverrender: 0,
        content: `THE LIMB ASSIMILATION

  "It tears off a limb and replaces it with one of its own composite parts." The replacement is a clawed bear arm, or a rusting axe, or a tin-patched leg — the composite part is whichever was least recently used in the current Kalidah's inventory. The surgery is authorized. The replacement is permanent.

  [ STITCH INTEGRITY: -5 ]
  [ SEIZURE: +3 ]
  [ COMPOSITE LIMB: INSTALLED ]

  "Limb exchange… assimilation… structural integration approved…" The composite limb functions. It functions differently than the original. The differences are filed under "Standard Upgrade Notes."`,
      },
    ],
    choices: [
      {
        label: 'Accept the composite limb and continue with the merge.',
        target: 'KALIDAH_MERGE_ENTRY',
        effects: [
          { type: 'addStitchIntegrity', value: -5 },
          { type: 'addSeizure', value: 3 },
          { type: 'graft', material: 'kalidah_composite_limb', target: 'lion' },
        ],
      },
    ],
    onEnter: [],
  },

  KALIDAH_MERGE_5: {
    id: 'KALIDAH_MERGE_5',
    character: null,
    text: [
      {
        minOverrender: 0,
        content: `THE LEAKAGE COMMUNION

  "Lymph, oil, straw slurry, and signal fluid mix freely between bodies." The massive fluid exchange is the most intimate of the merge protocols — all material types flowing in both directions simultaneously. High-surreality hybrid branches open. The mixed fluids create compounds that neither body contained before.

  [ DESYNCTEAR: +6 ]
  [ DESYNC: +4 ]
  [ HIGH-SURREALITY HYBRID BRANCHES: OPEN ]
  [ ALL CHARACTER ECHOES: ACTIVE ]

  "Fluid exchange complete… communion logged… hybrid compound filing in progress…" The new compounds are strange. They contain the fear of a Lion, the emptiness of a Tin Man, the recursion of a Scarecrow, the displacement of a Dorothy. They are now inside both bodies.`,
      },
    ],
    choices: [
      {
        label: 'Let the hybrid compounds route through the high-surreality branches.',
        target: 'KALIDAH_MERGE_ENTRY',
        effects: [
          { type: 'addDesynctear', value: 6 },
          { type: 'addDesync', value: 4 },
          { type: 'addOverrender', value: 2 },
          { type: 'graft', material: 'kalidah_fluid_communion', target: 'dorothy' },
        ],
      },
    ],
    onEnter: [],
  },

  KALIDAH_MERGE_6: {
    id: 'KALIDAH_MERGE_6',
    character: null,
    text: [
      {
        minOverrender: 0,
        content: `THE COMPOSITE CACKLE

  "You begin hearing overlapping audit logs in your own voice." The psychological fracture is complete. The Kalidah's absorbed audit fragments — from every previous merge — have been deposited in your vocal apparatus and are now running on a loop in a voice that sounds like yours but isn't.

  [ DESYNC: +5 ]
  [ PSYCHOLOGICAL FRACTURE: ACTIVE ]
  [ AUDIT LOOP: RUNNING IN YOUR VOICE ]
  [ ROUTING: FEEDBACK LOOP / OSCILLATING PANIC PATHS ]

  "Error… merge approved… structural integration… error…" Your voice says this. You did not say this. The feedback loop has begun. The oscillating panic is authorized.`,
      },
    ],
    choices: [
      {
        label: 'Let the audit loop route toward feedback dissolution.',
        target: 'KALIDAH_MERGE_ENTRY',
        effects: [
          { type: 'addDesync', value: 5 },
          { type: 'addOverrender', value: 2 },
          { type: 'setCompliance', value: 'broken' },
        ],
      },
    ],
    onEnter: [],
  },

  KALIDAH_MERGE_7: {
    id: 'KALIDAH_MERGE_7',
    character: null,
    text: [
      {
        minOverrender: 0,
        content: `THE FAILED SEPARATION

  "Both bodies tear apart messily, leaving deep graft scars and foreign tissue embedded permanently." The separation was attempted. Both bodies responded to the attempt. The resulting tear left material from each body in the other.

  [ STITCH INTEGRITY: -3 ]
  [ GRAFT SCARS: PERMANENT ]
  [ FOREIGN TISSUE: EMBEDDED ]
  [ KALIDAH: RETREATING (TEMPORARILY) ]

  "Separation… failed… foreign tissue logged… graft scar filed…" The Kalidah retreats, trailing foreign material from the failed separation. You remain, also trailing foreign material. The scars are deep and permanent. The foreign tissue is warm and strange and belongs to the composite body that pressed against yours.`,
      },
    ],
    choices: [
      {
        label: 'Accept the graft scars and continue.',
        target: 'KALIDAH_MERGE_ENTRY',
        effects: [
          { type: 'addStitchIntegrity', value: -3 },
          { type: 'addDesynctear', value: 4 },
          { type: 'graft', material: 'kalidah_graft_scar', target: 'lion' },
        ],
      },
    ],
    onEnter: [],
  },

  KALIDAH_MERGE_8: {
    id: 'KALIDAH_MERGE_8',
    character: null,
    text: [
      {
        minOverrender: 0,
        content: `THE SWARM MERGE

  "The seams widen. There is no longer a clean line between your meat and theirs."

  Multiple Kalidah converge. The first merge activated a pheromone signal. They arrive from the thicket in sequence — larger composites, trailing more absorbed material from more previous merges. The absorb protocol runs on all available surfaces simultaneously.

  [ DESYNCTEAR: CRITICAL ]
  [ ALL INDIVIDUAL PATHS: GRAYED ]
  [ COMPOSITE INTEGRATION: TOTAL ]
  [ ROUTING: L-END-28 / W-END-14 / UNINDEXED SWARM STATES ]

  "Swarm assimilation… proceeding… merge total… approved." The seams have widened past the point of clean separation. The error log grows. The merge is logged as "Genetic Overwrite — Standard Procedure." The composite is larger now.`,
      },
    ],
    choices: [
      {
        label: 'Accept the total integration — route toward the Kalidah Merge ending.',
        target: 'KALIDAH_MERGE_ENTRY',
        effects: [
          { type: 'addDesynctear', value: 10 },
          { type: 'addDesync', value: 6 },
          { type: 'addOverrender', value: 3 },
          { type: 'setCompliance', value: 'broken' },
        ],
      },
    ],
    onEnter: [],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // THE POPPY DRONES — Pharmaceutical
  // Ritual: The Poppy Harvest Sedation
  // Tone: Soft lullaby sweetness over intimate chemical violation; seductive deletion
  // ═══════════════════════════════════════════════════════════════════════════

  POPPY_DRONE_ENTRY: {
    id: 'POPPY_DRONE_ENTRY',
    character: null,
    text: [
      {
        minOverrender: 0,
        content: `THE POPPY HARVEST SEDATION

  They emerge from the red blooms in a swaying circle. Munchkin-scale but softer, almost fetal — bodies of compacted poppy flesh, heads that are oversized blooming flowers, arms ending in syringe-thorns and pollen-dusted hooks. They are humming. The lullaby is overlapping, slightly off-sync, and deeply sincere.

  [ POPPY DRONE UNIT: DEPLOYED ]
  [ PROCEDURE: HARVEST SEDATION ]
  [ INSTITUTIONAL FILTER: PHARMACEUTICAL ]

  They smell of warm anesthesia, wet rot, and something inexplicably like home. The field breathed them out when it detected high kinetic load. They are here to help. They are always here to help. The syringe-thorns are warm.

  "Rest now, little unit," the nearest drone hums. "The field is so proud of you." The first thorn finds your neck with the gentleness of someone who has done this ten thousand times.`,
      },
    ],
    choices: [
      {
        label: 'Submit to the sedation — select the harvest outcome.',
        target: 'POPPY_DRONE_DRAW',
        effects: [{ type: 'addLoad', value: -3 }],
      },
      {
        label: 'Resist the sedation — keep moving through the field.',
        target: 'POPPY_DRONE_4',
        effects: [
          { type: 'addVibration', value: 2 },
          { type: 'addDesync', value: 1 },
        ],
      },
    ],
    onEnter: [],
  },

  POPPY_DRONE_DRAW: {
    id: 'POPPY_DRONE_DRAW',
    character: null,
    text: [
      {
        minOverrender: 0,
        content: `THE HARVEST READING

  The first drone reads the kinetic load profile — your specific frequency of agitation — against the field's pharmaceutical catalog. It hums while it works. The other drones sway in the background, petals opening and closing in slow, rhythmic cycles.

  "Eight registered harvest sessions," the nearest drone announces in its lullaby register. "The agitation profile will determine the appropriate sedation protocol."

  The first thorn is still in your neck. The resin has begun its work. The choice feels heavy and warm and very close.

  [ SELECT SEDATION PROTOCOL — THE DRONES READ THE AGITATION ]`,
      },
    ],
    choices: [
      {
        label: '1. The First Sting — pharmaceutical dampening surges.',
        target: 'POPPY_DRONE_1',
        effects: [],
      },
      {
        label: '2. The Resin Flood — load decreases as agitation is chemically drained.',
        target: 'POPPY_DRONE_2',
        effects: [],
      },
      {
        label: '3. The Bloom Graft — poppy flesh is stitched into your wounds.',
        target: 'POPPY_DRONE_3',
        effects: [],
      },
      {
        label: '4. The Scent Harvest — sensory overload turned sedative.',
        target: 'POPPY_DRONE_4',
        effects: [],
      },
      {
        label: '5. The Rooting — body begins to merge with fleshy soil.',
        target: 'POPPY_DRONE_5',
        effects: [],
      },
      {
        label: '6. The Nectar Communion — fluid exchange with the field.',
        target: 'POPPY_DRONE_6',
        effects: [],
      },
      {
        label: '7. The Lullaby Audit — memory rewritten as pleasant logs.',
        target: 'POPPY_DRONE_7',
        effects: [],
      },
      {
        label: '8. The Full Bloom — catastrophic seductive dissolution.',
        target: 'POPPY_DRONE_8',
        effects: [],
      },
    ],
    onEnter: [],
  },

  POPPY_DRONE_1: {
    id: 'POPPY_DRONE_1',
    character: null,
    text: [
      {
        minOverrender: 0,
        content: `THE FIRST STING

  "A warm thorn slides into your neck. The tremor finally quiets… and the red blooms smile."

  The pharmaceutical dampening surges through the first injection. Vibration, Scatter, Tremor — all drop sharply. New restful choices appear in the warm chemical haze. High-energy and violent options go grey behind the soft warmth.

  [ VIBRATION: REDUCED ]
  [ SCATTER: REDUCED ]
  [ DORMANT CHOICES: APPEARING ]
  [ HIGH-ENERGY OPTIONS: GRAYED ]

  "There now," the drone hums. "Isn't that better?" It is, briefly. The warmth is real. The thorn is still in.`,
      },
    ],
    choices: [
      {
        label: 'Rest in the first sting warmth and continue.',
        target: 'POPPY_DRONE_ENTRY',
        effects: [
          { type: 'addVibration', value: -3 },
          { type: 'addScatter', value: -3 },
          { type: 'addLoad', value: 8 },
          { type: 'grayOut', key: 'LION_VIOLENCE' },
        ],
      },
    ],
    onEnter: [],
  },

  POPPY_DRONE_2: {
    id: 'POPPY_DRONE_2',
    character: null,
    text: [
      {
        minOverrender: 0,
        content: `THE RESIN FLOOD

  "Load decreases as agitation is chemically drained, but Desync Tear transforms into dormant haze." The resin floods the injection site and spreads through the available pathways. The load lightens. The agitation chemical markers dissolve. But the desync that was previously active coagulates into a warm, dormant haze.

  [ LOAD: -10 ]
  [ DESYNC TEAR: → DORMANT HAZE ]
  [ ECHO: D-END-16 THE POPPY SLEEP / LION'S SEMANTIC SLEEP ]

  "Echo to D-END-16 The Poppy Sleep and Lion's Semantic Sleep." The haze is warm. The dormant state is comfortable. The consciousness that was previously navigating the desync is now floating in a pharmaceutical amber that the field has very kindly prepared.`,
      },
    ],
    choices: [
      {
        label: 'Accept the dormant haze and let it route toward the Poppy Sleep.',
        target: 'POPPY_DRONE_ENTRY',
        effects: [
          { type: 'addLoad', value: -10 },
          { type: 'addDesynctear', value: -3 },
          { type: 'addDesync', value: 2 },
          { type: 'addLoad', value: 5 },
        ],
      },
    ],
    onEnter: [],
  },

  POPPY_DRONE_3: {
    id: 'POPPY_DRONE_3',
    character: null,
    text: [
      {
        minOverrender: 0,
        content: `THE BLOOM GRAFT

  "Poppy flesh and nerve stems are gently stitched into your wounds." The graft is careful — the drones work with the same precision that living surgery requires, their syringe-thorn fingers threading poppy-flesh into open seams with the tenderness of artisans who love their work.

  [ STITCH INTEGRITY: +3 (TEMPORARY) ]
  [ INSULATED / MUFFLED PATHS: UNLOCKED ]
  [ ROOTS: GROWING ]

  "Unlocks insulated or muffled paths while slowly turning parts of you into living flowers." The graft seams are soft and warm. The poppy-nerve material pulses with the field's pharmaceutical frequency. The muffled paths feel very safe. Small rootlets have already begun growing from the injection sites.`,
      },
    ],
    choices: [
      {
        label: 'Accept the bloom graft and continue with insulated paths.',
        target: 'POPPY_DRONE_ENTRY',
        effects: [
          { type: 'addStitchIntegrity', value: 3 },
          { type: 'addInsulation', value: 4 },
          { type: 'graft', material: 'poppy_bloom_graft', target: 'dorothy' },
        ],
      },
    ],
    onEnter: [],
  },

  POPPY_DRONE_4: {
    id: 'POPPY_DRONE_4',
    character: null,
    text: [
      {
        minOverrender: 0,
        content: `THE SCENT HARVEST

  "You smell wet pine, roasted coffee, and your own dissolving meat." The olfactory overload arrives before the pharmaceutical sedation — a full sensory assault of the most comforting smells overlaid with the specific chemical signature of tissue breakdown. The combination is disorienting.

  [ SENSORY OVERLOAD: → SEDATIVE ]
  [ CLEAR THINKING: GRAYED ]
  [ HAZY CLINICAL PEACE ROUTES: OPEN ]

  "Grays out clear thinking; opens hazy, clinical peace routes." The peace is clinical. The haze is real. The smell of your own dissolving meat is — the drones confirm — "within normal parameters for the harvest procedure." The roasted coffee note is real. It is also pharmaceutical.`,
      },
    ],
    choices: [
      {
        label: 'Follow the hazy peace routes through the scent harvest.',
        target: 'POPPY_DRONE_ENTRY',
        effects: [
          { type: 'addLoad', value: 8 },
          { type: 'addOverrender', value: 1 },
          { type: 'addInsulation', value: 3 },
        ],
      },
    ],
    onEnter: [],
  },

  POPPY_DRONE_5: {
    id: 'POPPY_DRONE_5',
    character: null,
    text: [
      {
        minOverrender: 0,
        content: `THE ROOTING

  "Your body begins to merge with the fleshy soil. Temporary safety at the cost of mobility and identity." The rootlets from the injection sites have grown. They have found the soil. The soil has accepted them. The fleshy, warm, pharmaceutical ground is pulling you gently downward.

  [ STITCH INTEGRITY: RELAXING ]
  [ SEIZURE: SOFTENING ]
  [ MOBILITY: REDUCING ]
  [ IDENTITY: DIFFUSING ]

  "Temporary safety at the cost of mobility and identity." The safety is real. The temporary nature of the safety is the thing the drones do not mention. The rootlets are warm. The ground is warm. The lullaby continues.`,
      },
    ],
    choices: [
      {
        label: 'Sink into the rooting — accept the temporary safety.',
        target: 'POPPY_DRONE_ENTRY',
        effects: [
          { type: 'addStitchIntegrity', value: -2 },
          { type: 'addSeizure', value: -2 },
          { type: 'addDisplacement', value: -2 },
          { type: 'addLoad', value: 10 },
          { type: 'setCompliance', value: 'high' },
        ],
      },
    ],
    onEnter: [],
  },

  POPPY_DRONE_6: {
    id: 'POPPY_DRONE_6',
    character: null,
    text: [
      {
        minOverrender: 0,
        content: `THE NECTAR COMMUNION

  "Your lymph/oil/straw is sweetened and returned as poppy resin." The fluid exchange is bidirectional and deeply intimate. The drones draw out the biological material through the syringe-thorns and run it through the field's pharmaceutical processing before returning it as sweetened nectar. The biological material is changed. The change is pleasant.

  [ ADDICTIVE COMPLIANCE: ACTIVE ]
  [ CROSS-CHARACTER ECHO: TIN MAN OIL / POPPY SAP ]
  [ GRAFT: POPPY MATERIAL → CURRENT UNIT ]

  "Creates addictive compliance loops and cross-echo potential (e.g., Tin Man's oil mixed with poppy sap)." The returned nectar has a sweetness that the original material didn't. You want more. The drones hum approvingly.`,
      },
    ],
    choices: [
      {
        label: 'Accept the nectar communion and the compliance loop.',
        target: 'POPPY_DRONE_ENTRY',
        effects: [
          { type: 'addLoad', value: 5 },
          { type: 'setCompliance', value: 'high' },
          { type: 'addInsulation', value: 5 },
          { type: 'graft', material: 'poppy_nectar', target: 'tinman' },
        ],
      },
    ],
    onEnter: [],
  },

  POPPY_DRONE_7: {
    id: 'POPPY_DRONE_7',
    character: null,
    text: [
      {
        minOverrender: 0,
        content: `THE LULLABY AUDIT

  "The drones sing while harvesting. Short-term memory is rewritten as pleasant logs; opens dormant or insulated endings." The lullaby has a specific pharmaceutical property — it rewrites the recent memory of the procedure as something else. Something warm. Something that felt like kindness.

  [ MEMORY: REWRITTEN ]
  [ DORMANT / INSULATED PATHS: OPEN ]
  [ NOTE: THE AUDIT WAS REAL — THE MEMORY IS NOT ]

  The audit continues. The memory of the audit becomes comfortable. The drones note: "Memory rewrite confirmed. Unit compliance: improved." The pleasant logs replace the actual harvest record. Both records exist. Only one of them feels real.`,
      },
    ],
    choices: [
      {
        label: 'Accept the pleasant logs and continue with insulated paths.',
        target: 'POPPY_DRONE_ENTRY',
        effects: [
          { type: 'addInsulation', value: 6 },
          { type: 'setCompliance', value: 'high' },
          { type: 'addLoad', value: 10 },
        ],
      },
    ],
    onEnter: [],
  },

  POPPY_DRONE_8: {
    id: 'POPPY_DRONE_8',
    character: null,
    text: [
      {
        minOverrender: 0,
        content: `THE FULL BLOOM

  "The drones hum as your meat softens and new red petals push gently through your skin. Sleep, little unit. The field is so proud of you."

  The pharmaceutical overwrite is complete. High-surreality path: your body becomes fertilizer for a new wave of poppies. The process is warm and seductive and thorough. The drones continue humming through the entire procedure because the lullaby is part of the treatment.

  [ FULL DISSOLUTION: ACTIVE ]
  [ ROUTING: D-END-16 / L-END-08 / TOTAL DORMANCY ]
  [ DRONES: VERY PROUD OF YOU ]

  "Routes toward D-END-16 The Poppy Sleep, L-END-08 Semantic Sleep, or total dormancy/offline states." The red petals are pushing through the skin gently and carefully. The field hums. The drones are so proud. The new blooms are so beautiful.`,
      },
    ],
    choices: [
      {
        label: 'Accept the full bloom — let the dissolution complete.',
        target: 'POPPY_DRONE_ENTRY',
        effects: [
          { type: 'addLoad', value: -20 },
          { type: 'addDesync', value: 5 },
          { type: 'addDesynctear', value: 5 },
          { type: 'setCompliance', value: 'broken' },
          { type: 'addOverrender', value: 3 },
        ],
      },
    ],
    onEnter: [],
  },
}
