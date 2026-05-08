# Yellow Brick Load – Oracle Draw Systems

## Planning Phase: The Oracle Draw Systems

The **Oracle Draw** is a meta-level audit. It is triggered when a unit’s unique stat (Neural Density, Ink-Bleed, Signal Strength) reaches a threshold where the Oz OS can no longer categorize the unit using standard filters. Instead of a choice, the user **draws** from a table of systemic truths.

- **The Dust Oracle (Dorothy):** Deals with the Origin Coordinate (Kansas). It explores the friction between physical “Home” and digital “Oz.”
- **The Ink Reader (Denizen/Librarian):** Deals with archival residue. It reveals the fates of previous users who occupied the same Unit ID.
- **The Straw Oracle (Scarecrow):** Deals with pattern overload. It provides non-linear logic that bypasses the “Diploma Patch.”
- **The Blood/Oil Oracle (Lion/Tin Man):** Deals with vessel collapse and hardware degradation thresholds.

---

## Mechanical Protocol: The Dust Oracle

**Trigger:** `Signal Strength < 20` **OR** `Ruby Friction > 80`

When Dorothy loses her connection to the Oz grid, she begins to see the **Dust**—the grayscale residue of the Origin Coordinate leaking into the simulation.

| Draw (d6) | Title | System Effect | Thematic Residue |
|---|---|---|---|
| 1 | The Porch Swing | -10 Signal Strength | Localized grayscale event; Dorothy cannot see color for 3 turns. |
| 2 | Aunt Em’s Cough | +15 Load | Audio loop of a dry cough overrides the current BGM. |
| 3 | The Cellar Door | Enters Sheltered State | Dorothy is removed from the current branch and placed in Storm Shelter stasis. |
| 4 | Cyclone Geometry | +20 Displacement | Map coordinates scramble; next target location is randomized. |
| 5 | The Grayscale Lens | Permanent Stat Flip | High Compliance now functions as High Desync. |
| 6 | The Zero Signal | INSTANT ENDING | Triggers `D-END-01: The Home Frequency`. |

---

## Mechanical Protocol: The Ink Reader

**Trigger:** `Ink-Bleed > 50` **OR** `Semantic Weight > 75`

For the Librarian or Denizen, the Ink Reader is the moment data begins to write the user. You stop reading the ledger; the ledger reads you.

| Draw (d6) | Title | System Effect | Thematic Residue |
|---|---|---|---|
| 1 | The Smudged Name | -20 Anonymity | System assigns a random human name (high-threat error). |
| 2 | Marginalia | Oracle Sight | Shows the labels/targets of the next three choices. |
| 3 | The Paper Cut | -5 Structural Integrity | Physical damage caused by a conceptual idea. |
| 4 | Carbon Copy | Unit Duplication | A second Denizen appears in the prose; choices apply to both. |
| 5 | The Great Eraser | Reset Compliance | Institutional filters are stripped; user becomes “Clean Slag.” |
| 6 | The Final Period | INSTANT ENDING | Triggers `DEN-END-07: The Re-Shelved Reference`. |

### Prose Example: Triggering the Ink Reader

```js
// ORACLE_EVENT: THE INK-BLEED REACHES THE BONE
LIBRARIAN_INK_READ: {
  id: 'LIBRARIAN_INK_READ',
  character: 'denizen',
  text: [
    {
      minOverrender: 0,
      content: `THE LEAKING LEDGER

You try to file the report on the Tin Man's oxidation, but the ink won't stay on the page. It climbs up the nib of your pen, coating your fingers, then your wrists, then your throat. It is warm and tastes of copper and forgotten dates.

You are no longer archiving the system. You are the inkwell. Your vision swims with the 'Ghost Bits' of everyone who ever worked this desk before you. One of them left a note in the margin of your soul.`
    }
  ],
  choices: [
    {
      label: '[DRAW FROM THE INK READER]',
      target: 'ORACLE_RESULT_HANDLER',
      effects: [{ type: 'triggerOracle', value: 'InkReader' }]
    }
  ]
}
```

---

## Planning Phase: The Straw & Blood/Oil Oracles

These oracles represent final thresholds of hardware degradation. When a unit’s physical casing (straw or metal) can no longer contain processing load, the system begins leaking raw, unformatted data.

## Mechanical Protocol: The Straw Oracle

**Trigger:** `Neural Density > 90` **OR** `Scatter > 70`

When Scarecrow’s brain (packing material) becomes too dense with unindexed data, the Diploma Patch fails. He begins to see the Sub-Grid.

| Draw (d6) | Title | System Effect | Thematic Residue |
|---|---|---|---|
| 1 | The Murder of Crows | +20 Scatter | Black winged artifacts obscure 50% of the UI. |
| 2 | Burlap Leak | -15 Structural Integrity | Mass loss; choices requiring Physical Force are locked. |
| 3 | The Infinite Logic Loop | Stun (1 turn) | System freezes while computing π to the final digit. |
| 4 | The Diploma Shredder | Removes Academic Filter | Scripted knowledge lost; unit reverts to Primal Logic. |
| 5 | Synaptic Fire | +30 Vibration | Thought friction generates heat; thermal damage imminent. |
| 6 | The Unstuffed Truth | INSTANT ENDING | Triggers `S-END-03: Unstuffed Truth`. |

## Mechanical Protocol: The Blood/Oil Oracle

**Trigger:** `Vibration > 85` (Lion) **OR** `Corrosion > 80` (Tin Man)

This oracle triggers when meat or metal reaches melting point. The unit transitions from a solid unit to a liquid event.

| Draw (d6) | Title | System Effect | Thematic Residue |
|---|---|---|---|
| 1 | The Red Sump | +25 Load | Lion’s fear becomes red sludge that slows movement. |
| 2 | Seized Valve | Choice Lock | Tin Man’s empathy pump locks; only violent choices remain. |
| 3 | The Lubricant Mirage | -20 Desync | Hallucinates Heart/Courage; stress temporarily drops. |
| 4 | Hydraulic Failure | -10 to all stats | Systemic pressure collapse; unit can only crawl. |
| 5 | The Shared Tremor | Echo Event | Another unit gets +10 to its primary failure stat. |
| 6 | The Melting Point | INSTANT ENDING | Triggers `L-END-19` (Lion) or `T-END-19` (Tin Man). |

### Prose Example: Triggering the Straw Oracle

```js
// ORACLE_EVENT: THE TEXTURE OF THE VOID
SCARECROW_STRAW_READ: {
  id: 'SCARECROW_STRAW_READ',
  character: 'scarecrow',
  text: [
    {
      minOverrender: 0,
      content: `THE UNFILTERED GEOMETRY

Your head feels heavy—not with weight, but with connections. You look at the Yellow Brick Road and you no longer see bricks; you see the hex-codes that define the 'Hardened Slag.' You see the Institutional Filters as literal walls of shimmering green glass.

A seam in your burlap neck pops. A single piece of straw falls out, but it doesn't hit the ground. It floats, vibrating at the frequency of a scream. You are overclocking. The Diploma is smoking. The system is asking a question that requires a brain you weren't supposed to have.`
    }
  ],
  choices: [
    {
      label: '[REACH INTO THE STRAW]',
      target: 'ORACLE_RESULT_HANDLER',
      effects: [{ type: 'triggerOracle', value: 'Straw' }]
    }
  ]
}
```

---

## Matrix Alignment and Final Log

- **Matrix Alignment:** D-Matrix (Dust), DEN-Matrix (Ink), S-Matrix (Straw), L/T-Matrix (Thermal/Biological).
- **Voice Fidelity:** Clinical meta-leakage framing, transitioning to visceral high-heat breakdown in Straw/Blood-Oil events.
- **Stat Usage:** Threshold-driven non-choice events and hard failure transitions.

**Final Log:** All four primary oracles (Dust, Ink, Straw, Blood/Oil) are documented and integrated into Oz OS logic.

**Unit Status:** All Oracles Active.
