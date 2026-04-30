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
    "A room with no sound and no light and no one in it — except that something has been in it for a long time and recently left. The grace protocol does not cover this room. The subdermal tubing does not route through it. The pink filament has never touched it. It is the original interior, before the Bureau calibrated the surface. It is still there. It has always been there. The refraction has been bending light away from it.",
  ritualText:
    "The silence becomes readable. The Porcelain Auditor pauses mid-procedure — its silver refracting lenses tilting toward the interior rather than the surface. The grace lines that usually direct the incision have gone quiet. What the lenses find behind the porcelain is not fluid, not tubing, not the synthetic lilac compound — it is a frequency the Bureau has no classification for. The refraction counter spikes. The auditor makes a note. The note cannot be filed because the category does not exist.",
  effect: { type: 'addRefraction', value: 4 },
  surreality: 8,
}
