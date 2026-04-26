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
        content: `THE KING OF THE FOREST IS A UNIT OF MEASURE

You are the Lion.

The amber light of the simulation does not warm. It merely illuminates the dust suspended in the air. You stand in the High-Density Corn, a Gilded Field, a corridor of stalks that do not sway with wind but vibrate with a low rhythm. 

This is the starting point.

Your paws are heavy. The pads feel lined with lead or unread records. Behind you, the road—the Yellow Brick Load—stretches back into a blur of twilight. Before you, the field.

The shaking began three cycles ago. It starts in the jaw—a clicking of bone against bone—and it moves down the spine until your tail is a whip of panicked data. You have been told this shaking is cowardice. You have been told that a King is simply a body whose shaking has been successfully dampened.

The air smells of wet pine and industrial cleaner. A voice, flat and without a single source, resonates from the sky—or perhaps from the speakers installed behind your ribs.

"Unit L-77. Report load status."

You open your mouth to roar. The output is processed. What comes out is a dry, rasping sound. A cough of gypsum.`,
      },
      {
        minOverrender: 3,
        content: `THE KING OF THE FOREST IS A UNIT OF MEASURE

You are the Lion. You have been the Lion. You will continue to be the Lion until the system decides otherwise.

The amber light does not warm. The stalks do not sway. The shaking has been three cycles. The shaking has been three cycles. The shaking has been—

"Unit L-77. Report load status."

You open your mouth. The output is processed. A cough of gypsum. A cough of gypsum. A cough—`,
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
    ],
    onEnter: [
      { type: 'checkGhostSignal' },
    ],
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
        content: `THE VIOLENCE

You do not report. You move.

The leap is not an act of courage. It is a failure of the brakes. You tear through the stalks. They do not snap like grass. They shear like copper wire, sparking against your fur. The smell of ozone replaces the cleaner.

You are off the path. The Yellow Brick Load is now a thin, glowing thread behind you, a cable you have unplugged.

Here, the shadows are thick. The trees are tall, grey columns of calcified memory. You stop, chest heaving. The shaking is violent now, a jagged rhythm that makes your vision vibrate.

In the dark, something mirrors your movement. A shape, low to the ground, with eyes that pulse like failing lights. It is a Kalidah—or perhaps it is just the part of your own code you were told to delete, rendered in the dark.

Your roar builds. It starts in the gut, a swell of air and ancient, unformatted grief.`,
      },
    ],
    choices: [
      {
        label: 'Release the roar as a diagnostic signal.',
        target: 'LION_AUDIO_EVENT',
        effects: [
          { type: 'addDesync', value: 1 },
          { type: 'addOverrender', value: 1 },
        ],
      },
      {
        label: 'Suppress the roar and attempt to merge with the shadow.',
        target: 'LION_KALIDAH_PATCH',
        effects: [
          { type: 'addSmudge', value: 1 },
          { type: 'addDesync', value: 1 },
          { type: 'checkGhostSignal' },
        ],
      },
    ],
    onEnter: [{ type: 'addSmudge', value: 1 }],
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

  // ─────────────────────────────────────────────────────────────────────────
  // STUBS — passages referenced but not yet written
  // ─────────────────────────────────────────────────────────────────────────

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

