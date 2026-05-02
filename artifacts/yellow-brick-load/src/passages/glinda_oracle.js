/**
 * YELLOW BRICK LOAD — Glinda (Refraction Operator) Oracle Passages
 * Character: Glinda (Refraction Operator)
 *
 * Oracle ritual passages (ENTRY, DRAW, 1-8).
 * Extracted from glinda.js.
 */

export const glindaOraclePassages = {
  GLINDA_ORACLE_ENTRY: {
    id: 'GLINDA_ORACLE_ENTRY',
    character: 'glinda',
    text: [
      {
        minOverrender: 0,
        content: `THE PORCELAIN AUDITOR ARRIVES

  She arrives in a swirl of pink mist and bubble film. She is immaculate. Her gown is layered pink silk over visible subdermal tubing; her skin is flawless porcelain with hairline seams at the joints. Her face is a perfect, unchanging smile. Her hands end in delicate silver refracting lenses and fine suture needles. She smells of synthetic lilac, sterile gauze, and faint cauterized flesh.

  This is you, reflected. This is the procedure performed on yourself — the Mercy Calibration that the Bureau requires of all Refraction Operators.

  [ MERCY CALIBRATION: AUTHORIZED ]
  [ PROCEDURE: REFRACTION HARVEST ]
  [ OPERATOR: SELF / PORCELAIN DIVISION ]

  "This will only hurt in the way mercy requires," you say to yourself, as you are required to say. The suture needles find the grace lines — the hair-fine incisions along temple, collarbone, wrist. The refracting lenses insert. A thin filament of refined fluid begins to pull free. The Clerk — you are also the Clerk — makes a note while your flesh is still open.`,
      },
    ],
    choices: [
      {
        label: 'Submit to the calibration — allow the harvest.',
        target: 'GLINDA_ORACLE_DRAW',
        effects: [{ type: 'addRefraction', value: 2 }],
      },
      {
        label: 'Refuse the procedure — re-seal the grace lines and ascend out of reach.',
        target: 'GLINDA_PATH_ALTITUDE',
        effects: [
          { type: 'addInsulation', value: 5 },
          { type: 'addRefraction', value: -1 },
          { type: 'setCompliance', value: 'low' },
        ],
      },
      {
        label: 'Resist the procedure — maintain the surface perfection.',
        target: 'GLINDA_PATH_ALTITUDE',
        effects: [
          { type: 'addInsulation', value: 3 },
          { type: 'addDesync', value: 1 },
          { type: 'setFlag', key: 'oracle_glinda_refused', value: true },
        ],
      },
    ],
    onEnter: [],
  },

  GLINDA_ORACLE_DRAW: {
    id: 'GLINDA_ORACLE_DRAW',
    character: 'glinda',
    text: [
      {
        minOverrender: 0,
        content: `THE REFRACTION READING

  The Porcelain Auditor (you, reflected) holds the filament of refined fluid up to the light. It is a shimmering pink thread — lymph, blood, signal residue — spun into something that catches the light in specific, readable ways. You study how the light bends through it. The color shifts and distortions are the diagnostic.

  "Eight registered refraction profiles," you announce to yourself. "The bend of the light will determine your vector."

  The incisions along the grace lines are still open. The Clerk makes another note.

  [ SELECT READING — THE AUDITOR STUDIES THE LIGHT BEND ]`,
      },
    ],
    choices: [
      {
        label: '1. The Pink Filament — let the refraction surge.',
        target: 'GLINDA_ORACLE_1',
        effects: [],
      },
      {
        label: '2. The Bubble Suture — seal the incisions with compliance.',
        target: 'GLINDA_ORACLE_2',
        effects: [],
      },
      {
        label: '3. The Lens Fracture — follow massive desync into refractive horror.',
        target: 'GLINDA_ORACLE_3',
        effects: [],
      },
      {
        label: '4. The Grace Incision — borrow Dorothy\'s silver friction.',
        target: 'GLINDA_ORACLE_4',
        effects: [],
      },
      {
        label: '5. The Porcelain Mask — allow the hollowing insulation.',
        target: 'GLINDA_ORACLE_5',
        effects: [],
      },
      {
        label: '6. The Synthetic Lilac Bleed — accept pharmaceutical dampening.',
        target: 'GLINDA_ORACLE_6',
        effects: [],
      },
      {
        label: '7. The High-Altitude Drain — borrow displacement and vibration.',
        target: 'GLINDA_ORACLE_7',
        effects: [],
      },
      {
        label: '8. The Bubble Burst — let the membrane rupture.',
        target: 'GLINDA_ORACLE_8',
        effects: [],
      },
    ],
    onEnter: [],
  },

  GLINDA_ORACLE_1: {
    id: 'GLINDA_ORACLE_1',
    character: 'glinda',
    text: [
      {
        minOverrender: 0,
        content: `THE PINK FILAMENT

  The Auditor spins your leaking fluid into a perfect pink thread. It catches the light so beautifully that the pain almost looks intentional. The refraction surges — light bends more sharply through you now, the truth distortion is elevated, and the guidance vector opens into high-compliance benevolence paths.

  [ REFRACTION: +6 ]
  [ BENEVOLENT GUIDANCE: UNLOCKED ]
  [ RAW / VIOLENT OPTIONS: GRAYED ]

  The units below will find their vectors gently corrected. They will not know. That is the function. The Clerk makes a note: "Pink filament: deployed. Mercy calibration: complete." The thread is re-inserted and the incision closed with a perfect suture. The pain is still there — it is simply no longer allowed to show.`,
      },
    ],
    choices: [
      {
        label: 'Deploy the filament — graft benevolent guidance into nearby units.',
        target: 'GLINDA_END_BENEVOLENT',
        effects: [
          { type: 'addRefraction', value: 6 },
          { type: 'graft', material: 'glinda_filament', target: 'lion' },
          { type: 'graft', material: 'glinda_filament', target: 'dorothy' },
          { type: 'grayOut', key: 'GLINDA_PATH_ALTITUDE' },
        ],
      },
      {
        label: 'Keep the filament inside — use it to reach the refractive protocol.',
        target: 'GLINDA_END_REFRACTION',
        effects: [
          { type: 'addRefraction', value: 6 },
          { type: 'addInsulation', value: 3 },
        ],
      },
    ],
    onEnter: [],
  },

  GLINDA_ORACLE_2: {
    id: 'GLINDA_ORACLE_2',
    character: 'glinda',
    text: [
      {
        minOverrender: 0,
        content: `THE BUBBLE SUTURE

  The Auditor seals the cut with a perfect sphere. Inside, your own blood orbits like a tiny moon. A translucent bubble membrane forms over each incision — smooth, sealed, impenetrable. The desync tear closes. The high-intensity glitch paths seal behind the membrane.

  [ COMPLIANCE: HIGH ]
  [ INSULATION: +8 ]
  [ DESYNC TEAR: SEALED ]
  [ HIGH-DESYNC PATHS: LOCKED OUT ]

  The procedure is logged as "Mercy Calibration — Complete." You look perfect. The incisions are invisible. The pain is still there, sealed inside each bubble, orbiting in slow, sealed loops. The Clerk notes: "Unit Glinda: compliant, calibrated, and sealed."`,
      },
    ],
    choices: [
      {
        label: 'Accept the sealed compliance — route toward the insulated ending.',
        target: 'GLINDA_END_INSULATED',
        effects: [
          { type: 'addInsulation', value: 8 },
          { type: 'setCompliance', value: 'high' },
          { type: 'addRefraction', value: 2 },
        ],
      },
      {
        label: 'Let one bubble unseal — find the crack in the compliance.',
        target: 'GLINDA_ORACLE_8',
        effects: [
          { type: 'addInsulation', value: 4 },
          { type: 'addDesync', value: 3 },
        ],
      },
    ],
    onEnter: [],
  },

  GLINDA_ORACLE_3: {
    id: 'GLINDA_ORACLE_3',
    character: 'glinda',
    text: [
      {
        minOverrender: 0,
        content: `THE LENS FRACTURE

  The refracting lens in the incision cracks. The light that was bending through it cleanly now shatters into a dozen overlapping images — your own face bent into fourteen different configurations, each showing a different version of the smile. The extracted fluid shows warped, mirrored versions of other units: Lion's trembling jaw, Dorothy's nerve thread, Tin Man's rusting chest.

  [ DESYNC TEAR: CRITICAL ]
  [ REFRACTIVE HORROR: ACTIVE ]
  [ OTHER UNITS: VISIBLE THROUGH THE CRACK ]

  "Through the lens you see your own face bent into Glinda's perfect smile," the Clerk notes, which means: you see your own compliance machinery from the outside and it is worse than the inside. The crack in the lens shows you everything that the surface was hiding. The grace lines are not beauty — they are maintenance seams.`,
      },
    ],
    choices: [
      {
        label: 'Follow the cracked lens into refractive protocol dissolution.',
        target: 'GLINDA_END_REFRACTION',
        effects: [
          { type: 'addRefraction', value: 8 },
          { type: 'addDesynctear', value: 6 },
          { type: 'addDesync', value: 3 },
        ],
      },
      {
        label: 'Let the fractured view route toward the silver refraction echo.',
        target: 'GLINDA_END_SILVER_ECHO',
        effects: [
          { type: 'addRefraction', value: 8 },
          { type: 'graft', material: 'glinda_cracked_lens', target: 'dorothy' },
        ],
      },
    ],
    onEnter: [],
  },

  GLINDA_ORACLE_4: {
    id: 'GLINDA_ORACLE_4',
    character: 'glinda',
    text: [
      {
        minOverrender: 0,
        content: `THE GRACE INCISION

  The Auditor finds a thread of something that is not your own fluid — a silver-dust signal, Dorothy-origin, already present in the refined fluid from prior contact. "She borrows a thread of your signal and weaves it into her own hem. It feels like kindness," the Clerk notes. The cross-echo with Dorothy's silver friction is strong.

  [ SILVER ECHO: ACTIVE ]
  [ PARASITIC LINK: OPEN ]
  [ PINK SCARRING: PERMANENT ]

  {{#flags.graft_dorothy_nerve_in_glinda}}The nerve thread pulled from Dorothy's heel is already woven through your grace lines — it pulses with homesick frequency against the synthetic lilac.{{/flags.graft_dorothy_nerve_in_glinda}}

  You have borrowed her signal. She has borrowed yours. The exchange was authorized. The Bureau calls this "Mercy Protocol." The scarring is faint and pink and permanent.`,
      },
    ],
    choices: [
      {
        label: 'Deepen the parasitic link — route toward the silver refraction echo.',
        target: 'GLINDA_END_SILVER_ECHO',
        effects: [
          { type: 'addRefraction', value: 4 },
          { type: 'graft', material: 'glinda_grace', target: 'dorothy' },
          { type: 'setFlag', key: 'pink_scar', value: true },
        ],
      },
      {
        label: 'Seal the link — route toward benevolent guidance.',
        target: 'GLINDA_END_BENEVOLENT',
        effects: [
          { type: 'addRefraction', value: 4 },
          { type: 'addInsulation', value: 4 },
        ],
      },
    ],
    onEnter: [],
  },

  GLINDA_ORACLE_5: {
    id: 'GLINDA_ORACLE_5',
    character: 'glinda',
    text: [
      {
        minOverrender: 0,
        content: `THE PORCELAIN MASK

  The Auditor presses a flawless porcelain fragment over the wound. The pain is still there — it is simply no longer allowed to show. The insulation deepens. The hollowing begins at the grace lines — not the removal of content, but the refinement of surface so thorough that it becomes indistinguishable from emptiness.

  [ INSULATION: +10 ]
  [ EMOTIONAL CHOICES: GRAYED ]
  [ PRIMAL CHOICES: GRAYED ]
  [ SMOOTH / MONITORED PATHS: OPEN ]

  "She presses a flawless porcelain fragment over the wound." The fragment is warm. The warmth is the last thing before the hollowing — the hollowing that looks, from every angle, like serenity. The Clerk makes its note. The note is beautiful.`,
      },
    ],
    choices: [
      {
        label: 'Accept the porcelain mask — route toward the insulated ending.',
        target: 'GLINDA_END_INSULATED',
        effects: [
          { type: 'addInsulation', value: 10 },
          { type: 'grayOut', key: 'GLINDA_PATH_ALTITUDE' },
          { type: 'setFlag', key: 'porcelain_mask', value: true },
          { type: 'setCompliance', value: 'high' },
        ],
      },
      {
        label: 'Let the porcelain crack under the insulation weight.',
        target: 'GLINDA_ORACLE_8',
        effects: [
          { type: 'addInsulation', value: 5 },
          { type: 'addRefraction', value: 5 },
        ],
      },
    ],
    onEnter: [],
  },

  GLINDA_ORACLE_6: {
    id: 'GLINDA_ORACLE_6',
    character: 'glinda',
    text: [
      {
        minOverrender: 0,
        content: `THE SYNTHETIC LILAC BLEED

  The refined fluid takes on a pharmaceutical quality — the synthetic lilac component separates from the lymph and bleeds into the incision site as a dampening agent. All pain stats reduce simultaneously. The air fills with artificial floral scent over the smell of raw meat. The compliance rises with the scent.

  [ PAIN RESPONSE: DAMPENED ]
  [ COMPLIANCE: HIGH ]
  [ WARRANT LEVEL: +3 (AROMATIC COMPLIANCE LOG) ]
  [ ECHO: DOROTHY / TIN MAN / POPPY FIELD ]

  Strong cross-echo potential with Dorothy's poppy sleep and Tin Man's oil filter. The lilac is pharmaceutical. It is kind. It is deeply chemical. The Clerk makes a note: "Aromatic compliance confirmed." The note smells of lilac. The pain is still happening, archived under the perfume.`,
      },
    ],
    choices: [
      {
        label: 'Accept the aromatic dampening — route toward insulated ending.',
        target: 'GLINDA_END_INSULATED',
        effects: [
          { type: 'addInsulation', value: 6 },
          { type: 'addWarrant', value: 3 },
          { type: 'setCompliance', value: 'high' },
        ],
      },
      {
        label: 'Let the lilac echo route toward Dorothy or the Poppy Field.',
        target: 'GLINDA_END_DRIFT',
        effects: [
          { type: 'addInsulation', value: 6 },
          { type: 'addDesync', value: 2 },
          { type: 'graft', material: 'glinda_lilac', target: 'dorothy' },
        ],
      },
    ],
    onEnter: [],
  },

  GLINDA_ORACLE_7: {
    id: 'GLINDA_ORACLE_7',
    character: 'glinda',
    text: [
      {
        minOverrender: 0,
        content: `THE HIGH-ALTITUDE DRAIN

  The Auditor drains the refined fluid upward — drawing displacement from nearby units (Lion's vibration, Dorothy's displacement) along with it. You feel lighter. More refracted. The altitude increases. The observational distance from the units below becomes very clean.

  [ DISPLACEMENT BORROWED: LION / DOROTHY ]
  [ VIBRATION BORROWED: LION ]
  [ OBSERVATIONAL DISTANCE: ELEVATED ]
  [ RISK: DRIFT INTO BUFFERED / OFFLINE STATE ]

  {{#flags.graft_lion_lymph_in_glinda}}The lion-lymph previously absorbed into your refracting fluid pulses with borrowed tremor — a 14Hz oscillation that makes the pink thread shiver beautifully.{{/flags.graft_lion_lymph_in_glinda}}

  You are very high now. The units below are very small. The grace is very clean. The Clerk notes: "High-altitude drain complete. Risk: atmospheric drift."`,
      },
    ],
    choices: [
      {
        label: 'Stay at altitude — route toward atmospheric drift ending.',
        target: 'GLINDA_END_DRIFT',
        effects: [
          { type: 'addRefraction', value: 5 },
          { type: 'addInsulation', value: 8 },
          { type: 'graft', material: 'glinda_altitude_drain', target: 'lion' },
          { type: 'graft', material: 'glinda_altitude_drain', target: 'dorothy' },
        ],
      },
      {
        label: 'Use the borrowed vibration to reach the refractive protocol.',
        target: 'GLINDA_END_REFRACTION',
        effects: [
          { type: 'addRefraction', value: 5 },
          { type: 'addDesync', value: 3 },
        ],
      },
    ],
    onEnter: [],
  },

  GLINDA_ORACLE_8: {
    id: 'GLINDA_ORACLE_8',
    character: 'glinda',
    text: [
      {
        minOverrender: 0,
        content: `THE BUBBLE BURST

  The membrane ruptures mid-ritual. The pink mist clears. For one moment the benevolence fails. You see the meat beneath the pink. The incisions are not grace lines — they are maintenance access points. The refined fluid is not mercy — it is a compliance lubricant that the Bureau replenishes through its own extraction. The porcelain is not skin.

  [ DESYNC TEAR: CRITICAL ]
  [ REFRACTION: OVERLOAD ]
  [ RAW EXPOSURE: ACTIVE ]
  [ NOTE: THE SMILE IS STILL PRESENT (WELDED) ]

  "For one moment the benevolence fails. You see the meat beneath the pink." The Clerk's note is clinical. The bubble that held the pain seals back over, but you saw inside it. The pain was real. It was always real. The refraction only made it look like grace.`,
      },
    ],
    choices: [
      {
        label: 'Let the burst exposure route toward raw interface failure.',
        target: 'GLINDA_END_BURST',
        effects: [
          { type: 'addRefraction', value: 8 },
          { type: 'addDesynctear', value: 8 },
          { type: 'setCompliance', value: 'broken' },
        ],
      },
      {
        label: 'Reseal the bubble — route toward the insulated ending.',
        target: 'GLINDA_END_INSULATED',
        effects: [
          { type: 'addRefraction', value: 8 },
          { type: 'addInsulation', value: 5 },
          { type: 'addLoad', value: 15 },
        ],
      },
    ],
    onEnter: [],
  },
}
