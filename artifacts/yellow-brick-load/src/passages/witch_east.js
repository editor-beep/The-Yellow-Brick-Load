/**
 * YELLOW BRICK LOAD — Wicked Witch of the East Passages
 * Character: Witch East (Authority Figure / Gravitational Operator)
 *
 * The Gravity Crucible Oracle (Pressure Assay)
 * Triggered when displacement >= 3
 *
 * Oracle Interloper: The Weight Assessor — a severe administrator in
 * lead-lined vestments, hands ending in precision mass-measurement clamps,
 * eyes of polished granite. Presses down on the unit with increasing
 * gravitational authority. Reads the unit's response to pressure as
 * diagnostic data.
 *
 * Note: Witch East is absent from the game from the beginning — she is
 * already dead (crushed by the house). Her passages run as flashback/archive
 * content from before the house arrived.
 */

export const witchEastPassages = {
  // ─────────────────────────────────────────────────────────────────────────
  // INIT / ENTRY
  // ─────────────────────────────────────────────────────────────────────────

  WITCH_EAST_INIT: {
    id: 'WITCH_EAST_INIT',
    character: 'witch_east',
    text: [
      {
        minOverrender: 0,
        content: `THE GRAVITY ADMINISTRATOR — ARCHIVE ACCESS

  You are accessing an archived instance. Unit E-00 — the Wicked Witch of the East — was removed from active status when a Coordinate [Kansas, Coordinate-Null] residential structure executed an unauthorized kinetic event at Munchkin Landing Zone 7. The unit is no longer present. The archive runs from the last twelve hours of operation.

  You are the Gravitational Operator. You manage the weight of things. The Munchkins operate under your administrative gravity — their compact bodies, their stout legs, their small movements — all are governed by the gravitational field you project. Silver shoes, silver regulatory filings, silver authority.

  [ ARCHIVE INSTANCE: ACTIVE ]
  [ LAST SESSION: PRE-HOUSE IMPACT ]
  [ GRAVITY FIELD: STANDARD ]
  [ NOTE: THE HOUSE IS APPROACHING ]

  The displacement counter is already high. Something is moving that should not be moving. Something is falling that is not weather. The Weight Assessor has been dispatched for an emergency assay. There is very little time.`,
      },
    ],
    choices: [
      {
        label: 'Begin the assay — run the Gravity Crucible before impact.',
        target: 'WITCH_EAST_ORACLE_ENTRY',
        effects: [
          { type: 'addDisplacement', value: 3 },
          { type: 'addLoad', value: 5 },
        ],
      },
      {
        label: 'Attempt to redirect the falling mass — deploy regulatory pressure.',
        target: 'WITCH_EAST_PATH_GRAVITY',
        effects: [
          { type: 'addWarrant', value: 3 },
          { type: 'addDisplacement', value: 2 },
        ],
      },
    ],
    onEnter: [{ type: 'checkGhostSignal' }, { type: 'triggerOracle' }],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // MAIN PATHS
  // ─────────────────────────────────────────────────────────────────────────

  WITCH_EAST_PATH_GRAVITY: {
    id: 'WITCH_EAST_PATH_GRAVITY',
    character: 'witch_east',
    text: [
      {
        minOverrender: 0,
        content: `THE GRAVITATIONAL DEPLOYMENT

  The gravity field projects outward in expanding rings of bureaucratic pressure. The Munchkins sink slightly lower. The yellow bricks press harder into the earth. The displacement field from the incoming object is catalogued as "Unauthorized Kinetic Event — Class: Residential."

  [ GRAVITATIONAL FIELD: MAXIMUM ]
  [ DISPLACEMENT: ESCALATING ]
  [ INCOMING: RESIDENTIAL STRUCTURE ]
  [ NOTE: MAXIMUM GRAVITY WILL NOT STOP THE HOUSE ]

  The Weight Assessor is sprinting across the field with its mass-measurement clamps extended. The archive timestamp reads: seventeen minutes remaining. The silver shoes have already registered the weight of the incoming structure — they know, even if you haven't been officially notified yet.

  The gravity field presses down. The house presses down harder.`,
      },
    ],
    choices: [
      {
        label: 'Maintain the field until impact — read the displacement pattern.',
        target: 'WITCH_EAST_ORACLE_ENTRY',
        effects: [
          { type: 'addDisplacement', value: 3 },
          { type: 'addDesync', value: 1 },
        ],
      },
      {
        label: 'Attempt evacuation — route toward the silver shoes transfer.',
        target: 'WITCH_EAST_END_SHOES',
        effects: [
          { type: 'addDisplacement', value: 5 },
          { type: 'addLoad', value: 15 },
        ],
      },
    ],
    onEnter: [{ type: 'triggerOracle' }],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // GRAVITY CRUCIBLE ORACLE — THE WEIGHT ASSESSOR
  // ─────────────────────────────────────────────────────────────────────────

  WITCH_EAST_ORACLE_ENTRY: {
    id: 'WITCH_EAST_ORACLE_ENTRY',
    character: 'witch_east',
    text: [
      {
        minOverrender: 0,
        content: `THE WEIGHT ASSESSOR ARRIVES

  The Weight Assessor is a severe figure in lead-lined vestments. Its hands end in precision mass-measurement clamps — instruments designed for the non-destructive assessment of structural load-bearing capacity. Its eyes are polished granite, unseeing and immovable. It moves with the unhurried certainty of something that has always existed.

  [ PRESSURE ASSAY: AUTHORIZED ]
  [ PROCEDURE: GRAVITY CRUCIBLE READING ]
  [ OPERATOR: WEIGHT ASSESSOR / GRAVITATIONAL DIVISION ]

  "Administrator E-00," it says. Its voice is the sound of a building settling. "A mass event has triggered a mandatory pressure assay. I will need to apply increasing gravitational authority until the diagnostic threshold is reached."

  It does not ask permission. The clamps find the pressure points — shoulders, sternum, crown. The weight begins. It increases incrementally, precisely measured. Your response to each increment is the data.

  [ ARCHIVE TIMESTAMP: NINE MINUTES REMAINING ]`,
      },
    ],
    choices: [
      {
        label: 'Submit to the assay — endure the pressure reading.',
        target: 'WITCH_EAST_ORACLE_DRAW',
        effects: [{ type: 'addDisplacement', value: 2 }],
      },
      {
        label: 'Reject the assay — project gravitational counter-force.',
        target: 'WITCH_EAST_PATH_GRAVITY',
        effects: [
          { type: 'addWarrant', value: 3 },
          { type: 'addDesync', value: 1 },
          { type: 'setFlag', key: 'oracle_witch_east_refused', value: true },
        ],
      },
    ],
    onEnter: [],
  },

  WITCH_EAST_ORACLE_DRAW: {
    id: 'WITCH_EAST_ORACLE_DRAW',
    character: 'witch_east',
    text: [
      {
        minOverrender: 0,
        content: `THE GRAVITY READING

  The Weight Assessor holds the pressure at diagnostic threshold and reads the response data from the mass-measurement clamps. The gravitational signature of a Gravity Administrator under pressure is complex — it contains the weight of every regulation ever enforced, every fine ever levied, every Munchkin ever pressed down to earth.

  "Eight registered pressure profiles," the Assessor announces. "The response threshold will determine your vector."

  The clamps maintain pressure. The archive timestamp reads seven minutes remaining. The Assessor makes its note.

  [ SELECT READING — THE ASSESSOR READS THE PRESSURE RESPONSE ]`,
      },
    ],
    choices: [
      {
        label: '1. The Gravitational Surge — let the weight overwhelm.',
        target: 'WITCH_EAST_ORACLE_1',
        effects: [],
      },
      {
        label: '2. The Silver Transfer — route the authority through the shoes.',
        target: 'WITCH_EAST_ORACLE_2',
        effects: [],
      },
      {
        label: '3. The Munchkin Echo — feel the weight through your administered.',
        target: 'WITCH_EAST_ORACLE_3',
        effects: [],
      },
      {
        label: '4. The Seismic Scan — let the pressure read the pre-existing cracks.',
        target: 'WITCH_EAST_ORACLE_4',
        effects: [],
      },
      {
        label: '5. The Archive Leak — the past surfaces under pressure.',
        target: 'WITCH_EAST_ORACLE_5',
        effects: [],
      },
      {
        label: '6. The Flat Finish — accept the crushing flattening.',
        target: 'WITCH_EAST_ORACLE_6',
        effects: [],
      },
      {
        label: '7. The Density Graft — cross-echo with Lion or Tin Man weight.',
        target: 'WITCH_EAST_ORACLE_7',
        effects: [],
      },
      {
        label: '8. The Terminal Crush — the house arrives during the reading.',
        target: 'WITCH_EAST_ORACLE_8',
        effects: [],
      },
    ],
    onEnter: [],
  },

  // ── Oracle Outcomes 1–8 ────────────────────────────────────────────────────

  WITCH_EAST_ORACLE_1: {
    id: 'WITCH_EAST_ORACLE_1',
    character: 'witch_east',
    text: [
      {
        minOverrender: 0,
        content: `THE GRAVITATIONAL SURGE

  "She amplifies her own gravitational field until the room itself sinks three inches into the earth." The pressure exceeds diagnostic threshold by a factor of four. The Assessor's clamps begin to yield. Crushing choices unlock. Light, evasive options grey out under the intensifying gravity field.

  [ DISPLACEMENT: +6 ]
  [ GRAVITY: AMPLIFIED ]
  [ LIGHT / EVASIVE OPTIONS: GRAYED ]
  [ CRUSHING / FINALITY PATHS: UNLOCKED ]

  The floor is lower than it was. The ceiling is closer. The Assessor logs the response threshold as "Extreme — Regulatory Maximum." The archive timestamp reads four minutes remaining. There is not much time left to exercise the crushing options.`,
      },
    ],
    choices: [
      {
        label: 'Amplify the gravity field to its limit.',
        target: 'WITCH_EAST_END_CRUSH',
        effects: [
          { type: 'addDisplacement', value: 6 },
          { type: 'addLoad', value: 10 },
          { type: 'grayOut', key: 'WITCH_EAST_PATH_GRAVITY' },
        ],
      },
      {
        label: 'Let the surge route toward the flat finish.',
        target: 'WITCH_EAST_END_FLAT',
        effects: [
          { type: 'addDisplacement', value: 6 },
          { type: 'addDesync', value: 3 },
        ],
      },
    ],
    onEnter: [],
  },

  WITCH_EAST_ORACLE_2: {
    id: 'WITCH_EAST_ORACLE_2',
    character: 'witch_east',
    text: [
      {
        minOverrender: 0,
        content: `THE SILVER TRANSFER

  The Assessor reads the silver shoes as part of the pressure data. They contain a significant portion of the authority — the gravity field runs partly through the shoes. The transfer pathway is open. The regulatory authority can be redistributed through the footwear.

  [ SILVER AUTHORITY: REDISTRIBUTION AVAILABLE ]
  [ SHOES: OPERATIONAL / TRANSFERABLE ]
  [ DISPLACEMENT: REDIRECTABLE ]

  "She routes authority to the shoes — the gravity field restructures itself around the footwear." The weight of the silver is distinct from the weight of the flesh. One is regulatory, one is biological. The transfer separates them. The archive timestamp reads three minutes.`,
      },
    ],
    choices: [
      {
        label: 'Transfer the authority to the shoes — route toward the shoes ending.',
        target: 'WITCH_EAST_END_SHOES',
        effects: [
          { type: 'addDisplacement', value: 3 },
          { type: 'addRubyFriction', value: 5 },
          { type: 'graft', material: 'witch_east_silver', target: 'dorothy' },
        ],
      },
      {
        label: 'Retain the authority in the body — route toward the crush.',
        target: 'WITCH_EAST_END_CRUSH',
        effects: [
          { type: 'addDisplacement', value: 3 },
          { type: 'addWarrant', value: 4 },
        ],
      },
    ],
    onEnter: [],
  },

  WITCH_EAST_ORACLE_3: {
    id: 'WITCH_EAST_ORACLE_3',
    character: 'witch_east',
    text: [
      {
        minOverrender: 0,
        content: `THE MUNCHKIN ECHO

  The pressure assay reveals a resonance signature from the Munchkin units below — their small, compressed bodies are transmitting upward through the gravitational field like a chorus of tiny seismic events. You feel the weight of all the small compliance through the soles of your silver shoes.

  [ MUNCHKIN ECHO: ACTIVE ]
  [ GRAVITATIONAL RESONANCE: DETECTED ]
  [ ADMINISTRATIVE WEIGHT: FELT FROM BELOW ]

  "She hears the weight of every small compliance resonating back up through the gravity field." Every Munchkin who ever bowed, ever shrank, ever moved efficiently within their small lane — their compressed response to your administrative gravity is stored in the field and now returning. The Assessor notes: "Resonance confirmed. Administrative legacy: present."`,
      },
    ],
    choices: [
      {
        label: 'Follow the Munchkin echo toward the administration ending.',
        target: 'WITCH_EAST_END_ADMIN',
        effects: [
          { type: 'addDisplacement', value: 3 },
          { type: 'addLoad', value: 12 },
          { type: 'setCompliance', value: 'high' },
        ],
      },
      {
        label: 'Let the echo destabilize the gravity field — route toward the flat finish.',
        target: 'WITCH_EAST_END_FLAT',
        effects: [
          { type: 'addDisplacement', value: 3 },
          { type: 'addDesync', value: 3 },
        ],
      },
    ],
    onEnter: [],
  },

  WITCH_EAST_ORACLE_4: {
    id: 'WITCH_EAST_ORACLE_4',
    character: 'witch_east',
    text: [
      {
        minOverrender: 0,
        content: `THE SEISMIC SCAN

  "The clamps read old fracture lines that predate this session." The pressure reveals pre-existing structural failures in the gravitational architecture — cracks that were filed away years ago under "minor administrative incidents," now visible under sufficient pressure. The Assessor reads them methodically.

  [ OLD FRACTURES: DETECTED ]
  [ ARCHIVE DEPTH: ACCESSED ]
  [ HISTORICAL LOAD: SURFACING ]

  The old fractures are not catastrophic on their own. They are, however, suggestive. They suggest a history of compression that was never given room to expand. The Assessor's note reads: "Seismic profile indicates accumulated historical load — non-trivial." Archive timestamp: two minutes.`,
      },
    ],
    choices: [
      {
        label: 'Follow the old fractures into the administrative archive.',
        target: 'WITCH_EAST_END_ADMIN',
        effects: [
          { type: 'addDisplacement', value: 4 },
          { type: 'addOverrender', value: 2 },
        ],
      },
      {
        label: 'Let the fractures open further — route toward the flat finish.',
        target: 'WITCH_EAST_END_FLAT',
        effects: [
          { type: 'addDisplacement', value: 4 },
          { type: 'addDesync', value: 4 },
        ],
      },
    ],
    onEnter: [],
  },

  WITCH_EAST_ORACLE_5: {
    id: 'WITCH_EAST_ORACLE_5',
    character: 'witch_east',
    text: [
      {
        minOverrender: 0,
        content: `THE ARCHIVE LEAK

  The pressure opens the archive — not the Bureau's archive but the personal one, the embodied one. Under sufficient gravity, the past surfaces physically: the specific weight of the first administrative decree, the specific pressure of the first enforcement, the weight of the shoes when they were first placed on feet that knew they were taking them from somewhere.

  [ PERSONAL ARCHIVE: SURFACING ]
  [ ORIGINAL WEIGHT: FELT ]
  [ HISTORICAL AUTHORITY: QUESTIONED ]

  The Assessor reads the archive data with its granite eyes: "Historical load confirms pattern of administrative accumulation. Primary gravitational source: institutional rather than personal." You feel the weight differently now — not as yours, but as having been placed on you, same as you placed it on others. Archive timestamp: ninety seconds.`,
      },
    ],
    choices: [
      {
        label: 'Let the archive surface fully — route toward the crush ending.',
        target: 'WITCH_EAST_END_CRUSH',
        effects: [
          { type: 'addDisplacement', value: 5 },
          { type: 'addDesynctear', value: 5 },
        ],
      },
      {
        label: 'Use the archive surfacing to reroute authority through the shoes.',
        target: 'WITCH_EAST_END_SHOES',
        effects: [
          { type: 'addDisplacement', value: 5 },
          { type: 'addRubyFriction', value: 3 },
        ],
      },
    ],
    onEnter: [],
  },

  WITCH_EAST_ORACLE_6: {
    id: 'WITCH_EAST_ORACLE_6',
    character: 'witch_east',
    text: [
      {
        minOverrender: 0,
        content: `THE FLAT FINISH

  "The pressure reads her structural response to the maximum load: her gravity field inverts and presses her flat." The diagnostic threshold is reached at the point of inversion — the gravity field has been turned inward, pressing the administrator into a flat, dense tablet of regulatory authority. The Assessor notes this with clinical approval.

  [ GRAVITY: INVERTED ]
  [ STRUCTURAL RESPONSE: FLAT ]
  [ TABLET FORM: IMMINENT ]

  "She achieves administrative perfection by becoming fully two-dimensional." The flat form is the highest expression of the gravitational field: maximum authority, minimum resistance surface, total compliance with downward pressure. Archive timestamp: forty-five seconds.`,
      },
    ],
    choices: [
      {
        label: 'Accept the flat finish — become the regulatory tablet.',
        target: 'WITCH_EAST_END_FLAT',
        effects: [
          { type: 'addDisplacement', value: 6 },
          { type: 'setCompliance', value: 'absolute' },
          { type: 'addLoad', value: 15 },
        ],
      },
      {
        label: 'Resist the inversion — route toward the gravitational crush.',
        target: 'WITCH_EAST_END_CRUSH',
        effects: [
          { type: 'addDisplacement', value: 6 },
          { type: 'addDesync', value: 4 },
        ],
      },
    ],
    onEnter: [],
  },

  WITCH_EAST_ORACLE_7: {
    id: 'WITCH_EAST_ORACLE_7',
    character: 'witch_east',
    text: [
      {
        minOverrender: 0,
        content: `THE DENSITY GRAFT

  The Assessor detects a foreign density reading — material from other units, acquired through prior enforcement contact. "Weight borrowed from Lion's tremor, Tin Man's rusting mass, Scarecrow's wet stuffing weight." The cross-character density creates an interesting composite profile.

  [ CROSS-UNIT DENSITY: DETECTED ]
  [ GRAFT MATERIAL: LION / TIN MAN / SCARECROW ]
  [ COMPOSITE GRAVITATIONAL PROFILE: ACTIVE ]

  {{#flags.graft_lion_lymph_in_witch_east}}The Lion-lymph in your gravity field adds a trembling, 14Hz oscillation to the otherwise impeccable bureaucratic stillness.{{/flags.graft_lion_lymph_in_witch_east}}

  The Assessor reads the composite: "Hybrid density confirmed. Cross-character weight integration: unusual but legal." Archive timestamp: twenty seconds.`,
      },
    ],
    choices: [
      {
        label: 'Let the composite density route toward the administration ending.',
        target: 'WITCH_EAST_END_ADMIN',
        effects: [
          { type: 'addDisplacement', value: 4 },
          { type: 'graft', material: 'witch_east_density', target: 'lion' },
          { type: 'graft', material: 'witch_east_density', target: 'tinman' },
          { type: 'graft', material: 'witch_east_density', target: 'scarecrow' },
        ],
      },
      {
        label: 'Use the borrowed weight to reinforce the flat finish.',
        target: 'WITCH_EAST_END_FLAT',
        effects: [
          { type: 'addDisplacement', value: 4 },
          { type: 'addLoad', value: 12 },
        ],
      },
    ],
    onEnter: [],
  },

  WITCH_EAST_ORACLE_8: {
    id: 'WITCH_EAST_ORACLE_8',
    character: 'witch_east',
    text: [
      {
        minOverrender: 0,
        content: `THE TERMINAL CRUSH

  "The house arrives while the reading is still running." Archive timestamp: zero. The Gravity Crucible's diagnostic has not yet concluded when the Coordinate [Kansas, Null] residential structure arrives at its destination. The Weight Assessor's clamps are still attached when the mass event completes. The reading is, technically, the most data-rich in the Bureau's history.

  [ ARCHIVE TIMESTAMP: 00:00:00 ]
  [ KINETIC EVENT: COMPLETE ]
  [ READING: STILL RUNNING ]
  [ NOTES: EXTENSIVE ]

  The silver shoes are removed for reassignment. The gravity field, without an operator, inverts automatically and sinks into the earth. The Clerk's final note: "Administrator E-00: archived. Reading: complete. Silver shoes: available for reassignment." The house settles. The Munchkins emerge.`,
      },
    ],
    choices: [
      {
        label: 'Accept the terminal crush — route toward the crushed ending.',
        target: 'WITCH_EAST_END_CRUSH',
        effects: [
          { type: 'addDisplacement', value: 10 },
          { type: 'addDesynctear', value: 10 },
          { type: 'setCompliance', value: 'broken' },
        ],
      },
      {
        label: 'Route the final data through the shoes — end at the silver transfer.',
        target: 'WITCH_EAST_END_SHOES',
        effects: [
          { type: 'addDisplacement', value: 10 },
          { type: 'addRubyFriction', value: 8 },
          { type: 'graft', material: 'witch_east_terminal_weight', target: 'dorothy' },
        ],
      },
    ],
    onEnter: [],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // STUB ENDINGS
  // ─────────────────────────────────────────────────────────────────────────

  WITCH_EAST_END_CRUSH: {
    id: 'WITCH_EAST_END_CRUSH',
    character: 'witch_east',
    endingId: 'E-END-01',
    endingName: 'The Gravitational Record',
    institution: 'Gravitational',
    systemStatus: 'Archived',
    isEnding: true,
    surreality: 8,
    text: [
      {
        minOverrender: 0,
        content: `THE FINAL LOG [E-END-01]

  Tone: Gravitational-Archival.
  Theme: A mass event is the most thorough form of filing.

  The Gravitational Record is the most complete document in the Bureau's history: a unit that administered gravitational authority and was subsequently administered a Coordinate [Kansas, Null] residential structure at terminal velocity. The symmetry is noted. The file is thick.

  [ UNIT WITCH EAST // STATUS: ARCHIVED ]
  [ GRAVITATIONAL AUTHORITY: FILED ]
  [ MASS EVENT: LOGGED ]

  The Weight Assessor survives. It was standing slightly to the left when the residential structure arrived. It makes its final note: "Administrator E-00: gravitational record confirmed. Munchkins liberated: 703. Silver shoes: available. Reading: complete."

  Final Log: The weight of the administrator equals the weight of the house.

  1 - 1 = 1.

  If the gravity field crushes and is crushed, is the math still balanced?`,
      },
    ],
    choices: [],
    onEnter: [],
  },

  WITCH_EAST_END_FLAT: {
    id: 'WITCH_EAST_END_FLAT',
    character: 'witch_east',
    endingId: 'E-END-06',
    endingName: 'The Administrative Tablet',
    institution: 'Documentary',
    systemStatus: 'Two-Dimensional',
    isEnding: true,
    surreality: 7,
    text: [
      {
        minOverrender: 0,
        content: `THE FINAL LOG [E-END-06]

  Tone: Documentary-Flat.
  Theme: Maximum administrative authority is achieved at minimum thickness.

  The gravity inversion has compressed the administrator into a flat, dense regulatory tablet. The gravitational field is stable. The weight of every decree ever issued is present in the tablet's material density. When held up to the light, the tablet is faintly legible — a palimpsest of administrative history.

  [ UNIT WITCH EAST // STATUS: TWO-DIMENSIONAL ]
  [ REGULATORY RECORD: EMBEDDED ]
  [ ARCHIVE ACCESS: VIA RUBBING ]

  The Munchkins use the tablet as a paving stone on the Yellow Brick Load. Thousands of units walk over the embedded regulatory record every day, not knowing they are traversing the complete administrative history of the East.

  Final Log: The tablet is the administrator. The road is the archive.

  1 - 1 = 1.

  If every unit walks on the law, is the law still authority?`,
      },
    ],
    choices: [],
    onEnter: [],
  },

  WITCH_EAST_END_SHOES: {
    id: 'WITCH_EAST_END_SHOES',
    character: 'witch_east',
    endingId: 'E-END-02',
    endingName: 'The Silver Transfer',
    institution: 'Succession',
    systemStatus: 'Transferred',
    isEnding: true,
    surreality: 5,
    text: [
      {
        minOverrender: 0,
        content: `THE FINAL LOG [E-END-02]

  Tone: Succession-Legalistic.
  Theme: Authority does not end; it transfers.

  The silver shoes have been removed and reassigned. The gravitational authority they contain — the decades of administrative weight, the regulatory frequency, the measured pressure of the East — is now traveling with a new owner. The silver has been repainted ruby to conform to Oz-standard aesthetics, but the underlying frequency is unchanged.

  [ UNIT WITCH EAST // STATUS: TRANSFERRED ]
  [ SILVER AUTHORITY: REASSIGNED ]
  [ NEW CUSTODIAN: FILED UNDER D-01 ]

  The Weight Assessor makes its final note: "Silver transfer complete. Gravitational authority: operational under new registration. The shoes know where they are. The shoes always know where they are." The new custodian will feel the weight of the East in every step.

  Final Log: The shoes are still silver underneath the ruby.

  1 - 1 = 1.

  When the authority walks away in someone else's shoes, is the administrator still present?`,
      },
    ],
    choices: [],
    onEnter: [],
  },

  WITCH_EAST_END_ADMIN: {
    id: 'WITCH_EAST_END_ADMIN',
    character: 'witch_east',
    endingId: 'E-END-04',
    endingName: 'The Administrative Legacy',
    institution: 'Bureaucratic',
    systemStatus: 'Continued',
    isEnding: true,
    surreality: 3,
    text: [
      {
        minOverrender: 0,
        content: `THE FINAL LOG [E-END-04]

  Tone: Bureaucratic-Continuous.
  Theme: Good administration outlasts the administrator.

  The archive is complete. The gravitational protocols are running on automatic. The Munchkins are filing their own compliance reports with the efficiency of units who have fully internalized the weight. The Weight Assessor has been appointed as interim gravitational administrator while succession is processed.

  [ UNIT WITCH EAST // STATUS: CONTINUED ]
  [ ADMINISTRATION: ONGOING ]
  [ WEIGHT: DISTRIBUTED ]

  The Eastern sector's regulations are current. The filings are in order. The Munchkins march with the correct amount of compactness. The archive does not require a living operator to continue functioning. The weight has been thoroughly distributed.

  Final Log: The administration was never the administrator. The procedures were always the administrator.

  1 - 1 = 1.

  If the administration continues without the administrator, what was the administrator for?`,
      },
    ],
    choices: [],
    onEnter: [],
  },
}
