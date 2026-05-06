/**
 * YELLOW BRICK LOAD — Scarecrow Stat Interloper
 * Character: Scarecrow (Unit S-33)
 *
 * Stat interloper: The Crows
 * Triggers when scatter >= 5 (same threshold as the oracle).
 * Replaces the random oracle deck card popup.
 *
 * The Crows: sent by the Wicked Witch of the West specifically
 * to tear the Scarecrow to pieces. In Baum's Oz, they peck out
 * the straw and scatter it across the field. They are the professional
 * assessors of the unit's effectiveness — and they have never been afraid.
 */

export const scarecrowInterloper = {
  id: 'scarecrow_01',
  name: 'The Crows',
  cardText:
    "A field full of crows that are not afraid. They have never been afraid. Their indifference is the only verdict that matters — a professional assessment of the unit's effectiveness, conducted by the exact entities the unit was installed to deter. The field is covered in them. The assessment is ongoing and has always been ongoing.",
  ritualText:
    "The crows land on the crossbar one by one with the unhurried certainty of entities that have never been deterred. Each landing is a verdict. They peck at the seams where the straw is already leaking — not maliciously, procedurally. The scatter accelerates. The Bureau did not send these crows. The Bureau did not need to. The crows came because the crows always come. That is what the crossbar is for. That is what the unit was for.",
  effect: { type: 'addScatter', value: 4 },
  surreality: 7,
}
