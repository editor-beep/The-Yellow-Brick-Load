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
        target: 'LION_END_25',
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
      }
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
}
