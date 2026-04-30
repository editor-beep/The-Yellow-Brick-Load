/**
 * YELLOW BRICK LOAD — Lion Stat Interloper
 * Character: Lion (Unit L-77)
 *
 * Stat interloper: The Witch's Soldiers
 * Triggers when vibration >= 7 (same threshold as the oracle).
 * Replaces the random oracle deck card popup.
 */

export const lionInterloper = {
  name: "The Witch's Soldiers",
  cardText:
    "A formation of grey uniforms holding spears at shoulder-height. They do not advance. They are doing something worse: waiting. Each one has been assigned to a specific unit. The assignment does not expire. The waiting is a procedure. The procedure has been filed.",
  ritualText:
    "The soldiers step to the edge of the road and form a line, facing the unit. They do not speak. Each spear is held at the exact angle that communicates formal observation rather than active threat. The tremor doubles under the weight of the distinction. 'Unit L-77,' the ranking soldier says, without inflection. 'You are being monitored.' The monitoring is the weapon. The tremor confirms this.",
  effect: { type: 'addVibration', value: 5 },
  surreality: 6,
}
