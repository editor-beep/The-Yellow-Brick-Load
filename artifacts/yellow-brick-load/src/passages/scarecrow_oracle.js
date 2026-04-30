/**
 * YELLOW BRICK LOAD — Scarecrow (Unit S-33) Oracle Passages
 * Character: Scarecrow (Unit S-33)
 *
 * Oracle ritual passages (ENTRY, DRAW, 1-8).
 * Extracted from scarecrow.js.
 */

export const scarecrowOraclePassages = {
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
  },,

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
  },,

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
  },,

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
  },,

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
  },,

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
  },,

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
  },,

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
  },,

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
  },,

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
  },,
}
