/**
 * YELLOW BRICK LOAD — Tin Man Stat Interloper
 * Character: Tin Man (Unit T-88)
 *
 * Stat interloper: The Maiden
 * Triggers when corrosion >= 10 (same threshold as the oracle).
 * Replaces the random oracle deck card popup.
 *
 * The Maiden: Nimmie Amee, the girl Nick Chopper was in love with
 * before the enchanted axe removed his limbs one by one and a tinsmith
 * replaced them — finishing with a tin body and no heart.
 * She is the origin of the loss. She has been waiting at the gate.
 */

export const tinManInterloper = {
  id: 'tin_man_01',
  name: 'The Maiden',
  cardText:
    "A girl standing at a gate that is no longer attached to anything. The gate is still latched. Her hands are folded in her apron. She has been waiting since the first limb was removed — through each replacement, through the heart that was never installed — and she will still be waiting when the last replacement is complete. She does not know the tin cannot feel the wait.",
  ritualText:
    "The Maiden stands at the edge of the road and does not speak. Her presence reads directly into the hollow chest cavity where the heart procurement form was stamped DENIED and filed without appeal. The corrosion accelerates at the site of the old sutures — the seams where organic material was replaced with tin and the junction was never fully sealed. This is not cruelty. This is what the absence of a heart does when reminded that one had been planned for.",
  effect: { type: 'addCorrosion', value: 4 },
  surreality: 8,
}
