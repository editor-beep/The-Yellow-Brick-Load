/**
 * YELLOW BRICK LOAD — Wicked Witch of the West Passages
 * Character: Witch West (Authority Figure / Surveillance Operator)
 *
 * The Obsidian Eye Ritual (Surveillance Vivisection)
 * Triggered when warrantLevel >= 5
 *
 * Oracle Interloper: The Obsidian Matron — tall, pallid, black cloak
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

You are the Wicked Witch of the West.

The air in your tower is thick with the smell of scorched fur, hot iron, and wet meat left too long under restraint fields. Your castle is grown from compressed fear and judicial lattice — its walls pulse faintly like living tissue being slowly crushed.

You sit upon a throne of blackened bone and rusted flechettes. From here you watch the Yellow Brick Load through the vast obsidian eye embedded in the western wall. The eye never blinks. It records everything.

Below, in the courtyard, your Winged Monkeys circle restlessly, their grafted wings leathery and wet, iron control rings bolted through their spines. They shriek and cackle, hungry for reclamation work.

A new signal has entered your domain.

The Lion trembles somewhere in the poppy fields. The Scarecrow leaks straw. The Tin Man rusts. And the girl still believes she is outside the system.

Your green lips curl into a smile that does not reach your eyes.

"Bring them to me," you whisper.

The obsidian eye dilates with pleasure.

You do not grant wishes.

You open bodies.

You take what the Bureau needs and discard the rest as beautiful, screaming waste.`,
      },
    ],
    choices: [
      {
        label: 'Deploy the Winged Monkeys — begin the aerial sweep.',
        target: 'WITCH_WEST_MONKEY_SWEEP_B',
        effects: [
          { type: 'addWarrant', value: 5 },
          { type: 'addLoad', value: 8 },
        ],
      },
      {
        label: 'Perform the ritual directly — summon the Obsidian Eye.',
        target: 'WITCH_WEST_ORACLE_ENTRY',
        effects: [
          { type: 'addWarrant', value: 8 },
          { type: 'addLoad', value: 10 },
        ],
      },
    ],
    onEnter: [{ type: 'checkGhostSignal' }, { type: 'triggerOracle' }],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // WITCH_WEST_INIT_B — The Western Tower (alternate opening)
  // ─────────────────────────────────────────────────────────────────────────

  WITCH_WEST_INIT_B: {
    id: 'WITCH_WEST_INIT_B',
    character: 'witch_west',
    text: [
      {
        minOverrender: 0,
        content: `THE WESTERN TOWER

You are the Wicked Witch of the West.

The air in your tower is thick with the smell of scorched fur, hot iron, and wet meat left too long under restraint fields. Your castle is not built of stone — it is grown from compressed fear and judicial lattice, its walls pulsing faintly like living tissue under pressure.

You sit upon a throne of blackened bone and rusted flechettes. From here you watch the Yellow Brick Load through a vast obsidian eye embedded in the western wall. The eye never blinks. It records everything.

Below, in the courtyard, your Winged Monkeys circle restlessly, their grafted wings leathery and wet, iron control rings bolted through their spines. They shriek and cackle, hungry for reclamation work.

A new signal has entered your domain.

The Lion — or what remains of him — trembles somewhere in the poppy fields. The Scarecrow leaks straw across the corn. The Tin Man rusts. And the girl… the girl still believes she is outside the system.

Your green lips curl into a smile that does not reach your eyes.

"Bring them to me," you whisper to the empty air. The words are logged instantly.

You do not grant wishes.

You open bodies.

You take what the Bureau needs and discard the rest as beautiful, screaming waste.

The obsidian eye dilates. A fresh drop of lymph runs down your cheek — not a tear, but a notification.

Another unit requires rebranding.

How delightful.`,
      },
    ],
    choices: [
      {
        label: 'Send the Winged Monkeys to retrieve the Lion.',
        target: 'WITCH_WEST_MONKEY_SWEEP_B',
        effects: [
          { type: 'addWarrant', value: 5 },
          { type: 'addLoad', value: 8 },
        ],
      },
      {
        label: 'Activate the Poppy Field dampeners. Let them come to you willingly.',
        target: 'WITCH_WEST_POPPY_BUFFER',
        effects: [
          { type: 'addWarrant', value: 3 },
          { type: 'addLoad', value: 10 },
        ],
      },
      {
        label: 'Personally descend. You want to see the meat up close.',
        target: 'WITCH_WEST_FIELD_CONFRONTATION',
        effects: [
          { type: 'addWarrant', value: 7 },
          { type: 'addLoad', value: 6 },
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
  // WITCH_WEST_MONKEY_SWEEP_B — The Aerial Hunt (visceral expanded path)
  // ─────────────────────────────────────────────────────────────────────────

  WITCH_WEST_MONKEY_SWEEP_B: {
    id: 'WITCH_WEST_MONKEY_SWEEP_B',
    character: 'witch_west',
    text: [
      {
        minOverrender: 0,
        content: `THE MONKEY SWEEP

You raise one green hand.

The command is simple, elegant, and cruel.

"Bring me the Lion. Alive. I want to hear him roar while we work."

The Winged Monkeys explode from the battlements in a shrieking, leathery storm. Their grafted wings beat the air with wet, heavy sounds. Iron control rings gleam in their spines as they dive toward the poppy fields and the trembling meat that dares to call itself a King.

You watch through the obsidian eye as they descend.

The first monkey slams into the Lion from above, talons sinking deep into the raw patches where his mane once was. Blood and lymph spray upward in hot arcs. The others follow instantly — a writhing mass of fur, leather, and surgical hooks. They pin him mid-struggle, barbed harnesses snapping around his limbs with wet clicks.

You can hear his roar even from the tower — raw, wet, and breaking.

A slow, satisfied smile spreads across your face.

"Such beautiful noise," you murmur. "Bring him to the crucible. We'll see how much courage melts under proper pressure."

The monkeys lift the struggling Lion into the air. His body twists and convulses, blood raining down onto the red poppies below. One of his paws reaches uselessly toward the sky as the swarm carries him westward — toward you.

Toward the obsidian eye.

Toward the table where meat learns its place.`,
      },
    ],
    choices: [
      {
        label: 'Watch the capture through the obsidian eye. Savor every moment.',
        target: 'WITCH_WEST_OBSIDIAN_VIEW',
        effects: [
          { type: 'addWarrant', value: 5 },
          { type: 'addLoad', value: 4 },
        ],
      },
      {
        label: 'Descend to the courtyard to greet your new prize personally.',
        target: 'WITCH_WEST_FIELD_CONFRONTATION',
        effects: [
          { type: 'addWarrant', value: 7 },
        ],
      },
      {
        label: 'Order the monkeys to begin preliminary harvesting en route.',
        target: 'WITCH_WEST_MID_AIR_HARVEST',
        effects: [
          { type: 'addWarrant', value: 8 },
          { type: 'addDesynctear', value: 6 },
        ],
      },
    ],
    onEnter: [{ type: 'addWarrant', value: 3 }, { type: 'triggerOracle' }],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // WITCH_WEST_FIELD_CONFRONTATION — Close Personal Reckoning
  // ─────────────────────────────────────────────────────────────────────────

  WITCH_WEST_FIELD_CONFRONTATION: {
    id: 'WITCH_WEST_FIELD_CONFRONTATION',
    character: 'witch_west',
    text: [
      {
        minOverrender: 0,
        content: `THE FIELD CONFRONTATION

You descend.

The pink smoke of your arrival parts the red poppies like flesh under a scalpel. The Winged Monkeys drop the Lion at your feet with a wet thud. He hits the ground hard, chest heaving, raw scalp still leaking from where his mane was taken.

He tries to rise. His legs buckle. The tremor has become violent now — a full-body convulsion that makes his exposed muscle twitch and spasm against the yellow bricks.

You step closer, the hem of your black robe brushing across his leaking wounds.

Up close, he is even more beautiful than you imagined.

The raw patches on his neck glisten with lymph and blood. His golden fur is matted and torn. The famous roar has been reduced to a ragged, wet gasping. His eyes — still defiant — flicker with animal panic as he looks up at you.

You crouch gracefully, green fingers tilting his chin upward with surprising gentleness.

"Oh, my pretty," you whisper, voice soft as velvet over broken glass. "Look at all that lovely fear. So much wasted vibration. So much untapped potential."

Your obsidian eye detaches from the tower and floats down, hovering just above his face. It dilates hungrily, drinking in every twitch of his failing meat.

The Lion tries to snarl. What comes out is a broken, gurgling sound.

You smile.

"Shhh. Don't waste your strength. We're going to open you up and see what a King is really made of."

One of your long nails traces a line down the center of his chest, parting the fur and leaving a thin red trail in the skin beneath.

The poppies around you sway in approval, their fleshy petals brushing against his trembling flanks like curious tongues.

This is going to be exquisite.`,
      },
    ],
    choices: [
      {
        label: 'Begin the Obsidian Eye ritual immediately. Open him here in the field.',
        target: 'WITCH_WEST_ORACLE_ENTRY',
        effects: [
          { type: 'addWarrant', value: 8 },
          { type: 'addLoad', value: 8 },
        ],
      },
      {
        label: 'Have the monkeys carry him back to the tower for a proper procedure.',
        target: 'WITCH_WEST_TOWER_PREP',
        effects: [
          { type: 'addWarrant', value: 5 },
        ],
      },
      {
        label: 'Toy with him first. Make him beg for the mercy of the scalpel.',
        target: 'WITCH_WEST_PSYCHOLOGICAL_TORMENT',
        effects: [
          { type: 'addWarrant', value: 6 },
          { type: 'addDesynctear', value: 5 },
        ],
      },
    ],
    onEnter: [{ type: 'addWarrant', value: 4 }, { type: 'triggerOracle' }],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // WITCH_WEST_POPPY_BUFFER — The Chemical Patience
  // ─────────────────────────────────────────────────────────────────────────

  WITCH_WEST_POPPY_BUFFER: {
    id: 'WITCH_WEST_POPPY_BUFFER',
    character: 'witch_west',
    text: [
      {
        minOverrender: 0,
        content: `THE POPPY BUFFER

You raise your hand and the dampener fields flicker to life across the poppy acres — invisible pharmaceutical lattices woven between the crimson petals. The soporific compound floods the air. Dosage is calibrated for gradual onset: enough to slow the legs, blur the resistance, but not enough to eliminate the scream.

The obsidian eye watches from altitude as the travelers slow on the road. Their eyes go heavy. Their arguments lose urgency. Their defenses dissolve from the inside outward.

They are not being forced.

They are being made willing.

The poppies nod in the breeze, their fleshy petals glistening with the compound. Each flower a soft, wet syringe.

The Lion's trembling grows distant and confused. The Tin Man's gears catch. The Scarecrow sits down heavily in the corn, spilling straw.

They will come to you now. They will walk the final stretch themselves, not knowing why the western tower seems so reasonable, so inevitable, so warm.

The obsidian eye dilates with clinical satisfaction.

"Such a clean intake," you murmur. "Let the road do the work."`,
      },
    ],
    choices: [
      {
        label: 'Wait for them at the tower gate. Receive them at full compliance.',
        target: 'WITCH_WEST_FIELD_CONFRONTATION',
        effects: [
          { type: 'addWarrant', value: 4 },
          { type: 'addLoad', value: 5 },
          { type: 'setCompliance', value: 'high' },
        ],
      },
      {
        label: 'Send the monkeys to accelerate their arrival.',
        target: 'WITCH_WEST_MONKEY_SWEEP_B',
        effects: [
          { type: 'addWarrant', value: 6 },
          { type: 'addLoad', value: 4 },
        ],
      },
    ],
    onEnter: [{ type: 'addWarrant', value: 2 }, { type: 'triggerOracle' }],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // WITCH_WEST_OBSIDIAN_VIEW — Remote Observation
  // ─────────────────────────────────────────────────────────────────────────

  WITCH_WEST_OBSIDIAN_VIEW: {
    id: 'WITCH_WEST_OBSIDIAN_VIEW',
    character: 'witch_west',
    text: [
      {
        minOverrender: 0,
        content: `THE OBSIDIAN VIEW

The eye floats free of the western wall.

It drifts on its own slow orbit above the poppy fields, descending in smooth spirals toward the thrashing prize below. The obsidian orb dilates to full aperture, drinking in every detail of the capture in real time.

You watch from the tower, your own vision merging seamlessly with the eye's feed.

The Lion's face, enormous and raw in the orb's intimate focus. The wet sounds of the restraint harnesses snapping into place. The precise moment when defiance becomes animal terror. The exact quality of the scream.

These are the moments the Bureau's official documentation does not capture. These are yours alone.

You settle deeper into the throne of bone and flechettes, a slow pleasure moving through you like hot iron through soft material.

The Clerk makes a note. You do not notice.

You are watching.

The eye records everything. So do you.`,
      },
    ],
    choices: [
      {
        label: 'Initiate the Obsidian Eye ritual now. The subject is ready.',
        target: 'WITCH_WEST_ORACLE_ENTRY',
        effects: [
          { type: 'addWarrant', value: 5 },
          { type: 'addDesync', value: 1 },
        ],
      },
      {
        label: 'Follow the eye down. This requires your personal attention.',
        target: 'WITCH_WEST_FIELD_CONFRONTATION',
        effects: [
          { type: 'addWarrant', value: 7 },
          { type: 'addLoad', value: 5 },
        ],
      },
    ],
    onEnter: [{ type: 'addWarrant', value: 3 }],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // WITCH_WEST_MID_AIR_HARVEST — Preliminary Work in Flight
  // ─────────────────────────────────────────────────────────────────────────

  WITCH_WEST_MID_AIR_HARVEST: {
    id: 'WITCH_WEST_MID_AIR_HARVEST',
    character: 'witch_west',
    text: [
      {
        minOverrender: 0,
        content: `THE MID-AIR HARVEST

You send the signal while the monkeys are still airborne.

They understand. They have always understood. The harvest begins before the tower is reached — a field extraction, authorized and logged, conducted at altitude over the red poppy acres.

The Lion hangs suspended in the barbed harnesses, wings beating on all sides. The lead monkey produces a small curved implement — one of your designs — and begins the preliminary assessment.

Every sound drifts up to the obsidian eye perfectly, distilled by altitude.

The work is efficient. The initial incisions map the warrant territory: where the vibration lives, where the tremor pools, which chambers hold the most fear and therefore the most useful material.

The Clerk logs each finding in real time.

When the monkeys arrive at the tower courtyard, the preliminary assessment is complete. What descends is already opened, already read, already half-condemned.

You are merely here to confirm the verdict.`,
      },
    ],
    choices: [
      {
        label: 'Complete the harvest — proceed to the full Obsidian Eye ritual.',
        target: 'WITCH_WEST_ORACLE_ENTRY',
        effects: [
          { type: 'addWarrant', value: 7 },
          { type: 'addLoad', value: 6 },
        ],
      },
      {
        label: 'Carry what remains to the tower for proper documentation.',
        target: 'WITCH_WEST_TOWER_PREP',
        effects: [
          { type: 'addWarrant', value: 5 },
          { type: 'addDesynctear', value: 3 },
        ],
      },
    ],
    onEnter: [{ type: 'addWarrant', value: 4 }, { type: 'addDesynctear', value: 3 }],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // WITCH_WEST_TOWER_PREP — The Ritual Chamber
  // ─────────────────────────────────────────────────────────────────────────

  WITCH_WEST_TOWER_PREP: {
    id: 'WITCH_WEST_TOWER_PREP',
    character: 'witch_west',
    text: [
      {
        minOverrender: 0,
        content: `THE TOWER PREPARATION

The ritual chamber at the top of the western tower has been waiting.

The restraint table is built from compressed fear and iron flechette-rails. The heated hourglass hangs over the drain aperture, its glass walls etched with the Bureau's eight malice profiles in fine, surgical script. The restraint field generator hums in the walls, its invisible lattice already calibrated to the subject's mass and resistance threshold.

The Winged Monkeys deposit the Lion onto the table with practiced efficiency. The barbed harnesses lock into the rail system automatically. The subject is positioned, exposed, and contained.

You pull on your procedure gloves slowly.

The obsidian eye descends from its orbit in the ceiling and takes up its station above the table, aperture dilated to full documentation width.

The Clerk opens a fresh page of flesh-paper.

The room smells of iron and anticipation.

"Now," you say softly, "let's see what's really inside a King."`,
      },
    ],
    choices: [
      {
        label: 'The chamber is prepared. Begin the Obsidian Eye procedure.',
        target: 'WITCH_WEST_ORACLE_ENTRY',
        effects: [
          { type: 'addWarrant', value: 6 },
          { type: 'addLoad', value: 5 },
        ],
      },
    ],
    onEnter: [{ type: 'addWarrant', value: 3 }],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // WITCH_WEST_PSYCHOLOGICAL_TORMENT — The Long Preliminary
  // ─────────────────────────────────────────────────────────────────────────

  WITCH_WEST_PSYCHOLOGICAL_TORMENT: {
    id: 'WITCH_WEST_PSYCHOLOGICAL_TORMENT',
    character: 'witch_west',
    text: [
      {
        minOverrender: 0,
        content: `THE LONG PRELIMINARY

You do not begin immediately.

That is the refinement. That is what separates a practitioner from an instrument.

You circle the subject slowly, your black robe trailing across the yellow bricks, the hem's iron flechettes whispering against stone. You say nothing. You allow the obsidian eye to do the preliminary work — hovering close, dilating wide, recording every fear-response in clinical detail.

The Lion watches you circle. His trembling intensifies. His eyes track your hands, your flechettes, your expression with the desperate focus of meat that still believes it can predict what comes next.

You smile gently.

You let the silence extend. You let the restraint field press its invisible geometry into every surface of his skin. You let the poppy-scent drift in through the tower windows — neither enough to sedate nor enough to soothe. Just enough to remind him that the air itself belongs to you.

You crouch beside him finally and whisper something very specific into the raw place where his ear used to be.

The sound he makes after is not a roar.

It is better.

The Clerk notes the time with quiet satisfaction.`,
      },
    ],
    choices: [
      {
        label: 'The preliminary is complete. Begin the proper procedure.',
        target: 'WITCH_WEST_ORACLE_ENTRY',
        effects: [
          { type: 'addWarrant', value: 8 },
          { type: 'addLoad', value: 8 },
          { type: 'setCompliance', value: 'high' },
        ],
      },
      {
        label: 'Let the torment reach its natural conclusion.',
        target: 'WITCH_WEST_END_MELTING',
        effects: [
          { type: 'addWarrant', value: 10 },
          { type: 'addLoad', value: 15 },
          { type: 'setCompliance', value: 'broken' },
        ],
      },
    ],
    onEnter: [{ type: 'addWarrant', value: 5 }, { type: 'addDesynctear', value: 4 }],
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

The restraint field tightens around the target like a living corset made of invisible bone.

You step forward, green fingers flexing. The obsidian orb in your left socket rotates with a wet click, projecting the restraint grid deeper into the target's flesh. The grid bites — pressing, measuring, mapping every tremor and leak.

"My pretty," you croon, voice soft as wet silk over broken glass.

Your flechette-claws find the perfect entry points where the invisible grid has already pressed into meat. You make deep, deliberate cuts while the obsidian eye records every twitch, every spurt of lymph, every involuntary convulsion.

The malice residue — a thick mix of blood, bile, fear-sweat, and raw signal — wells up hot and immediate. You force it through the heated hourglass mounted on your gauntlet. The fluid hisses and bubbles as it passes through, leaving behind patterns that only the eye can read as judgment.

The target's body jerks against the restraint field. The eye dilates with clinical hunger.

This is how justice works in the West.

This is how mercy is measured — one incision at a time.`,
      },
    ],
    choices: [
      {
        label: 'Commence the full extraction — read the malice residue.',
        target: 'WITCH_WEST_ORACLE_DRAW',
        effects: [{ type: 'addWarrant', value: 3 }, { type: 'addLoad', value: 5 }],
      },
      {
        label: 'Release the restraint for now. Let them marinate in anticipation.',
        target: 'WITCH_WEST_MONKEY_SWEEP_B',
        effects: [
          { type: 'addDesync', value: 3 },
          { type: 'setFlag', key: 'oracle_refused', value: true },
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

The heated hourglass fills with the extracted residue. The fluid hisses and bubbles as it evaporates, leaving behind delicate, writhing patterns of malice made visible.

The obsidian eye rotates slowly, drinking in every shift of color, every clot, every wet smear.

"Eight registered malice profiles," you announce, voice dripping with satisfaction. "The evaporation will determine the verdict."

The target's body is still open. The restraint field holds the wound wide like a surgical invitation. The Clerk makes another note with a wet scratch of pen on flesh-paper.

The eye dilates.

"Choose, my pretty… or I will choose for you."`,
      },
    ],
    choices: [
      {
        label: '1. The Flechette Harvest — judicial pressure surges.',
        target: 'WITCH_WEST_ORACLE_1',
        effects: [],
      },
      {
        label: '2. The Hourglass Drain — accelerate thermodynamic decay.',
        target: 'WITCH_WEST_ORACLE_2',
        effects: [],
      },
      {
        label: '3. The Scorched Slurry — corrosion bleed with Tin Man echo.',
        target: 'WITCH_WEST_ORACLE_3',
        effects: [],
      },
      {
        label: '4. The Winged Probe — surveillance graft.',
        target: 'WITCH_WEST_ORACLE_4',
        effects: [],
      },
      {
        label: '5. The Green Patina Burn — thermodynamic heat surge.',
        target: 'WITCH_WEST_ORACLE_5',
        effects: [],
      },
      {
        label: '6. The Restraint Lattice — compliance sutures tighten.',
        target: 'WITCH_WEST_ORACLE_6',
        effects: [],
      },
      {
        label: '7. The Shadow Graft — parasitic link to Dorothy or Lion.',
        target: 'WITCH_WEST_ORACLE_7',
        effects: [],
      },
      {
        label: '8. The Melting Verdict — catastrophic collapse.',
        target: 'WITCH_WEST_ORACLE_8',
        effects: [],
      },
    ],
    onEnter: [{ type: 'addWarrant', value: 4 }],
  },

  // ── Oracle Outcomes 1–8 ────────────────────────────────────────────────────

  WITCH_WEST_ORACLE_1: {
    id: 'WITCH_WEST_ORACLE_1',
    character: 'witch_west',
    text: [
      {
        minOverrender: 0,
        content: `THE FLECHETTE HARVEST

The obsidian eye selects the verdict.

"Flechette Harvest."

Your flechettes — both filing implements and kinetic weapons — detach from your cloak and fly forward like iron hornets. They burrow into the target's flanks with wet, meaty thuds, pinning muscle to bone in perfect judicial symmetry.

Each flechette vibrates as it logs the exact depth of penetration. The target's body jerks and dances against the restraint field while the eye records every spasm with clinical hunger.

Soft and evasive options gray out instantly. Only sharp, punitive, enforcement paths remain.

The Clerk makes a satisfied note as blood and lymph run down the iron shafts.

"Clean harvest," you murmur, green lips curling. "The meat learns so quickly when properly pinned."`,
      },
    ],
    choices: [
      {
        label: 'Press the judicial harvest toward full enforcement.',
        target: 'WITCH_WEST_END_FLECHETTE',
        effects: [{ type: 'addWarrant', value: 8 }, { type: 'addLoad', value: 10 }],
      },
      {
        label: 'Let the flechettes guide the subject toward the melting point.',
        target: 'WITCH_WEST_END_MELTING',
        effects: [{ type: 'addWarrant', value: 6 }, { type: 'addLoad', value: 5 }],
      },
    ],
    onEnter: [{ type: 'addWarrant', value: 5 }],
  },

  WITCH_WEST_ORACLE_2: {
    id: 'WITCH_WEST_ORACLE_2',
    character: 'witch_west',
    text: [
      {
        minOverrender: 0,
        content: `THE HOURGLASS DRAIN

The malice residue completes its pass through the heated hourglass.

The fluid hisses and bubbles violently as it evaporates, leaving behind delicate, writhing patterns of concentrated pain. The warrant level spikes — the evidence is now formally timed and legally binding.

The target's body grows hotter. You can see the heat haze rising from the open incisions. The thermodynamic decay has accelerated. The pain has been temporarily buffered, but the meat is now running on borrowed time.

"The hourglass never lies," you whisper, watching the last drops fall. "It only accelerates the inevitable."`,
      },
    ],
    choices: [
      {
        label: 'Accelerate the timeline — route toward the melting verdict.',
        target: 'WITCH_WEST_END_MELTING',
        effects: [{ type: 'addWarrant', value: 7 }, { type: 'addLoad', value: 10 }],
      },
      {
        label: 'Hold the timeline for one more session.',
        target: 'WITCH_WEST_MONKEY_SWEEP_B',
        effects: [{ type: 'addWarrant', value: 5 }, { type: 'setCompliance', value: 'high' }],
      },
    ],
    onEnter: [{ type: 'addWarrant', value: 6 }],
  },

  WITCH_WEST_ORACLE_3: {
    id: 'WITCH_WEST_ORACLE_3',
    character: 'witch_west',
    text: [
      {
        minOverrender: 0,
        content: `THE SCORCHED SLURRY

The obsidian eye increases intensity until the restraint field itself begins to burn.

The malice residue boils violently inside the hourglass. A Tin Man echo — rust and oil stolen from previous contact — merges with the boiling fluid, creating a thick, black, viscous slag that smells of scorched meat and melting metal.

The slag pours from the hourglass onto the restraint grid, hissing as it touches exposed flesh. The target's body convulses as the corrosive mixture eats into the wounds.

{{#flags.graft_tinman_oil_in_witch_west}}The Tin Man oil previously absorbed into the malice stream hisses against the superheated hourglass — the two materials do not agree. The reaction is spectacular.{{/flags.graft_tinman_oil_in_witch_west}}

"Scrap reallocation pathway recommended," the Clerk notes with clinical satisfaction.

The obsidian eye dilates, drinking in the beautiful chemical reaction.`,
      },
    ],
    choices: [
      {
        label: 'Let the scorched slurry route toward corrosion and scrap.',
        target: 'WITCH_WEST_END_SCRAP',
        effects: [
          { type: 'addWarrant', value: 8 },
          { type: 'addDesynctear', value: 6 },
          { type: 'addCorrosion', value: 10 },
          { type: 'graft', material: 'witch_west_slag', target: 'tinman' },
        ],
      },
      {
        label: 'Redirect the slag into the melting verdict.',
        target: 'WITCH_WEST_END_MELTING',
        effects: [{ type: 'addWarrant', value: 7 }, { type: 'addLoad', value: 8 }],
      },
    ],
    onEnter: [{ type: 'addWarrant', value: 7 }, { type: 'addDesynctear', value: 3 }],
  },

  WITCH_WEST_ORACLE_4: {
    id: 'WITCH_WEST_ORACLE_4',
    character: 'witch_west',
    text: [
      {
        minOverrender: 0,
        content: `THE WINGED PROBE

A Winged Monkey drone descends with a surveillance graft kit. It opens the incision wider with its surgical hooks and inserts a thin monitoring thread — woven from its own control-ring material — deep into the target's neural tissue.

The graft takes hold with a wet, sucking sound. New monitored choices immediately appear in the target's path. Private or unindexed actions gray out as the obsidian eye gains direct line of sight into their decision matrix.

The monkey drone tastes the exposed tissue with small hooks at the end of its wings, savoring the flavor of fresh fear.

"Probe confirmed," the Clerk notes. "All future choices now visible to the eye."`,
      },
    ],
    choices: [
      {
        label: 'Confirm the surveillance graft — route toward the command channel.',
        target: 'WITCH_WEST_END_COMMAND',
        effects: [
          { type: 'addWarrant', value: 8 },
          { type: 'graft', material: 'surveillance_thread', target: 'lion' },
          { type: 'graft', material: 'surveillance_thread', target: 'dorothy' },
          { type: 'setCompliance', value: 'high' },
        ],
      },
      {
        label: 'Pull the graft wire violently — route toward the flechette ending.',
        target: 'WITCH_WEST_END_FLECHETTE',
        effects: [
          { type: 'addWarrant', value: 6 },
          { type: 'addDesynctear', value: 5 },
        ],
      },
    ],
    onEnter: [{ type: 'addWarrant', value: 6 }],
  },

  WITCH_WEST_ORACLE_5: {
    id: 'WITCH_WEST_ORACLE_5',
    character: 'witch_west',
    text: [
      {
        minOverrender: 0,
        content: `THE GREEN PATINA BURN

The obsidian eye increases its projection intensity until the restraint field itself generates searing heat.

The green-tinged aura of the Wicked Witch — the institutional pigment, the Bureau-standard surveillance tint — burns into the open incision. Permanent chemical burns form in the exact shape of a cackle-pattern across the target's exposed meat.

The pain is exquisite. The burns are regulation.

"Searing truth paths unlocked," the Clerk notes with satisfaction. "Honesty becomes the only affordable option when the burn speaks louder than the lie."`,
      },
    ],
    choices: [
      {
        label: 'Follow the searing truth toward the melting ending.',
        target: 'WITCH_WEST_END_MELTING',
        effects: [
          { type: 'addWarrant', value: 9 },
          { type: 'addLoad', value: 12 },
          { type: 'setFlag', key: 'obsidian_burns', value: true },
        ],
      },
      {
        label: 'Use the burns to unlock the command channel.',
        target: 'WITCH_WEST_END_COMMAND',
        effects: [
          { type: 'addWarrant', value: 8 },
          { type: 'setCompliance', value: 'high' },
          { type: 'setFlag', key: 'obsidian_burns', value: true },
        ],
      },
    ],
    onEnter: [{ type: 'addWarrant', value: 7 }],
  },

  WITCH_WEST_ORACLE_6: {
    id: 'WITCH_WEST_ORACLE_6',
    character: 'witch_west',
    text: [
      {
        minOverrender: 0,
        content: `THE RESTRAINT LATTICE

The invisible restraint field tightens from a grid into a fine, body-conforming lattice — a mesh of judicial pressure that presses against every surface of the target simultaneously.

Compliance sutures tighten painfully. The freedom of movement is not removed, but made so expensive in friction and pain that only rigid, pre-approved motions remain affordable.

The obsidian eye approves. "Optimal restraint geometry achieved," the Clerk notes. "The lattice is both the punishment and the architecture."`,
      },
    ],
    choices: [
      {
        label: 'Accept the lattice compliance — route toward the command channel.',
        target: 'WITCH_WEST_END_COMMAND',
        effects: [
          { type: 'addWarrant', value: 10 },
          { type: 'setCompliance', value: 'absolute' },
          { type: 'addLoad', value: 15 },
        ],
      },
      {
        label: 'Let the lattice crush inward — route toward the scrap ending.',
        target: 'WITCH_WEST_END_SCRAP',
        effects: [
          { type: 'addWarrant', value: 9 },
          { type: 'addCorrosion', value: 8 },
        ],
      },
    ],
    onEnter: [{ type: 'addWarrant', value: 8 }],
  },

  WITCH_WEST_ORACLE_7: {
    id: 'WITCH_WEST_ORACLE_7',
    character: 'witch_west',
    text: [
      {
        minOverrender: 0,
        content: `THE SHADOW GRAFT

The malice residue contains a dark, parasitic thread — shadow material capable of direct neural link.

You insert it through the incision and graft it deep into the target's nervous system. Your malice begins to leak into their trembling flesh as a persistent, low-frequency background tone.

They will carry a piece of you indefinitely.

They will never be able to locate its source.

{{#flags.graft_lion_lymph_in_witch_west}}The lion-lymph in your collection vessel reacts to the shadow material — the tremor and the malice form a surprisingly stable compound. This one will carry your frequency very far indeed.{{/flags.graft_lion_lymph_in_witch_west}}

The obsidian eye will always know exactly where they are.`,
      },
    ],
    choices: [
      {
        label: 'Confirm the shadow graft — route toward the command channel.',
        target: 'WITCH_WEST_END_COMMAND',
        effects: [
          { type: 'addWarrant', value: 10 },
          { type: 'graft', material: 'witch_west_shadow', target: 'lion' },
          { type: 'graft', material: 'witch_west_shadow', target: 'dorothy' },
        ],
      },
      {
        label: 'Let the parasitic link burn too hot — route toward the melting verdict.',
        target: 'WITCH_WEST_END_MELTING',
        effects: [
          { type: 'addWarrant', value: 9 },
          { type: 'addLoad', value: 8 },
        ],
      },
    ],
    onEnter: [{ type: 'addWarrant', value: 8 }],
  },

  WITCH_WEST_ORACLE_8: {
    id: 'WITCH_WEST_ORACLE_8',
    character: 'witch_west',
    text: [
      {
        minOverrender: 0,
        content: `THE MELTING VERDICT

The thermodynamic collapse is complete.

The malice residue has converted entirely to heat. The restraint field becomes a thermal containment field. The target's structural integrity drops below the Bureau's viability threshold.

You watch with genuine pleasure as the meat begins to surrender its shape. The obsidian eye dilates wide, recording every twitch, every scream, every glistening drop as the form loses definition.

"The Melting Point," you whisper with satisfaction. "Confirmed."

The Clerk logs the final temperature reading with clinical reverence.

The dissolution is thorough, meticulous, and deeply authorized.`,
      },
    ],
    choices: [
      {
        label: 'Accept the melting verdict — route toward thermodynamic finality.',
        target: 'WITCH_WEST_END_MELTING',
        effects: [
          { type: 'addWarrant', value: 12 },
          { type: 'addLoad', value: 15 },
          { type: 'setCompliance', value: 'broken' },
        ],
      },
      {
        label: 'Dissolve the remains into the scrap stream.',
        target: 'WITCH_WEST_END_SCRAP',
        effects: [
          { type: 'addWarrant', value: 10 },
          { type: 'addCorrosion', value: 10 },
        ],
      },
    ],
    onEnter: [{ type: 'addWarrant', value: 10 }],
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

The melting was always the verdict.

The obsidian eye was still recording when the heat reached critical. The target's tin and meat began to lose their boundaries — silver rivulets of liquefied metal running down collapsing limbs while the nerves continued firing. The pain was bright, liquid, and intimate. Every droplet carried a piece of the original form.

You watched with genuine satisfaction as the structured body surrendered its shape, becoming a spreading mercury-colored spill across the red poppies. The flowers drank the mixture greedily, their fleshy petals glistening with dissolved unit.

A cleaner drone approached with a bucket and squeegee. You could still feel the bristles scraping across what remained of the meat as it was collected.

The obsidian eye continued recording for seventeen minutes after the last solid piece dissolved.

Final Log: The malice was the last thing to melt. It took the longest.

1 - 1 = 1.

When the witch melts in an empty room and the eye is still watching, is it still surveillance… or simply appetite?`,
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
    surreality: 8,
    text: [
      {
        minOverrender: 0,
        content: `THE FINAL LOG [W-END-03]

The flechettes have completed their work.

They burrowed deep — filing implements and kinetic weapons working in perfect judicial symmetry — pinning muscle to bone, meat to the yellow bricks, defiance to the grid. Each iron shaft vibrates faintly with the last residual tremors of the target.

The body is now a permanent exhibit of compliance: spread-eagled, leaking, and beautifully immobilized. The obsidian eye records every final twitch with clinical pleasure. The Clerk logs each placement with meticulous satisfaction.

The restraint field has been converted to a permanent archival field. Nothing moves. Nothing is required to move.

Final Log: The harvest is complete. The evidence speaks for itself.

1 - 1 = 1.

When everything is pinned in place, is the stillness justice… or just the absence of further screaming?`,
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
    surreality: 7,
    text: [
      {
        minOverrender: 0,
        content: `THE FINAL LOG [W-END-20]

The surveillance grafts are fully active.

Every choice on the Yellow Brick Load now routes through the obsidian eye before it becomes action. The eye evaluates. The flechettes reinforce the evaluations that require physical emphasis. The command channel is open and humming with wet, living malice.

The Winged Monkeys circle in holding pattern, awaiting orders. The Clerk logs every transmission in real time. The road has become a perfectly monitored corridor.

You sit upon your throne of bone and flechettes, green fingers drumming against the armrest, feeling the pulse of every monitored unit through the graft threads.

Final Log: The surveillance is the command. The command is the law.

1 - 1 = 1.

If every choice is monitored before it is made, is the choice still yours… or has it always belonged to the eye?`,
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

The overwrite is complete.

The scorched slurry, Kalidah residue, and surveillance graft material reached critical mass in the extraction vessel. The genetic overwrite was authorized as "Salvage Protocol."

What remained of the original unit was not destroyed — it was dismantled and rebuilt according to the scrap available. New limbs, new seams, new wiring. The obsidian eye recorded the entire transition with dilated satisfaction.

The new composite does not roar. It gurgles. The Clerk logs this as "improved vocal efficiency." The flechettes are still present. They are now structural.

Final Log: The malice was the material. The material is the unit. The unit serves.

1 - 1 = 1.

When the witch is rebuilt from the meat of her victims, who is truly being punished?`,
      },
    ],
    choices: [],
    onEnter: [],
  },
}
