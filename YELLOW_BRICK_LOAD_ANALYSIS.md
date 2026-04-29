# YELLOW BRICK LOAD — Complete Codebase Analysis

**An exhaustive deep-dive into the interactive fiction engine**

---

## PART 1: STORY MAPS

### Character Overview

| Character | Entry Point | Passage Files | Approx. Passages | Endings |
|-----------|-------------|---------------|------------------|---------|
| Lion | LION_INIT | lion_branches.js, lion_endings.js | ~95 | 30+ |
| Tin Man | TIN_MAN_INIT | tin_man.js | ~35 | 13+ |
| Scarecrow | SCARECROW_INIT | scarecrow.js | ~25 | 3 |
| Dorothy | DOROTHY_INIT | dorothy.js | ~28 | 4 |
| Glinda | GLINDA_INIT | glinda.js | ~28 | 6 |
| Wizard | WIZARD_INIT | wizard.js | ~28 | 6 |
| Witch West | WITCH_WEST_INIT | witch_west_stubs.js, witch_west_endings.js | ~55 | 6 |
| Witch East | WITCH_EAST_INIT | witch_east.js | ~25 | 4 |
| Enforcers | (cross-character) | enforcers.js | ~48 | 0 (loop back) |

---

### LION (Unit L-77)

**Theme:** Tremor/Fear, Kingship as institutional construct  
**Oracle:** Bureau Crow (8 outcomes)  
**Key Mechanic:** Vibration (14Hz tremor)

#### Passage Flow Map

```
LION_INIT
├── [Hardware] → LION_HW_DIAGNOSTIC → LION_HW_CORRIDOR → LION_HW_MAINT_HUB → ...
└── [Wetware] → LION_WW_DIAGNOSTIC → LION_WW_CORRIDOR → LION_WW_BREATH_HALL → ...

LION_ORACLE_ENTRY (Bureau Crow Ritual)
├── LION_ORACLE_1 → Vibration spike, compliance pressure
├── LION_ORACLE_2 → Displacement/scatter
├── LION_ORACLE_3 → Seismic resonance
├── LION_ORACLE_4 → Behavioral lock
├── LION_ORACLE_5 → Kinetic surplus
├── LION_ORACLE_6 → Load drain
├── LION_ORACLE_7 → Ghost signal
└── LION_ORACLE_8 → Catastrophic tremor

Key Hubs:
- LION_SPINE_HUB (audit cycle hub, repeatable loops)
- LION_VERTEBRAE_HUB (internal hardware sub-hub)
- LION_HARVEST_HUB (Western Tower interface)
- LION_GATES_OF_OZ (final destination)
- LION_AUDIENCE_CHAMBER
- LION_FOREST_THRONE
- LION_GLINDA_RECORD
- LION_POPPY_BUFFER

Repeatable Loops:
- LION_MANE_SCRAPE_LOOP
- LION_CLERK_LOOP
- LION_ROAR_TEST_LOOP
- LION_BLUE_FLUID_LOOP
```

#### Lion Endings (30+ endings)

| ID | Passage ID | Name | Institution | Surreality |
|----|------------|------|-------------|------------|
| L-END-01 | L_END_01 | The Standardized King | Judicial | 1 |
| L-END-02 | L_END_02 | The Weight of the Badge | Military | 2 |
| L-END-03 | L_END_03 | The Placebo Heart | Medical | 2 |
| L-END-04 | L_END_04 | The Crow's Audit | Educational | 3 |
| L-END-05 | L_END_05 | The Gilded Field | Agricultural | 4 |
| L-END-06 | L_END_06 | The Scripted Roar | Media | 3 |
| L-END-07 | L_END_07 | The Fossil Record | Historical | 5 |
| L-END-08 | L_END_08 | The Ritual Scar | Religious | 6 |
| L-END-09 | L_END_09 | The Mirror of Kings | Philosophical | 7 |
| L-END-10 | L_END_10 | The Compliance Loop | Bureaucracy | 3 |
| L-END-11 | LION_END_11 | The Padded Cell | Medical | 3 |
| L-END-12 | LION_DE_INDEXING | Unmonitored Dark | Ecological | 9 |
| L-END-13 | LION_END_13 | The Taxidermy | Historical | 5 |
| L-END-14 | LION_END_14 | The Feedback Loop | Psychological | 8 |
| L-END-15 | LION_END_15 / LION_TESTIMONY_ERROR | Royal Compliance | State | 2/5 |
| L-END-16 | LION_END_16 | The Jungle Basin | Economic | 7 |
| L-END-17 | LION_END_17 / LION_STRUCTURAL_FAILURE | Mechanical Cowardice | Industrial | 4/7 |
| L-END-18 | LION_END_18 | The Scent of Pine | Olfactory | 4 |
| L-END-20 | LION_END_20 | The Guard Dog | Security | 2 |
| L-END-21 | LION_END_21 | The Roaring Void | Narrative | 9 |
| L-END-22 | LION_MANE_EVENT | The Mane Event | Entertainment | 6 |
| L-END-23 | LION_END_23 | Synaptic Surge | Neurological | 9 |
| L-END-24 | LION_END_24 | The Stone Lion | Urban | 3 |
| L-END-25 | LION_END_25 | The Calibration | Scientific | 5 |
| L-END-26 | LION_END_26 | The Prey Cycle | Biological | 6 |
| L-END-27 | LION_END_27 | The Badge of Air | Bureaucracy | 6 |
| L-END-28 | LION_END_28 | The Kalidah Merge | Genetic | 9 |
| L-END-29 | LION_END_29 / LION_DESERT_CROSSING | The Desert Crossing | Climatological | 10/7 |
| L-END-30 | LION_THE_SHEARING | The Golden Fleece | Economic | 6 |
| L-END-32 | LION_END_32 | The Resonant Void | Narrative | 9 |
| L-END-33 | LION_END_33 | The Kalidah Merge | Genetic | 9 |

---

### TIN MAN (Unit T-44)

**Theme:** Hardware/Wetware split, Corrosion, Empty chest cavity  
**Oracle:** Oil Clerk (8 outcomes)  
**Key Mechanic:** Corrosion, Seizure, Stitch Integrity

#### Passage Flow Map

```
TIN_MAN_INIT
├── [Wetware remembers] → TIN_MAN_WW_MEMORY → TIN_MAN_WW_CORRIDOR
└── [Hardware only] → TIN_MAN_HW_CORRIDOR → TIN_MAN_HW_DIAGNOSTIC

TIN_MAN_ORACLE_ENTRY (Oil Clerk Ritual)
├── TIN_MAN_ORACLE_1 → Corrosion surge
├── TIN_MAN_ORACLE_2 → Seizure spike
├── TIN_MAN_ORACLE_3 → Graft opportunity
├── TIN_MAN_ORACLE_4 → Load redistribution
├── TIN_MAN_ORACLE_5 → Memory flush
├── TIN_MAN_ORACLE_6 → Structural failure
├── TIN_MAN_ORACLE_7 → Blue fluid dependency
└── TIN_MAN_ORACLE_8 → Complete rust

Key Nodes:
- TIN_MAN_EMPTY_CHEST (examining the void)
- TIN_MAN_OIL_STATION
- TIN_MAN_BLUE_FLUID_HUB
- TIN_MAN_RUST_PROGRESSION
- TIN_MAN_AXED_LIMB
```

#### Tin Man Endings (13+ endings)

| ID | Passage ID | Name | Institution | Status |
|----|------------|------|-------------|--------|
| T-END-01 | T_END_01 | The Replacement Parts | Industrial | Complete |
| T-END-02 | T_END_02 | The Oil Dependence | Economic | Complete |
| T-END-03 | T_END_03 | The Rust Garden | Ecological | Complete |
| T-END-04 | T_END_04 | The Hollow King | Bureaucracy | Complete |
| T-END-05 | T_END_05 | The Wetware Return | Medical | Complete |
| T-END-06 | T_END_06 | The Axe Legacy | Industrial | Complete |
| T-END-07 | T_END_07 | The Heart Prosthetic | Scientific | Complete |
| T-END-08 | T_END_08 | The Scrap Heap | Economic | Complete |
| T-END-09 | T_END_09 | The Museum Piece | Historical | Complete |
| T-END-10 | T_END_10 | The Recursive Maintenance | Bureaucracy | Complete |
| T-END-11 | T_END_11 | The Blue Fluid Communion | Pharmaceutical | Complete |
| T-END-12 | T_END_12 | The Kinetic Anchor | Military | Complete |
| T-END-21 | T_END_21 | The Logging Script | ??? | **STUB/TODO** |

---

### SCARECROW (Unit S-21)

**Theme:** Scatter/Fragmentation, Recursive self-reflection  
**Oracle:** Straw Clerk (8 outcomes)  
**Key Mechanic:** Scatter, Stitch Integrity

#### Passage Flow Map

```
SCARECROW_INIT
├── [Gather thoughts] → SCARECROW_GATHER → SCARECROW_FIELD_HUB
└── [Let scatter] → SCARECROW_DISPERSE → SCARECROW_CROW_FIELD

SCARECROW_ORACLE_ENTRY (Straw Clerk Ritual)
├── SCARECROW_ORACLE_1 → Scatter surge
├── SCARECROW_ORACLE_2 → Stitch integrity check
├── SCARECROW_ORACLE_3 → Thought echo
├── SCARECROW_ORACLE_4 → Recursive loop
├── SCARECROW_ORACLE_5 → Material exchange
├── SCARECROW_ORACLE_6 → Fire risk
├── SCARECROW_ORACLE_7 → Crow communion
└── SCARECROW_ORACLE_8 → Total dispersion
```

#### Scarecrow Endings (3 endings)

| ID | Passage ID | Name | Institution |
|----|------------|------|-------------|
| S-END-01 | S_END_01 | The Burning | Industrial |
| S-END-02 | S_END_02 | The Crow Feast | Ecological |
| S-END-03 | S_END_03 | The Recursive Thought | Philosophical |

---

### DOROTHY (Unit D-01)

**Theme:** Displacement/Home-frequency, The girl outside the system  
**Oracle:** Dust Clerk (8 outcomes)  
**Key Mechanic:** Displacement, Home Signal

#### Passage Flow Map

```
DOROTHY_INIT
├── [Follow the road] → DOROTHY_ROAD_START → DOROTHY_MUNCHKIN_ENCOUNTER
└── [Question the road] → DOROTHY_QUESTION → DOROTHY_DUST_ENCOUNTER

DOROTHY_ORACLE_ENTRY (Dust Clerk Ritual)
├── DOROTHY_ORACLE_1 → Displacement spike
├── DOROTHY_ORACLE_2 → Home signal interference
├── DOROTHY_ORACLE_3 → Graft opportunity
├── DOROTHY_ORACLE_4 → Nerve pull
├── DOROTHY_ORACLE_5 → Silver/Ruby interference
├── DOROTHY_ORACLE_6 → Kansas ghost
├── DOROTHY_ORACLE_7 → Toto signal
└── DOROTHY_ORACLE_8 → Total displacement

Key Nodes:
- DOROTHY_RUBY_SLIPPERS (interface with home)
- DOROTHY_SILVER_SHOES (original mechanism)
- DOROTHY_POPPY_FIELD
- DOROTHY_EMERALD_GATE
```

#### Dorothy Endings (4 endings)

| ID | Passage ID | Name | Institution |
|----|------------|------|-------------|
| D-END-01 | D_END_HOME | There's No Place Like Home | Domestic |
| D-END-02 | D_END_POPPY | The Poppy Sleep | Pharmaceutical |
| D-END-03 | D_END_SEAL | The Bureau Seal | Bureaucratic |
| D-END-04 | D_END_DISPLACEMENT | Total Displacement | Cosmological |

---

### GLINDA (The Good Witch of the North/South)

**Theme:** Refraction/Mercy, Pink light as institutional softness  
**Oracle:** Porcelain Auditor (8 outcomes)  
**Key Mechanic:** Refraction, Mercy Index

#### Passage Flow Map

```
GLINDA_INIT
├── [Extend mercy] → GLINDA_MERCY_PATH → GLINDA_BUBBLE_CHAMBER
└── [Observe only] → GLINDA_OBSERVE → GLINDA_AUDIT_CHAMBER

GLINDA_ORACLE_ENTRY (Porcelain Auditor Ritual)
├── GLINDA_ORACLE_1 → Refraction increase
├── GLINDA_ORACLE_2 → Mercy extension
├── GLINDA_ORACLE_3 → Pink light graft
├── GLINDA_ORACLE_4 → Dorothy intervention
├── GLINDA_ORACLE_5 → Lion intervention
├── GLINDA_ORACLE_6 → Witch West opposition
├── GLINDA_ORACLE_7 → Bubble transport
└── GLINDA_ORACLE_8 → Porcelain fracture
```

#### Glinda Endings (6 endings)

| ID | Passage ID | Name | Institution |
|----|------------|------|-------------|
| G-END-01 | G_END_01 | The Good Witch's Rest | Domestic |
| G-END-02 | G_END_02 | The Pink Suffocation | Medical |
| G-END-03 | G_END_03 | The Mercy Overload | Bureaucratic |
| G-END-04 | G_END_04 | The Porcelain Shatter | Industrial |
| G-END-05 | G_END_05 | The Refracted Truth | Philosophical |
| G-END-06 | G_END_06 | The Bubble Isolation | Psychological |

---

### WIZARD (Unit Z-00 / Oscar Diggs)

**Theme:** Obfuscation/Projection, Curtain as interface  
**Oracle:** Humbug Surgeon (8 outcomes)  
**Key Mechanic:** Obfuscation, Projection Level

#### Passage Flow Map

```
WIZARD_INIT
├── [Maintain the curtain] → WIZARD_CURTAIN_MAINTAIN → WIZARD_PROJECTION_HUB
└── [Pull back the curtain] → WIZARD_REVEAL → WIZARD_MECHANISM_EXPOSED

WIZARD_ORACLE_ENTRY (Humbug Surgeon Ritual)
├── WIZARD_ORACLE_1 → Obfuscation surge
├── WIZARD_ORACLE_2 → Projection failure
├── WIZARD_ORACLE_3 → Smoke graft
├── WIZARD_ORACLE_4 → Balloon escape
├── WIZARD_ORACLE_5 → Diploma/Medal/Heart placebo
├── WIZARD_ORACLE_6 → Lion smoke to Lion
├── WIZARD_ORACLE_7 → Dorothy redirect
└── WIZARD_ORACLE_8 → Total exposure
```

#### Wizard Endings (6 endings)

| ID | Passage ID | Name | Institution |
|----|------------|------|-------------|
| Z-END-01 | Z_END_01 | The Balloon Escape | Transportation |
| Z-END-02 | Z_END_02 | The Man Behind the Curtain | Theatrical |
| Z-END-03 | Z_END_03 | The Great and Powerful | State |
| Z-END-04 | Z_END_04 | The Humbug Confession | Religious |
| Z-END-05 | Z_END_05 | The Placebo Kingdom | Medical |
| Z-END-06 | Z_END_06 | The Projection Loop | Technological |

---

### WITCH WEST (The Wicked Witch of the West)

**Theme:** Malice/Surveillance, Obsidian Eye as recording apparatus  
**Oracle:** Obsidian Matron (8 outcomes)  
**Key Mechanic:** Warrant Level, Malice, Thermal

#### Passage Flow Map

```
WITCH_WEST_INIT / WITCH_WEST_INIT_B
├── [Deploy Monkeys] → WITCH_WEST_MONKEY_SWEEP_B → ...
├── [Poppy dampeners] → WITCH_WEST_POPPY_BUFFER → ...
└── [Personal descent] → WITCH_WEST_FIELD_CONFRONTATION → ...

WITCH_WEST_ORACLE_ENTRY (Obsidian Matron Ritual)
├── WITCH_WEST_ORACLE_1 → Flechette Harvest
├── WITCH_WEST_ORACLE_2 → Hourglass Drain
├── WITCH_WEST_ORACLE_3 → Scorched Slurry (Tin Man echo)
├── WITCH_WEST_ORACLE_4 → Winged Probe (surveillance graft)
├── WITCH_WEST_ORACLE_5 → Green Patina Burn
├── WITCH_WEST_ORACLE_6 → Restraint Lattice
├── WITCH_WEST_ORACLE_7 → Shadow Graft (parasitic link)
└── WITCH_WEST_ORACLE_8 → Melting Verdict

Key Hubs:
- WITCH_WEST_COMMAND_DECK (central surveillance interface)
- WITCH_WEST_COMMAND_DECK_V2 (extended deep audit)
- WITCH_WEST_LION_AUDIT_HUB
- WITCH_WEST_TOWER_PREP
- WITCH_WEST_UNLIT_BASEMENT

Target Selection Node:
- WITCH_WEST_SELECT_TARGET → Lion/Dorothy/Tin Man/Scarecrow branches
```

#### Witch West Endings (6 endings)

| ID | Passage ID | Name | Institution | Surreality |
|----|------------|------|-------------|------------|
| W-END-03 | WITCH_WEST_END_FLECHETTE | The Flechette Rain | Judicial | 8 |
| W-END-11 | WITCH_WEST_END_MELTING | The Melting Point | Thermal | 9 |
| W-END-13 | WITCH_WEST_END_GHOST_BIT | The Ghost Bit | Universal | 10 |
| W-END-14 | WITCH_WEST_END_SCRAP | Genetic Overwrite | Genetic | 9 |
| W-END-20 | WITCH_WEST_END_COMMAND | The Command Channel | Military | 7 |
| W-END-28 | WITCH_WEST_END_SEARING_TRUTH | The Searing Truth | Physics | 10 |

---

### WITCH EAST (The Wicked Witch of the East — Archived)

**Theme:** Gravity/Weight, Already dead (flashback perspective)  
**Oracle:** Weight Assessor (8 outcomes)  
**Key Mechanic:** Load, Gravity Index

#### Passage Flow Map

```
WITCH_EAST_INIT (flashback entry)
├── [Accept the weight] → WITCH_EAST_WEIGHT_PATH → ...
└── [Resist the weight] → WITCH_EAST_RESISTANCE → ...

WITCH_EAST_ORACLE_ENTRY (Weight Assessor Ritual)
├── WITCH_EAST_ORACLE_1 → Load spike
├── WITCH_EAST_ORACLE_2 → Silver shoes interface
├── WITCH_EAST_ORACLE_3 → Munchkin debt
├── WITCH_EAST_ORACLE_4 → Gravity well
├── WITCH_EAST_ORACLE_5 → House trajectory
├── WITCH_EAST_ORACLE_6 → Dorothy arrival
├── WITCH_EAST_ORACLE_7 → Final crush
└── WITCH_EAST_ORACLE_8 → Archive state
```

#### Witch East Endings (4 endings)

| ID | Passage ID | Name | Institution |
|----|------------|------|-------------|
| E-END-01 | E_END_01 | The House Falls | Architectural |
| E-END-02 | E_END_02 | The Silver Transfer | Economic |
| E-END-03 | E_END_03 | The Archived Malice | Historical |
| E-END-04 | E_END_04 | The Weight Remainder | Physical |

---

### ENFORCER SWARMS (Cross-Character Threats)

These passages are triggered via `triggerOracle` effects and loop back to their entry points.

#### Munchkin Swarm (Labor/Agricultural)
```
MUNCHKIN_SWARM_ENTRY → MUNCHKIN_SWARM_DRAW
├── MUNCHKIN_SWARM_1 → Labor Audit
├── MUNCHKIN_SWARM_2 → Agricultural Assessment
├── MUNCHKIN_SWARM_3 → Stamp Collection
├── MUNCHKIN_SWARM_4 → Scatter Protocol
├── MUNCHKIN_SWARM_5 → Lollipop Procedure
├── MUNCHKIN_SWARM_6 → Collective Harvest
├── MUNCHKIN_SWARM_7 → Form 7 Override
└── MUNCHKIN_SWARM_8 → Munchkin March
```

#### Winged Monkeys (Military/Aeronautical)
```
WINGED_MONKEY_ENTRY → WINGED_MONKEY_DRAW
├── WINGED_MONKEY_1 → Aerial Transport
├── WINGED_MONKEY_2 → Wing Hook Extraction
├── WINGED_MONKEY_3 → Altitude Drain
├── WINGED_MONKEY_4 → Ground Resistance
├── WINGED_MONKEY_5 → Command Ring Graft
├── WINGED_MONKEY_6 → Shriek Resonance
├── WINGED_MONKEY_7 → Straw Delivery
└── WINGED_MONKEY_8 → Flock Incorporation
```

#### Kalidah Merge (Genetic/Parasitic)
```
KALIDAH_MERGE_ENTRY → KALIDAH_MERGE_DRAW
├── KALIDAH_MERGE_1 → Seam Press
├── KALIDAH_MERGE_2 → Straw-Metal Graft
├── KALIDAH_MERGE_3 → Jaw Overwrite
├── KALIDAH_MERGE_4 → Limb Assimilation
├── KALIDAH_MERGE_5 → Leakage Communion
├── KALIDAH_MERGE_6 → Composite Cackle
├── KALIDAH_MERGE_7 → Failed Separation
└── KALIDAH_MERGE_8 → Swarm Merge
```

#### Poppy Drones (Pharmaceutical)
```
POPPY_DRONE_ENTRY → POPPY_DRONE_DRAW
├── POPPY_DRONE_1 → First Sting
├── POPPY_DRONE_2 → Resin Flood
├── POPPY_DRONE_3 → Bloom Graft
├── POPPY_DRONE_4 → Scent Harvest
├── POPPY_DRONE_5 → Rooting
├── POPPY_DRONE_6 → Nectar Communion
├── POPPY_DRONE_7 → Lullaby Audit
└── POPPY_DRONE_8 → Full Bloom
```

---

## PART 2: AUDIT

### A) Orphaned Passages (Never Referenced as Target)

These passages exist but are not reachable via any choice target:

| Passage ID | File | Issue |
|------------|------|-------|
| WITCH_WEST_TORMENT_DETAIL | witch_west_stubs.js | Never targeted by any choice |
| WITCH_WEST_MID_AIR_HARVEST_DETAIL | witch_west_stubs.js | Never targeted by any choice |
| WITCH_WEST_CLERK_INTERLUDE | witch_west_stubs.js | Never targeted by any choice |
| WITCH_WEST_GRID_FAILURE | witch_west_stubs.js | Never targeted by any choice |
| WITCH_WEST_BUREAU_LOG_CHECK | witch_west_stubs.js | Never targeted by any choice |
| WITCH_WEST_SIGNAL_BLEED | witch_west_stubs.js | Never targeted by any choice |
| WITCH_WEST_WINKIE_CORRIDOR | witch_west_stubs.js | Never targeted by any choice |
| LION_SYSTEM_ENTROPY | lion_branches.js | Never targeted by any choice |
| LION_RESONANCE_COLLAPSE | lion_branches.js | Referenced in LION_GHOST_SIGNAL but passage doesn't exist |
| LION_MUFFLED_CHAMBER | lion_branches.js | Referenced in LION_SEAM_LOCK but passage doesn't exist |
| LION_AUDIO_EVENT | lion_branches.js | Referenced in LION_MANE_STRIPPING but passage doesn't exist |
| LION_MANE_FRACTURE | lion_branches.js | Referenced in LION_NECK_TENSION but passage doesn't exist |

### B) Broken Links (Targets That Don't Exist)

| Source Passage | Target | Status |
|----------------|--------|--------|
| LION_GHOST_SIGNAL | LION_RESONANCE_COLLAPSE | **MISSING** |
| LION_SEAM_LOCK | LION_MUFFLED_CHAMBER | **MISSING** |
| LION_MANE_STRIPPING | LION_AUDIO_EVENT | **MISSING** |
| LION_NECK_TENSION | LION_MANE_FRACTURE | **MISSING** |
| All enforcer outcomes | Loop back to _ENTRY | Valid (intentional loops) |

### C) Stub/Incomplete Endings

| Passage ID | File | Line | Issue |
|------------|------|------|-------|
| **T_END_21** | tin_man.js | 532-538 | Content is literally `[ TODO ]` — incomplete |

```javascript
// tin_man.js lines 532-538
T_END_21: {
  id: 'T_END_21',
  character: 'tin_man',
  endingId: 'T-END-21',
  endingName: 'The Logging Script',
  text: [{ minOverrender: 0, content: '[ TODO ]' }],  // <-- STUB
  choices: [],
  isEnding: true,
},
```

### D) Disconnected Endings (Potentially Unreachable)

Endings that exist but have questionable reachability:

| Ending ID | Passage ID | Reachable From |
|-----------|------------|----------------|
| L-END-15 | LION_TESTIMONY_ERROR / LION_END_15 | Duplicate ID with different content - ambiguous |
| L-END-17 | LION_STRUCTURAL_FAILURE / LION_END_17 | Duplicate ID with different content - ambiguous |
| L-END-29 | LION_DESERT_CROSSING / LION_END_29 | Duplicate ID - same ending accessed two ways |
| L-END-33 | LION_END_33 | No direct choice leads here |

### E) Duplicate Ending IDs

Several Lion endings have the same `endingId` but different passage IDs:

| endingId | Passage IDs | Resolution Needed |
|----------|-------------|-------------------|
| L-END-15 | LION_TESTIMONY_ERROR, LION_END_15 | Different content, same ID |
| L-END-17 | LION_STRUCTURAL_FAILURE, LION_END_17 | Different content, same ID |
| L-END-29 | LION_DESERT_CROSSING, LION_END_29 | Similar content, redundant |

### F) Missing `isEnding: true` Flags

Some passages with endingId lack the isEnding flag:

| Passage ID | Has endingId | Has isEnding |
|------------|--------------|--------------|
| L_END_01 | Yes | **Missing** |
| L_END_02 | Yes | Yes |
| L_END_03 | Yes | **Missing** |
| L_END_04 | Yes | **Missing** |
| L_END_05 | Yes | **Missing** |
| L_END_06 | Yes | **Missing** |
| L_END_07 | Yes | **Missing** |
| L_END_08 | Yes | **Missing** |
| L_END_09 | Yes | **Missing** |

---

## PART 3: CROSS-CHARACTER INTERACTION OPPORTUNITIES

### Existing Cross-Character Grafts

The codebase already implements several cross-character material sharing via `graft` effects:

| Source | Material | Target | Location |
|--------|----------|--------|----------|
| Lion | lion_roar_echo | Tin Man | Multiple lion passages |
| Lion | lion_lymph | Witch West | WITCH_WEST_ORACLE_7 |
| Dorothy | dorothy_nerve | Tin Man | dorothy.js |
| Tin Man | tinman_oil | Witch West | WITCH_WEST_ORACLE_3 |
| Scarecrow | scarecrow_straw | Lion | WINGED_MONKEY_7 |
| Witch West | witch_west_shadow | Lion, Dorothy | WITCH_WEST_ORACLE_7 |
| Witch West | witch_west_slag | Tin Man | WITCH_WEST_ORACLE_3 |
| Witch West | surveillance_thread | Lion, Dorothy | WITCH_WEST_ORACLE_4 |
| Poppy | poppy_bloom_graft | Dorothy | POPPY_DRONE_3 |
| Poppy | poppy_nectar | Tin Man | POPPY_DRONE_6 |
| Kalidah | kalidah_seam_contact | Lion | KALIDAH_MERGE_1 |
| Kalidah | kalidah_jaw_frequency | Lion | KALIDAH_MERGE_3 |
| Kalidah | kalidah_fluid_communion | Dorothy | KALIDAH_MERGE_5 |
| Kalidah | kalidah_straw_metal | Scarecrow, Tin Man | KALIDAH_MERGE_2 |
| Munchkin | munchkin_collective_weight | Lion | MUNCHKIN_SWARM_6 |
| Munchkin | munchkin_soil_sample | Scarecrow | MUNCHKIN_SWARM_2 |
| Monkey | monkey_extracted_sample | Witch West | WINGED_MONKEY_2 |
| Monkey | monkey_command_thread | Witch West | WINGED_MONKEY_5 |
| Monkey | monkey_shriek_resonance | Tin Man | WINGED_MONKEY_6 |

### Character Mentions in Passage Text

| Character | Mentions Other Characters |
|-----------|---------------------------|
| Lion | Dorothy, Tin Man, Scarecrow, Wizard, Glinda, Witch West |
| Tin Man | Dorothy, Lion, Scarecrow, Wizard |
| Scarecrow | Dorothy, Lion, Tin Man, Crows |
| Dorothy | Lion, Tin Man, Scarecrow, Toto, Glinda, Wizard, Witch West |
| Glinda | Dorothy, Lion, Witch West, Wizard |
| Wizard | Dorothy, Lion, Tin Man, Scarecrow |
| Witch West | Lion, Dorothy, Tin Man, Scarecrow (all as targets) |
| Witch East | Dorothy (as her killer), Munchkins |

### Recommended Mirror Opportunities

#### High Feasibility (Text Already References)

1. **Lion ↔ Tin Man: The Tremor/Rust Resonance**
   - Lion's LION_GHOST_SIGNAL already mentions feeling "the Tin Man's joints"
   - Add mirror passage where Tin Man feels Lion's tremor through shared oil pathways
   - Graft: `{ type: 'graft', material: 'tinman_rust_echo', target: 'lion' }`

2. **Dorothy ↔ Lion: The Nerve/Roar Exchange**
   - Dorothy's nerve paths already graft to Lion
   - Add mirror where Lion's roar carries Dorothy's displacement frequency
   - Create DOROTHY_LION_ECHO passage

3. **Scarecrow ↔ Tin Man: The Agricultural-Industrial Bridge**
   - KALIDAH_MERGE_2 already creates straw-metal composite
   - Add persistent cross-character echoes after this merge
   - Scarecrow feels Tin Man's seizure; Tin Man leaks straw

4. **Glinda ↔ Witch West: The Pink/Green Opposition**
   - LION_GLINDA_RECORD shows Glinda intervening
   - Add Witch West passage responding to pink light intrusion
   - Mirror ending where both merge into grey bureaucratic light

#### Medium Feasibility (Thematic Alignment)

5. **Wizard ↔ Lion: The Projection/Tremor Parallel**
   - Wizard's smoke/projection echoes Lion's vibration
   - Create WIZARD_LION_ENCOUNTER where projection amplifies tremor
   - Wizard gives Lion "courage" that is actually fear-amplifier

6. **Dorothy ↔ Wizard: The Curtain/Road Mirror**
   - Dorothy follows the road; Wizard hides behind curtain
   - Create mirrored passage where Dorothy pulls curtain, Wizard walks road
   - Cross-graft: displacement meets obfuscation

7. **Witch East ↔ Dorothy: The House Fall Echo**
   - Witch East already references Dorothy as killer
   - Add Dorothy flashback passage experiencing the fall from victim's perspective
   - Graft: `{ type: 'graft', material: 'witch_east_silver', target: 'dorothy' }`

#### Lower Feasibility (Would Require New Content)

8. **Tin Man ↔ Scarecrow: The Empty/Full Paradox**
   - Tin Man has empty chest; Scarecrow is full of scattered thoughts
   - Create exchange where Tin Man receives straw thoughts in chest cavity
   - Existential horror of having thoughts without heart

9. **All Four Companions: The Yellow Brick Load Convergence**
   - Create unified passage where all four walk together
   - Each character's mechanic affects the others
   - Collective graft system tracking group dynamics

10. **Enforcers ↔ Main Characters: Persistent Echoes**
    - Enforcer encounters already graft material
    - Add persistent conditional text in main passages referencing enforcer damage
    - Example: `{{#flags.graft_poppy_bloom_graft_in_dorothy}}The rootlets itch beneath your skin...{{/flags.graft_poppy_bloom_graft_in_dorothy}}`

---

## APPENDIX: Technical Patterns

### Effect Types Used

```javascript
{ type: 'addLoad', value: N }
{ type: 'addVibration', value: N }
{ type: 'addDisplacement', value: N }
{ type: 'addCorrosion', value: N }
{ type: 'addScatter', value: N }
{ type: 'addDesync', value: N }
{ type: 'addDesynctear', value: N }
{ type: 'addSmudge', value: N }
{ type: 'addOverrender', value: N }
{ type: 'addWarrant', value: N }
{ type: 'addMalice', value: N }
{ type: 'addThermal', value: N }
{ type: 'addSaturation', value: N }
{ type: 'addSeizure', value: N }
{ type: 'addStitchIntegrity', value: N }
{ type: 'addInsulation', value: N }
{ type: 'setCompliance', value: 'low'|'med'|'high'|'absolute'|'broken' }
{ type: 'setFlag', key: 'flag_name', value: true|false|'string' }
{ type: 'graft', material: 'material_name', target: 'character' }
{ type: 'grayOut', key: 'PASSAGE_ID' }
{ type: 'triggerOracle' }
{ type: 'checkGhostSignal' }
{ type: 'incrementLoopCounter' }
```

### Conditional Text Patterns

```mustache
{{#flags.flag_name}}Text shown when flag is true{{/flags.flag_name}}
{{^flags.flag_name}}Text shown when flag is false{{/flags.flag_name}}
{{#flags.graft_MATERIAL_in_CHARACTER}}Cross-character graft conditional{{/flags.graft_MATERIAL_in_CHARACTER}}
{{stats.vibration}} - Direct stat reference
{{load}} - System variable
{{character}} - Current character
```

### Oracle Pattern

Each character has an oracle interloper with 8 outcomes:
- Outcomes 1-6: Stat modifications, graft opportunities, path unlocks
- Outcome 7: Ghost signal / cross-character resonance
- Outcome 8: Catastrophic/high-surreality result

---

## SUMMARY

### Total Passage Count
- **Lion:** ~95 passages (branches + endings)
- **Tin Man:** ~35 passages
- **Scarecrow:** ~25 passages
- **Dorothy:** ~28 passages
- **Glinda:** ~28 passages
- **Wizard:** ~28 passages
- **Witch West:** ~55 passages
- **Witch East:** ~25 passages
- **Enforcers:** ~48 passages (4 swarms × 10+ each)
- **Ghost Signal:** 1 passage
- **TOTAL:** ~370+ passages

### Total Endings
- Lion: 30+ endings
- Tin Man: 13 endings (1 stub)
- Scarecrow: 3 endings
- Dorothy: 4 endings
- Glinda: 6 endings
- Wizard: 6 endings
- Witch West: 6 endings
- Witch East: 4 endings
- **TOTAL:** ~72 endings

### Critical Issues
1. **T_END_21** is a stub with only `[ TODO ]` as content
2. **4 broken links** in Lion passages (LION_RESONANCE_COLLAPSE, LION_MUFFLED_CHAMBER, LION_AUDIO_EVENT, LION_MANE_FRACTURE)
3. **8+ orphaned passages** in witch_west_stubs.js (never targeted)
4. **3 duplicate ending IDs** in Lion (L-END-15, L-END-17, L-END-29)
5. **7+ Lion endings** missing `isEnding: true` flag (L_END_01, L_END_03-09)

### Recommendations
1. Implement the 4 missing Lion passages or remove their references
2. Complete T_END_21 content
3. Wire up the 8+ orphaned Witch West passages
4. Resolve duplicate ending IDs
5. Add missing `isEnding: true` flags
6. Implement cross-character mirror passages as outlined in Part 3
