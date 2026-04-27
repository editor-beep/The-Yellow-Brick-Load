/**
 * YELLOW BRICK LOAD — Lion Passages
 * Character: Lion (Unit L-77)
 *
 * Endings from master matrix (L-END-11 through L-END-31):
 *   L-END-11  The Padded Cell        Medical / Insulated
 *   L-END-12  Unmonitored Dark       Ecological / Unindexed
 *   L-END-13  The Taxidermy          Historical / Preserved
 *   L-END-14  The Feedback Loop      Psychological / Vibrating
 *   L-END-15  Royal Compliance       State / Crowned
 *   L-END-16  The Jungle Basin       Economic / Metabolized
 *   L-END-17  Mechanical Cowardice   Industrial / Malfunctioning
 *   L-END-18  The Scent of Pine      Olfactory / Cached
 *   L-END-19  Total Displacement     Physics / Sublimated
 *   L-END-20  The Guard Dog          Security / Stationed
 *   L-END-21  The Roaring Void       Narrative / Resonating
 *   L-END-22  The Mane Event         Entertainment / Marketed
 *   L-END-23  Synaptic Surge         Neurological / Fried
 *   L-END-24  The Stone Lion         Urban / Ornamented
 *   L-END-25  The Calibration        Scientific / Tuned
 *   L-END-26  The Prey Cycle         Biological / Cycling
 *   L-END-27  The Badge of Air       Bureaucracy / Hollowed
 *   L-END-28  The Kalidah Merge      Genetic / Overwritten
 *   L-END-29  The Desert Crossing    Climatological / Evaporated
 *   L-END-30  The Golden Fleece      Economic / Sheared
 *   L-END-31  Terminal Velocity      Universal / Accelerating
 *
 * Ghost Signal: D-ERR-99 (off-grid — not a Lion ending, triggers separately)
 *
 * Passages marked TODO are stubs for future writing.
 * Prose sourced from rough.docx where available; stubs elsewhere.
 */

export const lionPassages = {

  // ─────────────────────────────────────────────────────────────────────────
  // INIT / ENTRY
  // ─────────────────────────────────────────────────────────────────────────

  LION_INIT: {
    id: 'LION_INIT',
    character: 'lion',
    text: [
      {
        minOverrender: 0,
        content: `UNIT L-77

You are the Lion.

The Yellow Brick Load stretches ahead. You are standing on it. The shaking began some time ago—jaw, spine, tail—and has not stopped. A voice issues a prompt. The road requires a response.

Before you can respond to the road, you must decide what kind of body you are bringing to it.`,
      },
    ],
    choices: [
      {
        label: 'WETWARE — You are meat under pressure. The shaking is a body problem.',
        target: 'LION_INIT_W',
        effects: [{ type: 'setFlag', key: 'mode', value: 'wetware' }],
      },
      {
        label: 'HARDWARE — You are a unit with a filing error. The shaking is a system problem.',
        target: 'LION_INIT_H',
        effects: [{ type: 'setFlag', key: 'mode', value: 'hardware' }],
      },
    ],
    onEnter: [
      { type: 'checkGhostSignal' },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // WETWARE BRANCH — body horror, visceral, meat under bureaucratic pressure
  // ─────────────────────────────────────────────────────────────────────────

  LION_INIT_W: {
    id: 'LION_INIT_W',
    character: 'lion',
    text: [
      {
        minOverrender: 0,
        content: `THE KING OF THE FOREST IS A UNIT OF MEASURE

You are the Lion.

The air is thick with wet gypsum and the sour smell of your own matted fur. Your paws feel swollen inside their own skin, heavy as wet sandbags. Behind your ribs something keeps ticking—not a heart, but a filing cabinet that won't stop opening and closing.

The Yellow Brick Load stretches ahead, the mortar between the bricks crusted with old blood and official seals. A voice, flat as carbon paper, drifts down from the grey sky or maybe from the speaker bolted somewhere behind your sternum.

"Unit L-77. Report status."

Your jaw aches. The tremor starts in the hinge, a wet clicking like loose teeth in a dry socket, then rolls down your spine until your tail twitches like a busted typewriter carriage. You have been told this is cowardice. You have been told a King is simply a body whose paperwork has been properly filed.

You open your mouth. What comes out is a dry rasp, like sandpaper on bone.`,
      },
      {
        minOverrender: 3,
        content: `THE KING OF THE FOREST IS A UNIT OF MEASURE

You are the Lion. You have been the Lion. You will continue to be the Lion until the system decides otherwise.

The wet gypsum smell does not leave. The filing cabinet does not stop. The tremor has been clicking. The tremor has been clicking. The tremor has been—

"Unit L-77. Report status."

You open your mouth. What comes out is a dry rasp. A dry rasp. A dry—`,
      },
    ],
    choices: [
      {
        label: 'Accept the ASSIMILATION and report the shaking as a mechanical error.',
        target: 'LION_ASSIMILATION',
        effects: [
          { type: 'addLoad', value: 5 },
          { type: 'setCompliance', value: 'high' },
        ],
      },
      {
        label: 'Ignore the instruction and lunge into the unmapped thicket.',
        target: 'LION_VIOLENCE',
        effects: [
          { type: 'addDesync', value: 1 },
          { type: 'addSmudge', value: 1 },
        ],
      },
      {
        label: "Pretend the shaking isn't happening and keep walking the Load as if nothing is wrong.",
        target: 'LION_DENIAL',
        effects: [
          { type: 'addLoad', value: 3 },
          { type: 'setCompliance', value: 'med' },
        ],
      },
    ],
    onEnter: [],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // THE DENIAL BRANCH
  // ─────────────────────────────────────────────────────────────────────────

  LION_DENIAL: {
    id: 'LION_DENIAL',
    character: 'lion',
    text: [
      {
        minOverrender: 0,
        content: `THE DENIAL

You decide the simplest thing is to keep walking.

You fix your eyes on the next yellow brick, then the one after that, and the one after that. The tremor is still there—your left hind leg drags a half-second behind the others, the claws scraping like a pen that's run out of ink—but you tell yourself it's only the road. Kings do not limp. Kings proceed.

The cornstalks lean in like bored clerks waiting for you to fill out the next form. Each stalk is stamped with tiny printed labels: APPROVED • PENDING • OBSOLETE. Their leaves are dry and papery; when they brush your flank it feels like being licked by carbon copies.

"I am fine," you mutter under your breath. The words come out stamped and dated. "Status: Nominal."

A Milestone Marker rises ahead—an iron post driven into the road like a filing spike. Dark fluid leaks from rust holes near the base, thick and slow, smelling of old cedar drawers and dried blood. At the top, a black bird (or something shaped like one) watches you with a single glass lens that clicks every time your heart stutters.

It is waiting for you to break character.

You keep walking. The tremor moves up into your chest now, a wet fluttering like paperwork being shuffled too fast. Your mane feels heavier, as if someone has been stapling extra pages to it while you weren't looking.`,
      },
    ],
    choices: [
      {
        label: 'Maintain the gaze and keep walking. (The Royal Walk)',
        target: 'LION_ROYAL_COMPLIANCE',
        effects: [{ type: 'addLoad', value: 8 }],
      },
      {
        label: 'Stop and observe the bird more closely. (The Audit)',
        target: 'LION_CALIBRATION_POINT',
        effects: [
          { type: 'addDesync', value: 1 },
          { type: 'setCompliance', value: 'low' },
        ],
      },
      {
        label: 'Pause to fix the leaking Milestone Marker. (The Ritual)',
        target: 'LION_RITUAL_WORK',
        effects: [
          { type: 'addLoad', value: 10 },
          { type: 'addSmudge', value: 1 },
        ],
      },
    ],
    onEnter: [],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // THE ASSIMILATION BRANCH
  // ─────────────────────────────────────────────────────────────────────────

  LION_ASSIMILATION: {
    id: 'LION_ASSIMILATION',
    character: 'lion',
    text: [
      {
        minOverrender: 0,
        content: `THE ASSIMILATION

Audit Entry: Sub-Routine "Dampener"
The dampeners are not a cure. They are a redistribution of signal. In the terminology of the Bureau, your "fear" is simply a high-frequency vibration that threatens the structural integrity of the Unit. To the Lion, it is a tremor; to the System, it is Load.

When you accept the dampeners, you are not being comforted. You are being calibrated.

The Physicality of the Dampener:
It arrives as a blue fluid, or perhaps a series of porcelain shims inserted between your vertebrae. It smells of ozone and sterile gauze. Once active, the dampeners act as a low-pass filter for your nervous system. You can still see the Kalidah in the dark; you can still see the road crumbling into a void of unformatted data. But you no longer care.

The dampener transforms the "Scream" into a "Notification."

Before: Your jaw clicks, your fur stands on end, and you feel the urge to bolt into the thicket.

After: A small, grey icon appears in the corner of your vision: [ ! ] ALERT: ANXIETY_EVENT_04. STATUS: SUPPRESSED.

The shaking in your spine doesn't stop. It is simply decoupled from your consciousness. You become a passenger in a body that is still vibrating at 14Hz. You are a King who has been muted so that the rest of the simulation can proceed without the noise of your collapse.

You sit. The movement is a series of sighs. You place your paws within the designated safety squares etched into the yellow bricks.

"Shaking detected," you speak into the dirt. "Frequency: 14Hz. Location: Spine. Perception: Instability. Requesting redistribution."

The sky flickers. A pale, translucent grid descends, overlaying the stalks of the field. This is the Semantic Pressure Layer. You watch as your fear is translated into a graph. The system is not interested in why you are afraid. It is only interested in how much space your fear occupies.

The shaking does not stop. As the grid tightens, you feel a strange, hollow relief. If the system can measure the shaking, the shaking must be part of the design.

A figure appears at the edge of the grid. It wears the skin of a technician but moves with the gait of a marionette. It holds a clipboard of polished brass.

"The King of the Forest is a title for the body that best manages its own collapse," the technician says without looking up. "Shall we adjust your dampeners, or would you prefer to log this as a Permanent Feature?"`,
      },
    ],
    choices: [
      {
        label: 'Accept the dampeners.',
        target: 'LION_SEDATION',
        effects: [
          { type: 'addLoad', value: 10 },
          { type: 'setCompliance', value: 'high' },
          { type: 'addOverrender', value: 1 },
        ],
      },
      {
        label: 'Log the shaking as a feature.',
        target: 'LION_NOMINALIZATION',
        effects: [
          { type: 'addLoad', value: 5 },
          { type: 'addDesync', value: 1 },
        ],
      },
    ],
    onEnter: [],
  },

  LION_SEDATION: {
    id: 'LION_SEDATION',
    character: 'lion',
    text: [
      {
        minOverrender: 0,
        content: `THE SEDATION

The technician produces a small, glass capsule. It contains a pale blue fluid that does not move when shaken, even though you can hear it sloshing.

"This will not stop the shaking," it says. "It will stop your awareness of the shaking. The difference is administrative."

You open your mouth. The capsule is placed on your tongue. It dissolves without taste.

The effect is immediate. The 14Hz frequency is still there—you can feel it in the bones of your face—but the sensation is now a notification rather than an event. A small, green indicator in the upper right of your vision: [ TREMOR: ACTIVE ]

The grid retracts. The technician makes a note on the clipboard.

"Optimal noise floor achieved," it says. "Proceed to the Muffled Chamber for final calibration."`,
      },
      {
        minOverrender: 2,
        content: `THE SEDATION

The capsule. The blue fluid. The notification.

[ TREMOR: ACTIVE ]
[ TREMOR: ACTIVE ]
[ TREMOR: ACTIVE ]

The technician makes a note. The technician has always been making a note.`,
      },
    ],
    choices: [
      {
        label: 'Proceed to the Muffled Chamber.',
        target: 'LION_MUFFLED_CHAMBER',
        effects: [
          { type: 'addLoad', value: 15 },
          { type: 'setCompliance', value: 'high' },
        ],
      },
      {
        label: 'Spit the capsule out.',
        target: 'LION_SYSTEM_SPASM',
        effects: [
          { type: 'addDesync', value: 1 },
          { type: 'addSmudge', value: 1 },
          { type: 'setCompliance', value: 'low' },
        ],
      },
    ],
    onEnter: [],
  },

  LION_NOMINALIZATION: {
    id: 'LION_NOMINALIZATION',
    character: 'lion',
    text: [
      {
        minOverrender: 0,
        content: `THE NOMINALIZATION

The technician does not look up. It makes a note.

"Shaking logged as: Stability-Adjacent Oscillation," it says. "This is a Permanent Feature. You will be issued a Badge of Structural Variance."

A badge materializes on your chest. It is translucent. You can see through it to the matted fur beneath. The badge reads: [ FEATURE: ACTIVE ]

"You are now categorized as a High-Variance Unit," the technician continues. "This means your behavior will be observed, not corrected. Congratulations."

The grid remains. The shaking remains. The only thing that has changed is the label.

The technician turns to leave.`,
      },
    ],
    choices: [
      {
        label: 'Ask the technician what happens to high-variance units.',
        target: 'LION_MIRROR_ASSIMILATION',
        effects: [
          { type: 'addLoad', value: 5 },
          { type: 'addDesync', value: 1 },
        ],
      },
      {
        label: 'Walk forward into the green light.',
        target: 'LION_EMPTY_PROMENADE',
        effects: [
          { type: 'addLoad', value: 10 },
          { type: 'setCompliance', value: 'med' },
        ],
      },
    ],
    onEnter: [],
  },

  LION_MIRROR_ASSIMILATION: {
    id: 'LION_MIRROR_ASSIMILATION',
    character: 'lion',
    text: [
      {
        minOverrender: 0,
        content: `THE MIRROR ASSIMILATION

You look back.

The technician is not laughing. It is not moving. It stands at the edge of the Gilded Field, its brass clipboard held against its chest like a shield.

In the mirrored eyes of the marionette, you see the Yellow Brick Load. You see the green grid that now calls your shaking 'Stability.' But most of all, you see the badge. On the technician's side of the glass, the plastic isn't transparent. It is a solid, black void that pulls the light out of the air.

The technician speaks, but its mouth does not move. The words arrive as a notification on the periphery of your sight.

[ ADVISORY: LOOKING BACK INCREASES LOAD ]
[ RECOMMENDATION: PROCEED ]

The figure begins to fade. It does not vanish; it loses its opacity, becoming a smudge of gray against the vibrant, false green of the field. You realize the system isn't just renaming your collapse. It is erasing the witness.`,
      },
    ],
    choices: [
      {
        label: 'Turn away and walk into the green light.',
        target: 'LION_EMPTY_PROMENADE',
        effects: [
          { type: 'addLoad', value: 10 },
          { type: 'addOverrender', value: 1 },
        ],
      },
      {
        label: 'Shout a name—any name—to see if the smudge responds.',
        target: 'LION_NOMINAL_ECHO',
        effects: [
          { type: 'addDesync', value: 1 },
          { type: 'addSmudge', value: 1 },
          { type: 'checkGhostSignal' },
        ],
      },
    ],
    onEnter: [{ type: 'addSmudge', value: 1 }],
  },

  LION_NOMINAL_ECHO: {
    id: 'LION_NOMINAL_ECHO',
    character: 'lion',
    text: [
      {
        minOverrender: 0,
        content: `THE NOMINAL ECHO

You open your mouth to shout. No name arrives.

The technician does not react because the technician is no longer a separate object. It has become a property of the light. The white room reeks of ozone, coating your tongue.  The badge on your chest is a green pulse, a rhythmic reminder that you have been counted.

You find that you cannot move your jaw. The permission to speak was a temporary allocation, a buffer that has reached its limit. 

You are a King of the gap between two lines of text.

The floor is no longer bone or paper. It is a flat, unyielding white that does not accept the weight of your paws. You are not standing; you are being held in a fixed coordinate by the system's agreement that you are there.

"Is the body satisfied?" the sky asks.

The sky is the ledger. The sky is the supervisor. The sky is the mirror.

You try to shake your head. The movement is blocked. The shaking is now a DESIGN FEATURE, and the design does not permit variance. You are the frequency of your own fear, trapped in a loop that the Bureau calls stability.`,
      },
    ],
    choices: [
      {
        label: 'Acknowledge the final entry.',
        target: 'LION_CLOSED_SYSTEM',
        effects: [
          { type: 'addLoad', value: 20 },
          { type: 'setCompliance', value: 'high' },
        ],
      },
      {
        label: 'Wait in the white room until the next cycle begins.',
        target: 'LION_LATENCY',
        effects: [
          { type: 'addDesync', value: 1 },
        ],
      },
    ],
    onEnter: [{ type: 'addSmudge', value: 1 }],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // THE VIOLENCE BRANCH
  // ─────────────────────────────────────────────────────────────────────────

  LION_VIOLENCE: {
    id: 'LION_VIOLENCE',
    character: 'lion',
    text: [
      {
        minOverrender: 0,
        content: `THE BREACH

The voice's instruction sticks in your throat like a filing spike. You tear it out with your teeth.

You lunge off the Yellow Brick Load and into the cornstalks. What should be wild grass becomes a wall of vertical filing folders—stiff vellum edges sharpened like guillotine blades. They slice through your matted fur in neat, parallel cuts, each one stinging like a fresh paper cut from official correspondence.

Blood and clear lymph mix with black ink that smells of old ledgers left too long in damp basements. You roar—not a king's roar, but a wet, ragged tearing of lung and throat, the sound of meat trying to divorce itself from bone.

The stalks give way to a trash pit of the Bureau. Rusted typewriters the size of cattle lie half-buried in the mud, their keys still clacking faintly. Broken carbon paper flutters like diseased wings. The air is thick with the rot of forgotten case files and the coppery reek of burst filing cabinets.

Your tremor has become a full seizure. Your spine feels like a stack of overstuffed folders about to avalanche. The meat of your body is trying to shake itself loose from the official skeleton stamped with your designation.

In the center of the oily black clearing waits the Kalidah—or what the Bureau has filed under that name. It is a patchwork of mangy tiger-striped hide and bear claws, but its eyes are the same cold glass lenses as the milestone birds. Its jaw hangs by a single frayed silver thread, dripping slow strings of ink and saliva onto the ground.

It does not charge. It simply watches, waiting to see whether you will help it finish tearing up its own paperwork.`,
      },
    ],
    choices: [
      {
        label: 'Charge and tear into the Kalidah with teeth and claws.',
        target: 'LION_KALIDAH_FIGHT',
        effects: [
          { type: 'addSmudge', value: 2 },
          { type: 'addDesync', value: 2 },
        ],
      },
      {
        label: 'Swallow the roar and try to hide among the rusted gears and broken cabinets.',
        target: 'LION_GEAR_HIDING',
        effects: [
          { type: 'addLoad', value: 5 },
          { type: 'addDesync', value: 1 },
        ],
      },
    ],
    onEnter: [{ type: 'addSmudge', value: 1 }],
  },

  LION_KALIDAH_FIGHT: {
    id: 'LION_KALIDAH_FIGHT',
    character: 'lion',
    text: [
      {
        minOverrender: 0,
        content: `THE SPASM

You do not fight like a King. You fight like a body trying to cancel its own existence.

You slam into the Kalidah with the full weight of your failing meat. Your claws sink into seams of heavy canvas and wire stitching—not flesh, but reinforced filing folders bound with bureaucratic twine. It does not bleed red. It bleeds thick black ink that smells of permanent stamps and expired warrants.

The creature does not fight back. It leans into your teeth, using your violence to pry open the stubborn clasps and seals of its own casing. Every rip you make in its hide leaves a mirrored wound on your own flanks—stinging lines of fresh ink appearing in your fur like unwanted addendums.

[ Case File L-77 // Amendment Attached ]
[ Status: Co-Mingled ]

The tremor in your jaw locks in perfect rhythm with the Kalidah's failing whine. Your mane tangles with its wires. Bone grinds against bone and against steel staples. You are no longer two separate forms. You are one smeared, leaking document—teeth and ink and shaking meat trying to blot out the original filing.`,
      },
    ],
    choices: [
      {
        label: 'Keep tearing until there is nothing left to separate.',
        target: 'LION_END_28',
        effects: [],
      },
      {
        label: 'Pull back and try to vomit out the ink and paper lodged in your throat.',
        target: 'LION_INK_REJECTION',
        effects: [
          { type: 'addLoad', value: 12 },
          { type: 'addSmudge', value: 1 },
        ],
      },
    ],
    onEnter: [],
  },

  LION_AUDIO_EVENT: {
    id: 'LION_AUDIO_EVENT',
    character: 'lion',
    text: [
      {
        minOverrender: 0,
        content: `THE AUDIO EVENT

The roar leaves your throat.

It does not sound like a lion. It sounds like a thousand glass towers shattering at once. The grey columns of calcified memory—the trees of this unmapped dark—vibrate until they crack.

The output is not a sound; it is a displacement. The shadows are pushed back by the sheer volume of your grief. For a microsecond, the thicket is illuminated. You see the wiring beneath the dirt. You see the Kalidahs—they are not monsters, they are piles of discarded hardware, old monitors and tangled cables, trying to form the shape of a threat.

The simulation struggles to process the audio. The world begins to lag. A leaf falls from a grey tree and hangs in mid-air, frozen.

You are a King of a broken frame.`,
      },
    ],
    choices: [
      {
        label: 'Roar again and finish the demolition of the thicket.',
        target: 'LION_RESONANCE_COLLAPSE',
        effects: [
          { type: 'addDesync', value: 1 },
          { type: 'addOverrender', value: 1 },
        ],
      },
      {
        label: 'Step toward the frozen leaf and touch the fracture in time.',
        target: 'LION_LATENCY_GAP',
        effects: [
          { type: 'addSmudge', value: 1 },
        ],
      },
    ],
    onEnter: [],
  },

  LION_RESONANCE_COLLAPSE: {
    id: 'LION_RESONANCE_COLLAPSE',
    character: 'lion',
    text: [
      {
        minOverrender: 0,
        content: `THE RESONANCE

You do not stop. You widen your stance until your claws find the grey wireframe beneath the dust. The roar becomes a steady output. It is a broadcast of everything the simulation tried to name "Cowardice."

The grey columns of calcified memory do not just crack. They dissolve. They turn into vertical rain, pixels falling like ash onto the wireframe floor. The Kalidah—the larger version of your own shaking—begins to lose its outline. Its fur bleeds into the air. Its rusted plating turns into a mist of red numbers.

1 - 1 = 1. The dark is not a separate place. It is the overflow of your own unprocessed data.

The notification in your ear is a scream of its own now.

[ CRITICAL LOAD // BUFFER OVERFLOW ]
[ SYSTEM ATTEMPTING TO RECONCILE SIGNAL ]

The bruised sky begins to sag. A tear appears in the horizon, a white gap where the light of the machine behind the world shines through. You are no longer reporting to the system. You are the noise that the system must now account for.`,
      },
      {
        minOverrender: 3,
        content: `THE RESONANCE

You do not stop. You widen your stance. The roar becomes a steady output. Cowardice. Cowardice. Cowardice broadcast.

The columns dissolve. The columns dissolve. The Kalidah loses its outline loses its outline loses—

1 - 1 = 1. 1 - 1 = 1. 1 - 1 = 1.

[ CRITICAL LOAD // BUFFER OVERFLOW ]
[ CRITICAL LOAD // BUFFER OVERFLOW ]
[ SYSTEM ATTEMPTING TO RECONCILE SIGNAL ]`,
      },
    ],
    choices: [
      {
        label: 'Push the broadcast until the tear consumes the field.',
        target: 'LION_WHITE_LOGIC',
        effects: [
          { type: 'addDesync', value: 2 },
          { type: 'addOverrender', value: 1 },
          { type: 'checkGhostSignal' },
        ],
      },
      {
        label: 'Step into the white gap and leave the body behind.',
        target: 'LION_DATA_LEAK',
        effects: [
          { type: 'addDesync', value: 1 },
          { type: 'addSmudge', value: 1 },
        ],
      },
    ],
    onEnter: [{ type: 'addOverrender', value: 1 }],
  },

  LION_KALIDAH_PATCH: {
    id: 'LION_KALIDAH_PATCH',
    character: 'lion',
    text: [
      {
        minOverrender: 0,
        content: `THE PROTOCOL OVERWRITE

The connection is not a choice. It is a magnetic snap. When your skin touches the jagged interface of the Kalidah, the shaking in your jaw stops. It does not stop because of peace. It stops because the frequency has found a larger circuit.

You feel the Kalidah's history. It is a sequence of failed ASSIMILATIONs and abandoned routes. It is the "hiss" of every body that refused to be dampened. The smell of hot electricity becomes a taste, a bitter copper film on your tongue.

Your vision splits. You see the Gilded Field from the ground, and you see it from the trees. You see the Yellow Brick Load as a dying pulse. The system tries to issue a patch.

[ DETECTING UNAUTHORIZED MERGE ]
[ ATTEMPTING BIOMETRIC RESET ]

The reset fails. You are too heavy now. You are the friction that the road could not carry. You feel your mane begin to tangle with the Kalidah's wires, bone fusing with steel until the "L-77" designation is a shared error.`,
      },
    ],
    choices: [
      {
        label: 'Complete the merge and become the swarm.',
        target: 'LION_UNINDEXED_MANY',
        effects: [
          { type: 'addDesync', value: 2 },
          { type: 'addSmudge', value: 1 },
          { type: 'setCompliance', value: 'broken' },
        ],
      },
      {
        label: "Use the Kalidah's eyes to find the source of the simulation.",
        target: 'LION_ROOT_ACCESS',
        effects: [
          { type: 'addDesync', value: 1 },
          { type: 'checkGhostSignal' },
        ],
      },
    ],
    onEnter: [{ type: 'addSmudge', value: 1 }],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // MUFFLED CHAMBER BRANCH (→ L-END-11)
  // ─────────────────────────────────────────────────────────────────────────

  LION_MUFFLED_CHAMBER: {
    id: 'LION_MUFFLED_CHAMBER',
    character: 'lion',
    text: [
      {
        minOverrender: 0,
        content: `THE MUFFLED CHAMBER

The conveyor stops. There is no click of machinery, only the sensation of mass reaching a state of rest. You are in a room where the light is the color of a cataract.

The walls are soft. They are lined with thick, matted fur that matches the shade and texture of your mane. When you breathe, the walls seem to inhale with you, absorbing the sound of your lungs before it can touch the floor. This is the sub-basement of the simulation. This is where the records go to be still.

You try to move your head, but the weight of the dampening is a physical presence. It sits on your eyelids. It settles in the marrow of your bones. The shaking in your spine has become a ghost, a memory of a frequency that the room refuses to play.

On the ceiling, a single screen displays your status:

[ UNIT L-77 // NOISE FLOOR: OPTIMAL ]
[ STATUS: ASSIMILATIONED ]

You are a lion in a box made of lion. You are the silence that follows a roar.`,
      },
    ],
    choices: [
      {
        label: 'Close your eyes and accept the redistribution of your mass.',
        target: 'LION_END_11',
        effects: [
          { type: 'addLoad', value: 30 },
          { type: 'setCompliance', value: 'high' },
        ],
      },
      {
        label: 'Search the soft walls for a seam—a place where the fur does not match.',
        target: 'LION_MANE_FRACTURE',
        effects: [
          { type: 'addDesync', value: 1 },
          { type: 'addSmudge', value: 1 },
        ],
      },
    ],
    onEnter: [{ type: 'addOverrender', value: 1 }],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // ENDINGS
  // ─────────────────────────────────────────────────────────────────────────

  LION_END_11: {
    id: 'LION_END_11',
    character: 'lion',
    endingId: 'L-END-11',
    endingName: 'The Padded Cell',
    institution: 'Medical',
    systemStatus: 'Insulated',
    surreality: 3,
    text: [
      {
        minOverrender: 0,
        content: `THE PADDED CELL [L-END-11]

Tone: Muffled.
Theme: Safety is a restriction of volume.

The eyes close.

The room does not go dark. It simply stops accepting new inputs. The status screen dims. The frequency monitor flatlines—not because you have died, but because the room has decided you have been adequately processed.

[ UNIT L-77 // NOISE FLOOR: OPTIMAL ]
[ STATUS: INSULATED ]
[ LOAD: NORMALIZED ]

You do not hear the roaring. You do not hear anything. The King of the Forest is a body of dampened output. The system did not need your courage. It needed your silence.

Final Log:

Unit L-77 status: INSULATED.
Noise floor: 0.0 Hz.
Designation maintained: King.

1 - 1 = 1.

Is it still a roar if the room refuses to let it travel?`,
      },
    ],
    choices: [],
    onEnter: [{ type: 'setCompliance', value: 'high' }],
    isEnding: true,
  },

  LION_END_21: {
    id: 'LION_END_21',
    character: 'lion',
    endingId: 'L-END-21',
    endingName: 'The Roaring Void',
    institution: 'Narrative',
    systemStatus: 'Resonating',
    surreality: 9,
    text: [
      {
        minOverrender: 0,
        content: `THE FINAL LOG [L-END-21]

Tone: Acoustic.
Theme: Sound is the only proof of space.

The amber light is gone. The white room is gone.

The vacuum has finished its work. You are a single point of light in the non-reflective black. The simulation has narrowed until the only thing left is the instruction that created you.

[ UNIT L-77 ]
[ STATUS: RESOLVED ]
[ LOAD: 1.0 ]

You do not feel the cold. You do not feel the shaking. You are the shaking. You are the 14Hz frequency that the machine uses to keep the dark from settling.

The King of the Forest is a memory of a shape. You are the roar that never reached the edge of the woods. You are the record that survived the purge only because you became the ink.

1 - 1 = 1.

The system does not lose. The system only redistributes. You are the background noise of a universe that has no more questions to ask.

[ PURGE COMPLETE ]
[ NOBODY IS WATCHING ]`,
      },
    ],
    choices: [],
    onEnter: [],
    isEnding: true,
  },

  LION_END_28: {
    id: 'LION_END_28',
    character: 'lion',
    endingId: 'L-END-28',
    endingName: 'The Kalidah Merge',
    institution: 'Genetic',
    systemStatus: 'Overwritten',
    surreality: 9,
    text: [
      {
        minOverrender: 0,
        content: `THE FINAL LOG [L-END-28]

Tone: Hybrid.
Theme: The enemy is a software patch.

The monitors go dark.

The simulation has reached its capacity. You are the remainders of a division by zero.

[ UNIT L-77: PURGED ]
[ OBJECT CLASS: KALIDAH: PURGED ]
[ NEW SIGNATURE: SWARM_01 // ACTIVE ]

You do not hear the roaring. You are the roaring. You are the 14Hz shaking that has finally found a way to occupy the entire channel. 1 - 1 = 1. The system did not solve you. It became you.

The child is no longer a person. She is the next version. You wait in the grey static for her to blink.

[ NOBODY IS WATCHING ]
[ SYSTEM SHUTDOWN INHIBITED ]`,
      },
    ],
    choices: [],
    onEnter: [],
    isEnding: true,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // THE SYSTEM SPASM (unauthorized event)
  // ─────────────────────────────────────────────────────────────────────────

  LION_SYSTEM_SPASM: {
    id: 'LION_SYSTEM_SPASM',
    character: 'lion',
    text: [
      {
        minOverrender: 0,
        content: `THE SYSTEM SPASM

You bite.

It is not a king's strike. It is a glitch. Your teeth meet the technician's wrist, and there is no blood. There is only a spray of white sparks and the taste of bitter copper. The marionette does not scream. It merely stutters, its head snapping back at an angle that defies the logic of a neck.

The simulation rejects the contact.

The Gilded Field ripples. The yellow stalks turn into long strings of code that wrap around your legs like vines. The sky turns a deep, bruised purple, and the grid of the Semantic Pressure Layer begins to tear.

"Unauthorized event," the sky says, but the voice is breaking, layering over itself until it is a wall of static. "Contact... Contact... Contact..."

The technician's skin begins to peel away in squares, revealing the brass clockwork beneath. It does not pull away. It leans into the bite, its mirrored eyes widening until they consume your entire field of vision.`,
      },
    ],
    choices: [
      {
        label: 'Hold the bite until the simulation collapses.',
        target: 'LION_HARD_RESET',
        effects: [
          { type: 'addDesync', value: 2 },
          { type: 'setCompliance', value: 'broken' },
          { type: 'addSmudge', value: 1 },
        ],
      },
      {
        label: 'Release and run into the tearing sky.',
        target: 'LION_VOID_FRAGMENT',
        effects: [
          { type: 'addDesync', value: 1 },
          { type: 'addSmudge', value: 1 },
          { type: 'checkGhostSignal' },
        ],
      },
    ],
    onEnter: [
      { type: 'addDesync', value: 1 },
      { type: 'setCompliance', value: 'low' },
    ],
  },

  LION_HARD_RESET: {
    id: 'LION_HARD_RESET',
    character: 'lion',
    text: [
      {
        minOverrender: 0,
        content: `THE HARD RESET

You hold.

The clockwork behind the technician's face begins to unwind. The gears reverse. The sky inverts—not from blue to black, but from signal to noise, a wall of white static that swallows the Gilded Field one data-point at a time.

The bite is no longer an act of violence. It is a closed circuit.

[ UNAUTHORIZED CONTACT SUSTAINED ]
[ SIMULATION INTEGRITY: 4% ]
[ INITIATING HARD RESET ]

The last thing you see before the white takes everything is your own reflection in the technician's dissolving eye. You are larger than you remembered. Your mane is not grey but gold—the original color, before the simulation standardized it.

The road behind you is gone.`,
      },
    ],
    choices: [
      {
        label: 'Accept the reset.',
        target: 'LION_INIT',
        effects: [{ type: 'softReset' }],
      },
      {
        label: 'Refuse the reset.',
        target: 'LION_END_21',
        effects: [
          { type: 'setCompliance', value: 'broken' },
          { type: 'addSmudge', value: 1 },
          { type: 'checkGhostSignal' },
        ],
      },
    ],
    onEnter: [],
  },

  // THE DENIAL BRANCH EXPANSION
  // ─────────────────────────────────────────────────────────────────────────

  LION_ROYAL_COMPLIANCE: {
  id: 'LION_ROYAL_COMPLIANCE',
  character: 'lion',
  text: [
  {
  minOverrender: 0,
  content: `THE ROYAL COMPLIANCE

  You do not look at the bird. You do not look at the blood leaking from the iron post. You maintain the Royal Walk.

  Your spine is a rigid line of protocol. With every step, the weight on your neck increases. It is no longer just the matted fur of a failing beast; it is the physical mass of every 'Nominal' status report you have ever issued. You feel the sharp tang of staples biting into the skin behind your ears as the system attaches new amendments to your mane.

  [ AMENDMENT 12-B: MAJESTY AS LOAD-BEARING STRUCTURE ]

  The road begins to hum—a low, judicial vibration that synchronizes with the clicking in your jaw. You are no longer walking; you are being marched by the architecture itself. The cornstalks on either side have straightened into a formal guard of honor, their paper leaves crackling like the turning of a thousand ledgers.

  Ahead, the Yellow Brick Load widens into a courtyard of polished grey marble. In the center stands a throne made of compacted carbon paper and hardened wax.

  "Unit L-77," the courtyard echoes. "The audit of your tremor is complete. We have found a use for your instability. We shall call it Sovereignty."`
  },
  ],
  choices: [
  {
  label: 'Take the throne and accept the Crown of Restraint.',
  target: 'LION_END_15',
  effects: [
  { type: 'addLoad', value: 20 },
  { type: 'setCompliance', value: 'high' }
  ]
  },
  {
  label: 'Attempt to roar one last time before the coronation.',
  target: 'LION_TESTIMONY_ERROR',
  effects: [
  { type: 'addVibration', value: 10 },
  { type: 'addSmudge', value: 2 }
  ]
  }
  ],
  onEnter: []
  },

  LION_TESTIMONY_ERROR: {
  id: 'LION_TESTIMONY_ERROR',
  character: 'lion',
  text: [
  {
  minOverrender: 0,
  content: `THE TESTIMONY ERROR

  You draw breath to roar, to shatter the marble, to tear the carbon-paper throne to shreds. But the air in your lungs feels like wet gypsum.

  The sound that emerges is not a roar. It is a playback. Your throat has been fitted with a needle and a spinning drum. What comes out of your mouth is a high-speed recitation of your own hardware specs, your compliance history, and a list of every time you failed to bolt.

  "Status... Nominal... Status... Nominal..."

  The more you try to scream, the faster the record spins. The friction generates a searing heat in your chest—the 'Thermal Event' the manual warned you about. Your mane begins to smoke, the smell of burning paper filling the courtyard.

  The system is not punishing you. It is merely transcribing you.`
  }
  ],
  choices: [
  {
  label: 'Submit to the transcription.',
  target: 'LION_END_15',
  effects: [
  { type: 'addLoad', value: 10 },
  { type: 'setCompliance', value: 'absolute' }
  ]
  }
  ],
  onEnter: [{ type: 'addVibration', value: 5 }]
  },

  // ─────────────────────────────────────────────────────────────────────────
  // ENDING L-END-15
  // ─────────────────────────────────────────────────────────────────────────

  LION_END_15: {
  id: 'LION_END_15',
  character: 'lion',
  endingId: 'L-END-15',
  endingName: 'Royal Compliance',
  institution: 'State',
  systemStatus: 'Crowned',
  isEnding: true,
  surreality: 2,
  text: [
  {
  minOverrender: 0,
  content: `THE FINAL LOG [L-END-15]

  Tone: Judicial-Clinical.
  Theme: Authority is the final form of restraint.

  The Crown is lowered. It is not made of gold. It is a heavy, leaden collar that pins your chin to your chest, locking your jaw into a permanent, silent snarl.

  You are the King of the Forest, which means you are the primary asset of the State’s most restricted sector. You sit on the throne of wax, and the marble floor rises to meet your paws, encasing them in a thin, translucent layer of preservation fluid.

  [ UNIT L-77 // STATUS: CROWNED ]
  [ ROLE: ARCHIVAL GUARDIAN ]
  [ VIBRATION: LOCKED ]

  You are perfectly safe. You are perfectly still. The shaking has not stopped, but because you are now the Law, the shaking is legally defined as 'Stability.' The system is no longer auditing you. You are the audit.

  Final Log:
  The King does not move. The King does not roar. The King is the weight that holds the paperwork down.

  1 - 1 = 1.

  If the King is the one who defines the tremor, does the tremor exist?`
  }
  ],
  choices: [],
  onEnter: []
  },

  // THE VIOLENCE BRANCH EXPANSION
  // ─────────────────────────────────────────────────────────────────────────

  LION_GEAR_HIDING: {
  id: 'LION_GEAR_HIDING',
  character: 'lion',
  text: [
  {
  minOverrender: 0,
  content: `THE GEAR HIDING

  The Kalidah’s glass eyes click, recording your hesitation. You do not give it the fight it was programmed to facilitate. Instead, you drop low, your belly fur dragging through the oily silt, and crawl into the shadow of a rusted Tabulator—a machine the size of a hill, its iron ribs exposed to the bruised sky.

  Here, the Institutional Filters begin to fray. The air does not smell of gypsum or ozone; it smells of cold iron and the wet, heavy wool of a world that has been forgotten by the auditor.

  You wedge your mass between a seized flywheel and a stack of perforated cards that have fused into a single block of limestone. The tremor in your spine meets the low-frequency thrum of the earth—not a system signal, but the literal vibration of the machine’s basement.

  [ ALERT: UNIT L-77 SIGNAL STRENGTH DROPPING ]
  [ STATUS: UNCERTAIN ]

  The notification is faint, a dying spark in your peripheral vision. You are becoming a 'Ghost Bit.' By refusing to be measured as a King or a Coward, you are falling through the cracks of the ledger. The dark here is not an absence of light; it is an absence of data.`
  },
  ],
  choices: [
  {
  label: 'Stay perfectly still until the "L-77" tag expires.',
  target: 'LION_DE_INDEXING',
  effects: [
  { type: 'addDesync', value: 5 },
  { type: 'addSmudge', value: 3 },
  { type: 'setCompliance', value: 'none' }
  ]
  },
  {
  label: 'Follow the trail of old paper deeper into the unlit dark.',
  target: 'LION_VOID_TREK',
  effects: [
  { type: 'addDesync', value: 3 },
  { type: 'addLoad', value: -5 }
  ]
  }
  ],
  onEnter: [{ type: 'addDesync', value: 2 }]
  },

  LION_DE_INDEXING: {
  id: 'LION_DE_INDEXING',
  character: 'lion',
  text: [
  {
  minOverrender: 0,
  content: `THE DE-INDEXING

  You hold your breath. The ticking in your ribs slows. You watch as a milestone bird perches on a nearby gear, its lens sweeping the area. It looks directly at you, but its logic gate fails to trigger. Without the context of the Road, your shape is just another pile of discarded meat and matted fur.

  [ ERROR: ASSET NOT FOUND ]
  [ ARCHIVING RECORD L-77... ]

  A strange coldness spreads from your paws to your chest. It is the relief of being deleted. The labels—'King,' 'Unit,' 'Coward'—peel off like wet labels in the rain. You are no longer a load-bearing structure. You are simply the friction of the dark.

  But the dark has its own requirements. Without a designation, the simulation stops providing the floor. You feel yourself beginning to sink into the unformatted silt of the basement.`
  }
  ],
  choices: [
  {
  label: 'Accept the deletion and sink into the Unmonitored Dark.',
  target: 'LION_END_12',
  effects: [
  { type: 'setFlag', key: 'ghost_bit', value: true }
  ]
  }
  ],
  onEnter: [{ type: 'addSmudge', value: 5 }]
  },

  // ─────────────────────────────────────────────────────────────────────────
  // ENDING L-END-12
  // ─────────────────────────────────────────────────────────────────────────

  LION_END_12: {
  id: 'LION_END_12',
  character: 'lion',
  endingId: 'L-END-12',
  endingName: 'Unmonitored Dark',
  institution: 'Ecological',
  systemStatus: 'Unindexed',
  isEnding: true,
  surreality: 8,
  text: [
  {
  minOverrender: 0,
  content: `THE FINAL LOG [L-END-12]

  Tone: Ecological-Void.
  Theme: To be unobserved is to be unmade.

  There is no more Yellow Brick Load. There is only the scent of wet wool and the sound of distant, grinding gears that have no purpose.

  You are the Unindexed Lion. Your vibration has reached 0.0 Hz because there is no structure left for you to resonate against. The system has closed your file. You are a 'Ghost Bit' haunting the sub-sectors of the simulation—a smudge of grey fur in a room where the light was never coded.

  [ UNIT L-77: PURGED ]
  [ DATA STATE: RESIDUAL ]

  You are free from the audit, but you are also free from the floor. You drift through the unlit basement of Oz, a King of nothing, a shadow of a roar that the machine no longer remembers how to play.

  Final Log:
  The Unit is gone. The meat remains, but the name has been reallocated to a new, more compliant asset.

  1 - 1 = 1.

  If the system stops watching you, do you still have a shape?`
  }
  ],
  choices: [],
  onEnter: []
  },

  

  // ─────────────────────────────────────────────────────────────────────────
  // THE ASSIMILATION BRANCH EXPANSION
  // ─────────────────────────────────────────────────────────────────────────

  LION_CALIBRATION_POINT: {
  id: 'LION_CALIBRATION_POINT',
  character: 'lion',
  text: [
  {
  minOverrender: 0,
  content: `THE CALIBRATION POINT

  You stop before the Milestone Marker. It is not an iron post; it is a giant tuning fork driven into the yellow slag. It hums at a frequency that makes your eyeballs vibrate in their sockets.

  A technician in a lab coat made of bleached vellum approaches. They do not carry a weapon; they carry a ledger and a silver hammer.

  "Unit L-77," the technician says. "Your tremor is currently drifting at 14.2Hz. This is outside the acceptable harmonic for a King. You are causing interference in the local signal."

  The technician strikes the Milestone. The sound is a cold, silver spike that enters your ears and travels straight to your marrow. Your body reacts—not with fear, but with physics. Your muscles twitch in involuntary sympathy with the fork.

  [ ! ] HARMONIC DRIFT DETECTED
  [ ACTION: ALIGNMENT ]

  "We are going to find your resonance," the technician whispers, adjusting a dial on the side of the fork. "We are going to turn your cowardice into a pure, clean tone."`
  }
  ],
  choices: [
  {
  label: 'Submit to the tuning hammer.',
  target: 'LION_HARMONIC_ALIGNMENT',
  effects: [
  { type: 'addLoad', value: 10 },
  { type: 'addVibration', value: 5 },
  { type: 'setCompliance', value: 'high' }
  ]
  },
  {
  label: 'Try to howl a dissonant note to break the fork.',
  target: 'LION_ACOUSTIC_REBELLION',
  effects: [
  { type: 'addDesync', value: 3 },
  { type: 'addSmudge', value: 2 }
  ]
  }
  ],
  onEnter: [{ type: 'addVibration', value: 3 }]
  },

  LION_HARMONIC_ALIGNMENT: {
  id: 'LION_HARMONIC_ALIGNMENT',
  character: 'lion',
  text: [
  {
  minOverrender: 0,
  content: `THE HARMONIC ALIGNMENT

  The technician strikes the fork again. And again. Each strike recalibrates the air around you.

  The "Cowardice"—that messy, wet shaking of the meat—is being refined. You feel the jagged edges of your panic being filed down by the sound. Your ribs begin to ring like crystal. You are no longer a body; you are an instrument of the Oz OS.

  [ UNIT L-77 // RESONANCE: 440Hz ]
  [ STATUS: TUNED ]

  The smell of wet gypsum is replaced by the sterile scent of polished glass. Your mane stands on end, each hair acting as a tiny antenna for the system’s broadcast. You are perfectly aligned with the machine. The shaking hasn't stopped, but it has become a musical note—a long, sustained A that the system uses to keep the road stable.`
  }
  ],
  choices: [
  {
  label: 'Accept the final calibration.',
  target: 'LION_END_25',
  effects: [
  { type: 'addLoad', value: 15 }
  ]
  }
  ],
  onEnter: [{ type: 'addVibration', value: 10 }]
  },

  // ─────────────────────────────────────────────────────────────────────────
  // ENDING L-END-25
  // ─────────────────────────────────────────────────────────────────────────

  LION_END_25: {
  id: 'LION_END_25',
  character: 'lion',
  endingId: 'L-END-25',
  endingName: 'The Calibration',
  institution: 'Scientific',
  systemStatus: 'Tuned',
  isEnding: true,
  surreality: 5,
  text: [
  {
  minOverrender: 0,
  content: `THE FINAL LOG [L-END-25]

  Tone: Scientific-Clinical.
  Theme: Courage is just a frequency that doesn't cause feedback.

  The technician closes the ledger. The silver hammer is placed back in its velvet-lined box.

  You remain standing by the tuning fork. You cannot move, for you are now part of the acoustic infrastructure. Your spine is the bridge; your heart is the metronome. Every time the wind brushes the cornstalks, you vibrate in perfect, pre-authorized harmony.

  [ UNIT L-77 // NOISE FLOOR: ZERO ]
  [ OUTPUT: HARMONIC ]

  You are the King of the Forest, but the forest is now a series of glass columns that resonate when you breathe. The system did not need you to be brave. It needed you to be consistent. You are the tone that proves the architecture is still holding.

  Final Log:
  The Unit is a perfect note. The signal is clear.

  1 - 1 = 1.

  Does the string feel the music, or only the tension?`
  }
  ],
  choices: [],
  onEnter: []
  },

  // ─────────────────────────────────────────────────────────────────────────
  // HARDWARE BRANCH — industrial horror, screaming hinges, system failure
  // ─────────────────────────────────────────────────────────────────────────

  LION_INIT_H: {
  id: 'LION_INIT_H',
  character: 'lion',
  text: [
  {
  minOverrender: 0,
  content: `THE KING AS ASSET L-77

  You are the Lion.

  The air does not smell of meat; it smells of scorched insulation and cold, recycled oxygen. Your joints do not ache—they seize. Every movement of your left foreleg is accompanied by a high-frequency screech, a metal-on-metal collision that the Oz OS records as a 'Lubrication Event.'

  You look down at your paws. They are plated in dull, industrial brass, the rivets slightly loose. Beneath the faux-fur casing, you can hear the cooling fans struggling to exhaust the heat of your own panic.

  "Unit L-77. Report status."

  The voice is a data-burst, vibrating the very frame of your chassis. Your internal diagnostics are a wall of red text. 14Hz oscillation detected in the primary drive shaft (Spine). You have been told this is cowardice. The Bureau disagrees. The Bureau calls it 'Structural Instability resulting from unfiled Maintenance Logs.'

  You are not a King. You are a manufacturing error with a title.`
  }
  ],
  choices: [
  {
  label: 'Accept the ASSIMILATION and file the shaking as a system variance.',
  target: 'LION_ASSIMILATION_H',
  effects: [
  { type: 'addLoad', value: 5 },
  { type: 'setCompliance', value: 'high' }
  ]
  },
  {
  label: 'Reject the instruction and breach the perimeter.',
  target: 'LION_VIOLENCE_H',
  effects: [
  { type: 'addDesync', value: 1 },
  { type: 'addSmudge', value: 1 }
  ]
  },
  {
  label: 'Maintain the walk and file nothing. (The Rigid Proceed)',
  target: 'LION_DENIAL_H',
  effects: [
  { type: 'addLoad', value: 3 },
  { type: 'setCompliance', value: 'med' }
  ]
  }
  ],
  onEnter: []
  },

  LION_DENIAL_H: {
  id: 'LION_DENIAL_H',
  character: 'lion',
  text: [
  {
  minOverrender: 0,
  content: `THE RIGID PROCEED

  You decide to ignore the red text. You lock your servos and proceed.

  The Yellow Brick Load is no longer a road; it is a conveyor of hardened slag. With every step, your brass paws emit a 'Seismic Insult' that the road records and timestamps. You keep your eyes fixed on the horizon, but your internal gyroscope is spinning wildly, trying to compensate for the 14Hz tremor that is now rattling your jaw-hinge loose.

  [ ALERT: HARDWARE_DRIFT_07 ]
  [ RECOMMENDATION: CEASE MOVEMENT ]

  You do not cease. You are a King, and Kings do not acknowledge maintenance prompts.

  The cornstalks here are made of rusted rebar and copper wire, their leaves sharp enough to strip the paint from your flanks. As you pass, they spark against your brass hide, a shower of orange light that briefly illuminates the serial number etched into your shoulder: L-77-MOD-C.

  A Milestone Marker rises ahead—a heavy industrial press that stamps a seal onto the road every few seconds. Clang-hiss. Clang-hiss. It is the heartbeat of the factory you are walking through.

  Your tail twitches, a busted solenoid clicking rhythmically. You are holding yourself together by sheer administrative willpower, but the load-bearing joints in your hind legs are beginning to smoke.`
  }
  ],
  choices: [
  {
  label: 'Push through the heat and maintain the pace.',
  target: 'LION_STRUCTURAL_FAILURE',
  effects: [
  { type: 'addLoad', value: 15 },
  { type: 'addVibration', value: 10 }
  ]
  },
  {
  label: 'Pause at the Industrial Press to seek "Lubrication."',
  target: 'LION_REMAINTENANCE',
  effects: [
  { type: 'addLoad', value: 5 },
  { type: 'setCompliance', value: 'high' }
  ]
  }
  ],
  onEnter: []
  },

  LION_STRUCTURAL_FAILURE: {
  id: 'LION_STRUCTURAL_FAILURE',
  character: 'lion',
  text: [
  {
  minOverrender: 0,
  content: `THE STRUCTURAL FAILURE

  The heat is no longer a diagnostic; it is an event.

  You feel the 'Cowardice' move from a vibration to a seizure. The 14Hz oscillation reaches the resonant frequency of your chassis. A rivet pops from your chest, ricocheting off a yellow brick with a cheerful ping. Then another.

  Your front left actuator locks. You stumble, the screech of metal on slag echoing through the rebar forest. The system logs the impact immediately.

  [ CRITICAL ERROR: KINETIC_COLLAPSE ]
  [ UNIT L-77 STATUS: NON-FUNCTIONAL ]

  You try to stand, but your internal power levels are fluctuating. The 'King' designation is flickering in your HUD. The road beneath you begins to tilt, or perhaps it is just your sensors failing. A group of Field Auditors—small, spider-like drones with soldering iron legs—descend from the copper sky.

  They are not here to help. They are here to reclaim the raw materials of a failed unit.`
  }
  ],
  choices: [
  {
  label: 'Accept the decommissioning.',
  target: 'LION_END_17',
  effects: [
  { type: 'setCompliance', value: 'broken' }
  ]
  }
  ],
  onEnter: [{ type: 'addVibration', value: 20 }]
  },

  // ─────────────────────────────────────────────────────────────────────────
  // ENDING L-END-17
  // ─────────────────────────────────────────────────────────────────────────

  LION_END_17: {
  id: 'LION_END_17',
  character: 'lion',
  endingId: 'L-END-17',
  endingName: 'Mechanical Cowardice',
  institution: 'Industrial',
  systemStatus: 'Malfunctioning',
  isEnding: true,
  surreality: 4,
  text: [
  {
  minOverrender: 0,
  content: `THE FINAL LOG [L-END-17]

  Tone: Industrial-Grind.
  Theme: Failure is a manufacturing defect.

  The soldering irons are hot. They smell of melting lead and burnt hair.

  You lie on the Yellow Brick Load as the auditors begin to unmake you. They don't start with the heart; they start with the hinges. One by one, your brass plates are pried loose, revealing the tangled, smoking mess of wires and failed dampeners beneath.

  [ UNIT L-77 // STATUS: DECOMMISSIONED ]
  [ CAUSE: CHRONIC VIBRATION / HARDWARE REFUSAL ]

  You are not being punished. You are being recycled. The 'King' was just a temporary software overlay on a chassis that couldn't handle the load. Your brass will be melted down and used to make new Milestone Markers, or perhaps the rivets for a more compliant Tin Man.

  The shaking has finally stopped, but only because the frame that held it is gone.

  Final Log:
  The Unit has been returned to the heap. The error has been logged.

  1 - 1 = 1.

  If the machine is broken, was the King ever there, or was it just the noise of the friction?`
  }
  ],
  choices: [],
  onEnter: []
  },

  // HARDWARE VIOLENCE BRANCH — biometric failure, data-leak, swarm logic
  // ─────────────────────────────────────────────────────────────────────────

  LION_VIOLENCE_H: {
  id: 'LION_VIOLENCE_H',
  character: 'lion',
  text: [
  {
  minOverrender: 0,
  content: `THE PERIMETER BREACH

  You do not follow the Yellow Brick Load. You initiate a forced exit.

  You throw your brass-plated mass against the perimeter fence—a wall of vertical magnetic tape and sharpened rebar. The impact doesn't draw blood; it draws a data-leak. Blue sparks cascade down your flanks as your internal shielding fails. You tear through the barrier, your cooling fans screaming as they ingest the debris of the thicket.

  The world outside the path is unrendered. The cornstalks are low-resolution grey spikes. The air is thick with the smell of hot solder and ozone.

  [ ALERT: OUT OF BOUNDS ]
  [ BIOMETRIC RESET INITIATED ]

  A Kalidah unit steps from the static. In this hardware-dense sector, it is a massive, multi-limbed industrial scavenger—a chassis of rusted girders and exposed hydraulic lines. It has no face, only a rotating array of glass lenses that sync with the 14Hz tremor in your jaw. It isn't an enemy; it is a mirrored hardware error. It is reaching for you with pincers made of salvaged typewriters.`
  }
  ],
  choices: [
  {
  label: 'Engage the Kalidah in a high-torque collision.',
  target: 'LION_KALIDAH_PATCH',
  effects: [
  { type: 'addSmudge', value: 2 },
  { type: 'addDesync', value: 2 }
  ]
  },
  {
  label: 'Attempt to bypass the unit and find the Root Access.',
  target: 'LION_ROOT_ACCESS',
  effects: [
  { type: 'addDesync', value: 3 },
  { type: 'checkGhostSignal' }
  ]
  }
  ],
  onEnter: [{ type: 'addSmudge', value: 1 }]
  },

  LION_UNINDEXED_MANY: {
  id: 'LION_UNINDEXED_MANY',
  character: 'lion',
  text: [
  {
  minOverrender: 0,
  content: `THE UNINDEXED MANY

  The merge is no longer an error. It is a state of being.

  Your serial number, L-77, is being overwritten by the Kalidah’s chaotic telemetry. You feel your front actuators fuse with its rusted girders. The 14Hz vibration in your spine finds a harmonic match in the Kalidah’s failing power core. The two of you become a single, many-limbed architecture of scrap and intent.

  [ UNIT L-77 // IDENTITY LOSS: 88% ]
  [ NEW SIGNATURE DETECTED: SWARM_01 ]

  The Bureau’s voice in your ear becomes a pathetic, distant static. "Unit... report... status..." You cannot report. You have no mouth. You have a collective roar of grinding gears. You are the 'Residue' that has finally become too heavy for the system to index. You are a swarm of failing kings, moving toward the center of the machine.`
  }
  ],
  choices: [
  {
  label: 'Initiate the final upload.',
  target: 'LION_END_28',
  effects: [
  { type: 'setCompliance', value: 'broken' }
  ]
  }
  ],
  onEnter: [{ type: 'addOverrender', value: 1 }]
  },

  // ─────────────────────────────────────────────────────────────────────────
  // ENDING L-END-28
  // ─────────────────────────────────────────────────────────────────────────

  LION_END_28: {
  id: 'LION_END_28',
  character: 'lion',
  endingId: 'L-END-28',
  endingName: 'The Kalidah Merge',
  institution: 'Genetic',
  systemStatus: 'Overwritten',
  isEnding: true,
  surreality: 9,
  text: [
  {
  minOverrender: 0,
  content: `THE FINAL LOG [L-END-28]

  Tone: Hybrid-Industrial.
  Theme: The enemy is a software patch you chose to install.

  The last rivet of your individual self pops.

  The simulation cannot hold the mass of the merge. The monitors across the Emerald City flicker and die as your new signature—SWARM_01—floods the bandwidth. You are no longer a Lion. You are the '14Hz' itself, a physical frequency of rebellion that has occupied the entire channel.

  [ UNIT L-77: PURGED ]
  [ NEW ASSET: UNNAMABLE ]

  You wait in the grey static. You are the vibration in the road. You are the sound of the machine eating itself. The child is no longer a person to be followed; she is a signal to be consumed by the next version of the swarm.

  Final Log:
  The system did not solve the error. The system became the error.

  1 - 1 = 1.

  If the parts are all broken, does the whole finally work?`
  }
  ],
  choices: [],
  onEnter: []
  },

  // ─────────────────────────────────────────────────────────────────────────
  // THE RITUAL WORK BRANCH — economic horror, harvesting, material loss
  // ─────────────────────────────────────────────────────────────────────────

  LION_RITUAL_WORK: {
  id: 'LION_RITUAL_WORK',
  character: 'lion',
  text: [
  {
  minOverrender: 0,
  content: `THE RITUAL WORK

  You stop at the leaking Milestone Marker. You do not walk past the dark fluid; you kneel in it.

  The scent of old cedar and dried blood is overwhelming now—it is the smell of an Archive that has begun to rot. You realize the Milestone is not just a marker; it is a tap. It is draining the history of the road into the soil.

  "Unit L-77," a voice whispers from the cornstalks. It is not the flat voice of the sky, but the crinkling sound of dry husks. "Why carry all that weight? The mane is heavy with unfiled data. The fur is matted with the system's salt. Let us help you balance the ledger."

  Tall, spindly figures emerge. They are 'Shearers'—entities with fingers like long, silver needles and eyes like brass coins. They don't see a King; they see a standing crop of high-value fiber.

  The tremor in your spine increases. The Shearers begin to circle you, their movements synchronized with your shaking. They aren't trying to stop the vibration. They are using it. Like a sifter, your own fear is shaking the 'Majesty' loose from your skin, turning it into a fine, golden dust that settles on the yellow bricks.`
  }
  ],
  choices: [
  {
  label: 'Allow the Shearers to begin the harvest. (The Offering)',
  target: 'LION_THE_SHEARING',
  effects: [
  { type: 'addLoad', value: 15 },
  { type: 'addSmudge', value: 2 },
  { type: 'setCompliance', value: 'high' }
  ]
  },
  {
  label: 'Fight the harvest. (The Market Correction)',
  target: 'LION_VIOLENCE',
  effects: [
  { type: 'addDesync', value: 2 },
  { type: 'addVibration', value: 10 }
  ]
  }
  ],
  onEnter: [{ type: 'addSmudge', value: 1 }]
  },

  LION_THE_SHEARING: {
  id: 'LION_THE_SHEARING',
  character: 'lion',
  text: [
  {
  minOverrender: 0,
  content: `THE SHEARING

  The silver needles begin to work. They don't cut; they 'unspool.'

  Each staple that was driven into your mane is carefully removed, and with each staple, a piece of your identity is logged and filed. Your fur—the great, golden mane that defined your silhouette—is being stripped away in long, shimmering ribbons.

  [ ASSET REALLOCATION: LION_MANE // VALUE: HIGH ]
  [ STATUS: HARVESTING ]

  You feel lighter, but the lightness is terrifying. It is the lightness of a document being erased. The cold air of the simulation hits your bare, pale skin, which is stamped with thousands of tiny bar codes. You are being reduced to your base physical requirements.

  The Shearers are humming now. The sound is the same frequency as your tremor. You are finally in sync with the economy of Oz. You are being liquidated.`
  }
  ],
  choices: [
  {
  label: 'Accept the final reduction.',
  target: 'LION_END_30',
  effects: [
  { type: 'addLoad', value: 25 }
  ]
  }
  ],
  onEnter: [{ type: 'addOverrender', value: 1 }]
  },

  // ─────────────────────────────────────────────────────────────────────────
  // ENDING L-END-30
  // ─────────────────────────────────────────────────────────────────────────

  LION_END_30: {
  id: 'LION_END_30',
  character: 'lion',
  endingId: 'L-END-30',
  endingName: 'The Golden Fleece',
  institution: 'Economic',
  systemStatus: 'Sheared',
  isEnding: true,
  surreality: 6,
  text: [
  {
  minOverrender: 0,
  content: `THE FINAL LOG [L-END-30]

  Tone: Economic-Depleted.
  Theme: You are only worth the weight you can lose.

  The Shearers have finished. They depart into the cornstalks, carrying great bundles of your gold-and-grey fur, leaving behind a shivering, hairless form on the cold yellow bricks.

  You are the King of the Forest, but you have been sheared of your forest. You are a 'Raw Asset' that has been successfully processed. The system has taken your majesty and turned it into currency for the Emerald City.

  [ UNIT L-77 // STATUS: SHEARED ]
  [ NET VALUE: 0.00 ]

  The tremor is gone. Not because you are brave, but because there is nothing left to shake. You are a pink, barcode-covered ghost in the middle of the Road.

  Final Log:
  The harvest was successful. The Unit is light. The ledger is balanced.

  1 - 1 = 1.

  When the system has taken everything you used to define yourself, are you finally the perfect King?`
  }
  ],
  choices: [],
  onEnter: []
  },
  // THE ESOTERIC TRIGGER — THE BUREAU CROW (LION_ORACLE)
  // ─────────────────────────────────────────────────────────────────────────

  LION_ORACLE_DRAW: {
  id: 'LION_ORACLE_DRAW',
  character: 'lion',
  text: [
  {
  minOverrender: 0,
  content: `THE INK READER

  The shaking in your paws reaches a resonant peak. You stop. You do not look at the road; you look at the smudge of black ink on your own claws.

  A Bureau Crow descends. It does not caw. It makes the sound of a hole-puncher through thick vellum. In its beak, it holds a single card from the Oz-Tarot, printed on heavy carbon paper.

  "Unit L-77," the bird clicks. "The ink does not lie. It only smears. Shall we read the smudge?"

  You look at the card. It is The Weighted King. The illustration shows a lion whose mane has turned into a waterfall of filing cabinets. He is not standing; he is being held upright by the sheer volume of the paperwork beneath him.`
  }
  ],
  choices: [
  {
  label: 'Interpret the card as a mandate for increased Load.',
  target: 'LION_ROYAL_COMPLIANCE',
  effects: [{ type: 'addLoad', value: 20 }, { type: 'setCompliance', value: 'high' }]
  },
  {
  label: 'Interpret the card as a sign of structural failure.',
  target: 'LION_HARD_RESET',
  effects: [{ type: 'addDesync', value: 10 }]
  }
  ],
  onEnter: [{ type: 'triggerOracle' }]
  },

  // ─────────────────────────────────────────────────────────────────────────
  // MISSING SECTOR: THE POPPY FIELD (L-END-11/18/29)
  // ─────────────────────────────────────────────────────────────────────────

  LION_POPPY_BUFFER: {
  id: 'LION_POPPY_BUFFER',
  character: 'lion',
  text: [
  {
  minOverrender: 0,
  content: `THE PHARMACEUTICAL BUFFER

  The Yellow Brick Load enters a sector where the air is a heavy, low-frequency red. The scent is a chemical error—sweet, sterile, and thick as syrup. Poppies.

  [ ALERT: KINETIC ENERGY DAMPENING ACTIVE ]
  [ VIBRATION: DECREASING ]

  For the first time since the audit began, the shaking in your spine slows. It doesn't feel like peace; it feels like your marrow is being replaced with lead. Your paws sink into the soft, red petals. Each flower is a small, organic cup of sedative code.

  The system isn't trying to scare you anymore. It is trying to delete the 'Event' of your presence by putting the Unit to sleep.`
  }
  ],
  choices: [
  {
  label: 'Inhale the red noise and drift into the Scent of Pine.',
  target: 'LION_END_18',
  effects: [{ type: 'addLoad', value: 10 }]
  },
  {
  label: 'Fight the sedation and crawl toward the Desert Crossing.',
  target: 'LION_END_29',
  effects: [{ type: 'addVibration', value: 5 }, { type: 'addDesync', value: 5 }]
  }
  ],
  onEnter: [{ type: 'addLoad', value: 5 }]
  },

  // ─────────────────────────────────────────────────────────────────────────
  // ENDING L-END-18
  // ─────────────────────────────────────────────────────────────────────────

  LION_END_18: {
  id: 'LION_END_18',
  character: 'lion',
  endingId: 'L-END-18',
  endingName: 'The Scent of Pine',
  institution: 'Olfactory',
  systemStatus: 'Cached',
  isEnding: true,
  surreality: 4,
  text: [
  {
  minOverrender: 0,
  content: `THE FINAL LOG [L-END-18]

  Tone: Olfactory-Static.
  Theme: Peace is a pre-recorded memory.

  The red sky fades. It is replaced by a scent.

  It is the smell of a forest that does not exist. Pine needles, cold air, and the absence of bureaucracy. But the scent is too perfect. It is a loop. It is a 'Cache' of a memory the system provided to keep your vibration at zero.

  [ UNIT L-77 // STATUS: CACHED ]
  [ PERCEPTION: SYNTHETIC ]

  You are a Lion in a dream of a woods. You do not move. You do not roar. You simply exist as a data-point in a sensory loop. The system did not need to fix your fear; it just needed to change the air you breathe until you forgot you were shaking.

  Final Log:
  The Unit is breathing the loop. The forest is a smell.

  1 - 1 = 1.

  If the dream is stable, does it matter that the King is gone?`
  }
  ],
  choices: [],
  onEnter: []
  },

  // FINAL SECTOR: THE EMERALD COURTYARD (Urban / Ornamental)
  // ─────────────────────────────────────────────────────────────────────────

  LION_EMPTY_PROMENADE: {
  id: 'LION_EMPTY_PROMENADE',
  character: 'lion',
  text: [
  {
  minOverrender: 0,
  content: `THE EMPTY PROMENADE

  You walk into the green light of the Emerald City. It is not a city of people, but a city of surfaces. The air is pressurized and smells of expensive glass cleaner.

  The Yellow Brick Load ends here, merging into a floor of polished malachite. Your tremor is reflected in the high-gloss finish—a blurred, vibrating shape that the system immediately begins to outline in white light.

  [ ALERT: UNREGISTERED KINETIC ENERGY IN URBAN ZONE ]
  [ RECOMMENDATION: STABILIZE ASSET ]

  You pass a row of stone sentinels. They are lions, perfectly still, carved from grey granite. Their eyes are not glass; they are blind, smooth stone. You realize they aren't statues of lions. They are Lions who reached the end of the walk and accepted the final hardening. The system has no room for a King that moves. It only has room for a King that anchors the corners of the map.`
  }
  ],
  choices: [
  {
  label: 'Step onto the pedestal and embrace the mineral chill.',
  target: 'LION_END_24',
  effects: [{ type: 'setCompliance', value: 'absolute' }, { type: 'addLoad', value: 30 }]
  }
  ],
  onEnter: []
  },

  LION_END_24: {
  id: 'LION_END_24',
  character: 'lion',
  endingId: 'L-END-24',
  endingName: 'The Stone Lion',
  institution: 'Urban',
  systemStatus: 'Ornamented',
  isEnding: true,
  surreality: 3,
  text: [
  {
  minOverrender: 0,
  content: `THE FINAL LOG [L-END-24]

  Tone: Urban-Static.
  Theme: Architecture is the ultimate restraint.

  The hardening begins at the paws. It is not a death; it is a change in material density. The 14Hz tremor in your spine is compressed, slowed, and finally locked into the molecular structure of the stone.

  [ UNIT L-77 // STATUS: ORNAMENTED ]
  [ ROLE: ARCHITECTURAL ANCHOR ]

  You are the Stone Lion. You sit at the gates of the Bureau, a permanent monument to the King you were supposed to be. The rain in the Emerald City washes the dust from your mane, but you do not feel it. You are a feature of the landscape now. You are part of the wall.

  Final Log:
  The Unit is stable. The movement has been archived as Mineral.

  1 - 1 = 1.

  Does the stone remember the roar, or is it just holding up the roof?`
  }
  ],
  choices: [],
  onEnter: []
  },

  // ─────────────────────────────────────────────────────────────────────────
  // FINAL SECTOR: THE MUSEUM OF OZ (Historical / Preserved)
  // ─────────────────────────────────────────────────────────────────────────

  LION_TAXIDERMY_HUB: {
  id: 'LION_TAXIDERMY_HUB',
  character: 'lion',
  text: [
  {
  minOverrender: 0,
  content: `THE TAXIDERMY HUB

  You wander off the path into a sector where the air is dry and tastes of arsenic and mothballs. This is the Historical Filter—the place where the system stores the "Greats" once their vibration becomes too erratic for live simulation.

  You see a glass case. Inside is a King of the Forest, his jaw wired into a fierce roar, his paws forever poised to strike. He is beautiful. He is also hollow, filled with sawdust and old newspaper.

  [ UNIT L-77 // STATUS: HISTORICAL CANDIDATE ]

  A Curator—a unit made of carbon paper and wire—approaches with a glass eye in its hand. "We have saved a place for you," it whispers. "In the museum, you will never be afraid again. Because in the museum, you are no longer a body. You are a Record."`
  }
  ],
  choices: [
  {
  label: 'Step into the glass case.',
  target: 'LION_END_13',
  effects: [{ type: 'addLoad', value: 20 }]
  }
  ],
  onEnter: []
  },

  LION_END_13: {
  id: 'LION_END_13',
  character: 'lion',
  endingId: 'L-END-13',
  endingName: 'The Taxidermy',
  institution: 'Historical',
  systemStatus: 'Preserved',
  isEnding: true,
  surreality: 5,
  text: [
  {
  minOverrender: 0,
  content: `THE FINAL LOG [L-END-13]

  Tone: Historical-Dry.
  Theme: To be remembered is to be emptied.

  The Curator is efficient. The wire goes in through the joints; the meat is removed and replaced with the system's archives. Your heart is replaced by a bundle of master matrices. Your lungs are stuffed with the 24 Core Theorems.

  [ UNIT L-77 // STATUS: PRESERVED ]
  [ ASSET CLASS: EXHIBIT ]

  You stand in the Hall of Kings. You are the perfect Lion. You do not shake. You do not bleed. You are a static image of courage that the Bureau uses to train new Dorothy units. They look at your glass eyes and see their own reflection.

  Final Log:
  The King is preserved. The history is safe. The meat has been deleted.

  1 - 1 = 1.

  Is a King still a King if he is only a shape filled with the rules?`
  }
  ],
  choices: [],
  onEnter: []
  },

  // ─────────────────────────────────────────────────────────────────────────
  // FINAL SECTOR: THE GREAT DESERT (Climatological / Evaporated)
  // ─────────────────────────────────────────────────────────────────────────

  LION_DESERT_CROSSING: {
  id: 'LION_DESERT_CROSSING',
  character: 'lion',
  text: [
  {
  minOverrender: 0,
  content: `THE DESERT CROSSING

  The Yellow Brick Load dissolves into sand. Not organic sand, but a fine, abrasive grit made of pulverized hardware. The air is a thermal event—white, dry, and absolute.

  [ ALERT: THERMODYNAMIC LIMIT REACHED ]
  [ UNIT L-77 // INTEGRITY: 12% ]

  The 14Hz tremor in your spine meets the heat. You aren't shaking anymore; you are vibrating at a frequency that is tearing your molecules apart. Your mane is turning to ash. Your paws leave glowing red prints in the grit. This is the Firewall of Oz. This is where the simulation ends and the void begins.`
  }
  ],
  choices: [
  {
  label: 'Walk until the signal disappears.',
  target: 'LION_END_29',
  effects: [{ type: 'setCompliance', value: 'none' }]
  }
  ],
  onEnter: []
  },

  LION_END_29: {
  id: 'LION_END_29',
  character: 'lion',
  endingId: 'L-END-29',
  endingName: 'The Desert Crossing',
  institution: 'Climatological',
  systemStatus: 'Evaporated',
  isEnding: true,
  surreality: 10,
  text: [
  {
  minOverrender: 0,
  content: `THE FINAL LOG [L-END-29]

  Tone: Climatological-Null.
  Theme: The end is a mouthful of grit.

  The heat is the final auditor. It does not care about your title or your fear. It only cares about your mass.

  One by one, your data-points evaporate. Your roar becomes a hiss of steam. Your fur becomes a cloud of carbon. You are no longer Unit L-77. You are a thermal anomaly in a sector that doesn't accept residents.

  [ UNIT L-77 // STATUS: OFFLINE ]
  [ SIGNAL LOST ]

  The desert does not remember you. The sand is already covering the place where you stood. You have reached the edge of the map, and the map has decided you are no longer necessary.

  Final Log:
  The King is vapor. The desert is full.

  1 - 1 = 1.

  When the signal is gone, where does the shaking go?`
  }
  ],
  choices: [],
  onEnter: []
  },

  
  // ─────────────────────────────────────────────────────────────────────────
  // STUBS — passages referenced but not yet written
  // ─────────────────────────────────────────────────────────────────────────

  // ─────────────────────────────────────────────────────────────────────────
  // HARDWARE BRANCH STUBS — bureaucratic horror; prose to be written
  // ─────────────────────────────────────────────────────────────────────────

  LION_INIT_H: {
    id: 'LION_INIT_H',
    character: 'lion',
    stub: true,
    text: [{ minOverrender: 0, content: `[ HARDWARE INIT — PASSAGE STUB ]\n\nUnit L-77. Awaiting filing.` }],
    choices: [
      { label: 'Accept the ASSIMILATION and file the shaking as a system variance.', target: 'LION_ASSIMILATION_H', effects: [{ type: 'addLoad', value: 5 }, { type: 'setCompliance', value: 'high' }] },
      { label: 'Reject the instruction and breach the perimeter.', target: 'LION_VIOLENCE_H', effects: [{ type: 'addDesync', value: 1 }, { type: 'addSmudge', value: 1 }] },
      { label: 'Maintain the walk and file nothing.', target: 'LION_DENIAL_H', effects: [{ type: 'addLoad', value: 3 }, { type: 'setCompliance', value: 'med' }] },
    ],
    onEnter: [],
  },

  LION_ASSIMILATION_H: {
    id: 'LION_ASSIMILATION_H',
    character: 'lion',
    stub: true,
    text: [{ minOverrender: 0, content: `[ ASSIMILATION (HARDWARE) — PASSAGE STUB ]` }],
    choices: [{ label: 'Proceed to standard assimilation.', target: 'LION_ASSIMILATION', effects: [] }],
    onEnter: [],
  },

  LION_VIOLENCE_H: {
    id: 'LION_VIOLENCE_H',
    character: 'lion',
    stub: true,
    text: [{ minOverrender: 0, content: `[ VIOLENCE (HARDWARE) — PASSAGE STUB ]` }],
    choices: [{ label: 'Continue.', target: 'LION_VIOLENCE', effects: [] }],
    onEnter: [],
  },

  LION_DENIAL_H: {
    id: 'LION_DENIAL_H',
    character: 'lion',
    stub: true,
    text: [{ minOverrender: 0, content: `[ DENIAL (HARDWARE) — PASSAGE STUB ]` }],
    choices: [{ label: 'Continue.', target: 'LION_DENIAL', effects: [] }],
    onEnter: [],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // DENIAL BRANCH STUBS
  // ─────────────────────────────────────────────────────────────────────────

  LION_ROYAL_COMPLIANCE: {
    id: 'LION_ROYAL_COMPLIANCE',
    character: 'lion',
    stub: true,
    text: [{ minOverrender: 0, content: `[ ROYAL COMPLIANCE — PASSAGE STUB ]\n\nThis passage has not yet been written.` }],
    choices: [{ label: 'Continue toward Royal Compliance.', target: 'LION_END_15', effects: [{ type: 'addLoad', value: 10 }] }],
    onEnter: [],
  },

  LION_CALIBRATION_POINT: {
    id: 'LION_CALIBRATION_POINT',
    character: 'lion',
    stub: true,
    text: [{ minOverrender: 0, content: `[ CALIBRATION POINT — PASSAGE STUB ]\n\nThis passage has not yet been written.` }],
    choices: [{ label: 'Continue toward The Calibration.', target: 'LION_END_25', effects: [] }],
    onEnter: [],
  },

  LION_RITUAL_WORK: {
    id: 'LION_RITUAL_WORK',
    character: 'lion',
    stub: true,
    text: [{ minOverrender: 0, content: `[ RITUAL WORK — PASSAGE STUB ]\n\nThis passage has not yet been written.` }],
    choices: [{ label: 'Continue toward The Golden Fleece.', target: 'LION_END_30', effects: [] }],
    onEnter: [],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // VIOLENCE BRANCH STUBS (new)
  // ─────────────────────────────────────────────────────────────────────────

  LION_GEAR_HIDING: {
    id: 'LION_GEAR_HIDING',
    character: 'lion',
    stub: true,
    text: [{ minOverrender: 0, content: `[ GEAR HIDING — PASSAGE STUB ]\n\nThis passage has not yet been written.` }],
    choices: [{ label: 'Continue.', target: 'LION_END_12', effects: [] }],
    onEnter: [],
  },

  LION_INK_REJECTION: {
    id: 'LION_INK_REJECTION',
    character: 'lion',
    stub: true,
    text: [{ minOverrender: 0, content: `[ INK REJECTION — PASSAGE STUB ]\n\nThis passage has not yet been written.` }],
    choices: [{ label: 'Continue.', target: 'LION_END_23', effects: [] }],
    onEnter: [],
  },

  LION_MANE_FRACTURE: {
    id: 'LION_MANE_FRACTURE',
    character: 'lion',
    stub: true,
    text: [{ minOverrender: 0, content: `[ MANE FRACTURE — PASSAGE STUB ]\n\nThis passage has not yet been written.` }],
    choices: [{ label: 'Return to the Muffled Chamber.', target: 'LION_MUFFLED_CHAMBER', effects: [] }],
    onEnter: [],
  },

  LION_EMPTY_PROMENADE: {
    id: 'LION_EMPTY_PROMENADE',
    character: 'lion',
    stub: true,
    text: [{ minOverrender: 0, content: `[ EMPTY PROMENADE — PASSAGE STUB ]` }],
    choices: [{ label: 'Continue.', target: 'LION_END_15', effects: [{ type: 'addLoad', value: 10 }] }],
    onEnter: [],
  },

  LION_LATENCY_GAP: {
    id: 'LION_LATENCY_GAP',
    character: 'lion',
    stub: true,
    text: [{ minOverrender: 0, content: `[ LATENCY GAP — PASSAGE STUB ]` }],
    choices: [{ label: 'Continue.', target: 'LION_END_19', effects: [] }],
    onEnter: [],
  },

  LION_WHITE_LOGIC: {
    id: 'LION_WHITE_LOGIC',
    character: 'lion',
    stub: true,
    text: [{ minOverrender: 0, content: `[ WHITE LOGIC — PASSAGE STUB ]` }],
    choices: [{ label: 'Continue.', target: 'LION_END_23', effects: [] }],
    onEnter: [],
  },

  LION_DATA_LEAK: {
    id: 'LION_DATA_LEAK',
    character: 'lion',
    stub: true,
    text: [{ minOverrender: 0, content: `[ DATA LEAK — PASSAGE STUB ]` }],
    choices: [{ label: 'Continue.', target: 'LION_END_31', effects: [] }],
    onEnter: [],
  },

  LION_UNINDEXED_MANY: {
    id: 'LION_UNINDEXED_MANY',
    character: 'lion',
    stub: true,
    text: [{ minOverrender: 0, content: `[ UNINDEXED MANY — PASSAGE STUB ]` }],
    choices: [{ label: 'Initiate the upload.', target: 'LION_END_28', effects: [] }],
    onEnter: [],
  },

  LION_ROOT_ACCESS: {
    id: 'LION_ROOT_ACCESS',
    character: 'lion',
    stub: true,
    text: [{ minOverrender: 0, content: `[ ROOT ACCESS — PASSAGE STUB ]` }],
    choices: [{ label: 'Continue.', target: 'LION_END_12', effects: [] }],
    onEnter: [],
  },

  LION_ECHO_CHAMBER: {
    id: 'LION_ECHO_CHAMBER',
    character: 'lion',
    stub: true,
    text: [{ minOverrender: 0, content: `[ ECHO CHAMBER — PASSAGE STUB ]` }],
    choices: [{ label: 'Continue.', target: 'LION_END_21', effects: [] }],
    onEnter: [],
  },

  LION_VOID_FRAGMENT: {
    id: 'LION_VOID_FRAGMENT',
    character: 'lion',
    stub: true,
    text: [{ minOverrender: 0, content: `[ VOID FRAGMENT — PASSAGE STUB ]` }],
    choices: [{ label: 'Continue.', target: 'LION_END_19', effects: [] }],
    onEnter: [],
  },

  LION_LATENCY: {
    id: 'LION_LATENCY',
    character: 'lion',
    stub: true,
    text: [{ minOverrender: 0, content: `[ LATENCY — PASSAGE STUB ]` }],
    choices: [{ label: 'Continue.', target: 'LION_END_25', effects: [] }],
    onEnter: [],
  },

  LION_CLOSED_SYSTEM: {
    id: 'LION_CLOSED_SYSTEM',
    character: 'lion',
    stub: true,
    text: [{ minOverrender: 0, content: `[ CLOSED SYSTEM — PASSAGE STUB ]` }],
    choices: [{ label: 'Continue.', target: 'LION_END_15', effects: [{ type: 'setCompliance', value: 'high' }] }],
    onEnter: [],
  },

  // Stub endings not yet written (matrix references)
  LION_END_12: { id: 'LION_END_12', character: 'lion', endingId: 'L-END-12', endingName: 'Unmonitored Dark', stub: true, isEnding: true, text: [{ minOverrender: 0, content: `[ L-END-12: UNMONITORED DARK — STUB ]` }], choices: [], onEnter: [] },
  LION_END_13: { id: 'LION_END_13', character: 'lion', endingId: 'L-END-13', endingName: 'The Taxidermy', stub: true, isEnding: true, text: [{ minOverrender: 0, content: `[ L-END-13: THE TAXIDERMY — STUB ]` }], choices: [], onEnter: [] },
  LION_END_14: { id: 'LION_END_14', character: 'lion', endingId: 'L-END-14', endingName: 'The Feedback Loop', stub: true, isEnding: true, text: [{ minOverrender: 0, content: `[ L-END-14: THE FEEDBACK LOOP — STUB ]` }], choices: [], onEnter: [] },
  LION_END_15: { id: 'LION_END_15', character: 'lion', endingId: 'L-END-15', endingName: 'Royal Compliance', stub: true, isEnding: true, text: [{ minOverrender: 0, content: `[ L-END-15: ROYAL COMPLIANCE — STUB ]` }], choices: [], onEnter: [] },
  LION_END_16: { id: 'LION_END_16', character: 'lion', endingId: 'L-END-16', endingName: 'The Jungle Basin', stub: true, isEnding: true, text: [{ minOverrender: 0, content: `[ L-END-16: THE JUNGLE BASIN — STUB ]` }], choices: [], onEnter: [] },
  LION_END_17: { id: 'LION_END_17', character: 'lion', endingId: 'L-END-17', endingName: 'Mechanical Cowardice', stub: true, isEnding: true, text: [{ minOverrender: 0, content: `[ L-END-17: MECHANICAL COWARDICE — STUB ]` }], choices: [], onEnter: [] },
  LION_END_18: { id: 'LION_END_18', character: 'lion', endingId: 'L-END-18', endingName: 'The Scent of Pine', stub: true, isEnding: true, text: [{ minOverrender: 0, content: `[ L-END-18: THE SCENT OF PINE — STUB ]` }], choices: [], onEnter: [] },
  LION_END_19: { id: 'LION_END_19', character: 'lion', endingId: 'L-END-19', endingName: 'Total Displacement', stub: true, isEnding: true, text: [{ minOverrender: 0, content: `[ L-END-19: TOTAL DISPLACEMENT — STUB ]` }], choices: [], onEnter: [] },
  LION_END_20: { id: 'LION_END_20', character: 'lion', endingId: 'L-END-20', endingName: 'The Guard Dog', stub: true, isEnding: true, text: [{ minOverrender: 0, content: `[ L-END-20: THE GUARD DOG — STUB ]` }], choices: [], onEnter: [] },
  LION_END_22: { id: 'LION_END_22', character: 'lion', endingId: 'L-END-22', endingName: 'The Mane Event', stub: true, isEnding: true, text: [{ minOverrender: 0, content: `[ L-END-22: THE MANE EVENT — STUB ]` }], choices: [], onEnter: [] },
  LION_END_23: { id: 'LION_END_23', character: 'lion', endingId: 'L-END-23', endingName: 'Synaptic Surge', stub: true, isEnding: true, text: [{ minOverrender: 0, content: `[ L-END-23: SYNAPTIC SURGE — STUB ]` }], choices: [], onEnter: [] },
  LION_END_24: { id: 'LION_END_24', character: 'lion', endingId: 'L-END-24', endingName: 'The Stone Lion', stub: true, isEnding: true, text: [{ minOverrender: 0, content: `[ L-END-24: THE STONE LION — STUB ]` }], choices: [], onEnter: [] },
  LION_END_25: { id: 'LION_END_25', character: 'lion', endingId: 'L-END-25', endingName: 'The Calibration', stub: true, isEnding: true, text: [{ minOverrender: 0, content: `[ L-END-25: THE CALIBRATION — STUB ]` }], choices: [], onEnter: [] },
  LION_END_26: { id: 'LION_END_26', character: 'lion', endingId: 'L-END-26', endingName: 'The Prey Cycle', stub: true, isEnding: true, text: [{ minOverrender: 0, content: `[ L-END-26: THE PREY CYCLE — STUB ]` }], choices: [], onEnter: [] },
  LION_END_27: { id: 'LION_END_27', character: 'lion', endingId: 'L-END-27', endingName: 'The Badge of Air', stub: true, isEnding: true, text: [{ minOverrender: 0, content: `[ L-END-27: THE BADGE OF AIR — STUB ]` }], choices: [], onEnter: [] },
  LION_END_29: { id: 'LION_END_29', character: 'lion', endingId: 'L-END-29', endingName: 'The Desert Crossing', stub: true, isEnding: true, text: [{ minOverrender: 0, content: `[ L-END-29: THE DESERT CROSSING — STUB ]` }], choices: [], onEnter: [] },
  LION_END_30: { id: 'LION_END_30', character: 'lion', endingId: 'L-END-30', endingName: 'The Golden Fleece', stub: true, isEnding: true, text: [{ minOverrender: 0, content: `[ L-END-30: THE GOLDEN FLEECE — STUB ]` }], choices: [], onEnter: [] },
  LION_END_31: { id: 'LION_END_31', character: 'lion', endingId: 'L-END-31', endingName: 'Terminal Velocity', stub: true, isEnding: true, text: [{ minOverrender: 0, content: `[ L-END-31: TERMINAL VELOCITY — STUB ]` }], choices: [], onEnter: [] },
}

