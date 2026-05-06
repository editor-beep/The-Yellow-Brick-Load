/**
 * YELLOW BRICK LOAD — Dorothy Stat Interloper
 * Character: Dorothy (Unit D-01)
 *
 * Stat interloper: Aunt Em
 * Triggers when displacement >= 5 (same threshold as the oracle).
 * Replaces the random oracle deck card popup.
 *
 * Aunt Em: Dorothy's fixed origin coordinate. She is the point
 * from which all displacement is measured. Her presence in Oz
 * is impossible. Her presence here is the displacement register
 * made visible.
 */

export const dorothyInterloper = {
  id: 'dorothy_01',
  name: 'Aunt Em',
  cardText:
    "A woman standing in a Kansas doorway that has no building behind it. Her hands are flour-dusted. Her face carries the specific expression of someone who has been waiting since before the event and does not yet know the event has happened. The doorway stands in the middle of the yellow brick road. The displacement between them is measured in coordinates that no longer share a map.",
  ritualText:
    "Aunt Em steps into the road and stands there. She does not speak. She does not need to speak. Her presence reads directly into the displacement register — she is the origin coordinate, the fixed point from which all drift is calculated. The silver shoes hum at recognition frequency. The heel cut, if open, opens slightly further. 'Dorothy,' she does not say. The silence where the name would be carries all the weight of the word. The displacement counter increments. This is what home looks like from inside the wrong coordinate.",
  effect: { type: 'addDisplacement', value: 4 },
  surreality: 9,
}
