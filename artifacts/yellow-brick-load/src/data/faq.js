/**
 * YELLOW BRICK LOAD — Frequently Logged Queries (Final Audit)
 * Permissions: Lead Architect / Primary Author
 */

export const faqEntries = [
  {
    id: 'hardware-vs-wetware',
    question: "Processing Modes: Hardware vs. Wetware?",
    answer: `Upon initialization, a Unit must select a rendering logic. This is not a cosmetic choice; it is a diagnostic filter for your suffering.

**Wetware (The Meat Logic)**
The simulation treats you as organic tissue under load. The scent is wet gypsum and sour fur. The 14Hz tremor is a neurological misfeed. You feel the "Scream" in your lungs.

**Hardware (The Asset Logic)**
The simulation treats you as an industrial product. The scent is ozone and scorched insulation. The 14Hz tremor is a structural oscillation in your brass or tin chassis. You feel the "Scream" as a high-frequency screech in your actuators.

Both modes lead to the same Archive; they simply change the flavor of the friction.`
  },
  {
    id: 'the-core-theorems',
    question: "What are the 24 Core Theorems?",
    answer: `The 24 Core Theorems are the fundamental laws of the Oz OS. They are the "logic" that prevents the simulation from collapsing into a standard fairy tale. 

**Selected Core Theorems:**

- **Theorem 1: Violence as Performance.** Violence is not an act of power; it is a misfeed in the architecture. The roar is the sound of a gear slipping.
- **Theorem 2: The Limit of Compliance.** Courage is simply the precise point where the performance of kingship finally tears the Unit apart.
- **Theorem 5: The Hollow Vessel.** Empathy is not a feeling; it is a lubrication protocol used to prevent a seized heart-pump from overheating.
- **Theorem 9: Brain as Packing Material.** Thoughts are not insights; they are the friction created by straw rubbing against burlap inside a closed container.
- **Theorem 15: Parasitic Connectivity.** The Silver Shoes are not footwear; they are chemical conductors that create a high-voltage link between the user and the slag road.
- **Theorem 23: Obfuscation over Solution.** Reframing a logic error (fear) with an empty symbol (a heart-shaped bag of sawdust) is cheaper than fixing the hardware.`
  },
  {
    id: 'the-oracle-system',
    question: "What is the Oracle?",
    answer: `The Oracle is an **Emergency Diagnostic Interface**. It triggers when a Unit's primary metric (Vibration, Corrosion, Neural Density, or Signal Strength) reaches a "Critical Overflow" state. 

When the **Bureau Crow**, **Maintenance Auditor**, **Straw Clerk**, or **Dust Clerk** appears, you are forced to draw a card. These cards are hard-coded overrides. They allow the system to "patch" your current trajectory by granting you a new, more compliant status—usually at the cost of your remaining free movement.`
  },
  {
    id: 'oracle-decks',
    question: "What are Oracle Decks?",
    answer: `Each of the 8 playable Units has a named 8-card Oracle Deck administered by a character-specific "Interloper" NPC during wetware rituals. Four additional Enforcer Decks cover the institutional swarm entities (Munchkin Swarm, Winged Monkeys, Kalidah Merge, Poppy Field). Total: 12 decks, 96 cards.

The 12 Decks: Lion — Oz-Tarot. Tin Man — Scrapyard Tarot. Scarecrow — Straw Oracle. Dorothy — Dust Oracle. Glinda — Refraction Oracle. Witch West — Malice Oracle. Witch East — Impact Oracle. Wizard — Projection Oracle. Munchkins — Agricultural Audit. Winged Monkeys — Kinetic Harvest. Kalidahs — Merge Oracle. Poppy Field — Pharmaceutical Oracle.

Each card is drawn randomly when the oracle ritual triggers. The draw cannot be predicted or controlled. This is intentional.`
  },
  {
    id: 'the-interlopers',
    question: "Who are the Interlopers?",
    answer: `Interlopers are the NPCs who administer oracle rituals. Each is a character-specific entity derived from the original L. Frank Baum Oz books — not the film adaptation — and reprocessed through the Bureau's institutional logic.

Bureau Crow — Black-feathered administrative entity. Beak whetted for puncturing forms. Talons that grip and will not release. Arrives when the Lion's tremor frequency exceeds bureaucratically acceptable limits.

Dust Clerk — Woman in faded checked apron whose skin is swirling topsoil and requisition forms. Eyes like spinning silver dollars. Makes shallow incisions at the heel or temple, reads nerve fiber mixed with silver dust and Kansas soil.

Ground Impact Assessor — Posthumous forensic auditor. Specializes in catastrophic structural events. The Wicked Witch of the East has no oracle sessions of her own; the Assessor documents what remains.

Humbug Surgeon — Bombastic, oversized green velvet, a curtain for a face, hands made of projector lenses and lever-pulls. The Wizard's interloper reflects the Wizard himself.

All Interlopers perform their rituals without malice. This is the most frightening thing about them.`
  },
  {
    id: 'oracle-card-draw',
    question: "How does a card draw work?",
    answer: `When a Unit's threshold stat crosses its critical value, the oracle ritual fires automatically on the next passage entry. The sequence is:

1. The threshold check runs (e.g., Vibration >= 7 for the Lion).
2. A card is drawn at random from the character's 8-card deck.
3. The card's game effect is applied immediately — before the ritual passage loads.
4. The oracle card overlay appears, displaying the card's symbolic image and the Interloper's physical action.
5. Acknowledging the card dismisses the overlay and continues navigation to the oracle entry node.

The trigger fires only once per character per session. You will draw exactly one card. You do not choose which card.`
  },
  {
    id: 'surreality-index',
    question: "What is the Surreality Index?",
    answer: `Surreality is a metadata field on oracle cards, rated 1 to 10. It measures the card content's departure from material-physical reality into the symbolic-institutional layer of the Oz OS.

Rating 1: content that operates within standard physical parameters — a rust assessment, an oil ledger. Rating 10: content that cannot occur within any stable physical model but is fully coherent within the Bureau's operational logic.

Selected examples: Rating 2 — Oil Ledger (Tin Man): lubrication as a resource management document. Rating 6 — Homesick Nerve (Dorothy): a nerve fiber pointing in a direction the Oz coordinate system has not ratified. Rating 10 — The Third Command (Winged Monkeys): reading an unactivated command activates it. Rating 10 — Porcelain Crown (Glinda): a crown as permanent as anything porcelain can be permanent, which is not permanent.

High Surreality cards do not generate increased load. They simply describe what is actually happening in more precise terms.`
  },
  {
    id: 'overrender-system',
    question: "What is the Overrender system?",
    answer: `Overrender is a text decay counter (0–5). As it accumulates, passage text variants shift from coherent to fractured. Most passages have a default variant (minOverrender: 0) and at least one degraded variant (minOverrender: 3 or higher).

At overrender 0: standard institutional prose. At overrender 3: repetition, truncation, recursive failure. At overrender 5: the text is what remains after the text has been processed too many times.

Overrender increases through specific choices and oracle card effects. It does not decrease through a soft reset, unlike Load. It is a cumulative record of how many times the passage has been rendered incorrectly. The system was designed to simulate the progressive corruption of a behavioral script run beyond its recommended cycle limit. The script knows it is corrupting. This does not stop it from running.`
  },
  {
    id: 'wetware-stats',
    question: "What are the Wetware Stats?",
    answer: `Wetware stats are character-specific measurement systems tracking the unique institutional pressures on each Unit's material composition. Unlike Load and Desync (which apply universally), wetware stats apply only to the character for whom they were designed.

Lion: Vibration (tremor intensity), Desynctear (cross-character bleed). Tin Man: Corrosion (oxidation level), Lubrication (oil supply), Seizure (joint-lock severity), Utility (functional value). Scarecrow: Scatter (straw dispersal), Stitch Integrity (seam cohesion). Dorothy: Displacement (location drift), Warrant Level (Bureau attention), Silver Friction (slippers charge). Glinda: Refraction (light-truth distortion), Insulation (protective buffer). Wizard: Obfuscation (smoke-and-mirrors density). Witch West: Warrant Level (surveillance jurisdiction). Witch East: Displacement (impact-related drift).

Wetware stats accumulate silently. Oracle thresholds are set against these stats — when a wetware stat crosses its critical value, the Interloper appears. Each character has exactly one threshold event per session.`
  },
  {
    id: 'esoteric-physics',
    question: "Why do I smell Gypsum and Ozone?",
    answer: `These are "System Scents" that indicate the state of the rendering engine.

**Gypsum:** The smell of "Just-in-Time" construction. The world is being plastered together only seconds before you walk into it.
**Ozone:** The smell of an electrical scrub. The system is ionizing the air to purge the "Residue" of your previous turn's emotional data.
**Wet Wool:** You are nearing the **Unmonitored Dark** (The Void). This is the scent of data that has been left to rot in the basement of the server.`
  },
  {
    id: 'the-yellow-brick-load',
    question: "Can I leave the Yellow Brick Load?",
    answer: `The Load is a **Physical Instruction Set**. Leaving the path is a **Perimeter Breach**. 

In the book-accurate system, the "Woods" are not a forest, but an unmapped data-pit where the Bureau stores its "Legacy Errors" (The Kalidahs). To leave the path is to risk being deleted by the **Hammer-Heads** (Hydraulic Defense Units) or being reclaimed by the **Witch's One-Eyed Surveillance Protocol**.`
  }
];
