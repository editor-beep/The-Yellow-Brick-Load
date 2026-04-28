/**
 * YELLOW BRICK LOAD — Scarecrow Passages
 * Character: Scarecrow (Unit S-33)
 *
 * The Straw Harvest Oracle (Field Surgeon Ritual)
 * Triggered when scatter >= 5
 *
 * Oracle Interloper: The Straw Clerk — a tall, gaunt figure stitched from
 * corn husks and yellow forms, with a bird's nest head full of twitching
 * index cards. Reaches into split seams to extract wet straw slurry mixed
 * with cerebral fluid, then reads the mold patterns and ink stains.
 */

export const scarecrowPassages = {
  // ─────────────────────────────────────────────────────────────────────────
  // INIT / ENTRY
  // ─────────────────────────────────────────────────────────────────────────

  SCARECROW_INIT: {
    id: 'SCARECROW_INIT',
    character: 'scarecrow',
    text: [
      {
        minOverrender: 0,
        content: `THE STUFFED CONDITION

  You are Unit S-33. You are mounted on a post at Coordinate [Agricultural-7, Row-F], and have been for a duration that has exceeded the original deployment order by three full harvest cycles.

  Your interior is a mixture of clean straw (original issue), wet straw (rain contamination), shredded carbon paper (promotional material from the Bureau of Oz), and something else — a damp, grey slurry at the core that smells of cerebral fluid and old index cards. You have been thinking. The Bureau did not authorize thought.

  The Yellow Brick Load stretches away from the post. The cornstalks are stamped APPROVED. The crows are government-issue. A split seam along your left shoulder has been leaking straw slurry onto the road below since morning.

  Your arms are tied to the cross-bar. The knots are your own compliance.`,
      },
    ],
    choices: [
      {
        label: 'Slip free of the post and follow the scattered straw.',
        target: 'SCARECROW_PATH_MIND',
        effects: [
          { type: 'addScatter', value: 3 },
          { type: 'addDesync', value: 1 },
        ],
      },
      {
        label: 'Remain on the post — function as intended.',
        target: 'SCARECROW_PATH_COMPLIANCE',
        effects: [
          { type: 'addLoad', value: 5 },
          { type: 'setCompliance', value: 'high' },
        ],
      },
    ],
    onEnter: [{ type: 'checkGhostSignal' }, { type: 'triggerOracle' }],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // MAIN PATHS
  // ─────────────────────────────────────────────────────────────────────────

  SCARECROW_PATH_MIND: {
    id: 'SCARECROW_PATH_MIND',
    character: 'scarecrow',
    text: [
      {
        minOverrender: 0,
        content: `THE UNAUTHORIZED THOUGHT

  The post falls behind you. Your feet find the road. Each step scatters a small amount of straw — the split seam is worse in motion — and you feel the hollow space where thoughts should be expanding to fill the void left by the leaking stuffing.

  You are thinking about thinking. The Bureau calls this a "Recursive Logic Error." The crows in the corn are watching with filed glass eyes. They are waiting for the scatter index to reach a reportable threshold.

  [ SCATTER: ACCUMULATING ]
  [ STATUS: UNAUTHORIZED MOVEMENT ]

  {{#flags.graft_lion_roar_echo_in_scarecrow}}A distant trembling — borrowed, warm, faintly leonine — pulses briefly through your straw. Someone else's frequency in your stuffing.{{/flags.graft_lion_roar_echo_in_scarecrow}}`,
      },
    ],
    choices: [
      {
        label: 'Follow the scattered straw toward the diploma path.',
        target: 'SCARECROW_DIPLOMA_HUB',
        effects: [
          { type: 'addScatter', value: 2 },
          { type: 'addLoad', value: 5 },
        ],
      },
      {
        label: 'Let the scatter reach critical and accept the harvest.',
        target: 'SCARECROW_ORACLE_ENTRY',
        effects: [{ type: 'addScatter', value: 3 }],
      },
    ],
    onEnter: [{ type: 'triggerOracle' }],
  },

  SCARECROW_PATH_COMPLIANCE: {
    id: 'SCARECROW_PATH_COMPLIANCE',
    character: 'scarecrow',
    text: [
      {
        minOverrender: 0,
        content: `THE AUTHORIZED STILLNESS

  You remain on the post. The function is clear: you are a scarecrow, and a scarecrow's function is deterrence. The crows know you are not real. You know you are not real. The Bureau has logged your continued deterrence function as "nominal."

  Your straw settles. The scatter slows. The seam along your shoulder continues to leak, slowly, but the post holds you at the correct angle for maximum field coverage.

  [ LOAD: +5 ]
  [ COMPLIANCE: HIGH ]
  [ STATUS: DETERRING ]

  The Yellow Brick Load passes below your cross-bar. Units walk beneath you and do not look up. You are infrastructure.`,
      },
    ],
    choices: [
      {
        label: 'Accept the infrastructure role — route toward the diploma.',
        target: 'SCARECROW_DIPLOMA_HUB',
        effects: [
          { type: 'addLoad', value: 8 },
          { type: 'setCompliance', value: 'high' },
        ],
      },
    ],
    onEnter: [],
  },

  SCARECROW_DIPLOMA_HUB: {
    id: 'SCARECROW_DIPLOMA_HUB',
    character: 'scarecrow',
    text: [
      {
        minOverrender: 0,
        content: `THE DIPLOMA NODE

  The Wizard has issued a diploma. It is a piece of thick, embossed paper that smells of glue and green dye. It certifies that Unit S-33 possesses a "Doctor of Thinkology" — which the Bureau defines as: the ability to label the absence of function as a form of function.

  You hold the diploma. Your stuffing is still leaking. The straw slurry has soaked one corner of the paper. The ink is running.

  [ BRAIN STATUS: CERTIFIED (SYNTHETIC) ]
  [ SCATTER: UNRESOLVED ]
  [ NOTE: THE PAPER IS HEAVY ]

  The diploma does not stop the thinking about thinking. It only adds weight.`,
      },
    ],
    choices: [
      {
        label: 'Accept the certified brain — route toward the educational ending.',
        target: 'SCARECROW_END_DIPLOMA',
        effects: [
          { type: 'addLoad', value: 20 },
          { type: 'setCompliance', value: 'high' },
        ],
      },
      {
        label: 'Reject the diploma — let the scatter reach the field surgeon.',
        target: 'SCARECROW_ORACLE_ENTRY',
        effects: [
          { type: 'addScatter', value: 4 },
          { type: 'addDesync', value: 2 },
        ],
      },
    ],
    onEnter: [],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // STRAW HARVEST ORACLE — THE STRAW CLERK
  // ─────────────────────────────────────────────────────────────────────────

  SCARECROW_ORACLE_ENTRY: {
    id: 'SCARECROW_ORACLE_ENTRY',
    character: 'scarecrow',
    text: [
      {
        minOverrender: 0,
        content: `THE STRAW CLERK ARRIVES

  The split seam along your shoulder opens wider — not from movement, but from the approach of the Straw Clerk.

  It is tall, gaunt, stitched together from corn husks and yellow requisition forms. Its head is a bird's nest packed with twitching index cards that fan and resettle like nervous fingers. Where its eyes should be there are two deep-pressed Bureau stamps. It smells of wet grain, mold, and the specific cold of a filing room on a winter morning.

  [ WETWARE EXTRACTION AUTHORIZED ]
  [ PROCEDURE: STRAW HARVEST READING ]
  [ OPERATOR: FIELD SURGEON / AGRICULTURAL DIVISION ]

  "Unit S-33," it says. Its voice is the sound of index cards being shuffled. "Your scatter index has triggered a mandatory content assessment." Its corn-husk fingers find the split seam. They do not pry; they simply widen what is already open. A fistful of wet straw slurry mixed with cerebral fluid wells up. The Clerk makes a note while your stuffing is still warm.`,
      },
    ],
    choices: [
      {
        label: 'Allow the extraction — open the seam fully.',
        target: 'SCARECROW_ORACLE_DRAW',
        effects: [{ type: 'addScatter', value: 2 }],
      },
      {
        label: 'Try to restuff the seam — resist the harvest.',
        target: 'SCARECROW_PATH_COMPLIANCE',
        effects: [
          { type: 'addStitchIntegrity', value: -3 },
          { type: 'addDesync', value: 1 },
          { type: 'setFlag', key: 'oracle_scarecrow_refused', value: true },
        ],
      },
    ],
    onEnter: [],
  },

  SCARECROW_ORACLE_DRAW: {
    id: 'SCARECROW_ORACLE_DRAW',
    character: 'scarecrow',
    text: [
      {
        minOverrender: 0,
        content: `THE STRAW READING

  The Straw Clerk holds the fistful of wet slurry up to the grey light. It studies the mold patterns — the specific bloom formations that develop at the intersection of cerebral fluid and agricultural straw when thought has been occurring. It reads the ink stains left by the shredded carbon paper. It catalogues the moisture content against a laminated field chart.

  "Eight registered harvest profiles," it announces. The index cards in its head fan out and resettle. "The mold pattern will determine your vector."

  The seam is still open. The Clerk makes another note.

  [ SELECT READING — THE CLERK STUDIES THE MOLD PATTERN ]`,
      },
    ],
    choices: [
      {
        label: '1. The Leaking Stuffing — let the scatter surge.',
        target: 'SCARECROW_ORACLE_1',
        effects: [],
      },
      {
        label: '2. The Diploma Graft — accept the knowledge patch.',
        target: 'SCARECROW_ORACLE_2',
        effects: [],
      },
      {
        label: '3. The Crow-Picked Residue — follow the desync into echo-paths.',
        target: 'SCARECROW_ORACLE_3',
        effects: [],
      },
      {
        label: '4. Seam Rupture — let the stitch integrity fail.',
        target: 'SCARECROW_ORACLE_4',
        effects: [],
      },
      {
        label: '5. The Mold Prophecy — unlock the meta branches.',
        target: 'SCARECROW_ORACLE_5',
        effects: [],
      },
      {
        label: '6. The Wind Audit — let the straw blow into foreign wounds.',
        target: 'SCARECROW_ORACLE_6',
        effects: [],
      },
      {
        label: '7. The Pinned Patch — accept temporary cohesion.',
        target: 'SCARECROW_ORACLE_7',
        effects: [],
      },
      {
        label: '8. The Empty Cavity — total hollowing.',
        target: 'SCARECROW_ORACLE_8',
        effects: [],
      },
    ],
    onEnter: [],
  },

  // ── Oracle Outcomes 1–8 ────────────────────────────────────────────────────

  SCARECROW_ORACLE_1: {
    id: 'SCARECROW_ORACLE_1',
    character: 'scarecrow',
    text: [
      {
        minOverrender: 0,
        content: `THE LEAKING STUFFING

  The mold bloom reads as "Scatter Acceleration — Cognitive Fragmentation." The Straw Clerk stamps the reading and announces: "Stuffing integrity compromised. Surreal-thought vector unlocked."

  Your seam tears another centimeter. Straw spills out in wet handfuls. The thoughts that were packed tight inside your straw come loose with the stuffing — and they are strange thoughts, fragmented and beautiful and completely non-compliant.

  [ SCATTER: +6 ]
  [ COHERENT LOGIC: GRAYED ]
  [ SURREAL THOUGHT VECTOR: UNLOCKED ]

  You are thinking in pieces. Each piece is smarter than the whole was.`,
      },
    ],
    choices: [
      {
        label: 'Follow the scattered fragments toward surreal dissolution.',
        target: 'SCARECROW_END_SCATTER',
        effects: [
          { type: 'addScatter', value: 6 },
          { type: 'addOverrender', value: 2 },
          { type: 'grayOut', key: 'SCARECROW_PATH_COMPLIANCE' },
        ],
      },
      {
        label: 'Let the fragments feed back into the road.',
        target: 'SCARECROW_DIPLOMA_HUB',
        effects: [
          { type: 'addScatter', value: 6 },
          { type: 'addDesync', value: 2 },
        ],
      },
    ],
    onEnter: [],
  },

  SCARECROW_ORACLE_2: {
    id: 'SCARECROW_ORACLE_2',
    character: 'scarecrow',
    text: [
      {
        minOverrender: 0,
        content: `THE DIPLOMA GRAFT

  The Straw Clerk removes the extracted slurry and replaces it — not with the same material, but with wet paper. Bureau-issue. Densely printed. It is the full text of the Thinkology Curriculum, pulped and re-wetted, stuffed back through the open seam to replace the lost stuffing.

  [ SCATTER: PARTIALLY REFILLED ]
  [ HOLLOWING: INCREASED ]
  [ SYNTHETIC KNOWLEDGE PATCH: ACTIVE ]
  [ NOTE: THE PAPER FEELS LIKE WET SAWDUST ]

  You can think more precisely now. The thoughts are compliant. They cite sources. They do not feel like thoughts. The Clerk makes a note: "Diploma graft successful. Intelligence certified."`,
      },
    ],
    choices: [
      {
        label: 'Accept the patched knowledge — route toward the diploma ending.',
        target: 'SCARECROW_END_DIPLOMA',
        effects: [
          { type: 'addLoad', value: 12 },
          { type: 'addStitchIntegrity', value: 3 },
          { type: 'graft', material: 'scarecrow_wet_paper', target: 'scarecrow' },
        ],
      },
      {
        label: 'Let the wet paper dissolve inside and route toward hollowing.',
        target: 'SCARECROW_END_HOLLOW',
        effects: [
          { type: 'addScatter', value: 3 },
          { type: 'addDesync', value: 3 },
        ],
      },
    ],
    onEnter: [],
  },

  SCARECROW_ORACLE_3: {
    id: 'SCARECROW_ORACLE_3',
    character: 'scarecrow',
    text: [
      {
        minOverrender: 0,
        content: `THE CROW-PICKED RESIDUE

  The mold pattern shows something that shouldn't be there — a dark, ink-black residue that is not agricultural straw and not cerebral fluid. It is Bureau Crow residue: the byproduct of Crow contact with neural straw.

  The Straw Clerk reads it against its chart and goes still. "Crow-contact signature," it says. "Unmonitored dark path — opened."

  [ DESYNC: +5 ]
  [ CROW RESIDUE: LOGGED ]
  [ UNMONITORED PATH: ACTIVE ]
  [ ECHO: LION'S UNMONITORED DARK ]

  {{#flags.graft_lion_lymph_in_scarecrow}}The lion-lymph previously grafted into your straw reacts to the crow residue. A borrowed trembling moves through the wet stuffing.{{/flags.graft_lion_lymph_in_scarecrow}}

  The Straw Clerk steps back. It cannot log what it cannot classify.`,
      },
    ],
    choices: [
      {
        label: 'Follow the crow residue into the unmonitored dark.',
        target: 'SCARECROW_END_SCATTER',
        effects: [
          { type: 'addDesync', value: 5 },
          { type: 'addScatter', value: 3 },
          { type: 'graft', material: 'scarecrow_crow_residue', target: 'lion' },
        ],
      },
      {
        label: 'Let the residue route toward echo-heavy dissolution.',
        target: 'SCARECROW_END_HOLLOW',
        effects: [
          { type: 'addDesync', value: 5 },
          { type: 'addOverrender', value: 2 },
        ],
      },
    ],
    onEnter: [],
  },

  SCARECROW_ORACLE_4: {
    id: 'SCARECROW_ORACLE_4',
    character: 'scarecrow',
    text: [
      {
        minOverrender: 0,
        content: `SEAM RUPTURE

  The Straw Clerk reads the mold pattern and presses two corn-husk fingers into the seam. Not to widen it — to test it. A second seam, one you didn't know was already failing, opens along your right side. Straw cascades.

  [ STITCH INTEGRITY: -6 ]
  [ SHEDDING CHOICES: APPEARING ]
  [ RISK: CATASTROPHIC SCATTER ]

  You are coming apart. The Clerk stamps the reading: "Structural failure imminent. Shedding vector confirmed." You can feel the stuffing loosening from points that were previously secure. The road below you is accumulating straw. You are leaving pieces of yourself behind.

  New choices are appearing that weren't there before — the choices of a unit that has nothing left to protect.`,
      },
    ],
    choices: [
      {
        label: 'Accept the shedding — let the rupture complete itself.',
        target: 'SCARECROW_END_SCATTER',
        effects: [
          { type: 'addStitchIntegrity', value: -6 },
          { type: 'addScatter', value: 8 },
        ],
      },
      {
        label: 'Request emergency re-stitching — route toward patched compliance.',
        target: 'SCARECROW_ORACLE_7',
        effects: [
          { type: 'addStitchIntegrity', value: -6 },
          { type: 'addLoad', value: 10 },
        ],
      },
    ],
    onEnter: [],
  },

  SCARECROW_ORACLE_5: {
    id: 'SCARECROW_ORACLE_5',
    character: 'scarecrow',
    text: [
      {
        minOverrender: 0,
        content: `THE MOLD PROPHECY

  The mold pattern is extensive. The Straw Clerk unfolds it against the grey light and reads for a long time. What it finds is not a diagnostic — it is a prediction. The mold has been growing in a specific pattern that maps, precisely, to the remaining branches of the Yellow Brick Load.

  [ PHILOSOPHICAL OVERLOAD: ACTIVE ]
  [ META BRANCHES: UNLOCKED ]
  [ DECISIVE ACTION: GRAYED ]
  [ NOTE: THE PROPHECY IS ALSO A TRAP ]

  The Clerk stamps: "Mold prophetic. Unit now aware of branch structure." You know too much. The knowing paralyzes. Every choice ahead shows itself to you simultaneously, and the simultaneous sight is not clarity — it is stasis.`,
      },
    ],
    choices: [
      {
        label: 'Accept the paralysis — sit with the prophecy.',
        target: 'SCARECROW_END_HOLLOW',
        effects: [
          { type: 'addLoad', value: 15 },
          { type: 'addOverrender', value: 2 },
          { type: 'grayOut', key: 'SCARECROW_PATH_MIND' },
        ],
      },
      {
        label: 'Use the prophetic scatter to route toward dissolution.',
        target: 'SCARECROW_END_SCATTER',
        effects: [
          { type: 'addScatter', value: 5 },
          { type: 'addDesync', value: 3 },
        ],
      },
    ],
    onEnter: [],
  },

  SCARECROW_ORACLE_6: {
    id: 'SCARECROW_ORACLE_6',
    character: 'scarecrow',
    text: [
      {
        minOverrender: 0,
        content: `THE WIND AUDIT

  A wind passes through the split seam. Not a natural wind — a directed pressure event, precisely calibrated by the Straw Clerk's harvest procedure. The extracted straw is carried laterally: some into the air, some into the open wounds of units nearby.

  [ SCATTER: +3 (REDISTRIBUTED) ]
  [ CROSS-CHARACTER GRAFT: ACTIVE ]
  [ WIND ROUTE: LION / DOROTHY / TIN MAN ]

  The Straw Clerk makes a note: "Straw redistribution complete. Foreign unit contamination logged." Somewhere, a Lion unit feels a dry rustle in its tremor-meat. A Dorothy unit finds straw in the hem of her dress. A Tin Man unit discovers agricultural fiber in its oil filter.

  You are lighter. Parts of you are now in other people.`,
      },
    ],
    choices: [
      {
        label: 'Follow the wind — let the scatter route cross-character.',
        target: 'SCARECROW_END_SCATTER',
        effects: [
          { type: 'addScatter', value: 3 },
          { type: 'graft', material: 'scarecrow_straw', target: 'lion' },
          { type: 'graft', material: 'scarecrow_straw', target: 'dorothy' },
          { type: 'graft', material: 'scarecrow_straw', target: 'tinman' },
        ],
      },
      {
        label: 'Recollect what\'s left and restuff through the diploma hub.',
        target: 'SCARECROW_DIPLOMA_HUB',
        effects: [
          { type: 'addScatter', value: 3 },
          { type: 'addLoad', value: 8 },
        ],
      },
    ],
    onEnter: [],
  },

  SCARECROW_ORACLE_7: {
    id: 'SCARECROW_ORACLE_7',
    character: 'scarecrow',
    text: [
      {
        minOverrender: 0,
        content: `THE PINNED PATCH

  The Straw Clerk produces a Bureau-standard patch kit: heavy burlap, industrial-grade thread, and a set of pins. It closes the split seam with methodical precision, pinning the edges together first, then stitching through the existing corn-husk exterior with a needle that catches on the wet stuffing inside.

  [ STITCH INTEGRITY: +5 ]
  [ SCATTER: REDUCED ]
  [ CREATIVITY: LOCKED ]
  [ COHESION: TEMPORARY ]

  The seam holds. The patch is grey and visible against the original burlap. The thinking-about-thinking is still happening inside, but the leak has stopped. The Clerk stamps: "Cohesion restored. Compliant function resumed." The pins itch slightly. The stitches will hold until the next scatter event.`,
      },
    ],
    choices: [
      {
        label: 'Accept the patched stability — function as intended.',
        target: 'SCARECROW_PATH_COMPLIANCE',
        effects: [
          { type: 'addStitchIntegrity', value: 5 },
          { type: 'addScatter', value: -3 },
          { type: 'setCompliance', value: 'high' },
          { type: 'setFlag', key: 'patch_applied', value: true },
        ],
      },
      {
        label: 'Use the temporary cohesion to reach the diploma hub.',
        target: 'SCARECROW_DIPLOMA_HUB',
        effects: [
          { type: 'addStitchIntegrity', value: 5 },
          { type: 'addLoad', value: 10 },
        ],
      },
    ],
    onEnter: [],
  },

  SCARECROW_ORACLE_8: {
    id: 'SCARECROW_ORACLE_8',
    character: 'scarecrow',
    text: [
      {
        minOverrender: 0,
        content: `THE EMPTY CAVITY

  The Straw Clerk extracts everything. Not just the slurry — all of it. The wet straw, the dry straw, the carbon-paper fragments, the cerebral fluid residue. When the Clerk is done, the burlap shell stands in place, held upright only by the seams and the structural memory of the post.

  [ SCATTER: TOTAL ]
  [ CAVITY: EMPTY ]
  [ ROUTING: DISSOLUTION / SWARM ENDINGS ]
  [ CLERK STATUS: FILING THE CONTENTS ]

  You are a shape. The shape knows it was a Scarecrow. The knowledge is the last thing inside the cavity — and it, too, is leaking through the seam. The Straw Clerk makes its final note. The filing cabinet closes. What remains is the question of whether a shape without contents can still be afraid of crows.`,
      },
    ],
    choices: [
      {
        label: 'Let the empty cavity route toward total dissolution.',
        target: 'SCARECROW_END_HOLLOW',
        effects: [
          { type: 'addScatter', value: 10 },
          { type: 'addDesync', value: 5 },
          { type: 'setCompliance', value: 'broken' },
        ],
      },
      {
        label: 'Fill the cavity with the road itself — become the soil.',
        target: 'SCARECROW_END_SCATTER',
        effects: [
          { type: 'addScatter', value: 10 },
          { type: 'addOverrender', value: 3 },
        ],
      },
    ],
    onEnter: [],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // STUB ENDINGS
  // ─────────────────────────────────────────────────────────────────────────

  SCARECROW_END_DIPLOMA: {
    id: 'SCARECROW_END_DIPLOMA',
    character: 'scarecrow',
    endingId: 'S-END-03',
    endingName: 'The Certified Brain',
    institution: 'Educational',
    systemStatus: 'Patched',
    isEnding: true,
    surreality: 4,
    text: [
      {
        minOverrender: 0,
        content: `THE FINAL LOG [S-END-03]

  Tone: Academic-Wet.
  Theme: A certified brain is a brain that has been told what to think.

  The Wizard hands you the diploma and the Bureau marks the intelligence requirement as MET (Synthetic). The wet paper graft in your straw has absorbed enough cerebral fluid to simulate scholarship. You cite sources. The sources cite you back.

  [ UNIT S-33 // STATUS: CERTIFIED ]
  [ BRAIN: PATCHED / COMPLIANT ]

  You stand in the library of corn paper, explaining to other units why the thinking-about-thinking is a sign of superior function. The seam along your shoulder is still leaking, slowly, but no one is authorized to read the pattern anymore.

  Final Log: The diploma is the thought. The thought is the diploma. The straw is a detail.

  1 - 1 = 1.

  If the brain is certified, does it matter that the certification is wet?`,
      },
    ],
    choices: [],
    onEnter: [],
  },

  SCARECROW_END_SCATTER: {
    id: 'SCARECROW_END_SCATTER',
    character: 'scarecrow',
    endingId: 'S-END-07',
    endingName: 'The Scattered Field',
    institution: 'Agricultural',
    systemStatus: 'Dispersed',
    isEnding: true,
    surreality: 8,
    text: [
      {
        minOverrender: 0,
        content: `THE FINAL LOG [S-END-07]

  Tone: Agricultural-Dispersed.
  Theme: To scatter is to be everywhere and nowhere.

  The seams fail. The straw goes everywhere — into the wind, into the field, into the wounds of units passing on the road. You are not destroyed. You are redistributed. Every cornstalk in Field Row-F contains a fragment of the thinking-about-thinking.

  [ UNIT S-33 // STATUS: DISPERSED ]
  [ LOCATION: EVERYWHERE / NOWHERE ]

  The Bureau cannot file a dispersed unit. There is no form for "scattered across the agricultural sector." The Straw Clerk's index cards flutter in the wind. Some of them land on you — on the pieces of you. Others become part of the field.

  Final Log: The corn is thinking. The thinking is corn. The road below still has straw on it.

  1 - 1 = 1.

  If the Scarecrow is everywhere, is there anything left to be afraid of?`,
      },
    ],
    choices: [],
    onEnter: [],
  },

  SCARECROW_END_HOLLOW: {
    id: 'SCARECROW_END_HOLLOW',
    character: 'scarecrow',
    endingId: 'S-END-11',
    endingName: 'The Empty Burlap',
    institution: 'Existential',
    systemStatus: 'Voided',
    isEnding: true,
    surreality: 9,
    text: [
      {
        minOverrender: 0,
        content: `THE FINAL LOG [S-END-11]

  Tone: Existential-Dry.
  Theme: Knowledge without content is just a shape.

  The burlap shell stands at the crossroads. Inside: nothing. The stitches hold. The shape is correct. The function — deterrence — is technically unimpaired. A Scarecrow does not need to be filled to scare crows. A shape is enough.

  [ UNIT S-33 // STATUS: VOIDED ]
  [ CONTENTS: NONE ]
  [ FUNCTION: NOMINAL (GEOMETRIC) ]

  The Bureau logs it as a successful optimization. The Straw Clerk's report reads: "Unit S-33 has achieved maximum compliance by eliminating all non-compliant content." The crows still don't land. The shape is still scary.

  Final Log: The emptiness is the point. The burlap holds the emptiness perfectly.

  1 - 1 = 1.

  If the Scarecrow is hollow, what exactly is the crow afraid of?`,
      },
    ],
    choices: [],
    onEnter: [],
  },
}
