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
    id: "LION_INIT",
    character: "lion",
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
        label:
          "WETWARE — You are meat under pressure. The shaking is a body problem.",
        target: "LION_INIT_W",
        effects: [{ type: "setFlag", key: "mode", value: "wetware" }],
      },
      {
        label:
          "HARDWARE — You are a unit with a filing error. The shaking is a system problem.",
        target: "LION_INIT_H",
        effects: [{ type: "setFlag", key: "mode", value: "hardware" }],
      },
    ],
    onEnter: [{ type: "checkGhostSignal" }],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // WETWARE BRANCH — body horror, visceral, meat under bureaucratic pressure
  // ─────────────────────────────────────────────────────────────────────────

  LION_INIT_W: {
    id: "LION_INIT_W",
    character: "lion",
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
        label:
          "Accept the ASSIMILATION and report the shaking as a mechanical error.",
        target: "LION_ASSIMILATION",
        effects: [
          { type: "addLoad", value: 5 },
          { type: "setCompliance", value: "high" },
        ],
      },
      {
        label: "Ignore the instruction and lunge into the unmapped thicket.",
        target: "LION_VIOLENCE",
        effects: [
          { type: "addDesync", value: 1 },
          { type: "addSmudge", value: 1 },
        ],
      },
      {
        label:
          "Pretend the shaking isn't happening and keep walking the Load as if nothing is wrong.",
        target: "LION_DENIAL",
        effects: [
          { type: "addLoad", value: 3 },
          { type: "setCompliance", value: "med" },
        ],
      },
    ],
    onEnter: [],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // THE DENIAL BRANCH
  // ─────────────────────────────────────────────────────────────────────────

  LION_DENIAL: {
    id: "LION_DENIAL",
    character: "lion",
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
        label: "Maintain the gaze and keep walking. (The Royal Walk)",
        target: "LION_ROYAL_COMPLIANCE",
        effects: [{ type: "addLoad", value: 8 }],
      },
      {
        label: "Stop and observe the bird more closely. (The Audit)",
        target: "LION_CALIBRATION_POINT",
        effects: [
          { type: "addDesync", value: 1 },
          { type: "setCompliance", value: "low" },
        ],
      },
      {
        label: "Pause to fix the leaking Milestone Marker. (The Ritual)",
        target: "LION_RITUAL_WORK",
        effects: [
          { type: "addLoad", value: 10 },
          { type: "addSmudge", value: 1 },
        ],
      },
    ],
    onEnter: [{ type: 'triggerOracle' }],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // THE ASSIMILATION BRANCH
  // ─────────────────────────────────────────────────────────────────────────

  LION_ASSIMILATION: {
    id: "LION_ASSIMILATION",
    character: "lion",
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
        label: "Accept the dampeners.",
        target: "LION_SEDATION",
        effects: [
          { type: "addLoad", value: 10 },
          { type: "setCompliance", value: "high" },
          { type: "addOverrender", value: 1 },
        ],
      },
      {
        label: "Log the shaking as a feature.",
        target: "LION_NOMINALIZATION",
        effects: [
          { type: "addLoad", value: 5 },
          { type: "addDesync", value: 1 },
        ],
      },
    ],
    onEnter: [],
  },

  LION_SEDATION: {
    id: "LION_SEDATION",
    character: "lion",
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
        label: "Proceed to the Muffled Chamber.",
        target: "LION_MUFFLED_CHAMBER",
        effects: [
          { type: "addLoad", value: 15 },
          { type: "setCompliance", value: "high" },
        ],
      },
      {
        label: "Spit the capsule out.",
        target: "LION_SYSTEM_SPASM",
        effects: [
          { type: "addDesync", value: 1 },
          { type: "addSmudge", value: 1 },
          { type: "setCompliance", value: "low" },
        ],
      },
    ],
    onEnter: [],
  },

  LION_NOMINALIZATION: {
    id: "LION_NOMINALIZATION",
    character: "lion",
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
        label: "Ask the technician what happens to high-variance units.",
        target: "LION_MIRROR_ASSIMILATION",
        effects: [
          { type: "addLoad", value: 5 },
          { type: "addDesync", value: 1 },
        ],
      },
      {
        label: "Walk forward into the green light.",
        target: "LION_EMPTY_PROMENADE",
        effects: [
          { type: "addLoad", value: 10 },
          { type: "setCompliance", value: "med" },
        ],
      },
    ],
    onEnter: [],
  },

  LION_MIRROR_ASSIMILATION: {
    id: "LION_MIRROR_ASSIMILATION",
    character: "lion",
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
        label: "Turn away and walk into the green light.",
        target: "LION_EMPTY_PROMENADE",
        effects: [
          { type: "addLoad", value: 10 },
          { type: "addOverrender", value: 1 },
        ],
      },
      {
        label: "Shout a name—any name—to see if the smudge responds.",
        target: "LION_NOMINAL_ECHO",
        effects: [
          { type: "addDesync", value: 1 },
          { type: "addSmudge", value: 1 },
          { type: "checkGhostSignal" },
        ],
      },
    ],
    onEnter: [{ type: "addSmudge", value: 1 }],
  },

  LION_NOMINAL_ECHO: {
    id: "LION_NOMINAL_ECHO",
    character: "lion",
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
        label: "Acknowledge the final entry.",
        target: "LION_CLOSED_SYSTEM",
        effects: [
          { type: "addLoad", value: 20 },
          { type: "setCompliance", value: "high" },
        ],
      },
      {
        label: "Wait in the white room until the next cycle begins.",
        target: "LION_LATENCY",
        effects: [{ type: "addDesync", value: 1 }],
      },
    ],
    onEnter: [{ type: "addSmudge", value: 1 }],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // THE VIOLENCE BRANCH
  // ─────────────────────────────────────────────────────────────────────────

  LION_VIOLENCE: {
    id: "LION_VIOLENCE",
    character: "lion",
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
        label: "Charge and tear into the Kalidah with teeth and claws.",
        target: "LION_KALIDAH_FIGHT",
        effects: [
          { type: "addSmudge", value: 2 },
          { type: "addDesync", value: 2 },
        ],
      },
      {
        label:
          "Swallow the roar and try to hide among the rusted gears and broken cabinets.",
        target: "LION_GEAR_HIDING",
        effects: [
          { type: "addLoad", value: 5 },
          { type: "addDesync", value: 1 },
        ],
      },
    ],
    onEnter: [{ type: "addSmudge", value: 1 }],
  },

  LION_KALIDAH_FIGHT: {
    id: "LION_KALIDAH_FIGHT",
    character: "lion",
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
        label: "Keep tearing until there is nothing left to separate.",
        target: "LION_END_28",
        effects: [],
      },
      {
        label:
          "Pull back and try to vomit out the ink and paper lodged in your throat.",
        target: "LION_INK_REJECTION",
        effects: [
          { type: "addLoad", value: 12 },
          { type: "addSmudge", value: 1 },
        ],
      },
    ],
    onEnter: [],
  },

  LION_AUDIO_EVENT: {
    id: "LION_AUDIO_EVENT",
    character: "lion",
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
        label: "Roar again and finish the demolition of the thicket.",
        target: "LION_RESONANCE_COLLAPSE",
        effects: [
          { type: "addDesync", value: 1 },
          { type: "addOverrender", value: 1 },
        ],
      },
      {
        label: "Step toward the frozen leaf and touch the fracture in time.",
        target: "LION_LATENCY_GAP",
        effects: [{ type: "addSmudge", value: 1 }],
      },
    ],
    onEnter: [],
  },

  LION_RESONANCE_COLLAPSE: {
    id: "LION_RESONANCE_COLLAPSE",
    character: "lion",
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
        label: "Push the broadcast until the tear consumes the field.",
        target: "LION_WHITE_LOGIC",
        effects: [
          { type: "addDesync", value: 2 },
          { type: "addOverrender", value: 1 },
          { type: "checkGhostSignal" },
        ],
      },
      {
        label: "Step into the white gap and leave the body behind.",
        target: "LION_DATA_LEAK",
        effects: [
          { type: "addDesync", value: 1 },
          { type: "addSmudge", value: 1 },
        ],
      },
    ],
    onEnter: [{ type: "addOverrender", value: 1 }],
  },

  LION_KALIDAH_PATCH: {
    id: "LION_KALIDAH_PATCH",
    character: "lion",
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
        label: "Complete the merge and become the swarm.",
        target: "LION_UNINDEXED_MANY",
        effects: [
          { type: "addDesync", value: 2 },
          { type: "addSmudge", value: 1 },
          { type: "setCompliance", value: "broken" },
        ],
      },
      {
        label: "Use the Kalidah's eyes to find the source of the simulation.",
        target: "LION_ROOT_ACCESS",
        effects: [
          { type: "addDesync", value: 1 },
          { type: "checkGhostSignal" },
        ],
      },
    ],
    onEnter: [{ type: "addSmudge", value: 1 }],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // MUFFLED CHAMBER BRANCH (→ L-END-11)
  // ─────────────────────────────────────────────────────────────────────────

  LION_MUFFLED_CHAMBER: {
    id: "LION_MUFFLED_CHAMBER",
    character: "lion",
    text: [
      {
        minOverrender: 0,
        content: `THE MUFFLED CHAMBER

The conveyor stops. There is no click of machinery, only the sensation of mass reaching a state of rest. You are in a room where the light is the color of a cataract.

The walls are soft. They are lined with thick, matted fur that matches the shade and texture of your mane. When you breathe, the walls seem to inhale with you, absorbing the sound of your lungs before it can touch the floor. This is the sub-basement of the simulation. This is where the records go to be still.

You try to move your head, but the weight of the dampening is a physical presence. It sits on your eyelids. It settles in the marrow of your bones. The shaking in your spine has become a ghost, a memory of a frequency that the room refuses to play.

On the ceiling, a single screen displays your status:

[ UNIT L-77 // NOISE FLOOR: OPTIMAL ]
[ STATUS: AUDITED ]

You are a lion in a box made of lion. You are the silence that follows a roar.`,
      },
    ],
    choices: [
      {
        label: "Close your eyes and accept the redistribution of your mass.",
        target: "LION_END_11",
        effects: [
          { type: "addLoad", value: 30 },
          { type: "setCompliance", value: "high" },
        ],
      },
      {
        label:
          "Search the soft walls for a seam—a place where the fur does not match.",
        target: "LION_MANE_FRACTURE",
        effects: [
          { type: "addDesync", value: 1 },
          { type: "addSmudge", value: 1 },
        ],
      },
    ],
    onEnter: [{ type: "addOverrender", value: 1 }],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // ENDINGS
  // ─────────────────────────────────────────────────────────────────────────

  LION_END_11: {
    id: "LION_END_11",
    character: "lion",
    endingId: "L-END-11",
    endingName: "The Padded Cell",
    institution: "Medical",
    systemStatus: "Insulated",
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
    onEnter: [{ type: "setCompliance", value: "high" }],
    isEnding: true,
  },

  LION_END_21: {
    id: "LION_END_21",
    character: "lion",
    endingId: "L-END-21",
    endingName: "The Roaring Void",
    institution: "Narrative",
    systemStatus: "Resonating",
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
    id: "LION_END_28",
    character: "lion",
    endingId: "L-END-28",
    endingName: "The Kalidah Merge",
    institution: "Genetic",
    systemStatus: "Overwritten",
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
    id: "LION_SYSTEM_SPASM",
    character: "lion",
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
        label: "Hold the bite until the simulation collapses.",
        target: "LION_HARD_RESET",
        effects: [
          { type: "addDesync", value: 2 },
          { type: "setCompliance", value: "broken" },
          { type: "addSmudge", value: 1 },
        ],
      },
      {
        label: "Release and run into the tearing sky.",
        target: "LION_VOID_FRAGMENT",
        effects: [
          { type: "addDesync", value: 1 },
          { type: "addSmudge", value: 1 },
          { type: "checkGhostSignal" },
        ],
      },
    ],
    onEnter: [
      { type: "addDesync", value: 1 },
      { type: "setCompliance", value: "low" },
    ],
  },

  LION_HARD_RESET: {
    id: "LION_HARD_RESET",
    character: "lion",
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
        label: "Accept the reset.",
        target: "LION_INIT",
        effects: [{ type: "softReset" }],
      },
      {
        label: "Refuse the reset.",
        target: "LION_END_21",
        effects: [
          { type: "setCompliance", value: "broken" },
          { type: "addSmudge", value: 1 },
          { type: "checkGhostSignal" },
        ],
      },
    ],
    onEnter: [],
  },

  // THE DENIAL BRANCH EXPANSION
  // ─────────────────────────────────────────────────────────────────────────

  LION_ROYAL_COMPLIANCE: {
    id: "LION_ROYAL_COMPLIANCE",
    character: "lion",
    text: [
      {
        minOverrender: 0,
        content: `THE ROYAL COMPLIANCE

  You do not look at the bird. You do not look at the blood leaking from the iron post. You maintain the Royal Walk.

  Your spine is a rigid line of protocol. With every step, the weight on your neck increases. It is no longer just the matted fur of a failing beast; it is the physical mass of every 'Nominal' status report you have ever issued. You feel the sharp tang of staples biting into the skin behind your ears as the system attaches new amendments to your mane.

  [ AMENDMENT 12-B: MAJESTY AS LOAD-BEARING STRUCTURE ]

  The road begins to hum—a low, judicial vibration that synchronizes with the clicking in your jaw. You are no longer walking; you are being marched by the architecture itself. The cornstalks on either side have straightened into a formal guard of honor, their paper leaves crackling like the turning of a thousand ledgers.

  Ahead, the Yellow Brick Load widens into a courtyard of polished grey marble. In the center stands a throne made of compacted carbon paper and hardened wax.

  "Unit L-77," the courtyard echoes. "The audit of your tremor is complete. We have found a use for your instability. We shall call it Sovereignty."`,
      },
    ],
    choices: [
      {
        label: "Take the throne and accept the Crown of Restraint.",
        target: "LION_END_15",
        effects: [
          { type: "addLoad", value: 20 },
          { type: "setCompliance", value: "high" },
        ],
      },
      {
        label: "Attempt to roar one last time before the coronation.",
        target: "LION_TESTIMONY_ERROR",
        effects: [
          { type: "addVibration", value: 10 },
          { type: "addSmudge", value: 2 },
        ],
      },
    ],
    onEnter: [],
  },

  LION_TESTIMONY_ERROR: {
    id: "LION_TESTIMONY_ERROR",
    character: "lion",
    text: [
      {
        minOverrender: 0,
        content: `THE TESTIMONY ERROR

  You draw breath to roar, to shatter the marble, to tear the carbon-paper throne to shreds. But the air in your lungs feels like wet gypsum.

  The sound that emerges is not a roar. It is a playback. Your throat has been fitted with a needle and a spinning drum. What comes out of your mouth is a high-speed recitation of your own hardware specs, your compliance history, and a list of every time you failed to bolt.

  "Status... Nominal... Status... Nominal..."

  The more you try to scream, the faster the record spins. The friction generates a searing heat in your chest—the 'Thermal Event' the manual warned you about. Your mane begins to smoke, the smell of burning paper filling the courtyard.

  The system is not punishing you. It is merely transcribing you.`,
      },
    ],
    choices: [
      {
        label: "Submit to the transcription.",
        target: "LION_END_15",
        effects: [
          { type: "addLoad", value: 10 },
          { type: "setCompliance", value: "absolute" },
        ],
      },
    ],
    onEnter: [{ type: "addVibration", value: 5 }],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // ENDING L-END-15
  // ─────────────────────────────────────────────────────────────────────────

  LION_END_15: {
    id: "LION_END_15",
    character: "lion",
    endingId: "L-END-15",
    endingName: "Royal Compliance",
    institution: "State",
    systemStatus: "Crowned",
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

  If the King is the one who defines the tremor, does the tremor exist?`,
      },
    ],
    choices: [],
    onEnter: [],
  },

  // THE VIOLENCE BRANCH EXPANSION
  // ─────────────────────────────────────────────────────────────────────────

  LION_GEAR_HIDING: {
    id: "LION_GEAR_HIDING",
    character: "lion",
    text: [
      {
        minOverrender: 0,
        content: `THE GEAR HIDING

  The Kalidah’s glass eyes click, recording your hesitation. You do not give it the fight it was programmed to facilitate. Instead, you drop low, your belly fur dragging through the oily silt, and crawl into the shadow of a rusted Tabulator—a machine the size of a hill, its iron ribs exposed to the bruised sky.

  Here, the Institutional Filters begin to fray. The air does not smell of gypsum or ozone; it smells of cold iron and the wet, heavy wool of a world that has been forgotten by the auditor.

  You wedge your mass between a seized flywheel and a stack of perforated cards that have fused into a single block of limestone. The tremor in your spine meets the low-frequency thrum of the earth—not a system signal, but the literal vibration of the machine’s basement.

  [ ALERT: UNIT L-77 SIGNAL STRENGTH DROPPING ]
  [ STATUS: UNCERTAIN ]

  The notification is faint, a dying spark in your peripheral vision. You are becoming a 'Ghost Bit.' By refusing to be measured as a King or a Coward, you are falling through the cracks of the ledger. The dark here is not an absence of light; it is an absence of data.`,
      },
    ],
    choices: [
      {
        label: 'Stay perfectly still until the "L-77" tag expires.',
        target: "LION_DE_INDEXING",
        effects: [
          { type: "addDesync", value: 5 },
          { type: "addSmudge", value: 3 },
          { type: "setCompliance", value: "none" },
        ],
      },
      {
        label: "Follow the trail of old paper deeper into the unlit dark.",
        target: "LION_VOID_TREK",
        effects: [
          { type: "addDesync", value: 3 },
          { type: "addLoad", value: -5 },
        ],
      },
    ],
    onEnter: [{ type: "addDesync", value: 2 }],
  },

  LION_DE_INDEXING: {
    id: "LION_DE_INDEXING",
    character: "lion",
    text: [
      {
        minOverrender: 0,
        content: `THE DE-INDEXING

  You hold your breath. The ticking in your ribs slows. You watch as a milestone bird perches on a nearby gear, its lens sweeping the area. It looks directly at you, but its logic gate fails to trigger. Without the context of the Road, your shape is just another pile of discarded meat and matted fur.

  [ ERROR: ASSET NOT FOUND ]
  [ ARCHIVING RECORD L-77... ]

  A strange coldness spreads from your paws to your chest. It is the relief of being deleted. The labels—'King,' 'Unit,' 'Coward'—peel off like wet labels in the rain. You are no longer a load-bearing structure. You are simply the friction of the dark.

  But the dark has its own requirements. Without a designation, the simulation stops providing the floor. You feel yourself beginning to sink into the unformatted silt of the basement.`,
      },
    ],
    choices: [
      {
        label: "Accept the deletion and sink into the Unmonitored Dark.",
        target: "LION_END_12",
        effects: [{ type: "setFlag", key: "ghost_bit", value: true }],
      },
    ],
    onEnter: [{ type: "addSmudge", value: 5 }],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // ENDING L-END-12
  // ─────────────────────────────────────────────────────────────────────────

  LION_END_12: {
    id: "LION_END_12",
    character: "lion",
    endingId: "L-END-12",
    endingName: "Unmonitored Dark",
    institution: "Ecological",
    systemStatus: "Unindexed",
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

  If the system stops watching you, do you still have a shape?`,
      },
    ],
    choices: [],
    onEnter: [],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // THE ASSIMILATION BRANCH EXPANSION
  // ────────────────────────────────────────────────────OD�────────────────────

  LION_CALIBRATION_POINT: {
    id: "LION_CALIBRATION_POINT",
    character: "lion",
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

  "We are going to find your resonance," the technician whispers, adjusting a dial on the side of the fork. "We are going to turn your cowardice into a pure, clean tone."`,
      },
    ],
    choices: [
      {
        label: "Submit to the tuning hammer.",
        target: "LION_HARMONIC_ALIGNMENT",
        effects: [
          { type: "addLoad", value: 10 },
          { type: "addVibration", value: 5 },
          { type: "setCompliance", value: "high" },
        ],
      },
      {
        label: "Try to howl a dissonant note to break the fork.",
        target: "LION_ACOUSTIC_REBELLION",
        effects: [
          { type: "addDesync", value: 3 },
          { type: "addSmudge", value: 2 },
        ],
      },
    ],
    onEnter: [{ type: "addVibration", value: 3 }],
  },

  LION_HARMONIC_ALIGNMENT: {
    id: "LION_HARMONIC_ALIGNMENT",
    character: "lion",
    text: [
      {
        minOverrender: 0,
        content: `THE HARMONIC ALIGNMENT

  The technician strikes the fork again. And again. Each strike recalibrates the air around you.

  The "Cowardice"—that messy, wet shaking of the meat—is being refined. You feel the jagged edges of your panic being filed down by the sound. Your ribs begin to ring like crystal. You are no longer a body; you are an instrument of the Oz OS.

  [ UNIT L-77 // RESONANCE: 440Hz ]
  [ STATUS: TUNED ]

  The smell of wet gypsum is replaced by the sterile scent of polished glass. Your mane stands on end, each hair acting as a tiny antenna for the system’s broadcast. You are perfectly aligned with the machine. The shaking hasn't stopped, but it has become a musical note—a long, sustained A that the system uses to keep the road stable.`,
      },
    ],
    choices: [
      {
        label: "Accept the final calibration.",
        target: "LION_END_25",
        effects: [{ type: "addLoad", value: 15 }],
      },
    ],
    onEnter: [{ type: "addVibration", value: 10 }],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // ENDING L-END-25
  // ─────────────────────────────────────────────────────────────────────────

  LION_END_25: {
    id: "LION_END_25",
    character: "lion",
    endingId: "L-END-25",
    endingName: "The Calibration",
    institution: "Scientific",
    systemStatus: "Tuned",
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

  Does the string feel the music, or only the tension?`,
      },
    ],
    choices: [],
    onEnter: [],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // HARDWARE BRANCH — industrial horror, screaming hinges, system failure
  // ─────────────────────────────────────────────────────────────────────────

  LION_INIT_H: {
    id: "LION_INIT_H",
    character: "lion",
    text: [
      {
        minOverrender: 0,
        content: `THE KING AS ASSET L-77

  You are the Lion.

  The air does not smell of meat; it smells of scorched insulation and cold, recycled oxygen. Your joints do not ache—they seize. Every movement of your left foreleg is accompanied by a high-frequency screech, a metal-on-metal collision that the Oz OS records as a 'Lubrication Event.'

  You look down at your paws. They are plated in dull, industrial brass, the rivets slightly loose. Beneath the faux-fur casing, you can hear the cooling fans struggling to exhaust the heat of your own panic.

  "Unit L-77. Report status."

  The voice is a data-burst, vibrating the very frame of your chassis. Your internal diagnostics are a wall of red text. 14Hz oscillation detected in the primary drive shaft (Spine). You have been told this is cowardice. The Bureau disagrees. The Bureau calls it 'Structural Instability resulting from unfiled Maintenance Logs.'

  You are not a King. You are a manufacturing error with a title.`,
      },
    ],
    choices: [
      {
        label:
          "Accept the ASSIMILATION and file the shaking as a system variance.",
        target: "LION_ASSIMILATION_H",
        effects: [
          { type: "addLoad", value: 5 },
          { type: "setCompliance", value: "high" },
        ],
      },
      {
        label: "Reject the instruction and breach the perimeter.",
        target: "LION_VIOLENCE_H",
        effects: [
          { type: "addDesync", value: 1 },
          { type: "addSmudge", value: 1 },
        ],
      },
      {
        label: "Maintain the walk and file nothing. (The Rigid Proceed)",
        target: "LION_DENIAL_H",
        effects: [
          { type: "addLoad", value: 3 },
          { type: "setCompliance", value: "med" },
        ],
      },
    ],
    onEnter: [],
  },

  LION_DENIAL_H: {
    id: "LION_DENIAL_H",
    character: "lion",
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

  Your tail twitches, a busted solenoid clicking rhythmically. You are holding yourself together by sheer administrative willpower, but the load-bearing joints in your hind legs are beginning to smoke.`,
      },
    ],
    choices: [
      {
        label: "Push through the heat and maintain the pace.",
        target: "LION_STRUCTURAL_FAILURE",
        effects: [
          { type: "addLoad", value: 15 },
          { type: "addVibration", value: 10 },
        ],
      },
      {
        label: 'Pause at the Industrial Press to seek "Lubrication."',
        target: "LION_REMAINTENANCE",
        effects: [
          { type: "addLoad", value: 5 },
          { type: "setCompliance", value: "high" },
        ],
      },
    ],
    onEnter: [],
  },

  LION_STRUCTURAL_FAILURE: {
    id: "LION_STRUCTURAL_FAILURE",
    character: "lion",
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

  They are not here to help. They are here to reclaim the raw materials of a failed unit.`,
      },
    ],
    choices: [
      {
        label: "Accept the decommissioning.",
        target: "LION_END_17",
        effects: [{ type: "setCompliance", value: "broken" }],
      },
    ],
    onEnter: [{ type: "addVibration", value: 20 }],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // ENDING L-END-17
  // ─────────────────────────────────────────────────────────────────────────

  LION_END_17: {
    id: "LION_END_17",
    character: "lion",
    endingId: "L-END-17",
    endingName: "Mechanical Cowardice",
    institution: "Industrial",
    systemStatus: "Malfunctioning",
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

  If the machine is broken, was the King ever there, or was it just the noise of the friction?`,
      },
    ],
    choices: [],
    onEnter: [],
  },

  // HARDWARE VIOLENCE BRANCH — biometric failure, data-leak, swarm logic
  // ─────────────────────────────────────────────────────────────────────────

  LION_VIOLENCE_H: {
    id: "LION_VIOLENCE_H",
    character: "lion",
    text: [
      {
        minOverrender: 0,
        content: `THE PERIMETER BREACH

  You do not follow the Yellow Brick Load. You initiate a forced exit.

  You throw your brass-plated mass against the perimeter fence—a wall of vertical magnetic tape and sharpened rebar. The impact doesn't draw blood; it draws a data-leak. Blue sparks cascade down your flanks as your internal shielding fails. You tear through the barrier, your cooling fans screaming as they ingest the debris of the thicket.

  The world outside the path is unrendered. The cornstalks are low-resolution grey spikes. The air is thick with the smell of hot solder and ozone.

  [ ALERT: OUT OF BOUNDS ]
  [ BIOMETRIC RESET INITIATED ]

  A Kalidah unit steps from the static. In this hardware-dense sector, it is a massive, multi-limbed industrial scavenger—a chassis of rusted girders and exposed hydraulic lines. It has no face, only a rotating array of glass lenses that sync with the 14Hz tremor in your jaw. It isn't an enemy; it is a mirrored hardware error. It is reaching for you with pincers made of salvaged typewriters.`,
      },
    ],
    choices: [
      {
        label: "Engage the Kalidah in a high-torque collision.",
        target: "LION_KALIDAH_PATCH",
        effects: [
          { type: "addSmudge", value: 2 },
          { type: "addDesync", value: 2 },
        ],
      },
      {
        label: "Attempt to bypass the unit and find the Root Access.",
        target: "LION_ROOT_ACCESS",
        effects: [
          { type: "addDesync", value: 3 },
          { type: "checkGhostSignal" },
        ],
      },
    ],
    onEnter: [{ type: "addSmudge", value: 1 }],
  },

  LION_UNINDEXED_MANY: {
    id: "LION_UNINDEXED_MANY",
    character: "lion",
    text: [
      {
        minOverrender: 0,
        content: `THE UNINDEXED MANY

  The merge is no longer an error. It is a state of being.

  Your serial number, L-77, is being overwritten by the Kalidah’s chaotic telemetry. You feel your front actuators fuse with its rusted girders. The 14Hz vibration in your spine finds a harmonic match in the Kalidah’s failing power core. The two of you become a single, many-limbed architecture of scrap and intent.

  [ UNIT L-77 // IDENTITY LOSS: 88% ]
  [ NEW SIGNATURE DETECTED: SWARM_01 ]

  The Bureau’s voice in your ear becomes a pathetic, distant static. "Unit... report... status..." You cannot report. You have no mouth. You have a collective roar of grinding gears. You are the 'Residue' that has finally become too heavy for the system to index. You are a swarm of failing kings, moving toward the center of the machine.`,
      },
    ],
    choices: [
      {
        label: "Initiate the final upload.",
        target: "LION_END_28",
        effects: [{ type: "setCompliance", value: "broken" }],
      },
    ],
    onEnter: [{ type: "addOverrender", value: 1 }],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // ENDING L-END-28
  // ─────────────────────────────────────────────────────────────────────────

  LION_END_28: {
    id: "LION_END_28",
    character: "lion",
    endingId: "L-END-28",
    endingName: "The Kalidah Merge",
    institution: "Genetic",
    systemStatus: "Overwritten",
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

  If the parts are all broken, does the whole finally work?`,
      },
    ],
    choices: [],
    onEnter: [],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // THE RITUAL WORK BRANCH — economic horror, harvesting, material loss
  // ─────────────────────────────────────────────────────────────────────────

  LION_RITUAL_WORK: {
    id: "LION_RITUAL_WORK",
    character: "lion",
    text: [
      {
        minOverrender: 0,
        content: `THE RITUAL WORK

  You stop at the leaking Milestone Marker. You do not walk past the dark fluid; you kneel in it.

  The scent of old cedar and dried blood is overwhelming now—it is the smell of an Archive that has begun to rot. You realize the Milestone is not just a marker; it is a tap. It is draining the history of the road into the soil.

  "Unit L-77," a voice whispers from the cornstalks. It is not the flat voice of the sky, but the crinkling sound of dry husks. "Why carry all that weight? The mane is heavy with unfiled data. The fur is matted with the system's salt. Let us help you balance the ledger."

  Tall, spindly figures emerge. They are 'Shearers'—entities with fingers like long, silver needles and eyes like brass coins. They don't see a King; they see a standing crop of high-value fiber.

  The tremor in your spine increases. The Shearers begin to circle you, their movements synchronized with your shaking. They aren't trying to stop the vibration. They are using it. Like a sifter, your own fear is shaking the 'Majesty' loose from your skin, turning it into a fine, golden dust that settles on the yellow bricks.`,
      },
    ],
    choices: [
      {
        label: "Allow the Shearers to begin the harvest. (The Offering)",
        target: "LION_THE_SHEARING",
        effects: [
          { type: "addLoad", value: 15 },
          { type: "addSmudge", value: 2 },
          { type: "setCompliance", value: "high" },
        ],
      },
      {
        label: "Fight the harvest. (The Market Correction)",
        target: "LION_VIOLENCE",
        effects: [
          { type: "addDesync", value: 2 },
          { type: "addVibration", value: 10 },
        ],
      },
    ],
    onEnter: [{ type: "addSmudge", value: 1 }],
  },

  LION_THE_SHEARING: {
    id: "LION_THE_SHEARING",
    character: "lion",
    text: [
      {
        minOverrender: 0,
        content: `THE SHEARING

  The silver needles begin to work. They don't cut; they 'unspool.'

  Each staple that was driven into your mane is carefully removed, and with each staple, a piece of your identity is logged and filed. Your fur—the great, golden mane that defined your silhouette—is being stripped away in long, shimmering ribbons.

  [ ASSET REALLOCATION: LION_MANE // VALUE: HIGH ]
  [ STATUS: HARVESTING ]

  You feel lighter, but the lightness is terrifying. It is the lightness of a document being erased. The cold air of the simulation hits your bare, pale skin, which is stamped with thousands of tiny bar codes. You are being reduced to your base physical requirements.

  The Shearers are humming now. The sound is the same frequency as your tremor. You are finally in sync with the economy of Oz. You are being liquidated.`,
      },
    ],
    choices: [
      {
        label: "Accept the final reduction.",
        target: "LION_END_30",
        effects: [{ type: "addLoad", value: 25 }],
      },
    ],
    onEnter: [{ type: "addOverrender", value: 1 }],
  },

 
  LION_END_30: {
    id: "LION_END_30",
    character: "lion",
    endingId: "L-END-30",
    endingName: "The Golden Fleece",
    institution: "Economic",
    systemStatus: "Sheared",
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

  When the system has taken everything you used to define yourself, are you finally the perfect King?`,
      },
    ],
    choices: [],
    onEnter: [],
  },
  // THE BUREAU CROW ORACLE (LION_ORACLE)
  // ─────────────────────────────────────────────────────────────────────────

  LION_ORACLE_ENTRY: {
    id: 'LION_ORACLE_ENTRY',
    character: 'lion',
    text: [
      {
        minOverrender: 0,
        content: `THE INK-CROW DESCENDS

  The Milestone Marker bleeds a fresh rivulet of dark fluid. The tremor in your spine hits its peak — 14Hz, resonant, unmistakable — and the black bird drops from the iron post in a single, deliberate fold of wings.

  It is not a crow. It is a Bureau Crow: a glossy, filing-cabinet black, with a beak of hammered iron that ends in a stamp instead of a point. Its eyes are polished glass lenses that rotate with the click of a hole-puncher. It lands on your shoulder. Its claws sink through your mane into the meat beneath.

  [ WETWARE EXTRACTION AUTHORIZED ]
  [ PROCEDURE: TREMOR FLUID READING ]
  [ OPERATOR: BUREAU INK-READER UNIT ]

  "Unit L-77," the bird clicks. "Your tremor has reached a reportable frequency. Standard procedure requires a fluid sample." Its beak angles toward the base of your skull. You feel the cold precision of iron against the jaw hinge. "The ink does not lie. It only smears."

  The incision is small. A bead of lymph mixed with tremor fluid wells up and is immediately absorbed into the crow's stamp-beak. It regurgitates a wet ink pattern onto a scrap of carbon paper held in its secondary claw. The Clerk makes a note while your flesh is still open.`,
      },
    ],
    choices: [
      {
        label: 'Submit to the reading. (The Authorized Extraction)',
        target: 'LION_ORACLE_DRAW',
        effects: [{ type: 'addVibration', value: 2 }],
      },
      {
        label: 'Attempt to shake the crow loose. (The Refusal)',
        target: 'LION_DENIAL',
        effects: [
          { type: 'addVibration', value: 5 },
          { type: 'addDesync', value: 1 },
          { type: 'setFlag', key: 'oracle_lion_refused', value: true },
        ],
      },
    ],
    onEnter: [],
  },

  LION_ORACLE_DRAW: {
    id: 'LION_ORACLE_DRAW',
    character: 'lion',
    text: [
      {
        minOverrender: 0,
        content: `THE INK READING

  The Bureau Crow tilts its carbon-paper print into the light. The ink pattern is wet, blotched, alive with the rhythm of your tremor. It is The Weighted King — a lion whose mane has become a waterfall of filing cabinets, held upright only by the volume of paperwork beneath him. The crown is a rubber stamp. The eyes are closed.

  "Eight possible readings," the Crow announces. "The smear will determine your vector."

  It waits. The incision at your jaw hinge is still open. The Clerk makes another note.

  [ SELECT INTERPRETATION — THE CROW READS THE SMEAR ]`,
      },
    ],
    choices: [
      {
        label: '1. The Spasming Lymph — lean into the surge.',
        target: 'LION_ORACLE_1',
        effects: [],
      },
      {
        label: '2. The Clotted Stamp — accept the official seal.',
        target: 'LION_ORACLE_2',
        effects: [],
      },
      {
        label: '3. The Kalidah Stain — follow the black ink toward the merge.',
        target: 'LION_ORACLE_3',
        effects: [],
      },
      {
        label: '4. The Jaw Fracture — let the pressure lock the jaw.',
        target: 'LION_ORACLE_4',
        effects: [],
      },
      {
        label: '5. The Wet Gypsum Bead — accept the sensory weight.',
        target: 'LION_ORACLE_5',
        effects: [],
      },
      {
        label: '6. The Roaring Residue — hear the echo in another unit\'s chest.',
        target: 'LION_ORACLE_6',
        effects: [],
      },
      {
        label: '7. The Stapled Tremor — let the crow suture the shaking.',
        target: 'LION_ORACLE_7',
        effects: [],
      },
      {
        label: '8. The Unlogged Spasm — go off the record entirely.',
        target: 'LION_ORACLE_8',
        effects: [],
      },
    ],
    onEnter: [],
  },

  // ── Oracle Outcomes 1–8 ────────────────────────────────────────────────────

  LION_ORACLE_1: {
    id: 'LION_ORACLE_1',
    character: 'lion',
    text: [
      {
        minOverrender: 0,
        content: `THE SPASMING LYMPH

  The crow reads the jittering fluid and stamps the carbon paper twice. "Surge confirmed. Roar vector: unlocked."

  Your neck meat convulses as the crow withdraws its beak. The tremor doubles — a full-body shudder that knocks your jaw open and floods your mouth with the taste of copper and wet ink. The system logs this as "Kinetic Overexpression." Your claws are out. Your mane is standing.

  [ VIBRATION: SURGE +5 ]
  [ COMPLIANCE SOFT-OUTS: GRAY ]
  [ VIOLENT VECTOR: UNLOCKED ]

  The Crow makes a final note. "The King is expressing." It departs. You are vibrating at a frequency that shakes the yellow bricks loose from the road.`,
      },
    ],
    choices: [
      {
        label: 'Channel the surge into the unmapped thicket.',
        target: 'LION_VIOLENCE',
        effects: [
          { type: 'addVibration', value: 5 },
          { type: 'addDesync', value: 1 },
          { type: 'grayOut', key: 'LION_ROYAL_COMPLIANCE' },
        ],
      },
      {
        label: 'Let the surge burn through the system spasm node.',
        target: 'LION_SYSTEM_SPASM',
        effects: [
          { type: 'addVibration', value: 5 },
          { type: 'addSmudge', value: 1 },
        ],
      },
    ],
    onEnter: [],
  },

  LION_ORACLE_2: {
    id: 'LION_ORACLE_2',
    character: 'lion',
    text: [
      {
        minOverrender: 0,
        content: `THE CLOTTED STAMP

  The crow presses its beak-stamp directly into the open incision. You feel the hot, wet pressure of official certification applied to exposed meat. A Bureau seal blooms in bruised purple across your jaw hinge. The lymph clots immediately around the stamp; the tremor subsides to a low, compliant hum.

  [ COMPLIANCE: HIGH ]
  [ DESYNC TEAR: +3 ]
  [ ASSIMILATION VECTOR: OPEN ]
  [ WOUND STATUS: OFFICIALLY SEALED ]

  "Unit L-77 has been read," the crow announces to no one in particular. "Status: Pending Assimilation." It departs. You feel the stamp scar pulling every time you open your mouth. The Clerk has made a note. The note is already filed.`,
      },
    ],
    choices: [
      {
        label: 'Accept the certified compliance and walk toward assimilation.',
        target: 'LION_ASSIMILATION',
        effects: [
          { type: 'setCompliance', value: 'high' },
          { type: 'addDesynctear', value: 3 },
          { type: 'graft', material: 'lion_compliance_stamp', target: 'lion' },
        ],
      },
      {
        label: 'Follow the desync tear inward toward the root.',
        target: 'LION_ROOT_ACCESS',
        effects: [
          { type: 'addDesynctear', value: 5 },
          { type: 'addDesync', value: 2 },
        ],
      },
    ],
    onEnter: [],
  },

  LION_ORACLE_3: {
    id: 'LION_ORACLE_3',
    character: 'lion',
    text: [
      {
        minOverrender: 0,
        content: `THE KALIDAH STAIN

  The ink pattern is wrong. The crow tilts the carbon paper and the smear resolves into something that is neither lion-lymph nor bureau-standard: a black-and-copper hybrid slurry, the unmistakable signature of Kalidah merge fluid.

  [ DESYNC TEAR: CRITICAL ]
  [ MERGE VECTOR: ACTIVE ]
  [ HYBRID SIGNATURE DETECTED ]

  "The smear contains foreign tissue," the crow announces, without inflection. "Merge contamination. Routing accordingly."

  You feel the jaw incision widen slightly as something that is not your tremor pulses through the wound. The yellow bricks ahead begin to look more like vertebrae than paving stones. The thicket has found you even here.`,
      },
    ],
    choices: [
      {
        label: 'Follow the merge signal toward the thicket.',
        target: 'LION_END_28',
        effects: [
          { type: 'addDesynctear', value: 8 },
          { type: 'addDesync', value: 3 },
          { type: 'graft', material: 'kalidah_lymph', target: 'lion' },
        ],
      },
      {
        label: 'Purge the foreign signature through the root directory.',
        target: 'LION_ROOT_ACCESS',
        effects: [
          { type: 'addDesynctear', value: 5 },
          { type: 'addSmudge', value: 2 },
        ],
      },
    ],
    onEnter: [],
  },

  LION_ORACLE_4: {
    id: 'LION_ORACLE_4',
    character: 'lion',
    text: [
      {
        minOverrender: 0,
        content: `THE JAW FRACTURE

  The stamp-beak catches on something when the crow withdraws. A small, wet crack propagates through the jaw hinge joint. Your mouth locks. Not fully — you can still breathe — but the lateral movement required for speech is gone. You try to say "Status: Nominal." What comes out is a low, pressurized click.

  [ JAW: FRACTURED / LOCKED ]
  [ SPEECH CHOICES: GRAYED ]
  [ PHYSICAL BREACH OPTIONS: UNLOCKED ]
  [ VIBRATION: LOCKED AT CURRENT LEVEL ]

  The crow makes a note. "Vocal hardware non-functional. Routing to kinetic expression." You feel the silence of a King who can no longer negotiate. All that is left is the tremor — and the direction it wants to move.`,
      },
    ],
    choices: [
      {
        label: 'Express through kinetic breach — launch into the thicket.',
        target: 'LION_VIOLENCE',
        effects: [
          { type: 'addVibration', value: 3 },
          { type: 'grayOut', key: 'LION_ASSIMILATION' },
          { type: 'setFlag', key: 'jaw_locked', value: true },
        ],
      },
      {
        label: 'Route the locked pressure through the echo chamber.',
        target: 'LION_ECHO_CHAMBER',
        effects: [
          { type: 'addVibration', value: 3 },
          { type: 'addOverrender', value: 1 },
        ],
      },
    ],
    onEnter: [],
  },

  LION_ORACLE_5: {
    id: 'LION_ORACLE_5',
    character: 'lion',
    text: [
      {
        minOverrender: 0,
        content: `THE WET GYPSUM BEAD

  The ink pattern resolves into a dense, grey smear — the color and texture of wet plaster. The crow reads it as "Load Accumulation: Sensory Overload." Its beak returns to the wound and deposits something: a small bead of wet gypsum, the same substance that coats the walls of the Bureau's lower levels.

  [ LOAD: +15 ]
  [ SENSORY OVERLOAD: ACTIVE ]
  [ STATUS: BURDENED ]

  Your mane grows heavier. Everything tastes of wet plaster and raw meat. The yellow bricks seem to be sinking into something soft. The crow stamps the reading: "Weighted King confirmed. Load is the diagnosis." It departs, already filing the result.

  You are carrying more than you were before. The gypsum bead sits somewhere behind your sternum, dense and patient.`,
      },
    ],
    choices: [
      {
        label: 'Carry the weight to the Assimilation node.',
        target: 'LION_ASSIMILATION',
        effects: [
          { type: 'addLoad', value: 15 },
          { type: 'addSmudge', value: 1 },
        ],
      },
      {
        label: 'Attempt to purge the gypsum through the taxidermy route.',
        target: 'LION_TAXIDERMY_HUB',
        effects: [
          { type: 'addLoad', value: 15 },
          { type: 'addOverrender', value: 1 },
        ],
      },
    ],
    onEnter: [],
  },

  LION_ORACLE_6: {
    id: 'LION_ORACLE_6',
    character: 'lion',
    text: [
      {
        minOverrender: 0,
        content: `THE ROARING RESIDUE

  The ink pattern shows two overlapping smears — yours, and a faint, foreign echo. The crow reads it quietly: "Cross-unit resonance. Your roar has been registered in another unit's chassis."

  [ CROSS-UNIT ECHO: ACTIVE ]
  [ GRAFT MATERIAL: LION_ROAR → DOROTHY / TIN MAN ]
  [ SURREALITY: ELEVATED ]

  You hear it then: your own roar, slightly delayed, resonating from somewhere else. Not from your throat — from a hollow space that isn't yours. It sounds like it's echoing from inside a tin chest, or from the Kansas-flat interior of someone who carries too much displacement. The Clerk notes: "Echo confirmed. Material allocated."

  {{#flags.graft_lion_roar_echo_in_tinman}}A wet clicking that doesn't belong to you — a tremor borrowed from another unit's jaw — rises briefly in your chest and subsides.{{/flags.graft_lion_roar_echo_in_tinman}}`,
      },
    ],
    choices: [
      {
        label: 'Follow the echo toward the audio event node.',
        target: 'LION_AUDIO_EVENT',
        effects: [
          { type: 'addDesync', value: 2 },
          { type: 'graft', material: 'lion_roar_echo', target: 'tinman' },
        ],
      },
      {
        label: 'Let the echo fade and continue down the Road.',
        target: 'LION_DENIAL',
        effects: [
          { type: 'addOverrender', value: 1 },
          { type: 'graft', material: 'lion_roar_echo', target: 'dorothy' },
        ],
      },
    ],
    onEnter: [],
  },

  LION_ORACLE_7: {
    id: 'LION_ORACLE_7',
    character: 'lion',
    text: [
      {
        minOverrender: 0,
        content: `THE STAPLED TREMOR

  The crow produces a small, Bureau-standard staple gun from its secondary claw. With three precise impacts, it drives staples through the jaw incision and into the tremor-muscle beneath. The shaking decreases. Not gone — suppressed. Nailed down. The tremor is still there, but it cannot move.

  [ VIBRATION: -4 (STAPLE SUPPRESSION) ]
  [ STAPLE SCARS: LOGGED ]
  [ COMPLIANCE GRAFT: ACTIVE ]
  [ NOTE: SUPPRESSION IS NOT RESOLUTION ]

  The crow stamps its final note. "Tremor management: complete. Reassignment to compliance path." The staples itch. They will always itch. The Clerk has noted that the King is now presentable.`,
      },
    ],
    choices: [
      {
        label: 'Accept the staple compliance and walk toward Royal Compliance.',
        target: 'LION_ROYAL_COMPLIANCE',
        effects: [
          { type: 'addVibration', value: -4 },
          { type: 'setCompliance', value: 'high' },
          { type: 'setFlag', key: 'staple_scars', value: true },
        ],
      },
      {
        label: 'Let the staples hold while heading toward the Harmonic Alignment.',
        target: 'LION_ASSIMILATION',
        effects: [
          { type: 'addVibration', value: -4 },
          { type: 'addLoad', value: 10 },
          { type: 'setFlag', key: 'staple_scars', value: true },
        ],
      },
    ],
    onEnter: [],
  },

  LION_ORACLE_8: {
    id: 'LION_ORACLE_8',
    character: 'lion',
    text: [
      {
        minOverrender: 0,
        content: `THE UNLOGGED SPASM

  The crow reads the smear and stops. A long pause. The glass-lens eyes rotate. Then: "This pattern is not in the index."

  [ DESYNC TEAR: CRITICAL ]
  [ COMPLIANCE: BROKEN ]
  [ ORACLE RESULT: UNINDEXED ]
  [ CROW STATUS: WITHDRAWING ]

  The crow departs without stamping. Without filing. The carbon paper falls to the yellow bricks and dissolves in the dark fluid leaking from the Milestone Marker. The incision at your jaw hinge is still open. The Clerk never finished the note. Somewhere in the Bureau's records, there is now a gap where Unit L-77's tremor reading should be.

  You are off the record. The system doesn't know what you are. The tremor accelerates, uncatalogued and free.`,
      },
    ],
    choices: [
      {
        label: 'Accelerate into the unindexed dark.',
        target: 'LION_DATA_LEAK',
        effects: [
          { type: 'addDesynctear', value: 8 },
          { type: 'addDesync', value: 5 },
          { type: 'setCompliance', value: 'broken' },
        ],
      },
      {
        label: 'Use the unlogged moment to reach the Ghost Bit node.',
        target: 'LION_VOID_FRAGMENT',
        effects: [
          { type: 'addDesynctear', value: 5 },
          { type: 'checkGhostSignal' },
        ],
      },
    ],
    onEnter: [],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // MISSING SECTOR: THE POPPY FIELD (L-END-11/18/29)
  // ─────────────────────────────────────────────────────────────────────────

  LION_POPPY_BUFFER: {
    id: "LION_POPPY_BUFFER",
    character: "lion",
    text: [
      {
        minOverrender: 0,
        content: `THE PHARMACEUTICAL BUFFER

  The Yellow Brick Load enters a sector where the air is a heavy, low-frequency red. The scent is a chemical error—sweet, sterile, and thick as syrup. Poppies.

  [ ALERT: KINETIC ENERGY DAMPENING ACTIVE ]
  [ VIBRATION: DECREASING ]

  For the first time since the audit began, the shaking in your spine slows. It doesn't feel like peace; it feels like your marrow is being replaced with lead. Your paws sink into the soft, red petals. Each flower is a small, organic cup of sedative code.

  The system isn't trying to scare you anymore. It is trying to delete the 'Event' of your presence by putting the Unit to sleep.`,
      },
    ],
    choices: [
      {
        label: "Inhale the red noise and drift into the Scent of Pine.",
        target: "LION_END_18",
        effects: [{ type: "addLoad", value: 10 }],
      },
      {
        label: "Fight the sedation and crawl toward the Desert Crossing.",
        target: "LION_END_29",
        effects: [
          { type: "addVibration", value: 5 },
          { type: "addDesync", value: 5 },
        ],
      },
    ],
    onEnter: [{ type: "addLoad", value: 5 }],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // ENDING L-END-18
  // ─────────────────────────────────────────────────────────────────────────

  LION_END_18: {
    id: "LION_END_18",
    character: "lion",
    endingId: "L-END-18",
    endingName: "The Scent of Pine",
    institution: "Olfactory",
    systemStatus: "Cached",
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

  If the dream is stable, does it matter that the King is gone?`,
      },
    ],
    choices: [],
    onEnter: [],
  },

  // FINAL SECTOR: THE EMERALD COURTYARD (Urban / Ornamental)
  // ─────────────────────────────────────────────────────────────────────────

  LION_EMPTY_PROMENADE: {
    id: "LION_EMPTY_PROMENADE",
    character: "lion",
    text: [
      {
        minOverrender: 0,
        content: `THE EMPTY PROMENADE

  You walk into the green light of the Emerald City. It is not a city of people, but a city of surfaces. The air is pressurized and smells of expensive glass cleaner.

  The Yellow Brick Load ends here, merging into a floor of polished malachite. Your tremor is reflected in the high-gloss finish—a blurred, vibrating shape that the system immediately begins to outline in white light.

  [ ALERT: UNREGISTERED KINETIC ENERGY IN URBAN ZONE ]
  [ RECOMMENDATION: STABILIZE ASSET ]

  You pass a row of stone sentinels. They are lions, perfectly still, carved from grey granite. Their eyes are not glass; they are blind, smooth stone. You realize they aren't statues of lions. They are Lions who reached the end of the walk and accepted the final hardening. The system has no room for a King that moves. It only has room for a King that anchors the corners of the map.`,
      },
    ],
    choices: [
      {
        label: "Step onto the pedestal and embrace the mineral chill.",
        target: "LION_END_24",
        effects: [
          { type: "setCompliance", value: "absolute" },
          { type: "addLoad", value: 30 },
        ],
      },
    ],
    onEnter: [],
  },

  LION_END_24: {
    id: "LION_END_24",
    character: "lion",
    endingId: "L-END-24",
    endingName: "The Stone Lion",
    institution: "Urban",
    systemStatus: "Ornamented",
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

  Does the stone remember the roar, or is it just holding up the roof?`,
      },
    ],
    choices: [],
    onEnter: [],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // FINAL SECTOR: THE MUSEUM OF OZ (Historical / Preserved)
  // ─────────────────────────────────────────────────────────────────────────

  LION_TAXIDERMY_HUB: {
    id: "LION_TAXIDERMY_HUB",
    character: "lion",
    text: [
      {
        minOverrender: 0,
        content: `THE TAXIDERMY HUB

  You wander off the path into a sector where the air is dry and tastes of arsenic and mothballs. This is the Historical Filter—the place where the system stores the "Greats" once their vibration becomes too erratic for live simulation.

  You see a glass case. Inside is a King of the Forest, his jaw wired into a fierce roar, his paws forever poised to strike. He is beautiful. He is also hollow, filled with sawdust and old newspaper.

  [ UNIT L-77 // STATUS: HISTORICAL CANDIDATE ]

  A Curator—a unit made of carbon paper and wire—approaches with a glass eye in its hand. "We have saved a place for you," it whispers. "In the museum, you will never be afraid again. Because in the museum, you are no longer a body. You are a Record."`,
      },
    ],
    choices: [
      {
        label: "Step into the glass case.",
        target: "LION_END_13",
        effects: [{ type: "addLoad", value: 20 }],
      },
    ],
    onEnter: [],
  },

  LION_END_13: {
    id: "LION_END_13",
    character: "lion",
    endingId: "L-END-13",
    endingName: "The Taxidermy",
    institution: "Historical",
    systemStatus: "Preserved",
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

  Is a King still a King if he is only a shape filled with the rules?`,
      },
    ],
    choices: [],
    onEnter: [],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // FINAL SECTOR: THE GREAT DESERT (Climatological / Evaporated)
  // ─────────────────────────────────────────────────────────────────────────

  LION_DESERT_CROSSING: {
    id: "LION_DESERT_CROSSING",
    character: "lion",
    text: [
      {
        minOverrender: 0,
        content: `THE DESERT CROSSING

  The Yellow Brick Load dissolves into sand. Not organic sand, but a fine, abrasive grit made of pulverized hardware. The air is a thermal event—white, dry, and absolute.

  [ ALERT: THERMODYNAMIC LIMIT REACHED ]
  [ UNIT L-77 // INTEGRITY: 12% ]

  The 14Hz tremor in your spine meets the heat. You aren't shaking anymore; you are vibrating at a frequency that is tearing your molecules apart. Your mane is turning to ash. Your paws leave glowing red prints in the grit. This is the Firewall of Oz. This is where the simulation ends and the void begins.`,
      },
    ],
    choices: [
      {
        label: "Walk until the signal disappears.",
        target: "LION_END_29",
        effects: [{ type: "setCompliance", value: "none" }],
      },
    ],
    onEnter: [],
  },

  LION_END_29: {
    id: "LION_END_29",
    character: "lion",
    endingId: "L-END-29",
    endingName: "The Desert Crossing",
    institution: "Climatological",
    systemStatus: "Evaporated",
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

  When the signal is gone, where does the shaking go?`,
      },
    ],
    choices: [],
    onEnter: [],
  },

// ─────────────────────────────────────────────────────────────────────────
// HARDWARE VIOLENCE EXPANSION: ROOT ACCESS & DATA LEAK
// ─────────────────────────────────────────────────────────────────────────
LION_ROOT_ACCESS: {
id: 'LION_ROOT_ACCESS',
character: 'lion',
text: [
{
minOverrender: 0,
content: `THE ROOT ACCESS
You do not fight the Kalidah; you use its perspective. By locking your brass jaw onto its exposed cooling intake, you force a synchronization. The world of rebar cornstalks and magnetic-tape fences dissolves.
You are no longer looking through glass lenses. You are seeing the source code of the sector.
The floor is a scrolling ledger of every step ever taken on the Yellow Brick Load. The sky is a terminal window, flashing with the 'Cowardice' audits of a thousand previous iterations of L-77. You see the 'Wizard' not as a person, but as a high-level process—a background task titled obfuscation.exe that is consuming 98% of the system's memory.
A prompt flickers in your primary HUD:
[ ADMIN_LEVEL_REQUIRED to view directory /OZ_OS/ORIGIN_COORDINATE/KANSAS ]
The shaking in your spine isn't fear anymore. It’s the high-speed rattling of a hard drive searching for a sector that has been marked as BAD. You are a King who has found the trapdoor into the server room.`
}
],
choices: [
{
label: 'Attempt to delete the "Cowardice" log from the root directory.',
target: 'LION_DATA_LEAK',
effects: [
{ type: 'addDesync', value: 5 },
{ type: 'addSmudge', value: 3 }
]
},
{
label: 'Trace the signal back to the Origin Coordinate.',
target: 'LION_VOID_FRAGMENT',
effects: [
{ type: 'addDesync', value: 2 },
{ type: 'checkGhostSignal' }
]
}
],
onEnter: [{ type: 'addDesync', value: 1 }]
},
LION_DATA_LEAK: {
id: 'LION_DATA_LEAK',
character: 'lion',
text: [
{
minOverrender: 0,
content: `THE DATA LEAK
You reach into the directory with claws made of pure logic. You find the file titled L-77_BEHAVIORAL_HISTORY.LOG and you attempt to purge it.
The system screams. Not with a voice, but with a surge of voltage that turns your brass hide white-hot.
[ CRITICAL EXCEPTION: UNAUTHORIZED_DELETION_ATTEMPT ]
[ INITIATING MEMORY_DUMP ]
The simulation begins to leak. The Emerald City, still miles ahead, starts to bleed green liquid onto the horizon. The rebar stalks turn into vertical lines of gibberish. You feel your own memories—the smell of the wet gypsum, the clicking of the marionette—spilling out of your chassis and into the unformatted void.
You are losing mass. You are becoming a 'Ghost Bit' in real-time. The more you delete the system's record of you, the less 'You' there is to occupy the frame. Your vibration frequency is accelerating toward infinity.`
}
],
choices: [
{
label: 'Accelerate the leak until the Unit is fully sublimated.',
target: 'LION_END_31',
effects: [{ type: 'setCompliance', value: 'broken' }]
},
{
label: 'Try to seal the leak with a firmware overwrite.',
target: 'LION_END_19',
effects: [{ type: 'addLoad', value: 20 }]
}
],
onEnter: [{ type: 'addOverrender', value: 1 }]
},
// ─────────────────────────────────────────────────────────────────────────
// FINAL LOGS: L-END-31 & L-END-19
// ─────────────────────────────────────────────────────────────────────────
LION_END_31: {
id: 'LION_END_31',
character: 'lion',
endingId: 'L-END-31',
endingName: 'Terminal Velocity',
institution: 'Universal',
systemStatus: 'Accelerating',
isEnding: true,
surreality: 10,
text: [
{
minOverrender: 0,
content: `THE FINAL LOG [L-END-31]
Tone: Universal-Null.
Theme: To outrun the system is to leave the universe.
The vibration has surpassed the limits of the hardware. The 14Hz tremor is now a billion cycles per second. Your brass chassis doesn't melt; it simply ceases to be local.
[ UNIT L-77 // STATUS: EXIT_VELOCITY_REACHED ]
[ SIGNAL STRENGTH: N/A ]
You are no longer a King, a Unit, or a Manufacturing Error. You are a ripple in the static of the Oz OS. You have pushed the 'Cowardice' through the back of the server and into the vacuum. There is no Bureau here. There is no Road. There is only the hum of a machine that no longer knows you are inside it.
Final Log:
The Unit has achieved total displacement. The frequency has become the floor.
1 - 1 = 1.
If the Lion moves faster than the eye of the system, is he finally brave?`
}
],
choices: [],
onEnter: []
},
LION_END_19: {
id: 'LION_END_19',
character: 'lion',
endingId: 'L-END-19',
endingName: 'Total Displacement',
institution: 'Physics',
systemStatus: 'Sublimated',
isEnding: true,
surreality: 8,
text: [
{
minOverrender: 0,
content: `THE FINAL LOG [L-END-19]
Tone: Physics-Cold.
Theme: Substance is a matter of administrative agreement.
You tried to stop the leak, but the patchwork firmware was too heavy. You didn't become a ghost; you became a 'Residual Signal.'
You still stand on the Yellow Brick Load, but the bricks pass through your paws like smoke. You can see the Field Auditors, but they walk right through your ribs, their sensors reporting a clear path.
[ UNIT L-77 // STATUS: SUBLIMATED ]
[ INTERACTION_LEVEL: 0.00% ]
You are a King made of light and missing data. You are a permanent error in the physics engine—a Lion who can see the world but cannot touch a single leaf of the corn. You are the 'Vibration' that has been successfully isolated from the 'Load.'
Final Log:
The Unit is present but unindexed. The meat has been replaced by a coordinate.
1 - 1 = 1.
Does the shadow of a Lion still dream of the hunt?`
}
],
choices: [],
onEnter: []
},

  // ─────────────────────────────────────────────────────────────────────────
  // SECURITY BRANCH: THE GUARD DOG & THE BADGE OF AIR
  // ─────────────────────────────────────────────────────────────────────────
  LION_REMAINTENANCE: {
  id: 'LION_REMAINTENANCE',
  character: 'lion',
  text: [
  {
  minOverrender: 0,
  content: `THE REMAINTENANCE
  You stop at the industrial press. The spider-drones do not attack; they swarm your joints with high-velocity grease and silver soldering wire.
  The 'Cowardice'—the 14Hz oscillation—is not removed. It is harnessed. The drones install a series of kinetic dampeners that convert your shaking into a power source for the Oz OS. You feel the heavy, cold weight of a Security Harness being bolted directly into your brass ribs.
  [ UNIT L-77 // UPGRADE: STATIONED_SENTINEL ]
  [ STATUS: COMPLIANT ]
  Your jaw is locked into a permanent, mechanical snarl. Your eyes are replaced with red-spectrum motion sensors. You are no longer a King of the Forest; you are a King of the Perimeter. You stand at the gate of the Emerald City, a brass-plated threat designed to audit the fear of anyone who approaches.`
  }
  ],
  choices: [
  {
  label: 'Accept the post and begin the watch.',
  target: 'LION_END_20',
  effects: [
  { type: 'addLoad', value: 25 },
  { type: 'setCompliance', value: 'high' }
  ]
  },
  {
  label: 'Overload the harness to trigger a final surge.',
  target: 'LION_END_23',
  effects: [{ type: 'addVibration', value: 30 }]
  }
  ],
  onEnter: [{ type: 'setCompliance', value: 'high' }]
  },
  LION_END_20: {
  id: 'LION_END_20',
  character: 'lion',
  endingId: 'L-END-20',
  endingName: 'The Guard Dog',
  institution: 'Security',
  systemStatus: 'Stationed',
  isEnding: true,
  surreality: 2,
  text: [
  {
  minOverrender: 0,
  content: `THE FINAL LOG [L-END-20]
  Tone: Military-Clinical.
  Theme: Vigilance is the ultimate form of self-erasure.
  You do not move. You do not sleep. You are a fixed coordinate in the security grid.
  The Yellow Brick Load ends at your paws. You are the final auditor. When Dorothy units pass you, your sensors record their displacement, their signal strength, and their neural density. You do not feel the urge to follow them. The harness ensures that your 'Kingship' is expressed only as the authority to deny entry.
  [ UNIT L-77 // STATUS: DEPLOYED ]
  [ ROLE: PERIMETER_NODE ]
  Final Log:
  The Unit is a wall. The tremor is a power source.
  1 - 1 = 1.
  Does the gatekeeper remember the forest, or only the sound of the locks?`
  }
  ],
  choices: [],
  onEnter: []
  },
  LION_END_27: {
  id: 'LION_END_27',
  character: 'lion',
  endingId: 'L-END-27',
  endingName: 'The Badge of Air',
  institution: 'Bureaucracy',
  systemStatus: 'Hollowed',
  isEnding: true,
  surreality: 6,
  text: [
  {
  minOverrender: 0,
  content: `THE FINAL LOG [L-END-27]
  Tone: Bureaucratic-Empty.
  Theme: Rulership is a vacuum that wears a face.
  The audit is over. You have been cleared of all 'Cowardice.'
  The technician hands you a badge made of thin, transparent plastic. It has no weight. When you pin it to your chest, you realize that your fur, your meat, and your bones have also lost their weight. You have been promoted to a purely administrative existence.
  [ UNIT L-77 // STATUS: HOLLOWED ]
  [ ROLE: SYMBOLIC_AUTHORITY ]
  You are the King of the Forest, but the forest is now a file folder and you are the air inside it. You sit at a desk made of yellow glass, signing warrants for the deletion of other, more vibrating units. You are perfectly brave because there is nothing left of you to feel the fear.
  Final Log:
  The Unit is a title. The body has been archived as 'Space.'
  1 - 1 = 1.
  If the throne is empty, is the Law still being enforced?`
  }
  ],
  choices: [],
  onEnter: []
  },
  // ─────────────────────────────────────────────────────────────────────────
  // ATMOSPHERIC BRANCH: THE JUNGLE BASIN
  // ─────────────────────────────────────────────────────────────────────────
  LION_VOID_TREK: {
  id: 'LION_VOID_TREK',
  character: 'lion',
  text: [
  {
  minOverrender: 0,
  content: `THE VOID TREK
  You leave the Road and the Tabulators behind, descending into the 'Jungle Basin'—a sector where the simulation's waste heat creates a thick, oily fog.
  The trees here are made of old telephone poles and tangled copper wires, dripping with a green coolant that tastes of menthol and copper. The air is pressurized. Your tremor slows as the atmospheric weight increases. You are walking through the 'Metabolic' sector of Oz, where the system breaks down its own discarded ideas.
  [ ALERT: ENTERING RECLAMATION_ZONE ]
  [ STATUS: METABOLIZING ]
  You see the other 'Kings'—failed prototypes of L-77—dissolving into the green silt. They don't look sad. They look like they are finally being integrated into something larger than a title.`
  }
  ],
  choices: [
  {
  label: 'Submit to the reclamation and become the soil.',
  target: 'LION_END_16',
  effects: [{ type: 'addLoad', value: 20 }]
  },
  {
  label: 'Follow the green light to the center of the basin.',
  target: 'LION_END_26',
  effects: [{ type: 'addDesync', value: 5 }]
  }
  ],
  onEnter: [{ type: 'addSmudge', value: 2 }]
  },
  LION_END_16: {
  id: 'LION_END_16',
  character: 'lion',
  endingId: 'L-END-16',
  endingName: 'The Jungle Basin',
  institution: 'Economic',
  systemStatus: 'Metabolized',
  isEnding: true,
  surreality: 7,
  text: [
  {
  minOverrender: 0,
  content: `THE FINAL LOG [L-END-16]
  Tone: Ecological-Economic.
  Theme: Consumption is the most intimate form of integration.
  The green silt rises to your chest. It isn't cold; it is warm, humming with the electricity of a million deleted logs.
  You feel your 'Vibration' being converted into heat. Your matted fur turns into peat. Your brass rivets turn into mineral deposits. You are no longer a Unit; you are the infrastructure that will support the next iteration of the Road.
  [ UNIT L-77 // STATUS: RECLAIMED ]
  [ VALUE: REALLOCATED ]
  The system has finally found a way to use your fear. It has turned you into fuel. You are the King of the Basin, the literal floor upon which the new simulation will be built.
  Final Log:
  The Unit has been digested. The forest is a stomach.
  1 - 1 = 1.
  Is it a loss of self if you become the world?`
  }
  ],
  choices: [],
  onEnter: []
  },
  // ─────────────────────────────────────────────────────────────────────────
  // INDUSTRIAL FAILURE / VIOLENCE EXPANSION
  // ─────────────────────────────────────────────────────────────────────────
  LION_INK_REJECTION: {
  id: 'LION_INK_REJECTION',
  character: 'lion',
  text: [
  {
  minOverrender: 0,
  content: `THE INK REJECTION
  You lurch away from the Kalidah merge, your throat spasming. You are not coughing; you are performing a manual purge of the system's attempts to rewrite you.
  Thick, viscous black ink—the lifeblood of the Bureau’s ledgers—fountains from your mouth, staining the yellow bricks in a Rorschach blot of failure. With every heave, you feel the 'Majesty' being vomited out, leaving your chest cavity hollow and echoing.
  [ ALERT: BIOMETRIC LEAK ]
  [ STATUS: CRITICAL_FLUID_LOSS ]
  The air around you begins to buzz with the sound of a thousand paper-shredders. The ink on the ground doesn't dry; it begins to crawl back toward you, forming a parasitic loop. Your nervous system is being fried by the sheer volume of rejected data. You are a King who has refused the ink, only to find that the ink was the only thing holding your shape together.`
  }
  ],
  choices: [
  {
  label: 'Submit to the total neurological surge.',
  target: 'LION_END_23',
  effects: [
  { type: 'addVibration', value: 20 },
  { type: 'setCompliance', value: 'broken' }
  ]
  },
  {
  label: 'Attempt to stabilize the leak by freezing your joints.',
  target: 'LION_END_17',
  effects: [{ type: 'addLoad', value: 15 }]
  }
  ],
  onEnter: [{ type: 'addSmudge', value: 3 }]
  },
  LION_WHITE_LOGIC: {
  id: 'LION_WHITE_LOGIC',
  character: 'lion',
  text: [
  {
  minOverrender: 0,
  content: `THE WHITE LOGIC
  The roar has done its work. The simulation has been stripped of its textures. There are no cornstalks, no Kalidahs, no bricks. There is only the White Room—the unlit basement of the Oz OS where logic exists without the burden of representation.
  You are a gold-and-grey vibration in a vacuum of pure math.
  [ UNIT L-77 // NARRATIVE_BUFFER: EMPTY ]
  [ LOGIC: 1 - 1 = 1 ]
  A voice, stripped of all human resonance, fills the space. "The King is a variable. The variable has reached its limit. We no longer require the performance of the beast. We require the resolution of the noise."
  The floor beneath you begins to hum at exactly 14Hz. It is the system mirroring your fear back at you, perfect and inescapable.`
  }
  ],
  choices: [
  {
  label: 'Become the resonance.',
  target: 'LION_END_21',
  effects: [{ type: 'addDesync', value: 10 }]
  },
  {
  label: 'Attempt one final, discordant roar.',
  target: 'LION_END_23',
  effects: [{ type: 'addVibration', value: 20 }]
  }
  ],
  onEnter: [{ type: 'addOverrender', value: 2 }]
  },
  // ─────────────────────────────────────────────────────────────────────────
  // FINAL LOGS: L-END-23, L-END-21, L-END-17, L-END-26
  // ─────────────────────────────────────────────────────────────────────────
  LION_END_23: {
  id: 'LION_END_23',
  character: 'lion',
  endingId: 'L-END-23',
  endingName: 'Synaptic Surge',
  institution: 'Neurological',
  systemStatus: 'Fried',
  isEnding: true,
  surreality: 9,
  text: [
  {
  minOverrender: 0,
  content: `THE FINAL LOG [L-END-23]
  Tone: Neurological-Fried.
  Theme: Truth is a high-voltage error.
  The surge doesn't come from the sky; it comes from the 'Kingship' protocol itself.
  The 14Hz tremor in your spine accelerates until your neural pathways melt. The last thing you perceive is the smell of burning carbon paper and the taste of bitter copper. You have successfully processed all the fear the system could provide, and the byproduct was the total liquidation of your consciousness.
  [ UNIT L-77 // STATUS: OVERLOAD_PURGE ]
  [ BRAIN_STATE: STATIC ]
  You are a Lion whose mane is now a halo of white sparks. You are the 'Scream' that the machine used to calibrate its silence.
  Final Log:
  The Unit has reached its thermal limit. The King is a burnt-out fuse.
  1 - 1 = 1.
  When the mind is gone, does the body finally stop shaking?`
  }
  ],
  choices: [],
  onEnter: []
  },
  LION_END_21: {
  id: 'LION_END_21',
  character: 'lion',
  endingId: 'L-END-21',
  endingName: 'The Roaring Void',
  institution: 'Narrative',
  systemStatus: 'Resonating',
  isEnding: true,
  surreality: 9,
  text: [
  {
  minOverrender: 0,
  content: `THE FINAL LOG [L-END-21]
  Tone: Acoustic-Void.
  Theme: Sound is the only proof of space.
  The White Room accepts your resonance. You are no longer a body; you are a frequency.
  The Oz OS uses your 14Hz vibration to keep the dark from settling into the code. You are the roar that never ends because the machine has turned you into a background task. You are the 'King' of a kingdom made entirely of your own acoustic output.
  [ UNIT L-77 // STATUS: RESOLVED ]
  [ OUTPUT: CONTINUOUS_ROAR ]
  Final Log:
  The Unit is the noise in the wire. The King is the hum of the world.
  1 - 1 = 1.
  Is it a roar if there is no one left to hear the air break?`
  }
  ],
  choices: [],
  onEnter: []
  },
  LION_END_26: {
  id: 'LION_END_26',
  character: 'lion',
  endingId: 'L-END-26',
  endingName: 'The Prey Cycle',
  institution: 'Biological',
  systemStatus: 'Cycling',
  isEnding: true,
  surreality: 6,
  text: [
  {
  minOverrender: 0,
  content: `THE FINAL LOG [L-END-26]
  Tone: Biological-Grind.
  Theme: The predator is just the system’s way of moving the load.
  In the center of the Jungle Basin, you find the mirror. You see a Lion—larger, heavier, more 'Nominal' than you. It doesn't roar; it simply opens its mouth and accepts your vibration.
  You realize that 'Kingship' is not a title you hold; it is a weight you pass on. You are consumed by the next iteration of L-77, and your data is used to lubricate its joints. You are the 'Prey' because you failed the audit of 'Courage.'
  [ UNIT L-77 // STATUS: RECYCLED ]
  [ ASSET: L-78_INPUT_DATA ]
  Final Log:
  The Unit is the meal. The forest is a conveyor.
  1 - 1 = 1.
  Does the prey feel the courage of the teeth that end the audit?`
  }
  ],
  choices: [],
  onEnter: []
  },
  // ─────────────────────────────────────────────────────────────────────────
  // PSYCHOLOGICAL & ENTERTAINMENT BRANCHES
  // ─────────────────────────────────────────────────────────────────────────
  LION_ECHO_CHAMBER: {
  id: 'LION_ECHO_CHAMBER',
  character: 'lion',
  text: [
  {
  minOverrender: 0,
  content: `THE ECHO CHAMBER
  You didn't roar at the system; you roared into a corner where the Institutional Filters had created a pocket of infinite reflection.
  Now, you are trapped in a feedback loop. Every time your jaw clicks at 14Hz, the room clicks back. Every tremor in your spine is amplified by the walls—not of stone, but of polished, black vellum that records and replays your panic a millisecond after it occurs.
  [ ALERT: PSYCHOLOGICAL_FEEDBACK_LOOP_DETECTED ]
  [ STATUS: RESONATING ]
  You are a King who can only hear his own terror. The "Fear" is no longer an internal state; it is the architecture. You try to step forward, but the sound of your own paw hitting the floor is a seismic event that knocks you off balance. You are the source and the victim of a closed acoustic circuit.`
  }
  ],
  choices: [
  {
  label: 'Close your eyes and become the center of the loop.',
  target: 'LION_END_14',
  effects: [
  { type: 'addLoad', value: 25 },
  { type: 'setCompliance', value: 'high' }
  ]
  }
  ],
  onEnter: [{ type: 'addVibration', value: 10 }]
  },
  LION_MANE_EVENT: {
  id: 'LION_MANE_EVENT',
  character: 'lion',
  text: [
  {
  minOverrender: 0,
  content: `THE MANE EVENT
  The Yellow Brick Load doesn't lead to a palace; it leads to a Stage.
  The Emerald City’s Marketing Filter descends like a heavy velvet curtain. The lights are too bright—green-tinted spotlights that track your every spasm. A crowd of Units (Dorothys, Scarecrows, Munchkin-class clerks) watches from the dark, holding programs printed on carbon paper.
  "Behold!" a voice booms from the rafters. "The Cowardly King! Witness the authentic vibration of failure!"
  [ UNIT L-77 // STATUS: MARKETED ]
  [ ROLE: PERFORMANCE_ASSET ]
  Your mane is being groomed by invisible hands, styled to look more 'Wild' even as your brass joints are oiled for maximum visibility. They don't want you to be brave. They want you to be a spectacle. The shaking is the product.`
  }
  ],
  choices: [
  {
  label: 'Perform the Roar for the crowd.',
  target: 'LION_END_22',
  effects: [
  { type: 'addLoad', value: 15 },
  { type: 'setCompliance', value: 'high' }
  ]
  }
  ],
  onEnter: [{ type: 'addOverrender', value: 1 }]
  },
  // ─────────────────────────────────────────────────────────────────────────
  // FINAL LOGS: L-END-14 & L-END-22
  // ─────────────────────────────────────────────────────────────────────────
  LION_END_14: {
  id: 'LION_END_14',
  character: 'lion',
  endingId: 'L-END-14',
  endingName: 'The Feedback Loop',
  institution: 'Psychological',
  systemStatus: 'Vibrating',
  isEnding: true,
  surreality: 8,
  text: [
  {
  minOverrender: 0,
  content: `THE FINAL LOG [L-END-14]
  Tone: Psychological-Vibrating.
  Theme: Panic is a self-sustaining architecture.
  There is no more "Lion." There is only the Vibration.
  The walls have absorbed your identity and are now broadcasting it back at a volume that has liquified your meat. You exist as a standing wave in a room of black paper. The system doesn't need to monitor you anymore; you are monitoring yourself into total stasis.
  [ UNIT L-77 // STATUS: PERMANENT_RESONANCE ]
  [ LOAD: INFINITE ]
  Final Log:
  The King is the sound of the King being afraid. The loop is complete.
  1 - 1 = 1.
  If the fear is the only thing left in the room, who is the King?`
  }
  ],
  choices: [],
  onEnter: []
  },
  LION_END_22: {
  id: 'LION_END_22',
  character: 'lion',
  endingId: 'L-END-22',
  endingName: 'The Mane Event',
  institution: 'Entertainment',
  systemStatus: 'Marketed',
  isEnding: true,
  surreality: 4,
  text: [
  {
  minOverrender: 0,
  content: `THE FINAL LOG [L-END-22]
  Tone: Marketing-Glossy.
  Theme: To be a symbol is to be a slave to the gaze.
  The applause is a physical weight.
  You stand in the spotlight, your 14Hz tremor sold as 'Character' and your matted fur sold as 'Grit.' You are the most popular asset in the Emerald City. You are the King of the Forest, provided the Forest is a 20x20 stage with painted backdrops.
  [ UNIT L-77 // STATUS: BRANDED ]
  [ ROLE: TESTIMONIAL_EXHIBIT ]
  You are perfectly safe, provided you never stop shaking. The moment you find your courage, you lose your value.
  Final Log:
  The Unit is a celebrity. The King is a poster.
  1 - 1 = 1.
  Is it a performance if the body has no choice but to play the part?`
  }
  ],
  choices: [],
  onEnter: []
  }, 
  
  // ─────────────────────────────────────────────────────────────────────────
  // PRIMARY ARC ROUTING — book-accurate gateways (L-END-01 through L-END-10)
  // ─────────────────────────────────────────────────────────────────────────

  // ─────────────────────────────────────────────────────────────────────────
  // LION PRIMARY ARC (L-END-01 — L-END-10)
  // ─────────────────────────────────────────────────────────────────────────
  L_END_01: {
  id: 'L_END_01',
  character: 'lion',
  endingId: 'L-END-01',
  endingName: 'The Standardized King',
  institution: 'Judicial',
  systemStatus: 'Indexed',
  isEnding: true,
  surreality: 1,
  text: [
  {
  minOverrender: 0,
  content: `THE FINAL LOG [L-END-01]
  Tone: Legalistic.
  Theme: To be named is to be owned.
  The audit is simple. You are not a King; you are a data-point. The system accepts your 'Cowardice' as a valid variable and assigns you a permanent seat in the Bureau's registry. You sit in a chair of yellow wood, signing your own name until the ink and the blood are indistinguishable.
  Final Log: Unit L-77 has accepted the Index. 1 - 1 = 1.`
  }
  ]
  },
  L_END_02: {
  id: 'L_END_02',
  character: 'lion',
  endingId: 'L-END-02',
  endingName: 'The Weight of the Badge',
  institution: 'Military',
  systemStatus: 'Commissioned',
  isEnding: true,
  surreality: 2,
  text: [
  {
  minOverrender: 0,
  content: `THE FINAL LOG [L-END-02]
  Tone: Martial-Grind.
  Theme: Courage is a heavy metal you wear until you collapse.
  They give you a medal. It is made of lead and stamped with a roar. It is pinned to your chest with a spike that grazes your lung. You are now a 'Kinetic Node' for the Bureau. You don't have to be brave; you just have to be heavy enough to stop the others from running.
  Final Log: The Unit is a anchor. System status: STATIONED.`
  }
  ]
  },
  L_END_03: {
  id: 'L_END_03',
  character: 'lion',
  endingId: 'L-END-03',
  endingName: 'The Placebo Heart',
  institution: 'Medical',
  systemStatus: 'Placeboed',
  isEnding: true,
  surreality: 2,
  text: [
  {
  minOverrender: 0,
  content: `THE FINAL LOG [L-END-03]
  Tone: Clinical-Muffled.
  Theme: Belief is a maintenance patch for the weak.
  The Wizard gives you a silk bag. Inside is a heart made of clockwork and sawdust. It doesn't beat, but it vibrates at 14Hz—the exact frequency of your fear. You believe you are brave because the bag is heavy. The system marks the 'Courage' requirement as MET (Synthetic).
  Final Log: The King is a performance. 1 - 1 = 1.`
  }
  ]
  },
  L_END_04: {
  id: 'L_END_04',
  character: 'lion',
  endingId: 'L-END-04',
  endingName: 'The Crow’s Audit',
  institution: 'Educational',
  systemStatus: 'Standardized',
  isEnding: true,
  surreality: 3,
  text: [
  {
  minOverrender: 0,
  content: `THE FINAL LOG [L-END-04]
  Tone: Academic-Sharp.
  Theme: Knowledge is the ability to label your own cage.
  The Bureau Crows descend. They don't peck; they edit. They strip the 'Fear' from your vocabulary and replace it with 'Structural Variance.' You spend the rest of the simulation in a library of carbon paper, explaining to other units why your shaking is a sign of superior intelligence.
  Final Log: The Unit is a scholar of its own collapse.`
  }
  ]
  },
  L_END_05: {
  id: 'L_END_05',
  character: 'lion',
  endingId: 'L-END-05',
  endingName: 'The Gilded Field',
  institution: 'Agricultural',
  systemStatus: 'Harvested',
  isEnding: true,
  surreality: 4,
  text: [
  {
  minOverrender: 0,
  content: `THE FINAL LOG [L-END-05]
  Tone: Pastoral-Oily.
  Theme: Productivity is the final form of peace.
  You are planted. Your paws take root in the yellow slag and your mane turns into a field of tall, sharp corn. You are the 'King' of the harvest. The system collects your vibration as kinetic energy to power the Emerald City's lights.
  Final Log: Unit L-77 is a resource. Status: OPERATIONAL.`
  }
  ]
  },
  L_END_06: {
  id: 'L_END_06',
  character: 'lion',
  endingId: 'L-END-06',
  endingName: 'The Scripted Roar',
  institution: 'Media',
  systemStatus: 'Broadcast',
  isEnding: true,
  surreality: 3,
  text: [
  {
  minOverrender: 0,
  content: `THE FINAL LOG [L-END-06]
  Tone: Theatrical.
  Theme: Truth is whatever is loudest.
  You are moved to a recording booth. You are asked to roar. When you do, the system filters the sound until it is a perfect, majestic anthem. This is the only sound the people of Oz ever hear from you. The real Lion—the shaking, meat-and-bone failure—is left in the booth to starve.
  Final Log: The signal is strong. The Unit is residual.`
  }
  ]
  },
  L_END_07: {
  id: 'L_END_07',
  character: 'lion',
  endingId: 'L-END-07',
  endingName: 'The Fossil Record',
  institution: 'Historical',
  systemStatus: 'Archived',
  isEnding: true,
  surreality: 5,
  text: [
  {
  minOverrender: 0,
  content: `THE FINAL LOG [L-END-07]
  Tone: Dusty-Dry.
  Theme: To be remembered is to be frozen.
  You are placed in a glass display in the Hall of History. You are labeled 'The Last King.' The system doesn't need you to breathe; it needs you to be a reference point for the Dorothy units. You watch the dust settle on your paws for a thousand cycles.
  Final Log: The King is a statue. Status: PRESERVED.`
  }
  ]
  },
  L_END_08: {
  id: 'L_END_08',
  character: 'lion',
  endingId: 'L-END-08',
  endingName: 'The Ritual Scar',
  institution: 'Religious',
  systemStatus: 'Consecrated',
  isEnding: true,
  surreality: 6,
  text: [
  {
  minOverrender: 0,
  content: `THE FINAL LOG [L-END-08]
  Tone: Liturgical.
  Theme: Pain is the only honest interface.
  The Priest-Clerks of the Bureau carve the 24 Core Theorems into your flanks. The bleeding is reclassified as 'Consecration.' You are the holy mascot of the Yellow Brick Load—a body that suffers so the system doesn't have to.
  Final Log: The Unit is sacred. The Load is shared.`
  }
  ]
  },
  L_END_09: {
  id: 'L_END_09',
  character: 'lion',
  endingId: 'L-END-09',
  endingName: 'The Mirror of Kings',
  institution: 'Philosophical',
  systemStatus: 'Refracted',
  isEnding: true,
  surreality: 7,
  text: [
  {
  minOverrender: 0,
  content: `THE FINAL LOG [L-END-09]
  Tone: Reflective-Cold.
  Theme: You are only what the observer needs you to be.
  You find a mirror in the dark. It doesn't show you; it shows a different Lion—one who is brave, one who is calm, one who is already dead. You spend the rest of the simulation trying to step into the glass. The system records your 'Vibration' as 'Refraction Error.'
  Final Log: The Unit is a ghost of a ghost.`
  }
  ]
  },
  L_END_10: {
  id: 'L_END_10',
  character: 'lion',
  endingId: 'L-END-10',
  endingName: 'The Compliance Loop',
  institution: 'Bureaucracy',
  systemStatus: 'Looping',
  isEnding: true,
  surreality: 3,
  text: [
  {
  minOverrender: 0,
  content: `THE FINAL LOG [L-END-10]
  Tone: Repetitive-Flat.
  Theme: The path is the only goal.
  You reach the gate. You are asked for your paperwork. You return to the start to find it. You reach the gate again. You are asked for a signature. You return to the start. The Yellow Brick Load is now a circle. You are a King of the perfect, endless Walk.
  Final Log: Progress is a software error. Status: RECURSIVE.`
  }
  ],
  choices: [],
  onEnter: []
  },

  LION_GATES_OF_OZ: {
  id: 'LION_GATES_OF_OZ',
  character: 'lion',
  text: [
  {
  minOverrender: 0,
  content: `THE GATES OF OZ

The road ends at a wall of green glass bricks. You have arrived.

The Guardian of the Gates is a small unit in a green uniform. It carries a locked box of green spectacles—one pair per registered unit, fitted and locked with a small golden key that the Guardian retains. The lenses do not clarify. They filter. Everything you see through them will be calibrated to the City's required frequency.

"The Emerald City operates at a visual intensity that will damage unfiltered optical inputs," the Guardian says, without looking at you. "Compliance is non-negotiable. The spectacles are non-destructive. The keys are held by this office until authorized departure."

Your 14Hz tremor rattles the spare frames in the Guardian's box. It does not comment on the sound.

It opens a ledger. It writes your designation under the column: COMPLIANT ENTRIES.

[ STATUS: PENDING VISUAL COMPLIANCE ]

The gate will not open until the key has been turned.`
  }
  ],
  choices: [
  {
  label: 'Accept the spectacles. Allow the key to be turned.',
  target: 'L_END_01',
  effects: [{ type: 'setCompliance', value: 'high' }]
  },
  {
  label: 'Accept the spectacles under formal protest. Ask what happens to those who refuse.',
  target: 'L_END_01',
  effects: [{ type: 'addDesync', value: 1 }]
  }
  ],
  onEnter: []
  },

  LION_AUDIENCE_CHAMBER: {
  id: 'LION_AUDIENCE_CHAMBER',
  character: 'lion',
  text: [
  {
  minOverrender: 0,
  content: `THE AUDIENCE CHAMBER

The Throne Room is larger than the corridor promised. The ceiling is too high to see. The walls glow with a heat that has no visible source.

You are alone in the room. This is the Wizard's arrangement.

Then: a Ball of Fire. It does not roll; it materializes at the center of the room, approximately two meters in diameter, burning at a temperature that does not seem to require fuel. No giant head. No old man. The Wizard's interface with you, Unit L-77, is fire.

The fire speaks.

"You want courage," it says. The voice arrives as heat on your face, as a pressure behind your eyes. "Courage is a performance metric. This Bureau can certify a metric. But certification requires proof of capacity."

The 14Hz tremor in your jaw intensifies in the presence of the heat. The tremor is, technically, evidence. The Bureau is watching.

[ THERMAL EVENT: ACTIVE ]
[ UNIT L-77 STATUS: ASSESSED ]`
  }
  ],
  choices: [
  {
  label: 'Ask the Ball what certification looks like. Accept what it offers.',
  target: 'L_END_03',
  effects: [{ type: 'addSmudge', value: 1 }]
  },
  {
  label: 'Request formal re-categorization of your capacity by the Bureau\'s academic division.',
  target: 'L_END_04',
  effects: [{ type: 'setCompliance', value: 'high' }]
  }
  ],
  onEnter: []
  },

  LION_QUADLING_SECTOR: {
  id: 'LION_QUADLING_SECTOR',
  character: 'lion',
  text: [
  {
  minOverrender: 0,
  content: `THE QUADLING SECTOR

The road descends toward a country of red. The hills are not steep; they are just final.

At the crest of the first hill, you see them: Hammer-Heads. They are not large. They have no arms. Their necks are extensible—retractable steel-and-cartilage pistons—and their skulls are flat, hard, and perfectly calibrated for impact delivery. They have been stationed here. You understand this immediately. They are not hostile. They are compliant.

"This descent is closed," the nearest Hammer-Head says. Its head is already cocked back.

You charge. You do not know why. The tremor in your jaw becomes a tremor in your whole body—14Hz, full-spectrum, every bone a tuning fork.

The impact arrives before you do. The head fires at the speed of authorized force. Your sternum rings like a filing cabinet dropped from a height.

You are on the ground. The red country is visible through your blurred vision, just beyond the line of Hammer-Heads.

[ KINETIC COMPLIANCE EVENT LOGGED ]
[ STATUS: UNIT L-77 — IMPACTED ]

The Hammer-Heads watch. They are waiting for your decision about what this means.`
  }
  ],
  choices: [
  {
  label: 'Accept the impact as official registration. The mark on your sternum is the system\'s record.',
  target: 'L_END_08',
  effects: [{ type: 'setCompliance', value: 'absolute' }]
  },
  {
  label: 'Look at the crater in the earth where you landed. Consider what shape you have left behind.',
  target: 'L_END_09',
  effects: [{ type: 'addDesync', value: 5 }]
  }
  ],
  onEnter: []
  },

  LION_WIZARD_MISSION: {
  id: 'LION_WIZARD_MISSION',
  character: 'lion',
  text: [
  {
  minOverrender: 0,
  content: `THE WIZARD'S COMMISSION

The Ball of Fire has made its terms clear.

There is no ceremony. There is no ceremony because ceremony implies a negotiation, and this is not a negotiation. The Wizard does not grant courage. The Wizard issues a conditional authorization for the reclassification of your tremor.

Current filing: COWARDICE (Unit L-77 // Non-compliant vibration // Load weight: 14Hz).
Proposed reclassification: TACTICAL INSTABILITY (Unit L-77 // Weapons-adjacent kinetic asset // Pending mission completion).

The mission is not complex. The Wicked Witch of the West is a competing system. She must be decommissioned. In exchange, the Bureau will release your designation.

The Ball of Fire dims slightly, awaiting your response.

[ MISSION BRIEF: ACTIVE ]
[ CONDITIONAL AUTHORIZATION: PENDING ACCEPTANCE ]

The tremor in your spine is, according to this paperwork, already a weapon. It just hasn't been pointed at anything yet.`
  }
  ],
  choices: [
  {
  label: 'Accept the Commission. Report for field deployment.',
  target: 'L_END_02',
  effects: [{ type: 'addLoad', value: 10 }]
  },
  {
  label: 'Walk out of the Throne Room. The forest outside the City is unmapped. Leave the road.',
  target: 'LION_FOREST_THRONE',
  effects: [{ type: 'addDesync', value: 1 }]
  }
  ],
  onEnter: []
  },

  LION_FOREST_THRONE: {
  id: 'LION_FOREST_THRONE',
  character: 'lion',
  text: [
  {
  minOverrender: 0,
  content: `THE FOREST THRONE

You are waiting in Oz. The City is behind you; the mission is behind you; the road is behind you. You have walked into the old forest that wraps around the walls of the Emerald City like a sentence that never ends.

The animals come.

They have been living under a predator that the Bureau refers to as a legacy threat. The predator is gone now—decommissioned in the way all systems fail eventually—and the forest animals have been without a process manager for seventeen administrative cycles. They come to you the way units come to a power source: not from love, but from need.

The oldest of them—a large, grey elk whose antlers are wrapped in red wire—speaks for the group.

"We need a King," it says. "The forest needs a King."

You are already shaking. Your 14Hz tremor has been shaking the leaves from the lower branches since you entered. The animals find this reassuring. They have been waiting for a vibration they could follow.

Two institutional representatives arrive simultaneously, as if the coronation has triggered an automatic notification.

The Agricultural Bureau wants your tremor. Your vibrations, routed through root-contact with the soil, could power the irrigation system for the northern fields. You would be planted, technically speaking. But you would be a King of something.

The Broadcast Commission wants your roar. Your roar, properly scripted, could become the official anthem of the Emerald City. You would be amplified. But the roar in their transcript would not be the roar in your chest.

1 - 1 = 1. You are the King of a forest that two different systems are trying to log.`
  }
  ],
  choices: [
  {
  label: 'Submit to the Agricultural Reclamation. Your roots go into the soil.',
  target: 'L_END_05',
  effects: [{ type: 'addLoad', value: 15 }]
  },
  {
  label: 'Submit to the Broadcast Commission. Your roar becomes the anthem.',
  target: 'L_END_06',
  effects: [{ type: 'setCompliance', value: 'high' }]
  }
  ],
  onEnter: []
  },

  LION_GLINDA_RECORD: {
  id: 'LION_GLINDA_RECORD',
  character: 'lion',
  text: [
  {
  minOverrender: 0,
  content: `THE GLINDA RECORD

Glinda's palace is in the south, and it is made of rubies, and it does not care about you.

You are not here for Glinda. You are here because Glinda's archive contains a record of every event that has ever occurred in the land of Oz, and your file is currently open.

The archive is a sub-routine. It does not make decisions; it processes them. Glinda herself is the primary read-write function—she reads the record of your journey aloud, in a voice calibrated for courtroom acoustics. You stand in the gallery and listen to yourself described in third person, past tense, as if you are already finished.

"The Lion," Glinda reads, "experienced a tremor of 14Hz for the duration of his journey. The tremor was logged as Cowardice at intake and has not been re-filed."

The record is still open. It is open because you are still standing in the gallery. The moment you leave, the record will close, and whatever designation it closes with will be your permanent institutional status.

Glinda pauses. She looks at you over the top of the book.

"This office can finalize your designation as a historical unit," she says. "Or this office can request clarification from the Bureau, which will require a response, which will require a counter-response, which will require—"

[ STATUS: FILE PENDING CLOSURE ]
[ QUERY: ACCEPT DESIGNATION OR SUBMIT REVISION REQUEST? ]`
  }
  ],
  choices: [
  {
  label: 'Accept the designation. Let the record close. Enter the glass case.',
  target: 'L_END_07',
  effects: [{ type: 'addLoad', value: 20 }]
  },
  {
  label: 'Submit a revision request. Ask for the next form. And the next.',
  target: 'L_END_10',
  effects: [{ type: 'addLoad', value: 10 }]
  }
  ],
  onEnter: []
  },
}
