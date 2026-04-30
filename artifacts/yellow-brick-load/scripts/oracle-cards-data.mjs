// YELLOW BRICK LOAD — Oracle Card Scene Definitions (96 cards)
// Each scene receives ({accent, secondary, ink, bone, archive, deckKey, idx})
// and returns inner-SVG content placed inside the 720×648 scene region
// (translated to start at y=162 of the 720×1080 card).
//
// Conventions:
//   - Scene origin is (0,0); width 720, height 648.
//   - Effective drawing area: x ∈ [40, 680], y ∈ [20, 620].
//   - Stroke palette: ink (#141414) primary; accent for fills/highlights.
//   - Each scene aims for one strong silhouette + 2–4 detail elements + label band.

import { txt, rect, line, circle, path, polygon, lines, stamp, hatchRect, formSheet } from './oracle-cards-framework.mjs';

// ─── Reusable scene snippets ──────────────────────────────
const sceneFrame = ({ ink, bone, accent, label }) => `
  ${rect(40, 20, 640, 600, { fill: bone, stroke: ink, sw: 1.5 })}
  ${rect(48, 28, 624, 584, { sw: 0.5, opacity: 0.4 })}
  ${label ? `${rect(60, 40, 600, 20, { fill: ink, stroke: 'none' })}${txt(360, 55, label, { anchor: 'middle', size: 11, fill: bone, ls: 4, weight: 'bold' })}` : ''}
`;

const sceneFooter = ({ ink, accent, line1, line2, code }) => `
  ${line(60, 540, 660, 540, { sw: 0.75, opacity: 0.5 })}
  ${line1 ? txt(360, 562, line1, { anchor:'middle', size: 11, ls: 2, weight: 'bold' }) : ''}
  ${line2 ? txt(360, 585, line2, { anchor:'middle', size: 9, ls: 1.5, opacity: 0.6 }) : ''}
  ${code ? txt(360, 605, code, { anchor:'middle', size: 8, ls: 3, fill: accent, opacity: 0.8 }) : ''}
`;

const cornerSeal = (cx, cy, color, t) => stamp(cx, cy, 26, t, { rot: -14, color, fillOpacity: 0.08, fill: color, size: 8 });

// ═══════════════════════════════════════════════════════════
// LION — OZ-TAROT (Bureau Crow)
// ═══════════════════════════════════════════════════════════
const lion = [
  // 1 Roaring Cavity
  { title: 'The Roaring Cavity', cue: 'tremor origin — jaw joint', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'CAVITY DIAGRAM — JAW APERTURE' })}
    ${path('M150,200 Q360,90 570,200 Q570,300 360,330 Q150,300 150,200 Z', { sw: 2.5, fill: accent, fillOpacity: 0.18 })}
    ${path('M150,200 Q360,90 570,200', { sw: 3 })}
    ${path('M180,210 Q360,110 540,210', { sw: 1.5, stroke: accent, opacity: 0.8 })}
    ${path('M150,200 Q360,330 570,200', { sw: 2 })}
    ${path('M310,160 Q360,150 410,160 Q410,200 360,220 Q310,200 310,160 Z', { sw: 1, dash: '4 3' })}
    ${rect(280, 360, 160, 18)} ${rect(280, 384, 160, 18)} ${rect(280, 408, 160, 18)}
    ${line(360, 360, 360, 426, { sw: 0.75, opacity: 0.4 })}
    ${txt(360, 374, 'COMPLAINT 7734', { anchor:'middle', size:8, ls:1.5 })}
    ${txt(360, 398, 'COMPLAINT 7735', { anchor:'middle', size:8, ls:1.5 })}
    ${txt(360, 422, 'COMPLAINT 7736', { anchor:'middle', size:8, ls:1.5 })}
    ${path('M70,260 Q120,230 150,260', { sw: 1, opacity: 0.55 })} ${path('M50,290 Q110,250 160,290', { sw: 1, opacity: 0.4 })}
    ${line(60, 250, 160, 290, { sw: 2, stroke: secondary, opacity: 0.7 })}
    ${path('M570,260 Q620,230 670,260', { sw: 1, opacity: 0.55 })} ${path('M580,290 Q620,250 680,290', { sw: 1, opacity: 0.4 })}
    ${line(580, 250, 680, 290, { sw: 2, stroke: secondary, opacity: 0.7 })}
    ${cornerSeal(620, 100, accent, 'FILED')}
    ${sceneFooter({ ink, accent, line1: 'JAW JOINT — ACTIVE', line2: 'CAVITY: PAPERED · ROAR: OFFLINE', code: 'L-77 · CASE 7734-A' })}
  `},
  // 2 Tremor Standard
  { title: 'Tremor Standard', cue: 'within acceptable range', scene: ({accent, ink, bone}) => `
    ${sceneFrame({ ink, bone, accent, label: 'CALIBRATED INSTRUMENT — SPINE STANDARD' })}
    ${rect(330, 90, 60, 380, { sw: 2, fill: bone })}
    ${Array.from({length:9},(_,i)=>line(330, 110+i*45, 390, 110+i*45,{sw:1, opacity:0.5})).join('')}
    ${Array.from({length:9},(_,i)=>txt(320, 114+i*45, String(i+1),{anchor:'end', size:9, opacity:0.7})).join('')}
    ${path('M360,470 L360,300', { sw: 4, stroke: accent, linecap: 'round' })}
    ${circle(360, 290, 8, { fill: accent })}
    ${path('M180,470 Q200,460 220,475 Q240,455 260,478 Q280,440 300,485 Q320,420 340,490', { sw: 1.5, stroke: ink })}
    ${path('M380,490 Q400,420 420,485 Q440,440 460,478 Q480,455 500,475 Q520,460 540,470', { sw: 1.5, stroke: ink })}
    ${rect(140, 480, 440, 30, { fill: accent, fillOpacity: 0.25 })}
    ${txt(360, 500, 'ACCEPTABLE TREMOR RANGE', { anchor:'middle', size: 11, weight:'bold', ls: 2.5 })}
    ${cornerSeal(110, 110, accent, 'OK')}
    ${cornerSeal(610, 110, accent, 'OK')}
    ${sceneFooter({ ink, accent, line1: 'OSCILLATION: 7Hz · LOGGED', line2: 'RANGE: ALWAYS ACCEPTABLE', code: 'TREMOR STD · REV.04' })}
  `},
  // 3 Mane Debt
  { title: 'Mane Debt', cue: 'crown collateral seizure', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'COLLATERAL SEIZURE — CROWN MATERIAL' })}
    ${line(360, 90, 360, 480, { sw: 5 })}
    ${path('M360,90 L355,80 L360,70 L365,80 Z', { sw: 1.5, fill: ink })}
    ${path('M260,150 Q300,140 320,160 Q340,130 360,150 Q380,130 400,160 Q420,140 460,150 Q420,200 360,210 Q300,200 260,150 Z', { sw: 2, fill: accent, fillOpacity: 0.4 })}
    ${path('M280,170 Q310,165 320,180 M340,170 Q360,160 380,170 M400,170 Q430,165 440,180', { sw: 1, opacity: 0.7 })}
    ${rect(160, 250, 100, 50, { fill: accent, fillOpacity: 0.2 })}
    ${txt(210, 270, 'STRAND 01', { anchor:'middle', size:9, weight:'bold' })}
    ${txt(210, 285, 'FILED 04/22', { anchor:'middle', size:8, opacity:0.7 })}
    ${rect(310, 280, 100, 50, { fill: accent, fillOpacity: 0.2 })}
    ${txt(360, 300, 'STRAND 02', { anchor:'middle', size:9, weight:'bold' })}
    ${txt(360, 315, 'FILED 04/22', { anchor:'middle', size:8, opacity:0.7 })}
    ${rect(460, 250, 100, 50, { fill: accent, fillOpacity: 0.2 })}
    ${txt(510, 270, 'STRAND 03', { anchor:'middle', size:9, weight:'bold' })}
    ${txt(510, 285, 'FILED 04/22', { anchor:'middle', size:8, opacity:0.7 })}
    ${path('M260,300 Q300,360 360,360 Q420,360 460,300', { sw: 1, dash: '3 3', opacity: 0.6 })}
    ${path('M340,400 Q360,420 380,400 M340,440 Q360,460 380,440', { sw: 1.5 })}
    ${cornerSeal(120, 460, secondary, 'SEIZED')}
    ${sceneFooter({ ink, accent, line1: 'STRANDS: 3 · FILED', line2: 'ANTERIOR FONTANELLE · COMPLIANT', code: 'COLLATERAL CASE 02-MN' })}
  `},
  // 4 Coward's Audit
  { title: "The Coward's Audit", cue: 'three centuries of zero', scene: ({accent, ink, bone}) => `
    ${sceneFrame({ ink, bone, accent, label: 'OPEN LEDGER — COURAGE ACCOUNT' })}
    ${path('M120,140 L360,110 L600,140 L600,500 L360,470 L120,500 Z', { sw: 2.5, fill: bone })}
    ${line(360, 110, 360, 470, { sw: 2 })}
    ${Array.from({length:14},(_,i)=>{
      const y = 160 + i*22;
      return line(140, y, 350, y, { sw:0.5, opacity: 0.4 }) + line(370, y, 580, y, { sw:0.5, opacity: 0.4 }) +
             txt(160, y-2, '0', { size: 14, opacity: 0.85 }) + txt(390, y-2, '0', { size: 14, opacity: 0.85 }) +
             txt(560, y-2, '0', { size: 14, opacity: 0.85, anchor:'end' }) + txt(330, y-2, '0', { size: 14, opacity: 0.85, anchor:'end' });
    }).join('')}
    ${txt(245, 130, 'COURAGE LOG · L', { anchor:'middle', size:9, ls:2, weight:'bold' })}
    ${txt(475, 130, 'COURAGE LOG · R', { anchor:'middle', size:9, ls:2, weight:'bold' })}
    ${cornerSeal(580, 480, accent, 'AUDIT')}
    ${cornerSeal(140, 460, accent, 'YEAR 0')}
    ${sceneFooter({ ink, accent, line1: 'PAGE 1 OF 9,127', line2: 'TOTAL COURAGE UNITS: 0', code: 'AUDIT 300Y · CONTINUED' })}
  `},
  // 5 Forest Jurisdiction
  { title: 'Forest Jurisdiction', cue: 'all exits unauthorized', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'JURISDICTION MAP — FOREST QUADRANT' })}
    ${rect(80, 90, 560, 380, { sw: 1, opacity: 0.5 })}
    ${Array.from({length:9},(_,i)=>line(80+i*70, 90, 80+i*70, 470, { sw: 0.5, opacity: 0.3 })).join('')}
    ${Array.from({length:6},(_,i)=>line(80, 90+i*76, 640, 90+i*76, { sw: 0.5, opacity: 0.3 })).join('')}
    ${[[150,140],[270,200],[400,160],[510,250],[200,320],[380,360],[540,410],[120,400],[460,290]].map(([x,y])=>
      polygon(`${x},${y-12} ${x+10},${y+8} ${x-10},${y+8}`, { sw: 1, fill: ink }) +
      circle(x+12, y, 3, { fill: secondary, stroke:'none' })
    ).join('')}
    ${path('M70,80 L650,470', { sw: 3, stroke: secondary, opacity: 0.7 })}
    ${path('M650,80 L70,470', { sw: 3, stroke: secondary, opacity: 0.7 })}
    ${path('M360,90 L360,470', { sw: 1, dash: '5 4', stroke: accent })}
    ${rect(280, 220, 160, 40, { fill: bone, sw: 1.5 })}
    ${txt(360, 235, 'JURISDICTION', { anchor:'middle', size:9, weight:'bold', ls:2 })}
    ${txt(360, 250, 'ACTIVE', { anchor:'middle', size:11, weight:'bold', ls:3, fill: secondary })}
    ${cornerSeal(610, 460, secondary, 'EXIT-X')}
    ${sceneFooter({ ink, accent, line1: 'TREES CATALOGUED: 9', line2: 'WITNESSES: ALSO VIOLATIONS', code: 'JD-FOREST · QUAD-04' })}
  `},
  // 6 Claw Registration
  { title: 'Claw Registration', cue: 'serial: 5/5 · authorized', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'PAW INVENTORY — REGISTRATION DOC' })}
    ${path('M280,160 Q200,260 220,360 Q260,420 360,420 Q460,420 500,360 Q520,260 440,160 Q400,140 360,150 Q320,140 280,160 Z', { sw: 2.5, fill: accent, fillOpacity: 0.18 })}
    ${[[230,180,'C-001'],[300,140,'C-002'],[360,128,'C-003'],[420,140,'C-004'],[490,180,'C-005']].map(([x,y,id],i)=>
      path(`M${x},${y} Q${x-6},${y-30} ${x},${y-50}`, { sw: 2.5 }) +
      circle(x, y-50, 5, { fill: i===2?secondary:accent, stroke: ink, sw:1 }) +
      txt(x, y-58, id, { anchor:'middle', size: 8, weight: 'bold', ls: 1.5 })
    ).join('')}
    ${[230,300,360,420,490].map((x,i)=>i===2?
      line(x-12,86,x+12,114,{sw:2.5, stroke:secondary}) + line(x-12,114,x+12,86,{sw:2.5, stroke:secondary}) :
      ''
    ).join('')}
    ${rect(180, 460, 360, 60, { fill: bone, sw: 1.5 })}
    ${txt(360, 478, 'PAW: REGISTERED', { anchor:'middle', size:11, weight:'bold', ls:2.5 })}
    ${txt(360, 498, 'CLAW C-003: NOTICE OF FORMAL BITE', { anchor:'middle', size:9, ls:1.5, opacity:0.7 })}
    ${cornerSeal(110, 200, accent, 'ID')}
    ${sceneFooter({ ink, accent, line1: 'NUMBNESS — STANDARD', line2: 'OFFENSIVE USE: PERMIT PENDING', code: 'CLAW-REG · L-77' })}
  `},
  // 7 Lash Protocol
  { title: 'The Lash Protocol', cue: 'incoherent — filed anyway', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'TAIL OSCILLATION — TELEGRAPH READ' })}
    ${path('M80,300 Q140,200 220,320 Q300,440 380,260 Q460,80 540,300 Q600,500 640,320', { sw: 3, stroke: accent })}
    ${[80,140,200,260,320,380,440,500,560,620].map((x,i)=>{
      const tick = i%2===0 ? '·' : '—';
      return txt(x, 460, tick, { anchor:'middle', size: 16, weight:'bold' });
    }).join('')}
    ${line(60, 480, 660, 480, { sw: 1 })}
    ${txt(80, 500, 'T-0', { size: 8, opacity: 0.6 })}
    ${txt(620, 500, 'T-9', { size: 8, opacity: 0.6, anchor:'end' })}
    ${rect(180, 100, 360, 60, { fill: bone, sw: 1.5 })}
    ${txt(360, 122, 'SIGNAL: NONE COHERENT', { anchor:'middle', size:11, weight:'bold', ls:2 })}
    ${txt(360, 143, '— CLASSIFIED INCOHERENT —', { anchor:'middle', size:9, ls:1.5, opacity:0.7, style:'italic' })}
    ${cornerSeal(620, 130, secondary, 'FILED')}
    ${sceneFooter({ ink, accent, line1: 'TAIL OBSERVED — ALONE', line2: 'COHERENCE NOT REQUIRED', code: 'LASH-PROT · L-77' })}
  `},
  // 8 Crown of Teeth
  { title: 'Crown of Teeth', cue: 'royal compliant — temporary', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'CROWN INSTALLATION — RECEIPT RING' })}
    ${circle(360, 320, 170, { sw: 2, dash: '2 4' })}
    ${Array.from({length:14},(_,i)=>{
      const a = (i/14)*Math.PI*2 - Math.PI/2;
      const x = 360 + Math.cos(a)*170;
      const y = 320 + Math.sin(a)*170;
      const x2 = 360 + Math.cos(a)*200;
      const y2 = 320 + Math.sin(a)*200;
      const tx = 360 + Math.cos(a)*215;
      const ty = 320 + Math.sin(a)*215;
      return polygon(`${x-10},${y+10} ${x+10},${y+10} ${x},${y-22}`, { sw:1.5, fill: accent, fillOpacity: 0.4 }) +
             txt(tx, ty+3, `R${(i+1).toString().padStart(2,'0')}`, { anchor:'middle', size: 7, weight:'bold' });
    }).join('')}
    ${circle(360, 320, 80, { sw: 1, opacity: 0.6 })}
    ${txt(360, 305, 'L-77', { anchor:'middle', size: 28, weight:'bold', ls:3 })}
    ${txt(360, 332, 'ROYAL COMPLIANT', { anchor:'middle', size:9, ls:2, opacity: 0.7 })}
    ${txt(360, 350, '— TEMPORARY —', { anchor:'middle', size:8, ls:2, opacity:0.6, style:'italic' })}
    ${cornerSeal(120, 100, secondary, 'CROWN')}
    ${sceneFooter({ ink, accent, line1: 'GUMS: STAMPED', line2: 'NEXT TREMOR: IMMINENT', code: 'CROWN · UNIT L-77' })}
  `},
];

// ═══════════════════════════════════════════════════════════
// TIN MAN — SCRAPYARD TAROT (Maintenance Auditor)
// ═══════════════════════════════════════════════════════════
const tin_man = [
  // 1 Hollow Register
  { title: 'The Hollow Register', cue: 'heart — absent (logged)', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'CHEST CAVITY — INDUSTRIAL AUDIT' })}
    ${rect(180, 110, 360, 380, { sw: 2.5, fill: accent, fillOpacity: 0.12 })}
    ${[180,540].map(x=>[120,200,280,360,440].map(y=>circle(x, y, 4, {fill: ink, stroke:'none'})).join('')).join('')}
    ${[180,540].map(x=>[120,200,280,360,440].map(y=>circle(x, y, 1.5, {fill: bone, stroke:'none'})).join('')).join('')}
    ${rect(220, 200, 280, 200, { sw: 1.5 })}
    ${txt(360, 230, 'HEART', { anchor:'middle', size: 22, weight:'bold', ls: 6 })}
    ${path('M280,260 L440,400 M440,260 L280,400', { sw: 2, stroke: secondary })}
    ${txt(360, 350, '— ABSENT —', { anchor:'middle', size: 14, ls: 4, weight:'bold', fill: secondary })}
    ${txt(360, 380, 'CASE #7734-A · WITHIN SPEC', { anchor:'middle', size: 9, ls: 2, opacity: 0.7 })}
    ${rect(220, 420, 280, 40, { fill: ink })}
    ${txt(360, 445, 'STAMP: HOLLOW · COMPLIANT', { anchor:'middle', size: 10, fill: bone, ls: 2.5, weight:'bold' })}
    ${cornerSeal(120, 480, accent, 'OK')}
    ${sceneFooter({ ink, accent, line1: 'WRENCH OPENED · CLOSED', line2: 'LATCH-CLICK ECHO: NOTED', code: 'CASE 7734-A' })}
  `},
  // 2 Rust Assessment
  { title: 'Rust Assessment', cue: 'oxidation: within spec', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'JOINT CROSS-SECTION — OXIDE LAYER' })}
    ${circle(360, 280, 160, { sw: 2.5, fill: bone })}
    ${circle(360, 280, 160, { sw: 1, dash: '2 3', stroke: secondary, opacity: 0.6 })}
    ${circle(360, 280, 130, { sw: 1.5, fill: secondary, fillOpacity: 0.3 })}
    ${circle(360, 280, 100, { sw: 1.5, fill: accent, fillOpacity: 0.5 })}
    ${circle(360, 280, 40, { sw: 1.5, fill: ink })}
    ${[0,1,2,3].map(i=>{
      const a = i*Math.PI/2 + Math.PI/4;
      return line(360+Math.cos(a)*40, 280+Math.sin(a)*40, 360+Math.cos(a)*180, 280+Math.sin(a)*180, { sw:1, opacity:0.6 });
    }).join('')}
    ${txt(530, 220, 'IRON CORE', { size: 9, weight:'bold' })}
    ${txt(530, 260, 'TIN SHELL', { size: 9 })}
    ${txt(530, 300, 'OXIDE LAYER', { size: 9, fill: secondary, weight:'bold' })}
    ${txt(530, 340, 'EXPOSURE', { size: 9, opacity:0.6 })}
    ${rect(180, 480, 360, 60, { fill: bone, sw: 1.5 })}
    ${txt(360, 500, 'FERRIC OXIDE: ELEVATED', { anchor:'middle', size:11, weight:'bold', ls:2 })}
    ${txt(360, 522, 'STRUCTURALLY NON-CRITICAL', { anchor:'middle', size:9, ls:1.5, opacity:0.7 })}
    ${cornerSeal(620, 110, accent, 'OK')}
    ${sceneFooter({ ink, accent, line1: 'PRESCRIBED: ADDITIONAL OIL', line2: 'PRESCRIPTION = ANOTHER FORM', code: 'RUST-ASSESS · NC-9' })}
  `},
  // 3 Enchanted Axe Report
  { title: 'The Enchanted Axe Report', cue: 'voluntary ☑ involuntary ☑', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'INCIDENT REPORT — LIMB SEPARATION' })}
    ${path('M120,140 L160,180 L460,420 L500,460', { sw: 8, stroke: ink })}
    ${path('M120,140 L160,180 L460,420 L500,460', { sw: 5, stroke: secondary, opacity: 0.7 })}
    ${path('M460,420 Q540,360 600,400 Q620,440 580,480 Q500,500 460,420 Z', { sw: 2, fill: secondary, fillOpacity: 0.5 })}
    ${path('M520,440 Q540,420 560,440', { sw: 1, stroke: ink, opacity:0.7 })}
    ${path('M530,460 Q545,440 565,460', { sw: 1, stroke: ink, opacity:0.5 })}
    ${rect(80, 220, 240, 200, { sw: 1.5, fill: bone })}
    ${rect(80, 220, 240, 22, { fill: ink, stroke:'none' })}
    ${txt(200, 237, 'INCIDENT REPORT', { anchor:'middle', size: 11, fill: bone, ls: 2.5, weight:'bold' })}
    ${txt(94, 270, 'CLASSIFICATION:', { size: 9, weight:'bold' })}
    ${rect(94, 286, 12, 12, { sw: 1.2 })} ${path('M96,290 L100,294 L106,286', { sw: 1.5 })}
    ${txt(116, 296, 'VOLUNTARY', { size: 9 })}
    ${rect(94, 310, 12, 12, { sw: 1.2 })} ${path('M96,314 L100,318 L106,310', { sw: 1.5 })}
    ${txt(116, 320, 'INVOLUNTARY', { size: 9 })}
    ${rect(94, 334, 12, 12, { sw: 1.2 })}
    ${txt(116, 344, 'OTHER (UNSPEC.)', { size: 9, opacity: 0.6 })}
    ${txt(94, 376, 'AXE STATUS: STILL MOVING', { size: 8, weight:'bold', fill: secondary, ls: 1.5 })}
    ${txt(94, 396, 'REF: NICK-CHOPPER 1.0', { size: 8, opacity: 0.7 })}
    ${cornerSeal(620, 200, secondary, 'INCIDENT')}
    ${sceneFooter({ ink, accent, line1: 'EVENT REFERENCED · STAMPED', line2: 'ORIGINAL AXE: ENCHANTED · ACTIVE', code: 'IR-AXE · 04' })}
  `},
  // 4 Heart Cavity Inspection
  { title: 'Heart Cavity Inspection', cue: 'previous occupant — now blank', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'ANATOMY — HEART CHAMBER STATUS' })}
    ${path('M270,160 Q220,160 220,210 Q220,270 360,400 Q500,270 500,210 Q500,160 450,160 Q400,160 360,200 Q320,160 270,160 Z', { sw: 2.5, fill: accent, fillOpacity: 0.18 })}
    ${path('M270,170 Q230,170 230,210 Q230,260 360,380 Q490,260 490,210 Q490,170 450,170 Q410,170 360,210', { sw: 1, opacity: 0.5, dash: '3 3' })}
    ${rect(280, 220, 160, 40, { sw: 1.5, fill: bone })}
    ${txt(360, 240, 'PREVIOUS', { anchor:'middle', size:10, weight:'bold', ls:2 })}
    ${txt(360, 254, 'OCCUPANT', { anchor:'middle', size:10, ls:2, opacity:0.65 })}
    ${rect(280, 280, 160, 40, { sw: 1.5, fill: bone, dash: '4 3' })}
    ${txt(360, 300, 'CURRENT:', { anchor:'middle', size:10, weight:'bold', ls:2 })}
    ${txt(360, 314, '[ BLANK ]', { anchor:'middle', size:11, ls:3, weight:'bold', fill: secondary })}
    ${path('M120,440 Q200,460 280,440', { sw: 1.5 })} ${path('M120,440 Q160,420 200,440', { sw: 1, opacity: 0.6 })}
    ${circle(120, 440, 8, { sw: 1.5 })}
    ${txt(170, 470, 'STETHOSCOPE — COPPER + RECEIPTS', { size: 8, weight:'bold', ls:1.5, opacity: 0.7 })}
    ${cornerSeal(580, 460, secondary, 'HOLLOW')}
    ${sceneFooter({ ink, accent, line1: 'AUDIT: HEARS NOTHING', line2: 'STAMP DENTS LEFT BREAST PANEL', code: 'HC-INSPECT · 04' })}
  `},
  // 5 Oil Ledger
  { title: 'Oil Ledger', cue: 'asset and liability', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'LUBRICATION ACCOUNT — BARREL DEFICIT' })}
    ${path('M220,160 Q360,140 500,160 L500,420 Q360,440 220,420 Z', { sw: 2.5, fill: secondary, fillOpacity: 0.4 })}
    ${path('M220,160 Q360,180 500,160', { sw: 1.5 })}
    ${path('M220,260 Q360,280 500,260', { sw: 1, opacity: 0.6 })}
    ${path('M220,360 Q360,380 500,360', { sw: 1, opacity: 0.6 })}
    ${path('M220,420 Q360,440 500,420', { sw: 1, opacity: 0.6 })}
    ${path('M240,250 L240,420', { sw: 1, stroke: accent, opacity: 0.8 })}
    ${path('M250,240 L250,420', { sw: 1, stroke: accent, opacity: 0.8 })}
    ${rect(180, 460, 360, 80, { sw: 1, fill: bone })}
    ${txt(200, 478, 'ASSET',  { size: 9, weight:'bold', ls:1.5 })}
    ${txt(200, 494, 'LIABILITY', { size: 9, weight:'bold', ls:1.5 })}
    ${txt(200, 510, 'NET',     { size: 9, weight:'bold', ls:1.5 })}
    ${txt(520, 478, '+ 3 OZ',  { anchor:'end', size: 9, ls:1.5 })}
    ${txt(520, 494, '— 8 OZ',  { anchor:'end', size: 9, ls:1.5, fill: secondary })}
    ${txt(520, 510, 'DEFICIT', { anchor:'end', size: 9, ls:1.5, weight:'bold', fill: secondary })}
    ${line(180, 524, 540, 524, { sw: 1 })}
    ${txt(360, 534, 'OPERATIONAL NORMAL', { anchor:'middle', size: 9, ls: 2, opacity: 0.7, weight:'bold' })}
    ${cornerSeal(120, 130, accent, 'OIL')}
    ${sceneFooter({ ink, accent, line1: 'BARREL: LOW (PERPETUAL)', line2: 'ITEMIZED · ANNOTATED', code: 'OIL-LEDGER · 05' })}
  `},
  // 6 Seized Joint
  { title: 'The Seized Joint', cue: 'mid-gesture · welded', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'JOINT FRICTION ILLUSTRATION — MAX' })}
    ${path('M160,420 L160,260 Q160,200 220,200 L320,200', { sw: 14, stroke: ink, linecap: 'round', linejoin: 'round' })}
    ${path('M160,420 L160,260 Q160,200 220,200 L320,200', { sw: 8, stroke: secondary, linecap: 'round', linejoin: 'round', opacity: 0.7 })}
    ${path('M340,180 L420,140 L500,160 L520,200', { sw: 8, stroke: ink, linecap:'round' })}
    ${circle(330, 200, 18, { sw: 2.5, fill: bone })}
    ${circle(330, 200, 12, { fill: secondary, fillOpacity: 0.6 })}
    ${[1,2,3,4,5,6,7,8].map(i=>{
      const a = i*Math.PI/4;
      return line(330+Math.cos(a)*20, 200+Math.sin(a)*20, 330+Math.cos(a)*30, 200+Math.sin(a)*30, { sw:1.5, stroke:secondary });
    }).join('')}
    ${path('M540,140 L580,140 L580,180 M540,180 L580,140', { sw: 1.5, stroke: ink })}
    ${txt(540, 130, 'PROBE', { size: 9, weight:'bold' })}
    ${rect(120, 460, 480, 80, { sw: 1.5, fill: bone })}
    ${txt(360, 480, 'MOBILITY: IMPAIRED', { anchor:'middle', size: 11, weight:'bold', ls: 2 })}
    ${txt(360, 502, 'GESTURE PRESERVED FOR INSPECTION', { anchor:'middle', size: 9, ls: 2, opacity: 0.7 })}
    ${txt(360, 522, 'GESTURE: REACHING. (TARGET: UNNOTED)', { anchor:'middle', size: 8, ls: 1.5, opacity: 0.6, style:'italic' })}
    ${cornerSeal(120, 130, secondary, 'STUCK')}
    ${sceneFooter({ ink, accent, line1: 'RECOMMENDATION: REPLACEMENT', line2: 'JOINT REMAINS SEIZED', code: 'SEIZE-J · 06' })}
  `},
  // 7 Nick Chopper's Invoice
  { title: "Nick Chopper's Invoice", cue: 'heart line: skipped', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'INVOICE — HUMAN BODY · ITEMIZED' })}
    ${rect(120, 100, 480, 480, { sw: 2, fill: bone })}
    ${rect(120, 100, 480, 26, { fill: ink, stroke:'none' })}
    ${txt(360, 119, 'INVOICE — UNIT N. CHOPPER', { anchor:'middle', size: 11, fill: bone, ls: 3, weight:'bold' })}
    ${[
      ['ARM (LEFT)',     '4 OZ TIN',   false],
      ['ARM (RIGHT)',    '4 OZ TIN',   false],
      ['LEG (LEFT)',     '6 OZ TIN',   false],
      ['LEG (RIGHT)',    '6 OZ TIN',   false],
      ['TORSO',          '18 OZ TIN',  false],
      ['JAW',            '2 OZ TIN',   false],
      ['HEART',          'NOT ORDERED', true],
      ['HEAD CASING',    '5 OZ TIN',   false],
    ].map(([item, qty, hl], i) => {
      const y = 160 + i*40;
      return line(140, y+10, 580, y+10, { sw: 0.5, opacity: 0.4 }) +
        txt(150, y, item, { size: 11, ls: 2, weight: hl?'bold':'normal', fill: hl?secondary:ink }) +
        txt(570, y, qty, { anchor: 'end', size: 11, ls: 2, weight: hl?'bold':'normal', fill: hl?secondary:ink });
    }).join('')}
    ${cornerSeal(610, 480, accent, 'PAID')}
    ${sceneFooter({ ink, accent, line1: 'ALL ITEMS PRESENT · VERIFIED', line2: 'HEART LINE: SKIPPED · INTENTIONAL', code: 'INV-NC-001' })}
  `},
  // 8 Replacement Form
  { title: 'The Replacement Form', cue: 'reason for removal: [ blank ]', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'FORM 17-RPL — ORGAN/LIMB REPLACEMENT' })}
    ${rect(80, 100, 560, 480, { sw: 2, fill: bone })}
    ${rect(80, 100, 560, 26, { fill: ink, stroke:'none' })}
    ${txt(360, 119, 'FORM 17-RPL', { anchor:'middle', size: 11, fill: bone, ls: 3, weight:'bold' })}
    ${[
      ['UNIT ID', 'TIN-WC-04'],
      ['DATE',    '— RECURRING —'],
      ['LIMB',    'AS NEEDED'],
      ['ORGAN',   'AS NEEDED'],
      ['MATERIAL','TIN, GRADE-B'],
      ['DURATION','PERMANENT'],
    ].map(([k,v], i) => {
      const y = 160 + i*46;
      return txt(100, y, k+':', { size: 10, ls: 2, weight:'bold' }) +
        rect(220, y-14, 380, 22, { sw: 1, fill:'none' }) +
        txt(232, y, v, { size: 10, ls: 2 });
    }).join('')}
    ${txt(100, 470, 'REASON FOR REMOVAL:', { size: 10, weight:'bold', ls:2 })}
    ${rect(100, 480, 500, 60, { sw: 1.5, dash: '4 4' })}
    ${txt(350, 515, '[                                            ]', { anchor:'middle', size: 14, ls: 2, opacity: 0.5 })}
    ${cornerSeal(550, 540, secondary, 'BLANK')}
    ${sceneFooter({ ink, accent, line1: 'COPY LEFT WITH UNIT', line2: 'PAPER STILL WARM', code: 'RPL-17 · KEEP' })}
  `},
];

// ═══════════════════════════════════════════════════════════
// SCARECROW — STRAW ORACLE (Straw Clerk)
// ═══════════════════════════════════════════════════════════
const scarecrow = [
  // 1 Empty Head Form
  { title: 'The Empty Head Form', cue: 'standard brain approximation', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'CRANIAL CAVITY — STRAW NETWORK' })}
    ${path('M180,200 Q180,120 360,120 Q540,120 540,200 Q540,360 360,400 Q180,360 180,200 Z', { sw: 2.5, fill: accent, fillOpacity: 0.18 })}
    ${[[220,180],[280,140],[360,150],[440,140],[500,180],[200,260],[270,240],[360,220],[450,240],[520,260],[230,330],[300,340],[360,360],[420,340],[490,330]].map(([x,y])=>circle(x,y,4,{fill:accent,stroke:ink,sw:0.75})).join('')}
    ${[[[220,180],[280,140]],[[280,140],[360,150]],[[360,150],[440,140]],[[440,140],[500,180]],[[220,180],[200,260]],[[280,140],[270,240]],[[360,150],[360,220]],[[440,140],[450,240]],[[500,180],[520,260]],[[200,260],[230,330]],[[270,240],[300,340]],[[360,220],[360,360]],[[450,240],[420,340]],[[520,260],[490,330]],[[230,330],[300,340]],[[300,340],[360,360]],[[360,360],[420,340]],[[420,340],[490,330]]].map(([[x1,y1],[x2,y2]])=>line(x1,y1,x2,y2,{sw:0.75,opacity:0.6})).join('')}
    ${[[200,150],[260,120],[340,110],[420,110],[500,120],[560,150]].map(([x,y])=>line(x,y,x-2,y-12,{sw:0.5,stroke:secondary,opacity:0.7})).join('')}
    ${rect(150, 440, 420, 90, { sw: 1.5, fill: bone })}
    ${txt(360, 462, 'THOUGHT ACTIVITY: PRESENT', { anchor:'middle', size: 11, weight:'bold', ls: 2 })}
    ${txt(360, 483, 'VERIFICATION: PENDING', { anchor:'middle', size: 9, ls: 2, opacity: 0.7 })}
    ${txt(360, 505, 'CARTOMANCER READS BY CRUMBLE', { anchor:'middle', size: 8, ls: 1.5, opacity: 0.55, style:'italic' })}
    ${cornerSeal(120, 100, secondary, 'STD')}
    ${sceneFooter({ ink, accent, line1: 'NEURONS: SUBSTITUTED · STRAW', line2: 'FILE: BRAIN-APPROX-01', code: 'EHF · 01' })}
  `},
  // 2 Scatter Reading
  { title: 'Scatter Reading', cue: 'no center · airborne forms', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'POST-WIND ANALYSIS — FIBER FIELD' })}
    ${[[80,140,30],[160,210,-15],[240,170,55],[330,250,-30],[420,180,40],[510,240,-20],[590,160,25],[640,260,-50],[110,320,15],[200,360,-25],[290,340,40],[380,400,-15],[470,360,25],[560,400,-40],[100,460,20],[200,500,-15],[300,470,35],[400,510,-20],[510,470,15],[600,500,-30]].map(([x,y,r])=>
      `<g transform="rotate(${r} ${x} ${y})">${rect(x-22, y-1.5, 44, 3, {fill: secondary, stroke:'none', opacity: 0.7})}</g>`
    ).join('')}
    ${[[140,180],[300,200],[450,220],[180,380],[360,310],[510,350],[230,450],[400,460]].map(([x,y])=>
      rect(x-12, y-8, 24, 16, { sw: 0.75, opacity: 0.6, dash: '2 2' })
    ).join('')}
    ${rect(120, 530, 480, 80, { sw: 1.5, fill: bone })}
    ${txt(360, 552, 'WHAT REMAINS?', { anchor:'middle', size: 16, weight:'bold', ls: 4 })}
    ${txt(360, 575, '— THE QUESTION IS ON THE DESK —', { anchor:'middle', size: 9, ls: 2, opacity: 0.65, style:'italic' })}
    ${cornerSeal(620, 100, secondary, 'WIND')}
    ${sceneFooter({ ink, accent, line1: 'FIELD SURVEYED · LOGGED', line2: 'CABINET: OPEN · FORMS: ALOFT', code: 'SCATTER-02' })}
  `},
  // 3 Brain Procurement Notice
  { title: 'Brain Procurement Notice', cue: 'denied — circular logic', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'PROCUREMENT REQUEST 88-BR' })}
    ${rect(110, 110, 500, 460, { sw: 2, fill: bone })}
    ${rect(110, 110, 500, 28, { fill: ink, stroke:'none' })}
    ${txt(360, 130, 'REQUEST 88-BR · BRAIN', { anchor:'middle', size: 11, fill: bone, ls: 3, weight:'bold' })}
    ${txt(140, 170, 'APPLICANT:', { size: 10, weight:'bold', ls: 2 })}
    ${txt(360, 170, 'UNIT SCARECROW (NORTH FIELD)', { size: 10, ls: 2 })}
    ${txt(140, 200, 'REQUESTED:', { size: 10, weight:'bold', ls: 2 })}
    ${txt(360, 200, 'BRAIN, ANY GRADE', { size: 10, ls: 2 })}
    ${txt(140, 230, 'DECISION:', { size: 10, weight:'bold', ls: 2 })}
    ${txt(360, 230, 'DENIED', { size: 12, ls: 4, weight:'bold', fill: secondary })}
    ${line(140, 250, 580, 250, { sw: 0.75, opacity: 0.5 })}
    ${txt(140, 280, 'REASON:', { size: 10, weight:'bold', ls: 2 })}
    ${txt(140, 305, 'BRAIN PROCUREMENT REQUIRES PRIOR', { size: 9, ls: 1.5 })}
    ${txt(140, 322, 'DEMONSTRATION OF BRAIN FUNCTION.', { size: 9, ls: 1.5 })}
    ${txt(140, 348, 'UNIT HAS NOT DEMONSTRATED PRIOR', { size: 9, ls: 1.5 })}
    ${txt(140, 365, 'BRAIN FUNCTION.', { size: 9, ls: 1.5 })}
    ${path('M200,420 Q360,400 520,420 Q540,470 520,500 Q360,520 200,500 Q180,470 200,420 Z', { sw: 1.5, dash: '3 3', stroke: secondary, opacity: 0.7 })}
    ${txt(360, 460, 'LOOP DETECTED', { anchor:'middle', size:11, ls:3, weight:'bold', fill: secondary })}
    ${txt(360, 482, '(LOGIC IS CIRCULAR)', { anchor:'middle', size: 9, ls: 2, opacity: 0.65, style:'italic' })}
    ${cornerSeal(560, 540, secondary, 'DENY', )}
    ${sceneFooter({ ink, accent, line1: 'APPLICATION TIME: > REMAINING STRAW', line2: 'HAT RESTUFFED IMPROPERLY', code: 'BR-88 · DENY' })}
  `},
  // 4 Crow Consultation
  { title: 'Crow Consultation', cue: 'crow is here professionally', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'JOINT CONSULTATION — CROW + UNIT' })}
    ${path('M260,170 L290,140 L430,140 L460,170 L420,180 L300,180 Z', { sw: 2, fill: secondary, fillOpacity: 0.4 })}
    ${path('M280,180 Q300,260 280,360 Q300,400 360,400 Q420,400 440,360 Q420,260 440,180', { sw: 2, fill: accent, fillOpacity: 0.2 })}
    ${circle(340, 240, 4, { fill: ink, stroke:'none' })}
    ${circle(380, 240, 4, { fill: ink, stroke:'none' })}
    ${path('M340,290 Q360,300 380,290', { sw: 1.5 })}
    ${[280,300,320,400,420,440].map(x=>line(x, 380, x, 410, { sw: 1.5, stroke: secondary, opacity: 0.7 })).join('')}
    ${path('M460,180 Q500,160 540,180 L530,200 L500,210 L480,200 Z', { sw: 2, fill: ink })}
    ${path('M540,180 L560,170 L555,190 Z', { sw: 1.5, fill: ink })}
    ${circle(530, 185, 1.5, { fill: bone, stroke:'none' })}
    ${path('M460,180 Q470,170 480,180', { sw: 1, opacity: 0.7 })}
    ${path('M460,200 Q450,210 460,220', { sw: 1, dash:'2 2' })}
    ${path('M540,210 Q560,220 580,210', { sw: 1, dash: '3 2', opacity: 0.6 })}
    ${rect(120, 460, 480, 90, { sw: 1.5, fill: bone })}
    ${txt(360, 482, 'MECHANISM: FUNCTIONAL', { anchor:'middle', size: 11, weight:'bold', ls: 2 })}
    ${txt(360, 504, '— BUT NON-AUTHORITATIVE —', { anchor:'middle', size: 10, ls: 2.5, opacity: 0.75, style:'italic' })}
    ${txt(360, 528, '(TECHNICAL DEFINITION OF CONDITION)', { anchor:'middle', size: 8, ls: 2, opacity: 0.6 })}
    ${cornerSeal(620, 100, accent, 'CROW')}
    ${sceneFooter({ ink, accent, line1: 'CROW PERCHED · UNAFRAID', line2: 'PECK TRANSLATED · LOGGED', code: 'CC-04' })}
  `},
  // 5 Field Survey
  { title: 'Field Survey', cue: 'no direction called "away"', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'PLANTING FIELD — COORDINATE SURVEY' })}
    ${rect(80, 90, 560, 380, { sw: 1.5 })}
    ${Array.from({length:11},(_,i)=>line(80+i*56, 90, 80+i*56, 470, { sw: 0.4, opacity: 0.4 })).join('')}
    ${Array.from({length:8},(_,i)=>line(80, 90+i*56, 640, 90+i*56, { sw: 0.4, opacity: 0.4 })).join('')}
    ${[[80,90,'A1'],[640,90,'F1'],[80,470,'A8'],[640,470,'F8']].map(([x,y,t])=>txt(x+(x>360?-8:8), y+(y>280?-8:14), t, { anchor: x>360?'end':'start', size: 9, weight:'bold', ls: 1 })).join('')}
    ${circle(360, 280, 8, { sw: 2, fill: secondary })}
    ${circle(360, 280, 18, { sw: 1, dash: '2 2' })}
    ${path('M200,180 L290,250', { sw:1, dash:'4 4' })}
    ${path('M520,180 L430,250', { sw:1, dash:'4 4' })}
    ${path('M200,400 L290,310', { sw:1, dash:'4 4' })}
    ${path('M520,400 L430,310', { sw:1, dash:'4 4' })}
    ${[[200,180,'STAKE-A'],[520,180,'STAKE-B'],[200,400,'STAKE-C'],[520,400,'STAKE-D']].map(([x,y,t])=>
      polygon(`${x-6},${y+8} ${x+6},${y+8} ${x},${y-10}`, { sw: 1.5, fill: ink }) +
      txt(x, y+24, t, { anchor:'middle', size: 8, weight:'bold', ls: 1.5 })
    ).join('')}
    ${txt(360, 270, 'POST', { anchor:'middle', size: 8, weight:'bold', fill: bone })}
    ${rect(180, 490, 360, 60, { sw: 1.5, fill: bone })}
    ${txt(360, 510, 'DRIFT: 0.0 UNITS', { anchor:'middle', size: 12, weight:'bold', ls: 3 })}
    ${txt(360, 532, 'NO COORDINATE LABELED "AWAY"', { anchor:'middle', size: 9, ls: 2, opacity: 0.7, style:'italic' })}
    ${cornerSeal(120, 130, accent, 'GRID')}
    ${sceneFooter({ ink, accent, line1: 'STAMP INSIDE HAT', line2: 'TO BE READ BY WHATEVER LOOKS LATER', code: 'FS-N · 05' })}
  `},
  // 6 Pin Architecture
  { title: 'Pin Architecture', cue: 'structural memory present', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'INTERIOR CONSTRUCTION — PIN MAP' })}
    ${path('M200,140 Q200,100 360,100 Q520,100 520,140 L520,440 Q520,500 360,500 Q200,500 200,440 Z', { sw: 2 })}
    ${Array.from({length:24},(_,i)=>{
      const cols = 6, rows = 8;
      const c = i % cols, r = Math.floor(i / cols);
      const x = 220 + c*55;
      const y = 160 + r*40;
      return line(x, y, x+6, y-18, { sw: 1.5, stroke: ink }) +
             circle(x+6, y-18, 2, { fill: secondary, stroke:'none' }) +
             circle(x, y, 2.5, { fill: accent, stroke: ink, sw: 0.5 });
    }).join('')}
    ${[[230,200,400,440],[270,170,460,360],[290,420,500,180],[230,300,470,260]].map(([x1,y1,x2,y2])=>
      line(x1, y1, x2, y2, { sw: 0.5, stroke: accent, opacity: 0.45, dash: '3 2' })
    ).join('')}
    ${rect(160, 510, 400, 50, { sw: 1.5, fill: bone })}
    ${txt(360, 530, 'PAIN THRESHOLD: N/A', { anchor:'middle', size: 11, weight:'bold', ls: 2 })}
    ${txt(360, 550, 'STRUCTURAL MEMORY: PRESENT', { anchor:'middle', size: 9, ls: 2, opacity: 0.7 })}
    ${cornerSeal(620, 110, accent, 'PIN-OK')}
    ${sceneFooter({ ink, accent, line1: 'EACH CATCH LOGGED', line2: 'INVENTORY: COMPLETE', code: 'PA · 06' })}
  `},
  // 7 Burning Permit
  { title: 'The Burning Permit', cue: 'issued retroactively', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'AGRICULTURAL PERMIT — NORTH FIELD' })}
    ${`<g transform="rotate(-4 360 320)">${rect(120, 130, 480, 380, { sw: 2, fill: bone })}</g>`}
    ${`<g transform="rotate(-4 360 320)">${rect(120, 130, 480, 30, { fill: ink, stroke:'none' })}</g>`}
    ${`<g transform="rotate(-4 360 320)">${txt(360, 152, 'PERMIT — BURNING / NORTH FIELD', { anchor:'middle', size: 11, fill: bone, ls: 3, weight:'bold' })}</g>`}
    ${`<g transform="rotate(-4 360 320)">
      ${txt(140, 200, 'PERMIT ID:', { size: 10, weight:'bold', ls:2 })}
      ${txt(360, 200, 'BP-04-NF-RETRO', { size: 10, ls:2 })}
      ${txt(140, 230, 'COVERAGE:', { size: 10, weight:'bold', ls:2 })}
      ${txt(360, 230, 'NORTH FIELD (FULL)', { size: 10, ls:2 })}
      ${txt(140, 260, 'ISSUED:', { size: 10, weight:'bold', ls:2 })}
      ${txt(360, 260, '— BEFORE — / RETROACTIVE', { size: 10, ls:2 })}
      ${txt(140, 290, 'AUTH BY:', { size: 10, weight:'bold', ls:2 })}
      ${txt(360, 290, 'STRAW CLERK · BUREAU', { size: 10, ls:2 })}
      ${line(140, 330, 580, 330, { sw: 0.75, opacity: 0.5 })}
      ${txt(360, 360, 'WARMING DETECTED', { anchor:'middle', size:14, weight:'bold', ls: 3, fill: secondary })}
    </g>`}
    ${[[180,420,12],[300,400,18],[420,440,15],[540,410,10]].map(([x,y,r])=>
      path(`M${x-r},${y} Q${x-r/2},${y-r*1.5} ${x},${y-r} Q${x+r/2},${y-r*1.5} ${x+r},${y} Q${x},${y+r/2} ${x-r},${y} Z`, { sw: 1, stroke: secondary, opacity: 0.6 })
    ).join('')}
    ${cornerSeal(580, 480, secondary, 'WARM')}
    ${sceneFooter({ ink, accent, line1: 'PAPER PRESSED TO CHEST', line2: 'WARMTH · UNUSUAL', code: 'BP-NF · RETRO' })}
  `},
  // 8 Neural Allocation
  { title: 'Neural Allocation', cue: 'fiber count = synaptic density', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'NEURAL ALLOCATION FORM 12-NA' })}
    ${rect(100, 100, 520, 480, { sw: 2, fill: bone })}
    ${rect(100, 100, 520, 28, { fill: ink, stroke:'none' })}
    ${txt(360, 120, 'FORM 12-NA · NEURAL ALLOCATION', { anchor:'middle', size: 11, fill: bone, ls: 3, weight:'bold' })}
    ${[
      ['SYNAPTIC DENSITY',  'TENSILE STRENGTH: 12.4 N',  '  → ENTERED'],
      ['CORTICAL LOAD',     'FIBER COUNT: 3,840',         '  → ENTERED'],
      ['NEUROCHEMICAL',     'MOISTURE CONTENT: 6.2%',     '  → ENTERED'],
      ['CONDUCTIVITY',      'STRAW BUNDLE Ø: 11.0 MM',    '  → ENTERED'],
      ['SIGNAL FIDELITY',   'BRITTLE BEND: 0.31 RAD',     '  → ENTERED'],
      ['UNIT TYPE',         'STRAW (NON-NEURAL)',         '  → SUBSTITUTED'],
    ].map(([k,v,note], i) => {
      const y = 170 + i*60;
      return txt(120, y, k+':', { size: 10, weight:'bold', ls: 2 }) +
             txt(120, y+18, v, { size: 9, ls: 1.5, opacity: 0.85 }) +
             txt(120, y+36, note, { size: 8, ls: 1.5, opacity: 0.55, fill: i===5?secondary:ink }) +
             line(120, y+45, 600, y+45, { sw: 0.5, opacity: 0.4 });
    }).join('')}
    ${cornerSeal(560, 540, accent, 'ALLOC')}
    ${sceneFooter({ ink, accent, line1: 'CLERK SUBSTITUTES · NO COMMENT', line2: 'FORM ACCEPTED · COMPLETE', code: 'NA-12 · F' })}
  `},
];

// ═══════════════════════════════════════════════════════════
// DOROTHY — DUST ORACLE (Dust Clerk)
// ═══════════════════════════════════════════════════════════
const dorothy = [
  // 1 Homesick Nerve
  { title: 'The Homesick Nerve', cue: 'fiber pulls northwest', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'COMPASS-WOUND NERVE — HEEL EXTRACT' })}
    ${circle(360, 280, 130, { sw: 2 })}
    ${circle(360, 280, 130, { sw: 0.75, dash: '2 4', opacity: 0.5 })}
    ${['N','E','S','W'].map((d,i)=>{
      const a = i*Math.PI/2 - Math.PI/2;
      return txt(360 + Math.cos(a)*150, 280 + Math.sin(a)*150 + 4, d, { anchor:'middle', size: 12, weight:'bold' });
    }).join('')}
    ${path('M360,140 L350,170 L370,170 Z', { sw: 1.5, fill: ink })}
    ${`<g transform="rotate(-45 360 280)">${path('M360,150 L355,170 L365,170 Z', { sw: 2, fill: accent })}${line(360, 170, 360, 280, { sw: 3, stroke: accent })}</g>`}
    ${path('M360,280 Q300,260 280,200 Q260,160 230,140', { sw: 2, stroke: secondary })}
    ${path('M230,140 Q220,130 215,120', { sw: 1.5, stroke: secondary })}
    ${circle(230, 140, 4, { fill: secondary, stroke: 'none' })}
    ${[[200,90],[180,110],[170,135]].map(([x,y])=>circle(x,y,1.5,{fill:secondary,stroke:'none'})).join('')}
    ${rect(120, 460, 480, 90, { sw: 1.5, fill: bone })}
    ${txt(360, 482, 'HOME — NOT RATIFIED', { anchor:'middle', size: 12, weight:'bold', ls: 3, fill: secondary })}
    ${txt(360, 504, 'DIRECTION DOES NOT EXIST IN OZ', { anchor:'middle', size: 9, ls: 2, opacity: 0.7 })}
    ${txt(360, 528, '— SHALLOW HEEL CUT · KANSAS WHEAT —', { anchor:'middle', size: 8, ls: 1.5, opacity: 0.55, style:'italic' })}
    ${cornerSeal(620, 460, secondary, 'KS-NV')}
    ${sceneFooter({ ink, accent, line1: 'FIBER LOGGED · NW', line2: 'REGISTERED EVENT · RECURRING', code: 'HSN · 01' })}
  `},
  // 2 Silver Incision
  { title: 'Silver Incision', cue: 'channel glows · logged', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'SILVER SHOE — CONTACT CROSS-SECTION' })}
    ${path('M120,260 Q200,180 320,200 Q480,220 580,260 L580,360 Q480,400 320,380 Q200,360 120,360 Z', { sw: 2.5, fill: '#B7BDC7', fillOpacity: 0.5 })}
    ${path('M120,260 Q200,180 320,200 Q480,220 580,260', { sw: 2 })}
    ${path('M150,260 Q220,200 320,220 Q470,240 560,270', { sw: 1, opacity: 0.6 })}
    ${path('M120,300 L580,300', { sw: 1.5, stroke: secondary, opacity: 0.7, dash: '6 3' })}
    ${path('M120,320 Q200,330 580,320', { sw: 0.75, dash: '2 3', opacity: 0.5 })}
    ${path('M150,360 Q300,420 600,400', { sw: 3, stroke: ink, opacity: 0.85 })}
    ${path('M150,360 Q300,420 600,400', { sw: 1.5, stroke: '#B7BDC7' })}
    ${[180,260,340,420,500,560].map(x=>circle(x, 300+(x%30===0?6:-2), 3, { fill: secondary, stroke:'none' })).join('')}
    ${txt(610, 250, 'SHOE', { size: 9, weight:'bold' })}
    ${txt(610, 305, 'CHANNEL', { size: 9, fill: secondary, weight:'bold' })}
    ${txt(610, 365, 'SKIN', { size: 9, opacity: 0.7 })}
    ${txt(610, 410, 'SPINE', { size: 9, opacity: 0.7 })}
    ${rect(140, 460, 440, 90, { sw: 1.5, fill: bone })}
    ${txt(360, 482, 'CHANNEL: SILVER · ACTIVE', { anchor:'middle', size: 11, weight:'bold', ls: 2 })}
    ${txt(360, 504, 'GLOW FREQUENCY · LOGGED', { anchor:'middle', size: 9, ls: 2, opacity: 0.7 })}
    ${txt(360, 526, 'CLERK DOES NOT BLINK', { anchor:'middle', size: 8, ls: 1.5, opacity: 0.6, style:'italic' })}
    ${cornerSeal(120, 130, secondary, 'CUT')}
    ${sceneFooter({ ink, accent, line1: 'SHALLOW CUT · DORSUM', line2: 'COLD · PRECISE', code: 'SI-02' })}
  `},
  // 3 Warrant Thread
  { title: 'Warrant Thread', cue: 'thread = warrant', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'BUREAU WARRANT — TEMPORAL THREAD' })}
    ${path('M150,160 L500,160 L500,400 L150,400 Z', { sw: 2, fill: bone })}
    ${path('M150,400 L120,440 L470,440 L500,400', { sw: 2, fill: bone })}
    ${[180,220,260,300].map(y=>line(170, y, 480, y, { sw: 0.5, opacity: 0.45 })).join('')}
    ${rect(170, 180, 200, 24, { fill: ink, stroke:'none' })}
    ${txt(270, 197, 'WARRANT', { anchor:'middle', size: 11, fill: bone, ls: 3, weight:'bold' })}
    ${txt(180, 230, 'CHARGE: PRESENCE IN OZ', { size: 9, ls: 2 })}
    ${txt(180, 250, '         W/O AUTHORIZATION', { size: 9, ls: 2 })}
    ${txt(180, 280, 'STATUS: ACTIVE', { size: 10, weight:'bold', ls: 2, fill: secondary })}
    ${txt(180, 310, 'TYING: NERVE → WARRANT', { size: 9, ls: 2 })}
    ${txt(180, 360, 'STAMP: REGISTERED', { size: 10, weight:'bold', ls: 2 })}
    ${path('M540,140 Q580,180 540,220 Q500,260 540,300 Q580,340 540,380 Q500,420 540,460', { sw: 2, stroke: secondary })}
    ${path('M540,140 Q500,180 540,220 Q580,260 540,300 Q500,340 540,380 Q580,420 540,460', { sw: 1, stroke: secondary, opacity: 0.6 })}
    ${circle(540, 140, 5, { fill: ink })}
    ${circle(540, 460, 5, { fill: ink })}
    ${cornerSeal(580, 530, secondary, 'WARR')}
    ${sceneFooter({ ink, accent, line1: 'THREAD HOLDS · FORM HOLDS', line2: 'CANNOT CUT WITHOUT EXECUTION', code: 'WT-03' })}
  `},
  // 4 Terminal Pull
  { title: 'Terminal Pull', cue: 'homeward tension elevated', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'FORCE DIAGRAM — HOMEWARD VECTORS' })}
    ${circle(360, 290, 12, { sw: 2.5, fill: ink })}
    ${[[500,90],[580,180],[600,300],[580,420],[500,500],[400,540],[280,540],[180,500],[100,420],[80,300],[100,180],[180,90],[280,60],[400,60]].map(([x,y])=>{
      const dx = 360 - x, dy = 290 - y;
      const len = Math.sqrt(dx*dx + dy*dy);
      const ux = dx/len, uy = dy/len;
      const x2 = x + ux*(len-30);
      const y2 = y + uy*(len-30);
      const ang = Math.atan2(dy, dx)*180/Math.PI;
      return line(x, y, x2, y2, { sw: 1.5, stroke: secondary, opacity: 0.7 }) +
        `<g transform="translate(${x2} ${y2}) rotate(${ang})">${path('M0,0 L-10,-4 L-10,4 Z', { sw: 1, fill: secondary, stroke: 'none' })}</g>`;
    }).join('')}
    ${circle(360, 290, 60, { sw: 1, dash: '3 3', opacity: 0.4 })}
    ${rect(160, 460, 400, 90, { sw: 1.5, fill: bone })}
    ${txt(360, 482, 'TENSION: ELEVATED', { anchor:'middle', size: 12, weight:'bold', ls: 3, fill: secondary })}
    ${txt(360, 504, '— ALWAYS TAUT —', { anchor:'middle', size: 10, ls: 2.5, opacity: 0.75, style:'italic' })}
    ${txt(360, 528, 'TARGET: 400 MI NE · 60 YR PAST', { anchor:'middle', size: 8, ls: 2, opacity: 0.6 })}
    ${cornerSeal(620, 110, secondary, 'PULL')}
    ${sceneFooter({ ink, accent, line1: 'NEITHER SYMPTOM NOR DIAGNOSIS', line2: 'CONDITION OF MATERIAL', code: 'TP-04' })}
  `},
  // 5 Kansas Residue
  { title: 'Kansas Residue', cue: 'pre-oz · uncatalogued', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'SOIL SAMPLE — PRE-OZ ANALYSIS' })}
    ${circle(360, 280, 140, { sw: 2.5 })}
    ${circle(360, 280, 140, { sw: 0.5, opacity: 0.4, dash: '1 2' })}
    ${hatchRect(220, 140, 280, 280, { gap: 8, opacity: 0.35, stroke: '#8E8A83' })}
    ${[[280,200,4],[330,180,3],[400,210,5],[440,260,3.5],[300,300,4],[380,320,5],[260,360,4],[420,370,3.5],[340,260,3],[450,200,4]].map(([x,y,r])=>circle(x,y,r,{fill:ink,stroke:'none'})).join('')}
    ${path('M250,140 Q260,180 220,200 Q280,260 300,260 L320,180 Z', { sw: 0.5, opacity: 0.5 })}
    ${rect(450, 200, 60, 60, { sw: 1.5, fill: bone })}
    ${path('M450,200 L510,260 M510,200 L450,260', { sw: 0.5, opacity: 0.4 })}
    ${circle(480, 230, 18, { sw: 1, opacity: 0.6 })}
    ${circle(480, 230, 12, { sw: 1, opacity: 0.4 })}
    ${txt(480, 282, 'LENS', { anchor:'middle', size: 7, ls: 1.5, opacity: 0.7 })}
    ${rect(120, 460, 480, 90, { sw: 1.5, fill: bone })}
    ${txt(360, 482, 'CONTAMINATION: FOREIGN SUBSTRATE', { anchor:'middle', size: 11, weight:'bold', ls: 2 })}
    ${txt(360, 504, 'NOT UPDATED TO OZ-STANDARD', { anchor:'middle', size: 9, ls: 2, opacity: 0.7 })}
    ${txt(360, 528, 'LOG ENTRY · APPENDED · LONG', { anchor:'middle', size: 8, ls: 1.5, opacity: 0.6, style:'italic' })}
    ${cornerSeal(620, 110, secondary, 'PRE-OZ')}
    ${sceneFooter({ ink, accent, line1: 'GREY · DRY · MINERAL', line2: 'BUREAU CALLS IT LEGACY', code: 'KR-05' })}
  `},
  // 6 Cyclone Core
  { title: 'Cyclone Core', cue: 'still inside the event', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'CHEST IMPRESSION — CYCLONE CORE' })}
    ${[[360,280,180],[360,280,150],[360,280,120],[360,280,90],[360,280,60]].map(([cx,cy,r],i)=>
      `<g transform="rotate(${i*15} ${cx} ${cy})">${path(`M${cx-r},${cy} Q${cx},${cy-r*1.4} ${cx+r},${cy} Q${cx},${cy+r*1.4} ${cx-r},${cy} Z`, { sw: 1.5, opacity: 0.5+i*0.1, stroke: ink })}</g>`
    ).join('')}
    ${rect(330, 250, 60, 60, { sw: 2, fill: secondary, fillOpacity: 0.4 })}
    ${path('M340,260 L380,260 L380,300 L340,300 Z M350,250 L350,310 M370,250 L370,310 M345,275 L375,275', { sw: 1, stroke: ink })}
    ${polygon('330,250 360,220 390,250', { sw: 2, fill: secondary, fillOpacity: 0.5 })}
    ${path('M180,440 L540,440', { sw: 1.5, stroke: accent, dash: '8 4', opacity: 0.8 })}
    ${txt(360, 460, 'EVENT BOUNDARY (PROVISIONAL)', { anchor:'middle', size: 8, ls: 2, opacity: 0.6 })}
    ${rect(140, 480, 440, 80, { sw: 1.5, fill: bone })}
    ${txt(360, 502, 'CYCLONE DATA: ONGOING', { anchor:'middle', size: 11, weight:'bold', ls: 2 })}
    ${txt(360, 524, 'PRESSURE READING — STILL ELEVATED', { anchor:'middle', size: 9, ls: 2, opacity: 0.7 })}
    ${txt(360, 545, '"YOU ARE STILL INSIDE"', { anchor:'middle', size: 9, ls: 2, fill: secondary, weight:'bold', style:'italic' })}
    ${cornerSeal(120, 110, secondary, 'CYCL')}
    ${sceneFooter({ ink, accent, line1: 'PALMS ON STERNUM', line2: 'HOUSE-SHAPED HOLLOW', code: 'CC-06' })}
  `},
  // 7 Toto Signal
  { title: 'Toto Signal', cue: 'clearest · unheard', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'SIGNAL TRANSMITTER — UNREAD CHANNEL' })}
    ${path('M180,260 Q190,220 230,210 Q260,205 280,220 L320,210 L340,230 L340,300 Q340,330 320,340 L280,340 L260,360 L240,340 L220,340 Q190,330 180,300 Z', { sw: 2.5, fill: ink, fillOpacity: 0.85 })}
    ${path('M340,230 Q360,225 365,215', { sw: 2, stroke: ink })}
    ${circle(290, 260, 3, { fill: bone, stroke:'none' })}
    ${circle(310, 260, 3, { fill: bone, stroke:'none' })}
    ${path('M280,290 L320,295', { sw: 1, stroke: bone })}
    ${circle(300, 285, 2, { fill: secondary, stroke:'none' })}
    ${path('M380,250 Q400,250 400,280 Q400,310 380,310', { sw: 1.5, opacity: 0.6 })}
    ${path('M400,230 Q430,230 430,280 Q430,330 400,330', { sw: 1.5, opacity: 0.5 })}
    ${path('M420,210 Q460,210 460,280 Q460,350 420,350', { sw: 1.5, opacity: 0.4 })}
    ${path('M440,190 Q490,190 490,280 Q490,370 440,370', { sw: 1.5, opacity: 0.3 })}
    ${path('M520,180 Q580,200 580,280 Q580,360 520,380', { sw: 1.5, opacity: 0.2 })}
    ${rect(120, 410, 480, 30, { sw: 1, fill: bone })}
    ${path('M130,425 Q150,395 170,425 Q190,455 210,425 Q230,395 250,425 Q270,455 290,425 Q310,395 330,425 Q350,455 370,425 Q390,395 410,425 Q430,455 450,425 Q470,395 490,425 Q510,455 530,425 Q550,395 570,425 Q590,455 600,425', { sw: 1.5, stroke: accent })}
    ${rect(140, 460, 440, 90, { sw: 1.5, fill: bone })}
    ${txt(360, 482, 'COMPANION-LOCK · DETECTED', { anchor:'middle', size: 11, weight:'bold', ls: 2 })}
    ${txt(360, 504, 'CONTRABAND: EMOTIONAL', { anchor:'middle', size: 9, ls: 2, opacity: 0.7 })}
    ${txt(360, 526, 'FILED · NOT REMOVED', { anchor:'middle', size: 9, ls: 2, opacity: 0.7, style:'italic', weight:'bold' })}
    ${cornerSeal(620, 110, accent, 'TOTO')}
    ${sceneFooter({ ink, accent, line1: 'CONTINUOUS WAVE · CLEAR', line2: 'NO ONE LISTENING', code: 'TS-07' })}
  `},
  // 8 Silver Conductor
  { title: 'Silver Conductor', cue: 'destination: [redacted]', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'CIRCUIT SCHEMATIC — SILVER SHOES' })}
    ${rect(120, 140, 200, 100, { sw: 2, fill: '#B7BDC7', fillOpacity: 0.5 })}
    ${rect(400, 140, 200, 100, { sw: 2, fill: '#B7BDC7', fillOpacity: 0.5 })}
    ${path('M120,140 Q220,100 320,140 L320,240 Q220,280 120,240 Z', { sw: 2 })}
    ${path('M400,140 Q500,100 600,140 L600,240 Q500,280 400,240 Z', { sw: 2 })}
    ${txt(220, 195, 'L', { anchor:'middle', size: 32, weight:'bold' })}
    ${txt(500, 195, 'R', { anchor:'middle', size: 32, weight:'bold' })}
    ${path('M220,240 L220,310 L500,310 L500,240', { sw: 2.5, stroke: ink })}
    ${path('M220,240 L220,310 L500,310 L500,240', { sw: 1.5, stroke: secondary, dash: '6 3' })}
    ${[260,300,340,380,420,460].map(x=>circle(x, 310, 4, { fill: accent })).join('')}
    ${path('M340,310 L380,310', { sw: 4, stroke: accent })}
    ${rect(280, 340, 160, 40, { sw: 1.5, fill: ink })}
    ${txt(360, 365, 'INPUT: [REDACTED]', { anchor:'middle', size: 11, fill: bone, ls: 2.5, weight:'bold' })}
    ${path('M150,400 L200,400 M210,400 L260,400 M270,400 L320,400', { sw: 1.5 })}
    ${[150,210,270].map(x=>txt(x+25, 414, 'CLICK', { anchor:'middle', size: 8, ls: 1.5, opacity: 0.7 })).join('')}
    ${rect(140, 440, 440, 90, { sw: 1.5, fill: bone })}
    ${txt(360, 462, 'DESTINATION LOCK: PARTIAL', { anchor:'middle', size: 11, weight:'bold', ls: 2 })}
    ${txt(360, 484, 'INPUT ADDRESS NOT ENTERED', { anchor:'middle', size: 9, ls: 2, opacity: 0.7 })}
    ${txt(360, 506, 'CLERK WAITS · PATIENTLY', { anchor:'middle', size: 8, ls: 1.5, opacity: 0.6, style:'italic' })}
    ${cornerSeal(620, 540, secondary, '[REDC]')}
    ${sceneFooter({ ink, accent, line1: 'CONDUCTOR PROBE · 2 TAPS', line2: 'HUM FREQUENCY LOGGED', code: 'SC-08' })}
  `},
];

// Export all decks
export const allDecks = { lion, tin_man, scarecrow, dorothy };
