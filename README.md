# THE YELLOW BRICK LOAD

A browser-based interactive fiction engine built with React, Zustand, and Vite.
Players navigate a corrupted Oz-derived simulation, choosing which of eight characters to inhabit and accumulating system metrics (Load, Desync, Smudge, Compliance) that alter text, unlock conditions, and route them toward one of dozens of numbered endings.

---

## Local development

```bash
npm install
npm run dev      # Vite dev server at http://localhost:5173
npm run build    # Production build → dist/
npm run preview  # Serve the production build locally
npm run lint     # ESLint (flat config)
npm test         # Vitest unit + component tests
```

---

## Architecture overview

| Path | Purpose |
|---|---|
| `src/engine/store.js` | Zustand state machine — all game variables and mutations |
| `src/engine/interpreter.js` | Pure helpers: `interpolate`, `resolveText`, `applyEffects`, `isChoiceAvailable` |
| `src/passages/` | Passage data files, one per character; merged in `index.js` |
| `src/components/PassageRenderer.jsx` | Renders the active passage, choices, and ending state |
| `src/components/TitleScreen.jsx` | Character-select screen |
| `src/components/ErrorBoundary.jsx` | React error boundary — catches render errors gracefully |

---

## Passage object schema

Every passage is a plain JS object stored in a character passage file:

```js
{
  id: 'LION_COURAGE_TEST',      // string — unique node identifier

  character: 'lion',            // string | null — owning character (null = off-grid)

  text: [                       // array — one or more overrender variants
    { minOverrender: 0, content: 'The road narrows.' },
    { minOverrender: 3, content: 'The road narrows narrows narrows—' },
  ],
  // resolveText() picks the block with the highest minOverrender <= current overrender.
  // Text content supports token replacement (see below).

  choices: [                    // array — player options
    {
      label: 'Step forward.',
      target: 'LION_ADVANCE',   // node ID to navigate to on selection
      effects: [                // array of effect descriptors (see below)
        { type: 'addLoad', value: 5 },
        { type: 'addDesync', value: 1 },
      ],
      condition: null,          // fn(state) => bool | null — null means always visible
    },
  ],

  onEnter: [                    // array — effects fired when the passage loads
    { type: 'addSmudge', value: 1 },
    { type: 'checkGhostSignal' },
  ],

  isEnding: false,              // bool — hides choices and shows restart button
  endingId: 'L-END-15',        // string — ending code shown in footer
  endingName: 'Royal Compliance', // string — ending name shown in footer
  isGhostSignal: false,         // bool — off-grid ending; shows terminate button

  stub: false,                  // bool — marks unwritten passages (styled differently)
  fake: false,                  // bool — all choices collapse to the first valid target
}
```

### Effect types

| `type` | Extra fields | Description |
|---|---|---|
| `addLoad` | `value: number` | Increase Load (capped at 99) |
| `addDesync` | `value: number` | Increase Desync drift counter |
| `addSmudge` | `value: number` | Increase Smudge level (capped at 3) |
| `addOverrender` | `value: number` | Increase text-decay level (capped at 5) |
| `setCompliance` | `value: string` | Set Compliance to `"low"`, `"med"`, `"high"`, or `"broken"` |
| `setFlag` | `key: string`, `value?: any` | Set an arbitrary flag in `state.flags` (default `true`) |
| `softReset` | — | Reset most counters, increment `reset_count`, return to `{CHARACTER}_INIT` |
| `checkGhostSignal` | — | Evaluate Ghost Signal trigger conditions |
| `armGhostSignal` | — | Arm the Ghost Signal directly |

### Token replacement in text content

`interpolate(text, state)` replaces these tokens before rendering:

| Token | Replaced with |
|---|---|
| `{{load}}` | Current Load value |
| `{{desync}}` | Current Desync value |
| `{{compliance}}` | Current Compliance level |
| `{{character}}` | Active character ID (or `"unit"` if unset) |
| `{{reset_count}}` | Number of soft resets |
| `{{smudge}}` | Current Smudge level |
| `{{flags.KEY}}` | Value of `state.flags["KEY"]` (empty string if unset) |

---

## Character / ending status

| Character | Unit | Status |
|---|---|---|
| Lion | L-77 | ✅ Implemented (21 endings, L-END-11 – L-END-31) |
| Tin Man | T-88 | 🚧 Stub (prose available, needs wiring) |
| Scarecrow | S-99 | 🚧 Stub (prose started, needs wiring) |
| Dorothy | D-01 | ⬜ Planned |
| Witch West | W-66 | ⬜ Planned |
| Wizard | Z-00 | ⬜ Planned |
| Glinda | G-01 | ⬜ Planned |
| Witch East | E-00 | ⬜ Planned |

Ghost Signal ending **D-ERR-99** is character-agnostic and fires off-grid when specific conditions are met.

---

## State variables

| Variable | Type | Description |
|---|---|---|
| `load` | `number` 0–99 | Progress fill — never reaches 100 |
| `desync` | `number` | System drift counter |
| `smudge` | `number` 0–3 | Visual corruption level |
| `compliance` | `"low"\|"med"\|"high"\|"broken"` | Behavioural compliance rating |
| `reset_count` | `number` | Number of soft resets performed |
| `overrender` | `number` 0–5 | Text-decay level |
| `character` | `string\|null` | Active character ID |
| `currentNode` | `string\|null` | Active passage ID |
| `history` | `string[]` | Ordered list of visited node IDs (preserved across soft resets) |
| `flags` | `object` | Arbitrary key/value plot state flags |
| `ghostSignalArmed` | `bool` | Whether Ghost Signal countdown is running |
| `ghostSignalFired` | `bool` | Whether Ghost Signal has already fired |

