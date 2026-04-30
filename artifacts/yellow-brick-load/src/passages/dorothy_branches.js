/**
 * YELLOW BRICK LOAD — Dorothy (Unit D-01) Branch Passages
 * Character: Dorothy (Unit D-01)
 *
 * All non-ending, non-oracle passages.
 * Extracted from dorothy.js.
 */

export const dorothyBranchPassages = {
  DOROTHY_INIT: {
    id: 'DOROTHY_INIT',
    character: 'dorothy',
    text: [
      {
        minOverrender: 0,
        content: `THE DISPLACEMENT CONDITION

  You are Unit D-01. Coordinate: [Oz-Primary, Yellow-Brick-Load, Segment-1].
  Previous coordinate: [Kansas, Coordinate-Null, pre-event].

  The house landed on someone. The slippers were reassigned to your feet. They are silver-colored and they hum at a frequency that the Bureau logs as "Signal Strength: Elevated." They have been humming since the landing. They will not stop. The Dust on your dress is still Kansas dust — still home-frequency, clinging to the fabric, refusing to update to Oz-standard soil.

  [ DISPLACEMENT COUNTER: ACTIVE ]
  [ SILVER FRICTION: ACCUMULATING ]
  [ STATUS: DISLOCATED UNIT ]

  The Yellow Brick Load stretches ahead. The road is a warrant — a path that implies a destination, and destinations are the Bureau's jurisdiction. The Dust Clerk is watching from the edge of the field. You can see the spinning silver dollars where its eyes should be.

  {{#flags.graft_dorothy_nerve_in_tinman}}A faint oil-smell rises from the direction of the road, carrying the echo of a foreign joint — borrowed, metallic, briefly warm.{{/flags.graft_dorothy_nerve_in_tinman}}`,
      },
    ],
    choices: [
      {
        label: 'Follow the road — accept the displacement as direction.',
        target: 'DOROTHY_PATH_ROAD',
        effects: [
          { type: 'addDisplacement', value: 2 },
          { type: 'addLoad', value: 5 },
        ],
      },
      {
        label: 'Try to click the slippers — attempt home-frequency contact.',
        target: 'DOROTHY_PATH_SLIPPERS',
        effects: [
          { type: 'addSilverFriction', value: 3 },
          { type: 'addDesync', value: 1 },
        ],
      },
    ],
    onEnter: [{ type: 'checkGhostSignal' }, { type: 'triggerOracle' }],
  },,

  DOROTHY_PATH_ROAD: {
    id: 'DOROTHY_PATH_ROAD',
    character: 'dorothy',
    text: [
      {
        minOverrender: 0,
        content: `THE AUTHORIZED DIRECTION

  The road proceeds. Each yellow brick is stamped with a Bureau seal — VALID PATH / APPROVED DIRECTION / TERMINATE AT EMERALD CITY. The slippers hum against the bricks, reading the stamps through the soles of your feet.

  [ DISPLACEMENT: ACCUMULATING ]
  [ WARRANT LEVEL: PASSIVE ]
  [ LOAD: STANDARD ]

  The houses of Munchkins line the road in tight, colorful rows. They are watching with eyes the color of compliance forms. The Dust on your dress disturbs them — it is the wrong soil, and soil allegiance is a jurisdictional matter.

  A small girl — a Munchkin-class unit — offers you a lollipop. The lollipop is a pharmaceutical probe. You both know this.`,
      },
    ],
    choices: [
      {
        label: 'Accept the lollipop — accept the pharmaceutical compliance.',
        target: 'DOROTHY_PATH_COMPLIANCE',
        effects: [
          { type: 'addLoad', value: 8 },
          { type: 'setCompliance', value: 'high' },
          { type: 'addDisplacement', value: 1 },
        ],
      },
      {
        label: 'Refuse the lollipop — continue along the road toward the oracle.',
        target: 'DOROTHY_ORACLE_ENTRY',
        effects: [
          { type: 'addDisplacement', value: 3 },
          { type: 'addWarrant', value: 1 },
        ],
      },
    ],
    onEnter: [{ type: 'triggerOracle' }],
  },,

  DOROTHY_PATH_SLIPPERS: {
    id: 'DOROTHY_PATH_SLIPPERS',
    character: 'dorothy',
    text: [
      {
        minOverrender: 0,
        content: `THE SLIPPER SIGNAL

  You click the heels together. The Bureau logs this as an "Unauthorized Home-Frequency Transmission." The slippers respond with a surge of silver friction — a hot, grinding sensation through the soles of your feet and up through the heel bones. The Kansas dust on your dress glows briefly with a wheat-gold light.

  [ SILVER FRICTION: +5 ]
  [ HOME SIGNAL: ATTEMPTED ]
  [ STATUS: UNRESOLVED ]
  [ WARRANT LEVEL: +2 ]

  Nothing happens. Or something happens that you cannot see the results of yet. The Bureau has logged the attempt and increased your Warrant Level. The Dust Clerk has moved closer. Its spinning silver-dollar eyes are registering the heel click as a reportable event.`,
      },
    ],
    choices: [
      {
        label: 'Click again — force the home frequency through.',
        target: 'DOROTHY_ORACLE_ENTRY',
        effects: [
          { type: 'addSilverFriction', value: 3 },
          { type: 'addWarrant', value: 2 },
          { type: 'addDisplacement', value: 2 },
        ],
      },
      {
        label: 'Stop clicking — accept the road and the displacement.',
        target: 'DOROTHY_PATH_ROAD',
        effects: [
          { type: 'addLoad', value: 5 },
          { type: 'setCompliance', value: 'med' },
        ],
      },
    ],
    onEnter: [],
  },,

  DOROTHY_PATH_COMPLIANCE: {
    id: 'DOROTHY_PATH_COMPLIANCE',
    character: 'dorothy',
    text: [
      {
        minOverrender: 0,
        content: `THE PHARMACEUTICAL ROAD

  The lollipop dissolves on your tongue with the taste of Oz-standard corn syrup and a mild dissociative agent. The Kansas dust stops glowing. The slippers' hum drops to an acceptable background frequency. The displacement still accumulates, but it feels distant — like a memory of a feeling rather than a feeling itself.

  [ COMPLIANCE: HIGH ]
  [ DISPLACEMENT: MUFFLED ]
  [ NOTE: MUFFLED IS NOT RESOLVED ]

  The road ahead looks clearer. Every Munchkin you pass nods with professional approval. The Bureau stamp on each brick seems more legible. You are easier to manage. The Dust Clerk has stopped approaching.

  The problem is: you can feel the home-frequency muffled inside the pharmaceutical fog, still transmitting, still trying.`,
      },
    ],
    choices: [
      {
        label: 'Follow the compliant road toward the Emerald City.',
        target: 'DOROTHY_END_SEAL',
        effects: [
          { type: 'addLoad', value: 15 },
          { type: 'setCompliance', value: 'high' },
        ],
      },
      {
        label: 'Let the muffled signal build until the Dust Clerk must respond.',
        target: 'DOROTHY_ORACLE_ENTRY',
        effects: [
          { type: 'addDisplacement', value: 3 },
          { type: 'addWarrant', value: 2 },
        ],
      },
    ],
    onEnter: [],
  },,
}
