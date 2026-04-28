/**
 * YELLOW BRICK LOAD — Oracle Deck Data
 *
 * 12 decks: 8 character decks + 4 enforcer decks.
 * Each deck: 8 cards.
 * Each card: id, name, cardText (symbolic image), ritualText (interloper action),
 *            effect (game effect descriptor), surreality (optional 1–10).
 *
 * All content rooted in L. Frank Baum's original Oz books — not the MGM adaptation.
 * The Silver Shoes (not ruby) carry Dorothy home. Glinda rules the South.
 * The Wizard is a humbug from Omaha. The Kalidahs are half-bear, half-tiger.
 * The Wicked Witch of the West has one eye — a powerful telescope.
 *
 * Character Interlopers (oracle-ritual NPCs):
 *   lion       — Bureau Crow
 *   tin_man    — Maintenance Auditor
 *   scarecrow  — Straw Clerk
 *   dorothy    — Dust Clerk
 *   glinda     — Porcelain Auditor
 *   witch_west — Obsidian Matron
 *   witch_east — Ground Impact Assessor
 *   wizard     — Humbug Surgeon
 *   munchkins  — Lead Munchkin
 *   winged_monkeys — Wing Captain
 *   kalidah    — Merge Coordinator
 *   poppy_field — Field Pharmacist
 */

export const oracleDecks = {

  // ══════════════════════════════════════════════════════════════════════════
  // LION — Oz-Tarot
  // Interloper: Bureau Crow — black-feathered administrative entity, beak
  // whetted for puncturing forms, talons that grip and will not release.
  // Triggers at vibration >= 7.
  // ══════════════════════════════════════════════════════════════════════════
  lion: {
    deckName: 'Oz-Tarot',
    interloper: 'Bureau Crow',
    cards: [
      {
        id: 'lion_01',
        name: 'The Roaring Cavity',
        cardText: 'A wet hollow where the roar should be — a mouth open wide around an absence. The tremor originates here. The cavity is meticulous and official, its walls papered with filed complaints about the sound it no longer makes.',
        ritualText: 'The Bureau Crow inserts its beak directly into the jaw joint, which is still clicking. It punctures the form-filing cabinet behind the sternum. The click becomes a creak. The creak becomes a filing sound.',
        effect: { type: 'addLoad', value: 10 },
        surreality: 7,
      },
      {
        id: 'lion_02',
        name: 'Tremor Standard',
        cardText: 'A calibrated instrument shaped like a spine. The needle reads "within acceptable range" at all times, regardless of what is happening to the spine. The range is always acceptable.',
        ritualText: 'The Crow places one talon on the jaw hinge and reads the oscillation frequency. It marks the reading on a form labeled "Acceptable Tremor Range." The form is stamped COMPLIANT.',
        effect: { type: 'addVibration', value: 3 },
        surreality: 5,
      },
      {
        id: 'lion_03',
        name: 'Mane Debt',
        cardText: 'A crown of matted fur mounted on a filing spike. The fur is still trembling. The spike is a bureaucratic instrument driven through the anterior fontanelle. This is a standard collateral seizure.',
        ritualText: 'The Crow separates three strands of mane from the jawline with its beak and files them under "Crown Collateral." The scalp contracts. The Bureau does not acknowledge scalp contractions.',
        effect: { type: 'addLoad', value: 7 },
        surreality: 8,
      },
      {
        id: 'lion_04',
        name: "The Coward's Audit",
        cardText: 'A ledger open to a page entirely filled with the number zero. Zero courage units logged. Zero threat output recorded. The ledger is three hundred years old and still filling.',
        ritualText: 'The Crow opens the filing cabinet in the chest and counts each terror-episode by name, stamping each one. The stamping takes a long time. The Lion hears every stamp.',
        effect: { type: 'setCompliance', value: 'high' },
        surreality: 6,
      },
      {
        id: 'lion_05',
        name: 'Forest Jurisdiction',
        cardText: 'A map of the forest rendered entirely in Bureau red tape — every tree catalogued as a potential compliance violation. The animals are listed as witnesses. The witnesses are also violations.',
        ritualText: 'The Crow produces a survey instrument and triangulates the position relative to all known exit points. All exits are logged as unauthorized. The forest itself is stamped "Jurisdiction: Active."',
        effect: { type: 'addDesync', value: 1 },
        surreality: 4,
      },
      {
        id: 'lion_06',
        name: 'Claw Registration',
        cardText: 'A paw with every claw individually tagged and serialized. The claws are licensed for defensive use only. Offensive use requires a separate form. That form has never been approved.',
        ritualText: 'The Crow taps each claw with its beak, taking inventory. Three claws are unregistered. It bites them gently — a formal notice. The paw goes numb. This is the standard processing sensation.',
        effect: { type: 'addSmudge', value: 1 },
        surreality: 5,
      },
      {
        id: 'lion_07',
        name: 'The Lash Protocol',
        cardText: 'A tail twitching in an empty room. The room is full of the tail\'s own records — everything it has knocked over, every signal it has sent without authorization. The tail reads its own history and continues twitching.',
        ritualText: 'The Crow follows the tail\'s oscillation pattern, reading it like a telegraph signal. The signal spells nothing coherent. The Crow files it as incoherent anyway. Coherence is not required for compliance.',
        effect: { type: 'addOverrender', value: 1 },
        surreality: 7,
      },
      {
        id: 'lion_08',
        name: 'Crown of Teeth',
        cardText: 'A set of teeth arranged in a circle like a crown. Each tooth is a filing receipt. The gums are stamped. The whole construction is presented as an honor.',
        ritualText: 'The Crow places a ceremonial talon on the skull and recites the Unit L-77 designation. It files the Lion under "Royal Compliant — Temporary." The designation expires at the next tremor event. There will be a next tremor event.',
        effect: { type: 'addLoad', value: 5 },
        surreality: 9,
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // TIN MAN — Scrapyard Tarot
  // Interloper: Maintenance Auditor — oil-stained overalls, clipboard of
  // discontinued parts, wrench hands. Nick Chopper's history: limbs removed
  // one by one by an enchanted axe, each replaced with tin; heart never replaced.
  // Triggers at corrosion >= 10.
  // ══════════════════════════════════════════════════════════════════════════
  tin_man: {
    deckName: 'Scrapyard Tarot',
    interloper: 'Maintenance Auditor',
    cards: [
      {
        id: 'tin_man_01',
        name: 'The Hollow Register',
        cardText: 'A chest cavity rendered as an industrial audit form. Heart — ABSENT (logged, case #7734-A). The cavity is clean. The void is inventoried and approved.',
        ritualText: 'The Auditor opens the chest plate with a wrench. The cavity is inspected and noted on a clipboard: "Hollow — within spec." The chest plate is closed. The click of the latch is very loud in the silence.',
        effect: { type: 'addCorrosion', value: 2 },
        surreality: 7,
      },
      {
        id: 'tin_man_02',
        name: 'Rust Assessment',
        cardText: 'A joint cross-sectioned to show the oxidation layer growing inside. The rust is developing correctly. Each formation is labeled "Within Acceptable Corrosion Parameters."',
        ritualText: 'The Auditor scrapes a sample from the jaw hinge and tastes it. "Ferric oxide content elevated, structurally non-critical." It prescribes additional lubrication. The prescription is another form.',
        effect: { type: 'addLubrication', value: 5 },
        surreality: 3,
      },
      {
        id: 'tin_man_03',
        name: 'The Enchanted Axe Report',
        cardText: 'An axe on a form labeled INCIDENT REPORT — LIMB SEPARATION. The axe is still moving. The checkboxes for "voluntary" and "involuntary" have both been ticked.',
        ritualText: 'The Auditor reads from the incident history aloud, itemizing each amputation event with a reference number. Each number is stamped in the joint where the original limb was removed. The stamping takes time.',
        effect: { type: 'addSeizure', value: 2 },
        surreality: 8,
      },
      {
        id: 'tin_man_04',
        name: 'Heart Cavity Inspection',
        cardText: 'An empty tin sphere in an anatomical diagram labeled HEART — PREVIOUS OCCUPANT. The space for "Current Occupant" is blank. The absence is the most detailed part of the drawing.',
        ritualText: 'The Auditor listens at the chest panel with a stethoscope of copper tubing and filing receipts. It hears nothing. It writes "HOLLOW — COMPLIANT" and stamps the left breast panel. The stamp leaves a dent.',
        effect: { type: 'addLoad', value: 8 },
        surreality: 6,
      },
      {
        id: 'tin_man_05',
        name: 'Oil Ledger',
        cardText: 'A barrel of oil rendered as a financial document. Lubrication is itemized as both asset and liability. The barrel is always running low. The deficit is listed as "operational normal."',
        ritualText: 'The Auditor applies oil to every joint in sequence, annotating each application in the ledger. The joints move. The motion is logged. The Auditor does not acknowledge what the motion might mean to the unit experiencing it.',
        effect: { type: 'addLubrication', value: 3 },
        surreality: 2,
      },
      {
        id: 'tin_man_06',
        name: 'The Seized Joint',
        cardText: 'An illustration of maximum friction — a joint welded shut by oxidation, frozen mid-gesture. The gesture is preserved for inspection. The gesture is one of reaching. For what is not noted.',
        ritualText: 'The Auditor inserts a probe into the seized joint and rocks it slowly, measuring the force required. "Mobility: impaired. Recommendation: scheduled replacement." The joint remains seized.',
        effect: { type: 'addSeizure', value: 3 },
        surreality: 5,
      },
      {
        id: 'tin_man_07',
        name: "Nick Chopper's Invoice",
        cardText: 'A bill for services rendered — the replacement of a human body, line by line. Arm (left): 4 oz tin. Arm (right): 4 oz tin. Legs (2): 12 oz tin. Torso: 18 oz tin. Heart: NOT ORDERED.',
        ritualText: 'The Auditor reads the original invoice aloud, verifying each item against the current unit. All items are present. The heart line is skipped without comment. The Tin Man hears the skip. This is intentional.',
        effect: { type: 'addUtility', value: 2 },
        surreality: 9,
      },
      {
        id: 'tin_man_08',
        name: 'The Replacement Form',
        cardText: 'A form for organ and limb replacement, all fields filled in except "Reason for Removal," which has been left blank. The blank is the most honest field on the form.',
        ritualText: 'The Auditor leaves a copy of the replacement form with the unit. "For your records. In case the situation recurs." It does not clarify which situation. It walks away. The form is still warm from the Auditor\'s hands.',
        effect: { type: 'addLoad', value: 6 },
        surreality: 7,
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // SCARECROW — Straw Oracle
  // Interloper: Straw Clerk — thin figure, clothing stuffed with papers
  // rather than straw, reads aloud from documents while removing fistfuls
  // of packing material.
  // Triggers at scatter >= 5.
  // ══════════════════════════════════════════════════════════════════════════
  scarecrow: {
    deckName: 'Straw Oracle',
    interloper: 'Straw Clerk',
    cards: [
      {
        id: 'scarecrow_01',
        name: 'The Empty Head Form',
        cardText: 'A skull cavity filled entirely with straw and filing papers. The fibers have wrapped themselves around each paper, creating a network of dry neurons. The diagram labels this "Standard Brain Approximation."',
        ritualText: 'The Straw Clerk reaches into the hat and pulls out a handful of filling. It reads the straw the way a cartomancer reads cards — by the crumble, the brittle bend, the sour smell of field-dry grass. "Thought activity: present. Verification: pending."',
        effect: { type: 'addScatter', value: 2 },
        surreality: 7,
      },
      {
        id: 'scarecrow_02',
        name: 'Scatter Reading',
        cardText: 'A field after wind — straw everywhere, no center. The filing cabinet is open. The forms are airborne. The question "what remains?" is the only form still on the desk.',
        ritualText: 'The Clerk carefully gathers the scattered material from the ground and holds it up to the grey Oz sky. The light shows through the thin fibers. The Clerk reads the silhouette as diagnostic data. It is very quiet when it works.',
        effect: { type: 'addScatter', value: 3 },
        surreality: 5,
      },
      {
        id: 'scarecrow_03',
        name: 'Brain Procurement Notice',
        cardText: 'An official request for a brain, correctly formatted and stamped DENIED. Reason for denial: "Brain procurement requires prior demonstration of brain function. Unit has not demonstrated prior brain function." The logic is circular. It has always been circular.',
        ritualText: 'The Clerk hands the unit a copy of the procurement notice and pushes a handful of straw back through the hat seam. "The application process takes time. There is more time than there is straw." The hat is restuffed improperly.',
        effect: { type: 'addLoad', value: 7 },
        surreality: 8,
      },
      {
        id: 'scarecrow_04',
        name: 'Crow Consultation',
        cardText: 'A crow perched on the scarecrow\'s shoulder, consulting openly. The crow is not afraid. The crow was never afraid. The crow is here professionally.',
        ritualText: 'The Straw Clerk summons a crow and places it on the unit\'s shoulder. The crow pecks the hat. The Clerk translates: "The mechanism is functional but non-authoritative. This is the technical definition of your condition."',
        effect: { type: 'addDesync', value: 1 },
        surreality: 6,
      },
      {
        id: 'scarecrow_05',
        name: 'Field Survey',
        cardText: 'A map of the field the Scarecrow was planted in. Every coordinate is labeled. The stake position is marked. The survey does not include a direction called "away."',
        ritualText: 'The Clerk measures the distance from the unit to the nearest stake hole. It marks the reading on the inside of the hat: "Drift: [distance] units." The stamp will be read by whatever looks in the hat later.',
        effect: { type: 'addDisplacement', value: 2 },
        surreality: 4,
      },
      {
        id: 'scarecrow_06',
        name: 'Pin Architecture',
        cardText: 'A diagram of the interior construction — each pin and needle plotted as a data node in a nervous system schematic. The architecture works. It just does not feel like anything.',
        ritualText: 'The Clerk inventories each pin and needle by touch, pressing each one inward until it catches on paper. Each catch is logged. "Pain threshold: not applicable, but structural memory is present."',
        effect: { type: 'addStitchIntegrity', value: 3 },
        surreality: 7,
      },
      {
        id: 'scarecrow_07',
        name: 'The Burning Permit',
        cardText: 'A permit for agricultural burning. The permit covers the north field. The north field is the field the Scarecrow was planted in. The permit has been issued retroactively.',
        ritualText: 'The Clerk unfolds the burning permit and places it against the chest. The paper is warm. "This is for your records. The permit predates your current assignment." The paper is warm in a way that paper should not be warm.',
        effect: { type: 'addSmudge', value: 1 },
        surreality: 9,
      },
      {
        id: 'scarecrow_08',
        name: 'Neural Allocation',
        cardText: 'A form allocating neural resources to a unit that has no neurons. The form does not acknowledge this discrepancy. This is either the most bureaucratic or the most merciful thing about it.',
        ritualText: 'The Clerk fills the neural allocation form with straw-bundle measurements: tensile strength, fiber count, moisture content. These numbers are entered in the fields for "Synaptic Density" and "Cortical Load." The Clerk does not comment on the substitution.',
        effect: { type: 'addScatter', value: 1 },
        surreality: 8,
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // DOROTHY — Dust Oracle
  // Interloper: Dust Clerk — woman in faded gingham, skin is swirling topsoil
  // and requisition forms, eyes like spinning silver dollars. Makes shallow
  // incisions at heel or temple, reads nerve fiber mixed with ruby dust and
  // Kansas soil.
  // Triggers at displacement >= 5.
  // ══════════════════════════════════════════════════════════════════════════
  dorothy: {
    deckName: 'Dust Oracle',
    interloper: 'Dust Clerk',
    cards: [
      {
        id: 'dorothy_01',
        name: 'The Homesick Nerve',
        cardText: 'A nerve fiber wound around a compass needle pointing in a direction that does not exist on the Oz coordinate system. The direction is labeled "Home." The Bureau has not ratified this direction.',
        ritualText: 'The Dust Clerk kneels and makes a shallow cut along the heel — not cruel, precise — and extracts a single fiber coated in dust and the smell of Kansas wheat fields at noon. She holds it up. The fiber pulls northwest. She logs the reading.',
        effect: { type: 'addDisplacement', value: 2 },
        surreality: 6,
      },
      {
        id: 'dorothy_02',
        name: 'Ruby Incision',
        cardText: 'A cross-section of the Silver Shoe — the inner lining where sole contacts skin. The friction channel is visible. The channel runs from the shoe into the heel and up the spine. It has been running since the landing.',
        ritualText: 'The Dust Clerk traces the incision line along the dorsum of the foot before cutting. The cut is shallow, cold, and quick. The ruby-bright dust in the channel glows briefly. She logs the glow frequency without blinking.',
        effect: { type: 'addRubyFriction', value: 3 },
        surreality: 8,
      },
      {
        id: 'dorothy_03',
        name: 'Warrant Thread',
        cardText: 'A thread of nerve fiber tied to a Bureau warrant. The thread cannot be cut without executing the warrant. The warrant is for being in Oz without prior authorization. The thread and the warrant are the same thing.',
        ritualText: 'The Dust Clerk pulls a thread from the temple incision and winds it around a rolled warrant form. The thread holds. The form holds. She stamps both. "Registered," she says. The warrant is now active.',
        effect: { type: 'addWarrant', value: 2 },
        surreality: 7,
      },
      {
        id: 'dorothy_04',
        name: 'Terminal Pull',
        cardText: 'The force diagram of an object drawn home — every vector pointing toward a coordinate that is, on average, four hundred miles northeast and sixty years in the past.',
        ritualText: 'The Clerk applies pressure to the heel incision and reads the nerve\'s tension. The fiber is taut. It is always taut. "Homeward tension: elevated," she notes. "This is neither symptom nor diagnosis. It is a condition of the material."',
        effect: { type: 'addLoad', value: 8 },
        surreality: 5,
      },
      {
        id: 'dorothy_05',
        name: 'Kansas Residue',
        cardText: 'A soil sample labeled PRE-OZ. The soil is dry and grey and carries a mineral signature no Oz geological survey has ever catalogued. The Bureau calls it "legacy contamination." The soil calls it nothing. It is just soil.',
        ritualText: 'The Clerk scrapes dust from the gingham hem and examines it under a lens mounted in her eye socket. "Foreign substrate. This has not been updated to Oz-standard soil chemistry." She logs the contamination. The contamination log is very long.',
        effect: { type: 'addDisplacement', value: 1 },
        surreality: 4,
      },
      {
        id: 'dorothy_06',
        name: 'Cyclone Core',
        cardText: 'The eye of the cyclone rendered as an anatomical structure — a hollow in the center of the torso where the atmospheric event left its impression. The hollow is precisely house-shaped.',
        ritualText: 'The Dust Clerk places both palms flat on the sternum and measures the atmospheric residue of the cyclone event. The pressure reading is still elevated. "You are still inside the event," she notes. "Cyclone data: ongoing."',
        effect: { type: 'addDesync', value: 2 },
        surreality: 9,
      },
      {
        id: 'dorothy_07',
        name: 'Toto Signal',
        cardText: 'A small dog drawn as a signal transmitter — the bark wave shown as amplitude data on a frequency chart. The signal is continuous. It is the clearest signal in the system. It is the only signal no one is listening to.',
        ritualText: 'The Clerk extracts a fiber from behind the ear and stretches it until it vibrates at a frequency she identifies as "companion-lock." "This attachment is filing with the Bureau as emotional contraband," she says. She files it. She does not remove it.',
        effect: { type: 'addSmudge', value: 1 },
        surreality: 6,
      },
      {
        id: 'dorothy_08',
        name: 'Silver Conductor',
        cardText: 'The Silver Shoes rendered as a circuit schematic. The heel-to-heel connection is the active circuit. Three clicks close the loop. The diagram labels the destination as "INPUT: [REDACTED]."',
        ritualText: 'The Clerk crouches at the feet and taps each shoe heel twice with a conductor probe. The shoes hum at a frequency she measures and logs carefully. "Destination lock: partial. The signal is present but the input address has not been entered." She waits. She is very patient.',
        effect: { type: 'addRubyFriction', value: 2 },
        surreality: 10,
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // GLINDA — Refraction Oracle
  // Interloper: Porcelain Auditor — immaculate pink silk over visible subdermal
  // tubing, skin like flawless porcelain, hands ending in silver refracting lenses
  // and suture needles. Glinda rules the South (Quadling Country), holds the
  // Great Book of Records.
  // Triggers at refraction >= 5.
  // ══════════════════════════════════════════════════════════════════════════
  glinda: {
    deckName: 'Refraction Oracle',
    interloper: 'Porcelain Auditor',
    cards: [
      {
        id: 'glinda_01',
        name: 'Pink Filament',
        cardText: 'A strand of refined lymph-fluid, spun to a filament finer than hair. Under the right light, it transmits optical data instead of emotion. The Bureau logs this as "neutral asset." The filament knows better.',
        ritualText: 'The Porcelain Auditor makes a hair-fine incision along the grace line at the wrist and draws out one pink filament. She holds it against a refracting lens. The light bends. She reads the bend angle.',
        effect: { type: 'addRefraction', value: 3 },
        surreality: 7,
      },
      {
        id: 'glinda_02',
        name: 'Bubble Suture',
        cardText: 'A wound closed with a bubble membrane instead of thread. The membrane is transparent and perfect and fragile. It will hold as long as nothing touches it. Much depends on nothing touching it.',
        ritualText: 'The Auditor sutures a minor incision with bubble-membrane drawn from the wrist joint. The membrane stretches tight and catches the pink light. It is very beautiful. It will not survive significant pressure. This is noted as "Acceptable Durability."',
        effect: { type: 'addInsulation', value: 2 },
        surreality: 8,
      },
      {
        id: 'glinda_03',
        name: 'Lens Fracture',
        cardText: 'A refracting lens cracked along a meridian. The crack creates a new angle. The new angle illuminates something the original lens was not designed to show. The cracks are the most honest part of any lens.',
        ritualText: 'The Auditor inserts a silver lens between the eyelid and the eye. The lens is perfect until she applies controlled pressure and creates a measured fracture. The fracture\'s new angles are recorded. "Refraction: elevated. Analysis: non-standard."',
        effect: { type: 'addRefraction', value: 2 },
        surreality: 6,
      },
      {
        id: 'glinda_04',
        name: 'Bubble Burst',
        cardText: 'The moment of membrane rupture — documented in slow motion. The fragments of the bubble are individually labeled. The list of what the bubble contained when it burst is very long and is not included in this document.',
        ritualText: 'The Auditor selects a bubble at the grace-line and applies a single measured pressure. The burst is logged by sound, spray radius, and contents. She reseals the site with a fresh membrane. The process takes less time than seems possible for what was lost.',
        effect: { type: 'addLoad', value: 6 },
        surreality: 7,
      },
      {
        id: 'glinda_05',
        name: 'Southern Archive',
        cardText: 'The Great Book of Records open to a page mid-entry. The entry is being written in real time. The events it describes are happening now. The book is always accurate. The book does not have a word for mercy outside of its index.',
        ritualText: 'The Auditor recites from memory a section of the Southern Archive relevant to the current unit\'s refraction readings. The recitation is fluent and emotionally flat. The unit experiences the recitation as being known completely. This is supposed to be a gift.',
        effect: { type: 'setCompliance', value: 'high' },
        surreality: 9,
      },
      {
        id: 'glinda_06',
        name: 'Good Intent',
        cardText: 'A form filed under "Motivated Action — Positive." The intent is documented. The outcomes of the intent are documented separately. The documents are filed in different folders.',
        ritualText: 'The Auditor reviews the unit\'s filed intents against the Southern Archive record of outcomes. The comparison is noted without editorial comment. The discrepancy is logged under "Systemic Grace Variance." No corrective action is recommended.',
        effect: { type: 'addLoad', value: 5 },
        surreality: 5,
      },
      {
        id: 'glinda_07',
        name: 'Scripted Kiss',
        cardText: 'The kiss rendered as a frequency signature — a wavelength of pink light pressed to the forehead, leaving a mark visible only to other lens-operators. The mark is a tracking marker. This is also supposed to be a gift.',
        ritualText: 'The Auditor leans close and presses a refracting lens to the forehead. The warmth is real. The lens leaves a signature mark that will appear on all future Bureau scans. "This will protect you," she says. She is not lying. The mark is also a brand.',
        effect: { type: 'addInsulation', value: 3 },
        surreality: 8,
      },
      {
        id: 'glinda_08',
        name: 'Porcelain Crown',
        cardText: 'A crown made of porcelain — flawless, immaculate, and it shatters at the first direct blow. The crown is the most powerful object in the Southern Quadrant. Its power is entirely conditional on nothing hitting it.',
        ritualText: 'The Auditor places a porcelain mold over the top of the skull and presses it gently until it adheres. It hardens in minutes. It looks like a crown and functions like a crown and is as permanent as anything porcelain can be permanent, which is not permanent.',
        effect: { type: 'addInsulation', value: 4 },
        surreality: 10,
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // WITCH WEST — Malice Oracle
  // Interloper: Obsidian Matron — tall, green-tinged, cloak lined with living
  // eyeballs and iron flechettes, one eye a rotating obsidian orb projecting
  // invisible restraint fields. The original Witch had one eye that functioned
  // as a powerful telescope; she enslaved the yellow Winkies; she wore the
  // Golden Cap to command the Winged Monkeys.
  // Triggers at warrantLevel >= 5.
  // ══════════════════════════════════════════════════════════════════════════
  witch_west: {
    deckName: 'Malice Oracle',
    interloper: 'Obsidian Matron',
    cards: [
      {
        id: 'witch_west_01',
        name: 'Flechette Harvest',
        cardText: 'An iron flechette in cross-section — each barb catalogued as a filing implement. The wound channel is labeled "Data Extraction Path." The extraction is thorough.',
        ritualText: 'The Obsidian Matron selects a flechette from the hem of her cloak — one of the living eyeballs confirms the selection by tracking her hand — and makes a precise deep insertion. She extracts it with measured force. The data channel is open.',
        effect: { type: 'addSmudge', value: 2 },
        surreality: 8,
      },
      {
        id: 'witch_west_02',
        name: 'Scorched Slurry',
        cardText: 'A fluid rendered as a combustion byproduct — whatever was there before this, transmuted by sustained heat into something that flows without shape. The diagram labels this "Rendered Asset."',
        ritualText: 'The Matron produces a small green-burning implement and applies it to the incision site. The heat is precise and controlled and leaves a slurry at the channel edge. She scrapes this slurry into a collection vessel. The labeling is very neat.',
        effect: { type: 'addWarrant', value: 2 },
        surreality: 9,
      },
      {
        id: 'witch_west_03',
        name: 'Restraint Lattice',
        cardText: 'An invisible grid rendered visible — the restraint field as a diagram. Every point in the room is accounted for. Every point in the room is held.',
        ritualText: 'The obsidian orb in the Matron\'s left socket rotates once. The restraint lattice locks across the room. The unit finds itself unable to move with significant velocity. The Matron continues her work without acknowledging the lattice. It is background infrastructure.',
        effect: { type: 'addLoad', value: 10 },
        surreality: 7,
      },
      {
        id: 'witch_west_04',
        name: 'Melting Verdict',
        cardText: 'A verdict rendered in water — the document that dissolves the moment it is read. The verdict is that the structure is water-soluble. The verdict proves itself in the reading.',
        ritualText: 'The Matron holds a droplet of water over the exposed incision and lets it fall. The effect is measured. She records the reaction rate and extrapolates the unit\'s water-vulnerability index. "Structural solubility: noted," she writes. The note is kept very dry.',
        effect: { type: 'addDesync', value: 2 },
        surreality: 9,
      },
      {
        id: 'witch_west_05',
        name: 'Obsidian Eye',
        cardText: 'The single eye rendered as a surveillance instrument — no eyelid, no focal limit, no angle that produces a blind spot. Everything the eye sees is automatically logged. Everything is always in the eye\'s field.',
        ritualText: 'The Matron removes the obsidian orb from her socket and holds it above the unit at inspection altitude. The orb rotates slowly. Everything in the unit is visible to it. Everything visible is filed. The unit is now on record. The record will not expire.',
        effect: { type: 'addWarrant', value: 3 },
        surreality: 10,
      },
      {
        id: 'witch_west_06',
        name: 'Green Fire Extract',
        cardText: 'A green flame in a container labeled CONFISCATED — OZ-STANDARD COMBUSTION PROTOCOL. The flame casts light on things it should not be able to light. The container is insufficient.',
        ritualText: 'The Matron extracts a small amount of green fire from the incision site and places it in a glass vial with practiced efficiency. The fire casts green light through the glass onto the Matron\'s face. Her face is green-tinged. The fire is going home.',
        effect: { type: 'addObfuscation', value: 2 },
        surreality: 7,
      },
      {
        id: 'witch_west_07',
        name: 'Winged Contract',
        cardText: 'The Golden Cap rendered as a contract — three clauses, each allowing one command. Two clauses are struck through. One clause remains. The final clause is the one that matters most.',
        ritualText: 'The Matron produces a copy of the Wing Contract and places it on the unit\'s chest. "You have been noted as a point of interest to the aerial division," she says. She does not say this is a threat. She does not need to say this is a threat.',
        effect: { type: 'addLoad', value: 7 },
        surreality: 8,
      },
      {
        id: 'witch_west_08',
        name: 'Final Frame',
        cardText: 'The last photograph from the surveillance record — the frame after which there is no more footage. What happened in the final frame is indeterminate. The file ends here.',
        ritualText: 'The Obsidian Matron closes her notebook with a click that is louder than a notebook should make. She does not tell the unit what she has found. She stands and leaves without looking back. The living eyeballs in her cloak continue to look back.',
        effect: { type: 'addSmudge', value: 2 },
        surreality: 9,
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // WITCH EAST — Impact Oracle
  // Interloper: Ground Impact Assessor — a posthumous forensic auditor of
  // catastrophic structural events. The Wicked Witch of the East was crushed
  // by Dorothy's house; her Silver Shoes were reassigned on impact; she had
  // enslaved the Munchkins.
  // Triggers at displacement >= 3.
  // ══════════════════════════════════════════════════════════════════════════
  witch_east: {
    deckName: 'Impact Oracle',
    interloper: 'Ground Impact Assessor',
    cards: [
      {
        id: 'witch_east_01',
        name: 'Initial Impact',
        cardText: 'The force diagram of a house in freefall — terminal velocity calculated, mass noted, impact site marked. The impact site is a person-shaped depression in the Oz soil. The depression is measured precisely.',
        ritualText: 'The Ground Impact Assessor places a measuring instrument at the center of the impact depression and reads the force values. "Impact force: catastrophic. Duration: approximately 0.3 seconds." It logs this as an incident report and fills in the cause-of-death field.',
        effect: { type: 'addDisplacement', value: 3 },
        surreality: 9,
      },
      {
        id: 'witch_east_02',
        name: 'Silver Residue',
        cardText: 'The Silver Shoes after reassignment — still warm from their previous owner, now transferring signal to a new heel. The residue of the previous owner\'s signal is still in the lining. It takes three days to fade. It has been two days.',
        ritualText: 'The Assessor swabs the inside of each Silver Shoe with a collection strip and holds it up to the light. The previous signal is still present. "Residual biometric data: significant. Reassignment: incomplete." The shoes continue to hum.',
        effect: { type: 'addRubyFriction', value: 2 },
        surreality: 8,
      },
      {
        id: 'witch_east_03',
        name: 'Bone Slag',
        cardText: 'The structural remnants after catastrophic impact — the material that was, classified by type and distribution radius. The radius is larger than expected. The Bureau logs the distribution as "Scatter Event."',
        ritualText: 'The Assessor collects a soil sample from the impact site and separates the components. What it finds is logged without editorial comment. It is returned to the unit in a sealed container. The container is labeled with the case number.',
        effect: { type: 'addSmudge', value: 2 },
        surreality: 9,
      },
      {
        id: 'witch_east_04',
        name: 'Terminal Crush',
        cardText: 'The moment of maximum compression in the impact sequence — the frame at which force and mass are exactly equivalent and something becomes zero. The diagram does not include what the zero was before.',
        ritualText: 'The Assessor reads the terminal crush data from the depression\'s soil core. The reading is thorough. When it finishes, it stamps the data sheet and hands the unit a copy — a record of something that happened to someone else in a house that was yours.',
        effect: { type: 'addLoad', value: 10 },
        surreality: 10,
      },
      {
        id: 'witch_east_05',
        name: 'Under-House Fault',
        cardText: 'A geological survey of the ground beneath the impact site. There is a fault line. The fault predates the impact. The fault and the impact are unrelated. The fact that they occurred together is logged as coincidence.',
        ritualText: 'The Assessor drives a survey stake into the impact site and reads the geological data. "Fault line: pre-existing. Structural blame: distributed." The distribution is itemized. One item in the distribution is the house.',
        effect: { type: 'addDesync', value: 2 },
        surreality: 7,
      },
      {
        id: 'witch_east_06',
        name: 'Silver Shoe Reclaim',
        cardText: 'The reassignment form for footwear — from deceased to living, from one frequency to another. The frequency change is documented. The form asks for the new wearer\'s consent. The consent field is pre-checked.',
        ritualText: 'The Assessor photographs the shoe transfer and adds the images to the case file. "Reassignment: complete. Consent: recorded." The record does not reflect the circumstances under which consent was recorded.',
        effect: { type: 'addWarrant', value: 2 },
        surreality: 7,
      },
      {
        id: 'witch_east_07',
        name: 'Structural Settlement',
        cardText: 'A building settling slowly into the earth over time — the gradual absorption of the impact event into the ground. The ground accommodates everything. The ground does not remember everything it has accommodated.',
        ritualText: 'The Assessor places a level on the impact site and waits. The level reads: settled. "Structural accommodation: complete. Incident: closed." The case number is stamped. The file is filed. What was underneath is not mentioned in the closing summary.',
        effect: { type: 'setCompliance', value: 'high' },
        surreality: 6,
      },
      {
        id: 'witch_east_08',
        name: 'Posthumous Warrant',
        cardText: 'A warrant issued after the subject is unable to respond to it — the fullest expression of bureaucratic authority. The warrant is fully valid. There is no one to serve it to.',
        ritualText: 'The Assessor produces a warrant form issued in the name of the previous owner of the Silver Shoes. It is fully executed. It names the impact event as the cause of non-compliance with an outstanding Bureau obligation. The outstanding obligation is being in the way of a house.',
        effect: { type: 'addLoad', value: 6 },
        surreality: 9,
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // WIZARD — Projection Oracle
  // Interloper: Humbug Surgeon — bombastic, oversized green velvet, curtain
  // for a face, hands made of projector lenses and lever-pulls. The Wizard
  // is Oscar Diggs from Omaha, Nebraska — a balloonist, ventriloquist, and
  // consummate humbug who rules by elaborate projection machinery. The Emerald
  // City is not actually emerald; all inhabitants must wear green-tinted glasses.
  // Triggers at obfuscation >= 5.
  // ══════════════════════════════════════════════════════════════════════════
  wizard: {
    deckName: 'Projection Oracle',
    interloper: 'Humbug Surgeon',
    cards: [
      {
        id: 'wizard_01',
        name: 'The Empty Decree',
        cardText: 'An official decree with all the formal trappings of power — seal, signature, border of authority — and nothing in the text field. The decree decrees nothing. It is completely binding.',
        ritualText: 'The Humbug Surgeon produces the decree with a theatrical flourish and stamps it with a noise that echoes impressively. "This grants you..." — a pause — "...nothing. But the granting is official." He folds it and inserts it through a lens-incision in the sternum.',
        effect: { type: 'addLoad', value: 8 },
        surreality: 8,
      },
      {
        id: 'wizard_02',
        name: 'Smoke Engine Audit',
        cardText: 'The machinery behind the projection — valves, smoke chambers, lever-assemblies — rendered as an anatomical cross-section of what was always there when the curtain was up.',
        ritualText: 'The Surgeon opens his own chest panel and shows the internal smoke machinery. "This is what I am," he says. He is being honest. He then opens the unit\'s incision and installs a small smoke valve. "And now this is also what you are." He is also being honest.',
        effect: { type: 'addObfuscation', value: 3 },
        surreality: 9,
      },
      {
        id: 'wizard_03',
        name: 'Voice Amplification Record',
        cardText: 'A voice diagram — the small voice, the amplification coefficient, the projected volume. The projected voice is enormous. The original voice is very small. The amplification equipment is in the curtain.',
        ritualText: 'The Surgeon holds a brass amplification horn to the larynx and records the base frequency. He plays it back through the full projection array: enormous, terrible, resonant. "Hear yourself," he instructs. "That is the same sound. Only louder."',
        effect: { type: 'addDesync', value: 2 },
        surreality: 7,
      },
      {
        id: 'wizard_04',
        name: 'The Curtain Incision',
        cardText: 'A diagram of the incision point — the precise location where the curtain meets the underlying structure and can be opened. The map exists. It has always existed.',
        ritualText: 'The Humbug Surgeon makes an incision along the curtain seam — the line between what is shown and what is there. The incision is careful and deep and does not bleed in any conventional sense. What comes out is the gap between the performance and the performer.',
        effect: { type: 'addObfuscation', value: 2 },
        surreality: 10,
      },
      {
        id: 'wizard_05',
        name: 'Balloon Debt',
        cardText: 'A balloon envelope rendered as a debt instrument. The balloon is heading east-northeast, away from Oz, toward a continent that also has debts. The envelope is full of hot air and intention and the specific gravity of departure.',
        ritualText: 'The Surgeon locates the departure trajectory in the unit\'s history file and marks it with a balloon-shaped stamp. "This is the exit you used," he says. The exit is marked. The mark is a bill for the use of the exit. The bill is in Oz currency.',
        effect: { type: 'addLoad', value: 6 },
        surreality: 7,
      },
      {
        id: 'wizard_06',
        name: 'The Green Glass Verdict',
        cardText: 'The Emerald City rendered without the tinted glasses — ordinary stone, ordinary color, the specific grey of an infrastructure that was never green. The glasses are still in the diagram, labeled "Mandatory."',
        ritualText: 'The Surgeon removes the green-tinted spectacles installed behind the unit\'s eyes via lens incision and holds them up. Through the lenses everything is emerald. Without them it is just stone. "Choose your view," he says. He reinstalls the glasses without waiting for the choice.',
        effect: { type: 'addRefraction', value: 2 },
        surreality: 8,
      },
      {
        id: 'wizard_07',
        name: 'Terrible Pronouncement',
        cardText: 'The giant projection — the enormous terrible head rendered as a voice file. When played, the file causes compliance responses in all units in range. The compliance is real. The head is not. Both facts are useful.',
        ritualText: 'The Surgeon activates the terrible pronouncement projection. The unit\'s physiological response is monitored and recorded. "Compliance triggered: documented," he notes. He deactivates the projection. The compliance response does not immediately deactivate. This is expected.',
        effect: { type: 'setCompliance', value: 'high' },
        surreality: 8,
      },
      {
        id: 'wizard_08',
        name: 'The Humbug Ledger',
        cardText: 'An accounting of all the things the Wizard was not — not a wizard, not powerful, not from Oz, not adequate. The ledger is very accurate. The Wizard kept it himself. He is the most accurate person in Oz.',
        ritualText: 'The Surgeon opens the Humbug Ledger to the current date and writes the unit\'s name on the page. "You are now part of the record. All the things I am not apply to you as well." He stamps it. The stamp reads "HUMBUG — OFFICIAL." He is not wrong.',
        effect: { type: 'addObfuscation', value: 1 },
        surreality: 9,
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // MUNCHKINS — Agricultural Audit
  // Interloper: Lead Munchkin — compact, efficiency-optimized, cheerfully
  // dressed in mandatory compliance wear, carrying pre-inked stamps and warm
  // forms. The Munchkins were enslaved by the Wicked Witch of the East.
  // ══════════════════════════════════════════════════════════════════════════
  munchkins: {
    deckName: 'Agricultural Audit',
    interloper: 'Lead Munchkin',
    cards: [
      {
        id: 'munchkins_01',
        name: 'Land Seizure Notice',
        cardText: 'A formal notice of land seizure — the fields, the house site, the path to the road. All documented and transferred to Bureau jurisdiction. The previous owner is listed as "Impact Event, Deceased." The efficiency is remarkable.',
        ritualText: 'The Lead Munchkin produces the land seizure form and processes it through the standard three-stamp procedure. Each stamp is applied with great enthusiasm. The cheerfulness is structural — it does not fluctuate regardless of the content of what is being stamped.',
        effect: { type: 'addLoad', value: 8 },
        surreality: 6,
      },
      {
        id: 'munchkins_02',
        name: 'The Wicked Weight',
        cardText: 'A force map of decades of accumulated institutional pressure on a population of small people — the witch\'s weight, not gravitational but administrative. The weight did not need to be large to be total.',
        ritualText: 'The Lead Munchkin measures the unit\'s current administrative load with a calibrated pressure gauge it carries for exactly this purpose. The measurement is compared against the Wicked Weight benchmark. The comparison is filed.',
        effect: { type: 'addLoad', value: 5 },
        surreality: 7,
      },
      {
        id: 'munchkins_03',
        name: 'Emerald Tithe',
        cardText: 'The Emerald City tithe form — percentage of all agricultural production directed to central infrastructure, itemized by crop type. Lollipops are in a separate column. The lollipop tithe is enforced.',
        ritualText: 'The Munchkin swarm presents the tithe assessment form and waits. The calculation is cheerfully explained. The cheerfulness makes the calculation feel inevitable. "The road requires maintenance," the Lead Munchkin explains. "You are on the road."',
        effect: { type: 'addLoad', value: 6 },
        surreality: 4,
      },
      {
        id: 'munchkins_04',
        name: 'Death Certificate (Standard)',
        cardText: 'The Bureau\'s standard death certificate with all fields pre-filled except "Name of Deceased." The form is very efficient. The name field is narrow. Not all names fit.',
        ritualText: 'The Lead Munchkin produces the standard death certificate and examines the unit carefully. "Not applicable," it determines, and files the certificate as "Not Required — Current Session." The certificate stays with the unit anyway. This is also standard procedure.',
        effect: { type: 'addSmudge', value: 1 },
        surreality: 8,
      },
      {
        id: 'munchkins_05',
        name: 'Yellow Brick Assessment',
        cardText: 'A brick, assessed. Load-bearing capacity. Surface friction. Warrantee period. The brick is compliant. The brick is always compliant. The brick does not know it is forming a road.',
        ritualText: 'The Munchkin taps the unit three times with a brick-assessment instrument. The tapping is rhythmic and professional. "Sound," it announces. "You are structurally Yellow-Brick-Grade." The assessment is filed. It is not clear whether this is a good thing.',
        effect: { type: 'addLoad', value: 3 },
        surreality: 5,
      },
      {
        id: 'munchkins_06',
        name: 'The Short Statute',
        cardText: 'A legal statute written in very small text to accommodate the Munchkins\' characteristic documentation style. The text is legally binding. The size does not affect the binding.',
        ritualText: 'The Lead Munchkin recites the relevant statute from memory at a volume that is professionally authoritative despite everything. The unit is informed of its status under the statute. The statute covers everything.',
        effect: { type: 'setCompliance', value: 'med' },
        surreality: 4,
      },
      {
        id: 'munchkins_07',
        name: 'Celebration Compliance',
        cardText: 'A mandatory celebration — flowers and songs rendered as compliance documentation. The celebration is genuine. The obligation to celebrate is also genuine. They are the same thing and cannot be separated.',
        ritualText: 'The Munchkin swarm begins the celebration protocol. The music starts. The forms for the celebration are distributed simultaneously. The flowers are signed receipts. The singing is a compliance acknowledgment. The celebration is complete. The unit has signed.',
        effect: { type: 'addLoad', value: 4 },
        surreality: 7,
      },
      {
        id: 'munchkins_08',
        name: 'Harvest Interruption',
        cardText: 'A field half-harvested — the rows showing both what was taken and what was left. The gap between the taken and the left is labeled "Operational Disruption." The disruption has a case number.',
        ritualText: 'The Lead Munchkin files the harvest interruption report with the same cheerful efficiency as the harvest completion report. "Partial completion is still documented as completion. The remaining crop is marked for next session." There is always a next session.',
        effect: { type: 'addScatter', value: 2 },
        surreality: 5,
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // WINGED MONKEYS — Kinetic Harvest
  // Interloper: Wing Captain — commanding officer of the aerial division,
  // bound to the Golden Cap. In the original books the Winged Monkeys were
  // once free; the Golden Cap gives three irrevocable commands.
  // ══════════════════════════════════════════════════════════════════════════
  winged_monkeys: {
    deckName: 'Kinetic Harvest',
    interloper: 'Wing Captain',
    cards: [
      {
        id: 'winged_monkeys_01',
        name: 'Airborne Extraction',
        cardText: 'A unit in flight — not under its own power, in the grip of two winged hands at altitude. The altitude is sufficient. The grip is professional. The wind is indifferent.',
        ritualText: 'The Wing Captain has a monkey pair grip the unit by the shoulders and lift it briefly to aerial assessment altitude. The unit is read from above: thermal signature, load distribution, structural integrity under low-gravity conditions. The unit is returned to ground level.',
        effect: { type: 'addDisplacement', value: 2 },
        surreality: 8,
      },
      {
        id: 'winged_monkeys_02',
        name: 'The Cap Debt',
        cardText: 'A golden cap rendered as a balance sheet — three credits, each usable once, each irrevocable. One credit is checked. Two credits remain. The remaining credits cast a specific kind of shadow.',
        ritualText: 'The Wing Captain presents the current clause count from the Golden Cap\'s ledger. Two commands remain. This information is delivered without threat. The information is a threat in the same way that a countdown is a threat: structurally, inevitably.',
        effect: { type: 'addLoad', value: 6 },
        surreality: 7,
      },
      {
        id: 'winged_monkeys_03',
        name: 'Wing Manifest',
        cardText: 'A census of the entire aerial division — each unit accounted for by wingspan, carrying capacity, and number of commands remaining in their obligation cycle. The manifest is current. All units are present.',
        ritualText: 'The Wing Captain reads the manifest aloud at speed. The unit is added to a supplementary list labeled "Aerial Interest — Active." The listing does not require the unit\'s awareness. It is simply there now.',
        effect: { type: 'addLoad', value: 5 },
        surreality: 5,
      },
      {
        id: 'winged_monkeys_04',
        name: 'Capture Protocol',
        cardText: 'The operational parameters of a standard capture procedure — altitude approach, grip sites, lift mechanics, transport routing. The document is thorough. It has been used many times. It will be used again.',
        ritualText: 'The Wing Captain demonstrates the standard grip configuration on the unit — a brief, informational hold from both sides. "Standard protocol," the Captain notes. "You now understand what will happen." The demonstration ends. The memory of the grip does not.',
        effect: { type: 'addSmudge', value: 1 },
        surreality: 7,
      },
      {
        id: 'winged_monkeys_05',
        name: 'Straw Dispersal (Remote)',
        cardText: 'A diagram of aerial straw dispersal — the scarecrow unit disassembled from height, component parts spread across a field in a radius determined by wind conditions. The diagram is technical and the straw is also visible.',
        ritualText: 'The Wing Captain shows the aerial straw dispersal record from a prior operation. The unit is shown the radius data. "Non-lethal," the Captain notes. "Reassemblable. Traumatic event classification: structural." The record is kept.',
        effect: { type: 'addScatter', value: 3 },
        surreality: 9,
      },
      {
        id: 'winged_monkeys_06',
        name: 'Altitude Assessment',
        cardText: 'A height reading — the unit at maximum lift altitude, below which is the entire terrain of Oz, above which is nothing particularly useful. The reading captures both the height and what it means to be at that height.',
        ritualText: 'The Captain gestures and the unit is lifted to assessment altitude for thirty seconds. During this time the full extent of the terrain is visible and very small and very far from anything called home. The unit is brought back. The altitude is logged.',
        effect: { type: 'addDisplacement', value: 1 },
        surreality: 6,
      },
      {
        id: 'winged_monkeys_07',
        name: 'The Third Command',
        cardText: 'A final clause — the one command that has not yet been used. The form shows two struck-through clauses and one clean, unactivated line. The clean line is the most frightening line on the form.',
        ritualText: 'The Wing Captain opens the ledger to the third-command clause page and lays it flat for the unit to read. The clause is not activated. The unit reads it. The reading of an unactivated command is its own kind of activation.',
        effect: { type: 'addLoad', value: 9 },
        surreality: 10,
      },
      {
        id: 'winged_monkeys_08',
        name: 'Delivery Confirmation',
        cardText: 'A signed receipt for a delivery — the unit delivered to destination intact, on schedule, per contract terms. The signature line for the recipient is signed. The signature line for the unit delivered is not included.',
        ritualText: 'The Wing Captain signs the delivery confirmation and presents a copy to the unit. "You have been received. The contract is complete." The contract covers only the transport. What happens after transport is a separate contract. The Captain does not mention the separate contract.',
        effect: { type: 'addLoad', value: 4 },
        surreality: 6,
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // KALIDAH — Merge Oracle
  // Interloper: Merge Coordinator — forensic hybridization assessor.
  // Kalidahs are half bear, half tiger — massive institutional predators in
  // the dark forest. In the original books they chased Dorothy\'s party to a
  // ravine; the Scarecrow caused the log bridge to collapse into the gorge.
  // ══════════════════════════════════════════════════════════════════════════
  kalidah: {
    deckName: 'Merge Oracle',
    interloper: 'Merge Coordinator',
    cards: [
      {
        id: 'kalidah_01',
        name: 'The Hybrid Permit',
        cardText: 'A permit for a creature that is two things at once — the bear half and the tiger half each requiring separate licensing, the combined permit requiring a third form acknowledging their integration. The forms reference each other circularly.',
        ritualText: 'The Merge Coordinator photographs the unit from four angles, noting any existing hybrid characteristics. "Hybrid index: baseline," it records. It inserts a hybrid integration form in the chest cavity. The form will begin to fill in passively.',
        effect: { type: 'addDesync', value: 2 },
        surreality: 7,
      },
      {
        id: 'kalidah_02',
        name: 'Bear Chromosome Integration',
        cardText: 'The bear chromosome cluster rendered as a hostile acquisition diagram — the genetic material absorbing territory from an existing cellular structure, methodically. The diagram is neutral. The chromosomes are not.',
        ritualText: 'The Coordinator extracts a tissue sample with bear-grade forceps — heavier than the situation seems to require — and tests it for hybrid compatibility. "Absorption potential: present. Recommendation: avoid ravines."',
        effect: { type: 'addLoad', value: 7 },
        surreality: 8,
      },
      {
        id: 'kalidah_03',
        name: 'Gorge Assessment',
        cardText: 'A topographical survey of the gorge — depth, width, wall composition, the specific quality of the drop. The survey notes the bridge, which is a single log. The log is load-rated for one crossing only.',
        ritualText: 'The Coordinator produces the gorge topography chart and overlays the unit\'s current position. "You are at the gorge," it notes, regardless of the unit\'s actual position. The gorge is now relevant to the unit\'s case file.',
        effect: { type: 'addLoad', value: 5 },
        surreality: 6,
      },
      {
        id: 'kalidah_04',
        name: 'Bridge Collapse Record',
        cardText: 'The structural failure report for the log bridge — the load at failure, the moment of failure, the velocity of descent. The descent is listed as "Resolved." The resolution method is not listed.',
        ritualText: 'The Coordinator reads the bridge collapse incident report and annotates it with the current unit\'s dimensional data. "If this unit had been on the bridge, the bridge would have held." It does not say this is fortunate. It is simply calculating.',
        effect: { type: 'addSmudge', value: 1 },
        surreality: 7,
      },
      {
        id: 'kalidah_05',
        name: 'Territorial Merge',
        cardText: 'Two territorial boundaries rendered as a Venn diagram. The overlap zone is labeled "Merge Territory." Everything in the overlap is subject to both sets of territorial rules simultaneously. The rules are incompatible. This is noted and set aside.',
        ritualText: 'The Coordinator marks the unit\'s territory boundary on a map and overlays the Kalidah range. The overlap is measured and recorded. "Territorial conflict: present. Conflict resolution: pending." The resolution is not on today\'s schedule.',
        effect: { type: 'addWarrant', value: 1 },
        surreality: 5,
      },
      {
        id: 'kalidah_06',
        name: 'The Ravine Consultation',
        cardText: 'A consultation with the ravine — the geological feature as advisor, the depth as data, the vertical as the one measurement that has never been argued with.',
        ritualText: 'The Coordinator describes the ravine in precise technical terms: depth, wall angle, substrate. It does this slowly and clearly. The unit is being given all the information it needs. This is the most frightening kind of briefing.',
        effect: { type: 'addDesync', value: 1 },
        surreality: 8,
      },
      {
        id: 'kalidah_07',
        name: 'Apex Predation Form',
        cardText: 'The ecological role of the apex predator rendered as a job description: duties, jurisdiction, performance metrics. The metrics are all met. The performance review is very positive. The subjects of the predation did not participate in the review.',
        ritualText: 'The Coordinator files the apex predation assessment for the current unit. "Predation vulnerability: elevated. Recommendation: do not be in the forest at peak Kalidah hours." Peak hours are all hours.',
        effect: { type: 'addLoad', value: 8 },
        surreality: 7,
      },
      {
        id: 'kalidah_08',
        name: 'Dissolution Notice',
        cardText: 'A notice of pending dissolution — the merger partner\'s integration complete, the original entity\'s boundaries absorbed, the two things now one thing. The one thing is the larger of the two original things.',
        ritualText: 'The Coordinator places the dissolution notice on the unit\'s chest and waits for the unit to read it. The notice is about a different unit — a unit that was once two things and is now one. "This is the process," the Coordinator says. "You are still prior to this." The word "still" carries weight.',
        effect: { type: 'addLoad', value: 9 },
        surreality: 9,
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // POPPY FIELD — Pharmaceutical Oracle
  // Interloper: Field Pharmacist — precise, clinical, wearing pollen-resistant
  // gauze. The Poppy Field's flowers are deadly to humans — causing permanent
  // sleep — but harmless to non-organic units. In the original books, Dorothy
  // and the Lion fell asleep; the field mice rescued them by carrying them out.
  // ══════════════════════════════════════════════════════════════════════════
  poppy_field: {
    deckName: 'Pharmaceutical Oracle',
    interloper: 'Field Pharmacist',
    cards: [
      {
        id: 'poppy_field_01',
        name: 'Sleep Induction Protocol',
        cardText: 'A flowchart of the pharmaceutical sequence — exposure, accumulation, threshold, onset. The threshold is precise. The onset is gentle. The outcome is listed as "Dormancy — Indefinite Duration."',
        ritualText: 'The Field Pharmacist holds a poppy directly under the unit\'s incision site and allows the pollen to accumulate in the wound channel. The accumulation is monitored carefully. "Approaching threshold," it notes. "Sleep protocol is now loading."',
        effect: { type: 'addSmudge', value: 2 },
        surreality: 8,
      },
      {
        id: 'poppy_field_02',
        name: 'The Field Manifest',
        cardText: 'A census of the poppy field — each plant catalogued by height, bloom date, and potency rating. The field is vast. The total potency rating is very large. The census confirms the field is operating within parameters.',
        ritualText: 'The Pharmacist reads the current potency index from the manifest and cross-references it with the unit\'s exposure record. "Cumulative exposure: above median." The report is filed. The field continues operating within parameters.',
        effect: { type: 'addLoad', value: 5 },
        surreality: 4,
      },
      {
        id: 'poppy_field_03',
        name: 'Narcotic Compliance',
        cardText: 'A compliance certificate for extended sleep — the unit agreeing to sleep by having fallen asleep. The signature is the closed eye. The certificate is valid. The Bureau accepts closed-eye signatures.',
        ritualText: 'The Pharmacist produces the compliance form and places it under the unit\'s relaxing hands. The form fills in automatically — vital sign readings, exposure data, estimated duration. The unit has technically signed. This is noted.',
        effect: { type: 'addLoad', value: 7 },
        surreality: 7,
      },
      {
        id: 'poppy_field_04',
        name: 'Field Mouse Exemption',
        cardText: 'The exemption document — the one mechanism by which the pharmaceutical protocol can be interrupted. The document is small. The mice are small. The exemption requires them.',
        ritualText: 'The Field Pharmacist examines the unit for field mouse compatibility markers. "Compatible. Exemption available." It does not call the mice. Whether the mice come is outside its jurisdiction. The exemption availability is documented.',
        effect: { type: 'setCompliance', value: 'med' },
        surreality: 6,
      },
      {
        id: 'poppy_field_05',
        name: 'Carry Authorization',
        cardText: 'A load-bearing authorization for field mouse teams — weight capacity, route parameters, extraction protocols. The authorization is for the mice. The unit being carried is listed as "Cargo."',
        ritualText: 'The Pharmacist files the carry authorization with the field mouse liaison on behalf of the unit. "Transport: authorized. Route: field-edge to Yellow Brick Load." The fact that the unit cannot participate in its own transport is noted as "Incapacitated — Standard Pharmaceutical Event."',
        effect: { type: 'addDisplacement', value: 1 },
        surreality: 7,
      },
      {
        id: 'poppy_field_06',
        name: 'Dormancy Assessment',
        cardText: 'A measurement of the sleep state — depth, duration projection, cellular status during dormancy. Everything is functioning within acceptable pharmaceutical parameters. This continues for as long as it continues.',
        ritualText: 'The Field Pharmacist takes vital readings from the dormant unit and notes them on the assessment form. The readings are all within the "sustained dormancy" range. "Duration: open," it writes. The field continues to bloom around the assessment.',
        effect: { type: 'addOverrender', value: 1 },
        surreality: 6,
      },
      {
        id: 'poppy_field_07',
        name: 'Fragrance Exposure Record',
        cardText: 'A smell rendered as data — the poppy\'s specific alkaloid signature charted as a waveform. The waveform is pleasant and regular and causes irreversible neurological alteration at sustained exposure. The chart does not include the word "pleasant."',
        ritualText: 'The Pharmacist collects a fragrance sample by making a small cut in a poppy bloom and holding the expressed fluid beneath the unit\'s nasal passage. The exposure duration is noted. The neurological response is noted. The pleasantness is not noted.',
        effect: { type: 'addDesync', value: 1 },
        surreality: 5,
      },
      {
        id: 'poppy_field_08',
        name: 'Waking Permit',
        cardText: 'An authorization to wake up — a form required for exit from pharmaceutical dormancy with very specific conditions for issuance. The conditions are listed. The list is longer than expected.',
        ritualText: 'The Field Pharmacist processes the waking permit. The conditions are reviewed one by one. Most are met. The unit will be permitted to wake within the standard processing window. "Welcome back," it says to the unit who is not yet fully awake. "Your permit has been approved."',
        effect: { type: 'addLoad', value: 4 },
        surreality: 8,
      },
    ],
  },

}

/**
 * Returns the oracle deck for a given character key, or null if not found.
 * @param {string} character
 */
export function getDeckForCharacter(character) {
  return oracleDecks[character] ?? null
}
