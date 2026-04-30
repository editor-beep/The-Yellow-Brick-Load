# Oracle Card Art System (Fixed Assets + Ritual Runtime)

## 1) Architecture Decision (Non-Negotiable)
**Do not generate core card art at draw time.**

This project uses a **hybrid architecture biased toward prebuilt cards**:

1. **Layer 1 — Canonical Card Assets (required)**
   - 12 decks × 8 cards = **96 fixed SVG cards**.
   - Each card has a stable composition, silhouette, and symbolic meaning.
2. **Layer 2 — Ritual Runtime (app-side)**
   - The app handles random selection, shuffle burst, flicker, reveal timing, and interloper presence.
3. **Layer 3 — Controlled Variants (optional)**
   - Variants of the *same* card (mono/accent/full + overlays), never replacing the core icon.

> Principle: **The cards are fixed truth. The app is the system that lies about them.**

## 2) Why Full Runtime Generation Is Wrong Here
Full runtime generation (new card composition per draw) undermines core goals:

- Breaks symbolic consistency and player memory.
- Weakens ritual repetition (fate becomes noise).
- Introduces visual drift and readability variance at thumbnail sizes.
- Adds runtime/performance complexity for little narrative benefit.

Allowed procedural effects are strictly cosmetic (noise, jitter, stamp placement), not semantic.

## 3) Intent
Create a coherent visual language for **12 decks / 96 cards** that feels bureaucratic, ritualistic, and unsettling while staying readable at small sizes.

- 8 playable-unit decks with character-specific oracle motifs.
- 4 enforcer decks for institutional swarm entities.
- Draw is random and uncontrollable at ritual time, but imagery is canonical and repeatable.

## 4) Card Anatomy (Shared by all 96 cards)
All cards follow one structural template:

1. **Frame Band** (outer border): deck-specific border grammar.
2. **Sigil Header** (top 15%): deck icon + card number (I–VIII or 1–8).
3. **Central Glyph Scene** (middle 60%): primary symbolic image.
4. **Ritual Strip** (bottom 25%): card title + optional one-line effect cue.

Layout ratio target: **15 / 60 / 25**.

## 5) Semantic Ladder (Shared Meaning Engine)
Each deck uses the same 8-card meaning ladder:

1. Summons
2. Incision
3. Extraction
4. Reading
5. Compliance
6. Reversal
7. Overload
8. Catastrophe / Transcendence

This preserves cross-deck legibility while allowing deck-specific icon families.

## 6) Visual Style Rules (SVG-first)
- Base style: monochrome line engraving + hatch detail.
- Keep **silhouette clarity first**, interior detail second.
- Avoid heavy gradients/raster dependencies in canonical set.
- Line-weight targets:
  - Primary contour: 2.5–3 px
  - Secondary structure: 1.5–2 px
  - Texture/hatching: 0.75–1 px
- Design to read at:
  - Tiny: 96×136
  - Standard: 320×448
  - Print: 744×1038+

## 7) Color System
### Base neutrals
- Ink Black `#141414`
- Bone Paper `#F2EBDD`
- Archive Gray `#8E8A83`

### Accent families
- Gold `#D4A72C`
- Emerald `#1F7A53`
- Silver `#B7BDC7`
- Red `#9E1B1B`
- Violet (optional) `#7A5CC7`

## 8) Deck Identity DNA (12 Decks)
Each deck should own a unique motif family + shape language + interloper cue.

1. **Lion — Oz-Tarot**: claws, heart-cages, crowned fear forms.
2. **Tin Man — Scrapyard Tarot**: rivets, gears, hinged organs, oil channels.
3. **Scarecrow — Straw Oracle**: stitches, twine, straw lattices, ledger scraps.
4. **Dorothy — Dust Oracle**: brick traces, dust spirals, transit marks, storm vectors.
5. **Glinda — Refraction Oracle**: lens rings, prism cuts, mirrored anatomy.
6. **Witch West — Malice Oracle**: hooked forms, smoke barbs, surveillance eyes.
7. **Witch East — Impact Oracle**: crack radii, compression sigils, impact crowns.
8. **Wizard — Projection Oracle**: curtains, horns, spotlight cones, hidden levers.
9. **Munchkins — Agricultural Audit**: crop rows, grid checks, communal tools.
10. **Winged Monkeys — Kinetic Harvest**: feather-blades, talons, velocity arcs.
11. **Kalidahs — Merge Oracle**: fused skulls, parasitic cords, mirrored maws.
12. **Poppy Field — Pharmaceutical Oracle**: petal veins, IV lines, seed-heart pods.

## 9) Asset Layout + Naming
Recommended repository structure:

```text
assets/cards/
  templates/
    oracle-base.svg
  lion/
    lion-01-summons.svg
    ...
    lion-08-catastrophe.svg
  tin-man/
    tin-man-01-summons.svg
    ...
  ...
  overlays/
    interloper-stamps/
    noise/
    flicker/
```

Naming convention:
- `{deck}-{index:02d}-{ladder-key}.svg`
- Example: `wizard-03-extraction.svg`

## 10) Runtime Ritual UX (App Side)
Runtime flow should be:

1. Select deck.
2. RNG selects index 1–8.
3. Load canonical SVG.
4. Apply presentation mode (mono/accent/full).
5. Add optional overlays (stamp/noise/flicker).
6. Play reveal animation sequence.

Important UX rules:
- Show short shuffle burst before reveal.
- Never expose deterministic index/order in UI copy.
- Treat interloper overlay as “administrator presence,” not card replacement.

## 11) Controlled Variants (Allowed vs Not Allowed)
**Allowed (good generation):**
- Subtle line jitter
- Ink bleed/noise masks
- Stamp rotation/placement
- Flicker/glitch reveal timing

**Not allowed (bad generation):**
- Rebuilding core icon geometry at draw time
- Changing card composition semantics
- Altering ladder meaning per draw
- Motif remix that obscures deck identity

## 12) Implementation Phases
### Phase 1 (now)
- Finalize 12 deck sigils.
- Fully illustrate 1 complete deck (8 cards).
- Integrate and test in UI.

### Phase 2
- Complete all remaining cards to reach 96 canonical SVGs.

### Phase 3
- Add runtime polish: overlays, flicker, reveal choreography, color mode switching.

## 13) Quality Bar Checklist
- Deck recognizable in <1 second at thumbnail.
- Ladder state (1–8) recognizable without reading body text.
- Interloper cue appears in each card.
- No two decks share border grammar.
- Monochrome pass remains fully legible.
- SVGs validate clean (no broken paths/unsupported features).
- Runtime effects never change canonical semantic meaning.

## 14) Card Data Model (App Contract)
Use a typed card contract so fixed SVG assets, narrative text, and ritual logic stay synchronized:

```ts
type Card = {
  id: string
  name: string

  // Visual
  svg: string

  // Narrative
  description: string
  tone: 'assimilation' | 'rebellion' | 'compliance' | 'paranoia' | 'rupture' | 'transcendence'

  // System logic
  weight: (state) => number
  effects: Effect[]

  // Routing
  unlocks?: string[]
  blocks?: string[]
  redirects?: string
}
```

Implementation note: keep this schema in code (`artifacts/mockup-sandbox/src/game/oracle/types.ts`) and treat `svg` as a stable asset key/path to canonical card art.
