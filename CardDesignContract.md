# YELLOW BRICK LOAD  
## Oracle Card Art System  
The Complete Visual System — Combined Best Practices (v3.5)

Tags: 12 Decks · 96 Cards · Ritual Draw · Non-Controllable · SVG-First · Scale-Friendly

---

## 1. Intent

Create a coherent visual language for 12 oracle decks / 96 cards that feels:
- ritualistic  
- bureaucratic  
- unsettling  

While remaining readable at small sizes.

- 8 playable-unit decks use character-specific oracle motifs and their Interloper  
- 4 enforcer decks use swarm / institution motifs  
- Card draw is intentionally random and non-controllable; visuals reinforce fate, noise, and administrative violence  

---

## 2. System Overview

### Meaning Engine
All decks share the same 8-step semantic ladder so players learn pacing subconsciously.

### Deck DNA
Each deck has a unique:
- motif family  
- shape language  
- color tendency  

### Ritual UX
The Interloper administers the draw.  
Reveal sequence feels like fate, not player choice.

---

## 3. Semantic Ladder (All Decks)

Every deck uses the same 8 card types in the same order:

1. Summons (entry)  
2. Incision (intervention begins)  
3. Extraction (resource taken)  
4. Reading (prophecy interpreted)  
5. Compliance (temporary stabilization)  
6. Reversal (unexpected mutation)  
7. Overload (severe destabilization)  
8. Catastrophe / Transcendence (terminal or transformative state)

---

## 4. Composition Template (Shared)

All cards use one consistent anatomy:

1. Frame Band (outer border)  
   Deck identity pattern (teeth, stitches, prism facets, etc.)

2. Sigil Header (top ~15%)  
   Deck icon + card number (I–VIII or 1–8)

3. Central Glyph Scene (~60%)  
   Main symbolic line-art  
   Must read at thumbnail scale

4. Ritual Strip (~25%)  
   Short title + optional one-line effect text

Layout ratio: 15% / 60% / 25%

---

## 5. Visual Style Rules

- Format: plain SVG, viewBox="0 0 720 1080" (portrait)
- Stroke weights:
  - Primary: 2.5–3px  
  - Secondary: 1.5–2px  
  - Texture: 0.75–1px  
- Use hatch lines instead of raster textures  
- Flat fills only (20–35% opacity max)  
- Strong silhouette first, detail second  
- File size target: <120KB  
- Must read at:
  - Tiny: 96×136  
  - Standard: 320×448  
  - Print: 744×1038+  

---

## 6. Color System

### Base Neutrals
- Ink Black: #141414  
- Bone Paper: #F2EBDD  
- Archive Gray: #8E8A83  

### Accent Families (choose one per deck)
- Gold: #D4A72C  
- Emerald: #1F7A53  
- Silver: #B7BDC7  
- Red: #9E1B1B  
- Violet (optional): #7A5CC7  

---

## 7. 12 Deck Identities (DNA Overview)

Each deck defines:

- Motif Family
- Shape Language
- Accent Tendency
- Interloper Cue

### Examples

Lion — Oz Tarot
- Motifs: claws, heat, mane seals  
- Shapes: curved / arc-heavy  
- Accent: gold + black  
- Interloper: surgical stamp claw  

Tin Man — Scrapyard Tarot
- Motifs: rivets, valves, oil  
- Shapes: hinged grids  
- Accent: silver + rust  
- Interloper: wrench / valve key  

Scarecrow — Straw Oracle
- Motifs: straw bundles, stitching  
- Shapes: looped cross-stitch  
- Accent: hay green  
- Interloper: straw quill + ledger  

Dorothy — Dust Oracle
- Motifs: roads, bricks, storm spirals  
- Shapes: path overlays  
- Accent: sepia red  
- Interloper: ticket punch / clip  

(Continue for all 12 decks in implementation file)

---

## 8. Ritual Draw UX Language

Sequence:

1. Shuffle Burst  
2. Static Noise / Glyph Flicker  
3. Card Face Reveal  

Rules:
- Always show a brief shuffle burst  
- Interloper is the unseen administrator  
- Never expose deterministic order, count, or deck index  

---

## 9. Card Construction (Per Deck)

Each deck produces 8 cards using the ladder:

- Start with silhouette  
- Add interior detail  
- Add accent fills  

Maintain:
- motif consistency  
- shape consistency  
- subtle Interloper presence in every card  

---

## 10. SVG Production Pipeline

### Phase A — Foundation (1–2 days)
- Build master SVG template with layers:
  - frame  
  - header  
  - scene  
  - ritual_strip  
- Create 12 deck frames  
- Naming: deck-card_##.svg

---

### Phase B — Illustration (3–5 days)
- Define 8 sigils per deck  
- Start line-only  
- Add fills + hatching  
- Reuse primitives  

---

### Phase C — Integration (1 day)
- Hook images into UI  
- Add fallback states  
- QA all 96 cards  

---

### Export Variants
- line-mono  
- line-accent  
- line-full  

---

### Suggested File Layout

assets/cards/   templates/     oracle-base.svg   frames/     lion-frame.svg     tin-man-frame.svg   symbols/     lion/       01-summons.svg       02-incision.svg       ...   previews/ (optional)     lion-01@2x.png

---

## 11. Quality Bar Checklist

- Card recognizable in <1 second at thumbnail  
- Card state (1–8) readable without text  
- Interloper hint present in every card  
- No duplicate border grammar across decks  
- Monochrome version fully legible  
- Clean SVGs (no broken paths)  
- Tone matches: bureaucratic, ritualistic, unsettling  

---

## 12. Next Implementation Step

Produce 1 hero card per deck (12 total) before full 96-card production.

Purpose:
- validate visual system  
- test semantic clarity  
- align narrative + gameplay early  

---

System Principle:  
> The draw is not random.  
> It only appears that way to the unit.
