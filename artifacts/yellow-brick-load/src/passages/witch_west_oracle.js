/**
 * YELLOW BRICK LOAD — Witch West (Surveillance Operator) Oracle Passages
 * Character: Witch West (Surveillance Operator)
 *
 * Oracle ritual passages (ENTRY, DRAW, 1-8).
 * Extracted from witch_west_stubs.js.
 */

export const witchWestOraclePassages = {
  WITCH_WEST_ORACLE_ENTRY_LION: {
    id: 'WITCH_WEST_ORACLE_ENTRY_LION',
    character: 'witch_west',
    text: [{ minOverrender: 0, content: `THE MONITORED INCISION BEGINS — LION

The Lion is forced onto his side and strapped against yellow brick. Every breath rattles through his chest like a cracked drum.

Your claws part fur and skin along the sternum. The restraint mesh keeps the wound open while the obsidian eye records each tremor.

You whisper into his ear as the first line of blood runs warm: "Courage looks different under glass."

The session is live. Every decision from here is evidence.` }],
    choices: [
      { label: 'Commence the full extraction — read the malice residue.', target: 'WITCH_WEST_ORACLE_DRAW', effects: [{ type: 'addWarrant', value: 3 }, { type: 'addLoad', value: 5 }] },
      { label: 'Suspend the session — leave the Lion strapped for a longer reading later.', target: 'WITCH_WEST_TORMENT_DETAIL', effects: [{ type: 'addMalice', value: 6 }, { type: 'addLoad', value: 3 }] },
      { label: 'Abort the procedure — release the restraints and re-route to monkeys.', target: 'WITCH_WEST_PATH_MONKEYS', effects: [{ type: 'addWarrant', value: 2 }, { type: 'addDesync', value: 2 }, { type: 'setCompliance', value: 'low' }] },
    ],
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
    choices: [
      { label: 'Commence the full extraction — read the malice residue.', target: 'WITCH_WEST_ORACLE_DRAW', effects: [{ type: 'addWarrant', value: 3 }, { type: 'addLoad', value: 5 }] },
      { label: 'Suspend the session — leave the girl strapped for a deeper inventory later.', target: 'WITCH_WEST_TORMENT_DETAIL', effects: [{ type: 'addMalice', value: 6 }, { type: 'addLoad', value: 3 }] },
      { label: 'Abort the procedure — release the grid and call the monkeys for a transport.', target: 'WITCH_WEST_PATH_MONKEYS', effects: [{ type: 'addWarrant', value: 2 }, { type: 'addDesync', value: 2 }, { type: 'setCompliance', value: 'low' }] },
    ],
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
    choices: [
      { label: 'Commence the full extraction — read the malice residue.', target: 'WITCH_WEST_ORACLE_DRAW', effects: [{ type: 'addWarrant', value: 3 }, { type: 'addLoad', value: 5 }] },
      { label: 'Suspend the session — leave the plates pried open for a slower oxidation read.', target: 'WITCH_WEST_TORMENT_DETAIL', effects: [{ type: 'addMalice', value: 6 }, { type: 'addLoad', value: 3 }] },
      { label: 'Abort the procedure — release the clamps and dispatch the monkeys instead.', target: 'WITCH_WEST_PATH_MONKEYS', effects: [{ type: 'addWarrant', value: 2 }, { type: 'addDesync', value: 2 }, { type: 'setCompliance', value: 'low' }] },
    ],
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
    choices: [
      { label: 'Commence the full extraction — read the malice residue.', target: 'WITCH_WEST_ORACLE_DRAW', effects: [{ type: 'addWarrant', value: 3 }, { type: 'addLoad', value: 5 }] },
      { label: 'Suspend the session — leave the burlap peeled for a longer signal soak.', target: 'WITCH_WEST_TORMENT_DETAIL', effects: [{ type: 'addMalice', value: 6 }, { type: 'addLoad', value: 3 }] },
      { label: 'Abort the procedure — release the field and dispatch monkeys to gather the rest.', target: 'WITCH_WEST_PATH_MONKEYS', effects: [{ type: 'addWarrant', value: 2 }, { type: 'addDesync', value: 2 }, { type: 'setCompliance', value: 'low' }] },
    ],
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

You step forward, withered fingers flexing. The obsidian orb in your left socket rotates with a wet click, projecting the restraint grid deeper into the target's flesh. The grid bites — pressing, measuring, mapping every tremor and leak.

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
        label: '5. The Cackle Brand — thermodynamic heat surge.',
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

"Clean harvest," you murmur, thin lips curling. "The meat learns so quickly when properly pinned."`,
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
        content: `THE CACKLE BRAND

The obsidian eye increases its projection intensity until the restraint field itself generates searing heat.

The dry, ash-toned aura of the Wicked Witch — the institutional pigment, the Bureau-standard surveillance tint — burns into the open incision. Permanent chemical burns form in the exact shape of a cackle-pattern across the target's exposed meat.

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
    ],
    onEnter: [{ type: 'addMalice', value: 10 }],
  },
}
