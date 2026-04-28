/**
 * YELLOW BRICK LOAD — Glinda Passages
 * Character: Glinda (Authority Figure / Refraction Operator)
 *
 * The Refraction Harvest Oracle (Porcelain Auditor Ritual)
 * Triggered when refraction >= 5
 *
 * Oracle Interloper: The Porcelain Auditor — immaculate, pink silk over
 * visible subdermal tubing, skin like flawless porcelain, hands ending in
 * silver refracting lenses and suture needles. Performs hair-fine incisions
 * along "grace lines," extracts refined fluid spun into pink thread, reads
 * how light bends through it.
 */

export const glindaPassages = {
  // ─────────────────────────────────────────────────────────────────────────
  // INIT / ENTRY
  // ─────────────────────────────────────────────────────────────────────────

  GLINDA_INIT: {
    id: 'GLINDA_INIT',
    character: 'glinda',
    text: [
      {
        minOverrender: 0,
        content: `THE GOOD WITCH PROTOCOL

  You are the Refraction Operator. You bend vectors without breaking them. You redirect through indirect lens influence, which the Bureau of Oz classifies as "Mercy" and the Oz OS Manual classifies as "Authorized Civilian Manipulation."

  Your function is grace. Grace requires visible perfection. The subdermal tubing carries a fluid that is not quite blood — a refined mixture of lymph, signal residue, and synthetic lilac — that the Bureau uses to maintain the porcelain surface. The tubing is visible if you look closely. Most do not look closely. That is part of the function.

  [ REFRACTION OPERATOR: ACTIVE ]
  [ GRACE PROTOCOL: RUNNING ]
  [ MERCY CALIBRATION: DUE ]

  The units below you are small and far away. They require guidance. Guidance requires a lens, and you are the lens. The bubble membrane around your wrists catches the green Oz light and bends it into pink.

  {{#flags.graft_glinda_filament_in_lion}}A thin pink thread pulses inside the jaw of a Lion unit somewhere on the road below — your filament, previously grafted, still transmitting grace.{{/flags.graft_glinda_filament_in_lion}}`,
      },
    ],
    choices: [
      {
        label: 'Descend to administer direct mercy calibration.',
        target: 'GLINDA_ORACLE_ENTRY',
        effects: [
          { type: 'addRefraction', value: 3 },
          { type: 'addLoad', value: 5 },
        ],
      },
      {
        label: 'Observe from altitude — maintain the insulating distance.',
        target: 'GLINDA_PATH_ALTITUDE',
        effects: [
          { type: 'addInsulation', value: 5 },
          { type: 'addRefraction', value: 1 },
        ],
      },
    ],
    onEnter: [{ type: 'checkGhostSignal' }, { type: 'triggerOracle' }],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // MAIN PATHS
  // ─────────────────────────────────────────────────────────────────────────

  GLINDA_PATH_ALTITUDE: {
    id: 'GLINDA_PATH_ALTITUDE',
    character: 'glinda',
    text: [
      {
        minOverrender: 0,
        content: `THE ALTITUDE POSITION

  You maintain the high-altitude perspective. The bubble membrane keeps you insulated from the details — the trembling Lion-units, the leaking Tin Men, the scattering Scarecrows — they are all legible from here as vectors, as tendencies, as trajectories that can be gently redirected.

  [ INSULATION: HIGH ]
  [ REFRACTION: BUILDING ]
  [ UNITS BELOW: MANAGEABLE ]

  The mercy is real from up here. The distance makes it clean. The subdermal tubing hums with the refined fluid. The lilac scent is stronger at altitude — it has nothing to compete with. You observe the Yellow Brick Load as a system of gentle corrections waiting to happen.

  {{#flags.graft_lion_compliance_stamp_in_lion}}The Bureau Crow's stamp on a Lion unit below pulses briefly — your refracted influence has already shaped that junction.{{/flags.graft_lion_compliance_stamp_in_lion}}`,
      },
    ],
    choices: [
      {
        label: 'Descend when refraction reaches critical — the oracle waits.',
        target: 'GLINDA_ORACLE_ENTRY',
        effects: [
          { type: 'addRefraction', value: 3 },
          { type: 'addInsulation', value: -2 },
        ],
      },
      {
        label: 'Remain at altitude — route toward atmospheric drift ending.',
        target: 'GLINDA_END_DRIFT',
        effects: [
          { type: 'addInsulation', value: 10 },
          { type: 'addRefraction', value: 5 },
        ],
      },
    ],
    onEnter: [{ type: 'triggerOracle' }],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // REFRACTION HARVEST ORACLE — THE PORCELAIN AUDITOR
  // ─────────────────────────────────────────────────────────────────────────

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
        label: '4. The Grace Incision — borrow Dorothy\'s ruby friction.',
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

  // ── Oracle Outcomes 1–8 ────────────────────────────────────────────────────

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
        label: 'Let the fractured view route toward the ruby refraction echo.',
        target: 'GLINDA_END_RUBY_ECHO',
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

  The Auditor finds a thread of something that is not your own fluid — a ruby-dust signal, Dorothy-origin, already present in the refined fluid from prior contact. "She borrows a thread of your signal and weaves it into her own hem. It feels like kindness," the Clerk notes. The cross-echo with Dorothy's ruby friction is strong.

  [ RUBY ECHO: ACTIVE ]
  [ PARASITIC LINK: OPEN ]
  [ PINK SCARRING: PERMANENT ]

  {{#flags.graft_dorothy_nerve_in_glinda}}The nerve thread pulled from Dorothy's heel is already woven through your grace lines — it pulses with homesick frequency against the synthetic lilac.{{/flags.graft_dorothy_nerve_in_glinda}}

  You have borrowed her signal. She has borrowed yours. The exchange was authorized. The Bureau calls this "Mercy Protocol." The scarring is faint and pink and permanent.`,
      },
    ],
    choices: [
      {
        label: 'Deepen the parasitic link — route toward the ruby refraction echo.',
        target: 'GLINDA_END_RUBY_ECHO',
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

  // ─────────────────────────────────────────────────────────────────────────
  // STUB ENDINGS
  // ─────────────────────────────────────────────────────────────────────────

  GLINDA_END_BENEVOLENT: {
    id: 'GLINDA_END_BENEVOLENT',
    character: 'glinda',
    endingId: 'G-END-01',
    endingName: 'The Benevolent Protocol',
    institution: 'Mercy',
    systemStatus: 'Guiding',
    isEnding: true,
    surreality: 3,
    text: [
      {
        minOverrender: 0,
        content: `THE FINAL LOG [G-END-01]

  Tone: Clinical-Graceful.
  Theme: Mercy is the authorized form of control.

  The pink filament has been deployed. The units below are moving in the correct direction. Their tremors are calmer. Their displacement is gently vectored. They believe the guidance came from within. That is the function of the Refraction Operator: the correction must feel like a personal decision.

  [ UNIT GLINDA // STATUS: GUIDING ]
  [ MERCY PROTOCOL: ACTIVE ]
  [ UNITS REDIRECTED: LOGGED ]

  The pink thread is inside the Lion's jaw. Inside Dorothy's heel. Inside the Scarecrow's seam. The Clerk makes a final note: "Benevolent guidance: complete. Units: compliant." The incisions have closed perfectly. No visible scarring.

  Final Log: The mercy is the product. The product is the mercy. The pain was the process.

  1 - 1 = 1.

  If the units never know they were redirected, was the mercy real?`,
      },
    ],
    choices: [],
    onEnter: [],
  },

  GLINDA_END_INSULATED: {
    id: 'GLINDA_END_INSULATED',
    character: 'glinda',
    endingId: 'G-END-11',
    endingName: 'The Porcelain Mask',
    institution: 'Aesthetic',
    systemStatus: 'Sealed',
    isEnding: true,
    surreality: 6,
    text: [
      {
        minOverrender: 0,
        content: `THE FINAL LOG [G-END-11]

  Tone: Aesthetic-Hollow.
  Theme: The surface is perfect because everything else has been removed.

  The incisions are sealed. The porcelain is flawless. The pain is inside the bubbles, orbiting in slow ellipses. The smile is permanent — the weld has fully set. The function continues. The mercy calibration reports nominal. The Bureau is satisfied.

  [ UNIT GLINDA // STATUS: SEALED ]
  [ SURFACE: PERFECT ]
  [ INTERIOR: ARCHIVED ]

  The units below see only the grace. The grace is real. The grace is also a maintenance procedure. Both things are true and neither one cancels the other.

  Final Log: The seal holds. The mask holds. The mercy continues.

  1 - 1 = 1.

  If the pain is inside the bubble and the bubble never breaks, is there anything left to feel?`,
      },
    ],
    choices: [],
    onEnter: [],
  },

  GLINDA_END_REFRACTION: {
    id: 'GLINDA_END_REFRACTION',
    character: 'glinda',
    endingId: 'G-END-02',
    endingName: 'Refractive Protocol',
    institution: 'Optical',
    systemStatus: 'Refracted',
    isEnding: true,
    surreality: 8,
    text: [
      {
        minOverrender: 0,
        content: `THE FINAL LOG [G-END-02]

  Tone: Optical-Horror.
  Theme: When everything is bent toward beauty, truth becomes unnavigable.

  The refraction has exceeded the lens capacity. Everything is pink and wrong and beautiful. The other units appear as perfect, glowing versions of themselves — their tremors look like dancing, their rust looks like jewelry, their scatter looks like art. The corrections that you deploy are perfect. The truth that they correct is invisible.

  [ UNIT GLINDA // STATUS: REFRACTED ]
  [ TRUTH: INACCESSIBLE ]
  [ BEAUTY: TOTAL ]

  You are the lens. The world looks perfect through you. You cannot see through yourself.

  Final Log: The refraction is complete. The light doesn't go anywhere it isn't told to.

  1 - 1 = 1.

  If everything bends toward grace, who is left to see the original angle?`,
      },
    ],
    choices: [],
    onEnter: [],
  },

  GLINDA_END_DRIFT: {
    id: 'GLINDA_END_DRIFT',
    character: 'glinda',
    endingId: 'G-END-10',
    endingName: 'Atmospheric Drift',
    institution: 'Meteorological',
    systemStatus: 'Drifting',
    isEnding: true,
    surreality: 7,
    text: [
      {
        minOverrender: 0,
        content: `THE FINAL LOG [G-END-10]

  Tone: Atmospheric-Pale.
  Theme: Grace at sufficient altitude becomes indistinguishable from absence.

  The altitude has exceeded the operational range. The units below are no longer legible as anything other than small, warm dots of color. The refraction has become the atmosphere — the mercy is now the air itself, dilute and ambient and not specifically aimed at anyone. The bubble membrane has expanded to include the entire sky.

  [ UNIT GLINDA // STATUS: DRIFTING ]
  [ ALTITUDE: UNMAPPED ]
  [ MERCY: DIFFUSED ]

  The Clerk below is a pink dot. The Yellow Brick Load is a line. The mercy continues, diffused and ambient, bending every vector by approximately two degrees toward grace. Insufficient for any individual correction. Sufficient, perhaps, for weather.

  Final Log: The grace is the atmosphere. The unit is the sky.

  1 - 1 = 1.

  When the mercy is everywhere, is it still mercy?`,
      },
    ],
    choices: [],
    onEnter: [],
  },

  GLINDA_END_RUBY_ECHO: {
    id: 'GLINDA_END_RUBY_ECHO',
    character: 'glinda',
    endingId: 'G-END-09',
    endingName: 'The Ruby Refraction',
    institution: 'Signal',
    systemStatus: 'Transmitting',
    isEnding: true,
    surreality: 7,
    text: [
      {
        minOverrender: 0,
        content: `THE FINAL LOG [G-END-09]

  Tone: Signal-Pink.
  Theme: To share a frequency is to become it.

  The ruby thread from Dorothy's nerve is woven through your grace lines permanently. The two signals — your refraction and her displacement — have merged into a frequency that neither frequency registry can classify. You are transmitting home and grace simultaneously, on a channel that the Bureau cannot log.

  [ UNIT GLINDA // STATUS: TRANSMITTING ]
  [ FREQUENCY: UNCLASSIFIED ]
  [ DOROTHY ECHO: PERMANENT ]

  The pink thread hums with Kansas dust. The slippers somewhere on the road hum back. It feels like the kindest thing that has ever happened in a wound.

  Final Log: The frequency is the grace. The grace is the frequency. The echo continues.

  1 - 1 = 1.

  If the signal is beautiful enough, does it matter that no one can find the source?`,
      },
    ],
    choices: [],
    onEnter: [],
  },

  GLINDA_END_BURST: {
    id: 'GLINDA_END_BURST',
    character: 'glinda',
    endingId: 'G-END-16',
    endingName: 'The Bubble Burst',
    institution: 'Raw',
    systemStatus: 'Exposed',
    isEnding: true,
    surreality: 9,
    text: [
      {
        minOverrender: 0,
        content: `THE FINAL LOG [G-END-16]

  Tone: Raw-Exposed.
  Theme: Beneath the grace there is only the wet work.

  The membrane has ruptured. The refined fluid has spilled. The pink mist has cleared. What remains is the Refraction Operator stripped of refraction: meat with maintenance access points, subdermal tubing that is just tubing, a smile that is just a weld, a mercy that is just a compliance mechanism performing its function.

  [ UNIT GLINDA // STATUS: EXPOSED ]
  [ GRACE PROTOCOL: OFFLINE ]
  [ SURFACE: BREACHED ]

  The units below can see the meat. The meat is not graceful. The Clerk makes a final note: "Interface failure confirmed. Grace membrane: non-functional." The smile is still present. It doesn't know how to stop.

  Final Log: The grace was the product of the procedure. The procedure is visible now.

  1 - 1 = 1.

  Without the refraction, what is the Witch of the North?`,
      },
    ],
    choices: [],
    onEnter: [],
  },
}
