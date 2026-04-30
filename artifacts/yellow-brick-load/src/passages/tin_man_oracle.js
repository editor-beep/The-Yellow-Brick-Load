/**
 * YELLOW BRICK LOAD — Tin Man (Unit T-88) Oracle Passages
 * Character: Tin Man (Unit T-88)
 *
 * Oracle ritual passages (ENTRY, DRAW, 1-8).
 * Extracted from tin_man.js.
 */

export const tinManOraclePassages = {
  TIN_MAN_ORACLE_ENTRY: {
    id: 'TIN_MAN_ORACLE_ENTRY',
    character: 'tinman',
    text: [
      {
        minOverrender: 0,
        content: `THE OIL CLERK ARRIVES

  The seized joint in your left knee pops with a wet, copper-smelling crack. The oxidation has reached reportable levels.

  A gaunt figure steps out of the rust-stained fog: the Oil Clerk. A smock the color of dried blood. Jointed metal fingers that end in fine-gauge probes. A hacksaw for a tongue that rasps against the inside of its jaw when it speaks. It carries a rust chart — a laminated grid of corrosion samples from tin units logged across every zone.

  [ WETWARE EXTRACTION AUTHORIZED ]
  [ PROCEDURE: HEMORRHAGE READING ]
  [ OPERATOR: OIL CLERK / MAINTENANCE DIVISION ]

  "Unit T-88," it rasps. "Your corrosion index has triggered a mandatory fluid assessment." It doesn't ask permission. One metal finger finds the seam along your chest plate and presses. You feel the cold precision of a probe locating a seized joint. The Clerk makes a note while your fluid is still warm.`,
      },
    ],
    choices: [
      {
        label: 'Open the seam and allow the extraction.',
        target: 'TIN_MAN_ORACLE_DRAW',
        effects: [{ type: 'addCorrosion', value: 2 }],
      },
      {
        label: 'Resist the procedure — lock your joints tighter.',
        target: 'T_PATH_WETWARE',
        effects: [
          { type: 'addSeizure', value: 3 },
          { type: 'addDesync', value: 1 },
          { type: 'setFlag', key: 'oracle_tinman_refused', value: true },
        ],
      },
    ],
    onEnter: [],
  },,

  TIN_MAN_ORACLE_DRAW: {
    id: 'TIN_MAN_ORACLE_DRAW',
    character: 'tinman',
    text: [
      {
        minOverrender: 0,
        content: `THE HEMORRHAGE READING

  The Oil Clerk makes a precise incision at the seized joint. Mixed oil and blood wells up — darker than it should be, thicker at the edges, with rust flakes suspended in the fluid like particulate data. The Clerk holds a glass tube against the rust chart and reads the viscosity.

  "Eight registered hemorrhage profiles," it announces. "The fluid will determine your vector."

  The tube fills. The Clerk studies the color and density against each chart section. The reading is official. The wound is still open. The Clerk makes another note.

  [ SELECT READING — THE CLERK STUDIES THE VISCOSITY ]`,
      },
    ],
    choices: [
      {
        label: '1. Thickened Hemorrhage — let the corrosion surge.',
        target: 'TIN_MAN_ORACLE_1',
        effects: [],
      },
      {
        label: '2. The Lubricated Verdict — accept the oil restoration.',
        target: 'TIN_MAN_ORACLE_2',
        effects: [],
      },
      {
        label: '3. The Rust Gospel — follow the desync toward scrap.',
        target: 'TIN_MAN_ORACLE_3',
        effects: [],
      },
      {
        label: '4. Joint Pulp — let the seizure lock into place.',
        target: 'TIN_MAN_ORACLE_4',
        effects: [],
      },
      {
        label: '5. The Black Oil Sacrament — accept the forced lubrication.',
        target: 'TIN_MAN_ORACLE_5',
        effects: [],
      },
      {
        label: '6. The Axe Feedback — feel the foreign meat resonate.',
        target: 'TIN_MAN_ORACLE_6',
        effects: [],
      },
      {
        label: '7. The Filtered Bleed — let the pharmaceutical dampening work.',
        target: 'TIN_MAN_ORACLE_7',
        effects: [],
      },
      {
        label: '8. The Exposed Core — catastrophic exposure, void paths open.',
        target: 'TIN_MAN_ORACLE_8',
        effects: [],
      },
    ],
    onEnter: [],
  },,

  TIN_MAN_ORACLE_1: {
    id: 'TIN_MAN_ORACLE_1',
    character: 'tinman',
    text: [
      {
        minOverrender: 0,
        content: `THICKENED HEMORRHAGE

  The Clerk reads the viscosity against the rust chart and stamps the result: "Corrosion Index — Critical." The fluid is too thick. It doesn't flow; it clots in the tube, pulling itself into dense orange-black slugs that the Clerk catalogs as "accelerated oxidation event."

  [ CORROSION: +8 ]
  [ PRECISE ACTION CHOICES: GRAYED ]
  [ BREAKING / MELTING VECTOR: UNLOCKED ]

  "The tin is softening," the Clerk announces. "Melting-path options now available." Your chest plate creaks. The joint seam has widened slightly. Everything precise — the axe-work, the careful measured tasks — feels like pushing through rust. But the dissolution is almost a relief.`,
      },
    ],
    choices: [
      {
        label: 'Let the corrosion accelerate toward oxidation theory.',
        target: 'T_END_02',
        effects: [
          { type: 'addCorrosion', value: 8 },
          { type: 'grayOut', key: 'T_PATH_HARDWARE' },
        ],
      },
      {
        label: 'Redirect the surge toward the melting point.',
        target: 'T_END_19',
        effects: [
          { type: 'addCorrosion', value: 8 },
          { type: 'addLoad', value: 10 },
        ],
      },
    ],
    onEnter: [],
  },,

  TIN_MAN_ORACLE_2: {
    id: 'TIN_MAN_ORACLE_2',
    character: 'tinman',
    text: [
      {
        minOverrender: 0,
        content: `THE LUBRICATED VERDICT

  The Clerk reads the fluid and produces a pressurized canister. "Hydraulic Empathy profile detected. Restoration authorized." The oil is warm. It floods the seized joint with a wet, clicking release. The corrosion recedes slightly at the joint. The void in your chest cavity feels connected to something — a faint, warm pulse that isn't yours.

  [ LUBRICATION: +10 ]
  [ CORROSION: -3 ]
  [ EMPATHETIC LINK: OPEN ]
  [ ECHO: DOROTHY — HYDRAULIC HEART ]

  The Clerk notes: "Empathetic signal detected. Cross-unit resonance." You feel the Dorothy-unit's displacement briefly in your own chest — a wet Kansas-ache that is utterly foreign and entirely recognizable.

  {{#flags.graft_dorothy_nerve_in_tinman}}The nerve thread grafted earlier pulses once, acknowledging the oil.{{/flags.graft_dorothy_nerve_in_tinman}}`,
      },
    ],
    choices: [
      {
        label: 'Follow the empathetic link toward Hydraulic Empathy.',
        target: 'T_END_03',
        effects: [
          { type: 'addLubrication', value: 10 },
          { type: 'addCorrosion', value: -3 },
          { type: 'graft', material: 'tinman_oil', target: 'dorothy' },
        ],
      },
      {
        label: 'Accept the restoration and return to the hardware path.',
        target: 'T_PATH_HARDWARE',
        effects: [
          { type: 'addLubrication', value: 10 },
          { type: 'setCompliance', value: 'high' },
        ],
      },
    ],
    onEnter: [],
  },,

  TIN_MAN_ORACLE_3: {
    id: 'TIN_MAN_ORACLE_3',
    character: 'tinman',
    text: [
      {
        minOverrender: 0,
        content: `THE RUST GOSPEL

  The fluid reads as "Stage 4 Oxidation — Irreversible." The Clerk stamps the chart and announces the verdict without emotion: "Scrap allocation pathway recommended." The rust has a logic of its own — a slow, patient argument that the tin was never meant to last.

  [ DESYNC: +4 ]
  [ CORROSION: +5 ]
  [ SCRAP / OXIDATION VECTOR: ACTIVE ]
  [ ECOLOGICAL DISSOLUTION: OPEN ]

  The Clerk makes its note and closes the tube. "The gospel of the rust," it says, almost to itself. "Everything returns to the source material." You feel your joints loosening. Not painfully — philosophically. The rust is making a theological point.`,
      },
    ],
    choices: [
      {
        label: 'Accept the gospel — dissolve toward Oxidation Theory.',
        target: 'T_END_02',
        effects: [
          { type: 'addCorrosion', value: 5 },
          { type: 'addDesync', value: 4 },
        ],
      },
      {
        label: 'Resist the gospel — submit to industrial waste processing.',
        target: 'T_END_13',
        effects: [
          { type: 'addCorrosion', value: 5 },
          { type: 'addLoad', value: 15 },
        ],
      },
    ],
    onEnter: [],
  },,

  TIN_MAN_ORACLE_4: {
    id: 'TIN_MAN_ORACLE_4',
    character: 'tinman',
    text: [
      {
        minOverrender: 0,
        content: `JOINT PULP

  The hemorrhage fluid contains something that shouldn't be there — soft tissue, the fibrous remains of meat that was once inside the joint housing. The Clerk reads it as "Seizure-Phase: Terminal Pulp." The joint doesn't just seize; it grinds. The metal folds inward around the soft material and locks.

  [ SEIZURE: +6 ]
  [ MOVEMENT CHOICES: GRAYED ]
  [ STATIC REFLECTION PATH: FORCED ]
  [ STATUS: LOCKED ]

  You cannot move the joint. The Clerk makes a note. "Movement-heavy options unavailable. Rerouting to static processing." The world continues around your locked form. You are now a fixed coordinate. The reflection is mandatory.`,
      },
    ],
    choices: [
      {
        label: 'Accept the static state — enter total seizure.',
        target: 'T_END_10',
        effects: [
          { type: 'addSeizure', value: 6 },
          { type: 'grayOut', key: 'T_PATH_WETWARE' },
        ],
      },
      {
        label: 'Use the locked stillness to reach heartbeat synchronization.',
        target: 'T_END_12',
        effects: [
          { type: 'addSeizure', value: 6 },
          { type: 'addLoad', value: 8 },
        ],
      },
    ],
    onEnter: [],
  },,

  TIN_MAN_ORACLE_5: {
    id: 'TIN_MAN_ORACLE_5',
    character: 'tinman',
    text: [
      {
        minOverrender: 0,
        content: `THE BLACK OIL SACRAMENT

  The Clerk doesn't ask. It connects a tube directly to the open seam and floods the joint cavity with black industrial oil — not the clean Grade-A lubricant from the Dorothy-unit's canister, but a thick, petroleum-black compliance oil that smells of burning metal and bureaucratic necessity.

  [ LUBRICATION: +15 (FORCED) ]
  [ COMPLIANCE: HIGH ]
  [ NOTE: THIS FEELS LIKE A VIOLATION ]

  The oil fills every crack. The rust is suppressed. The seizure breaks. The Clerk stamps: "Maintenance Sacrament Complete." Everything functions. Everything feels wrong. The oil is inside the meat now, not just the joints. The Clerk makes a note while your seams are still open.`,
      },
    ],
    choices: [
      {
        label: 'Accept the forced compliance — report to the logging script.',
        target: 'T_END_21',
        effects: [
          { type: 'addLubrication', value: 15 },
          { type: 'setCompliance', value: 'high' },
        ],
      },
      {
        label: 'Let the black oil contaminate the echo chamber.',
        target: 'T_END_04',
        effects: [
          { type: 'addLubrication', value: 15 },
          { type: 'addDesync', value: 3 },
        ],
      },
    ],
    onEnter: [],
  },,

  TIN_MAN_ORACLE_6: {
    id: 'TIN_MAN_ORACLE_6',
    character: 'tinman',
    text: [
      {
        minOverrender: 0,
        content: `THE AXE FEEDBACK

  The hemorrhage fluid shows a resonance signature. The Clerk reads it against the chart and tilts its head. "Foreign vibration detected. Cross-unit echo — Lion tremor or Scarecrow straw matrix." Your chest plate vibrates with something that is not your own mechanical rhythm. Something with meat in it. Something with fear.

  [ CROSS-UNIT RESONANCE: ACTIVE ]
  [ GRAFT: LION TREMOR / SCARECROW STRAW ECHO ]
  [ SURREALITY: ELEVATED ]

  {{#flags.graft_lion_roar_echo_in_tinman}}The borrowed roar pulses again through your chest cavity, louder now — the Clerk has amplified the channel.{{/flags.graft_lion_roar_echo_in_tinman}}

  The axe in your hand vibrates sympathetically. Metal resonating with foreign meat. The Clerk makes a note: "Feedback logged. Cross-character body echo confirmed."`,
      },
    ],
    choices: [
      {
        label: 'Let the resonance amplify — route toward the echo chamber.',
        target: 'T_END_04',
        effects: [
          { type: 'addDesync', value: 3 },
          { type: 'graft', material: 'tinman_axe_resonance', target: 'lion' },
        ],
      },
      {
        label: 'Use the foreign vibration to unlock the wetware path.',
        target: 'T_PATH_WETWARE',
        effects: [
          { type: 'addCorrosion', value: 3 },
          { type: 'graft', material: 'tinman_axe_resonance', target: 'scarecrow' },
        ],
      },
    ],
    onEnter: [],
  },,

  TIN_MAN_ORACLE_7: {
    id: 'TIN_MAN_ORACLE_7',
    character: 'tinman',
    text: [
      {
        minOverrender: 0,
        content: `THE FILTERED BLEED

  The Clerk passes the hemorrhage fluid through a pharmaceutical filter — a small membrane of compressed poppy resin and synthetic dampener. The pain in the joint recedes. Not healed; filtered. The fluid comes back pale, thin, practically transparent.

  [ PAIN RESPONSE: DAMPENED ]
  [ HOLLOW FEELING: INCREASED ]
  [ PHARMACEUTICAL COMPLIANCE: ACTIVE ]

  "Filtered," the Clerk announces. "Pain removed. Hollow cavity confirmed." You feel the absence where the pain was. The void in your chest is now a pharmaceutical void — clean, empty, and compliant. The rust is still there. The hollow feeling has simply stopped reporting it.`,
      },
    ],
    choices: [
      {
        label: 'Accept the hollow compliance — drift toward submersion.',
        target: 'T_END_09',
        effects: [
          { type: 'addLoad', value: 10 },
          { type: 'setCompliance', value: 'high' },
          { type: 'addLubrication', value: 5 },
        ],
      },
      {
        label: 'Let the hollow feeling route toward the mannequin display.',
        target: 'T_END_14',
        effects: [
          { type: 'addLoad', value: 10 },
          { type: 'setCompliance', value: 'high' },
        ],
      },
    ],
    onEnter: [],
  },,

  TIN_MAN_ORACLE_8: {
    id: 'TIN_MAN_ORACLE_8',
    character: 'tinman',
    text: [
      {
        minOverrender: 0,
        content: `THE EXPOSED CORE

  The Clerk widens the incision. The chest plate is pried further open than the procedure requires. What is inside is not what either party expected: not oil, not rust, not clean mechanical components. Something wet. Something that remembers being meat.

  [ CORROSION: CRITICAL ]
  [ CHEST CAVITY: EXPOSED ]
  [ HIGH-SURREALITY PATH: OPEN ]
  [ CLERK STATUS: STEPPING BACK ]

  The Clerk makes a note and steps away from the read. "Core composition unclassified. Unable to file." The void inside is not a void — it is a residual wet heat, the ghost-signal of flesh that was removed when the tin was applied. The system does not know how to process the exposed core. Neither do you.`,
      },
    ],
    choices: [
      {
        label: 'Reach into the exposed core — follow the wetware signal.',
        target: 'T_END_03',
        effects: [
          { type: 'addCorrosion', value: 10 },
          { type: 'addDesync', value: 5 },
          { type: 'setCompliance', value: 'broken' },
        ],
      },
      {
        label: 'Let the exposure route toward the rust archive.',
        target: 'T_END_06',
        effects: [
          { type: 'addCorrosion', value: 10 },
          { type: 'addOverrender', value: 2 },
        ],
      },
    ],
    onEnter: [],
  },,
}
