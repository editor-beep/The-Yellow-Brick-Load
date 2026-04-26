/**
 * YELLOW BRICK LOAD — Frequently Logged Queries
 *
 * Add new entries by appending to the array below.
 *
 * Entry shape:
 *   {
 *     id:       'unique-slug',     // any unique string, used as React key
 *     question: 'Short question.', // shown as the heading
 *     answer:   `Multi-paragraph
 *                answer prose.
 *
 *                Separate paragraphs with a blank line.
 *                Single newlines are joined back together.`,
 *   }
 *
 * Voice guide: stay in-world. The system is a closed-loop simulation;
 * the operator (the reader) is being addressed by the system or by
 * a recovered fragment of its documentation. Avoid breaking the fourth
 * wall. Avoid emoji. Lean on the established jargon: Load, Desync,
 * Compliance, Smudge, Overrender, Functional Textures, the Yellow Brick,
 * Ghost Signal, Residual Signal, clerks, units, the feed.
 *
 * Copy-paste template for a new entry:
 *
 *   {
 *     id: 'short-slug',
 *     question: 'Your question here?',
 *     answer: `First paragraph.
 *
 *   Second paragraph.`,
 *   },
 */

export const faqEntries = [
  {
    id: 'smells',
    question: "What's with the smells?",
    answer: `In a closed-loop simulation, variety is an unnecessary expenditure of processing power. The system settles on a pallet of "Functional Textures."

Gypsum is the smell of the walls being built while you walk toward them—dry, chalky, the scent of a room that was initialized only seconds before you entered it. It is the dust of a "home" that is merely a structural facade.

Ozone is the scent of the air being ionized to keep it breathable. It is the smell of the spark between your hardware and the grid. It is the aroma of the "Yellow Brick" when the friction of your traversal exceeds the safety parameters.

If you smell wet pine, it is a localized glitch. If you smell roasted coffee, a clerk is nearby, bleeding into the feed.`,
  },
]
