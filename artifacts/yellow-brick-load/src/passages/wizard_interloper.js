/**
 * YELLOW BRICK LOAD — Wizard Stat Interloper
 * Character: Wizard (Obfuscation Operator)
 *
 * Stat interloper: The Curtain
 * Triggers when obfuscation >= 5 (same threshold as the oracle).
 * Replaces the random oracle deck card popup.
 *
 * The Curtain: the mechanism of the Wizard's authority. It is not
 * hiding something behind it — it is the thing itself. When the
 * obfuscation density reaches threshold, the curtain becomes visible
 * as an object rather than a condition. The Humbug Surgeon arrives
 * to read what the curtain has been doing to the interior.
 */

export const wizardInterloper = {
  id: 'wizard_01',
  name: 'The Curtain',
  cardText:
    "A curtain across a lever mechanism in an empty room. The curtain is the face. The lever is the voice. The room is the authority. None of these things require a person behind them — the Bureau certified the arrangement years ago and has been logging its output as legitimate governance ever since. The curtain has not moved. The curtain has been doing all the work.",
  ritualText:
    "The curtain becomes visible as a curtain — not a face, not a wall, not an architectural feature, but a piece of fabric over a mechanism that has been operating continuously. The Humbug Surgeon parts it one inch without theater, without patter, without the usual projection. What is behind the curtain is the obfuscation itself: a dense smoke of accumulated projection with no original image at its center. The obfuscation counter spikes. The Surgeon makes a note. 'The curtain,' it writes, 'is load-bearing.'",
  effect: { type: 'addObfuscation', value: 4 },
  surreality: 7,
}
