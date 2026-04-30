# YELLOW BRICK LOAD — Oracle Card Art System
## The Complete Visual System & Production Reference

Tags: 12 Decks · 96 Cards · Ritual Draw · Non-Controllable · SVG-First · Scale-Friendly

---

## 1. Architecture Decision (Non-Negotiable)

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

---

## 2. Why Full Runtime Generation Is Wrong

Full runtime generation (new card composition per draw) undermines core goals:

- Breaks symbolic consistency and player memory.
- Weakens ritual repetition (fate becomes noise).
- Introduces visual drift and readability variance at thumbnail sizes.
- Adds runtime/performance complexity for little narrative benefit.

Allowed procedural effects are strictly cosmetic (noise, jitter, stamp placement) — not semantic.

---

## 3. Intent

Create a coherent visual language for **12 decks / 96 cards** that feels:
- ritualistic
- bureaucratic
- unsettling

While remaining readable at small sizes.

- 8 playable-unit decks use character-specific oracle motifs and their Interloper.
- 4 enforcer decks use swarm / institution motifs.
- Card draw is intentionally random and non-controllable; visuals reinforce fate, noise, and administrative violence.

---

## 4. Card Anatomy (Shared by All 96 Cards)

All cards follow one structural template:

1. **Frame Band** (outer border): deck-specific border grammar.
2. **Sigil Header** (top 15%): deck icon + card number (I–VIII or 1–8).
3. **Central Glyph Scene** (middle 60%): primary symbolic line-art. Must read at thumbnail scale.
4. **Ritual Strip** (bottom 25%): card title + optional one-line effect cue.

Layout ratio target: **15 / 60 / 25**.

---

## 5. Semantic Ladder (Shared Meaning Engine)

Every deck uses the same 8-card meaning ladder in the same order:

1. Summons (entry)
2. Incision (intervention begins)
3. Extraction (resource taken)
4. Reading (prophecy interpreted)
5. Compliance (temporary stabilization)
6. Reversal (unexpected mutation)
7. Overload (severe destabilization)
8. Catastrophe / Transcendence (terminal or transformative state)

This preserves cross-deck legibility while allowing deck-specific icon families.

---

## 6. Visual Style Rules (SVG-First)

- **Format:** plain SVG, `viewBox="0 0 720 1080"` (portrait)
- **Base style:** monochrome line engraving + hatch detail; use hatch lines instead of raster textures
- **Silhouette clarity first**, interior detail second
- **Flat fills only** — 20–35% opacity max; avoid heavy gradients
- **Stroke weights:**
  - Primary contour: 2.5–3 px
  - Secondary structure: 1.5–2 px
  - Texture / hatching: 0.75–1 px
- **File size target:** < 120 KB per card
- **Must read at:**
  - Tiny: 96 × 136
  - Standard: 320 × 448
  - Print: 744 × 1038+

---

## 7. Color System

### Base Neutrals
- Ink Black: `#141414`
- Bone Paper: `#F2EBDD`
- Archive Gray: `#8E8A83`

### Accent Families (one per deck)
- Gold: `#D4A72C`
- Emerald: `#1F7A53`
- Silver: `#B7BDC7`
- Red: `#9E1B1B`
- Violet (optional): `#7A5CC7`

---

## 8. Deck Identity DNA (All 12 Decks)

Each deck owns a unique motif family, shape language, accent tendency, and interloper cue.

| # | Deck | Motif Family | Shape Language | Accent | Interloper Cue |
|---|------|-------------|---------------|--------|---------------|
| 1 | **Lion — Oz-Tarot** | Claws, heart-cages, crowned fear forms, heat, mane seals | Curved / arc-heavy | Gold + black | Surgical stamp claw (Bureau Crow) |
| 2 | **Tin Man — Scrapyard Tarot** | Rivets, gears, hinged organs, oil channels, valves | Hinged grids | Silver + rust | Wrench / valve key (Maintenance Auditor) |
| 3 | **Scarecrow — Straw Oracle** | Stitches, twine, straw lattices, ledger scraps | Looped cross-stitch | Hay green | Straw quill + ledger (Straw Clerk) |
| 4 | **Dorothy — Dust Oracle** | Brick traces, dust spirals, transit marks, storm vectors | Path overlays | Sepia red | Ticket punch / clip (Dust Clerk) |
| 5 | **Glinda — Refraction Oracle** | Lens rings, prism cuts, mirrored anatomy | Prismatic facets | Silver + violet | Porcelain Auditor |
| 6 | **Witch West — Malice Oracle** | Hooked forms, smoke barbs, surveillance eyes | Sharp barbs / hooks | Red + black | Obsidian Matron |
| 7 | **Witch East — Impact Oracle** | Crack radii, compression sigils, impact crowns | Radiating fracture lines | Red | Ground Impact Assessor |
| 8 | **Wizard — Projection Oracle** | Curtains, horns, spotlight cones, hidden levers | Theatrical frame / curtain geometry | Gold | Humbug Surgeon |
| 9 | **Munchkins — Agricultural Audit** | Crop rows, grid checks, communal tools | Grid / field rows | Emerald | Lead Munchkin |
| 10 | **Winged Monkeys — Kinetic Harvest** | Feather-blades, talons, velocity arcs | Swept arcs / wing geometry | Silver + red | Wing Captain |
| 11 | **Kalidahs — Merge Oracle** | Fused skulls, parasitic cords, mirrored maws | Symmetrical fused forms | Red + black | Merge Coordinator |
| 12 | **Poppy Field — Pharmaceutical Oracle** | Petal veins, IV lines, seed-heart pods | Organic loops / vein channels | Emerald + gold | Field Pharmacist |

---

## 9. Asset Layout & Naming

### Recommended Repository Structure

```text
assets/cards/
  templates/
    oracle-base.svg
  lion/
    lion-01-summons.svg
    lion-02-incision.svg
    ...
    lion-08-catastrophe.svg
  tin-man/
    tin-man-01-summons.svg
    ...
  scarecrow/
  dorothy/
  glinda/
  witch-west/
  witch-east/
  wizard/
  munchkins/
  winged-monkeys/
  kalidahs/
  poppy-field/
  overlays/
    interloper-stamps/
    noise/
    flicker/
  previews/ (optional)
    lion-01@2x.png
```

### Naming Convention

Pattern: `{deck}-{index:02d}-{ladder-key}.svg`

Example: `wizard-03-extraction.svg`

### Export Variants (per card)

- `line-mono` — ink only, no fills
- `line-accent` — ink + accent color
- `line-full` — ink + accent + secondary fills

---

## 10. Runtime Ritual UX (App Side)

### Draw Sequence

1. Select deck based on active character.
2. RNG selects card index 1–8.
3. Load canonical SVG asset.
4. Apply presentation mode (`mono` / `accent` / `full`).
5. Add optional overlays (interloper stamp, noise mask, flicker).
6. Play reveal animation: **Shuffle Burst → Static Noise / Glyph Flicker → Card Face Reveal**.

### UX Rules

- Always show a brief shuffle burst before reveal.
- Interloper overlay is "administrator presence" — never card replacement.
- Never expose deterministic index, order, or deck count in UI copy.

---

## 11. Controlled Variants

### Allowed (good procedural effects)
- Subtle line jitter
- Ink bleed / noise masks
- Stamp rotation / placement
- Flicker / glitch reveal timing

### Not Allowed (bad generation)
- Rebuilding core icon geometry at draw time
- Changing card composition semantics
- Altering ladder meaning per draw
- Motif remix that obscures deck identity

---

## 12. Card Construction Process (Per Deck)

When producing each card:

1. Start with silhouette only (strong outer read)
2. Add interior line detail
3. Add accent color fills (20–35% opacity)
4. Add subtle interloper presence (stamp, trace, or mark)
5. Export all three variants (mono / accent / full)

Maintain motif consistency, shape consistency, and deck border grammar across all 8 cards.

---

## 13. Card Data Model (App Contract)

Keep this schema in `artifacts/mockup-sandbox/src/game/oracle/types.ts`. Treat `svg` as a stable asset key / path to canonical card art.

```ts
type Card = {
  id: string
  name: string

  // Visual
  svg: string   // stable path to canonical SVG asset

  // Narrative
  description: string
  tone: 'assimilation' | 'rebellion' | 'compliance' | 'paranoia' | 'rupture' | 'transcendence'

  // System logic
  weight: (state: OracleRuntimeState) => number
  effects: OracleEffect[]

  // Routing
  unlocks?: string[]
  blocks?: string[]
  redirects?: string
}
```

---

## 14. Implementation Phases

### Phase 1 — Foundation (now)
- Build master SVG template with layers: `frame`, `header`, `scene`, `ritual_strip`
- Create 12 deck frames
- Finalize 12 deck sigils
- Produce 1 hero card per deck (12 total) to validate visual system, semantic clarity, and narrative alignment before full production
- Integrate and test in UI; validate quality bar

### Phase 2 — Full Production
- Define and illustrate all 8 cards per deck to reach **96 canonical SVGs**
- Work order: start line-only, add fills + hatching, reuse primitives across deck
- Add fallback / error states for missing assets
- QA all 96 cards against quality bar

### Phase 3 — Runtime Polish
- Add all runtime overlays: interloper stamps, noise masks, flicker / glitch timing
- Implement reveal choreography and color mode switching
- Final performance and readability pass at all target sizes

---

## 15. Quality Bar Checklist

- [ ] Card / deck recognizable in < 1 second at thumbnail
- [ ] Ladder state (1–8) readable without body text
- [ ] Interloper cue present in every card
- [ ] No two decks share the same border grammar
- [ ] Monochrome version fully legible
- [ ] SVGs validate clean (no broken paths, no unsupported features)
- [ ] File size < 120 KB per card
- [ ] Flat fills only (20–35% opacity); no raster textures
- [ ] Runtime effects never change canonical semantic meaning
- [ ] Tone matches: bureaucratic, ritualistic, unsettling

---

> The draw is not random.
> It only appears that way to the unit.
