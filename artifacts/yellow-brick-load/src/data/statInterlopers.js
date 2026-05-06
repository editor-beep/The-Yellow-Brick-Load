/**
 * YELLOW BRICK LOAD — Stat Interloper Registry
 *
 * Stat interlopers are the popup card system that fires when a character's
 * key wetware stat crosses its oracle threshold. They replace the random
 * oracle deck card draw and show a single, fixed narrative card for each
 * character before the oracle ritual begins.
 *
 * Each interloper has the same shape as an oracle deck card:
 *   id          — canonical card id used for SVG art lookup
 *   name        — title shown on the card
 *   cardText    — symbolic image description
 *   ritualText  — what the interloper does / what happens
 *   effect      — game effect descriptor (applied immediately on popup)
 *   surreality  — surreality index 1–10
 *
 * Characters without an interloper defined return null; the trigger
 * fires normally without a popup card.
 */

import { lionInterloper } from '../passages/lion_interloper.js'
import { tinManInterloper } from '../passages/tin_man_interloper.js'
import { scarecrowInterloper } from '../passages/scarecrow_interloper.js'
import { dorothyInterloper } from '../passages/dorothy_interloper.js'
import { glindaInterloper } from '../passages/glinda_interloper.js'
import { wizardInterloper } from '../passages/wizard_interloper.js'
import { witchWestInterloper } from '../passages/witch_west_interloper.js'
import { witchEastInterloper } from '../passages/witch_east_interloper.js'

export const statInterlopers = {
  lion:       lionInterloper,
  tin_man:    tinManInterloper,
  scarecrow:  scarecrowInterloper,
  dorothy:    dorothyInterloper,
  glinda:     glindaInterloper,
  wizard:     wizardInterloper,
  witch_west: witchWestInterloper,
  witch_east: witchEastInterloper,
}

/**
 * Returns the stat interloper card for the given character, or null if none.
 */
export function getInterloperForCharacter(character) {
  return statInterlopers[character] ?? null
}
