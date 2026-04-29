/**
 * YELLOW BRICK LOAD — Wicked Witch of the West Branch Passages
 * Character: Witch West (Authority Figure / Surveillance Operator)
 *
 * All non-ending passages (branches, decisions, oracle nodes).
 * Endings are in witch_west_endings.js.
 */

export const witchWestStubPassages = {
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
          { type: 'addMalice', value: 8 },
        ],
      },
      {
        label: 'Perform the ritual directly — summon the Obsidian Eye.',
        target: 'WITCH_WEST_ORACLE_ENTRY',
        effects: [
          { type: 'addWarrant', value: 8 },
          { type: 'addMalice', value: 10 },
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
          { type: 'addMalice', value: 8 },
        ],
      },
      {
        label: 'Activate the Poppy Field dampeners. Let them come to you willingly.',
        target: 'WITCH_WEST_POPPY_BUFFER',
        effects: [
          { type: 'addWarrant', value: 3 },
          { type: 'addMalice', value: 10 },
        ],
      },
      {
        label: 'Personally descend. You want to see the meat up close.',
        target: 'WITCH_WEST_FIELD_CONFRONTATION',
        effects: [
          { type: 'addWarrant', value: 7 },
          { type: 'addMalice', value: 12 },
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
      {
        label: 'Observe the aerial deployment from altitude — let the sweep run its course.',
        target: 'WITCH_WEST_PATH_MONKEYS',
        effects: [
          { type: 'addWarrant', value: 4 },
          { type: 'addMalice', value: 6 },
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

You crouch gracefully, tilting his chin upward with surprising gentleness.

"Oh, look at you," you whisper, voice soft as velvet over broken glass. "Look at all that lovely fear. So much wasted vibration. So much untapped potential."

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
        label: 'Pick who gets the first incision, then begin the Obsidian Eye ritual.',
        target: 'WITCH_WEST_SELECT_TARGET',
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
      {
        label: 'The Clerk flags the warrant status — review the audit logs.',
        target: 'WITCH_WEST_BUREAU_LOG_CHECK',
        effects: [
          { type: 'addWarrant', value: 2 },
        ],
      },
    ],
    onEnter: [{ type: 'addWarrant', value: 4 }, { type: 'triggerOracle' }],
  },

  WITCH_WEST_SELECT_TARGET: {
    id: 'WITCH_WEST_SELECT_TARGET',
    character: 'witch_west',
    text: [{ minOverrender: 0, content: `THE FIRST INCISION

The restraint grid blooms across the road and catches four viable subjects.

You drag one claw through the air and their names appear as glowing enforcement tags. This session will be personal.

Select the body that takes the blade first.` }],
    choices: [
      {
        label: 'Lion',
        target: 'WITCH_WEST_ORACLE_ENTRY_LION',
        effects: [{ type: 'setFlag', key: 'witch_west_target_name', value: 'Lion' }],
      },
      {
        label: 'Dorothy',
        target: 'WITCH_WEST_ORACLE_ENTRY_DOROTHY',
        effects: [{ type: 'setFlag', key: 'witch_west_target_name', value: 'Dorothy' }],
      },
      {
        label: 'Tin Man',
        target: 'WITCH_WEST_ORACLE_ENTRY_TINMAN',
        effects: [{ type: 'setFlag', key: 'witch_west_target_name', value: 'Tin Man' }],
      },
      {
        label: 'Scarecrow',
        target: 'WITCH_WEST_ORACLE_ENTRY_SCARECROW',
        effects: [{ type: 'setFlag', key: 'witch_west_target_name', value: 'Scarecrow' }],
      },
    ],
    onEnter: [],
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
      {
        label: "The eye's feed begins bleeding into your own vision — something shifts.",
        target: 'WITCH_WEST_SIGNAL_BLEED',
        effects: [
          { type: 'addDesync', value: 5 },
          { type: 'addLoad', value: 6 },
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
      {
        label: 'Monitor the kinetic audit in granular detail.',
        target: 'WITCH_WEST_MID_AIR_HARVEST_DETAIL',
        effects: [
          { type: 'addWarrant', value: 6 },
          { type: 'addLoad', value: 4 },
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

The restraint table is built from compressed fear and iron flechette-rails. The calibrated crucible hangs over the drain aperture, its glass walls etched with the Bureau's eight malice profiles in fine, surgical script. The restraint field generator hums in the walls, its invisible lattice already calibrated to the subject's mass and resistance threshold.

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
      {
        label: 'The Clerk signals a compliance concern — attend to the warning.',
        target: 'WITCH_WEST_CLERK_INTERLUDE',
        effects: [
          { type: 'addWarrant', value: 3 },
        ],
      },
      {
        label: 'Walk the perimeter — let the Winkie chant stabilize the ritual chamber.',
        target: 'WITCH_WEST_WINKIE_CORRIDOR',
        effects: [
          { type: 'addLoad', value: 3 },
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
      {
        label: 'Press the calibrated silence further — deliver the full audit.',
        target: 'WITCH_WEST_TORMENT_DETAIL',
        effects: [
          { type: 'addWarrant', value: 7 },
          { type: 'addMalice', value: 5 },
        ],
      },
    ],
    onEnter: [{ type: 'addWarrant', value: 5 }, { type: 'addDesynctear', value: 4 }],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // OBSIDIAN EYE ORACLE — THE OBSIDIAN MATRON
  // ─────────────────────────────────────────────────────────────────────────

  WITCH_WEST_ORACLE_ENTRY_LION: {
    id: 'WITCH_WEST_ORACLE_ENTRY_LION',
    character: 'witch_west',
    text: [{ minOverrender: 0, content: `THE MONITORED INCISION BEGINS — LION

The Lion is forced onto his side and strapped against yellow brick. Every breath rattles through his chest like a cracked drum.

Your claws part fur and skin along the sternum. The restraint mesh keeps the wound open while the obsidian eye records each tremor.

You whisper into his ear as the first line of blood runs warm: "Courage looks different under glass."

The session is live. Every decision from here is evidence.` }],
    choices: [{ label: 'Commence the full extraction — read the malice residue.', target: 'WITCH_WEST_ORACLE_DRAW', effects: [{ type: 'addWarrant', value: 3 }, { type: 'addLoad', value: 5 }] }],
    onEnter: [],
  },

  WITCH_WEST_ORACLE_ENTRY_DOROTHY: {
    id: 'WITCH_WEST_ORACLE_ENTRY_DOROTHY',
    character: 'witch_west',
    text: [{ minOverrender: 0, content: `THE MONITORED INCISION BEGINS — DOROTHY

Dorothy fights the restraints until her wrists bleed. The grid recalibrates and tightens.

You split the fabric at her midline and score a measured seam beneath it, opening just enough for the eye to map pulse, fear, and displacement drift.

"Still trying to go home?" you ask softly. "Let's inventory what home cost you."

The session is live. Every decision from here is evidence.` }],
    choices: [{ label: 'Commence the full extraction — read the malice residue.', target: 'WITCH_WEST_ORACLE_DRAW', effects: [{ type: 'addWarrant', value: 3 }, { type: 'addLoad', value: 5 }] }],
    onEnter: [],
  },

  WITCH_WEST_ORACLE_ENTRY_TINMAN: {
    id: 'WITCH_WEST_ORACLE_ENTRY_TINMAN',
    character: 'witch_west',
    text: [{ minOverrender: 0, content: `THE MONITORED INCISION BEGINS — TIN MAN

The Tin Man's plating is locked in place by magnetic clamps. Rust flakes drift down like metallic snow.

You notch open a seam at the torso joint, then pry until oil beads up through the gap. The restraint mesh anchors each plate at the exact angle needed for observation.

"Listen to that," you murmur as metal groans. "A perfect little confession."

The session is live. Every decision from here is evidence.` }],
    choices: [{ label: 'Commence the full extraction — read the malice residue.', target: 'WITCH_WEST_ORACLE_DRAW', effects: [{ type: 'addWarrant', value: 3 }, { type: 'addLoad', value: 5 }] }],
    onEnter: [],
  },

  WITCH_WEST_ORACLE_ENTRY_SCARECROW: {
    id: 'WITCH_WEST_ORACLE_ENTRY_SCARECROW',
    character: 'witch_west',
    text: [{ minOverrender: 0, content: `THE MONITORED INCISION BEGINS — SCARECROW

The Scarecrow twists in the field, straw spilling from old stitchwork as the mesh pins each limb.

You cut along the torso seam, peel back burlap, and expose the layered stuffing where signal echoes hide.

"Let's see what passes for thought in here," you say, almost kindly.

The session is live. Every decision from here is evidence.` }],
    choices: [{ label: 'Commence the full extraction — read the malice residue.', target: 'WITCH_WEST_ORACLE_DRAW', effects: [{ type: 'addWarrant', value: 3 }, { type: 'addLoad', value: 5 }] }],
    onEnter: [],
  },

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
        effects: [{ type: 'addMalice', value: 5 }, { type: 'addWarrant', value: 3 }],
      },
      {
        label: 'Release the restraint for now. Let them marinate in anticipation.',
        target: 'WITCH_WEST_MONKEY_SWEEP_B',
        effects: [
          { type: 'addDesync', value: 3 },
          { type: 'setFlag', key: 'oracle_refused', value: true },
        ],
      },
      {
        label: "The target's vibration surges — the restraint field flickers and cracks.",
        target: 'WITCH_WEST_GRID_FAILURE',
        effects: [
          { type: 'addDesync', value: 4 },
          { type: 'addLoad', value: 8 },
        ],
      },
    ],
    onEnter: [{ type: 'addMalice', value: 4 }],
  },

  WITCH_WEST_ORACLE_DRAW: {
    id: 'WITCH_WEST_ORACLE_DRAW',
    character: 'witch_west',
    text: [
      {
        minOverrender: 0,
        content: `THE MALICE READING

The calibrated crucible fills with the extracted residue. The fluid hisses and bubbles as it evaporates, leaving behind delicate, writhing patterns of malice made visible.

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
    onEnter: [{ type: 'addMalice', value: 6 }, { type: 'addWarrant', value: 4 }],
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
        effects: [{ type: 'addMalice', value: 8 }, { type: 'addWarrant', value: 6 }],
      },
      {
        label: 'Let the flechettes guide the subject toward the melting point.',
        target: 'WITCH_WEST_END_MELTING',
        effects: [{ type: 'addMalice', value: 6 }, { type: 'addThermal', value: 5 }],
      },
    ],
    onEnter: [{ type: 'addMalice', value: 5 }],
  },

  WITCH_WEST_ORACLE_2: {
    id: 'WITCH_WEST_ORACLE_2',
    character: 'witch_west',
    text: [
      {
        minOverrender: 0,
        content: `THE HOURGLASS DRAIN

The malice residue completes its pass through the calibrated crucible.

The fluid hisses and bubbles violently as it evaporates, leaving behind delicate, writhing patterns of concentrated pain. The warrant level spikes — the evidence is now formally timed and legally binding.

The target's body grows hotter. You can see the heat haze rising from the open incisions. The thermodynamic decay has accelerated. The pain has been temporarily buffered, but the meat is now running on borrowed time.

"The crucible never lies," you whisper, watching the last drops fall. "It only accelerates the inevitable."`,
      },
    ],
    choices: [
      {
        label: 'Accelerate the timeline — route toward the melting verdict.',
        target: 'WITCH_WEST_END_MELTING',
        effects: [{ type: 'addMalice', value: 7 }, { type: 'addThermal', value: 10 }],
      },
      {
        label: 'Hold the timeline for one more session.',
        target: 'WITCH_WEST_MONKEY_SWEEP_B',
        effects: [{ type: 'addMalice', value: 5 }, { type: 'addWarrant', value: 6 }],
      },
    ],
    onEnter: [{ type: 'addMalice', value: 6 }],
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

The slag pours from the crucible onto the restraint grid, hissing as it touches exposed flesh. The target's body convulses as the corrosive mixture eats into the wounds.

{{#flags.graft_tinman_oil_in_witch_west}}The Tin Man oil previously absorbed into the malice stream hisses against the supercalibrated crucible — the two materials do not agree. The reaction is spectacular.{{/flags.graft_tinman_oil_in_witch_west}}

"Scrap reallocation pathway recommended," the Clerk notes with clinical satisfaction.

The obsidian eye dilates, drinking in the beautiful chemical reaction.`,
      },
    ],
    choices: [
      {
        label: 'Let the scorched slurry route toward corrosion and scrap.',
        target: 'WITCH_WEST_END_SCRAP',
        effects: [
          { type: 'addMalice', value: 8 },
          { type: 'addDesynctear', value: 6 },
          { type: 'addCorrosion', value: 10 },
          { type: 'graft', material: 'witch_west_slag', target: 'tinman' },
        ],
      },
      {
        label: 'Redirect the slag into the melting verdict.',
        target: 'WITCH_WEST_END_MELTING',
        effects: [{ type: 'addMalice', value: 7 }, { type: 'addThermal', value: 8 }],
      },
    ],
    onEnter: [{ type: 'addMalice', value: 7 }, { type: 'addDesynctear', value: 3 }],
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
          { type: 'addMalice', value: 8 },
          { type: 'graft', material: 'surveillance_thread', target: 'lion' },
          { type: 'graft', material: 'surveillance_thread', target: 'dorothy' },
          { type: 'setCompliance', value: 'high' },
        ],
      },
      {
        label: 'Pull the graft wire violently — route toward the flechette ending.',
        target: 'WITCH_WEST_END_FLECHETTE',
        effects: [
          { type: 'addMalice', value: 6 },
          { type: 'addDesynctear', value: 5 },
        ],
      },
    ],
    onEnter: [{ type: 'addMalice', value: 6 }],
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
          { type: 'addMalice', value: 9 },
          { type: 'addThermal', value: 12 },
          { type: 'setFlag', key: 'obsidian_burns', value: true },
        ],
      },
      {
        label: 'Use the burns to unlock the command channel.',
        target: 'WITCH_WEST_END_COMMAND',
        effects: [
          { type: 'addMalice', value: 8 },
          { type: 'setCompliance', value: 'high' },
          { type: 'setFlag', key: 'obsidian_burns', value: true },
        ],
      },
    ],
    onEnter: [{ type: 'addMalice', value: 7 }],
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
          { type: 'addMalice', value: 10 },
          { type: 'setCompliance', value: 'absolute' },
          { type: 'addLoad', value: 15 },
        ],
      },
      {
        label: 'Let the lattice crush inward — route toward the scrap ending.',
        target: 'WITCH_WEST_END_SCRAP',
        effects: [
          { type: 'addMalice', value: 9 },
          { type: 'addCorrosion', value: 8 },
        ],
      },
    ],
    onEnter: [{ type: 'addMalice', value: 8 }],
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
          { type: 'addMalice', value: 10 },
          { type: 'graft', material: 'witch_west_shadow', target: 'lion' },
          { type: 'graft', material: 'witch_west_shadow', target: 'dorothy' },
        ],
      },
      {
        label: 'Let the parasitic link burn too hot — route toward the melting verdict.',
        target: 'WITCH_WEST_END_MELTING',
        effects: [
          { type: 'addMalice', value: 9 },
          { type: 'addThermal', value: 8 },
        ],
      },
    ],
    onEnter: [{ type: 'addMalice', value: 8 }],
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
          { type: 'addMalice', value: 12 },
          { type: 'addThermal', value: 15 },
          { type: 'setCompliance', value: 'broken' },
        ],
      },
      {
        label: 'Dissolve the remains into the scrap stream.',
        target: 'WITCH_WEST_END_SCRAP',
        effects: [
          { type: 'addMalice', value: 10 },
          { type: 'addCorrosion', value: 10 },
        ],
      },
      {
        label: 'Refuse the verdict — let the system recycle you into the dark.',
        target: 'WITCH_WEST_UNLIT_BASEMENT',
        effects: [
          { type: 'addDesync', value: 15 },
          { type: 'setFlag', key: 'unindexed', value: true },
        ],
      },
    ],
    onEnter: [{ type: 'addMalice', value: 10 }],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // NEW PASSAGES FROM EXPANSION
  // ─────────────────────────────────────────────────────────────────────────

  WITCH_WEST_TORMENT_DETAIL: {
    id: 'WITCH_WEST_TORMENT_DETAIL',
    character: 'witch_west',
    text: [
      {
        minOverrender: 0,
        content: `THE CALIBRATED SILENCE
You lean in close to the Lion's ear. The smell of his fear is a high-frequency vibration that makes your teeth ache with a pleasant, electric hunger.
"Do you know what the Bureau calls a King without a kingdom?" you whisper. Your breath is the scent of ozone and formaldehyde. "They call him a *redundant asset*. They call him *excess inventory*."
You run a long, green-stained nail over the spot where his heart thumps—a frantic, irregular beat against his ribs. 1-1=1. One heartbeat, one cage.
"I'm not going to kill you," you croon. "I'm going to index you. I'm going to map every stutter in your pulse until your cowardice is the only thing the system remembers."
The obsidian eye hovers inches from his wide, watering eye. It records the contraction of his pupil. It logs the exact milligram of salt in his tear.
The Lion makes a sound—a soft, broken whine that would be pathetic if it weren't so mathematically perfect.
"There," you say, standing up. "That is the sound of a successful audit."`,
      },
    ],
    choices: [
      {
        label: 'Begin the Formal Extraction (Obsidian Eye Ritual).',
        target: 'WITCH_WEST_ORACLE_ENTRY',
        effects: [
          { type: 'addWarrant', value: 5 },
          { type: 'addLoad', value: 5 },
          { type: 'setCompliance', value: 'high' },
        ],
      },
      {
        label: 'Signal the Monkeys to begin "The Scrap Reallocation."',
        target: 'WITCH_WEST_END_SCRAP',
        effects: [
          { type: 'addWarrant', value: 10 },
          { type: 'setCompliance', value: 'broken' },
        ],
      },
    ],
    onEnter: [{ type: 'triggerOracle' }],
  },

  WITCH_WEST_MID_AIR_HARVEST_DETAIL: {
    id: 'WITCH_WEST_MID_AIR_HARVEST_DETAIL',
    character: 'witch_west',
    text: [
      {
        minOverrender: 0,
        content: `THE KINETIC AUDIT
Wind howls through the control rings of your Winged Monkeys as they bank hard toward the tower. The Lion is a heavy, thrashing weight between them, suspended by iron flechette-cables that bite deeper with every struggle.
The lead Monkey—Unit 734—reaches down with a surgical claw. It doesn't strike; it *samples*.
A strip of fur and meat is peeled away at 400 feet. The Lion's scream is instantly shredded by the gale, reduced to a data-point on your monitor. The obsidian eye, tracking from the battlement, filters out the wind noise to focus on the wet, rhythmic thumping of his exposed muscle.
[ SYSTEM NOTIFICATION: PRELIMINARY DATA GATHERED ]
[ ASSET CONDITION: DEGRADED ]
[ RECLAMATION POTENTIAL: OPTIMAL ]
You watch the red poppies below blur into a smear of judicial pigment. By the time they land, he won't be a guest. He will be a kit of parts.`,
      },
    ],
    choices: [
      {
        label: 'Receive the parts in the Ritual Chamber.',
        target: 'WITCH_WEST_TOWER_PREP',
        effects: [
          { type: 'addWarrant', value: 4 },
          { type: 'addLoad', value: 6 },
        ],
      },
    ],
    onEnter: [],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // INTERCONNECTING STUB: THE CLERK'S AUDIT
  // ─────────────────────────────────────────────────────────────────────────

  WITCH_WEST_CLERK_INTERLUDE: {
    id: 'WITCH_WEST_CLERK_INTERLUDE',
    character: 'witch_west',
    text: [
      {
        minOverrender: 0,
        content: `THE LOGGING FRICTION
The Bureau Clerk—a spindly thing made of carbon paper and calcified ink—scratches a nib across a sheet of the Lion's dried skin.
"Mistress," the Clerk wheezes, "the Warrant Level is nearing a critical threshold. If we continue the extraction without a formal verdict, the signal may bleed into the Unlit Basement. We risk a *Ghost Event*."
The obsidian eye pulses a deep, rhythmic violet. You feel the weight of the Bureau's eyes on your own green neck. They don't care about the Lion; they care about the *paperwork* of his disappearance.`,
      },
    ],
    choices: [
      {
        label: 'Force the verdict now — Summon the Obsidian Matron.',
        target: 'WITCH_WEST_ORACLE_ENTRY',
        effects: [{ type: 'addWarrant', value: 10 }],
      },
      {
        label: 'Ignore the Clerk. Proceed with psychological pressure.',
        target: 'WITCH_WEST_PSYCHOLOGICAL_TORMENT',
        effects: [{ type: 'addDesync', value: 5 }, { type: 'addLoad', value: 5 }],
      },
    ],
    onEnter: [],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // INTERCONNECTING STUB: THE RESTRAINT FIELD FAILURE
  // ─────────────────────────────────────────────────────────────────────────

  WITCH_WEST_GRID_FAILURE: {
    id: 'WITCH_WEST_GRID_FAILURE',
    character: 'witch_west',
    text: [
      {
        minOverrender: 0,
        content: `SIGNAL LEAK
The obsidian eye flickers. A surge of Vibration from the Lion—or perhaps a neural spike from the Scarecrow—cracks the restraint lattice.
For a second, the tower smells of ozone and panic. The prisoners aren't just meat; they are *conductors*. Their collective fear is feeding back into the tower's circuitry.
"Stabilize the load!" you shriek at the monkeys, but they are already clutching their iron head-rings, shrieking in digital agony.
The system is hungry. If you don't feed it a conclusion soon, it will start eating the operator.`,
      },
    ],
    choices: [
      {
        label: 'Sacrifice a Winged Monkey to ground the signal.',
        target: 'WITCH_WEST_MONKEY_SWEEP_B',
        effects: [{ type: 'addWarrant', value: -2 }, { type: 'addLoad', value: 10 }],
      },
      {
        label: 'Direct the surge into the target — The Melting Point.',
        target: 'WITCH_WEST_END_MELTING',
        effects: [{ type: 'setCompliance', value: 'broken' }],
      },
    ],
    onEnter: [{ type: 'triggerOracle' }],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // THE CENTRAL HUB: THE OBSIDIAN COMMAND DECK
  // ─────────────────────────────────────────────────────────────────────────

  WITCH_WEST_COMMAND_DECK: {
    id: 'WITCH_WEST_COMMAND_DECK',
    character: 'witch_west',
    text: [
      {
        minOverrender: 0,
        content: `THE WESTERN EYE - COMMAND INTERFACE
You stand at the center of the tower. The obsidian eye is docked in the wall, displaying a quad-split feed of the Yellow Brick Load.
[ STATUS: ACTIVE AUDIT ]
[ ASSETS TRACKED: LION, TINMAN, SCARECROW, DOROTHY ]
[ SYSTEM NOISE: {{load}}% ]
[ JUDICIAL AUTHORITY: {{warrantLevel}} ]
The air is thin and tastes of static. The Clerk stands behind you, a living tally-sheet waiting for your next command. The target is in the net, but the extraction is not yet legal. You must build the case—layer by layer, choice by choice.`,
      },
    ],
    choices: [
      {
        label: 'Access AERIAL FEED: Direct the Winged Monkeys.',
        target: 'WITCH_WEST_MONKEY_MANAGEMENT',
        effects: [{ type: 'addLoad', value: 1 }],
      },
      {
        label: 'Access FIELD FEED: Adjust the Poppy Dampeners.',
        target: 'WITCH_WEST_POPPY_CALIBRATION',
        effects: [{ type: 'addWarrant', value: 1 }],
      },
      {
        label: "Access INTERNAL FEED: Audit the target's biometric leak.",
        target: 'WITCH_WEST_OBSIDIAN_VIEW',
        effects: [{ type: 'addDesync', value: 2 }],
      },
      {
        label: 'Initialize Ritual: "The Obsidian Matron".',
        target: 'WITCH_WEST_ORACLE_ENTRY',
        effects: [],
      },
    ],
    onEnter: [],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // REPEATABLE LOOP: MONKEY MANAGEMENT
  // ─────────────────────────────────────────────────────────────────────────

  WITCH_WEST_MONKEY_MANAGEMENT: {
    id: 'WITCH_WEST_MONKEY_MANAGEMENT',
    character: 'witch_west',
    text: [
      {
        minOverrender: 0,
        content: `AERIAL SUB-ROUTINE
The Winged Monkeys are circling the target. You can see the Lion's heat signature through their grafted optics—a pulsing, erratic orange.
"Unit 734," you speak into the grate. "Descend to fifty feet. Snip a sample of the mane. Do not engage in full reclamation yet. We need more data on the tremor."`,
      },
    ],
    choices: [
      {
        label: 'Order a "Kinetic Brush-By" (Increase Load).',
        target: 'WITCH_WEST_COMMAND_DECK',
        effects: [{ type: 'addLoad', value: 3 }, { type: 'setFlag', key: 'mane_sampled', value: true }],
      },
      {
        label: 'Order "Silent Hover" (Increase Warrant).',
        target: 'WITCH_WEST_COMMAND_DECK',
        effects: [{ type: 'addWarrant', value: 2 }],
      },
      {
        label: 'Order "Aggressive Shriek" (Stress Test).',
        target: 'WITCH_WEST_ORACLE_ENTRY',
        effects: [{ type: 'addVibration', value: 5 }],
      },
    ],
    onEnter: [],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // REPEATABLE LOOP: POPPY CALIBRATION
  // ─────────────────────────────────────────────────────────────────────────

  WITCH_WEST_POPPY_CALIBRATION: {
    id: 'WITCH_WEST_POPPY_CALIBRATION',
    character: 'witch_west',
    text: [
      {
        minOverrender: 0,
        content: `THE PHARMACEUTICAL DIAL
You adjust the chemical output of the field. The red petals below begin to weep a thicker, more opaque resin.
"The girl is still moving too fast," the Clerk notes. "Her signal is resisting the buffer."`,
      },
    ],
    choices: [
      {
        label: 'Flood the Sector: 50% Dosage.',
        target: 'WITCH_WEST_COMMAND_DECK',
        effects: [{ type: 'addWarrant', value: 3 }, { type: 'addLoad', value: 2 }],
      },
      {
        label: 'Pulse the Field: Create a "Lullaby Spike".',
        target: 'WITCH_WEST_COMMAND_DECK',
        effects: [{ type: 'addDesync', value: 4 }],
      },
    ],
    onEnter: [],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // THE INTERRUPT: BUREAU LOG-CHECK
  // ─────────────────────────────────────────────────────────────────────────

  WITCH_WEST_BUREAU_LOG_CHECK: {
    id: 'WITCH_WEST_BUREAU_LOG_CHECK',
    character: 'witch_west',
    text: [
      {
        minOverrender: 0,
        content: `INTERRUPT: ADMINISTRATIVE REVIEW
The Clerk slams a heavy ledger onto the command console.
"Mistress, you have performed twelve consecutive unindexed interactions. The Bureau requires a formal justification for the delay. Are you auditing... or are you playing with the meat?"`,
      },
    ],
    choices: [
      {
        label: '"It is a Judicial Necessity." (Bribe the Clerk with Load).',
        target: 'WITCH_WEST_COMMAND_DECK',
        effects: [{ type: 'addLoad', value: 10 }],
      },
      {
        label: '"The target is non-compliant." (Increase Warrant).',
        target: 'WITCH_WEST_COMMAND_DECK',
        effects: [{ type: 'addWarrant', value: 5 }],
      },
    ],
    onEnter: [],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // THE EXTENDED HUB: THE OBSIDIAN COMMAND DECK (V2)
  // ─────────────────────────────────────────────────────────────────────────

  WITCH_WEST_COMMAND_DECK_V2: {
    id: 'WITCH_WEST_COMMAND_DECK_V2',
    character: 'witch_west',
    text: [
      {
        minOverrender: 0,
        content: `THE WESTERN EYE - DEEP AUDIT INTERFACE
The tower hums. It is the sound of a thousand flechettes vibrating in their racks. The obsidian eye is no longer a window; it is a surgical tool.
[ SYSTEM STATS ]
 * WARRANT LEVEL: {{warrantLevel}} / 30
 * SYSTEM LOAD: {{load}}%
 * CRUCIBLE SATURATION: {{saturation}}%
 * ASSET STATUS: [ {{flags.asset_condition}} ]
The Lion is pinned. The Scarecrow is unspooling. The Tin Man is seized. You are the operator. Every click of your green fingers on the bone-keys re-indexes reality.
"Mistress," the Clerk whispers, "the data is pooling. Shall we refine the residue or continue the harvest?"`,
      },
    ],
    choices: [
      {
        label: "BIOMETRICS: Access the Lion's Tremor-Log.",
        target: 'WITCH_WEST_LION_AUDIT_HUB',
        effects: [{ type: 'addLoad', value: 2 }],
      },
      {
        label: 'SURVEILLANCE: Deploy "Eye-on-a-String" probes into the field.',
        target: 'WITCH_WEST_OBSIDIAN_VIEW',
        effects: [{ type: 'addWarrant', value: 3 }],
      },
      {
        label: 'PHARMACOLOGY: Refine the Poppy Resin in the crucible.',
        target: 'WITCH_WEST_POPPY_BUFFER',
        effects: [{ type: 'addSaturation', value: 10 }],
      },
      {
        label: 'ADMINISTRATION: File a "Pre-emptive Deletion" warrant.',
        target: 'WITCH_WEST_BUREAU_FILING',
        effects: [{ type: 'addWarrant', value: 5 }, { type: 'addLoad', value: 5 }],
      },
      {
        label: 'THE FINAL INCISION: Trigger "The Melting Point".',
        target: 'WITCH_WEST_END_MELTING',
        effects: [],
      },
    ],
    onEnter: [{ type: 'incrementLoopCounter' }],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SUB-BRANCH: THE LION AUDIT (Granular Scraping)
  // ─────────────────────────────────────────────────────────────────────────

  WITCH_WEST_LION_AUDIT_HUB: {
    id: 'WITCH_WEST_LION_AUDIT_HUB',
    character: 'witch_west',
    text: [
      {
        minOverrender: 0,
        content: `THE LION'S BIO-MATRIX
You zoom the obsidian eye into the Lion's pinned form. His anatomy is a map of failing kingship. Which sector requires your attention?`,
      },
    ],
    choices: [
      {
        label: 'Sector Alpha: The Mane (Vibration Residue).',
        target: 'WITCH_WEST_SCRAPE_MANE',
        effects: [{ type: 'addSaturation', value: 5 }],
      },
      {
        label: 'Sector Delta: The Paws (Kinetic Friction).',
        target: 'WITCH_WEST_LION_AUDIT_HUB',
        effects: [{ type: 'addLoad', value: 4 }],
      },
      {
        label: 'Sector Omega: The Vocal Chords (Roar Error-Log).',
        target: 'WITCH_WEST_LION_AUDIT_HUB',
        effects: [{ type: 'addWarrant', value: 2 }],
      },
      {
        label: 'Return to Command Deck.',
        target: 'WITCH_WEST_COMMAND_DECK_V2',
        effects: [],
      },
    ],
    onEnter: [],
  },

  WITCH_WEST_SCRAPE_MANE: {
    id: 'WITCH_WEST_SCRAPE_MANE',
    character: 'witch_west',
    text: [
      {
        minOverrender: 0,
        content: `MANE EXTRACTION
You signal a Winged Monkey to use the fine-toothed flechettes. One by one, the golden hairs are plucked. Each hair is a strand of fiber-optic fear.
The Lion flinches—a sharp, electric spasm.
"Look at that," you murmur. "Each strand holds a different tremor. One for the dark, one for the Wizard, one for the girl."`,
      },
    ],
    choices: [
      {
        label: 'Feed the hairs into the crucible.',
        target: 'WITCH_WEST_LION_AUDIT_HUB',
        effects: [{ type: 'addSaturation', value: 15 }, { type: 'setFlag', key: 'lion_hair_logged', value: true }],
      },
      {
        label: 'Braid the hairs into a "Fear-Whip".',
        target: 'WITCH_WEST_LION_AUDIT_HUB',
        effects: [{ type: 'addWarrant', value: 8 }, { type: 'graft', material: 'fear_whip', target: 'witch_west' }],
      },
    ],
    onEnter: [],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // REPEATABLE: THE BUREAU FILING (Bureaucratic Persistence)
  // ─────────────────────────────────────────────────────────────────────────

  WITCH_WEST_BUREAU_FILING: {
    id: 'WITCH_WEST_BUREAU_FILING',
    character: 'witch_west',
    text: [
      {
        minOverrender: 0,
        content: `THE PAPERWORK OF MALICE
The Clerk presents a series of forms. To the unindexed, these are just paper. To you, they are the hardware code of the West.
"We need to categorize the Lion's upcoming deletion," the Clerk wheezes. "Is it 'Maintenance Disposal' or 'Judicial Reclamation'?"`,
      },
    ],
    choices: [
      {
        label: 'Label it "Maintenance Disposal" (Lower Load).',
        target: 'WITCH_WEST_COMMAND_DECK_V2',
        effects: [{ type: 'addLoad', value: -5 }, { type: 'addWarrant', value: 2 }],
      },
      {
        label: 'Label it "Judicial Reclamation" (Higher Warrant).',
        target: 'WITCH_WEST_COMMAND_DECK_V2',
        effects: [{ type: 'addWarrant', value: 10 }, { type: 'addSaturation', value: 5 }],
      },
    ],
    onEnter: [],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // THE SENSORY ESCALATION: SIGNAL BLEED (Choice 15+)
  // ─────────────────────────────────────────────────────────────────────────

  WITCH_WEST_SIGNAL_BLEED: {
    id: 'WITCH_WEST_SIGNAL_BLEED',
    character: 'witch_west',
    text: [
      {
        minOverrender: 0,
        content: `THE THINNING OF THE TOWER
You have been watching too long. The obsidian eye's feed is beginning to bleed into your own vision. You see the Lion's skeleton as a lattice of iron bars. You see the poppies as thousands of red, blinking sensors.
The Clerk's face is just a smudge of carbon paper.
"Mistress," a voice says—but it sounds like your own voice, coming from the Lion's throat. "The audit is becoming the asset. 1 - 1 = 1."`,
      },
    ],
    choices: [
      {
        label: 'Re-sync your vision. (Add Load).',
        target: 'WITCH_WEST_COMMAND_DECK_V2',
        effects: [{ type: 'addLoad', value: 15 }, { type: 'addDesync', value: -5 }],
      },
      {
        label: 'Accept the bleed. (Unlock W-END-04: Binary Cackle).',
        target: 'WITCH_WEST_END_MELTING',
        effects: [{ type: 'addDesync', value: 20 }],
      },
    ],
    onEnter: [],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // THE WINKIE CORRIDOR: THE RHYTHMIC STABILIZER
  // ─────────────────────────────────────────────────────────────────────────

  WITCH_WEST_WINKIE_CORRIDOR: {
    id: 'WITCH_WEST_WINKIE_CORRIDOR',
    character: 'witch_west',
    text: [
      {
        minOverrender: 0,
        content: `THE WINKIE HARMONIC
You walk the perimeter of the ritual chamber. Outside, on the ramparts, the Winkie Guard stands in perfect, rusted rows.
"O-ee-um... Oh-h-hah..."
The chant isn't music. It's a **Vibrational Anchor**. Their rhythmic stomping keeps the tower from vibrating apart under the load of your surveillance. Each "Oh-h-hah" is a manual reset of the local gravity.
The Clerk marks the beat with a twitching finger. "The guards are reaching their fatigue threshold, Mistress. If the chant breaks, the heat will no longer have a place to ground itself."`,
      },
    ],
    choices: [
      {
        label: 'Force the Guards to double the tempo. (Add Load / Increase Heat).',
        target: 'WITCH_WEST_THERMAL_SURGE',
        effects: [{ type: 'addLoad', value: 15 }, { type: 'addSaturation', value: 10 }],
      },
      {
        label: "Use the chant to soothe the Lion's tremor (Lower Load).",
        target: 'WITCH_WEST_COMMAND_DECK_V2',
        effects: [{ type: 'addLoad', value: -10 }, { type: 'addWarrant', value: 2 }],
      },
    ],
    onEnter: [],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // PATHWAY TO SEARING TRUTH: THE THERMAL EVENT
  // ─────────────────────────────────────────────────────────────────────────

  WITCH_WEST_THERMAL_SURGE: {
    id: 'WITCH_WEST_THERMAL_SURGE',
    character: 'witch_west',
    text: [
      {
        minOverrender: 0,
        content: `KINETIC OVERHEAT
The Winkies are stomping so hard their greaves are beginning to glow. The air in the tower reaches 115 degrees.
The obsidian eye is no longer showing you images; it is showing you **The Core Logic**. The Lion's body is gone. The Scarecrow's straw is gone. There is only a white-hot geometry of equations.
1 - 1 = 1.
Courage = 0.
Home = Null.
"It's beautiful," you whisper. Your green skin is beginning to blister, turning a pale, toxic yellow. "The truth isn't a story. The truth is the friction we generate while trying to escape the system."`,
      },
    ],
    choices: [
      {
        label: 'Peer directly into the white-hot center.',
        target: 'WITCH_WEST_END_SEARING_TRUTH',
        effects: [{ type: 'setCompliance', value: 'absolute' }],
      },
      {
        label: 'Try to vent the heat (Requires Water Protocol).',
        target: 'WITCH_WEST_END_MELTING',
        effects: [{ type: 'addSaturation', value: 20 }],
      },
    ],
    onEnter: [{ type: 'triggerOracle' }],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // THE UNLIT BASEMENT: THE VOID OF LOGS
  // ─────────────────────────────────────────────────────────────────────────

  WITCH_WEST_UNLIT_BASEMENT: {
    id: 'WITCH_WEST_UNLIT_BASEMENT',
    character: 'witch_west',
    text: [
      {
        minOverrender: 0,
        content: `THE UNLIT BASEMENT
The stairs ended five minutes ago, but you are still walking down.
The Clerk has vanished. The obsidian eye is dark, its pupil retracted into a tiny, painful point of grey light. You are standing in the **Unlit Basement**—the Bureau's recycling bin for failed logic.
Here, the "Wicked Witch" is just a set of instructions for a green-skinned administrator that no longer has an office. You reach out and touch the wall; it feels like cold, damp television static.
A voice—or the memory of a voice—vibrates through the floorboards.
"1 - 1 = 1," it whispers. "But in the basement, 1 - 1 = ... nothing."
You see a pile of discarded **Ruby Slippers**. They aren't glowing. They look like lead. They are heavy with the weight of every girl who tried to go home and hit the firewall instead.`,
      },
    ],
    choices: [
      {
        label: 'Search the trash for "The Origin Code".',
        target: 'WITCH_WEST_UNLIT_BASEMENT',
        effects: [{ type: 'addDesync', value: 10 }, { type: 'setFlag', key: 'unindexed', value: true }],
      },
      {
        label: 'Climb back toward the light.',
        target: 'WITCH_WEST_COMMAND_DECK_V2',
        effects: [{ type: 'addLoad', value: 20 }],
      },
      {
        label: 'Accept the deletion. Become a Ghost Bit.',
        target: 'WITCH_WEST_END_GHOST_BIT',
        effects: [],
      },
    ],
    onEnter: [],
  },
}
