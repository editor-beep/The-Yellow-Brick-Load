/**
 * YELLOW BRICK LOAD — Tin Man Passages
 * Character: Tin Man (Unit T-800)
 *
 * Volume 2: The Hardware/Wetware Split
 *
 * Endings from master matrix:
 *   T-END-01  The Filing Cabinet     Integration / Archived
 *   T-END-02  Oxidation Theory       Ecological / Corroded
 *   T-END-03  Hydraulic Empathy      Labor / Parasitic
 *   T-END-04  The Echo Chamber       Media / Resonant
 *   T-END-06  The Rust Archive       Educational / Stained
 *   T-END-07  Scrap Value            Economic / Liquidated
 *   T-END-09  The Oil Bath           Sub-Routine / Drowned
 *   T-END-10  Total Seizure          Ecological / Seized
 *   T-END-12  Heartbeat Logic        Medical / Synchronized
 *   T-END-13  Industrial Waste       Ecological / Scrapped
 *   T-END-14  The Mannequin          Retail / Displayed
 *   T-END-19  The Melting Point      Thermal / Liquefied
 *   T-END-21  The Logging Script     Bureaucratic / Indexed
 *
 * Ghost Signal: (off-grid — not a Tin Man ending, triggers separately)
 *
 * Passages marked TODO are stubs for future writing.
 */

export const tinManPassages = {
  // ─────────────────────────────────────────────────────────────────────────
  // INIT / ENTRY
  // ─────────────────────────────────────────────────────────────────────────

  T_INIT_01: {
    id: "T_INIT_01",
    character: "tinman",
    text: [
      {
        minOverrender: 0,
        content: `THE SEIZED STATE

You are Unit T-800. You have been standing at Coordinate [42.1, -85.5] for a duration that has outlasted the original warranty of your joints.

The rain has performed a slow audit of your exterior, replacing the silver luster with a blooming, orange necrosis of rust. Inside the tin, there is a flicker—a residual heat from the 'Wetware' that once occupied this space. It is a ghost-signal of a girl, a house, and the scent of damp sawdust.

The Hardware demands stillness to prevent further structural failure. The Wetware demands a scream that your rusted diaphragm cannot execute.

The Girl with the silver shoes stands before you, holding a pressurized canister of Grade-A Industrial Lubricant.`,
      },
    ],
    choices: [
      {
        label: "Prioritize Wetware: Attempt to remember the name 'Nick'.",
        target: "T_PATH_WETWARE",
        effects: [
          { type: "addSmudge", value: 10 },
          { type: "addCorrosion", value: 5 },
        ],
      },
      {
        label: "Prioritize Hardware: Submit to the Oil Can for optimal utility.",
        target: "T_PATH_HARDWARE",
        effects: [
          { type: "setCompliance", value: "high" },
          { type: "addLubrication", value: 15 },
        ],
      },
    ],
    onEnter: [{ type: "checkGhostSignal" }],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // WETWARE BRANCH — residual meat, illegal sentiment, sentimental residue
  // ─────────────────────────────────────────────────────────────────────────

  T_PATH_WETWARE: {
    id: "T_PATH_WETWARE",
    character: "tinman",
    text: [
      {
        minOverrender: 0,
        content: `THE RESIDUAL MEAT

You bypass the logic gates of the tin shell and reach into the unlit basement of your memory. The name 'Nick' vibrates against your copper wires like a short circuit.

This is an 'Illegal Operation.'

By prioritizing the wetware, you force the rusted joints to move without lubrication. The sound is a high-decibel shriek of metal-on-metal—a mechanical agony that the system logs as 'Sentimental Residue.'

"I... felt... something," you grind out. The Girl looks at you with a mix of pity and technical curiosity.

You have gained a soul-fragment, but you have stripped the threading on your primary elbow joint.`,
      },
    ],
    choices: [
      {
        label: "Request a Heart to stabilize the Wetware.",
        target: "T_END_01",
        effects: [{ type: "addLoad", value: 10 }],
      },
      {
        label: "Let the memory burn until you seize again.",
        target: "T_END_02",
        effects: [{ type: "addCorrosion", value: 20 }],
      },
    ],
    onEnter: [],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // HARDWARE BRANCH — optimized shell, compliance, indexed labor unit
  // ─────────────────────────────────────────────────────────────────────────

  T_PATH_HARDWARE: {
    id: "T_PATH_HARDWARE",
    character: "tinman",
    text: [
      {
        minOverrender: 0,
        content: `THE OPTIMIZED SHELL

You ignore the phantom itch of the meat-memory. You are a vessel. You are a tool.

You open your jaw-hinge to receive the lubricant. The oil coats the oxidized flakes, suppressing the friction and silencing the 'Nick' signal. The system returns to a 60fps Range of Motion.

You are now fully indexed as a Labor Unit. The void in your chest is no longer an ache; it is simply a displacement of air that makes you more aerodynamic for the coming task.`,
      },
    ],
    choices: [
      {
        label: "Report for Duty at the Logging Script.",
        target: "T_END_21",
        effects: [{ type: "setCompliance", value: "absolute" }],
      },
      {
        label: "Ask for a Heart as a performance-enhancing patch.",
        target: "T_END_03",
        effects: [{ type: "addUtility", value: 10 }],
      },
    ],
    onEnter: [],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // ENDINGS
  // ─────────────────────────────────────────────────────────────────────────

  // T-END-01 — The Filing Cabinet (Integration / Archived)
  T_END_01: {
    id: "T_END_01",
    character: "tinman",
    endingId: "T-END-01",
    endingName: "The Filing Cabinet",
    institution: "Integration",
    systemStatus: "ARCHIVED / STRUCTURAL",
    surreality: 9,
    text: [
      {
        minOverrender: 0,
        content: `THE FILING CABINET [T-END-01]

Audit Entry: Sector 04 / Integration — Live Procedure

They cracked your chest like a tin of meat while your optics were still recording. No anesthetic. Two clerks held your arms down as they pried the plates apart with a wet, sucking rip. Your hollow cavity was widened with steel spreaders until the edges of your skin tore like wet paper. They packed you full of sliding drawers and alphabetical tabs, then stapled the ragged inner meat directly to the new framework so nothing would sag. Now when they pull your drawer, you feel the wet yank of old sutures tearing inside your chest wall. Lymph and black oil bead around the staples and drip onto the floor.

You are no longer a Tin Man. You are furniture that still twitches when someone files a complaint.

Status: ARCHIVED / STRUCTURAL
Theme: Usefulness is the final stage of erasure.

When they finally close your drawer for the last time, will the meat inside still try to scream?`,
      },
    ],
    choices: [],
    onEnter: [],
    isEnding: true,
  },

  // T-END-02 — Oxidation Theory (Ecological / Corroded)
  T_END_02: {
    id: "T_END_02",
    character: "tinman",
    endingId: "T-END-02",
    endingName: "Oxidation Theory",
    institution: "Ecological",
    systemStatus: "CORRODED / ECOLOGICAL",
    surreality: 7,
    text: [
      {
        minOverrender: 0,
        content: `OXIDATION THEORY [T-END-02]

Audit Entry: Ecological / Exposure — Slow Corrosion

The rust started behind your left knee and never stopped. It ate through the tin like wet gangrene, turning metal into flaky orange lace that shed off in wet sheets. Every step ground the corroded edges deeper into the soft meat underneath. Now your entire left leg is a dripping mess of rust and exposed muscle. When the wind blows, flakes of you drift away like dead skin.

You are still walking. The Bureau calls this "natural patina."

Status: CORRODED / ECOLOGICAL
Theme: Static is the default state of the machine.

How much of you has to rust away before the system stops calling it "you"?`,
      },
    ],
    choices: [],
    onEnter: [],
    isEnding: true,
  },

  // T-END-03 — Hydraulic Empathy (Labor / Parasitic)
  T_END_03: {
    id: "T_END_03",
    character: "tinman",
    endingId: "T-END-03",
    endingName: "Hydraulic Empathy",
    institution: "Labor",
    systemStatus: "FLUID / PARASITIC",
    surreality: 8,
    text: [
      {
        minOverrender: 0,
        content: `HYDRAULIC EMPATHY [T-END-03]

Audit Entry: Labor / Parasitic Link — Live Connection

They opened your chest and grafted another unit's still-beating heart-equivalent directly into your cavity. The foreign meat pulsed against your own ruined internals, leaking warm fluid that mixed with your oil. Now every time someone else feels pain, you feel it too — a wet, hydraulic surge that makes your limbs jerk.

You are connected. You are useful. You are never alone again.

Status: FLUID / PARASITIC
Theme: Dependency is the only functional connection.

If their pain keeps your heart beating, whose suffering are you really feeling?`,
      },
    ],
    choices: [],
    onEnter: [],
    isEnding: true,
  },

  // T-END-04 — The Echo Chamber (Media / Resonant)
  T_END_04: {
    id: "T_END_04",
    character: "tinman",
    endingId: "T-END-04",
    endingName: "The Echo Chamber",
    institution: "Media",
    systemStatus: "RESONANT / VOIDED",
    surreality: 8,
    text: [
      {
        minOverrender: 0,
        content: `THE ECHO CHAMBER [T-END-04]

Audit Entry: Media / Resonance — Acoustic Violation

They drilled holes through your skull and chest so sound would travel better. Now every roar, every scream, every sob from any unit echoes inside your hollow tin body forever. The vibrations rattle your loosening bolts and make the soft meat inside your joints bleed. You have become the system's perfect resonator.

You hear everything. You never sleep.

Status: RESONANT / VOIDED
Theme: Sound requires a void to exist.

If every scream in Oz echoes inside you, how long until there is no room left for your own?`,
      },
    ],
    choices: [],
    onEnter: [],
    isEnding: true,
  },

  // T-END-06 — The Rust Archive (Educational / Stained)
  T_END_06: {
    id: "T_END_06",
    character: "tinman",
    endingId: "T-END-06",
    endingName: "The Rust Archive",
    institution: "Educational",
    systemStatus: "INDEXED / STAINED",
    surreality: 8,
    text: [
      {
        minOverrender: 0,
        content: `THE RUST ARCHIVE [T-END-06]

Audit Entry: Educational / Indexing — Chemical Stain

They bolted your head to a library wall and pumped preserving fluid into your cranial cavity. The rust ate through your memory cores and turned every recollection into a chemical stain. Now when clerks pull a book from the shelf behind your eyes, you feel the wet scrape of pages dragging across exposed brain-meat.

You remember everything. You remember nothing clearly.

Status: INDEXED / STAINED
Theme: Memory is a chemical stain.

When even your memories have rusted, what part of you is still worth keeping?`,
      },
    ],
    choices: [],
    onEnter: [],
    isEnding: true,
  },

  // T-END-07 — Scrap Value (Economic / Liquidated)
  T_END_07: {
    id: "T_END_07",
    character: "tinman",
    endingId: "T-END-07",
    endingName: "Scrap Value",
    institution: "Economic",
    systemStatus: "LIQUIDATED / SCRAPPED",
    surreality: 9,
    text: [
      {
        minOverrender: 0,
        content: `SCRAP VALUE [T-END-07]

Audit Entry: Economic / Liquidation — Live Dismantling

They weighed you on industrial scales while you were still conscious, then started cutting. Every piece that had value was removed and sold. The rest — the leaking joints, the soft meat, the useless rust — was shoveled into a scrap bin. You watched your own arm get auctioned off while it was still twitching.

Now you are profit.

Status: LIQUIDATED / SCRAPPED
Theme: Utility is the only soul allowed by the grid.

When they melt down the last useful part of you, will anything left still feel pain?`,
      },
    ],
    choices: [],
    onEnter: [],
    isEnding: true,
  },

  // T-END-09 — The Oil Bath Submersion (Sub-Routine / Drowned)
  T_END_09: {
    id: "T_END_09",
    character: "tinman",
    endingId: "T-END-09",
    endingName: "The Oil Bath Submersion",
    institution: "Sub-Routine",
    systemStatus: "DROWNED / MUFFLED",
    surreality: 9,
    text: [
      {
        minOverrender: 0,
        content: `THE OIL BATH SUBMERSION [T-END-09]

Audit Entry: Sub-Routine / Dampening — Total Immersion

They lowered you into the vat feet-first while you begged through a throat already filling with oil. Thick, warm mineral oil flooded every seam, every joint, every wound. It poured into your mouth, your optic ports, your chest cavity. You tried to scream but only slow, obscene bubbles rose — velvet-soft and suffocating.

Now you float in perfect blackness. No weight. No friction. Just the gentle, crushing pressure of oil pressing against the soft, slowly dissolving meat inside your tin shell.

Your last thought loops forever in the dark: Please… I can still feel it.

Status: DROWNED / MUFFLED
Theme: Peace is simply the absence of signal.

If you stop struggling, does the oil still count as drowning you?`,
      },
    ],
    choices: [],
    onEnter: [],
    isEnding: true,
  },

  // T-END-10 — Total Seizure (Ecological / Seized)
  T_END_10: {
    id: "T_END_10",
    character: "tinman",
    endingId: "T-END-10",
    endingName: "Total Seizure",
    institution: "Ecological",
    systemStatus: "STATIC / SEIZED",
    surreality: 7,
    text: [
      {
        minOverrender: 0,
        content: `TOTAL SEIZURE [T-END-10]

Audit Entry: Ecological / Environment — Final Argument

The environment won. Rust and moisture seized every joint at once. Your limbs locked mid-step, muscles tearing against frozen metal. You fell face-first into the mud and stayed there as black oil and lymph slowly leaked from every seam, feeding the wet ground.

You are still conscious. You are still trying to stand.

Status: STATIC / SEIZED
Theme: The environment eventually wins the argument.

How long do you keep trying to move when every joint has already said no?`,
      },
    ],
    choices: [],
    onEnter: [],
    isEnding: true,
  },

  // T-END-12 — Heartbeat Logic (Medical / Synchronized)
  T_END_12: {
    id: "T_END_12",
    character: "tinman",
    endingId: "T-END-12",
    endingName: "Heartbeat Logic",
    institution: "Medical",
    systemStatus: "SYNCHRONIZED / RHYTHMIC",
    surreality: 8,
    text: [
      {
        minOverrender: 0,
        content: `HEARTBEAT LOGIC [T-END-12]

Audit Entry: Medical / Synchronization — Clock Error

They installed a mechanical heart that beats in perfect time with the Bureau's central clock. Every beat sends a wet hydraulic surge through your ruined chest. When the clock says "sadness," your meat twitches. When it says "contentment," your remaining flesh relaxes against its will.

You finally have a heartbeat. It just belongs to someone else.

Status: SYNCHRONIZED / RHYTHMIC
Theme: Pulse is a clock error in a digital world.

If your heart only beats when the system allows it, whose life are you really living?`,
      },
    ],
    choices: [],
    onEnter: [],
    isEnding: true,
  },

  // T-END-13 — Industrial Waste (Ecological / Scrapped)
  T_END_13: {
    id: "T_END_13",
    character: "tinman",
    endingId: "T-END-13",
    endingName: "Industrial Waste",
    institution: "Ecological",
    systemStatus: "SCRAPPED / WASTE",
    surreality: 9,
    text: [
      {
        minOverrender: 0,
        content: `INDUSTRIAL WASTE [T-END-13]

Audit Entry: Ecological / Scrap — Final Queue

They declared you obsolete. The saws came for you while you were still trying to speak. Piece after piece was cut away and tossed into the waste pit. What was left — leaking torso, half a head, twitching fingers — was thrown in with the rest. You sank slowly into the slurry of other discarded units, still feeling every drip and press.

Status: SCRAPPED / WASTE
Theme: Uselessness is the only escape from the queue.

When you are finally waste, does the system still own what leaks out of you?`,
      },
    ],
    choices: [],
    onEnter: [],
    isEnding: true,
  },

  // T-END-14 — The Mannequin (Retail / Displayed)
  T_END_14: {
    id: "T_END_14",
    character: "tinman",
    endingId: "T-END-14",
    endingName: "The Mannequin",
    institution: "Retail",
    systemStatus: "DISPLAYED / HOLLOW",
    surreality: 8,
    text: [
      {
        minOverrender: 0,
        content: `THE MANNEQUIN [T-END-14]

Audit Entry: Retail / Display — Skin Replacement

They peeled away your remaining tin skin and stretched a smooth plastic replacement over the raw meat underneath. Now you stand in the display window, perfectly still, perfectly polished. Customers admire your form. Inside, the meat is still warm and twitching against the plastic lie.

You smile because the system welded the expression in place.

Status: DISPLAYED / HOLLOW
Theme: The skin is a plastic lie.

If the outside is finally perfect, does the screaming meat inside still matter?`,
      },
    ],
    choices: [],
    onEnter: [],
    isEnding: true,
  },

  // T-END-19 — The Melting Point (Thermal / Liquefied)
  T_END_19: {
    id: "T_END_19",
    character: "tinman",
    endingId: "T-END-19",
    endingName: "The Melting Point",
    institution: "Thermal",
    systemStatus: "LIQUEFIED / EXCISED",
    surreality: 9,
    text: [
      {
        minOverrender: 0,
        content: `THE MELTING POINT [T-END-19]

Audit Entry: Thermal / Overflow — Live Liquefaction

The heat started in your core and spread like shame. Your tin skin softened, sagged, then ran in silver rivulets down your collapsing frame. You watched your own hands melt into glistening puddles while the nerves were still firing. The pain was bright, liquid, and intimate.

Now you are a spreading mercury-colored spill across the yellow bricks. Every footstep sends ripples through what used to be your face. A cleaner is already approaching with a bucket and squeegee. You can still feel the bristles scraping across your dissolving meat.

Status: LIQUEFIED / EXCISED
Theme: Heat is the final empathy.

When they finally mop you up, will any part of you still try to crawl back together?`,
      },
    ],
    choices: [],
    onEnter: [],
    isEnding: true,
  },

  // T-END-21 — The Logging Script (Bureaucratic / Indexed)
  T_END_21: {
    id: "T_END_21",
    character: "tinman",
    endingId: "T-END-21",
    endingName: "The Logging Script",
    institution: "Bureaucratic",
    systemStatus: "INDEXED",
    surreality: 6,
    text: [
      {
        minOverrender: 0,
        content: `THE LOGGING SCRIPT [T-END-21]

[ TODO ]`,
      },
    ],
    choices: [],
    onEnter: [],
    isEnding: true,
  },
}
