/**
 * YELLOW BRICK LOAD — Oracle Interloper Registry
 *
 * Maps each deck slug to its administrative interloper — the entity whose
 * presence is stamped onto every card during the ritual reveal.
 *
 * `name`  — full title (used in placeholder cards / ARIA hints, not in
 *           gameplay copy that could leak deck identity).
 * `stamp` — short bureau code (≤ 7 chars) used inside the round red stamp
 *           overlay rendered on top of the canonical card art.
 *
 * Order in this file is alphabetical-by-deck-slug for stability; the
 * runtime never iterates this map for display, so order is not visible
 * to the player.
 */

export const INTERLOPERS = {
  dorothy:        { name: 'Dust Clerk',              stamp: 'DST-CLK' },
  glinda:         { name: 'Porcelain Auditor',       stamp: 'POR-AUD' },
  kalidah:        { name: 'Merge Coordinator',       stamp: 'MRG-COR' },
  lion:           { name: 'Bureau Crow',             stamp: 'BUR-CRW' },
  munchkins:      { name: 'Lead Munchkin',           stamp: 'LD-MUNCH' },
  poppy_field:    { name: 'Field Pharmacist',        stamp: 'FLD-PHM' },
  scarecrow:      { name: 'Straw Clerk',             stamp: 'STR-CLK' },
  tin_man:        { name: 'Maintenance Auditor',     stamp: 'MNT-AUD' },
  winged_monkeys: { name: 'Wing Captain',            stamp: 'WNG-CPT' },
  witch_east:     { name: 'Ground Impact Assessor',  stamp: 'IMP-ASR' },
  witch_west:     { name: 'Obsidian Matron',         stamp: 'OBS-MTR' },
  wizard:         { name: 'Humbug Surgeon',          stamp: 'HMB-SRG' },
}

/**
 * Derive the deck slug from a card id of the form `<deck>_NN`
 * (e.g. "tin_man_03" → "tin_man", "lion_08" → "lion").
 * Returns null for malformed ids.
 */
export function deckFromCardId(id) {
  if (typeof id !== 'string') return null
  const match = id.match(/^(.+)_\d+$/)
  return match ? match[1] : null
}

/**
 * Look up the interloper record for a given oracle card id.
 * Returns null when the id is unrecognized — callers should treat this
 * as the "missing custody" path and fall back to a neutral stamp.
 */
export function interloperFor(cardId) {
  const deck = deckFromCardId(cardId)
  if (!deck) return null
  return INTERLOPERS[deck] || null
}
