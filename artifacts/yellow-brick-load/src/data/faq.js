/**
 * YELLOW BRICK LOAD — Frequently Logged Queries
 * Updated for player-facing clarity.
 */

export const faqEntries = [
  {
    id: 'what-is-yellow-brick-load',
    question: 'What is The Yellow Brick Load?',
    answer: `The Yellow Brick Load is a branching interactive-fiction game set inside a corrupted Oz simulation. You choose a character, move through passages, and your choices change both the story route and the system state.

It is designed for replay: each run can produce different combinations of metrics, branches, and endings.`
  },
  {
    id: 'how-do-i-play',
    question: 'How do I play?',
    answer: `1. Select a character on the title screen.
2. Read the current passage and choose one of the available options.
3. Each choice may change your metrics (like Load, Desync, Smudge, Compliance, or character-specific stats).
4. Continue until you reach an ending, then restart to explore alternate routes.

There are no reflex challenges or time limits—progress is driven by reading and decision-making.`
  },
  {
    id: 'core-metrics',
    question: 'What do the core metrics mean?',
    answer: `The core metrics track your system condition:

- Load: overall pressure in the simulation.
- Desync: drift between your current route and system stability.
- Smudge: visual corruption level.
- Compliance: how closely your behavior matches expected patterns.
- Overrender: text-decay level that alters how passages are presented.

Higher values are not always "bad," but they do push you toward different narrative states and endings.`
  },
  {
    id: 'wetware-stats',
    question: 'What are character-specific (wetware) stats?',
    answer: `In addition to shared metrics, each character has their own stat model (for example: Vibration, Corrosion, Displacement, or Refraction).

These stats represent pressures unique to that character's storyline. Certain events and thresholds only trigger when those character stats reach critical levels.`
  },
  {
    id: 'oracle-system',
    question: 'What is the Oracle system?',
    answer: `The Oracle is a threshold-triggered event system. When a critical stat condition is met, an Interloper appears and forces a card draw.

The drawn card immediately applies a gameplay effect and can redirect the tone or direction of your run. You cannot manually pick the card.`
  },
  {
    id: 'oracle-decks',
    question: 'How do Oracle Decks work?',
    answer: `Oracle cards are grouped into themed decks tied to specific characters and institutional forces. A trigger event draws one card from the relevant deck at random.

Deck identity matters because each set emphasizes different risks, symbolic language, and mechanical effects.`
  },
  {
    id: 'overrender',
    question: 'Why does the text become distorted?',
    answer: `Text distortion is controlled by Overrender. As Overrender rises, passages can shift from stable prose into fragmented or recursive variants.

This is intentional narrative feedback: the interface reflects accumulating system stress instead of staying cosmetically neutral.`
  },
  {
    id: 'endings-and-replay',
    question: 'How do endings and replay work?',
    answer: `When you reach an ending, the run is complete, but your discovery process is not. Different choices, stat paths, and oracle outcomes can reveal entirely different endings.

Replay is the intended way to uncover hidden branches, compare character arcs, and map the broader simulation logic.`
  },
  {
    id: 'character-unlocks',
    question: 'How do I unlock each character?',
    answer: `Character access is progression-based:

- The Lion: available from the start.
- The Tin Man: complete at least 1 Lion run.
- The Scarecrow: complete at least 1 Tin Man run.
- Dorothy: complete at least 1 Scarecrow run.
- The Wizard: complete at least 2 runs each with Lion, Tin Man, Scarecrow, and Dorothy.
- Witch East: complete at least 2 Wizard runs.
- Witch West: complete at least 1 Witch East run.
- Glinda: complete at least 2 runs each with Wizard, Witch East, and Witch West.
- The Denizen: play at least 1 run each with Lion, Tin Man, Scarecrow, Dorothy, Wizard, Witch East, Witch West, and Glinda.`
  },
  {
    id: 'content-and-tone',
    question: 'What kind of content should I expect?',
    answer: `The Yellow Brick Load uses industrial-horror and bureaucratic-surreal language. Expect unsettling imagery, institutional themes, and psychological pressure rather than jump scares.

If the tone feels intense, pause between runs and return when you want a slower read.`
  },
  {
    id: 'book-vs-film',
    question: 'Is this based on the Oz books or the film adaptation?',
    answer: `The project primarily draws from L. Frank Baum's Oz material and reinterprets it through a systems-fiction lens.

You may notice familiar names, but this is not a retelling of the classic film plot.`
  }
]
