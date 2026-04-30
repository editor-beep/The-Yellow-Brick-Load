/**
 * YELLOW BRICK LOAD — Glinda Stat Interloper
 * Character: Glinda (Refraction Operator)
 *
 * Stat interloper: The Silence
 * Triggers when refraction >= 5 (same threshold as the oracle).
 * Replaces the random oracle deck card popup.
 *
 * The Silence: the gap inside Glinda's grace protocol — the absence
 * beneath the pink filament and porcelain surface. The thing the
 * refraction is designed to prevent anyone from seeing. It is visible
 * only when the bending stops.
 */

export const glindaInterloper = {
  name: 'The Silence',
  cardText:
    "A room that is cold in a way the pink filament cannot account for — not temperature, not absence of heat, but the specific cold of a surface that has never been touched. The smell is wrong: not synthetic lilac, not the Bureau's standard neutralizing compound, but something older and prior and faintly mineral, the smell of whatever was here before the grace protocol laid its first layer down. The lenses try to bend light around it. The light bends. The room remains. The cold remains. The lenses have been bending light around it for a long time and it has not helped.",
  ritualText:
    "The silence becomes readable. The Porcelain Auditor pauses mid-procedure — its silver refracting lenses tilting toward the interior rather than the surface. The grace lines that usually direct the incision have gone quiet. What the lenses find behind the porcelain is not fluid, not tubing, not the synthetic lilac compound — it is a frequency the Bureau has no classification for. The refraction counter spikes. The auditor makes a note. The note cannot be filed because the category does not exist.",
  effect: { type: 'addRefraction', value: 4 },
  surreality: 8,
}
