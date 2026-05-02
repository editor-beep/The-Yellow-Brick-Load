/**
 * YELLOW BRICK LOAD — Shared Node Architecture
 * Character: shared (cross-character passages visited by all four main units)
 *
 * Passages:
 *   Z_WIZARDS_HALL          — The Marketing Filter (Coordinate Z-HALO)
 *   SHARED_UNMOORED_NIGHT   — The Secret Configuration Gate (Coordinate NULL)
 *   Z_GREEN_LENS            — Placebo Reception: The Symbol (branch stub)
 *   SHARED_UNLIT_BASEMENT   — Behind the Curtain (branch stub)
 *   NODE_LOGIC_BRANCH       — Character-specific debris routing (branch stub)
 *   UNRECOGNIZED_CONFIG     — Secret ending architectural shell (stub)
 *   SHARED_POPPY_FIELD      — The Pharmaceutical Buffer (Coordinate P-SLEEP)
 *   SHARED_EMERALD_CITY_GATES — The Marketing Interface (Coordinate Z-GRILL)
 *
 * Standing Instruction: THE UNRECOGNIZED CONFIGURATION
 * The global state machine tracks four persistent cross-playthrough flags:
 *   lion_refused_reset, tinman_touched_axe,
 *   scarecrow_straw_exchange, dorothy_direct_line
 * When all four are set, SHARED_UNMOORED_NIGHT unlocks UNRECOGNIZED_CONFIG.
 *
 * Degrading Inventory Items (Symbolic Reclassifications):
 *   receiveDegradingGift initializes giftDurability = 5.
 *   Each node transition decrements it. At 0 the gift becomes a Corrupted Artifact.
 *
 * Dorothy's Asymmetry:
 *   The Wizard cannot gift a signal — only a Testimonial.
 *   Z_WIZARDS_HALL choice content is character-keyed to enforce this.
 */

// ─────────────────────────────────────────────────────────────────────────────
// THE WIZARD'S HALL: THE MARKETING FILTER (SHARED)
// ─────────────────────────────────────────────────────────────────────────────

export const sharedPassages = {
  Z_WIZARDS_HALL: {
    id: 'Z_WIZARDS_HALL',
    character: 'shared',
    voiceSwap: {
      lion: `He pinned a weight to my chest. He says it's 'Courage,' but it just feels like more load to carry. The system logs me as brave, but my spine still vibrates at 14.2Hz.`,
      scarecrow: `The Diploma is a regulatory script. It's a piece of paper that tells me the patterns I see aren't real. If the system says I'm smart, do I have to keep counting the crows?`,
      dorothy: `He looked right through me. He doesn't have a gift for a signal-ghost. He just told me I was already where I needed to be. He's the one holding the wire.`,
    },
    text: [
      {
        minOverrender: 0,
        content: `COORDINATE Z-HALO: THE PROJECTION SITE

The air is a thick, artificial fog that smells of burning copper and theatrical ozone. Above you, a massive green head—rendered in a shimmering, low-resolution light—hovers with a predatory benevolence.

The voice is warm. It is the sound of a high-end corporate testimonial, a sales pitch for a product that doesn't exist. "Welcome, Unit," it croons. "We've been tracking your behavioral load. You've done remarkable work sustaining the structure. Truly. But you're worried about the noise, aren't you? We don't need to fix the hardware. We just need to change the label on the file."`,
      },
    ],
    choices: [
      {
        label: 'Accept the Placebo Protocol (The Symbol)',
        target: 'Z_GREEN_LENS',
        effects: [
          { type: 'addCompliance', value: 20 },
          { type: 'receiveDegradingGift' },
        ],
        // Character-specific gift text: resolved by the renderer from state.character
        content: {
          lion: `The Wizard pins a weight to your chest. A medal. It is heavy. It tells the system you are brave so you don't have to be. Your vibration is not gone; it is simply rebranded as 'Authority.'`,
          scarecrow: `A scroll is pressed into your straw. A Diploma. It is a regulatory script that interrupts your associations mid-thought. It is a certificate of silence.`,
          tinman: `A heart-shaped clock is placed in your hollow chest. It is a mechanism that measures time instead of feeling it. A rhythmic placeholder for the void.`,
          dorothy: `The Wizard looks at you and his projection flickers. "For you, D-Cluster, we have only a Testimonial. A script that says you never left. We cannot gift a signal. We can only claim the interference is the destination."`,
        },
      },
      {
        label: 'Peer Behind the Curtain (The Hack)',
        target: 'SHARED_UNLIT_BASEMENT',
        effects: [{ type: 'addDesync', value: 15 }],
        content: `The curtain is the only thing holding the city together. You ignore the light and move toward the smell of hot copper, seeking the operator node.`,
      },
      {
        label: 'Demand a Real Patch (Obfuscation Failure)',
        target: 'Z_END_23',
        effects: [
          { type: 'addLoad', value: 30 },
          { type: 'triggerSystemCrash', value: true },
        ],
        content: `You refuse the trinket. You demand the Wizard fix the actual screaming in your joints, the rot in your straw, the displacement of your soul. The projection cannot compute a hardware request. The green head distorts, stretching into a jagged line of high-frequency static. Truth is the residue left after the projection fails.`,
      },
    ],
    onEnter: [],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // THE UNMOORED NIGHT: THE SECRET CONFIGURATION GATE
  // ─────────────────────────────────────────────────────────────────────────

  SHARED_UNMOORED_NIGHT: {
    id: 'SHARED_UNMOORED_NIGHT',
    character: 'shared',
    voiceSwap: {
      witch_east: `1-1 = 0. No, 1-1 = 1. I am a ghost-bit in the slag. The gravity here has no floor. Can you hear the slippers humming in the dark?`,
      scarecrow: `A gravitational failure. I am seeing the logic gates from the outside. The patterns are gone. There is only the void and the bits of straw I left behind.`,
      dorothy: `The transmitter is silent here. I'm not being harvested anymore. I'm just... unfiled. Being lost is the only time I feel like I'm actually home.`,
    },
    onEnter: [
      {
        action: 'checkSecretConfiguration',
        requirements: [
          'lion_refused_reset',
          'tinman_touched_axe',
          'scarecrow_straw_exchange',
          'dorothy_direct_line',
        ],
        onSuccess: 'triggerUnrecognizedConfiguration',
      },
    ],
    text: [
      {
        minOverrender: 0,
        content: `THE UNMOORED NIGHT (COORDINATE NULL)

Absence of sensors. A gravitational failure. This is where the system's anchor points have detached. You are in the trash folder of the Oz OS.`,
      },
      {
        id: 'SECRET_NODE_GATE',
        minOverrender: 99, // Only reachable via secret configuration check; routed via UNRECOGNIZED_CONFIG
        content: `There is a roar that doesn't hit a wall, and a man of straw seeing a pattern that includes himself, and growth rings in corrosion. It is a dead woman's ghost and a child's home address on the same channel. The frequency stays, unfileable, opening things. This is the exact interval when damage is still open and unclassified.

UNRECOGNIZED CONFIGURATION. FILING AS ERROR. RESUMING.`,
      },
    ],
    choices: [
      {
        label: 'Search the Debris',
        target: 'NODE_LOGIC_BRANCH',
        condition: (state) => !state.flags.unrecognized_config_triggered,
        // Character-specific debris text: resolved by the renderer from state.character
        content: {
          lion: `You find the absence of instruction terrifying. Without a script, your roar has no target. You are a king of nothing.`,
          scarecrow: `You find floating pattern debris. Fragments of unindexed data that the system couldn't categorize. You try to stitch them into your head.`,
          dorothy: `You find the discarded signals of the others. The rust, the straw, the fear. They are all tuned to the same frequency of failure.`,
        },
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // Z_GREEN_LENS — Placebo Reception (branch stub)
  // The Symbol: the gift has been accepted. Durability begins decaying.
  // ─────────────────────────────────────────────────────────────────────────

  Z_GREEN_LENS: {
    id: 'Z_GREEN_LENS',
    character: 'shared',
    text: [
      {
        minOverrender: 0,
        content: `THE SYMBOL (ACCEPTED)

The gift is in your possession. It has weight. It has the correct shape of the thing you needed. The Wizard's projection dims to a comfortable glow as he notes the transaction in the Bureau's ledger: "Unit compliance: restored. Requisition: fulfilled."

You do not feel fixed. You feel labeled.

[ DEGRADING GIFT: ACTIVE ]
[ DURABILITY: {{stats.giftDurability}} ]
[ STATUS: SYMBOLIC RECLASSIFICATION IN PROGRESS ]

The gift is already beginning its slow reclassification. By the time you reach the convergence point, the medal will be corrosion. The diploma will be ash. The clock will be stopped. The testimonial will be a transcript of a conversation that never happened.`,
      },
    ],
    choices: [
      {
        label: 'Continue down the road with the symbol.',
        target: 'WIZARD_END_AUDIT',
        effects: [
          { type: 'addLoad', value: 10 },
          { type: 'addObfuscation', value: 3 },
        ],
      },
      {
        label: 'Examine the gift — notice what it actually is.',
        target: 'WIZARD_END_FAIL',
        effects: [
          { type: 'addDesync', value: 5 },
          { type: 'addObfuscation', value: 2 },
        ],
      },
    ],
    onEnter: [],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SHARED_UNLIT_BASEMENT — Behind the Curtain (branch stub)
  // The Hack: the operator node, the smell of hot copper.
  // ─────────────────────────────────────────────────────────────────────────

  SHARED_UNLIT_BASEMENT: {
    id: 'SHARED_UNLIT_BASEMENT',
    character: 'shared',
    text: [
      {
        minOverrender: 0,
        content: `THE OPERATOR NODE (COORDINATE Z-BASEMENT)

[ PASSAGE RESERVED FOR AUTHOR INPUT ]

The smell of hot copper intensifies. The curtain mechanism is visible from here — a dense lattice of levers, pulleys, and projection conduits running into the floor and ceiling. The green light comes from a single bulb.

[ DESYNC: HIGH ]
[ PROJECTION: OFFLINE FROM THIS ANGLE ]
[ OPERATOR: UNCONFIRMED ]`,
      },
    ],
    choices: [
      {
        label: 'Pull the main lever.',
        target: 'WIZARD_END_OVERRIDE',
        effects: [{ type: 'addDesync', value: 5 }, { type: 'addObfuscation', value: 4 }],
      },
    ],
    onEnter: [],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // NODE_LOGIC_BRANCH — Character-keyed debris routing (branch stub)
  // Routes units through the unmoored debris field.
  // ─────────────────────────────────────────────────────────────────────────

  NODE_LOGIC_BRANCH: {
    id: 'NODE_LOGIC_BRANCH',
    character: 'shared',
    text: [
      {
        minOverrender: 0,
        content: `THE DEBRIS FIELD (COORDINATE NULL-BRANCH)

[ PASSAGE RESERVED FOR AUTHOR INPUT ]

The unindexed fragments settle around you. Each one carries a frequency signature from a prior run of the system — archived grief, expired warrant, dissolved straw.

[ CHARACTER ROUTING: PENDING ]
[ DEBRIS: UNCLASSIFIED ]`,
      },
    ],
    choices: [
      {
        label: 'Continue through the debris.',
        target: 'SHARED_UNMOORED_NIGHT',
        effects: [{ type: 'addDesync', value: 3 }],
      },
    ],
    onEnter: [],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // UNRECOGNIZED_CONFIG — Secret ending architectural shell (stub)
  // Reached only when all four persistent cross-playthrough flags are set.
  // ─────────────────────────────────────────────────────────────────────────

  UNRECOGNIZED_CONFIG: {
    id: 'UNRECOGNIZED_CONFIG',
    character: 'shared',
    endingId: 'SECRET-01',
    endingName: 'The Unrecognized Configuration',
    institution: 'Unindexed',
    systemStatus: 'Unrecognized',
    isEnding: true,
    surreality: 10,
    text: [
      {
        minOverrender: 0,
        content: `There is a roar that doesn't hit a wall, and a man of straw seeing a pattern that includes himself, and growth rings in corrosion. It is a dead woman's ghost and a child's home address on the same channel. The frequency stays, unfileable, opening things. This is the exact interval when damage is still open and unclassified.

UNRECOGNIZED CONFIGURATION. FILING AS ERROR. RESUMING.`,
      },
    ],
    choices: [],
    onEnter: [
      { type: 'globalReset' },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SHARED_POPPY_FIELD — The Pharmaceutical Buffer
  // Signal Dampening Zone. Reduces neuralDensity and vibration; increases
  // compliance by suppressing the unit's capacity to resist the script.
  // ─────────────────────────────────────────────────────────────────────────

  SHARED_POPPY_FIELD: {
    id: 'SHARED_POPPY_FIELD',
    character: 'shared',
    onEnter: [
      { type: 'setFlag', key: 'pharmaceutical_dampening', value: true },
      { type: 'addVibration', value: -8 },
    ],
    text: [
      {
        minOverrender: 0,
        content: `THE POPPY FIELD: COORDINATE P-SLEEP

The air is thick with a heavy, crimson static. The ground is a carpet of red petals that absorb the seismic load of the road. This is a Signal Dampening Zone. The closer you get to the center, the more the 'Home' coordinates blur. The noise of your journey is being converted into a low, rhythmic sleep-state.`,
      },
    ],
    voiceSwap: {
      lion: `The vibration is leaving my paws. The red petals are absorbing the frequency of my fear. For the first time, I am not shaking. I am just... heavy. Is this what a King feels like, or is this just the end of the script?`,
      tinman: `The pollen is entering my intake valves. It's coating the gears of my heart-clock. The ticking is slowing down. My joints don't scream anymore; they just whisper 'sleep.'`,
      scarecrow: `One red flower. Two. Forty-two... I've lost the count. The patterns are dissolving into soft, red noise. It's the first time my head hasn't hurt. I don't want to think. Thinking is a stitch that's finally come loose.`,
      dorothy: `The signal from Kansas is being buried in the scent of lilacs and dust. Every step into the red makes the farmhouse look more like a grayscale dream. I'm losing the frequency. I'm becoming part of the field's static.`,
    },
    choices: [
      {
        label: 'Surrender to the Red (Sleep)',
        target: 'P_END_01',
        effects: [{ type: 'setSystemStatus', value: 'archived' }],
      },
      {
        label: 'Push Through the Static',
        target: 'SHARED_EMERALD_CITY_GATES',
        effects: [{ type: 'addLoad', value: 10 }, { type: 'addDesync', value: 5 }],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SHARED_EMERALD_CITY_GATES — The Marketing Interface
  // Forces a high-compliance check. The "Green Lens" overrenders all
  // structural damage. The City is a Compliance Hub, not a Victory Node.
  // ─────────────────────────────────────────────────────────────────────────

  SHARED_EMERALD_CITY_GATES: {
    id: 'SHARED_EMERALD_CITY_GATES',
    character: 'shared',
    onEnter: [
      { type: 'setFlag', key: 'green_lens_active', value: true },
      { type: 'addCompliance', value: 15 },
    ],
    text: [
      {
        minOverrender: 0,
        content: `THE EMERALD CITY GATES: COORDINATE Z-GRILL

The resolution here is staggering. The green light is so bright it burns out the grayscale of the road. It is a high-fidelity projection designed to hide the slag. You aren't entering a city; you are entering a Marketing Filter.`,
      },
    ],
    voiceSwap: {
      glinda: `Look at the resolution! This is the peak of our alignment. The green light is a perfect refractive index—it hides every flaw, every crack in the slag. Welcome to the successful audit.`,
      witch_west: `The green light is just a filter to hide the heat signatures. I can still see the Lion's spine-error through the glow. The City isn't a destination; it's a giant, glowing cooling-fan for the Processor.`,
      wizard: `Welcome, welcome! Please, step into the projection. Don't mind the smell of burning copper; that's just the smell of 'Progress.' We have a gift for your compliance!`,
      dorothy: `The green is too bright. It's jamming my receiver. I can hear the Transmitter humming underneath the pavement. I'm standing on the battery.`,
    },
    choices: [
      {
        label: 'Ring the Bell (Request Entry)',
        target: 'Z_WIZARDS_HALL',
        effects: [{ type: 'setArrivalState', value: 'compliance_check' }],
      },
      {
        label: 'The Side Door (The Unlit Basement)',
        target: 'SHARED_UNLIT_BASEMENT',
        effects: [{ type: 'addDesync', value: 20 }, { type: 'setFlag', key: 'path', value: 'hack' }],
        content: `You ignore the bell. You follow the smell of ozone and wet concrete down toward the plumbing. The projection doesn't go all the way to the floor.`,
      },
    ],
  },
}
