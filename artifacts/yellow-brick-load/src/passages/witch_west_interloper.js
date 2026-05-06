/**
 * YELLOW BRICK LOAD — Witch West Stat Interloper
 * Character: Witch West (Surveillance Operator)
 *
 * Stat interloper: The Water
 * Triggers when warrantLevel >= 5 (same threshold as the oracle).
 * Replaces the random oracle deck card popup.
 *
 * The Water: the Wicked Witch of the West's fundamental vulnerability.
 * Her entire fortress is built around avoiding it. The obsidian eye
 * has been tracking the bucket since it entered the frame.
 * This is not a threat — it is a reading.
 */

export const witchWestInterloper = {
  id: 'witch_west_01',
  name: 'The Water',
  cardText:
    "A bucket. Not yet lifted. Not yet thrown. Simply present at the edge of the surveillance field, where the girl with the silver shoes is standing. The bucket has been there longer than anyone admits. The obsidian eye has been tracking it since it entered the frame. The eye cannot stop looking at it. The eye was not designed to look away from things.",
  ritualText:
    "The water becomes visible in the monitoring field. Not advancing. Not threatening. Present. The obsidian eye rotates toward it with a precision that registers in the malice counter as a new kind of reading: not surveillance of the target, but surveillance of the threat to the surveiller. The warrant level recalculates. The thermal reading spikes. The crucible hisses with an unfamiliar chemical signal. The eye continues recording, because the eye always continues recording, because the eye cannot afford to stop.",
  effect: { type: 'addThermal', value: 5 },
  surreality: 9,
}
