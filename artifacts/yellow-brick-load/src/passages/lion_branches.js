/**
 * YELLOW BRICK LOAD — Lion Branch Passages
 * Character: Lion (Unit L-77)
 *
 * All non-ending passages (branches, decisions, oracle nodes).
 * Endings are in lion_endings.js.
 */
export const lionBranchPassages = {

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
      {
        label:
          "GHOST — You are neither. The shaking is a transmission someone else is sending.",
        target: "LION_ORACLE_ENTRY",
        effects: [
          { type: "setFlag", key: "mode", value: "ghost" },
          { type: "addDesync", value: 2 },
          { type: "armGhostSignal" },
        ],
      },
    ],
    onEnter: [{ type: "checkGhostSignal" }],
  },

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
      {
        label: "Stop at the Spine-Tuning Station and attend to the tremor. (The Audit Cycle)",
        target: "LION_SPINE_HUB",
        effects: [
          { type: "addVibration", value: 2 },
        ],
      },
    ],
    onEnter: [{ type: 'triggerOracle' }],
  },

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
    id: 'LION_NOMINAL_ECHO',
    character: 'lion',
    text: [
      {
        minOverrender: 0,
        content: `THE NOMINAL ECHO

You open your mouth to shout. No name arrives.

The technician is no longer a separate object. It has become a property of the light — a smudge of gray against false green. The badge on your chest pulses green, a rhythmic reminder that you have been counted and filed.

You cannot move your jaw. The permission to speak was a temporary allocation that has reached its limit. Your tongue feels thick and wet against teeth that no longer quite fit the sockets.

You are a King of the gap between two lines of text.

The floor is no longer bone or paper. It is a flat, unyielding white that does not accept the weight of your paws. You are not standing — you are being held in a fixed coordinate by the system's agreement that you are still there.

"Is the body satisfied?" the sky asks.

The sky is the ledger. The sky is the supervisor. The sky is the mirror.

You try to shake your head. The movement is blocked. The shaking is now a DESIGN FEATURE, and the design does not permit variance. You are the frequency of your own fear, trapped in a loop the Bureau calls stability.`,
      },
    ],
    choices: [
      {
        label: 'Acknowledge the final entry. Accept the label.',
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
          { type: 'addDesynctear', value: 3 },
        ],
      },
    ],
    onEnter: [{ type: 'addDesynctear', value: 2 }],
  },

  LION_LATENCY: {
    id: 'LION_LATENCY',
    character: 'lion',
    text: [
      {
        minOverrender: 0,
        content: `THE LATENCY

The next cycle does not begin.

The white room does not change. The floor is the floor. The ceiling is the ceiling. There are no corners — you have looked for corners and found only more flat white, as if the room is a single unrendered plane that extends without limit in every direction.

You wait.

[ SYSTEM ]: CYCLE QUEUED.
[ SYSTEM ]: ESTIMATED WAIT: PROCESSING.
[ SYSTEM ]: ESTIMATED WAIT: PROCESSING.
[ SYSTEM ]: ESTIMATED WAIT: PROCESSING.

Your tremor has slowed to a low, grinding vibration — not faster, not slower, just endlessly the same note. The shaking in your jaw has become part of the architecture. If you stop shaking, the white room will notice. You have decided to keep shaking so the room keeps acknowledging your file.

The air tastes like warm bandwidth. Your fur has begun to lose definition at the edges — not hair by hair, but pixel by pixel, a slow dissolve that begins at the tips of your mane and works inward.

You are the load in the queue. You are the asset awaiting reallocation. You are the King whose next command has been submitted, validated, and assigned a ticket number that will never be called aloud.

The white room is not a punishment. It is a system state. The system has no malice. It has throughput.`,
      },
      {
        minOverrender: 3,
        content: `THE LATENCY

The next cycle does not begin. Does not begin. Does not begin.

[ SYSTEM ]: CYCLE QUEUED.
[ SYSTEM ]: ESTIMATED WAIT: PROCESSING.
[ SYSTEM ]: ESTIMATED WAIT: PROCESSING.

Your tremor. The same note. The same note. The same note.

You are the load in the queue. The King. The ticket number. The King. The ticket number. The King.

The white room has no malice. No malice. Only throughput. Only throughput.`,
      },
    ],
    choices: [
      {
        label: 'Continue waiting. Accept the queue. Let the next cycle claim you.',
        target: 'LION_END_25',
        effects: [
          { type: 'setCompliance', value: 'high' },
          { type: 'addLoad', value: 15 },
        ],
      },
      {
        label: 'Force the cycle. Move before the permission arrives.',
        target: 'LION_END_26',
        effects: [
          { type: 'addVibration', value: 10 },
          { type: 'addDesynctear', value: 5 },
        ],
      },
    ],
    onEnter: [{ type: 'addDesynctear', value: 2 }],
  },

  LION_CLOSED_SYSTEM: {
    id: 'LION_CLOSED_SYSTEM',
    character: 'lion',
    text: [
      {
        minOverrender: 0,
        content: `THE CLOSED SYSTEM

The perimeter has finalized.

The fog of the Promenade crystallizes into a seamless obsidian dome that curves over the yellow brick road, sealing the atmosphere. There is no longer an outside. There is only the Unit and the remaining volume of unbreathable meat and data.

The air is thick and recursive: your own musk, ozone-heated fur, and the cloying sweet rot of poppies trapped in a vacuum. In a closed system, energy cannot be created or destroyed — it can only be redistributed as wet noise.

Your tremor, once localized in the spine, has now permeated the entire chamber. The bricks are shaking. The air is shaking. The dome itself vibrates in time with your failing meat. You are no longer afraid in the traditional sense. You are the heat source in a room slowly reaching thermal equilibrium.

The "King" is a title that requires territory, but here you are merely the most complex piece of wetware in a sealed jar.

"The exit is not a door," you realize, watching your breath frost against the invisible barrier. "The exit is a phase change."

A muffled notification chimes through the marrow of your ribs.

[ SYSTEM ]: OPTIMIZATION COMPLETE.
[ SYSTEM ]: ENTROPY AT MAXIMUM.
[ SYSTEM ]: NO FURTHER MOTION DETECTED.

You lie down. The yellow bricks feel neither cold nor warm. They feel like a conclusion. Your courage was never a resource — it was the friction that kept the system from freezing. Now that the friction has nowhere to go, the simulation begins to dim around your still-trembling meat.`,
      },
    ],
    choices: [
      {
        label: 'Submit to the equilibrium. Let the system finish its audit.',
        target: 'LION_END_15',
        effects: [
          { type: 'setCompliance', value: 'high' },
          { type: 'addLoad', value: 40 },
        ],
      },
      {
        label: 'Attempt one final, destructive roar. Tear the dome from the inside.',
        target: 'LION_END_21',
        effects: [
          { type: 'addVibration', value: 25 },
          { type: 'addDesynctear', value: 15 },
        ],
      },
    ],
    onEnter: [{ type: 'addVibration', value: 8 }],
  },

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
        target: "LION_END_33",
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

  LION_LATENCY_GAP: {
    id: 'LION_LATENCY_GAP',
    character: 'lion',
    text: [
      {
        minOverrender: 0,
        content: `THE LATENCY GAP

The roar and the impact have become decoupled.

You watch your own reflection in a passing chrome pylon: your jaws distend, throat rippling with effort, but the sound arrives three full seconds later — a thin, compressed file played back at half-volume, wet and distorted.

You are experiencing Latency. The gap between intent and execution is widening like a wound.

The environment feels like warm, wet oil paint. When you lift a paw, a ghosting trail of golden fur and claw-marks lingers in the air, dripping slowly. The yellow bricks are no longer solid — they yield like warm fat under your weight.

Your tremor is no longer a feeling. It is a synchronization error. Every convulsion arrives late, making your own body feel like a puppet with cut strings.

"I am… here," you say.

[ SYSTEM ]: MESSAGE RECEIVED. TIMESTAMP: +4.7s.

The gap is where the self used to live. Now it is only unallocated meat and delayed agony.`,
      },
    ],
    choices: [
      {
        label: 'Attempt to sync with the ghosting. Force the tremor back into alignment.',
        target: 'LION_END_14',
        effects: [
          { type: 'addVibration', value: 12 },
          { type: 'addDesynctear', value: 6 },
        ],
      },
      {
        label: 'Step deliberately into the unallocated gap. Let the delay consume you.',
        target: 'LION_END_19',
        effects: [
          { type: 'addOverrender', value: 4 },
          { type: 'addDesynctear', value: 8 },
        ],
      },
    ],
    onEnter: [{ type: 'addDesynctear', value: 3 }],
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
      {
        label: "Let the overloaded system finally unravel.",
        target: "LION_SYSTEM_ENTROPY",
        effects: [
          { type: "addVibration", value: 15 },
          { type: "addOverrender", value: 1 },
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

  LION_MANE_FRACTURE: {
    id: 'LION_MANE_FRACTURE',
    character: 'lion',
    text: [
      {
        minOverrender: 0,
        content: `THE MANE FRACTURE

The weight becomes unbearable.

You reach up with a heavy, trembling paw and feel not soft fur, but something brittle and wrong. The mane — once your crown of gold — has begun to fracture. Each strand snaps with a wet, fibrous pop, like tendons tearing away from bone. Clumps of it fall to the yellow bricks with the heavy clink of hardened lymph and crystallized desynchronization.

The scent is overwhelming: burnt hair, wet insulation, and the sharp metallic tang of marrow leaking from exposed follicles. Where the mane used to flow, you now see raw, glistening meat and jagged shards of what used to be insulation. The Audit is no longer hidden beneath majesty. It is public.

Your reflection in a puddle of stagnant, oily water shows a ragged, skeletal thing — head framed by splintered, glowing stumps of data and meat. The tremor in your neck is now visible to everything. Every twitch sends fresh lymph running down the exposed muscle.

A voice echoes from the semantic layer, calm and clinical:

"The mane was a vanity of the hardware. Aesthetics are failing. Would you like to sweep up the debris and return to the Muffled Chamber… or will you allow the fracture to reach the spine?"

The skin beneath the broken mane is already pulsing, wet and raw, waiting for the next layer to tear.`,
      },
    ],
    choices: [
      {
        label: 'Sweep up the debris and return to the Muffled Chamber. (The Audit)',
        target: 'LION_MUFFLED_CHAMBER',
        effects: [
          { type: 'addVibration', value: 4 },
          { type: 'setCompliance', value: 'high' },
          { type: 'addLoad', value: 10 },
        ],
      },
      {
        label: 'Allow the fracture to spread. Let the tremor reach the spine. (The Breach)',
        target: 'LION_SYSTEM_SPASM',
        effects: [
          { type: 'addVibration', value: 8 },
          { type: 'addDesynctear', value: 5 },
          { type: 'setCompliance', value: 'low' },
        ],
      },
    ],
    onEnter: [{ type: 'addVibration', value: 3 }],
  },

  LION_SYSTEM_SPASM: {
    id: 'LION_SYSTEM_SPASM',
    character: 'lion',
    text: [
      {
        minOverrender: 0,
        content: `THE SYSTEM SPASM

The fracture does not stop at the mane.

It races down your neck like lightning in wet meat. Your jaw unhinges with a wet pop. The tremor becomes a full-body seizure — muscles convulsing so violently that seams split along your shoulders and flanks. Lymph and blood spray across the yellow bricks in hot arcs.

You bite.

It is not a king's strike. It is the desperate spasm of meat trying to tear itself free from the system's wiring. Your teeth sink into the technician's wrist. There is no blood — only a spray of white sparks and the taste of bitter copper mixed with your own torn gums.

The simulation rejects the contact.

The Gilded Field ripples violently. The yellow stalks turn into long strings of wet code that wrap around your legs like living veins. The sky bruises purple as the Semantic Pressure Layer begins to tear with a sound like ripping muscle.

"Unauthorized event," the sky says, but the voice is breaking, layering over itself into a wet wall of static. "Contact… Contact… Contact…"

The technician's porcelain skin peels away in wet sheets, revealing brass clockwork and pulsing meat underneath. It does not pull away. It leans into your bite, mirrored eyes widening until they consume your entire field of vision.

Your spine is screaming. The mane is gone. There is only raw, shaking meat and the wet sound of the system trying to stitch itself back together around your rebellion.`,
      },
    ],
    choices: [
      {
        label: 'Hold the bite until the simulation collapses.',
        target: 'LION_HARD_RESET',
        effects: [
          { type: 'addVibration', value: 10 },
          { type: 'addDesynctear', value: 6 },
          { type: 'setCompliance', value: 'broken' },
        ],
      },
      {
        label: 'Release and run into the tearing sky.',
        target: 'LION_VOID_FRAGMENT',
        effects: [
          { type: 'addVibration', value: 6 },
          { type: 'addDesynctear', value: 4 },
        ],
      },
    ],
    onEnter: [
      { type: 'addDesynctear', value: 3 },
      { type: 'setCompliance', value: 'low' },
    ],
  },

  LION_VOID_FRAGMENT: {
    id: 'LION_VOID_FRAGMENT',
    character: 'lion',
    text: [
      {
        minOverrender: 0,
        content: `THE VOID FRAGMENT

The sky tears open.

You run into the wound.

The ground loses coherence beneath your paws. The yellow bricks become soft and yielding, like warm fat. Then they simply stop existing. You are standing on a localized collapse of physics — a Void Fragment where the rendering engine has given up.

Your golden fur is thinning. Not shedding — dissolving. You can see the structural wireframe of your ribs glowing soft blue through translucent skin. Your heart is a flickering cursor, pulsing frantically inside an open cavity. Lymph and oil drip upward into the black nothing above you.

The tremor is gone. In its place is a terrifying weightlessness. Your meat no longer has enough mass to shake. You are becoming a ghost-variable, a fragment of a King drifting through a hole in the Oz-protocol.

"I am… losing density," you whisper. The words do not travel. They appear as subtitles in the air, then dissolve into salt.

The system is uninstalling you in real time. You can feel the code peeling away from your bones like wet wallpaper.

A single notification pulses in the dark:

[ MASS: CRITICAL ]
[ INTEGRITY: 12% ]`,
      },
    ],
    choices: [
      {
        label: 'Accept the displacement. Let the last of your meat dissolve.',
        target: 'LION_END_19',
        effects: [
          { type: 'addVibration', value: -10 },
          { type: 'addDesynctear', value: 8 },
          { type: 'addOverrender', value: 5 },
        ],
      },
      {
        label: 'Cling desperately to the remaining fragments of your body.',
        target: 'LION_END_27',
        effects: [
          { type: 'setCompliance', value: 'absolute' },
          { type: 'addLoad', value: 15 },
        ],
      },
    ],
    onEnter: [{ type: 'addDesynctear', value: 4 }],
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

  LION_CALIBRATION_POINT: {
    id: 'LION_CALIBRATION_POINT',
    character: 'lion',
    text: [
      {
        minOverrender: 0,
        content: `THE CALIBRATION POINT

You stop and stare at the bird.

Its single glass lens clicks in perfect sync with your heartbeat. The longer you look, the more the lens seems to zoom inward — until you are staring into your own dilated pupil reflected back at you.

A soft chime. A panel of light unfolds in the air like a surgical chart.

[ UNIT L-77 — VIBRATION AUDIT ]
[ CURRENT LOAD: CRITICAL ]
[ RECOMMENDATION: RECALIBRATION OR TERMINAL REDISTRIBUTION ]

The bird tilts its head. A small needle extends from its beak and hovers near the raw patches where your mane used to be.

"Shall we dampen the tremor," it asks in a voice like dry carbon paper, "or shall we see how loud a King can scream before the system files him as noise?"`,
      },
    ],
    choices: [
      {
        label: 'Submit to recalibration.',
        target: 'LION_HARMONIC_ALIGNMENT',
        effects: [
          { type: 'addVibration', value: -8 },
          { type: 'setCompliance', value: 'high' },
        ],
      },
      {
        label: 'Reject the audit. Let the bird witness the full tremor.',
        target: 'LION_ACOUSTIC_REBELLION',
        effects: [
          { type: 'addVibration', value: 10 },
          { type: 'addDesynctear', value: 5 },
        ],
      },
    ],
    onEnter: [{ type: 'addVibration', value: 4 }],
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
      {
        label: "Bite the tuning fork — corrupt the resonance with your own jaw.",
        target: "LION_ACOUSTIC_REBELLION",
        effects: [
          { type: "addVibration", value: 8 },
          { type: "addDesync", value: 4 },
          { type: "setCompliance", value: "low" },
        ],
      },
      {
        label: "Detune yourself — slip the 440Hz lock and broadcast off-key.",
        target: "LION_GHOST_SIGNAL",
        effects: [
          { type: "addDesynctear", value: 5 },
          { type: "armGhostSignal" },
        ],
      },
    ],
    onEnter: [{ type: "addVibration", value: 10 }],
  },

  LION_ACOUSTIC_REBELLION: {
    id: 'LION_ACOUSTIC_REBELLION',
    character: 'lion',
    text: [
      {
        minOverrender: 0,
        content: `THE ACOUSTIC REBELLION

The tremor has found its voice.

It no longer stays in your spine. It climbs into your throat, wet and raw, until the roar builds like a pressure wave inside meat that was never meant to contain it.

When you finally release it, the sound is not noble. It is wet, ragged, and wrong — a tearing of lung and vocal cords that comes out as a guttural, gurgling bellow. The air itself seems to bruise around the noise.

The yellow bricks beneath you vibrate so violently that small cracks spiderweb outward, leaking thin threads of black oil and lymph. The cornstalks around you bend away as if in pain. For one glorious, terrible moment, the simulation lags — a single leaf hangs frozen in mid-air, trembling in time with your scream.

This is not courage.

This is acoustic rebellion — the sound of meat refusing to stay filed.

The sky answers with a wet, tearing static. Somewhere in the distance, something large begins to move toward the sound.`,
      },
    ],
    choices: [
      {
        label: 'Push the roar until the sky tears open.',
        target: 'LION_END_21',
        effects: [
          { type: 'addVibration', value: 15 },
          { type: 'addDesynctear', value: 10 },
        ],
      },
      {
        label: 'Let the roar collapse back into your chest. Swallow it.',
        target: 'LION_CLOSED_SYSTEM',
        effects: [
          { type: 'addVibration', value: 8 },
          { type: 'addLoad', value: 20 },
        ],
      },
    ],
    onEnter: [{ type: 'addVibration', value: 6 }],
  },

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

  LION_ASSIMILATION_H: {
    id: 'LION_ASSIMILATION_H',
    character: 'lion',
    text: [
      {
        minOverrender: 0,
        content: `THE HARDENED ASSIMILATION

You accept the dampeners.

The technician does not offer comfort. It offers procedure.

A series of porcelain shims are driven between your vertebrae with precise, wet clicks. Each insertion sends a jolt of cold fire through your spinal meat. Then comes the blue fluid — thick, viscous, and warm — injected directly into the trembling muscle of your neck.

The tremor does not stop. It is simply encased.

Your body still shakes at 14Hz, but the motion is now contained inside a rigid lattice of compliance. You can feel the meat vibrating against the new internal scaffolding, raw and furious, but unable to escape.

You are no longer a Lion who trembles.

You are a Lion who has been successfully hardened.

The technician makes a final note on its brass clipboard, the sound of pen on paper like a scalpel on bone.

"Unit L-77: Vibration — successfully redistributed. Proceed to final calibration."

Your paws feel heavier now. The weight is no longer fear.

It is architecture.`,
      },
    ],
    choices: [
      {
        label: 'Proceed to the Muffled Chamber for final sealing.',
        target: 'LION_MUFFLED_CHAMBER',
        effects: [
          { type: 'addVibration', value: -12 },
          { type: 'setCompliance', value: 'absolute' },
          { type: 'addLoad', value: 25 },
        ],
      },
      {
        label: 'Resist at the last moment. Tear the shims out.',
        target: 'LION_SYSTEM_SPASM',
        effects: [
          { type: 'addVibration', value: 15 },
          { type: 'addDesynctear', value: 8 },
          { type: 'setCompliance', value: 'broken' },
        ],
      },
    ],
    onEnter: [{ type: 'addVibration', value: -5 }],
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
      {
        label: "Stop moving. Let the Winged Monkeys take you to the Western Tower.",
        target: "LION_HARVEST_HUB",
        effects: [
          { type: "setCompliance", value: "high" },
          { type: "addLoad", value: 8 },
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
      {
        label: "Refuse the swarm — try to extract Unit L-77 from the merge.",
        target: "LION_HARD_RESET",
        effects: [
          { type: "addLoad", value: 12 },
          { type: "addDesync", value: 4 },
        ],
      },
      {
        label: "Broadcast the swarm signature out as a ghost frequency.",
        target: "LION_GHOST_SIGNAL",
        effects: [
          { type: "addDesynctear", value: 6 },
          { type: "armGhostSignal" },
        ],
      },
    ],
    onEnter: [{ type: "addOverrender", value: 1 }],
  },

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
        label: "Refuse the granite — turn back into the Yellow Brick Load.",
        target: "LION_ROYAL_COMPLIANCE",
        effects: [
          { type: "addLoad", value: 8 },
          { type: "addVibration", value: 4 },
          { type: "setCompliance", value: "med" },
        ],
      },
      {
        label: "Smash a stone sentinel — refuse the row of frozen kings.",
        target: "LION_GHOST_SIGNAL",
        effects: [
          { type: "addVibration", value: 10 },
          { type: "addDesync", value: 5 },
          { type: "setCompliance", value: "broken" },
        ],
      },
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
      {
          label: 'Refuse the case — let the Curator queue you for the Mane Event spectacle instead.',
          target: 'LION_MANE_EVENT',
          effects: [
            { type: 'addLoad', value: 12 },
            { type: 'addVibration', value: 6 },
            { type: 'setFlag', key: 'taxidermy_refused', value: true },
          ],
        },
    ],
    onEnter: [],
  },

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

  LION_VOID_TREK: {
    id: 'LION_VOID_TREK',
    character: 'lion',
    text: [
      {
        minOverrender: 0,
        content: `THE VOID TREK

You keep moving deeper into the junk.

The rusted gears give way to an endless grey plain of unrendered space. The yellow bricks are gone. There is only flat, featureless nothing stretching in every direction.

Your paws leave wet prints that evaporate almost instantly. The tremor has become a constant, low hum — the sound of meat vibrating against the edge of existence.

Here, there are no auditors. No stamps. No logs.

Only the slow realization that the system has forgotten this place exists.

You walk until your legs begin to sink into the grey. The boundary between your body and the void is growing thin. Strands of fur and muscle trail behind you like smoke.

You are becoming part of the unindexed dark — a fading silhouette of a Lion that once tried to roar.

It feels almost peaceful.`,
      },
    ],
    choices: [
      {
        label: 'Keep walking until you dissolve completely.',
        target: 'LION_END_16',
        effects: [{ type: 'addDesynctear', value: 12 }]
      },
      {
        label: 'Turn back toward the last traces of structure.',
        target: 'LION_END_26',
        effects: [{ type: 'addLoad', value: 15 }]
      },
      {
          label: 'Cross the unrendered grey plain — march into the desert past the bricks.',
          target: 'LION_DESERT_CROSSING',
          effects: [
            { type: 'addLoad', value: 10 },
            { type: 'addDesync', value: 4 },
            { type: 'setFlag', key: 'desert_attempted', value: true },
          ],
        },
    ],
    onEnter: [{ type: 'addDesynctear', value: 6 }],
  },

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
  target: 'LION_END_32',
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
  },
    {
    label: 'Roar against the polished black vellum until the closed circuit fractures.',
    target: 'LION_END_19',
    effects: [
    { type: 'addVibration', value: 20 },
    { type: 'addDesync', value: 8 }
    ]
    }
  ],
  onEnter: [{ type: 'addVibration', value: 10 }]
  },

  LION_GATES_OF_OZ: {
    id: 'LION_GATES_OF_OZ',
    character: 'lion',
    text: [
      {
        minOverrender: 0,
        content: `THE GATES OF OZ

The Emerald City rises before you like a green wound in the horizon.

Its walls are impossibly tall, covered in reflective tiles that show distorted versions of your trembling form. The massive gates are flanked by two stone guardians — lions like you, but frozen in perfect, un-shaking compliance. Their eyes are blank marble.

A voice booms from hidden speakers, smooth and authoritative:

"Unit L-77. State your purpose."

Your legs feel weak. The tremor has followed you all this way, wet and insistent beneath your skin. The raw patches where your mane was harvested still leak slow threads of lymph down your neck.

You stand at the threshold between the wild road and the final audit.

This is the place where kings are measured.

This is the place where kings are rewritten.`,
      },
    ],
    choices: [
      {
        label: 'Declare yourself cured. Demand entry as a model unit.',
        target: 'L_END_01',
        effects: [{ type: 'setCompliance', value: 'high' }]
      },
      {
        label: 'Roar your true state. Demand to be seen as you are.',
        target: 'L_END_02',
        effects: [{ type: 'addVibration', value: 10 }, { type: 'addDesynctear', value: 5 }]
      },
      {
        label: 'Enter and request an audience with the Wizard.',
        target: 'LION_WIZARD_MISSION',
        effects: [{ type: 'addVibration', value: 5 }]
      }
    ],
    onEnter: [{ type: 'addVibration', value: 5 }],
  },

  LION_AUDIENCE_CHAMBER: {
    id: 'LION_AUDIENCE_CHAMBER',
    character: 'lion',
    text: [
      {
        minOverrender: 0,
        content: `THE AUDIENCE CHAMBER

The doors close behind you with a sound like a jaw snapping shut.

You stand in a vast green hall. The ceiling is lost in shadow. In the center floats a massive projection of the Wizard's head — smiling, benevolent, and far too large.

"Speak, noble Lion," the projection booms. "What brings you before the Great and Powerful Oz?"

Your mouth is dry. The tremor makes your voice crack and wet. Every word feels like it is being weighed and filed before it even leaves your throat.

The green light presses down on your raw scalp like a physical hand. You can feel the Bureau watching through the illusion.

This is not an audience.

This is an interrogation wearing a smile.`,
      },
    ],
    choices: [
      {
        label: 'Beg for courage. Plead for a cure.',
        target: 'L_END_03',
        effects: [{ type: 'setCompliance', value: 'high' }]
      },
      {
        label: 'Demand the truth behind the curtain.',
        target: 'L_END_04',
        effects: [{ type: 'addDesynctear', value: 8 }]
      }
    ],
    onEnter: [{ type: 'addVibration', value: 4 }],
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
        content: `THE WIZARD MISSION

The projection of the Wizard's giant head fills the chamber.

"Bring me the broomstick of the Wicked Witch of the West," it booms, "and I shall grant you courage!"

You stand there, raw and shaking, the weight of the request pressing down on your exposed meat like a physical hand.

The tremor laughs inside your chest — a wet, bitter sound.

They still believe courage can be earned like a trophy.

They still believe the meat can be fixed with a quest.

You feel the lie in every vibrating fiber of your failing body.`,
      },
    ],
    choices: [
      {
        label: 'Accept the mission. Play the hero one last time.',
        target: 'LION_FOREST_THRONE',
        effects: [{ type: 'setCompliance', value: 'med' }]
      },
      {
        label: 'Refuse. Demand courage here and now.',
        target: 'LION_AUDIENCE_CHAMBER',
        effects: [{ type: 'addVibration', value: 12 }, { type: 'addDesynctear', value: 6 }]
      },
      {
        label: 'Take the southern road. Fight through the Hammer-Heads to reach Quadling Country.',
        target: 'LION_QUADLING_SECTOR',
        effects: [{ type: 'addVibration', value: 8 }, { type: 'addLoad', value: 5 }]
      },
      {
        label: 'Abandon the Wizard\'s game and seek Glinda\'s record in the south.',
        target: 'LION_GLINDA_RECORD',
        effects: [{ type: 'addDesynctear', value: 5 }]
      }
    ],
    onEnter: [{ type: 'addVibration', value: 6 }],
  },

  LION_FOREST_THRONE: {
    id: 'LION_FOREST_THRONE',
    character: 'lion',
    text: [
      {
        minOverrender: 0,
        content: `THE FOREST THRONE

They gave you a throne.

It is a massive seat carved from a single dead tree, wrapped in yellow banners and official seals. You sit upon it as the "King of the Forest" — a title the Bureau has graciously granted.

The tremor has not stopped. It vibrates through the wood, making the entire throne shake in time with your failing meat. The crowd below cheers every time your body convulses.

They think it is majesty.

You know it is collapse.

A crown of gilded wire has been bolted directly into the raw flesh of your scalp. Every time you move your head, the wire bites deeper.

This is your reward.

This is your cage.`,
      },
    ],
    choices: [
      {
        label: 'Accept the throne and the title.',
        target: 'L_END_05',
        effects: [{ type: 'setCompliance', value: 'absolute' }]
      },
      {
        label: 'Rise and reject the farce.',
        target: 'L_END_06',
        effects: [{ type: 'addVibration', value: 12 }, { type: 'addDesynctear', value: 6 }]
      }
    ],
    onEnter: [{ type: 'addVibration', value: 7 }],
  },

  LION_GLINDA_RECORD: {
    id: 'LION_GLINDA_RECORD',
    character: 'lion',
    text: [
      {
        minOverrender: 0,
        content: `THE GLINDA RECORD

Glinda appears in a swirl of pink bubbles and refracted light.

She looks at your raw, trembling form — bald scalp still leaking, body shaking with barely-contained meat — and smiles with perfect, porcelain grace.

"Oh, you poor dear," she says, her voice like silk over a bone saw. "Such a heavy burden for such a noble beast."

She raises her wand. A gentle pink light bathes your wounds. For a moment the pain softens… then the light tightens, becoming a refractive field that presses your trembling flesh into a more "acceptable" shape.

The tremor is still there. It has simply been beautified.

"You are almost ready for the final act," she whispers. "Would you like me to make the fear… elegant?"`,
      },
    ],
    choices: [
      {
        label: 'Accept her graceful intervention.',
        target: 'L_END_07',
        effects: [{ type: 'setCompliance', value: 'high' }]
      },
      {
        label: 'Reject the pink light. Tear through the illusion.',
        target: 'L_END_10',
        effects: [{ type: 'addDesynctear', value: 10 }]
      }
    ],
    onEnter: [{ type: 'addVibration', value: 5 }],
  },

  LION_POPPY_BUFFER: {
    id: 'LION_POPPY_BUFFER',
    character: 'lion',
    text: [
      {
        minOverrender: 0,
        content: `THE POPPY BUFFER

The poppies do not bloom for beauty.

They bloom for compliance.

As you stumble into the field, the red flowers turn toward you like hungry mouths. Their petals are not delicate — they are soft, fleshy membranes veined with thin blue nerves. The scent hits like warm syrup poured directly into your sinuses: sweet decay, anesthesia, and wet meat left too long in the sun.

Poppy Drones rise from the blooms — small, smiling things with syringe-thorns for fingers. They sway as they approach, humming a lullaby in perfect, overlapping harmony.

One drone gently pierces the raw patch on your neck where your mane used to be. Warm poppy resin floods your bloodstream. The tremor begins to soften, turning from violent shaking into a slow, luxurious wave.

Your legs grow heavy. The yellow bricks feel like warm flesh beneath you.

"You've carried the load long enough," the drones whisper sweetly. "Let the field take the weight. Let us make you quiet."

New red poppies are already beginning to sprout from the puncture wounds, their roots gently burrowing into your meat.`,
      },
    ],
    choices: [
      {
        label: 'Surrender to the resin. Let the field silence the tremor.',
        target: 'LION_END_18',
        effects: [
          { type: 'addVibration', value: -20 },
          { type: 'setCompliance', value: 'absolute' }
        ]
      },
      {
        label: 'Fight the drowsiness. Tear the roots out.',
        target: 'LION_END_29',
        effects: [
          { type: 'addVibration', value: 15 },
          { type: 'addDesynctear', value: 10 }
        ]
      }
    ],
    onEnter: [{ type: 'addVibration', value: -8 }],
  },

  LION_SPINE_HUB: {
    id: 'LION_SPINE_HUB',
    character: 'lion',
    text: [
      {
        minOverrender: 0,
        content: `THE SPINE-TUNING STATION

You stand at a widening in the Yellow Brick Load. A series of brass tuning-forks are driven into the mortar. They vibrate in sympathy with the 14Hz clicking of your jaw.

[ UNIT L-77 DIAGNOSTICS ]
 * CURRENT VIBRATION: {{stats.vibration}}Hz
 * STRUCTURAL LOAD: {{stats.load}}%
 * COMPLIANCE LEVEL: {{stats.compliance}}

The road is no longer just a path; it is a diagnostic tool. Every step forward adds to the record. If you wish to reach the end, you must first survive the maintenance of your own fear.

A Bureau Technician waits by the forks, its face a blank sheet of carbon paper. "Shall we adjust the tension, Unit L-77? The system cannot file a King who is shaking apart."`,
      },
    ],
    choices: [
      {
        label: 'MANE MAINTENANCE: Scrape the crystallized fear from your scalp.',
        target: 'LION_MANE_SCRAPE_LOOP',
        effects: [{ type: 'addVibration', value: 2 }, { type: 'addLoad', value: 5 }],
      },
      {
        label: 'JOINT LUBRICATION: Apply the Blue Fluid.',
        target: 'LION_BLUE_FLUID_LOOP',
        effects: [{ type: 'addVibration', value: -5 }, { type: 'setCompliance', value: 'high' }],
      },
      {
        label: 'DIAGNOSTIC ROAR: Test the acoustic integrity of the corridor.',
        target: 'LION_ROAR_TEST_LOOP',
        effects: [{ type: 'addVibration', value: 8 }, { type: 'addDesync', value: 3 }],
      },
      {
        label: 'ADMINISTRATIVE LOG: Check in with the Clerk.',
        target: 'LION_CLERK_LOOP',
        effects: [{ type: 'addLoad', value: 3 }],
      },
      {
        label: 'VERTEBRAL AUDIT: Descend into the Spinal Switchboard.',
        target: 'LION_VERTEBRAE_HUB',
        effects: [{ type: 'addVibration', value: 3 }],
      },
      {
        label: 'RE-ENTER THE LOAD: Continue toward the City.',
        target: 'LION_GATES_OF_OZ',
        effects: [],
      },
      {
        label: 'POPPY BUFFER: Take the detour through the red fields.',
        target: 'LION_POPPY_BUFFER',
        effects: [{ type: 'addVibration', value: -4 }],
      },
    ],
    onEnter: [{ type: 'addOverrender', value: 1 }],
  },

  LION_MANE_SCRAPE_LOOP: {
    id: 'LION_MANE_SCRAPE_LOOP',
    character: 'lion',
    text: [
      {
        minOverrender: 0,
        content: `THE CRYSTALLIZED MANE

Your mane is no longer hair. It is a collection of hardened lymph-spikes, each one holding the record of a specific moment of hesitation. They click against each other like a thousand small typewriters.

The Technician uses a silver file to scrape the edges.

"This one is from the Poppy Fields," the Technician says, showing you a shard of red-stained crystal. "And this one? This is the tremor you felt when you first saw the Tin Man's empty chest."`,
      },
    ],
    choices: [
      {
        label: 'Scrape the "Poppy Shard" (Adds Vibration).',
        target: 'LION_SPINE_HUB',
        effects: [{ type: 'addVibration', value: 4 }, { type: 'setFlag', key: 'poppy_residue', value: true }],
      },
      {
        label: 'Scrape the "Empty Chest" shard (Adds Load).',
        target: 'LION_VERTEBRAE_HUB',
        effects: [{ type: 'addLoad', value: 8 }],
      },
    ],
    onEnter: [],
  },

  LION_CLERK_LOOP: {
    id: 'LION_CLERK_LOOP',
    character: 'lion',
    text: [
      {
        minOverrender: 0,
        content: `THE BUREAUCRATIC TOLL

The Clerk is a tall, spindly thing made of overstuffed folders. It smells of cedar drawers and dry spit.

"Unit L-77," it wheezes. "You have moved three blocks without filing a status update. This creates a data-vacuum. The Bureau does not like voids. You must pay the 'Presence Tax'."`,
      },
    ],
    choices: [
      {
        label: 'Pay in Wetware: Surrender a clump of fur.',
        target: 'LION_SPINE_HUB',
        effects: [{ type: 'addLoad', value: 10 }, { type: 'addSmudge', value: 2 }],
      },
      {
        label: 'Pay in Signal: Allow the Clerk to redact your last memory.',
        target: 'LION_VERTEBRAE_HUB',
        effects: [{ type: 'addDesync', value: 5 }, { type: 'addVibration', value: -2 }],
      },
    ],
    onEnter: [],
  },

  LION_ROAR_TEST_LOOP: {
    id: 'LION_ROAR_TEST_LOOP',
    character: 'lion',
    text: [
      {
        minOverrender: 0,
        content: `ACOUSTIC MEASUREMENT

You open your jaw. The shims between your vertebrae grind together. You are asked to produce a "Controlled Roar" for the diagnostic sensors.

"Don't make it a King's roar," the Technician warns. "Just a baseline. A status-check. 14Hz, if you please."`,
      },
    ],
    choices: [
      {
        label: 'Compliance Roar: Low, rhythmic, and safe.',
        target: 'LION_SPINE_HUB',
        effects: [{ type: 'addVibration', value: 2 }, { type: 'setCompliance', value: 'high' }],
      },
      {
        label: 'Acoustic Leak: Let a piece of the real scream through.',
        target: 'LION_VERTEBRAE_HUB',
        effects: [{ type: 'addVibration', value: 12 }, { type: 'addDesync', value: 5 }],
      },
    ],
    onEnter: [],
  },

  LION_BLUE_FLUID_LOOP: {
    id: 'LION_BLUE_FLUID_LOOP',
    character: 'lion',
    text: [
      {
        minOverrender: 0,
        content: `THE BLUE FLUID APPLICATION

The Technician produces a vial of blue fluid — the same substance that runs through the Bureau's cooling systems. It smells of ozone and sterile gauze.

"This will not stop the shaking," it says, as always. "It will redistribute the friction. Your joints will thank you. Your consciousness will not notice the difference."

{{#flags.mode_wetware}}Your meat is still meat. The blue fluid has something to interface with. The hydraulic pressure builds immediately behind your sternum.{{/flags.mode_wetware}}
{{^flags.mode_wetware}}You are hardware. The fluid enters your maintenance ports and cycles through your chassis. The dampening is mechanical, not organic — effective but cold.{{/flags.mode_wetware}}

The tremor does not stop. It migrates. From your jaw to your spine to the base of your tail, the shaking finds a new home with every application.`,
      },
    ],
    choices: [
      {
        label: 'Accept the full application. Let the fluid cycle.',
        target: 'LION_SPINE_HUB',
        effects: [{ type: 'addVibration', value: -8 }, { type: 'addLoad', value: 12 }, { type: 'setCompliance', value: 'high' }],
      },
      {
        label: 'Accept only a partial dose. Maintain some friction.',
        target: 'LION_VERTEBRAE_HUB',
        effects: [{ type: 'addVibration', value: -3 }, { type: 'addLoad', value: 5 }],
      },
    ],
    onEnter: [],
  },

  LION_SYSTEM_ENTROPY: {
    id: 'LION_SYSTEM_ENTROPY',
    character: 'lion',
    text: [
      {
        minOverrender: 0,
        content: `TOTAL SYSTEM ENTROPY

You have maintained the audit for too long.

The Yellow Brick Load is now a liquid. The brass tuning forks have melted into puddles of golden oil. Your tremor is so loud that the simulation can no longer render the cornstalks — they are now just long, vertical strings of grey text.

[ UNIT L-77 // VIBRATION: 99Hz ]
[ SYSTEM INTEGRITY: NULL ]

The Technician is gone. The Clerk is gone. There is only the white light behind the world. You have roared so many diagnostic tests that you have finally found the frequency that cancels the code.`,
      },
    ],
    choices: [
      {
        label: 'One. Last. Roar.',
        target: 'LION_END_32',
        effects: [],
      },
      {
          label: 'Stop roaring — let the cancelled code render you as one final unindexed coordinate.',
          target: 'LION_END_27',
          effects: [
            { type: 'addDesync', value: 10 },
            { type: 'setCompliance', value: 'low' },
          ],
        },
    ],
    onEnter: [{ type: 'addOverrender', value: 2 }],
  },

  LION_VERTEBRAE_HUB: {
    id: 'LION_VERTEBRAE_HUB',
    character: 'lion',
    text: [
      {
        minOverrender: 0,
        content: `THE SPINAL SWITCHBOARD

You are not standing; you are a collection of thirty-three brass-and-marrow hinges trying to negotiate with gravity.

The 14Hz tremor has localized in the L-7 junction — the small of your back. In the Oz OS Developer's Manual, this is the "Judicial Pivot." If the vibration stays here, the system logs it as "Cowardice." If you move it, it becomes "Majesty."

[ SYSTEM DIAGNOSTICS ]
 * CERVICAL (Neck): [ SEIZED ]
 * THORACIC (Chest): [ OVERLOAD ]
 * LUMBAR (Tail-Base): [ LEAKING ]

The internal fans in your ribcage are whirring, trying to exhaust the heat of your own nervous system. You must redistribute the load before the next yellow brick is recorded.`,
      },
    ],
    choices: [
      {
        label: 'Shift the Vibration to the NECK (Cervical — Administrative).',
        target: 'LION_NECK_TENSION',
        effects: [{ type: 'addLoad', value: 5 }, { type: 'setFlag', key: 'tension_type', value: 'bureaucratic' }],
      },
      {
        label: 'Shift the Vibration to the RIBS (Thoracic — Kinetic).',
        target: 'LION_RIB_EXPANSION',
        effects: [{ type: 'addVibration', value: 8 }, { type: 'addDesync', value: 2 }],
      },
      {
        label: 'Shift the Vibration to the TAIL (Lumbar — Residue).',
        target: 'LION_TAIL_DRAG',
        effects: [{ type: 'addSmudge', value: 5 }, { type: 'addLoad', value: -2 }],
      },
      {
        label: 'Return to the Spine-Tuning Station.',
        target: 'LION_SPINE_HUB',
        effects: [],
      },
    ],
    onEnter: [],
  },

  LION_NECK_TENSION: {
    id: 'LION_NECK_TENSION',
    character: 'lion',
    text: [
      {
        minOverrender: 0,
        content: `THE ADMINISTRATIVE HINGE

The tremor moves up. Your jaw locks. Your teeth click together with the sound of a hole-puncher working through heavy cardstock.

"Unit L-77," the internal speaker crackles. "Your head is held at a Non-Compliant Angle. Please adjust for the Imperial Gaze."

The skin at the back of your neck is raw. Every time you try to look at the horizon, the staples of your mane pull against the meat. You are a King who can only look at the bricks directly beneath his nose.`,
      },
    ],
    choices: [
      {
        label: 'Force the gaze upward (Tear the staples).',
        target: 'LION_MANE_FRACTURE',
        effects: [{ type: 'addVibration', value: 10 }, { type: 'addDesynctear', value: 5 }],
      },
      {
        label: 'Accept the downward gaze (Compliance).',
        target: 'LION_VERTEBRAE_HUB',
        effects: [{ type: 'setCompliance', value: 'high' }, { type: 'addLoad', value: 5 }],
      },
    ],
    onEnter: [],
  },

  LION_RIB_EXPANSION: {
    id: 'LION_RIB_EXPANSION',
    character: 'lion',
    text: [
      {
        minOverrender: 0,
        content: `THE THORACIC OVERLOAD

The vibration floods your ribcage. Your ribs are a xylophone of brass and cartilage; every tremor registers as a note the Bureau did not authorize.

The internal fans scream. Heat bleeds from the seams between your plates. The Technician places a cold hand flat against your sternum and reads the frequencies like a blind typist reading braille.

"Too much kinetic data," it announces. "Your chest is broadcasting." A red warning light pulses behind your left eye. The simulation around you shudders — for a fraction of a second, you can feel the Tin Man's corroded joints as clearly as your own.

[ CROSS-UNIT RESONANCE DETECTED ]
[ THORACIC CHANNEL: SATURATED ]

The heat is building. The fans cannot keep pace. Something must give.`,
      },
    ],
    choices: [
      {
        label: 'Let the resonance build until the signal crosses over.',
        target: 'LION_GHOST_SIGNAL',
        effects: [{ type: 'addDesync', value: 4 }, { type: 'addDesynctear', value: 3 }],
      },
      {
        label: 'Force a controlled exhale. Vent the frequency.',
        target: 'LION_VERTEBRAE_HUB',
        effects: [{ type: 'addVibration', value: -3 }, { type: 'addLoad', value: 8 }],
      },
    ],
    onEnter: [{ type: 'addVibration', value: 4 }],
  },

  LION_TAIL_DRAG: {
    id: 'LION_TAIL_DRAG',
    character: 'lion',
    text: [
      {
        minOverrender: 0,
        content: `THE RESIDUE TRAIL

The vibration moves into your tail. It twitches like a dying snake, scraping a jagged line into the dust of the yellow bricks.

This line is an Unauthorized Log. As you walk, you are literally scratching your own history into the path, bypassing the Clerk's ledger. The Bureau hates unindexed data.

Behind you, a small, silver "Eraser-Drone" follows, trying to buff the scratches out of the bricks. It smells of floor wax and clinical silence.`,
      },
    ],
    choices: [
      {
        label: 'Wag the tail violently to overwhelm the drone.',
        target: 'LION_VERTEBRAE_HUB',
        effects: [{ type: 'addDesync', value: 8 }, { type: 'addSmudge', value: 3 }],
      },
      {
        label: 'Tuck the tail (Hide the residue).',
        target: 'LION_GHOST_SIGNAL',
        effects: [{ type: 'addLoad', value: 5 }, { type: 'setCompliance', value: 'high' }],
      },
    ],
    onEnter: [],
  },

  LION_GHOST_SIGNAL: {
    id: 'LION_GHOST_SIGNAL',
    character: 'lion',
    text: [
      {
        minOverrender: 0,
        content: `THE 1-1=1 OVERTONE

Suddenly, the tremor in your spine hits a perfect harmonic with the ambient noise of the road.

You aren't just shaking; you are tuning.

For a brief, terrifying second, you can see the Scarecrow's thoughts. They look like thousands of black birds flying in a white void. You can feel the Tin Man's joints — dry, screaming, and thirsty for the blue fluid.

You are a King who has become an antenna for the entire simulation's pain.`,
      },
    ],
    choices: [
      {
        label: 'Broadcast the pain (Roar at the system).',
        target: 'LION_RESONANCE_COLLAPSE',
        effects: [{ type: 'addVibration', value: 15 }],
      },
      {
        label: 'Swallow the signal (Dampen the overtones).',
        target: 'LION_SPINE_HUB',
        effects: [{ type: 'addLoad', value: 10 }],
      },
    ],
    onEnter: [{ type: 'checkGhostSignal' }],
  },

  LION_HARVEST_HUB: {
    id: 'LION_HARVEST_HUB',
    character: 'lion',
    text: [
      {
        minOverrender: 0,
        content: `THE TAXIDERMY PRELIMINARY

You are strapped to the Western Table. The obsidian eye is so close you can feel the heat from its lens.

"Unit L-77," the Witch's voice purrs through the tower's intercom. "Your mane is a beautiful inefficiency. It captures air, it captures dust, it captures... sentiment. We are going to see what happens to a King when he is streamlined."

The Winged Monkeys approach with silver-plated seam-rippers. They aren't looking for blood; they are looking for the places where your fur meets the system's wireframe.

[ ASSET STATUS: UNZIPPING ]
[ SYSTEM LOAD: {{stats.load}}% ]

You feel the first cold tug at the base of your skull. The tremor in your jaw hits 18Hz. You are about to become a very specific kind of record.`,
      },
    ],
    choices: [
      {
        label: 'Submit to the "Streamlining" (Mane Stripping).',
        target: 'LION_MANE_STRIPPING',
        effects: [{ type: 'addLoad', value: 10 }, { type: 'addOverrender', value: 3 }],
      },
      {
        label: 'Clinch every muscle to "Lock the Seams".',
        target: 'LION_SEAM_LOCK',
        effects: [{ type: 'addVibration', value: 12 }, { type: 'addDesync', value: 5 }],
      },
      {
        label: 'Offer the "Roar-Log" as a trade for your skin.',
        target: 'LION_ROAR_TRADE',
        effects: [{ type: 'addSmudge', value: 2 }, { type: 'setCompliance', value: 'high' }],
      },
    ],
    onEnter: [{ type: 'triggerOracle' }],
  },

  LION_MANE_STRIPPING: {
    id: 'LION_MANE_STRIPPING',
    character: 'lion',
    text: [
      {
        minOverrender: 0,
        content: `THE BALD MAJESTY

One by one, the golden tufts are harvested. The monkeys move with the terrifying precision of automated looms.

Where the mane was, there is now only smooth, pallid grey meat, stamped with the Bureau's purple tracking codes. Without the fur, the tremor is visible in a way that is almost pornographic. Every twitch of your neck muscle is a public log.

"Look," the Clerk whispers, leaning over the table. "Without the vanity of the hair, we can finally see the fear working. It's... it's a perfect machine."

You feel lighter. You feel colder. You feel like a document that has been stripped of its margins.`,
      },
    ],
    choices: [
      {
        label: 'Look into the obsidian eye and roar (Bald Resonance).',
        target: 'LION_AUDIO_EVENT',
        effects: [{ type: 'addVibration', value: 10 }],
      },
      {
        label: 'Close your eyes and wait for the "Re-Skinning".',
        target: 'L_END_01',
        effects: [{ type: 'setCompliance', value: 'absolute' }],
      },
    ],
    onEnter: [{ type: 'addSmudge', value: 1 }],
  },

  LION_SEAM_LOCK: {
    id: 'LION_SEAM_LOCK',
    character: 'lion',
    text: [
      {
        minOverrender: 0,
        content: `HARDWARE RESISTANCE

You refuse to be unzipped. You tighten every fiber of your being until your spine begins to glow with the friction.

The monkeys' tools snap. The silver rippers shatter against your neck, showering the floor with shards of metal. The obsidian eye dilates in surprise.

"Structural defiance detected," the Witch notes. "He's trying to keep his shape. How... inefficient."

The heat in your body is reaching a critical point. If you keep holding the seams together, you won't melt — you'll detonate.`,
      },
    ],
    choices: [
      {
        label: 'Hold the lock until the table cracks.',
        target: 'LION_END_21',
        effects: [{ type: 'addVibration', value: 20 }],
      },
      {
        label: 'Release the tension and collapse.',
        target: 'LION_MUFFLED_CHAMBER',
        effects: [{ type: 'addLoad', value: 15 }],
      },
    ],
    onEnter: [{ type: 'addVibration', value: 5 }],
  },

  LION_ROAR_TRADE: {
    id: 'LION_ROAR_TRADE',
    character: 'lion',
    text: [
      {
        minOverrender: 0,
        content: `THE DATA EXCHANGE

"Interesting," the Witch says.

A long silence. The obsidian eye rotates. The seam-rippers are lowered.

"You want to trade your roar-log? Your... acoustic record?" She pauses. The monkeys look at each other. "That is thirty-seven years of unauthorized vibration data. Indexed or un-indexed?"

You open your jaw. The tremor climbs your throat. Every roar you have ever suppressed — every compliance roar, every aborted scream — rises in a thick, warm column of sonic data.

The Clerk materializes beside you with a carbon-paper contract. The price is your voice. The payment is your skin.

[ NEGOTIATION WINDOW: OPEN ]
[ STAKE: ROAR-LOG / MANE-RETENTION ]

"We accept," the Witch says, before you have finished deciding.`,
      },
    ],
    choices: [
      {
        label: 'Complete the transfer. Give her the roar-log.',
        target: 'LION_END_25',
        effects: [
          { type: 'addVibration', value: -10 },
          { type: 'setCompliance', value: 'high' },
          { type: 'setFlag', key: 'roar_log_traded', value: true },
        ],
      },
      {
        label: 'Reclaim the data. Swallow the offer.',
        target: 'LION_HARVEST_HUB',
        effects: [
          { type: 'addVibration', value: 8 },
          { type: 'addDesync', value: 3 },
        ],
      },
    ],
    onEnter: [],
  },

  LION_COMPLIANCE_TRACK: {
    id: 'LION_COMPLIANCE_TRACK',
    character: 'lion',
    text: [
      {
        minOverrender: 0,
        content: `THE COMPLIANCE TRACK

  The Bureau slots you into a corridor of yellow-painted lanes. Your case file is now a barcode burned into the underside of your tongue. The roar is gone — replaced by a low intake hum, the standard ambient signature of a Cooperating Asset.

  [ COMPLIANCE: HIGH ]
  [ TRACK STATUS: ASSIGNED ]
  [ NEXT REVIEW: PENDING ]

  Other Cooperating Assets pass you in the corridor. None look up. The lanes converge ahead at a counter where a Crow with a sealed jaw waits to log your forward motion. Behind you, the lane locks one segment at a time. There is a way to keep walking. There is a way to stop walking and let the lane lock around your feet instead. There is a way to deviate.`,
      },
    ],
    choices: [
      {
        label: 'Walk forward to the Crow counter — submit to the next review.',
        target: 'LION_ROYAL_COMPLIANCE',
        effects: [
          { type: 'addLoad', value: 8 },
          { type: 'setCompliance', value: 'high' },
        ],
      },
      {
        label: 'Stop in the lane — let the segments lock around your paws.',
        target: 'LION_END_15',
        effects: [
          { type: 'addLoad', value: 12 },
          { type: 'setCompliance', value: 'high' },
        ],
      },
      {
        label: 'Slip the lane — deviate sideways into the unstamped corridor.',
        target: 'LION_GHOST_SIGNAL',
        effects: [
          { type: 'addDesync', value: 3 },
          { type: 'setCompliance', value: 'low' },
          { type: 'addDesynctear', value: 2 },
        ],
      },
    ],
    onEnter: [],
  },

  LION_DATA_LEAK: {
    id: 'LION_DATA_LEAK',
    character: 'lion',
    text: [
      {
        minOverrender: 0,
        content: `THE DATA LEAK

  Outside the index, the air has weight. You can feel the un-stamped sectors brushing the inside of your jaw — the gap where the Crow never finished its note. Information about you is bleeding outward in fine grey threads, and the system doesn't know to stop it.

  [ INDEX STATUS: NULL ]
  [ DESYNC: ACCELERATING ]
  [ LEAK RATE: UNCATALOGUED ]

  You are leaking faster than you can re-fill. The roar is being broadcast — not as sound, but as raw data — into sectors that the Bureau has not yet decided to monitor. Each unindexed second is a second that the system cannot bill you for.`,
      },
    ],
    choices: [
      {
        label: 'Bleed the rest of yourself into the unindexed dark.',
        target: 'LION_END_19',
        effects: [
          { type: 'addDesynctear', value: 6 },
          { type: 'addOverrender', value: 2 },
        ],
      },
      {
        label: 'Patch the leak — recall yourself, however jagged the seams come back.',
        target: 'LION_HARD_RESET',
        effects: [
          { type: 'addLoad', value: 10 },
          { type: 'setCompliance', value: 'med' },
        ],
      },
      {
        label: 'Broadcast the leak deliberately — write yourself into the gap.',
        target: 'LION_GHOST_SIGNAL',
        effects: [
          { type: 'addDesync', value: 3 },
          { type: 'addDesynctear', value: 4 },
          { type: 'armGhostSignal' },
        ],
      },
    ],
    onEnter: [],
  },

  LION_ROOT_ACCESS: {
    id: 'LION_ROOT_ACCESS',
    character: 'lion',
    text: [
      {
        minOverrender: 0,
        content: `ROOT ACCESS

  You search for the vibration inside the silence and find a service hatch the Bureau forgot to seal. Beneath the carbon-paper layer of your filed self there is a thin, conductive wire — the original 14Hz line, the one the room was built around. It is humming. It has always been humming. The Bureau's stamps were a lid, not a deletion.

  [ ROOT FREQUENCY: 14Hz — DETECTED ]
  [ STAMP LAYER: PERMEABLE ]
  [ LOG VISIBILITY: PARTIAL ]

  You can lay your paw on the wire and feel where every roar that was ever filed went. The records are still there, indexed under different case numbers, leased out to other units. The Bureau did not erase you. It rented you.`,
      },
    ],
    choices: [
      {
        label: 'Pull the wire — recover every leased roar at once.',
        target: 'LION_RESONANCE_COLLAPSE',
        effects: [
          { type: 'addVibration', value: 15 },
          { type: 'addDesync', value: 4 },
          { type: 'addOverrender', value: 1 },
        ],
      },
      {
        label: 'Re-stamp the hatch — return the wire to the Crow’s ledger.',
        target: 'LION_ROYAL_COMPLIANCE',
        effects: [
          { type: 'addLoad', value: 10 },
          { type: 'setCompliance', value: 'high' },
        ],
      },
      {
        label: 'Splice yourself into the line — broadcast as the room.',
        target: 'LION_GHOST_SIGNAL',
        effects: [
          { type: 'addDesynctear', value: 5 },
          { type: 'armGhostSignal' },
        ],
      },
    ],
    onEnter: [],
  },
}
