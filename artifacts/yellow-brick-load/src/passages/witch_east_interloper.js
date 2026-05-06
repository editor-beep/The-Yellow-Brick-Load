/**
 * YELLOW BRICK LOAD — Witch East Stat Interloper
 * Character: Witch East (Unit E-00)
 *
 * Stat interloper: The House
 * Triggers when displacement >= 3 (same threshold as the oracle).
 * Replaces the random oracle deck card popup.
 *
 * The House: the Kansas residential structure that executed an
 * unauthorized kinetic event at Munchkin Landing Zone 7 and
 * removed Unit E-00 from active status. It is not yet here.
 * The archive is running from the last twelve hours of operation.
 * The displacement counter is high. The house is in the air.
 */

export const witchEastInterloper = {
  id: 'witch_east_01',
  name: 'The House',
  cardText:
    "A residential structure from a coordinate that does not appear on any Oz map. It is airborne. It has been airborne for longer than a residential structure should be capable of. The gravitational field reads it as an object in transit. The transit destination has not yet been filed. The Weight Assessor's instruments are receiving its shadow before its body.",
  ritualText:
    "The house enters the displacement field. The Weight Assessor's precision clamps register the approach as a pressure event — not from below, not from the side, from above. The instruments recalculate. The archive timestamp updates: NINE MINUTES REMAINING. The gravitational authority that has held the Munchkin sector stable for the duration of Unit E-00's operation begins to read the incoming mass as a challenge to jurisdiction. The displacement counter does not stop. The house does not stop. These are the same fact.",
  effect: { type: 'addDisplacement', value: 5 },
  surreality: 10,
}
