/**
 * YELLOW BRICK LOAD — Lion Oracle Passages
 * Character: Lion (Unit L-77)
 *
 * Oracle ritual passages (ENTRY, DRAW, 1-8).
 * Extracted from lion_branches.js.
 */

export const lionOraclePassages = {

  LION_ORACLE_ENTRY: {
    id: 'LION_ORACLE_ENTRY',
    character: 'lion',
    text: [
      {
        minOverrender: 0,
        content: `THE INK-CROW DESCENDS

  The Milestone Marker bleeds a fresh rivulet of dark fluid. The tremor in your spine hits its peak — 14Hz, resonant, unmistakable — and the black bird drops from the iron post in a single, deliberate fold of wings.

  It is not a crow. It is a Bureau Crow: a glossy, filing-cabinet black, with a beak of hammered iron that ends in a stamp instead of a point. Its eyes are polished glass lenses that rotate with the click of a hole-puncher. It lands on your shoulder. Its claws sink through your mane into the meat beneath.

  [ WETWARE EXTRACTION AUTHORIZED ]
  [ PROCEDURE: TREMOR FLUID READING ]
  [ OPERATOR: BUREAU INK-READER UNIT ]

  "Unit L-77," the bird clicks. "Your tremor has reached a reportable frequency. Standard procedure requires a fluid sample." Its beak angles toward the base of your skull. You feel the cold precision of iron against the jaw hinge. "The ink does not lie. It only smears."

  The incision is small. A bead of lymph mixed with tremor fluid wells up and is immediately absorbed into the crow's stamp-beak. It regurgitates a wet ink pattern onto a scrap of carbon paper held in its secondary claw. The Clerk makes a note while your flesh is still open.`,
      },
    ],
    choices: [
      {
        label: 'Submit to the reading. (The Authorized Extraction)',
        target: 'LION_ORACLE_DRAW',
        effects: [{ type: 'addVibration', value: 2 }],
      },
      {
        label: 'Attempt to shake the crow loose. (The Refusal)',
        target: 'LION_DENIAL',
        effects: [
          { type: 'addVibration', value: 5 },
          { type: 'addDesync', value: 1 },
          { type: 'setFlag', key: 'oracle_lion_refused', value: true },
        ],
      },
    ],
    onEnter: [],
  },

  LION_ORACLE_DRAW: {
    id: 'LION_ORACLE_DRAW',
    character: 'lion',
    isOracleDraw: true,
    text: [
      {
        minOverrender: 0,
        content: `THE INK READING

  The Bureau Crow tilts its carbon-paper print into the light. The ink pattern is wet, blotched, alive with the rhythm of your tremor. It is The Weighted King — a lion whose mane has become a waterfall of filing cabinets, held upright only by the volume of paperwork beneath him. The crown is a rubber stamp. The eyes are closed.

  "Eight possible readings," the Crow announces. "The smear will determine your vector."

  It waits. The incision at your jaw hinge is still open. The Clerk makes another note.

  [ SELECT INTERPRETATION — THE CROW READS THE SMEAR ]`,
      },
    ],
    choices: [
      {
        label: '1. The Spasming Lymph — lean into the surge.',
        target: 'LION_ORACLE_1',
        effects: [],
      },
      {
        label: '2. The Clotted Stamp — accept the official seal.',
        target: 'LION_ORACLE_2',
        effects: [],
      },
      {
        label: '3. The Kalidah Stain — follow the black ink toward the merge.',
        target: 'LION_ORACLE_3',
        effects: [],
      },
      {
        label: '4. The Jaw Fracture — let the pressure lock the jaw.',
        target: 'LION_ORACLE_4',
        effects: [],
      },
      {
        label: '5. The Wet Gypsum Bead — accept the sensory weight.',
        target: 'LION_ORACLE_5',
        effects: [],
      },
      {
        label: '6. The Roaring Residue — hear the echo in another unit\'s chest.',
        target: 'LION_ORACLE_6',
        effects: [],
      },
      {
        label: '7. The Stapled Tremor — let the crow suture the shaking.',
        target: 'LION_ORACLE_7',
        effects: [],
      },
      {
        label: '8. The Unlogged Spasm — go off the record entirely.',
        target: 'LION_ORACLE_8',
        effects: [],
      },
    ],
    onEnter: [],
  },

  LION_ORACLE_1: {
    id: 'LION_ORACLE_1',
    character: 'lion',
    text: [
      {
        minOverrender: 0,
        content: `THE SPASMING LYMPH

  The crow reads the jittering fluid and stamps the carbon paper twice. "Surge confirmed. Roar vector: unlocked."

  Your neck meat convulses as the crow withdraws its beak. The tremor doubles — a full-body shudder that knocks your jaw open and floods your mouth with the taste of copper and wet ink. The system logs this as "Kinetic Overexpression." Your claws are out. Your mane is standing.

  [ VIBRATION: SURGE +5 ]
  [ COMPLIANCE SOFT-OUTS: GRAY ]
  [ VIOLENT VECTOR: UNLOCKED ]

  The Crow makes a final note. "The King is expressing." It departs. You are vibrating at a frequency that shakes the yellow bricks loose from the road.`,
      },
    ],
    choices: [
      {
        label: 'Channel the surge into the unmapped thicket.',
        target: 'LION_VIOLENCE',
        effects: [
          { type: 'addVibration', value: 5 },
          { type: 'addDesync', value: 1 },
          { type: 'grayOut', key: 'LION_ROYAL_COMPLIANCE' },
        ],
      },
      {
        label: 'Let the surge burn through the system spasm node.',
        target: 'LION_SYSTEM_SPASM',
        effects: [
          { type: 'addVibration', value: 5 },
          { type: 'addSmudge', value: 1 },
        ],
      },
    ],
    onEnter: [],
  },

  LION_ORACLE_2: {
    id: 'LION_ORACLE_2',
    character: 'lion',
    text: [
      {
        minOverrender: 0,
        content: `THE CLOTTED STAMP

  The crow presses its beak-stamp directly into the open incision. You feel the hot, wet pressure of official certification applied to exposed meat. A Bureau seal blooms in bruised purple across your jaw hinge. The lymph clots immediately around the stamp; the tremor subsides to a low, compliant hum.

  [ COMPLIANCE: HIGH ]
  [ DESYNC TEAR: +3 ]
  [ ASSIMILATION VECTOR: OPEN ]
  [ WOUND STATUS: OFFICIALLY SEALED ]

  "Unit L-77 has been read," the crow announces to no one in particular. "Status: Pending Assimilation." It departs. You feel the stamp scar pulling every time you open your mouth. The Clerk has made a note. The note is already filed.`,
      },
    ],
    choices: [
      {
        label: 'Accept the certified compliance and walk toward assimilation.',
        target: 'LION_ASSIMILATION',
        effects: [
          { type: 'setCompliance', value: 'high' },
          { type: 'addDesynctear', value: 3 },
          { type: 'graft', material: 'lion_compliance_stamp', target: 'lion' },
        ],
      },
      {
        label: 'Follow the desync tear inward toward the root.',
        target: 'LION_ROOT_ACCESS',
        effects: [
          { type: 'addDesynctear', value: 5 },
          { type: 'addDesync', value: 2 },
        ],
      },
    ],
    onEnter: [],
  },

  LION_ORACLE_3: {
    id: 'LION_ORACLE_3',
    character: 'lion',
    text: [
      {
        minOverrender: 0,
        content: `THE KALIDAH STAIN

  The ink pattern is wrong. The crow tilts the carbon paper and the smear resolves into something that is neither lion-lymph nor bureau-standard: a black-and-copper hybrid slurry, the unmistakable signature of Kalidah merge fluid.

  [ DESYNC TEAR: CRITICAL ]
  [ MERGE VECTOR: ACTIVE ]
  [ HYBRID SIGNATURE DETECTED ]

  "The smear contains foreign tissue," the crow announces, without inflection. "Merge contamination. Routing accordingly."

  You feel the jaw incision widen slightly as something that is not your tremor pulses through the wound. The yellow bricks ahead begin to look more like vertebrae than paving stones. The thicket has found you even here.`,
      },
    ],
    choices: [
      {
        label: 'Follow the merge signal toward the thicket.',
        target: 'LION_END_28',
        effects: [
          { type: 'addDesynctear', value: 8 },
          { type: 'addDesync', value: 3 },
          { type: 'graft', material: 'kalidah_lymph', target: 'lion' },
        ],
      },
      {
        label: 'Purge the foreign signature through the root directory.',
        target: 'LION_ROOT_ACCESS',
        effects: [
          { type: 'addDesynctear', value: 5 },
          { type: 'addSmudge', value: 2 },
        ],
      },
    ],
    onEnter: [],
  },

  LION_ORACLE_4: {
    id: 'LION_ORACLE_4',
    character: 'lion',
    text: [
      {
        minOverrender: 0,
        content: `THE JAW FRACTURE

  The stamp-beak catches on something when the crow withdraws. A small, wet crack propagates through the jaw hinge joint. Your mouth locks. Not fully — you can still breathe — but the lateral movement required for speech is gone. You try to say "Status: Nominal." What comes out is a low, pressurized click.

  [ JAW: FRACTURED / LOCKED ]
  [ SPEECH CHOICES: GRAYED ]
  [ PHYSICAL BREACH OPTIONS: UNLOCKED ]
  [ VIBRATION: LOCKED AT CURRENT LEVEL ]

  The crow makes a note. "Vocal hardware non-functional. Routing to kinetic expression." You feel the silence of a King who can no longer negotiate. All that is left is the tremor — and the direction it wants to move.`,
      },
    ],
    choices: [
      {
        label: 'Express through kinetic breach — launch into the thicket.',
        target: 'LION_VIOLENCE',
        effects: [
          { type: 'addVibration', value: 3 },
          { type: 'grayOut', key: 'LION_ASSIMILATION' },
          { type: 'setFlag', key: 'jaw_locked', value: true },
        ],
      },
      {
        label: 'Route the locked pressure through the echo chamber.',
        target: 'LION_ECHO_CHAMBER',
        effects: [
          { type: 'addVibration', value: 3 },
          { type: 'addOverrender', value: 1 },
        ],
      },
    ],
    onEnter: [],
  },

  LION_ORACLE_5: {
    id: 'LION_ORACLE_5',
    character: 'lion',
    text: [
      {
        minOverrender: 0,
        content: `THE WET GYPSUM BEAD

  The ink pattern resolves into a dense, grey smear — the color and texture of wet plaster. The crow reads it as "Load Accumulation: Sensory Overload." Its beak returns to the wound and deposits something: a small bead of wet gypsum, the same substance that coats the walls of the Bureau's lower levels.

  [ LOAD: +15 ]
  [ SENSORY OVERLOAD: ACTIVE ]
  [ STATUS: BURDENED ]

  Your mane grows heavier. Everything tastes of wet plaster and raw meat. The yellow bricks seem to be sinking into something soft. The crow stamps the reading: "Weighted King confirmed. Load is the diagnosis." It departs, already filing the result.

  You are carrying more than you were before. The gypsum bead sits somewhere behind your sternum, dense and patient.`,
      },
    ],
    choices: [
      {
        label: 'Carry the weight to the Assimilation node.',
        target: 'LION_ASSIMILATION',
        effects: [
          { type: 'addLoad', value: 15 },
          { type: 'addSmudge', value: 1 },
        ],
      },
      {
        label: 'Attempt to purge the gypsum through the taxidermy route.',
        target: 'LION_TAXIDERMY_HUB',
        effects: [
          { type: 'addLoad', value: 15 },
          { type: 'addOverrender', value: 1 },
        ],
      },
    ],
    onEnter: [],
  },

  LION_ORACLE_6: {
    id: 'LION_ORACLE_6',
    character: 'lion',
    text: [
      {
        minOverrender: 0,
        content: `THE ROARING RESIDUE

  The ink pattern shows two overlapping smears — yours, and a faint, foreign echo. The crow reads it quietly: "Cross-unit resonance. Your roar has been registered in another unit's chassis."

  [ CROSS-UNIT ECHO: ACTIVE ]
  [ GRAFT MATERIAL: LION_ROAR → DOROTHY / TIN MAN ]
  [ SURREALITY: ELEVATED ]

  You hear it then: your own roar, slightly delayed, resonating from somewhere else. Not from your throat — from a hollow space that isn't yours. It sounds like it's echoing from inside a tin chest, or from the Kansas-flat interior of someone who carries too much displacement. The Clerk notes: "Echo confirmed. Material allocated."

  {{#flags.graft_lion_roar_echo_in_tinman}}A wet clicking that doesn't belong to you — a tremor borrowed from another unit's jaw — rises briefly in your chest and subsides.{{/flags.graft_lion_roar_echo_in_tinman}}`,
      },
    ],
    choices: [
      {
        label: 'Follow the echo toward the audio event node.',
        target: 'LION_AUDIO_EVENT',
        effects: [
          { type: 'addDesync', value: 2 },
          { type: 'graft', material: 'lion_roar_echo', target: 'tinman' },
        ],
      },
      {
        label: 'Let the echo fade and continue down the Road.',
        target: 'LION_DENIAL',
        effects: [
          { type: 'addOverrender', value: 1 },
          { type: 'graft', material: 'lion_roar_echo', target: 'dorothy' },
        ],
      },
    ],
    onEnter: [],
  },

  LION_ORACLE_7: {
    id: 'LION_ORACLE_7',
    character: 'lion',
    text: [
      {
        minOverrender: 0,
        content: `THE STAPLED TREMOR

  The crow produces a small, Bureau-standard staple gun from its secondary claw. With three precise impacts, it drives staples through the jaw incision and into the tremor-muscle beneath. The shaking decreases. Not gone — suppressed. Nailed down. The tremor is still there, but it cannot move.

  [ VIBRATION: -4 (STAPLE SUPPRESSION) ]
  [ STAPLE SCARS: LOGGED ]
  [ COMPLIANCE GRAFT: ACTIVE ]
  [ NOTE: SUPPRESSION IS NOT RESOLUTION ]

  The crow stamps its final note. "Tremor management: complete. Reassignment to compliance path." The staples itch. They will always itch. The Clerk has noted that the King is now presentable.`,
      },
    ],
    choices: [
      {
        label: 'Accept the staple compliance and walk toward Royal Compliance.',
        target: 'LION_ROYAL_COMPLIANCE',
        effects: [
          { type: 'addVibration', value: -4 },
          { type: 'setCompliance', value: 'high' },
          { type: 'setFlag', key: 'staple_scars', value: true },
        ],
      },
      {
        label: 'Let the staples hold while heading toward the Harmonic Alignment.',
        target: 'LION_ASSIMILATION',
        effects: [
          { type: 'addVibration', value: -4 },
          { type: 'addLoad', value: 10 },
          { type: 'setFlag', key: 'staple_scars', value: true },
        ],
      },
    ],
    onEnter: [],
  },

  LION_ORACLE_8: {
    id: 'LION_ORACLE_8',
    character: 'lion',
    text: [
      {
        minOverrender: 0,
        content: `THE UNLOGGED SPASM

  The crow reads the smear and stops. A long pause. The glass-lens eyes rotate. Then: "This pattern is not in the index."

  [ DESYNC TEAR: CRITICAL ]
  [ COMPLIANCE: BROKEN ]
  [ ORACLE RESULT: UNINDEXED ]
  [ CROW STATUS: WITHDRAWING ]

  The crow departs without stamping. Without filing. The carbon paper falls to the yellow bricks and dissolves in the dark fluid leaking from the Milestone Marker. The incision at your jaw hinge is still open. The Clerk never finished the note. Somewhere in the Bureau's records, there is now a gap where Unit L-77's tremor reading should be.

  You are off the record. The system doesn't know what you are. The tremor accelerates, uncatalogued and free.`,
      },
    ],
    choices: [
      {
        label: 'Accelerate into the unindexed dark.',
        target: 'LION_DATA_LEAK',
        effects: [
          { type: 'addDesynctear', value: 8 },
          { type: 'addDesync', value: 5 },
          { type: 'setCompliance', value: 'broken' },
        ],
      },
      {
        label: 'Use the unlogged moment to reach the Ghost Bit node.',
        target: 'LION_VOID_FRAGMENT',
        effects: [
          { type: 'addDesynctear', value: 5 },
          { type: 'checkGhostSignal' },
        ],
      },
    ],
    onEnter: [],
  },

  // ── New: Core Esoteric outcomes ──────────────────────────────────────────

  LION_ORACLE_9: {
    id: 'LION_ORACLE_9',
    character: 'lion',
    text: [
      {
        minOverrender: 0,
        content: `THE SEALED ROAR

  The Bureau Crow inserts the lead-weighted scroll directly into the jaw joint. There is a sound — a wet, muffled thud — and then nothing. The tremor stops. Not gradually. All at once. The silence that replaces it is not peace; it is the specific silence of something that has been officially terminated.

  [ VIBRATION: RESET TO 0 ]
  [ LOAD: +15 ]
  [ COMPLIANCE: HIGH ]
  [ STATUS: AMBIENT DISTURBANCE — FILED ]

  You are no longer a threat. You are heavier than you have ever been. The Crow stamps the carbon paper and departs without comment. The roar is now a case number. Case number L-77-ARD.`,
      },
    ],
    choices: [
      {
        label: 'Accept the silence. File forward.',
        target: 'LION_COMPLIANCE_TRACK',
        effects: [
          { type: 'setWetwareStat', stat: 'vibration', value: 0 },
          { type: 'addLoad', value: 15 },
          { type: 'setCompliance', value: 'high' },
        ],
      },
      {
        label: 'Search for the vibration inside the silence.',
        target: 'LION_ROOT_ACCESS',
        effects: [
          { type: 'setWetwareStat', stat: 'vibration', value: 0 },
          { type: 'addDesync', value: 3 },
        ],
      },
    ],
    onEnter: [],
  },

  LION_ORACLE_10: {
    id: 'LION_ORACLE_10',
    character: 'lion',
    text: [
      {
        minOverrender: 0,
        content: `THE KINETIC AUDITOR

  The Crow weighs your mass. Not your body mass — your kinetic potential. It finds the center of gravity has shifted. Your mind used to be the heaviest part. It is no longer the heaviest part. The shoulders are heavier now. The jaw is heavier. The claws register on the Auditor's scale in a way that a mind cannot.

  [ VIBRATION: +8 ]
  [ DESYNC: +5 ]
  [ TAG: KINETICNODE — ACTIVE ]
  [ COMPLIANCE BYPASS: NEXT CHOICE ONLY ]

  "You are being reassigned," the Crow says. "From a psychological asset to a kinetic one." It stamps REDISTRIBUTION OF MASS on your sternum. The stamp leaves an impression you can feel when you breathe.`,
      },
    ],
    choices: [
      {
        label: 'Follow the kinetic vector into the Military filter.',
        target: 'LION_VIOLENCE',
        effects: [
          { type: 'addVibration', value: 8 },
          { type: 'addDesync', value: 5 },
          { type: 'modifyTag', value: 'KineticNode' },
        ],
      },
      {
        label: 'Resist the reassignment. Stay in the mind.',
        target: 'LION_SYSTEM_SPASM',
        effects: [
          { type: 'addVibration', value: 4 },
          { type: 'addLoad', value: 8 },
        ],
      },
    ],
    onEnter: [],
  },

  // ── New: Signal Bleed outcomes ───────────────────────────────────────────

  LION_ORACLE_11: {
    id: 'LION_ORACLE_11',
    character: 'lion',
    text: [
      {
        minOverrender: 0,
        content: `THE BURLAP MANE

  The Straw Oracle's signal has bled into the Bureau Crow's reading. The Crow is confused. It has indexed a lion and found a scarecrow. Your mane is dry. The fur has not fallen out; it has been replaced, fiber by fiber, with corn husks that crackle when you breathe.

  Your mouth is sewn shut with twine.

  [ VIBRATION: RESET TO 0 ]
  [ NEURAL DENSITY: +15 ]
  [ LOAD: +10 ]
  [ STATUS: STATIONED — CANNOT FLEE ]
  [ FEAR RESET: IMMUNE ]

  You are no longer mobile in the kinetic sense. You are stationed. The crows do not come near a scarecrow. This is the protection. The protection is also the trap.`,
      },
    ],
    choices: [
      {
        label: 'Accept the Stationed status. Guard this coordinate.',
        target: 'LION_COMPLIANCE_TRACK',
        effects: [
          { type: 'setWetwareStat', stat: 'vibration', value: 0 },
          { type: 'addNeuralDensity', value: 15 },
          { type: 'addLoad', value: 10 },
          { type: 'setFlag', key: 'lion_stationed', value: true },
        ],
      },
      {
        label: 'Tear the twine. Force the roar back.',
        target: 'LION_SYSTEM_SPASM',
        effects: [
          { type: 'addVibration', value: 10 },
          { type: 'addScatter', value: 5 },
          { type: 'addDesync', value: 3 },
        ],
      },
    ],
    onEnter: [],
  },

  LION_ORACLE_12: {
    id: 'LION_ORACLE_12',
    character: 'lion',
    text: [
      {
        minOverrender: 0,
        content: `THE SCARECROW'S NERVE

  The Oracle asks for a donation. You have structural tension. The Scarecrow has scatter. The redistribution is being processed in real time — a gold thread extracted from your tail, routed through Bureau channels, and grafted into a burlap seam several hundred yards away.

  You feel lighter. The lightness is not courage. It is evacuation.

  [ LOAD: -15 ]
  [ HOLLOWING: +10 ]
  [ DESYNC: +8 ]
  [ CONVERGENCE: S-END-03 PROXIMITY INCREASED ]

  The crow completes the transfer and leaves you the receipt. The receipt says "STRUCTURAL DONOR — UNIT L-77." You feel the hollow where the tension used to be.`,
      },
    ],
    choices: [
      {
        label: 'Follow the thread toward the Scarecrow.',
        target: 'LION_ASSIMILATION',
        effects: [
          { type: 'addLoad', value: -15 },
          { type: 'addHollowing', value: 10 },
          { type: 'addDesync', value: 8 },
          { type: 'setFlag', key: 'lion_structural_donor', value: true },
        ],
      },
      {
        label: 'Refuse the transfer. Reclaim the thread.',
        target: 'LION_ROOT_ACCESS',
        effects: [
          { type: 'addVibration', value: 6 },
          { type: 'addLoad', value: 5 },
        ],
      },
    ],
    onEnter: [],
  },

}
