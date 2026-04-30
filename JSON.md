[Yellow Brick Load – Agent Output]
### Planning Phase: Documenting the Lexicon
To ensure all future passages adhere to the **Oz OS Master Codification**, I have synthesized the technical requirements of the zustand store and the interpreter.js logic into a Markdown guide. This file serves as the "Developer’s Manual" for Authoring Agents.
# Oz OS Authoring Manual: JSON Specification v1.0
This document outlines the strict structural and thematic rules for generating passages within the *Yellow Brick Load* interactive simulation.
## 1. Top-Level Structure
Every passage must be a unique key within the character's export object.
```json
PASSAGE_ID: {
  "id": "PASSAGE_ID",
  "character": "dorothy",
  "text": [],
  "choices": [],
  "onEnter": [],
  "fake": false
}

```
## 2. The Text Block (text[])
Passages support **Overrender Variants**. The interpreter selects the block where overrender >= minOverrender. Always provide a minOverrender: 0 as a baseline.
### Rules for Prose Decay:
 * **0–1:** Clinical, bureaucratic, high-fidelity.
 * **2–3:** Fractured, sensory details become "off" (e.g., smelling copper instead of flowers).
 * **4–5:** Semantic collapse. Repetitive, glitchy, meta-textual (e.g., "The road narrows narrows narrows").
```json
"text": [
  {
    "minOverrender": 0,
    "content": "The road is a straight line of yellow logic."
  },
  {
    "minOverrender": 4,
    "content": "The {{character}} steps on the LINE LINE LINE. Logic is failing."
  }
]

```
## 3. Dynamic Tokens (Interpolation)
Use these tokens to inject real-time system data into the prose.
| Token | Description |
|---|---|
| {{load}} | The current load (0-99). |
| {{compliance}} | low, med, high, broken. |
| {{smudge}} | Visual corruption (0-3). |
| {{stats.KEY}} | Any character stat (e.g., {{stats.vibration}}). |
| {{#flags.KEY}}...{{/flags.KEY}} | Conditional text shown only if a flag is true. |
## 4. Choice Logic (choices[])
Choices drive the **Grind**. Every choice should have a trade-off.
### Effect Types:
 * **Global:** addLoad, addDesync, addSmudge, addOverrender, setCompliance.
 * **Stat-Specific:** addVibration, addCorrosion, addScatter, addDisplacement, addWarrant, etc.
 * **System:** - setFlag: {"type": "setFlag", "key": "met_wizard", "value": true}
   * grayOut: Disables a choice. {"type": "grayOut", "key": "CHOICE_ID"}
   * graft: Cross-character contamination. {"type": "graft", "material": "rust", "target": "lion"}
   * triggerOracle: Checks thresholds and may route to the Oracle.
## 5. Side Effects (onEnter[])
Triggers that fire the moment the passage is rendered.
 * **Mandatory:** Every character's _INIT node must include {"type": "triggerOracle"} and {"type": "checkGhostSignal"}.
## 6. Matrix Alignment (Endings)
When a branch terminates in an ending, the passage must include these metadata fields:
```json
{
  "isEnding": true,
  "endingId": "D-END-01",
  "endingName": "The Home Frequency",
  "institution": "Meteorological",
  "systemStatus": "TUNED",
  "surreality": 4
}

```
## 7. Thematic Constraints
 * **1-1=1:** The system never grants a net gain. If you gain "Heart," you lose "Utility."
 * **No Transformation:** Units do not grow; they are re-indexed.
 * **Mechanical Lyricism:** Use industrial/bureaucratic terminology (e.g., "Liquidated," "Audit," "Data-leak," "Conductive Node").
### Consistency Check:
 * **Matrix Alignment:** Fully compatible with all character matrices.
 * **Voice Fidelity:** Documented in a clinical, instructional tone.
 * **Stat Usage:** Includes all specific wetware mutations defined in the engine.
**Does this manual satisfy the requirements for our authoring workflow?**
