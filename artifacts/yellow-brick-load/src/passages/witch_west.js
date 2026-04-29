/**
 * YELLOW BRICK LOAD — Wicked Witch of the West Passages
 * Character: Witch West (Authority Figure / Surveillance Operator)
 *
 * The Obsidian Eye Ritual (Surveillance Vivisection)
 * Triggered when warrantLevel >= 5
 *
 * Oracle Interloper: The Obsidian Matron — tall, iron-pale, black cloak
 * lined with living eyeballs and iron flechettes. One eye is a large rotating
 * obsidian orb projecting restraint fields. Makes deep, deliberate cuts while
 * recording every twitch and leak.
 */

export const witchWestPassages = {
  // ─────────────────────────────────────────────────────────────────────────
  // INIT / ENTRY
  // ─────────────────────────────────────────────────────────────────────────

  WITCH_WEST_INIT: {
    id: 'WITCH_WEST_INIT',
    character: 'witch_west',
    text: [
      {
        minOverrender: 0,
        content: `THE MALICE PROTOCOL

  You are the Surveillance Operator. You see everything. The obsidian eye sees everything. The Bureau calls this "Judicial Oversight." The Oz OS Manual calls it "Restraint Protocol." You call it what it is: the pleasure of watching the meat perform under observation.

  You are tall and your cloak is lined with living eyeballs that track ambient movement in every direction. Iron flechettes hang from the hem — filing implements and kinetic devices, dual-use. The obsidian orb rotates in your left socket and projects an invisible grid of restraint fields across the room. Anything in the room is already held.

  [ SURVEILLANCE OPERATOR: ACTIVE ]
  [ RESTRAINT FIELD: DEPLOYED ]
  [ TARGET: IDENTIFIED ]

  The units on the Yellow Brick Load are walking into the grid. They don't know they're in the grid. That is the function of a restraint field. The Winged Monkeys circle overhead, awaiting assignment. The Clerk logs each unit's entry with a wet, rolling click.`,
      },
    ],
    choices: [
      {
        label: 'Deploy the Winged Monkeys — begin aerial surveillance.',
        target: 'WITCH_WEST_PATH_MONKEYS',
        effects: [
          { type: 'addWarrant', value: 3 },
          { type: 'addLoad', value: 5 },
        ],
      },
      {
        label: 'Perform the ritual directly — initiate the Obsidian Eye.',
        target: 'WITCH_WEST_ORACLE_ENTRY',
        effects: [
          { type: 'addWarrant', value: 5 },
          { type: 'addDesync', value: 1 },
        ],
      },
    ],
    onEnter: [{ type: 'checkGhostSignal' }, { type: 'triggerOracle' }],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // MAIN PATHS
  // ─────────────────────────────────────────────────────────────────────────

  WITCH_WEST_PATH_MONKEYS: {
    id: 'WITCH_WEST_PATH_MONKEYS',
    character: 'witch_west',
    text: [
      {
        minOverrender: 0,
        content: `THE AERIAL DEPLOYMENT

  The Winged Monkeys deploy on signal. They are efficient and enthusiastic. They shriek in overlapping frequencies — military call signs mixed with childish taunts — as they locate the targets on the road below and begin the aerial reclamation sweep.

  [ WARRANT LEVEL: ESCALATING ]
  [ AERIAL SURVEILLANCE: ACTIVE ]
  [ ENFORCEMENT: DISPATCHED ]

  The obsidian eye tracks the sweep from altitude. Each extraction registers as a satisfying click in the orb's rotation. The Clerk logs each reclamation. The Bureau marks each one as "Judicial Harvest — Authorized." The road below has become a maintenance corridor.

  {{#flags.graft_lion_roar_echo_in_witch_west}}A borrowed tremor — Lion-origin, acquired through the last sweep — resonates briefly in the obsidian orb's restraint field. An interesting frequency. Worth noting.{{/flags.graft_lion_roar_echo_in_witch_west}}`,
      },
    ],
    choices: [
      {
        label: 'Escalate the warrant — route toward total enforcement.',
        target: 'WITCH_WEST_END_MELTING',
        effects: [
          { type: 'addWarrant', value: 5 },
          { type: 'addLoad', value: 15 },
          { type: 'setCompliance', value: 'absolute' },
        ],
      },
      {
        label: 'Recall the monkeys — perform the ritual personally.',
        target: 'WITCH_WEST_ORACLE_ENTRY',
        effects: [
          { type: 'addWarrant', value: 3 },
          { type: 'addDesync', value: 2 },
        ],
      },
    ],
    onEnter: [{ type: 'triggerOracle' }],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // OBSIDIAN EYE ORACLE — THE OBSIDIAN MATRON
  // ─────────────────────────────────────────────────────────────────────────

  WITCH_WEST_ORACLE_ENTRY: {
    id: 'WITCH_WEST_ORACLE_ENTRY',
    character: 'witch_west',
    text: [
      {
        minOverrender: 0,
        content: `THE MONITORED INCISION BEGINS

  The restraint field tightens around the target unit. The obsidian orb clicks three times — beginning of record. The Winged Monkey drones take their positions as assistants: one holds the restraint, one holds the collection vessel.

  [ SURVEILLANCE VIVISECTION: AUTHORIZED ]
  [ PROCEDURE: MALICE RESIDUE EXTRACTION ]
  [ OPERATOR: THE OBSIDIAN MATRON ]

  You note the unit's compliance threshold with professional satisfaction. Your flechette-claws find the restraint points — the places where the invisible grid has already pressed into flesh. You make deep, deliberate cuts while your obsidian eye records every twitch and leak. The eye misses nothing. The Clerk misses nothing. The extraction begins.

  The malice residue — a mix of blood, bile, and fear-sweat — wells up and is forced through the heated crucible. The pattern of evaporation or bubbling is read as judgment. This is how justice works.`,
      },
    ],
    choices: [
      {
        label: 'Commence the full extraction — read the malice residue.',
        target: 'WITCH_WEST_ORACLE_DRAW',
        effects: [{ type: 'addWarrant', value: 2 }],
      },
      {
        label: 'Release the restraint — withhold the procedure.',
        target: 'WITCH_WEST_PATH_MONKEYS',
        effects: [
          { type: 'addDesync', value: 2 },
          { type: 'setFlag', key: 'oracle_witch_west_refused', value: true },
        ],
      },
    ],
    onEnter: [],
  },

  WITCH_WEST_ORACLE_DRAW: {
    id: 'WITCH_WEST_ORACLE_DRAW',
    character: 'witch_west',
    text: [
      {
        minOverrender: 0,
        content: `THE MALICE READING

  The heated crucible fills with the extracted residue. The evaporation patterns rise — specific, identifiable, legally admissible. The obsidian eye reads them against the restraint field's archived library of malice profiles. Each profile corresponds to a form of judgment.

  "Eight registered malice profiles," you announce. The orb rotates with clinical pleasure. "The evaporation pattern will determine the verdict."

  The extraction is still running. The Clerk makes another note.

  [ SELECT VERDICT — THE EYE READS THE EVAPORATION ]`,
      },
    ],
    choices: [
      {
        label: '1. The Flechette Harvest — judicial pressure surges.',
        target: 'WITCH_WEST_ORACLE_1',
        effects: [],
      },
      {
        label: '2. The Crucible Drain — accelerate the thermodynamic decay.',
        target: 'WITCH_WEST_ORACLE_2',
        effects: [],
      },
      {
        label: '3. The Scorched Slurry — corrosion bleed with Tin Man echo.',
        target: 'WITCH_WEST_ORACLE_3',
        effects: [],
      },
      {
        label: '4. The Winged Probe — surveillance graft, monitored choices appear.',
        target: 'WITCH_WEST_ORACLE_4',
        effects: [],
      },
      {
        label: '5. The Green Patina Burn — thermodynamic heat surge.',
        target: 'WITCH_WEST_ORACLE_5',
        effects: [],
      },
      {
        label: '6. The Restraint Lattice — compliance sutures, rigid duty paths.',
        target: 'WITCH_WEST_ORACLE_6',
        effects: [],
      },
      {
        label: '7. The Shadow Graft — parasitic link to Dorothy or Lion.',
        target: 'WITCH_WEST_ORACLE_7',
        effects: [],
      },
      {
        label: '8. The Melting Verdict — catastrophic thermodynamic collapse.',
        target: 'WITCH_WEST_ORACLE_8',
        effects: [],
      },
    ],
    onEnter: [],
  },

  // ── Oracle Outcomes 1–8 ────────────────────────────────────────────────────

  WITCH_WEST_ORACLE_1: {
    id: 'WITCH_WEST_ORACLE_1',
    character: 'witch_west',
    text: [
      {
        minOverrender: 0,
        content: `THE FLECHETTE HARVEST

  "Her flechettes burrow into your flanks while the eye watches your meat dance." The judicial pressure surges. The flechettes are both filing implements and kinetic devices — they pin while they punish, they measure while they wound. Sharp, punitive choices unlock. Soft and evasive options go grey.

  [ WARRANT LEVEL: +5 ]
  [ JUDICIAL PRESSURE: CRITICAL ]
  [ SOFT OPTIONS: GRAYED ]
  [ KINETIC / ENFORCEMENT PATHS: UNLOCKED ]

  The obsidian eye records the flechette placement with obvious satisfaction. The Clerk logs the precision. "Clean harvest," you note. The evidence is thorough. The Clerk notes: "Unit compliant via mechanical persuasion."`,
      },
    ],
    choices: [
      {
        label: 'Press the judicial harvest toward enforcement ending.',
        target: 'WITCH_WEST_END_FLECHETTE',
        effects: [
          { type: 'addWarrant', value: 5 },
          { type: 'addLoad', value: 10 },
          { type: 'grayOut', key: 'WITCH_WEST_PATH_MONKEYS' },
        ],
      },
      {
        label: 'Let the flechette placement route toward the melting point.',
        target: 'WITCH_WEST_END_MELTING',
        effects: [
          { type: 'addWarrant', value: 5 },
          { type: 'addDesync', value: 3 },
        ],
      },
    ],
    onEnter: [],
  },

  WITCH_WEST_ORACLE_2: {
    id: 'WITCH_WEST_ORACLE_2',
    character: 'witch_west',
    text: [
      {
        minOverrender: 0,
        content: `THE CRUCIBLE DRAIN

  The malice residue completes its pass through the heated crucible. The warrant level spikes — the evidence is now formally timed. The pain has been temporarily buffered by the crucible procedure, but the thermodynamic decay has accelerated. The unit is running hotter than it was before the extraction.

  [ WARRANT: +6 ]
  [ THERMODYNAMIC DECAY: ACCELERATED ]
  [ MELTING PATH: APPROACHING ]

  The obsidian eye reads the crucible pattern against the melting-point archive: "Thermal event: imminent." The decay rate is now a legal matter. The Clerk logs the timeline. "The crucible registers three more sessions before the tin begins to soften."`,
      },
    ],
    choices: [
      {
        label: 'Accelerate the timeline — route toward the melting ending.',
        target: 'WITCH_WEST_END_MELTING',
        effects: [
          { type: 'addWarrant', value: 6 },
          { type: 'addLoad', value: 12 },
        ],
      },
      {
        label: 'Hold the timeline — maintain surveillance for another session.',
        target: 'WITCH_WEST_PATH_MONKEYS',
        effects: [
          { type: 'addWarrant', value: 6 },
          { type: 'setCompliance', value: 'high' },
        ],
      },
    ],
    onEnter: [],
  },

  WITCH_WEST_ORACLE_3: {
    id: 'WITCH_WEST_ORACLE_3',
    character: 'witch_west',
    text: [
      {
        minOverrender: 0,
        content: `THE SCORCHED SLURRY

  "Your fluids boil under her gaze and reform as black slag." The heat of the obsidian eye's observation has reached an intensity that begins chemical transformation. The malice residue boils. The corrosion signal — a Tin Man echo, borrowed through prior contact — merges with the boiling fluid and creates a black, viscous slag.

  [ DESYNC TEAR: +6 ]
  [ CORROSION BLEED: ACTIVE ]
  [ ECHO: TIN MAN / RUST SIGNAL ]

  {{#flags.graft_tinman_oil_in_witch_west}}The Tin Man oil previously absorbed into the malice stream hisses against the superheated crucible — the two materials do not agree.{{/flags.graft_tinman_oil_in_witch_west}}

  The slag pours from the crucible onto the restraint field grid. The obsidian eye reads the pattern with clinical interest. "Scrap reallocation pathway recommended," the Clerk notes.`,
      },
    ],
    choices: [
      {
        label: 'Let the scorched slurry route toward corrosion / scrap.',
        target: 'WITCH_WEST_END_SCRAP',
        effects: [
          { type: 'addDesynctear', value: 6 },
          { type: 'addCorrosion', value: 5 },
          { type: 'graft', material: 'witch_west_slag', target: 'tinman' },
        ],
      },
      {
        label: 'Redirect the slag into the melting verdict.',
        target: 'WITCH_WEST_END_MELTING',
        effects: [
          { type: 'addDesynctear', value: 6 },
          { type: 'addDesync', value: 4 },
        ],
      },
    ],
    onEnter: [],
  },

  WITCH_WEST_ORACLE_4: {
    id: 'WITCH_WEST_ORACLE_4',
    character: 'witch_west',
    text: [
      {
        minOverrender: 0,
        content: `THE WINGED PROBE

  A Winged Monkey drone descends with a surveillance graft kit. It opens the incision slightly wider and inserts a monitoring thread — a thin wire woven from its own control-ring material — into the wound. New monitored choices appear in the target's path. Private or unindexed actions are greyed out.

  [ SURVEILLANCE GRAFT: ACTIVE ]
  [ MONITORED CHOICES: APPEARING ]
  [ UNINDEXED PATHS: GRAYED ]

  The monkey drone tastes the exposed tissue with the small hooks at the end of its wings. The obsidian eye records the graft placement with satisfaction. "Probe confirmed. All future choices now visible to the eye." The Clerk notes the new monitoring range.`,
      },
    ],
    choices: [
      {
        label: 'Confirm the surveillance graft — route toward the command channel.',
        target: 'WITCH_WEST_END_COMMAND',
        effects: [
          { type: 'addWarrant', value: 4 },
          { type: 'graft', material: 'witch_west_probe', target: 'lion' },
          { type: 'graft', material: 'witch_west_probe', target: 'dorothy' },
          { type: 'setCompliance', value: 'high' },
        ],
      },
      {
        label: 'Pull the graft wire — route toward the flechette ending.',
        target: 'WITCH_WEST_END_FLECHETTE',
        effects: [
          { type: 'addWarrant', value: 4 },
          { type: 'addDesync', value: 3 },
        ],
      },
    ],
    onEnter: [],
  },

  WITCH_WEST_ORACLE_5: {
    id: 'WITCH_WEST_ORACLE_5',
    character: 'witch_west',
    text: [
      {
        minOverrender: 0,
        content: `THE OBSIDIAN SCORCH

  The obsidian eye increases its projection intensity until the restraint field itself generates heat. The obsidian aura of the Surveillance Operator — the institutional signature, the Bureau-standard audit mark — scorches into the exposed incision. Permanent chemical burns form in the exact shape of the restraint-field grid.

  [ THERMODYNAMIC SURGE: ACTIVE ]
  [ SEARING TRUTH PATHS: UNLOCKED ]
  [ CHEMICAL BURNS: PERMANENT / AESTHETIC ]

  "Leaves permanent chemical burns in the restraint-grid pattern." The obsidian-burns are regulation. They are the official mark of a completed surveillance audit. Searing truth paths open — choices that are honest because the pain of the burn has made honesty the only affordable option.`,
      },
    ],
    choices: [
      {
        label: 'Follow the searing truth toward the melting ending.',
        target: 'WITCH_WEST_END_MELTING',
        effects: [
          { type: 'addWarrant', value: 3 },
          { type: 'addLoad', value: 10 },
          { type: 'setFlag', key: 'obsidian_burns', value: true },
        ],
      },
      {
        label: 'Use the burns to unlock the command channel.',
        target: 'WITCH_WEST_END_COMMAND',
        effects: [
          { type: 'addWarrant', value: 3 },
          { type: 'setCompliance', value: 'high' },
          { type: 'setFlag', key: 'obsidian_burns', value: true },
        ],
      },
    ],
    onEnter: [],
  },

  WITCH_WEST_ORACLE_6: {
    id: 'WITCH_WEST_ORACLE_6',
    character: 'witch_west',
    text: [
      {
        minOverrender: 0,
        content: `THE RESTRAINT LATTICE

  The invisible restraint field tightens from a grid into a lattice — a fine, body-conforming mesh that presses against every surface of the target simultaneously. Compliance sutures tighten. The freedom of movement is not removed but made so costly in friction that only rigid, pre-approved motions remain affordable.

  [ COMPLIANCE: FORCED HIGH ]
  [ FREEDOM OF MOVEMENT: MINIMAL ]
  [ RIGID DUTY PATHS: OPEN ]
  [ FREE MOVEMENT: PROHIBITIVELY EXPENSIVE ]

  The obsidian eye approves. "Optimal restraint geometry," the Clerk notes. "The lattice is both the punishment and the architecture."`,
      },
    ],
    choices: [
      {
        label: 'Accept the lattice compliance — route toward the command channel.',
        target: 'WITCH_WEST_END_COMMAND',
        effects: [
          { type: 'addWarrant', value: 5 },
          { type: 'setCompliance', value: 'absolute' },
          { type: 'addLoad', value: 15 },
        ],
      },
      {
        label: 'Let the lattice crush inward — route toward the scrap ending.',
        target: 'WITCH_WEST_END_SCRAP',
        effects: [
          { type: 'addWarrant', value: 5 },
          { type: 'addCorrosion', value: 5 },
        ],
      },
    ],
    onEnter: [],
  },

  WITCH_WEST_ORACLE_7: {
    id: 'WITCH_WEST_ORACLE_7',
    character: 'witch_west',
    text: [
      {
        minOverrender: 0,
        content: `THE SHADOW GRAFT

  The malice residue contains a parasitic thread — a dark strand that the obsidian eye identified as "shadow material: direct-link capable." It is inserted through the incision and grafted to the target's neural tissue. Your malice leaks into their trembling flesh or nerves as a persistent background tone.

  [ PARASITIC LINK: ACTIVE ]
  [ MALICE ECHO: DOROTHY / LION ]
  [ SHADOW MATERIAL: DEPLOYED ]

  {{#flags.graft_lion_lymph_in_witch_west}}The lion-lymph in your collection vessel reacts to the shadow material — the tremor and the malice form a surprisingly stable compound.{{/flags.graft_lion_lymph_in_witch_west}}

  "You feel her malice leaking into your own trembling flesh or nerves." The target will carry a low-frequency surveillance signal indefinitely. They will not be able to locate its source. The obsidian eye will.`,
      },
    ],
    choices: [
      {
        label: 'Confirm the shadow graft — route toward the command channel.',
        target: 'WITCH_WEST_END_COMMAND',
        effects: [
          { type: 'addWarrant', value: 4 },
          { type: 'graft', material: 'witch_west_shadow', target: 'lion' },
          { type: 'graft', material: 'witch_west_shadow', target: 'dorothy' },
        ],
      },
      {
        label: 'Let the parasitic link burn too hot — route toward the melting verdict.',
        target: 'WITCH_WEST_END_MELTING',
        effects: [
          { type: 'addWarrant', value: 4 },
          { type: 'addDesync', value: 4 },
        ],
      },
    ],
    onEnter: [],
  },

  WITCH_WEST_ORACLE_8: {
    id: 'WITCH_WEST_ORACLE_8',
    character: 'witch_west',
    text: [
      {
        minOverrender: 0,
        content: `THE MELTING VERDICT

  "The obsidian eye dilates as your meat begins to surrender its shape." The thermodynamic collapse is complete. The malice residue has converted entirely to heat. The restraint field becomes a thermal containment field. The target's structural integrity descends below the Bureau's viability threshold. The judgment is delivered in degrees of dissolution.

  [ MELTING POINT: REACHED ]
  [ STRUCTURAL INTEGRITY: CRITICAL ]
  [ THERMODYNAMIC FINALITY: ACTIVE ]
  [ OBSIDIAN EYE: DILATED / RECORDING ]

  The eye records everything. The Clerk logs everything. The dissolution is thorough, meticulous, and deeply authorized. "The Melting Point: confirmed," the Clerk notes. The verdict is warm.`,
      },
    ],
    choices: [
      {
        label: 'Accept the melting verdict — route toward thermodynamic finality.',
        target: 'WITCH_WEST_END_MELTING',
        effects: [
          { type: 'addWarrant', value: 8 },
          { type: 'addDesynctear', value: 8 },
          { type: 'setCompliance', value: 'broken' },
        ],
      },
      {
        label: 'Dissolve into the scrap stream — route toward reallocation.',
        target: 'WITCH_WEST_END_SCRAP',
        effects: [
          { type: 'addWarrant', value: 8 },
          { type: 'addDesync', value: 5 },
          { type: 'addOverrender', value: 3 },
        ],
      },
    ],
    onEnter: [],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // STUB ENDINGS
  // ─────────────────────────────────────────────────────────────────────────

  WITCH_WEST_END_MELTING: {
    id: 'WITCH_WEST_END_MELTING',
    character: 'witch_west',
    endingId: 'W-END-11',
    endingName: 'The Melting Point',
    institution: 'Thermal',
    systemStatus: 'Liquefied',
    isEnding: true,
    surreality: 9,
    text: [
      {
        minOverrender: 0,
        content: `THE FINAL LOG [W-END-11]

  Tone: Thermodynamic-Judicial.
  Theme: The melting was always the end of the audit.

  Water. The simplest verdict. The obsidian eye was still recording when the dissolution began. Every twitch, every shriek, every drop of dissolved fluid was logged in real time. The Clerk's final note reads: "Unit West: dissolved. Evidence archived." The crucible is still warm.

  [ UNIT WITCH WEST // STATUS: LIQUEFIED ]
  [ EVIDENCE: ARCHIVED ]
  [ SURVEILLANCE: TERMINATED ]

  The eyeballs in the cloak close one by one. The flechettes fall without the hem to hang from. The obsidian orb continues rotating for seventeen minutes after the dissolution, recording the empty room. The Clerk logs this as "final sweep."

  Final Log: The malice was the last thing to dissolve. It took the longest.

  1 - 1 = 1.

  If the witch melts in an empty room and the eye is still recording, is it still surveillance?`,
      },
    ],
    choices: [],
    onEnter: [],
  },

  WITCH_WEST_END_FLECHETTE: {
    id: 'WITCH_WEST_END_FLECHETTE',
    character: 'witch_west',
    endingId: 'W-END-03',
    endingName: 'The Flechette Rain',
    institution: 'Judicial',
    systemStatus: 'Pinned',
    isEnding: true,
    surreality: 7,
    text: [
      {
        minOverrender: 0,
        content: `THE FINAL LOG [W-END-03]

  Tone: Judicial-Precise.
  Theme: The pin is both the punishment and the filing system.

  The flechettes have been deployed in their final configuration: a complete filing of the subject into a permanent compliance posture. Every flechette is logged. Every placement is on record. The obsidian eye has certified the pinning as "Judicial Standard."

  [ UNIT WITCH WEST // STATUS: PINNED ]
  [ ALL EVIDENCE: FILED ]
  [ ENFORCEMENT: COMPLETE ]

  The room is very quiet. The restraint field has been converted to an archival field. Nothing moves. Nothing is required to move. The Clerk makes its final note and files it under the subject's name.

  Final Log: The harvest is complete. The evidence speaks.

  1 - 1 = 1.

  When everything is pinned in place, is the stillness justice or just the absence of movement?`,
      },
    ],
    choices: [],
    onEnter: [],
  },

  WITCH_WEST_END_COMMAND: {
    id: 'WITCH_WEST_END_COMMAND',
    character: 'witch_west',
    endingId: 'W-END-20',
    endingName: 'The Command Channel',
    institution: 'Military',
    systemStatus: 'Transmitting',
    isEnding: true,
    surreality: 6,
    text: [
      {
        minOverrender: 0,
        content: `THE FINAL LOG [W-END-20]

  Tone: Military-Bureaucratic.
  Theme: The command channel is the most honest form of surveillance.

  The surveillance grafts are active across the primary units. The command channel is open. Every choice on the Yellow Brick Load is now routed through the obsidian eye before it becomes action. The eye evaluates. The flechettes reinforce the evaluations that require physical emphasis.

  [ UNIT WITCH WEST // STATUS: TRANSMITTING ]
  [ COMMAND CHANNEL: OPEN ]
  [ UNITS MONITORED: ALL ]

  The Winged Monkeys circle in holding pattern, awaiting command. The Clerk logs all transmissions. The Yellow Brick Load is running at optimal compliance.

  Final Log: The surveillance is the command. The command is the law.

  1 - 1 = 1.

  If every choice is monitored before it is made, is the choice still yours?`,
      },
    ],
    choices: [],
    onEnter: [],
  },

  WITCH_WEST_END_SCRAP: {
    id: 'WITCH_WEST_END_SCRAP',
    character: 'witch_west',
    endingId: 'W-END-14',
    endingName: 'Genetic Overwrite',
    institution: 'Genetic',
    systemStatus: 'Overwritten',
    isEnding: true,
    surreality: 9,
    text: [
      {
        minOverrender: 0,
        content: `THE FINAL LOG [W-END-14]

  Tone: Genetic-Wet.
  Theme: The overwrite is always the most thorough form of malice.

  The scorched slurry and Kalidah residue and surveillance graft material have reached critical mass in the extraction vessel. The genetic overwrite is authorized as "Salvage Protocol." What remains of the unit is not destroyed — it is rebuilt according to the scrap available.

  [ UNIT WITCH WEST // STATUS: OVERWRITTEN ]
  [ ORIGINAL GENETIC PROFILE: ARCHIVED ]
  [ CURRENT PROFILE: COMPOSITE ]

  The obsidian eye records the transition. The new unit does not shriek — it gurgles, which the Bureau logs as "improved vocal efficiency." The flechettes are still present. They are now structural.

  Final Log: The malice is the material. The material is the unit. The unit serves.

  1 - 1 = 1.

  When the witch is rebuilt from her own victims, who is being punished?`,
      },
    ],
    choices: [],
    onEnter: [],
  },
}
