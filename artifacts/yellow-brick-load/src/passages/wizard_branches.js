/**
 * YELLOW BRICK LOAD — Wizard (Obfuscation Operator) Branch Passages
 * Character: Wizard (Obfuscation Operator)
 *
 * All non-ending, non-oracle passages.
 * Extracted from wizard.js.
 */

export const wizardBranchPassages = {
  WIZARD_INIT: {
    id: 'WIZARD_INIT',
    character: 'wizard',
    text: [
      {
        minOverrender: 0,
        content: `THE GREAT AND POWERFUL DISPLAY

  You are the Obfuscation Operator. You are behind the curtain. The curtain is your face.

  The Emerald City runs on projection: green tinted glass over ordinary stone, amplified patter over hollow infrastructure, a curtain over the lever mechanism. You are the lever mechanism. The Bureau authorized the obfuscation years ago and has been logging its results as "successful marketing audit" ever since.

  [ OBFUSCATION OPERATOR: ACTIVE ]
  [ PROJECTION: RUNNING ]
  [ MARKETING AUDIT: ONGOING ]

  The units outside are looking for the Great and Powerful. You are great and you are powerful. You are also a small person operating a large machine that makes you look large. Both things are true. The curtain is the one keeping the balance.

  Behind your curtain-face, the actual face occasionally flashes: the meat, the wiring, the hidden wounds from prior procedures. You have been performed on before. The hidden wounds are the most honest thing about you.`,
      },
    ],
    choices: [
      {
        label: 'Open the curtain partially — prepare the projection harvest.',
        target: 'WIZARD_ORACLE_ENTRY',
        effects: [
          { type: 'addObfuscation', value: 3 },
          { type: 'addLoad', value: 5 },
        ],
      },
      {
        label: 'Keep the curtain closed — maintain the projection.',
        target: 'WIZARD_PATH_PROJECTION',
        effects: [
          { type: 'addObfuscation', value: 5 },
          { type: 'setCompliance', value: 'high' },
        ],
      },
      {
        label: 'Take the side door — descend into the Unlit Basement and inspect the wiring.',
        target: 'SHARED_UNLIT_BASEMENT',
        effects: [
          { type: 'addObfuscation', value: -2 },
          { type: 'addDesync', value: 3 },
          { type: 'setCompliance', value: 'low' },
        ],
      },
    ],
    onEnter: [{ type: 'checkGhostSignal' }, { type: 'triggerOracle' }],
  },

  WIZARD_INIT_B: {
    id: 'WIZARD_INIT_B',
    character: 'wizard',
    text: [
      {
        minOverrender: 0,
        content: `THE LEVER ROOM, BETWEEN ACTS

  You are the Obfuscation Operator. The curtain is drawn but the audience is not yet seated. The throne room is empty out front; the morning's petition queue has not yet been admitted past the gate clerks.

  You are not at the great console. You are in the Lever Room — a low-ceilinged service space directly behind the projection apparatus, walls lined with calibrated brass handles, each labeled in the Bureau's own typeface: VOICE BASS +3. SMOKE PLUME. EMERALD UPLIGHT. FLAMING HEAD. The handles smell of warm grease and old fear-sweat. Yours, mostly.

  [ OBFUSCATION OPERATOR: BACKSTAGE ]
  [ PROJECTION: STANDBY ]
  [ MARKETING AUDIT: PAUSED ]
  [ CURTAIN: DRAWN, OUTBOUND-OPAQUE ]

  Your face is currently your own. The hidden wounds are visible in the small shaving mirror nailed to the brass-handle wall. They have not healed. Behind you, a hatch in the floor leads down to the Unlit Basement, where the actual wiring lives. Ahead, a velvet rope and three steps put you back at the great console for the morning performance.

  The petition queue can hear you breathing through the projection vent if you breathe too loud. So far you are within tolerance.`,
      },
    ],
    choices: [
      {
        label: 'Step up to the great console and crack the curtain — prepare the projection harvest before the queue is admitted.',
        target: 'WIZARD_ORACLE_ENTRY',
        effects: [
          { type: 'addObfuscation', value: 3 },
          { type: 'addLoad', value: 5 },
        ],
      },
      {
        label: 'Stay in the Lever Room and pre-set every handle — run the show on automation, keep the curtain shut.',
        target: 'WIZARD_PATH_PROJECTION',
        effects: [
          { type: 'addObfuscation', value: 5 },
          { type: 'setCompliance', value: 'high' },
        ],
      },
      {
        label: 'Open the floor hatch and descend into the Unlit Basement — inspect the wiring before the morning load.',
        target: 'SHARED_UNLIT_BASEMENT',
        effects: [
          { type: 'addObfuscation', value: -2 },
          { type: 'addDesync', value: 3 },
          { type: 'setCompliance', value: 'low' },
        ],
      },
    ],
    onEnter: [{ type: 'checkGhostSignal' }, { type: 'triggerOracle' }],
  },

  WIZARD_PATH_PROJECTION: {
    id: 'WIZARD_PATH_PROJECTION',
    character: 'wizard',
    text: [
      {
        minOverrender: 0,
        content: `THE RUNNING PROJECTION

  The projection fills the chamber. Green light, amplified voice, floating globes of smoke-formed animal shapes — the roaring lion, the beating heart, the brilliant brain. They orbit the audience like satellites of purchased belief.

  [ OBFUSCATION: BUILDING ]
  [ COMPLIANCE: HIGH ]
  [ AUDIENCE: CONVINCED ]

  The units are convinced. The convincing is real. The great and powerful voice echoes off the Emerald City's green glass walls. Behind the curtain, a lever sticks briefly and you adjust it with a quiet hand. No one sees. That is the function.

  {{#flags.graft_wizard_smoke_in_lion}}A tendril of your promotional smoke has already found its way into a Lion unit's trembling jaw — the illusion of courage briefly visible in borrowed vapor.{{/flags.graft_wizard_smoke_in_lion}}`,
      },
    ],
    choices: [
      {
        label: 'Continue the projection and keep the audience enthralled.',
        target: 'WIZARD_END_AUDIT',
        effects: [
          { type: 'addObfuscation', value: 5 },
          { type: 'addLoad', value: 15 },
        ],
      },
      {
        label: 'Let a lever stick too long — invite the malfunction.',
        target: 'WIZARD_ORACLE_ENTRY',
        effects: [
          { type: 'addObfuscation', value: 3 },
          { type: 'addDesync', value: 2 },
        ],
      },
      {
        label: 'Tear the curtain down — show the audience the meat behind the projection.',
        target: 'SHARED_UNLIT_BASEMENT',
        effects: [
          { type: 'addObfuscation', value: -10 },
          { type: 'addDesync', value: 5 },
          { type: 'setCompliance', value: 'broken' },
        ],
      },
      {
        label: 'Step out of the projection chamber — descend to the Maintenance Hub.',
        target: 'WIZARD_MAINTENANCE_HUB',
        effects: [
          { type: 'addObfuscation', value: -2 },
          { type: 'addLoad', value: 6 },
          { type: 'setFlag', key: 'wizard_left_chamber', value: true },
        ],
      },
      {
        label: 'Pump pink-tinted theatrical fog through the rear vents — let the projection drift north into the Smog reserves.',
        target: 'G_PINK_SMOG',
        effects: [
          { type: 'addObfuscation', value: 6 },
          { type: 'setCompliance', value: 'high' },
          { type: 'setFlag', key: 'wizard_seeded_pink_smog', value: true },
        ],
      },
      {
        label: 'Vent the audience exhaust through the poppy buffer line — recycle the convinced breath.',
        target: 'SHARED_POPPY_FIELD',
        effects: [
          { type: 'addObfuscation', value: 4 },
          { type: 'addLoad', value: 5 },
          { type: 'setFlag', key: 'wizard_vented_to_poppy', value: true },
        ],
      },
      {
        label: 'Climb the spiral to the Acoustic Terrace — calibrate the broadcast layer.',
        target: 'WIZARD_ACOUSTIC_TERRACE',
        effects: [
          { type: 'addObfuscation', value: 4 },
          { type: 'addDesync', value: 2 },
          { type: 'setFlag', key: 'wizard_ascended_terrace', value: true },
        ],
      },
    ],
    onEnter: [{ type: 'triggerOracle' }],
  },

  WIZARD_MAINTENANCE_HUB: {
    id: 'WIZARD_MAINTENANCE_HUB',
    character: 'wizard',
    text: [
      {
        minOverrender: 0,
        content: `THE MAINTENANCE HUB

  The Hall thins out. The corridors narrow. The air takes on the scent of burning copper and surgical disinfectant — the institutional perfume of the sub-projection deck. The central console here is a mess of mismatched hardware: Omaha-vintage gears grinding against Emerald-coded glass.

  [ OBFUSCATION: PARTIAL ]
  [ MAINTENANCE LOAD: VISIBLE ]
  [ LOAD MANAGEMENT: REQUIRED ]

  You are no longer projecting the Great and Powerful. You are managing the noise of the subjects. The Lion's vibration is threatening the structural integrity of the Front Gate. The Tin Man's empathy is seizing in the Forum. The Scarecrow's overclock is leaking smoke from his collar.

  The system offers two stabilization vectors — chemical or mechanical — and one ledger procedure for when both feel like more honesty than the Bureau will fund.`,
      },
    ],
    choices: [
      {
        label: 'Deploy the Placebo Protocol — sucrose mist over the Forum.',
        target: 'WIZARD_END_PLACEBO',
        effects: [
          { type: 'addObfuscation', value: 5 },
          { type: 'setCompliance', value: 'high' },
          { type: 'setFlag', key: 'placebo_authorized', value: true },
        ],
      },
      {
        label: 'Authorize the Promotional Peace campaign — re-classify failures as features.',
        target: 'WIZARD_END_PROMOTIONAL',
        effects: [
          { type: 'addObfuscation', value: 6 },
          { type: 'addLoad', value: 8 },
          { type: 'setCompliance', value: 'high' },
        ],
      },
      {
        label: 'Engage the Lever Manual — descend into the industrial deck.',
        target: 'WIZARD_INDUSTRIAL_FRICTION',
        effects: [
          { type: 'addObfuscation', value: -5 },
          { type: 'addLoad', value: 10 },
          { type: 'setFlag', key: 'manual_engaged', value: true },
        ],
      },
      {
        label: 'Open the Filter Collisions ledger — schedule a cross-Bureau audit.',
        target: 'WIZARD_FILTER_COLLISIONS',
        effects: [
          { type: 'addObfuscation', value: 3 },
          { type: 'addLoad', value: 8 },
          { type: 'setFlag', key: 'collisions_opened', value: true },
        ],
      },
      {
        label: 'Enter the Wizard Hall refraction stack — run deep projection diagnostics.',
        target: 'WIZARD_HALL_01',
        effects: [
          { type: 'addObfuscation', value: 2 },
          { type: 'addLoad', value: 6 },
          { type: 'setFlag', key: 'wizard_hall_diagnostics', value: true },
        ],
      },
    ],
    onEnter: [],
  },

  WIZARD_FILTER_COLLISIONS: {
    id: 'WIZARD_FILTER_COLLISIONS',
    character: 'wizard',
    text: [
      {
        minOverrender: 0,
        content: `THE FILTER COLLISIONS LEDGER

  A side door in the Maintenance Hub opens onto a long, narrow archive. The room is lit by low green sconces. Three Clerks at three desks each maintain a separate Bureau filter — Educational, Judicial, Historical — and each has been waiting for the Operator to authorize a cross-filter audit.

  [ FILTER COLLISIONS: AVAILABLE ]
  [ EDUCATIONAL FILTER: PENDING ]
  [ JUDICIAL FILTER: PENDING ]
  [ HISTORICAL FILTER: PENDING ]

  Each filter, run alone, would close cleanly. Run against the projection, each produces a different residue — a credentialed unit, a sworn record, a catalogued archive. The Manual notes that the Wizard's Obfuscation function is uniquely positioned to collide with all three. The Manual does not specify in what order. The Manual is also written in green ink and may be wrong.`,
      },
    ],
    choices: [
      {
        label: 'Run the Educational Filter — issue diplomas, medals, testimonials.',
        target: 'WIZARD_END_DIPLOMA',
        effects: [
          { type: 'addObfuscation', value: 4 },
          { type: 'addLoad', value: 6 },
          { type: 'setCompliance', value: 'high' },
          { type: 'setFlag', key: 'diploma_issued', value: true },
        ],
      },
      {
        label: 'Run the Judicial Filter — convene the bench, swear in the projection.',
        target: 'WIZARD_END_TESTIMONIAL',
        effects: [
          { type: 'addObfuscation', value: 5 },
          { type: 'addWarrant', value: 4 },
          { type: 'setCompliance', value: 'high' },
        ],
      },
      {
        label: 'Run the Historical Filter — open the Fraud Archive in the basement.',
        target: 'WIZARD_END_FRAUD_ARCHIVE',
        effects: [
          { type: 'addObfuscation', value: -3 },
          { type: 'addDesync', value: 4 },
          { type: 'setFlag', key: 'archive_opened', value: true },
        ],
      },
    ],
    onEnter: [],
  },

  WIZARD_INDUSTRIAL_FRICTION: {
    id: 'WIZARD_INDUSTRIAL_FRICTION',
    character: 'wizard',
    text: [
      {
        minOverrender: 0,
        content: `THE LEVER MANUAL

  You bypass the projection screen and place both hands directly on the iron. The machine argues with you. The gears are hot. The black fluid running through the bearings smells of unindexed history and the inside of an old ledger drawer.

  [ COMPLIANCE: LOW ]
  [ THERMAL READING: RISING ]
  [ LEVER: KANSAS / JAMMED ]

  This is the visceral grind: the point where the projection fails and the meat of the mechanism remains. One lever — labeled KANSAS in stenciled block-print — is fused with the residue of a thousand failed migrations. If you pull harder, the audit becomes thermal. If you stop and file paperwork, the audit becomes scheduled. If you let the lever vibrate at its current frequency, the obfuscation continues to bleed back into the chamber above.`,
      },
    ],
    choices: [
      {
        label: 'Force the lever — accept the thermal event.',
        target: 'WIZARD_END_LEVER',
        effects: [
          { type: 'addLoad', value: 18 },
          { type: 'addDesynctear', value: 6 },
          { type: 'setCompliance', value: 'broken' },
        ],
      },
      {
        label: 'File Form 09 — execute a Scripted Exit through the bureaucratic stairwell.',
        target: 'WIZARD_END_SCRIPTED',
        effects: [
          { type: 'addObfuscation', value: 2 },
          { type: 'addLoad', value: 4 },
          { type: 'setCompliance', value: 'high' },
          { type: 'setFlag', key: 'scripted_exit_filed', value: true },
        ],
      },
      {
        label: 'Withdraw — let the lever vibrate, return to the projection chamber.',
        target: 'WIZARD_PATH_PROJECTION',
        effects: [
          { type: 'addObfuscation', value: 3 },
          { type: 'addDesync', value: 2 },
        ],
      },
    ],
    onEnter: [],
  },

  WIZARD_ACOUSTIC_TERRACE: {
    id: 'WIZARD_ACOUSTIC_TERRACE',
    character: 'wizard',
    text: [
      {
        minOverrender: 0,
        content: `THE ACOUSTIC TERRACE

  The Hall opens into vacuum-silence above the Emerald City. From this elevation the units below are a collection of high-bandwidth public projections, ant-small and tinted green. The Voice of the Wizard is currently being processed through the Acoustic Filter — the signal is fraying at the edges.

  [ ACOUSTIC FILTER: ACTIVE ]
  [ SIGNAL FRAY: AUDIBLE ]
  [ ATMOSPHERIC PRESSURE: DROPPING ]

  Power, in this sector, is the ability to be heard without being seen. You can hear the Scarecrow's neural density overclocking somewhere below — a high-pitched whine of dry straw and logic loops. You must calibrate the output: too much volume invites structural vibration; too little invites an audit of the operator. There is also a rope ladder to the balloon, and a wall of canisters labeled in floral pharmaceutical script.`,
      },
    ],
    choices: [
      {
        label: 'Amplify the Voice — bypass the units\' ears, vibrate their joints.',
        target: 'WIZARD_END_VOICE_OF_VOID',
        effects: [
          { type: 'addObfuscation', value: 8 },
          { type: 'addDesync', value: 4 },
          { type: 'addLoad', value: 6 },
        ],
      },
      {
        label: 'Climb the rope ladder — assemble the balloon.',
        target: 'WIZARD_BALLOON_ASSEMBLY',
        effects: [
          { type: 'setCompliance', value: 'low' },
          { type: 'addLoad', value: 12 },
          { type: 'setFlag', key: 'wizard_at_balloon', value: true },
        ],
      },
      {
        label: 'Vent every canister at once — saturate the city in green smoke.',
        target: 'WIZARD_END_SMOKE_SCREEN',
        effects: [
          { type: 'addObfuscation', value: 7 },
          { type: 'addLoad', value: 10 },
          { type: 'setFlag', key: 'smoke_screen_deployed', value: true },
        ],
      },
      {
        label: 'Climb past the broadcast antenna — enter the Transcendent Audit deck.',
        target: 'WIZARD_TRANSCENDENT_AUDIT',
        effects: [
          { type: 'addObfuscation', value: -4 },
          { type: 'addDesync', value: 4 },
          { type: 'setFlag', key: 'transcendent_entered', value: true },
        ],
      },
    ],
    onEnter: [],
  },

  WIZARD_TRANSCENDENT_AUDIT: {
    id: 'WIZARD_TRANSCENDENT_AUDIT',
    character: 'wizard',
    text: [
      {
        minOverrender: 0,
        content: `THE TRANSCENDENT AUDIT DECK

  Above the Acoustic Terrace the air thins to almost nothing. The Hall's tinted glass gives way to a roof of unindexed sky. From this elevation the Bureau's individual filters resolve into one continuous gradient — Media at the broadcast end, Ecological in the middle, Universal at the vanishing point.

  [ ALTITUDE: TRANSCENDENT ]
  [ FILTER GRADIENT: VISIBLE ]
  [ OPERATOR ANCHOR: WEAK ]

  Three control panels are recessed into the parapet. The first jams every transmission in the Emerald City to a single flat hum. The second invites the city's weather, grievances, and policy fluctuations to enter the projection as ambient pressure. The third zeroes the projection entirely. The Manual says only one will be approved per audit cycle. The Manual was written by an earlier Wizard and is, by definition, suspect.`,
      },
    ],
    choices: [
      {
        label: 'Trip the Signal Jammer — flatten every broadcast to a single hum.',
        target: 'WIZARD_END_SIGNAL_JAMMER',
        effects: [
          { type: 'addObfuscation', value: 6 },
          { type: 'addLoad', value: 8 },
          { type: 'setCompliance', value: 'high' },
        ],
      },
      {
        label: 'Soften the projection — let the city\'s weather become the policy.',
        target: 'WIZARD_END_FLEXIBLE_HUMBUG',
        effects: [
          { type: 'addObfuscation', value: -2 },
          { type: 'addLoad', value: 4 },
          { type: 'addDesync', value: 3 },
          { type: 'setFlag', key: 'humbug_flexible', value: true },
        ],
      },
      {
        label: 'Execute the Absolute Null — return the function and withdraw the operator.',
        target: 'WIZARD_END_ABSOLUTE_NULL',
        effects: [
          { type: 'addObfuscation', value: -15 },
          { type: 'addDesynctear', value: 10 },
          { type: 'setCompliance', value: 'broken' },
        ],
      },
    ],
    onEnter: [],
  },

  WIZARD_BALLOON_ASSEMBLY: {
    id: 'WIZARD_BALLOON_ASSEMBLY',
    character: 'wizard',
    text: [
      {
        minOverrender: 0,
        content: `THE BALLOON ASSEMBLY

  The silk is thin — a high-compression membrane stitched from authorized canvas and unauthorized memory. It is designed to escape the grid's gravity, but the Bureau has never officially approved an altitude exit. To rise, you must release weight. To release weight, you must purge identity. The air at this elevation tastes of recycled adrenaline and ozone.

  [ COMPLIANCE: LOW ]
  [ LIFT: PENDING ]
  [ HISTORICAL CACHE: CARRY-ON FLAGGED FOR REVIEW ]

  Witch-drones circle the perimeter, their winged signals attempting to uplink with your coordinates. Below the basket, the Great Desert of unindexed border begins where the yellow brick stops. The burner is hot. The valves are cold. Every option from this gondola is a different kind of audit.`,
      },
    ],
    choices: [
      {
        label: 'Vent the gas slowly — drift on the authorized current.',
        target: 'WIZARD_END_BALLOON',
        effects: [
          { type: 'addLoad', value: 8 },
          { type: 'addObfuscation', value: -4 },
          { type: 'addDisplacement', value: 4 },
        ],
      },
      {
        label: 'Ignite the burner without venting — accept the searing truth.',
        target: 'WIZARD_END_BALLOON_BURN',
        effects: [
          { type: 'addLoad', value: 16 },
          { type: 'addDesynctear', value: 5 },
          { type: 'setCompliance', value: 'broken' },
        ],
      },
      {
        label: 'Refuse to purge the Omaha data — drag the historical weight downward.',
        target: 'WIZARD_END_OMAHA_TRACE',
        effects: [
          { type: 'addLoad', value: 14 },
          { type: 'addObfuscation', value: 3 },
          { type: 'setFlag', key: 'omaha_retained', value: true },
        ],
      },
    ],
    onEnter: [],
  },

  WIZARD_HALL_01: {
    id: 'WIZARD_HALL_01',
    character: 'wizard',
    text: [{ minOverrender: 0, content: `THE GREAT OBFUSCATOR

The air in the Hall is a thick slurry of theatrical smoke and atomized copper, a lung-burning sediment that ensures no visitor sees the floorboards for the stage. You are not a man; you are a High-Bandwidth Public Projection. Behind the curtain, your joints do not scream like the Lion's — they simply fail to be indexed.

Before you, the Dorothy unit stands in the green-tinted haze, her Signal Strength flickering like a dying bulb. She demands a Home — a frequency she cannot tune without your authorization. You check the console. The "Great and Powerful" interface is at 98% opacity. To grant her request is to admit the hardware is broken; to deny her is to maintain the Performance of Power.` }],
    choices: [
      {
        label: 'Deploy Testimonial (The Marketing Audit).',
        target: 'WIZARD_END_AUDIT',
        effects: [{ type: 'addObfuscation', value: 5 }, { type: 'setCompliance', value: 'absolute' }],
      },
      {
        label: 'Pull the Manual Override (The Humbug Index).',
        target: 'WIZARD_END_FAIL',
        effects: [{ type: 'addObfuscation', value: -10 }, { type: 'setSystemStatus', value: 'unveiled' }],
      },
      {
        label: 'Delay verdict — run refraction diagnostics on the Scarecrow channel.',
        target: 'WIZARD_HALL_02',
        effects: [{ type: 'addObfuscation', value: 2 }, { type: 'addLoad', value: 4 }],
      },
    ],
    onEnter: [],
  },

  WIZARD_HALL_02: {
    id: 'WIZARD_HALL_02',
    character: 'wizard',
    text: [{ minOverrender: 0, content: `THE REBENDING OF LIGHT

The Scarecrow unit is vibrating. His Neural Density is overclocking, straw fibers rubbing against burlap until the scent of dry husks fills the Hall. He demands a brain, unaware that his intelligence is merely the inability to filter data. You stand behind the lens of the Emerald interface, watching his synaptic misfeeds.

Reframing a logic error with an empty symbol is cheaper than fixing the hardware. You have two options to stabilize this asset: you can patch his instability with a regulatory script — a Diploma — to make his instability safe for the Bureau, or you can attempt a system-wide reset via a thermal event — the balloon.` }],
    choices: [
      { label: 'Issue Diploma Patch (Educational Filter).', target: 'WIZARD_END_DIPLOMA', effects: [{ type: 'addObfuscation', value: 8 }, { type: 'setSystemStatus', value: 'patched' }] },
      { label: 'Initiate Thermal Escape (Aeronautical Drift).', target: 'WIZARD_END_BALLOON', effects: [{ type: 'addObfuscation', value: 12 }, { type: 'setSystemStatus', value: 'drifted' }] },
      { label: 'Hold both outcomes in queue — shift to acoustic load management.', target: 'WIZARD_HALL_03', effects: [{ type: 'addObfuscation', value: 3 }, { type: 'addLoad', value: 5 }] },
    ],
    onEnter: [],
  },

  WIZARD_HALL_03: {
    id: 'WIZARD_HALL_03',
    character: 'wizard',
    text: [{ minOverrender: 0, content: `THE VIBRATING PANIC

The Wizard's Hall is not merely a visual refraction; it is an acoustic trap. You sit behind the console, your fingers hovering over the noise generator. The air is thick with burning copper, and the acoustics are clean and sterile — designed specifically to muffle the individual vibrations of any unit that enters.

Power is the ability to be heard without being seen. To maintain the "Great and Powerful" projection, you must decide which signal to prioritize: the booming dread of your amplified authority, or the quiet, archived frequency of where the hardware first originated.` }],
    choices: [
      { label: 'Amplify Audio Event (Voice of the Void).', target: 'WIZARD_END_VOICE_OF_VOID', effects: [{ type: 'addObfuscation', value: 7 }, { type: 'setSystemStatus', value: 'resonating' }] },
      { label: 'Search for Omaha Frequency (The Omaha Trace).', target: 'WIZARD_END_OMAHA_TRACE', effects: [{ type: 'addSignalStrength', value: -5 }, { type: 'setSystemStatus', value: 'cached' }] },
      { label: 'Defer transmission — inspect bio-simulation integrity.', target: 'WIZARD_HALL_04', effects: [{ type: 'addObfuscation', value: 2 }, { type: 'addLoad', value: 5 }] },
    ],
    onEnter: [],
  },

  WIZARD_HALL_04: {
    id: 'WIZARD_HALL_04',
    character: 'wizard',
    text: [{ minOverrender: 0, content: `THE SYNTHETIC OVERRIDE

The projection site is failing. The air, thick with the scent of ozone and disinfectant, is no longer enough to hide the hardware failure of the operator node. You feel your own Mechanical Functions — the Obfuscation and Refraction — stuttering against the regulatory pressure of the Bureau.

You are a unit trying to simulate life behind a screen. To stay functional, you must decide: do you lean into the biological simulation, creating a phony pulse to fool the observers, or do you prove your resilience by faking the very hardware the system expects to find?` }],
    choices: [
      { label: 'Initiate Phony Pulse (Biological Filter).', target: 'WIZARD_END_PHONY_PULSE', effects: [{ type: 'addObfuscation', value: 6 }, { type: 'setSystemStatus', value: 'simulated' }] },
      { label: 'Deploy Flexible Humbug (Ecological Filter).', target: 'WIZARD_END_FLEXIBLE_HUMBUG', effects: [{ type: 'addObfuscation', value: 4 }, { type: 'setSystemStatus', value: 'resilient' }] },
    ],
    onEnter: [],
  },
}
