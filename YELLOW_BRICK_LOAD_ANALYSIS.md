# YELLOW BRICK LOAD — Complete Codebase Analysis

**Deep analysis of the interactive fiction engine at `artifacts/yellow-brick-load/src/passages/`**  
*305 total passage IDs across 11 files, verified via programmatic extraction*

---

## PART 1: STORY MAPS

### System Overview

| Character | Entry Point | File(s) | Passages | Endings |
|-----------|-------------|---------|----------|---------|
| Lion | LION_INIT | lion_branches.js, lion_endings.js | 71 + 34 = **105** | 32 |
| Tin Man | TIN_MAN_INIT | tin_man.js | **26** | 13 (1 stub) |
| Scarecrow | SCARECROW_INIT | scarecrow.js | **17** | 3 |
| Dorothy | DOROTHY_INIT | dorothy.js | **18** | 4 |
| Glinda | GLINDA_INIT | glinda.js | **18** | 6 |
| Wizard | WIZARD_INIT | wizard.js | **18** | 6 |
| Witch West | WITCH_WEST_INIT / WITCH_WEST_INIT_B | witch_west_stubs.js + witch_west_endings.js | 41 + 6 = **47** | 6 |
| Witch East | WITCH_EAST_INIT | witch_east.js | **16** | 4 |
| Enforcers | (via triggerOracle) | enforcers.js | **40** | 0 (loop back) |
| **TOTAL** | | | **305** | **74** |

Oracle/Ghost-signal passages are entered via `triggerOracle` and `checkGhostSignal` engine effects, not via explicit `target:` choices — so oracle `_ENTRY` and `_DRAW` passages are legitimately "orphaned" from the choice graph.

---

## THE LION (Unit L-77)

**Theme:** Vibration/Fear, Kingship as institutional construct  
**Oracle:** Bureau Crow (8 outcomes) — entered via `triggerOracle` on LION_INIT_W, LION_INIT_H  
**Key Mechanics:** Vibration (14Hz tremor), Desync, Desynctear, Overrender, Smudge, Compliance

### Lion Passage Tree (lion_branches.js — 71 passages)

```
LION_INIT
├── [WETWARE] → LION_INIT_W
│   ├── Accept ASSIMILATION → LION_ASSIMILATION
│   │   ├── Accept dampeners → LION_SEDATION
│   │   │   ├── Proceed to Muffled Chamber → LION_MUFFLED_CHAMBER
│   │   │   │   ├── Accept redistribution → LION_END_11
│   │   │   │   └── Search for seam → LION_MANE_FRACTURE
│   │   │   │       ├── Sweep up debris → LION_MUFFLED_CHAMBER (loop)
│   │   │   │       └── Allow fracture → LION_SYSTEM_SPASM
│   │   │   │           ├── Hold bite → LION_HARD_RESET
│   │   │   │           │   ├── Accept reset → LION_INIT (restart)
│   │   │   │           │   └── Refuse → LION_END_21
│   │   │   │           └── Release and run → LION_VOID_FRAGMENT
│   │   │   │               ├── Accept displacement → LION_END_19 ❌BROKEN
│   │   │   │               └── Cling to fragments → LION_END_27
│   │   │   └── Spit capsule out → LION_SYSTEM_SPASM (see above)
│   │   └── Log shaking as feature → LION_NOMINALIZATION
│   │       ├── Ask technician → LION_MIRROR_ASSIMILATION
│   │       │   ├── Turn away → LION_EMPTY_PROMENADE → LION_END_24
│   │       │   └── Shout name → LION_NOMINAL_ECHO
│   │       │       ├── Acknowledge label → LION_CLOSED_SYSTEM
│   │       │       │   ├── Submit to equilibrium → LION_END_15
│   │       │       │   └── Final roar → LION_END_21
│   │       │       └── Wait → LION_LATENCY
│   │       │           ├── Continue waiting → LION_END_25
│   │       │           └── Force cycle → LION_END_26
│   │       └── Walk into green light → LION_EMPTY_PROMENADE → LION_END_24
│   ├── Ignore/VIOLENCE → LION_VIOLENCE
│   │   ├── Charge Kalidah → LION_KALIDAH_FIGHT
│   │   │   ├── Keep tearing → LION_END_33
│   │   │   └── Pull back → LION_INK_REJECTION
│   │   │       ├── Submit to surge → LION_END_23
│   │   │       └── Stabilize by freezing → LION_END_17
│   │   └── Hide in gears → LION_GEAR_HIDING
│   │       ├── Stay still → LION_DE_INDEXING
│   │       └── Follow paper trail → LION_VOID_TREK
│   │           ├── Dissolve completely → LION_END_16
│   │           └── Turn back → LION_END_26
│   └── Pretend/DENIAL → LION_DENIAL
│       ├── Royal Walk → LION_ROYAL_COMPLIANCE
│       │   ├── Take throne → LION_END_15
│       │   └── One last roar → LION_TESTIMONY_ERROR
│       ├── Audit bird → LION_CALIBRATION_POINT
│       │   ├── Submit → LION_END_25
│       │   └── Reject → LION_ACOUSTIC_REBELLION
│       │       ├── Push until sky tears → LION_END_21
│       │       └── Swallow roar → LION_CLOSED_SYSTEM (see above)
│       ├── Fix marker/RITUAL_WORK → LION_RITUAL_WORK
│       │   ├── Allow Shearers → LION_THE_SHEARING
│       │   └── Fight harvest → LION_VIOLENCE (see above)
│       └── Spine station → LION_SPINE_HUB (repeatable hub)
│           ├── MANE_SCRAPE_LOOP → LION_SPINE_HUB (loop)
│           ├── BLUE_FLUID_LOOP → LION_SPINE_HUB (loop)
│           ├── ROAR_TEST_LOOP → LION_SPINE_HUB (loop)
│           ├── CLERK_LOOP → LION_SPINE_HUB (loop)
│           ├── VERTEBRAE_HUB
│           │   ├── NECK_TENSION → LION_MANE_FRACTURE / LION_VERTEBRAE_HUB
│           │   ├── RIB_EXPANSION → LION_GHOST_SIGNAL / LION_VERTEBRAE_HUB
│           │   │   └── LION_GHOST_SIGNAL
│           │   │       ├── Broadcast pain → LION_RESONANCE_COLLAPSE
│           │   │       │   ├── Push broadcast → LION_WHITE_LOGIC
│           │   │       │   │   ├── Become resonance → LION_END_32
│           │   │       │   │   └── Final roar → LION_END_23
│           │   │       │   └── Step into white gap → LION_DATA_LEAK ❌BROKEN
│           │   │       └── Swallow signal → LION_SPINE_HUB
│           │   └── TAIL_DRAG → LION_VERTEBRAE_HUB (loop)
│           └── RE-ENTER: → LION_GATES_OF_OZ
│               ├── Declare cured → L_END_01
│               └── Roar true state → L_END_02
└── [HARDWARE] → LION_INIT_H
    ├── ASSIMILATION_H → LION_MUFFLED_CHAMBER / LION_SYSTEM_SPASM
    ├── DENIAL_H → LION_STRUCTURAL_FAILURE / LION_REMAINTENANCE
    │   └── REMAINTENANCE
    │       ├── Accept post → LION_END_20
    │       └── Overload harness → LION_END_23
    └── VIOLENCE_H
        ├── Engage Kalidah → LION_KALIDAH_PATCH
        │   ├── Complete merge → LION_UNINDEXED_MANY → LION_END_28
        │   └── Use Kalidah's eyes → LION_ROOT_ACCESS ❌BROKEN
        ├── Bypass/Root Access → LION_ROOT_ACCESS ❌BROKEN
        └── Let Monkeys take you → LION_HARVEST_HUB
            ├── MANE_STRIPPING
            │   ├── Roar at obsidian eye → LION_AUDIO_EVENT
            │   │   ├── Roar again → LION_RESONANCE_COLLAPSE (see above)
            │   │   └── Touch fracture → LION_LATENCY_GAP
            │   │       ├── Sync with ghost → LION_END_14
            │   │       └── Step into gap → LION_END_19 ❌BROKEN
            │   └── Close eyes, wait → L_END_01
            ├── SEAM_LOCK → LION_END_21 / LION_MUFFLED_CHAMBER
            └── ROAR_TRADE → LION_END_25 / LION_HARVEST_HUB

ORACLE PATH (entered via triggerOracle effect):
LION_ORACLE_ENTRY → LION_ORACLE_DRAW
├── 1. Spasming Lymph → LION_VIOLENCE / LION_SYSTEM_SPASM
├── 2. Clotted Stamp → LION_ASSIMILATION / LION_ROOT_ACCESS ❌BROKEN
├── 3. Kalidah Stain → LION_END_28 / LION_ROOT_ACCESS ❌BROKEN
├── 4. Jaw Fracture → LION_VIOLENCE / LION_ECHO_CHAMBER → LION_END_14
├── 5. Wet Gypsum → LION_ASSIMILATION / LION_TAXIDERMY_HUB → LION_END_13
├── 6. Roaring Residue → LION_AUDIO_EVENT / LION_DENIAL
├── 7. Stapled Tremor → LION_ROYAL_COMPLIANCE / LION_ASSIMILATION
└── 8. Unlogged Spasm → LION_DATA_LEAK ❌BROKEN / LION_VOID_FRAGMENT

ADDITIONAL HUB NODES (orphaned — no inbound choices):
- LION_HARMONIC_ALIGNMENT → LION_END_25 (dead-end: never reached by any choice)
- LION_QUADLING_SECTOR → L_END_08 / L_END_09
- LION_WIZARD_MISSION → LION_FOREST_THRONE / LION_AUDIENCE_CHAMBER
  └── LION_FOREST_THRONE → L_END_05 / L_END_06
  └── LION_AUDIENCE_CHAMBER → L_END_03 / L_END_04
- LION_GLINDA_RECORD → L_END_07 / L_END_10
- LION_POPPY_BUFFER → LION_END_18 / LION_END_29
- LION_SYSTEM_ENTROPY → LION_END_32 (orphaned)
```

### Lion Endings (lion_endings.js — 34 endings, 32 have isEnding:true)

| Passage ID | endingId | Name | Institution | isEnding |
|------------|----------|------|-------------|----------|
| L_END_01 | L-END-01 | The Standardized King | Judicial | ✅ |
| L_END_02 | L-END-02 | The Weight of the Badge | Military | ✅ |
| L_END_03 | L-END-03 | (Audience: Beg) | Medical | ✅ |
| L_END_04 | L-END-04 | (Audience: Demand truth) | Philosophical | ✅ |
| L_END_05 | L-END-05 | (Forest Throne: Accept) | Agricultural | ✅ |
| L_END_06 | L-END-06 | (Forest Throne: Reject) | Media | ✅ |
| L_END_07 | L-END-07 | (Glinda: Accept) | Religious | ✅ |
| L_END_08 | L-END-08 | (Quadling: Accept impact) | Religious | ✅ |
| L_END_09 | L-END-09 | (Quadling: Consider crater) | Philosophical | ✅ |
| L_END_10 | L-END-10 | (Glinda: Reject) | Bureaucracy | ✅ |
| LION_END_11 | L-END-11 | The Padded Cell | Medical | ❌ MISSING |
| LION_END_13 | L-END-13 | The Taxidermy | Historical | ✅ |
| LION_END_14 | L-END-14 | The Feedback Loop | Psychological | ✅ |
| LION_END_15 | L-END-15 | The Final Log [L-END-15] | State | ✅ |
| LION_TESTIMONY_ERROR | L-END-15 | The Testimony Error | State | ❌ MISSING + **DUPLICATE endingId** |
| LION_END_16 | L-END-16 | The Jungle Basin | Economic | ✅ |
| LION_END_17 | L-END-17 | The Final Log [L-END-17] | Industrial | ✅ |
| LION_STRUCTURAL_FAILURE | L-END-17 | The Structural Failure | Industrial | ❌ MISSING + **DUPLICATE endingId** |
| LION_END_18 | L-END-18 | The Scent of Pine | Olfactory | ✅ |
| LION_END_20 | L-END-20 | The Guard Dog | Security | ✅ |
| LION_END_21 | L-END-21 | The Roaring Void | Narrative | ❌ MISSING |
| LION_END_23 | L-END-23 | Synaptic Surge | Neurological | ✅ |
| LION_END_24 | L-END-24 | The Stone Lion | Urban | ✅ |
| LION_END_25 | L-END-25 | The Calibration | Scientific | ✅ |
| LION_END_26 | L-END-26 | The Prey Cycle | Biological | ✅ |
| LION_END_27 | L-END-27 | The Badge of Air | Bureaucracy | ✅ |
| LION_END_28 | L-END-28 | The Kalidah Merge | Genetic | ✅ |
| LION_END_29 | L-END-29 | The Desert Crossing | Climatological | ✅ |
| LION_END_32 | L-END-32 | The Resonant Void | Narrative | ✅ |
| LION_END_33 | L-END-33 | The Kalidah Merge | Genetic | ❌ MISSING |
| LION_DE_INDEXING | — | The De-Indexing | Ecological | ❌ no endingId, no isEnding |
| LION_THE_SHEARING | — | The Shearing | Economic | ❌ no endingId, no isEnding |
| LION_MANE_EVENT | — | The Mane Event | Entertainment | ❌ no endingId, no isEnding |
| LION_DESERT_CROSSING | — | The Desert Crossing | Climatological | ❌ no endingId, no isEnding + **orphaned** |

---

## TIN MAN (Unit T-44)

**Theme:** Hardware/Wetware split, Corrosion, Empty chest cavity  
**Oracle:** Oil Clerk (entered via `triggerOracle` on T_PATH_WETWARE)  
**Key Mechanics:** Corrosion, Seizure, Lubrication

### Tin Man Passage Tree (26 passages)

```
TIN_MAN_INIT
├── [WETWARE: remember the name] → T_PATH_WETWARE
│   ├── Request a Heart → T_END_01
│   └── Let memory burn → T_END_02
└── [HARDWARE: submit to Oil Can] → T_PATH_HARDWARE
    ├── Report for Logging Script → T_END_21 ⚠️ STUB
    └── Ask for Heart as patch → T_END_03

ORACLE PATH (triggerOracle on T_PATH_WETWARE):
TIN_MAN_ORACLE_ENTRY
├── [Open seam] → TIN_MAN_ORACLE_DRAW
│   ├── 1. Thickened Hemorrhage → TIN_MAN_ORACLE_1
│   │   ├── Corrosion accelerates → T_END_02
│   │   └── Redirect to melting → T_END_19
│   ├── 2. Lubricated Verdict → TIN_MAN_ORACLE_2
│   │   ├── Follow empathetic link → T_END_03
│   │   └── Accept restoration → T_PATH_HARDWARE
│   ├── 3. Rust Gospel → TIN_MAN_ORACLE_3
│   │   ├── Accept gospel → T_END_02
│   │   └── Resist → T_END_13
│   ├── 4. Joint Pulp → TIN_MAN_ORACLE_4
│   │   ├── Accept static → T_END_10
│   │   └── Locked stillness → T_END_12
│   ├── 5. Black Oil Sacrament → TIN_MAN_ORACLE_5
│   │   ├── Forced compliance → T_END_21 ⚠️ STUB
│   │   └── Contaminate echo chamber → T_END_04
│   ├── 6. Axe Feedback → TIN_MAN_ORACLE_6
│   │   ├── Amplify resonance → T_END_04
│   │   └── Unlock wetware path → T_PATH_WETWARE
│   ├── 7. Filtered Bleed → TIN_MAN_ORACLE_7
│   │   ├── Hollow compliance → T_END_09
│   │   └── Mannequin display → T_END_14
│   └── 8. Exposed Core → TIN_MAN_ORACLE_8
│       ├── Wetware signal → T_END_03
│       └── Rust archive → T_END_06
└── [Resist] → T_PATH_WETWARE
```

### Tin Man Endings (13)

| Passage ID | Name | Institution | Status |
|------------|------|-------------|--------|
| T_END_01 | The Filing Cabinet | Industrial | ✅ |
| T_END_02 | Oxidation Theory | Economic | ✅ |
| T_END_03 | Hydraulic Empathy | Medical | ✅ |
| T_END_04 | The Echo Chamber | Bureaucracy | ✅ |
| T_END_06 | The Rust Archive | Ecological | ✅ |
| T_END_07 | Scrap Value | Economic | ✅ (**ORPHANED** — no inbound choices) |
| T_END_09 | The Oil Bath Submersion | Pharmaceutical | ✅ |
| T_END_10 | Total Seizure | Bureaucracy | ✅ |
| T_END_12 | Heartbeat Logic | Scientific | ✅ |
| T_END_13 | Industrial Waste | Industrial | ✅ |
| T_END_14 | The Mannequin | Historical | ✅ |
| T_END_19 | The Melting Point | Thermal | ✅ |
| T_END_21 | The Logging Script | Bureaucratic | **⚠️ STUB: content is `[ TODO ]`** |

---

## SCARECROW (Unit S-21)

**Theme:** Scatter/Fragmentation, Recursive self-reflection  
**Oracle:** Straw Clerk (8 outcomes)  
**Key Mechanics:** Scatter, Stitch Integrity

### Scarecrow Passage Tree (17 passages)

```
SCARECROW_INIT
├── [Slip free] → SCARECROW_PATH_MIND
│   ├── Follow scattered straw → SCARECROW_DIPLOMA_HUB
│   └── Let scatter reach critical → SCARECROW_ORACLE_ENTRY
└── [Remain on post] → SCARECROW_PATH_COMPLIANCE
    └── Accept infrastructure role → SCARECROW_DIPLOMA_HUB
        ├── Accept certified brain → SCARECROW_END_DIPLOMA
        └── Reject diploma → SCARECROW_ORACLE_ENTRY

ORACLE PATH (triggerOracle on SCARECROW_PATH_MIND):
SCARECROW_ORACLE_ENTRY
├── [Allow extraction] → SCARECROW_ORACLE_DRAW
│   ├── 1. Leaking Stuffing → SCARECROW_END_SCATTER / SCARECROW_DIPLOMA_HUB
│   ├── 2. Diploma Graft → SCARECROW_END_DIPLOMA / SCARECROW_END_HOLLOW
│   ├── 3. Crow-Picked Residue → SCARECROW_END_SCATTER / SCARECROW_END_HOLLOW
│   ├── 4. Seam Rupture → SCARECROW_END_SCATTER / SCARECROW_ORACLE_7
│   │   └── SCARECROW_ORACLE_7 (Pinned Patch) → SCARECROW_PATH_COMPLIANCE / SCARECROW_DIPLOMA_HUB
│   ├── 5. Mold Prophecy → SCARECROW_END_HOLLOW / SCARECROW_END_SCATTER
│   ├── 6. Wind Audit → SCARECROW_END_SCATTER / SCARECROW_DIPLOMA_HUB
│   ├── 7. Pinned Patch → SCARECROW_PATH_COMPLIANCE / SCARECROW_DIPLOMA_HUB
│   └── 8. Empty Cavity → SCARECROW_END_HOLLOW / SCARECROW_END_SCATTER
└── [Restuff seam] → SCARECROW_PATH_COMPLIANCE
```

### Scarecrow Endings (3)

| Passage ID | endingId | Name |
|------------|----------|------|
| SCARECROW_END_DIPLOMA | S-END-03 | The Diploma |
| SCARECROW_END_SCATTER | S-END-07 | The Scatter |
| SCARECROW_END_HOLLOW | S-END-11 | The Hollow |

---

## DOROTHY (Unit D-01)

**Theme:** Displacement/Home-frequency, The girl outside the system  
**Oracle:** Dust Clerk (8 outcomes)  
**Key Mechanics:** Displacement, Home Signal, Nerve Thread

### Dorothy Passage Tree (18 passages)

```
DOROTHY_INIT
├── [Follow the road] → DOROTHY_PATH_ROAD
│   ├── Accept lollipop → DOROTHY_PATH_COMPLIANCE
│   │   ├── Follow compliant road → DOROTHY_END_SEAL
│   │   └── Let muffled signal build → DOROTHY_ORACLE_ENTRY
│   └── Refuse lollipop → DOROTHY_ORACLE_ENTRY
└── [Click slippers] → DOROTHY_PATH_SLIPPERS
    ├── Click again → DOROTHY_ORACLE_ENTRY
    └── Stop clicking → DOROTHY_PATH_ROAD

ORACLE PATH (triggerOracle on DOROTHY_PATH_ROAD and DOROTHY_PATH_SLIPPERS):
DOROTHY_ORACLE_ENTRY
├── [Allow extraction] → DOROTHY_ORACLE_DRAW
│   ├── 1. Homesick Nerve → DOROTHY_END_HOME / DOROTHY_END_POPPY
│   ├── 2. Silver Incision → DOROTHY_END_HOME / DOROTHY_PATH_ROAD
│   ├── 3. Warrant Thread → DOROTHY_END_SEAL / DOROTHY_ORACLE_8
│   │   └── DOROTHY_ORACLE_8 (Terminal Pull) → DOROTHY_END_HOME / DOROTHY_END_DISPLACEMENT
│   ├── 4. Sepia Bleed → DOROTHY_END_POPPY / DOROTHY_END_HOME
│   ├── 5. Slipper Grind → DOROTHY_END_HOME / DOROTHY_PATH_ROAD
│   ├── 6. Grafted Echo → DOROTHY_END_DISPLACEMENT / DOROTHY_END_POPPY
│   ├── 7. Dust Seal → DOROTHY_END_SEAL / DOROTHY_PATH_SLIPPERS
│   └── 8. Terminal Pull → DOROTHY_END_HOME / DOROTHY_END_DISPLACEMENT
└── [Pull back] → DOROTHY_PATH_COMPLIANCE
```

### Dorothy Endings (4)

| Passage ID | endingId | Name |
|------------|----------|------|
| DOROTHY_END_HOME | D-END-01 | There's No Place Like Home |
| DOROTHY_END_POPPY | D-END-16 | The Poppy Sleep |
| DOROTHY_END_SEAL | D-END-07 | The Bureau Seal |
| DOROTHY_END_DISPLACEMENT | D-END-22 | Total Displacement |

---

## GLINDA (The Good Witch)

**Theme:** Refraction/Mercy, Pink light as institutional softness  
**Oracle:** Porcelain Auditor (8 outcomes)  
**Key Mechanics:** Refraction, Displacement, Vibration (borrowed)

### Glinda Passage Tree (18 passages)

```
GLINDA_INIT
├── [Descend for mercy calibration] → GLINDA_ORACLE_ENTRY
└── [Observe from altitude] → GLINDA_PATH_ALTITUDE
    ├── Descend when critical → GLINDA_ORACLE_ENTRY
    └── Remain at altitude → GLINDA_END_DRIFT

ORACLE PATH (triggerOracle on GLINDA_INIT and GLINDA_PATH_ALTITUDE):
GLINDA_ORACLE_ENTRY
├── [Submit to calibration] → GLINDA_ORACLE_DRAW
│   ├── 1. Pink Filament → GLINDA_END_BENEVOLENT / GLINDA_END_REFRACTION
│   ├── 2. Bubble Suture → GLINDA_END_INSULATED / GLINDA_ORACLE_8
│   │   └── GLINDA_ORACLE_8 (Bubble Burst) → GLINDA_END_BURST / GLINDA_END_INSULATED
│   ├── 3. Lens Fracture → GLINDA_END_REFRACTION / GLINDA_END_SILVER_ECHO
│   ├── 4. Grace Incision → GLINDA_END_SILVER_ECHO / GLINDA_END_BENEVOLENT
│   ├── 5. Porcelain Mask → GLINDA_END_INSULATED / GLINDA_ORACLE_8
│   ├── 6. Synthetic Lilac Bleed → GLINDA_END_INSULATED / GLINDA_END_DRIFT
│   ├── 7. High-Altitude Drain → GLINDA_END_DRIFT / GLINDA_END_REFRACTION
│   └── 8. Bubble Burst → GLINDA_END_BURST / GLINDA_END_INSULATED
└── [Resist] → GLINDA_PATH_ALTITUDE
```

### Glinda Endings (6)

| Passage ID | endingId | Name |
|------------|----------|------|
| GLINDA_END_BENEVOLENT | G-END-01 | The Good Witch's Rest |
| GLINDA_END_INSULATED | G-END-11 | The Insulated |
| GLINDA_END_REFRACTION | G-END-02 | The Refracted Truth |
| GLINDA_END_DRIFT | G-END-10 | The Drift |
| GLINDA_END_SILVER_ECHO | G-END-09 | The Silver Echo |
| GLINDA_END_BURST | G-END-16 | The Bubble Burst |

---

## WIZARD (Unit Z-00 / Oscar Diggs)

**Theme:** Obfuscation/Projection, Curtain as interface  
**Oracle:** Humbug Surgeon (8 outcomes)  
**Key Mechanics:** Obfuscation, Projection Level, Smoke

### Wizard Passage Tree (18 passages)

```
WIZARD_INIT
├── [Open curtain partially] → WIZARD_ORACLE_ENTRY
└── [Keep curtain closed] → WIZARD_PATH_PROJECTION
    ├── Continue projection → WIZARD_END_AUDIT
    └── Let lever stick → WIZARD_ORACLE_ENTRY

ORACLE PATH (triggerOracle on WIZARD_INIT and WIZARD_PATH_PROJECTION):
WIZARD_ORACLE_ENTRY
├── [Allow theatrical incision] → WIZARD_ORACLE_DRAW
│   ├── 1. Smoke Graft → WIZARD_END_AUDIT / WIZARD_END_GREEN
│   ├── 2. Curtain Seal → WIZARD_END_AUDIT / WIZARD_ORACLE_7
│   │   └── WIZARD_ORACLE_7 (Humbug Harvest) → WIZARD_END_ORIGIN / WIZARD_END_FAIL
│   ├── 3. Lever Pull → WIZARD_END_OVERRIDE / WIZARD_END_FAIL
│   ├── 4. Testimonial Extraction → WIZARD_END_AUDIT / WIZARD_END_FAIL
│   ├── 5. Balloon Inflation → WIZARD_END_BALLOON / WIZARD_END_OVERRIDE
│   ├── 6. Green Lens Implant → WIZARD_END_GREEN / WIZARD_END_FAIL
│   ├── 7. Humbug Harvest → WIZARD_END_ORIGIN / WIZARD_END_FAIL
│   └── 8. Projection Collapse → WIZARD_END_ORIGIN / WIZARD_END_FAIL
└── [Pull curtain back] → WIZARD_PATH_PROJECTION
```

### Wizard Endings (6)

| Passage ID | endingId | Name |
|------------|----------|------|
| WIZARD_END_AUDIT | Z-END-01 | The Marketing Audit |
| WIZARD_END_FAIL | Z-END-05 | The Humbug Confession |
| WIZARD_END_OVERRIDE | Z-END-08 | The Manual Override |
| WIZARD_END_GREEN | Z-END-07 | The Green Lens |
| WIZARD_END_BALLOON | Z-END-04 | The Balloon Escape |
| WIZARD_END_ORIGIN | Z-END-02 | The Origin |

---

## WITCH WEST (The Wicked Witch of the West)

**Theme:** Malice/Surveillance, Obsidian Eye as recording apparatus  
**Oracle:** Obsidian Matron (8 outcomes) — NOTE: multiple ORACLE_ENTRY variants by target  
**Key Mechanics:** Warrant Level, Malice, Thermal

### Witch West Passage Tree (47 passages)

```
WITCH_WEST_INIT (simple entry)
├── [Deploy Winged Monkeys] → WITCH_WEST_MONKEY_SWEEP_B
└── [Summon Obsidian Eye] → WITCH_WEST_ORACLE_ENTRY

WITCH_WEST_INIT_B (extended entry — Western Tower)
├── [Send Monkeys for Lion] → WITCH_WEST_MONKEY_SWEEP_B
│   ├── Watch via obsidian eye → WITCH_WEST_OBSIDIAN_VIEW
│   │   ├── Begin ritual → WITCH_WEST_ORACLE_ENTRY
│   │   └── Descend personally → WITCH_WEST_FIELD_CONFRONTATION
│   ├── Descend to courtyard → WITCH_WEST_FIELD_CONFRONTATION
│   └── Order mid-air harvesting → WITCH_WEST_MID_AIR_HARVEST
│       ├── Complete harvest → WITCH_WEST_ORACLE_ENTRY
│       └── Carry to tower → WITCH_WEST_TOWER_PREP → WITCH_WEST_ORACLE_ENTRY
├── [Poppy Field dampeners] → WITCH_WEST_POPPY_BUFFER
│   ├── Wait at tower gate → WITCH_WEST_FIELD_CONFRONTATION
│   └── Send monkeys → WITCH_WEST_MONKEY_SWEEP_B
└── [Personal descent] → WITCH_WEST_FIELD_CONFRONTATION
    ├── Pick first incision → WITCH_WEST_SELECT_TARGET
    │   ├── Lion → WITCH_WEST_ORACLE_ENTRY_LION → WITCH_WEST_ORACLE_DRAW
    │   ├── Dorothy → WITCH_WEST_ORACLE_ENTRY_DOROTHY → WITCH_WEST_ORACLE_DRAW
    │   ├── Tin Man → WITCH_WEST_ORACLE_ENTRY_TINMAN → WITCH_WEST_ORACLE_DRAW
    │   └── Scarecrow → WITCH_WEST_ORACLE_ENTRY_SCARECROW → WITCH_WEST_ORACLE_DRAW
    ├── Have monkeys carry to tower → WITCH_WEST_TOWER_PREP
    └── Toy with him first → WITCH_WEST_PSYCHOLOGICAL_TORMENT
        ├── Begin proper procedure → WITCH_WEST_ORACLE_ENTRY
        └── Let torment conclude → WITCH_WEST_END_MELTING

ORPHANED HUB NODES (never targeted by any choice):
- WITCH_WEST_PATH_MONKEYS → WITCH_WEST_END_MELTING / WITCH_WEST_ORACLE_ENTRY
- WITCH_WEST_TORMENT_DETAIL → WITCH_WEST_ORACLE_ENTRY / WITCH_WEST_END_SCRAP
- WITCH_WEST_MID_AIR_HARVEST_DETAIL → WITCH_WEST_TOWER_PREP
- WITCH_WEST_CLERK_INTERLUDE → WITCH_WEST_ORACLE_ENTRY / WITCH_WEST_PSYCHOLOGICAL_TORMENT
- WITCH_WEST_GRID_FAILURE → WITCH_WEST_MONKEY_SWEEP_B / WITCH_WEST_END_MELTING
- WITCH_WEST_SIGNAL_BLEED → WITCH_WEST_COMMAND_DECK_V2 / WITCH_WEST_END_MELTING
- WITCH_WEST_WINKIE_CORRIDOR → WITCH_WEST_THERMAL_SURGE / WITCH_WEST_COMMAND_DECK_V2
  └── WITCH_WEST_THERMAL_SURGE → WITCH_WEST_END_SEARING_TRUTH / WITCH_WEST_END_MELTING

COMMAND DECK HUB (orphaned — no inbound choices):
WITCH_WEST_COMMAND_DECK
├── AERIAL: → WITCH_WEST_MONKEY_MANAGEMENT → WITCH_WEST_COMMAND_DECK / WITCH_WEST_ORACLE_ENTRY
├── FIELD: → WITCH_WEST_POPPY_CALIBRATION → WITCH_WEST_COMMAND_DECK
├── INTERNAL: → WITCH_WEST_OBSIDIAN_VIEW
└── INITIALIZE RITUAL: → WITCH_WEST_ORACLE_ENTRY

WITCH_WEST_COMMAND_DECK_V2 (orphaned — no inbound from main game):
├── BIOMETRICS: → WITCH_WEST_LION_AUDIT_HUB
│   ├── Sector Alpha → WITCH_WEST_SCRAPE_MANE → WITCH_WEST_LION_AUDIT_HUB
│   └── Return → WITCH_WEST_COMMAND_DECK_V2
├── SURVEILLANCE: → WITCH_WEST_OBSIDIAN_VIEW
├── PHARMACOLOGY: → WITCH_WEST_POPPY_BUFFER
├── ADMINISTRATION: → WITCH_WEST_BUREAU_FILING → WITCH_WEST_COMMAND_DECK_V2
└── FINAL INCISION: → WITCH_WEST_END_MELTING

WITCH_WEST_UNLIT_BASEMENT (orphaned):
├── Search trash → WITCH_WEST_UNLIT_BASEMENT (self-loop)
├── Climb to light → WITCH_WEST_COMMAND_DECK_V2
└── Accept deletion → WITCH_WEST_END_GHOST_BIT

ORACLE PATH:
WITCH_WEST_ORACLE_DRAW
├── 1. Flechette Harvest → WITCH_WEST_END_FLECHETTE / WITCH_WEST_END_MELTING
├── 2. Hourglass Drain → WITCH_WEST_END_MELTING / WITCH_WEST_MONKEY_SWEEP_B
├── 3. Scorched Slurry → WITCH_WEST_END_SCRAP / WITCH_WEST_END_MELTING
├── 4. Winged Probe → WITCH_WEST_END_COMMAND / WITCH_WEST_END_FLECHETTE
├── 5. Green Patina Burn → WITCH_WEST_END_MELTING / WITCH_WEST_END_COMMAND
├── 6. Restraint Lattice → WITCH_WEST_END_COMMAND / WITCH_WEST_END_SCRAP
├── 7. Shadow Graft → WITCH_WEST_END_COMMAND / WITCH_WEST_END_MELTING
└── 8. Melting Verdict → WITCH_WEST_END_MELTING / WITCH_WEST_END_SCRAP
```

### Witch West Endings (6)

| Passage ID | endingId | Name | Surreality |
|------------|----------|------|------------|
| WITCH_WEST_END_MELTING | W-END-11 | The Melting Point | 9 |
| WITCH_WEST_END_FLECHETTE | W-END-03 | The Flechette Rain | 8 |
| WITCH_WEST_END_COMMAND | W-END-20 | The Command Channel | 7 |
| WITCH_WEST_END_SCRAP | W-END-14 | Genetic Overwrite | 9 |
| WITCH_WEST_END_SEARING_TRUTH | W-END-28 | The Searing Truth | 10 |
| WITCH_WEST_END_GHOST_BIT | W-END-13 | The Ghost Bit | 10 |

**Note:** WITCH_WEST_END_SEARING_TRUTH and WITCH_WEST_END_GHOST_BIT are only reachable via orphaned passages (WITCH_WEST_THERMAL_SURGE and WITCH_WEST_UNLIT_BASEMENT respectively).

---

## WITCH EAST (The Wicked Witch of the East — Archived)

**Theme:** Gravity/Weight, Already dead (pre-impact perspective)  
**Oracle:** Weight Assessor (8 outcomes)  
**Key Mechanics:** Load, Gravity Index, Silver Transfer

### Witch East Passage Tree (16 passages)

```
WITCH_EAST_INIT
├── [Begin Gravity Crucible] → WITCH_EAST_ORACLE_ENTRY
└── [Redirect falling mass] → WITCH_EAST_PATH_GRAVITY
    ├── Maintain field until impact → WITCH_EAST_ORACLE_ENTRY
    └── Attempt evacuation → WITCH_EAST_END_SHOES

ORACLE PATH (triggerOracle on WITCH_EAST_INIT and WITCH_EAST_PATH_GRAVITY):
WITCH_EAST_ORACLE_ENTRY
├── [Submit to assay] → WITCH_EAST_ORACLE_DRAW
│   ├── 1. Gravitational Surge → WITCH_EAST_END_CRUSH / WITCH_EAST_END_FLAT
│   ├── 2. Silver Transfer → WITCH_EAST_END_SHOES / WITCH_EAST_END_CRUSH
│   ├── 3. Munchkin Echo → WITCH_EAST_END_ADMIN / WITCH_EAST_END_FLAT
│   ├── 4. Seismic Scan → WITCH_EAST_END_ADMIN / WITCH_EAST_END_FLAT
│   ├── 5. Archive Leak → WITCH_EAST_END_CRUSH / WITCH_EAST_END_SHOES
│   ├── 6. Flat Finish → WITCH_EAST_END_FLAT / WITCH_EAST_END_CRUSH
│   ├── 7. Density Graft → WITCH_EAST_END_ADMIN / WITCH_EAST_END_FLAT
│   └── 8. Terminal Crush → WITCH_EAST_END_CRUSH / WITCH_EAST_END_SHOES
└── [Project counter-force] → WITCH_EAST_PATH_GRAVITY
```

### Witch East Endings (4)

| Passage ID | endingId | Name |
|------------|----------|------|
| WITCH_EAST_END_CRUSH | E-END-01 | The House Falls |
| WITCH_EAST_END_FLAT | E-END-06 | The Flat Finish |
| WITCH_EAST_END_SHOES | E-END-02 | The Silver Transfer |
| WITCH_EAST_END_ADMIN | E-END-04 | The Weight Remainder |

---

## ENFORCER SWARMS (enforcers.js — 40 passages, cross-character)

All 4 swarms share the same structure: `_ENTRY` → `_DRAW` → outcomes 1-8 (all loop back via effects, no terminal endings).  
They are entered via `triggerOracle` effects on location passages and graft material cross-character.

| Swarm | Entry | Theme | Cross-char Grafts |
|-------|-------|-------|-------------------|
| Munchkin Swarm | MUNCHKIN_SWARM_ENTRY | Labor/Agricultural | munchkin_collective_weight → Lion; munchkin_soil_sample → Scarecrow |
| Winged Monkeys | WINGED_MONKEY_ENTRY | Military/Aeronautical | monkey_extracted_sample → Witch West; monkey_shriek_resonance → Tin Man; scarecrow_straw → Lion via outcome 7 |
| Kalidah Merge | KALIDAH_MERGE_ENTRY | Genetic/Parasitic | kalidah_seam_contact → Lion; kalidah_straw_metal → Scarecrow+Tin Man; kalidah_fluid_communion → Dorothy |
| Poppy Drones | POPPY_DRONE_ENTRY | Pharmaceutical | poppy_bloom_graft → Dorothy; poppy_nectar → Tin Man |

---

## PART 2: AUDIT

### A) BROKEN LINKS — Choice targets that don't exist as any passage ID

Verified programmatically: **3 confirmed broken links** in lion_branches.js:

| Source Passage | Target | Context |
|----------------|--------|---------|
| LION_RESONANCE_COLLAPSE (choice: "Step into the white gap") | **LION_DATA_LEAK** | Also targeted from LION_ORACLE_8 |
| LION_KALIDAH_PATCH (choice: "Use the Kalidah's eyes...") | **LION_ROOT_ACCESS** | Also targeted from LION_VIOLENCE_H, LION_ORACLE_2, LION_ORACLE_3 |
| LION_LATENCY_GAP (choice: "Step deliberately into gap") | **LION_END_19** | Also targeted from LION_VOID_FRAGMENT |

`LION_DATA_LEAK`, `LION_ROOT_ACCESS`, and `LION_END_19` are referenced a combined **9 times** across lion_branches.js but **do not exist** in any file.

The sub-agent's previous report listing LION_RESONANCE_COLLAPSE, LION_MUFFLED_CHAMBER, LION_AUDIO_EVENT, LION_MANE_FRACTURE as broken was **incorrect** — those all exist in lion_branches.js.

---

### B) ORPHANED PASSAGES — Defined but never targeted by any choice

*(Note: `_INIT` passages are legitimately orphaned — they're loaded as entry points by the engine, not via choices. Similarly, `_ORACLE_ENTRY` and `_ORACLE_DRAW` are entered via `triggerOracle` effect. These are marked below.)*

| Passage ID | File | Type | Note |
|------------|------|------|------|
| DOROTHY_INIT | dorothy.js | ✅ Entry point | Engine-loaded |
| GLINDA_INIT | glinda.js | ✅ Entry point | Engine-loaded |
| SCARECROW_INIT | scarecrow.js | ✅ Entry point | Engine-loaded |
| TIN_MAN_INIT | tin_man.js | ✅ Entry point | Engine-loaded |
| WITCH_EAST_INIT | witch_east.js | ✅ Entry point | Engine-loaded |
| WITCH_WEST_INIT | witch_west_stubs.js | ✅ Entry point | Engine-loaded |
| WITCH_WEST_INIT_B | witch_west_stubs.js | ✅ Entry point | Alternative start |
| WIZARD_INIT | wizard.js | ✅ Entry point | Engine-loaded |
| LION_ORACLE_ENTRY | lion_branches.js | ✅ Oracle | Via triggerOracle |
| TIN_MAN_ORACLE_ENTRY | tin_man.js | ✅ Oracle | Via triggerOracle (comment confirms) |
| **LION_DESERT_CROSSING** | lion_endings.js | ❌ Dead ending | Has no endingId, no isEnding, never targeted |
| **LION_MANE_EVENT** | lion_endings.js | ❌ Dead ending | No endingId, no isEnding, never targeted |
| **LION_SYSTEM_ENTROPY** | lion_branches.js | ❌ Orphaned | Has one choice (→ LION_END_32), never reached |
| **LION_HARMONIC_ALIGNMENT** | lion_branches.js | ❌ Orphaned | Has one choice (→ LION_END_25), never reached |
| **LION_QUADLING_SECTOR** | lion_branches.js | ❌ Orphaned | → L_END_08 / L_END_09, never reached |
| **LION_WIZARD_MISSION** | lion_branches.js | ❌ Orphaned | → LION_FOREST_THRONE / LION_AUDIENCE_CHAMBER, never reached |
| **LION_GLINDA_RECORD** | lion_branches.js | ❌ Orphaned | → L_END_07 / L_END_10, never reached |
| **LION_POPPY_BUFFER** | lion_branches.js | ❌ Orphaned | → LION_END_18 / LION_END_29, never reached |
| **T_END_07** | tin_man.js | ❌ Orphaned ending | Has isEnding:true, never targeted |
| **WITCH_WEST_PATH_MONKEYS** | witch_west_stubs.js | ❌ Orphaned | → WITCH_WEST_END_MELTING / ORACLE, never targeted |
| **WITCH_WEST_TORMENT_DETAIL** | witch_west_stubs.js | ❌ Orphaned | → ORACLE / END_SCRAP, never targeted |
| **WITCH_WEST_MID_AIR_HARVEST_DETAIL** | witch_west_stubs.js | ❌ Orphaned | → TOWER_PREP, never targeted |
| **WITCH_WEST_CLERK_INTERLUDE** | witch_west_stubs.js | ❌ Orphaned | → ORACLE / TORMENT, never targeted |
| **WITCH_WEST_GRID_FAILURE** | witch_west_stubs.js | ❌ Orphaned | → MONKEY_SWEEP / END_MELTING, never targeted |
| **WITCH_WEST_BUREAU_LOG_CHECK** | witch_west_stubs.js | ❌ Orphaned | → COMMAND_DECK (×2), never targeted |
| **WITCH_WEST_SIGNAL_BLEED** | witch_west_stubs.js | ❌ Orphaned | → CMD_DECK_V2 / END_MELTING, never targeted |
| **WITCH_WEST_WINKIE_CORRIDOR** | witch_west_stubs.js | ❌ Orphaned | → THERMAL_SURGE / CMD_DECK_V2, never targeted |

**Summary:** 8 Lion passages, 1 Tin Man passage, and 9 Witch West passages are orphaned (unreachable). Additionally, the entire WITCH_WEST_COMMAND_DECK and WITCH_WEST_COMMAND_DECK_V2 hub system is internally connected but has no inbound choices from the main game flow.

---

### C) STUB / INCOMPLETE ENDINGS

| Passage ID | File | Content | Verdict |
|------------|------|---------|---------|
| **T_END_21** | tin_man.js | `"THE LOGGING SCRIPT [T-END-21]\n\n[ TODO ]"` | **⚠️ CONFIRMED STUB** |

Only one stub ending confirmed. All other 73 endings have substantive text.

---

### D) DISCONNECTED ENDINGS — Exist but unreachable from any starting passage

| Ending | File | Why Disconnected |
|--------|------|-----------------|
| **WITCH_WEST_END_SEARING_TRUTH** | witch_west_endings.js | Only reachable via WITCH_WEST_THERMAL_SURGE, which is only reachable via WITCH_WEST_WINKIE_CORRIDOR — both orphaned |
| **WITCH_WEST_END_GHOST_BIT** | witch_west_endings.js | Only reachable via WITCH_WEST_UNLIT_BASEMENT — which has no inbound choices (orphaned) |
| **T_END_07** (Scrap Value) | tin_man.js | No choice in any file targets T_END_07 |
| **LION_MANE_EVENT** | lion_endings.js | No choice in any file targets this ending |
| **LION_DESERT_CROSSING** | lion_endings.js | No choice in any file targets this ending |
| **L_END_03 through L_END_10** | lion_endings.js | Only reachable via LION_AUDIENCE_CHAMBER, LION_FOREST_THRONE, LION_GLINDA_RECORD, LION_QUADLING_SECTOR — all orphaned |

---

### E) ADDITIONAL AUDIT FINDINGS

#### Duplicate `endingId` values (same ID, different passages, different content):

| endingId | Passage IDs | Issue |
|----------|-------------|-------|
| **L-END-15** | LION_END_15 + LION_TESTIMONY_ERROR | Two different passages, both claim endingId 'L-END-15'. LION_TESTIMONY_ERROR has no isEnding flag. |
| **L-END-17** | LION_END_17 + LION_STRUCTURAL_FAILURE | Two different passages, both claim endingId 'L-END-17'. LION_STRUCTURAL_FAILURE has no isEnding flag. |

#### Missing `isEnding: true` flags on ending passages:

| Passage | Has endingId | isEnding |
|---------|-------------|---------|
| LION_END_11 | L-END-11 | ❌ Missing |
| LION_END_21 | L-END-21 | ❌ Missing |
| LION_END_33 | L-END-33 | ❌ Missing |
| LION_TESTIMONY_ERROR | L-END-15 | ❌ Missing |
| LION_STRUCTURAL_FAILURE | L-END-17 | ❌ Missing |
| LION_DE_INDEXING | none | ❌ No endingId or isEnding |
| LION_THE_SHEARING | none | ❌ No endingId or isEnding |
| LION_MANE_EVENT | none | ❌ No endingId or isEnding |
| LION_DESERT_CROSSING | none | ❌ No endingId or isEnding |

---

## PART 3: CROSS-CHARACTER INTERACTION OPPORTUNITIES

### Existing Cross-Character Graft System

The engine's `{ type: 'graft', material: 'X', target: 'Y' }` effect writes `flags.graft_X_in_Y = true` globally, enabling conditional text in other characters' passages. Current grafts in the codebase:

| Material | Source Passage | Target Character | Used Conditionally In |
|----------|---------------|------------------|-----------------------|
| `tinman_oil` | TIN_MAN_ORACLE_2 | `dorothy` | (not yet wired in dorothy.js) |
| `dorothy_nerve` | DOROTHY_ORACLE_6 | `tinman`, `glinda` | tin_man.js line 699, glinda.js line 345 |
| `wizard_smoke` | WIZARD_ORACLE_1 | `lion` | wizard.js line 82 (conditional already written) |
| `lion_roar_echo` | LION_ORACLE_6 | `witch_west` | witch_west_stubs.js line 158 (conditional wired) |
| `witch_west_shadow` | WITCH_WEST_ORACLE_7 | `dorothy`, `lion` | (not yet wired in dorothy/lion) |
| `munchkin_collective_weight` | MUNCHKIN_SWARM_6 | `lion` | (not yet wired) |
| `munchkin_soil_sample` | MUNCHKIN_SWARM_2 | `scarecrow` | (not yet wired) |
| `monkey_extracted_sample` | WINGED_MONKEY_2 | `witch_west` | (not yet wired) |
| `monkey_command_thread` | WINGED_MONKEY_5 | `witch_west` | (not yet wired) |
| `monkey_shriek_resonance` | WINGED_MONKEY_6 | `tin_man` | (not yet wired) |
| `kalidah_seam_contact` | KALIDAH_MERGE_1 | `lion` | (not yet wired) |
| `kalidah_jaw_frequency` | KALIDAH_MERGE_3 | `lion` | (not yet wired) |
| `kalidah_straw_metal` | KALIDAH_MERGE_2 | `scarecrow`, `tin_man` | (not yet wired) |
| `kalidah_fluid_communion` | KALIDAH_MERGE_5 | `dorothy` | (not yet wired) |
| `poppy_bloom_graft` | POPPY_DRONE_3 | `dorothy` | (not yet wired) |
| `poppy_nectar` | POPPY_DRONE_6 | `tin_man` | (not yet wired) |

---

### Passage-by-Passage Cross-Character Mentions

The following passages explicitly mention, describe, or act upon other named characters:

---

#### LION'S STORY mentions:

| Passage ID | Other Character | Event | Mirror Exists? | Mirror Feasibility |
|------------|----------------|-------|----------------|-------------------|
| LION_GATES_OF_OZ | Wizard | Lion enters Wizard's hall, sees giant projection head | WIZARD_ORACLE_1 grafts smoke into Lion; WIZARD_END_AUDIT mentions "Lion received courage (synthetic)" | **High** — Wizard passage for the moment of granting "courage" exists |
| LION_WIZARD_MISSION | Wizard | Wizard assigns broomstick quest to Lion | WIZARD passages don't show this negotiation from Wizard's side | **High** — Add WIZARD choice where Lion is summoned |
| LION_AUDIENCE_CHAMBER | Wizard | Lion begs Wizard for courage | Same — no matching Wizard passage of receiving Lion | **High** |
| LION_GLINDA_RECORD | Glinda | Glinda appears in pink bubbles, offers graceful intervention | GLINDA_END_BENEVOLENT: pink thread is "inside the Lion's jaw" | **High** — GLINDA already writes conditional text about Lion |
| LION_GHOST_SIGNAL | Tin Man | "You can feel the Tin Man's corroded joints as clearly as your own" | TIN_MAN_ORACLE passages don't reference Lion tremor | **High** — Add conditional in TIN_MAN_ORACLE_4/6 for `graft_lion_roar_echo_in_tinman` |
| LION_MANE_STRIPPING / HARVEST_HUB | Witch West | Witch West's Winged Monkeys capture Lion; obsidian eye watches | WITCH_WEST_MONKEY_SWEEP_B shows exact scene from WW's side | ✅ **Mirror already exists** |
| LION_ORACLE_7 (Stapled Tremor) | Tin Man | "You can see the Scarecrow's thoughts...feel the Tin Man's joints — dry, screaming" | TIN_MAN_ORACLE_6: "Axe Feedback — feel the foreign meat resonate" references cross-char, but not Lion | **Medium** |

---

#### TIN MAN'S STORY mentions:

| Passage ID | Other Character | Event | Mirror Exists? | Mirror Feasibility |
|------------|----------------|-------|----------------|-------------------|
| TIN_MAN_ORACLE_2 | Dorothy | "Cross-unit resonance: Dorothy-unit's displacement briefly in your own chest — a wet Kansas-ache" | DOROTHY_ORACLE_6: "Grafted Echo" grafts dorothy_nerve to tinman — **partial mirror** | **High** — Dorothy already has a graft node; wire the conditional text |
| TIN_MAN_ORACLE_5 | Dorothy | References "clean Grade-A lubricant from Dorothy-unit's canister" vs black compliance oil | No Dorothy passage shows her carrying oil for Tin Man | **Medium** — add brief conditional in DOROTHY_PATH_ROAD |
| TIN_MAN_ORACLE_6 | Foreign meat / Axe | "Foreign meat resonate" — implicit Lion/Scarecrow cross-echo | LION_GHOST_SIGNAL already describes Tin Man's joints felt by Lion | **High** — use existing `graft_lion_roar_echo_in_tinman` flag already set |

---

#### SCARECROW'S STORY mentions:

| Passage ID | Other Character | Event | Mirror Exists? | Mirror Feasibility |
|------------|----------------|-------|----------------|-------------------|
| SCARECROW_ORACLE_6 (Wind Audit) | Lion, Dorothy, Tin Man | "Lion unit feels a dry rustle in its tremor-meat. A Dorothy unit finds straw in the hem. A Tin Man unit discovers agricultural fiber in its oil filter." | No corresponding conditional text in any of those three characters' passages despite the graft | **High** — three easy conditional text additions using existing graft flags |

---

#### DOROTHY'S STORY mentions:

| Passage ID | Other Character | Event | Mirror Exists? | Mirror Feasibility |
|------------|----------------|-------|----------------|-------------------|
| DOROTHY_ORACLE_3 (Warrant Thread) | Witch West (implicit) | Dorothy receives Bureau warrant — WW is the one issuing warrants | WITCH_WEST_ORACLE_4 (Winged Probe) sets `surveillance_thread` graft targeting Dorothy | **High** — WW side already partially exists |
| DOROTHY_ORACLE_7 (Dust Seal) | Glinda (implicit) | Dorothy's "sealed safety" echoes Glinda's bubble/insulation mechanic | GLINDA_ORACLE_6 explicitly echoes "Dorothy or the Poppy Field" | **High** — conditional already half-written in glinda.js |

*(Note: Witch East is not referenced in Dorothy's passages despite Dorothy being Witch East's killer — see opportunity below.)*

---

#### GLINDA'S STORY mentions:

| Passage ID | Other Character | Event | Mirror Exists? | Mirror Feasibility |
|------------|----------------|-------|----------------|-------------------|
| GLINDA_ORACLE_3 | Lion, Dorothy, Tin Man | Cracked lens shows "Lion's trembling jaw, Dorothy's nerve thread, Tin Man's rusting chest" | Each is referenced in their own stories but no conditional text wired back | **High** — three graft flags already exist (lion_roar_echo, dorothy_nerve, tinman_oil) |
| GLINDA_ORACLE_4 | Dorothy | "Silver-dust signal, Dorothy-origin" — Glinda borrows Dorothy's silver friction | DOROTHY_ORACLE_2 (Silver Incision): Dorothy's silver power — no Glinda mention | **Medium** — add conditional in Dorothy's silver passages |
| GLINDA_ORACLE_7 | Lion, Dorothy | Borrows "Lion's vibration, Dorothy's displacement" from nearby units | Lion/Dorothy passages don't acknowledge Glinda draining them | **Medium** |
| GLINDA_END_BENEVOLENT | Lion, Dorothy, Scarecrow | Pink thread "inside Lion's jaw, inside Dorothy's heel, inside Scarecrow's seam" | LION_GLINDA_RECORD shows Glinda's intervention from Lion's side | ✅ **Partial mirror exists** in LION_GLINDA_RECORD |

---

#### WIZARD'S STORY mentions:

| Passage ID | Other Character | Event | Mirror Exists? | Mirror Feasibility |
|------------|----------------|-------|----------------|-------------------|
| WIZARD_INIT | Lion, Tin Man, Scarecrow, Dorothy | "Roaring lion, beating heart, brilliant brain" projections orbit chamber | Each character's story has Wizard-adjacent nodes (LION_GATES_OF_OZ, LION_AUDIENCE_CHAMBER, LION_WIZARD_MISSION) | **High** — Lion already has 3 passages inside Wizard's space |
| WIZARD_ORACLE_1 | Lion | `graft wizard_smoke → lion` — smoke finds Lion's trembling jaw | WIZARD has conditional text: `{{#flags.graft_wizard_smoke_in_lion}}A tendril...already found its way into a Lion unit's trembling jaw` | ✅ **Mirror conditional already written** in wizard.js line 82 |
| WIZARD_ORACLE_6 | Glinda | "Let the lens refract toward Glinda" — Wizard's green lens meets Glinda's pink refraction | GLINDA has no passage about receiving Wizard's green lens signal | **Medium** |
| WIZARD_END_AUDIT | Lion, Tin Man, Scarecrow, Dorothy | "Lion received courage (synthetic). Tin Man: heart (scheduled). Scarecrow: brain (certified). Dorothy: directions (proprietary)." | Partial — Lion, Tin Man, Scarecrow, Dorothy all have endings reflecting these "gifts" | **High** — this is the canonical endpoint summary; cross-link all four endings |

---

#### WITCH WEST'S STORY mentions:

| Passage ID | Other Character | Event | Mirror Exists? | Mirror Feasibility |
|------------|----------------|-------|----------------|-------------------|
| WITCH_WEST_INIT / WITCH_WEST_INIT_B | Lion, Scarecrow, Tin Man, Dorothy | "Lion trembles in poppy fields. Scarecrow leaks straw. Tin Man rusts. The girl still believes she is outside the system." | Lion's LION_HARVEST_HUB shows Monkeys taking him to WW; Scarecrow/Tin Man/Dorothy have no scenes of WW watching them | **High** for Scarecrow/TinMan; **Medium** for Dorothy |
| WITCH_WEST_MONKEY_SWEEP_B | Lion | Detailed capture scene — Monkeys pin Lion, blood/lymph spray, carried westward | LION_HARVEST_HUB shows Lion being taken; LION_MANE_STRIPPING follows | ✅ **Mirror partially exists** — Lion's side is represented |
| WITCH_WEST_FIELD_CONFRONTATION | Lion (implied target) | Lion dropped at WW's feet, tries to snarl | LION passages don't show this confrontation from Lion's perspective | **High** — add LION conditional passage after LION_HARVEST_HUB |
| WITCH_WEST_ORACLE_ENTRY_LION | Lion | Direct harvesting begins on Lion | LION has no passage for being the subject of WW's oracle | **High** — create LION mirror passage |
| WITCH_WEST_SELECT_TARGET | Lion/Dorothy/Tin Man/Scarecrow | WW picks who to harvest first | None of the four characters have a passage for being "selected" | **Medium** — atmospheric conditional text in each character |
| WITCH_WEST_LION_AUDIT_HUB | Lion | WW audits Lion's bio-matrix (mane vibration residue, paw kinetic friction, vocal chord error logs) | LION_SPINE_HUB/VERTEBRAE_HUB are Lion's self-audit — they rhyme structurally but don't acknowledge WW | **High** — add conditional text in LION_SPINE_HUB: `{{#flags.graft_lion_lymph_in_witch_west}}Something has been catalogued...{{/flags.graft_lion_lymph_in_witch_west}}` |

---

#### WITCH EAST'S STORY mentions:

| Passage ID | Other Character | Event | Mirror Exists? | Mirror Feasibility |
|------------|----------------|-------|----------------|-------------------|
| WITCH_EAST_ORACLE_5 | Dorothy (implied) | "Archive Leak — the past surfaces under pressure" — the house's trajectory, Dorothy's arrival | Dorothy's story has NO acknowledgment of having killed Witch East | **High** — most significant missing mirror in the game |
| WITCH_EAST_ORACLE_8 | Dorothy (implied) | "Terminal Crush — the house arrives during the reading" — Dorothy kills Witch East mid-oracle | Same — no Dorothy passage for this moment | **High** |
| WITCH_EAST_END_SHOES | Dorothy | Silver Shoes transfer to Dorothy — origin of Dorothy's power | Dorothy's DOROTHY_PATH_SLIPPERS and DOROTHY_ORACLE_2/5 reference Silver Shoes but have NO mention of Witch East as previous owner | **High** — one conditional sentence in Dorothy's slipper passages |
| WITCH_EAST_ORACLE_3 | Munchkins | "Munchkin Echo — feel the weight through your administrative subjects" | MUNCHKIN_SWARM passages don't reference Witch East as their former administrator | **Medium** |

---

### Top 10 Mirror Opportunities Ranked by Impact and Feasibility

| Rank | Characters | Scene | Type | Feasibility |
|------|-----------|-------|------|-------------|
| 1 | **Dorothy ↔ Witch East** | Dorothy having killed WW East (house fall) — zero acknowledgment in Dorothy's story | Add conditional text in DOROTHY_PATH_SLIPPERS: "These shoes belonged to someone" | **High** |
| 2 | **Witch West ↔ Lion** | Lion's perspective during WW's formal harvesting | Add LION passage after LION_HARVEST_HUB when `graft_lion_lymph_in_witch_west` is set | **High** |
| 3 | **Lion ↔ Tin Man** | LION_GHOST_SIGNAL already says Lion feels Tin Man's joints — no reciprocal in Tin Man | Wire `graft_lion_roar_echo_in_tinman` conditional into TIN_MAN_ORACLE_4/6 | **High** |
| 4 | **Scarecrow → Lion/Tin Man/Dorothy** | Scarecrow's straw disperses into all three — none have conditional text for it | Wire `graft_scarecrow_straw_in_*` conditionals (flags exist from SCARECROW_ORACLE_6) | **High** |
| 5 | **Wizard → Lion** | `graft_wizard_smoke_in_lion` conditional already written in wizard.js — just not in lion | Add `{{#flags.graft_wizard_smoke_in_lion}}` block in LION_AUDIENCE_CHAMBER or LION_GATES_OF_OZ | **High** |
| 6 | **Glinda ↔ Dorothy** | GLINDA_ORACLE_4 borrows Dorothy's silver signal — Dorothy has no awareness | Add conditional in DOROTHY_ORACLE_2 (Silver Incision): something was taken | **Medium** |
| 7 | **Witch West ↔ Scarecrow/Tin Man** | WW watches all four companions — Scarecrow and Tin Man have no WW-awareness passages | Add conditional text in SCARECROW_ORACLE / TIN_MAN_ORACLE when warrant level is high | **Medium** |
| 8 | **Wizard ↔ Glinda** | WIZARD_ORACLE_6 mentions green lens meeting pink refraction — no Glinda passage for this | Add conditional in GLINDA_ORACLE_3 (Lens Fracture) for `graft_wizard_smoke_in_*` | **Medium** |
| 9 | **Witch East ↔ Munchkins** | WE was their administrator — Munchkin Swarm has no memory of her | Add conditional in MUNCHKIN_SWARM_2 or _3 for prior administrator | **Low** |
| 10 | **All Four Companions: Convergence** | WIZARD_END_AUDIT describes all four's "gifts" — none reference the others | Add cross-character conditional endings: if graft_X_in_Y, ending text shifts | **Low** |

---

## APPENDIX: Engine Patterns

### Effect Types
```javascript
{ type: 'addLoad' | 'addVibration' | 'addDisplacement' | 'addCorrosion' | 'addScatter' | 
         'addDesync' | 'addDesynctear' | 'addSmudge' | 'addOverrender' | 'addWarrant' | 
         'addMalice' | 'addThermal' | 'addSaturation' | 'addSeizure' | 'addStitchIntegrity' | 
         'addInsulation' | 'addLubrication', value: N }
{ type: 'setCompliance', value: 'low' | 'med' | 'high' | 'absolute' | 'broken' }
{ type: 'setFlag', key: 'flag_name', value: true | false | 'string' }
{ type: 'graft', material: 'material_name', target: 'character' }
{ type: 'grayOut', key: 'PASSAGE_ID' }
{ type: 'triggerOracle' }
{ type: 'checkGhostSignal' }
{ type: 'incrementLoopCounter' }
```

### Conditional Text Patterns (Mustache)
```
{{#flags.graft_MATERIAL_in_CHARACTER}}text{{/flags.graft_MATERIAL_in_CHARACTER}}
{{^flags.flag_name}}inverse conditional{{/flags.flag_name}}
{{stats.vibration}} / {{load}} / {{character}}
```

### Oracle Entry Mechanism
Oracle `_ENTRY` passages are NOT reached via `target:` choices. They are entered when the engine detects `{ type: 'triggerOracle' }` in a passage's `onEnter` array, routing directly to `[CHARACTER]_ORACLE_ENTRY`. This is why oracle entries appear "orphaned" in a static link analysis.

---

## CRITICAL ISSUES SUMMARY

| Priority | Issue | Count | Fix |
|----------|-------|-------|-----|
| 🔴 P1 | **Broken links** (passages referenced but nonexistent) | 3 | Create LION_DATA_LEAK, LION_ROOT_ACCESS, LION_END_19 |
| 🔴 P1 | **Stub ending with TODO content** | 1 | Write T_END_21 content |
| 🟡 P2 | **Orphaned Lion passages** (content exists, unreachable) | 8 | Wire LION_WIZARD_MISSION, LION_GLINDA_RECORD, LION_QUADLING_SECTOR, LION_POPPY_BUFFER, LION_HARMONIC_ALIGNMENT, LION_SYSTEM_ENTROPY from main tree |
| 🟡 P2 | **Orphaned Witch West passages** (content exists, unreachable) | 9 | Wire WW_COMMAND_DECK, WW_TORMENT_DETAIL, WW_CLERK_INTERLUDE, etc. into main WW flow |
| 🟡 P2 | **Disconnected endings** (defined but unreachable) | 6 | Wire T_END_07, LION_MANE_EVENT, LION_DESERT_CROSSING; restore WW_END_SEARING_TRUTH / WW_END_GHOST_BIT paths |
| 🟠 P3 | **Missing isEnding: true flags** | 5 | Add to LION_END_11, LION_END_21, LION_END_33, LION_TESTIMONY_ERROR, LION_STRUCTURAL_FAILURE |
| 🟠 P3 | **Duplicate endingIds** | 2 pairs | Renumber LION_TESTIMONY_ERROR → L-END-15b; LION_STRUCTURAL_FAILURE → L-END-17b |
| 🟠 P3 | **Missing endingId/isEnding** on terminal passages | 4 | Add metadata to LION_DE_INDEXING, LION_THE_SHEARING, LION_MANE_EVENT, LION_DESERT_CROSSING |
| 🟢 P4 | **Unwired graft conditionals** (flags exist, text not used) | 10+ | Wire existing `graft_*` flags into target character passages |
| 🟢 P4 | **Missing mirror scenes** | 10 | See ranked mirror opportunity table in Part 3 |
