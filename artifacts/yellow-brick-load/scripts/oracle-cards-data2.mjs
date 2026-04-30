// YELLOW BRICK LOAD — Oracle Card Scene Definitions, Part 2 (decks 5–12)

import { txt, rect, line, circle, path, polygon, lines, stamp, hatchRect, formSheet } from './oracle-cards-framework.mjs';

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
// GLINDA — REFRACTION ORACLE (Porcelain Auditor)
// ═══════════════════════════════════════════════════════════
const glinda = [
  { title: 'Pink Filament', cue: 'optical data — not emotion', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'WRIST EXTRACT — REFRACTING FILAMENT' })}
    ${path('M120,250 Q200,210 280,250 L300,310 Q220,350 140,310 Z', { sw: 2, fill: '#F4D5E0', fillOpacity: 0.7 })}
    ${path('M170,260 Q220,250 250,270', { sw: 1, opacity: 0.6 })}
    ${path('M280,250 Q380,200 480,250', { sw: 2.5, stroke: accent })}
    ${path('M280,250 Q380,200 480,250', { sw: 1, stroke: accent, dash: '2 2', opacity: 0.7 })}
    ${circle(380, 220, 4, { fill: accent, stroke: ink, sw: 0.75 })}
    ${rect(440, 180, 180, 180, { sw: 2 })}
    ${circle(530, 270, 70, { sw: 2, fill: bone })}
    ${circle(530, 270, 70, { sw: 0.75, opacity: 0.6, dash: '2 3' })}
    ${path('M460,270 L600,270', { sw: 1.5, stroke: accent, dash: '4 3' })}
    ${path('M530,200 L530,340', { sw: 1, opacity: 0.5 })}
    ${path('M480,230 L580,310', { sw: 0.75, stroke: accent, opacity: 0.7 })}
    ${path('M480,310 L580,230', { sw: 0.75, stroke: accent, opacity: 0.7 })}
    ${rect(140, 460, 440, 90, { sw: 1.5, fill: bone })}
    ${txt(360, 482, 'BEND ANGLE: 14.2°', { anchor:'middle', size: 11, weight:'bold', ls: 2.5 })}
    ${txt(360, 504, 'NEUTRAL ASSET (PER BUREAU)', { anchor:'middle', size: 9, ls: 2, opacity: 0.7 })}
    ${txt(360, 526, '— FILAMENT KNOWS BETTER —', { anchor:'middle', size: 8, ls: 2, opacity: 0.6, style:'italic' })}
    ${cornerSeal(620, 130, accent, 'BEND')}
    ${sceneFooter({ ink, accent, line1: 'HAIR-FINE CUT · GRACE LINE', line2: 'LIGHT BENT · READ', code: 'PF-01' })}
  `},
  { title: 'Lens Calibration', cue: 'truth: parallax-corrected', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'EYE LENS — CALIBRATION CHART' })}
    ${[200,360,520].map((cx,i)=>{
      const r = 90;
      return circle(cx, 280, r, { sw: 2, fill: i===1 ? accent : 'none', fillOpacity: 0.2 }) +
             circle(cx, 280, r-15, { sw: 0.75, dash: '3 3', opacity: 0.6 }) +
             circle(cx, 280, 8, { fill: ink }) +
             line(cx-r, 280, cx+r, 280, { sw: 0.5, opacity: 0.4 }) +
             line(cx, 280-r, cx, 280+r, { sw: 0.5, opacity: 0.4 }) +
             txt(cx, 380+15, `LENS ${i+1}`, { anchor:'middle', size: 9, weight:'bold', ls: 2 });
    }).join('')}
    ${path('M120,420 Q360,380 600,420', { sw: 1, dash: '4 3', stroke: accent, opacity: 0.7 })}
    ${rect(120, 460, 480, 80, { sw: 1.5, fill: bone })}
    ${txt(360, 482, 'PARALLAX: CORRECTED', { anchor:'middle', size: 11, weight:'bold', ls: 2.5 })}
    ${txt(360, 504, 'TRUTH ALIGNED · PROVISIONAL', { anchor:'middle', size: 9, ls: 2, opacity: 0.7 })}
    ${txt(360, 526, '"NOTHING FALSE ENOUGH TO REPORT"', { anchor:'middle', size: 8, ls: 2, opacity: 0.6, style:'italic' })}
    ${cornerSeal(620, 530, secondary, 'CAL')}
    ${sceneFooter({ ink, accent, line1: 'TRIPLE LENS · CHAINED', line2: 'AUDITOR HOLDS — STILL', code: 'LC-02' })}
  `},
  { title: 'Mirrored Anatomy', cue: 'symmetry: aesthetic', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'BILATERAL DIAGRAM — MIRROR FIELD' })}
    ${line(360, 80, 360, 460, { sw: 0.75, dash: '3 3', stroke: accent })}
    ${[[300,140,260,180],[280,200,240,240],[260,260,220,300],[280,320,240,360],[300,380,260,420]].map(([x1,y1,x2,y2])=>{
      // left and mirrored right
      return line(x1, y1, x2, y2, { sw: 1.5 }) +
             circle(x1, y1, 3, { fill: ink }) +
             circle(x2, y2, 3, { fill: ink }) +
             // mirror
             line(720-x1, y1, 720-x2, y2, { sw: 1.5 }) +
             circle(720-x1, y1, 3, { fill: ink }) +
             circle(720-x2, y2, 3, { fill: ink });
    }).join('')}
    ${path('M180,180 Q300,160 360,200 Q420,160 540,180', { sw: 1, opacity: 0.6, stroke: accent })}
    ${path('M180,440 Q300,460 360,420 Q420,460 540,440', { sw: 1, opacity: 0.6, stroke: accent })}
    ${path('M340,200 Q360,180 380,200 Q360,260 340,200 Z', { sw: 1.5, fill: accent, fillOpacity: 0.4 })}
    ${path('M340,400 Q360,380 380,400 Q360,440 340,400 Z', { sw: 1.5, fill: accent, fillOpacity: 0.4 })}
    ${[[230,250,'L-A'],[490,250,'R-A'],[230,350,'L-B'],[490,350,'R-B']].map(([x,y,t])=>txt(x, y, t, { anchor:'middle', size: 8, ls: 1.5, opacity: 0.7, weight:'bold' })).join('')}
    ${rect(140, 460, 440, 80, { sw: 1.5, fill: bone })}
    ${txt(360, 482, 'BILATERAL: MATCHED', { anchor:'middle', size: 11, weight:'bold', ls: 2.5 })}
    ${txt(360, 504, 'AESTHETIC DEVIATION: 0.04%', { anchor:'middle', size: 9, ls: 2, opacity: 0.7 })}
    ${txt(360, 524, 'WITHIN PORCELAIN STD', { anchor:'middle', size: 8, ls: 2, opacity: 0.6, style:'italic' })}
    ${cornerSeal(120, 110, accent, 'MIRR')}
    ${sceneFooter({ ink, accent, line1: 'STERNUM AXIS · CONFIRMED', line2: 'EVERY MARK · EVERY MIRROR', code: 'MA-03' })}
  `},
  { title: 'Pink Refraction', cue: 'pity bent into compliance', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'OPTICAL READING — EMOTIONAL BAND' })}
    ${path('M120,200 L240,300 L120,400', { sw: 2.5, fill: '#F4D5E0', fillOpacity: 0.7 })}
    ${path('M240,300 L600,300', { sw: 2.5, stroke: accent })}
    ${path('M240,300 L600,200', { sw: 1.5, stroke: accent, opacity: 0.7 })}
    ${path('M240,300 L600,260', { sw: 1.5, stroke: accent, opacity: 0.5 })}
    ${path('M240,300 L600,340', { sw: 1.5, stroke: accent, opacity: 0.5 })}
    ${path('M240,300 L600,400', { sw: 1.5, stroke: accent, opacity: 0.7 })}
    ${[600,580,560].map((x,i)=>{
      const ys = [200, 260, 300, 340, 400];
      const labels = ['ANGER','GRIEF','BASE','FEAR','LOVE'];
      const cs = [secondary, '#7A5CC7', accent, '#7A5CC7', secondary];
      return ys.map((y, j)=>{
        if (i!==0) return '';
        return rect(x, y-8, 50, 16, { sw: 1, fill: cs[j], fillOpacity: 0.4 }) +
          txt(x+25, y+3, labels[j], { anchor:'middle', size: 7, weight:'bold', ls: 1 });
      }).join('');
    }).join('')}
    ${path('M170,290 L210,290', { sw: 1, opacity: 0.6, dash:'2 2' })}
    ${txt(160, 280, 'IN', { anchor:'end', size: 8, opacity: 0.7, weight:'bold' })}
    ${rect(140, 460, 440, 80, { sw: 1.5, fill: bone })}
    ${txt(360, 482, 'PITY → COMPLIANCE BAND', { anchor:'middle', size: 11, weight:'bold', ls: 2.5 })}
    ${txt(360, 504, 'EMOTION REFRACTED · LOGGED', { anchor:'middle', size: 9, ls: 2, opacity: 0.7 })}
    ${txt(360, 524, 'OUTPUT GRACEFUL · ENFORCED', { anchor:'middle', size: 8, ls: 2, opacity: 0.6, style:'italic' })}
    ${cornerSeal(620, 110, secondary, 'BEND')}
    ${sceneFooter({ ink, accent, line1: 'SOUTH GREAT BOOK · APPENDED', line2: 'PRISM CALIBRATED', code: 'PR-04' })}
  `},
  { title: 'The Great Book Entry', cue: 'page 4,021 — appended', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'GREAT BOOK OF RECORDS — PAGE 4021' })}
    ${path('M120,140 L360,110 L600,140 L600,500 L360,470 L120,500 Z', { sw: 2.5, fill: bone })}
    ${line(360, 110, 360, 470, { sw: 2 })}
    ${path('M120,140 Q360,160 600,140', { sw: 1, opacity: 0.5 })}
    ${path('M120,500 Q360,480 600,500', { sw: 1, opacity: 0.5 })}
    ${Array.from({length:12},(_,i)=>{
      const y = 180 + i*22;
      const left = ['UNIT 04 · ENTERED OZ','OBSERVED · SOUTH BORDER','LENS 2 CALIBRATION','MIRROR ASSESSMENT · BIL.','REFLECT INDEX · LOG','PINK FILAMENT · DRAWN','VEIN PRESSURE · NORMAL','OUTPUT GRACE · LOGGED','ALIGNMENT · PARTIAL','PORCELAIN INTAKE','ROUTE · NORTH RECORD','DEVIATION TOL: 0.04%'][i];
      const right = ['NOTED','OK','OK','OK','APPENDED','OK','OK','OK','OK','OK','OK','OK'][i];
      return line(140, y, 350, y, { sw: 0.4, opacity: 0.4 }) + line(370, y, 580, y, { sw: 0.4, opacity: 0.4 }) +
             txt(150, y-2, left, { size: 7, ls: 1 }) +
             txt(580, y-2, right, { anchor:'end', size: 7, ls: 1, weight:'bold', fill: accent });
    }).join('')}
    ${txt(245, 130, 'PAGE 4021 · L', { anchor:'middle', size: 8, weight:'bold', ls: 2 })}
    ${txt(475, 130, 'PAGE 4021 · R', { anchor:'middle', size: 8, weight:'bold', ls: 2 })}
    ${txt(245, 460, 'CONT. →', { anchor:'middle', size: 8, ls: 2, opacity: 0.6 })}
    ${cornerSeal(580, 480, accent, 'BOOK')}
    ${sceneFooter({ ink, accent, line1: 'GREAT BOOK · READ ALOUD', line2: 'STAMPS DOWN COLUMN', code: 'GBE-05' })}
  `},
  { title: 'Reversal of Pink', cue: 'porcelain showing — fractures', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'PORCELAIN INTEGRITY — FRACTURE MAP' })}
    ${path('M200,160 Q200,120 360,120 Q520,120 520,160 L520,420 Q520,460 360,460 Q200,460 200,420 Z', { sw: 2.5, fill: '#F4D5E0', fillOpacity: 0.5 })}
    ${path('M260,200 L320,260 L300,330 L380,300 L420,380 L370,440', { sw: 2, stroke: secondary })}
    ${path('M280,180 L260,250', { sw: 1, stroke: secondary, opacity: 0.6 })}
    ${path('M440,200 L460,260 L420,300', { sw: 1, stroke: secondary, opacity: 0.6 })}
    ${path('M440,380 L470,440', { sw: 1, stroke: secondary, opacity: 0.6 })}
    ${[[300,250,'F-1'],[400,310,'F-2'],[400,400,'F-3']].map(([x,y,t])=>
      circle(x, y, 14, { sw: 1, dash:'2 2', stroke: secondary, fill: bone, opacity: 0.9 }) +
      txt(x, y+3, t, { anchor:'middle', size: 7, weight:'bold', ls: 1.5, fill: secondary })
    ).join('')}
    ${path('M540,200 L580,160', { sw: 1, opacity: 0.5 })}
    ${path('M540,400 L580,440', { sw: 1, opacity: 0.5 })}
    ${rect(140, 480, 440, 60, { sw: 1.5, fill: bone })}
    ${txt(360, 502, 'GLAZE: FAILING', { anchor:'middle', size: 12, weight:'bold', ls: 3, fill: secondary })}
    ${txt(360, 524, 'SUBDERMAL TUBING — VISIBLE', { anchor:'middle', size: 9, ls: 2, opacity: 0.7 })}
    ${cornerSeal(620, 110, secondary, 'CRACK')}
    ${sceneFooter({ ink, accent, line1: 'PINK SILK · STILL HUNG', line2: 'AUDITOR DOES NOT MENTION', code: 'RP-06' })}
  `},
  { title: 'Refraction Overload', cue: 'too many truths · light scattered', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'OPTICAL OVERFLOW — SCATTER STATE' })}
    ${circle(360, 280, 100, { sw: 2, fill: accent, fillOpacity: 0.3 })}
    ${[0,30,60,90,120,150].map(angle=>{
      const a = angle*Math.PI/180;
      return path(`M${360+Math.cos(a)*100},${280+Math.sin(a)*100} L${360+Math.cos(a)*250},${280+Math.sin(a)*250}`, { sw: 1.5, stroke: accent, opacity: 0.7 }) +
             path(`M${360-Math.cos(a)*100},${280-Math.sin(a)*100} L${360-Math.cos(a)*250},${280-Math.sin(a)*250}`, { sw: 1.5, stroke: accent, opacity: 0.7 }) +
             circle(360+Math.cos(a)*250, 280+Math.sin(a)*250, 4, { fill: accent }) +
             circle(360-Math.cos(a)*250, 280-Math.sin(a)*250, 4, { fill: accent });
    }).join('')}
    ${[20,50,80,100,200,260,300,340].map(angle=>{
      const a = angle*Math.PI/180;
      return path(`M${360+Math.cos(a)*100},${280+Math.sin(a)*100} L${360+Math.cos(a)*220},${280+Math.sin(a)*220}`, { sw: 0.75, stroke: secondary, opacity: 0.5, dash: '3 3' });
    }).join('')}
    ${txt(360, 290, '∞', { anchor:'middle', size: 56, weight:'bold' })}
    ${rect(140, 460, 440, 90, { sw: 1.5, fill: bone })}
    ${txt(360, 482, 'TRUTH-COUNT: TOO HIGH', { anchor:'middle', size: 11, weight:'bold', ls: 2.5, fill: secondary })}
    ${txt(360, 504, 'OPTICAL CHANNEL · SATURATED', { anchor:'middle', size: 9, ls: 2, opacity: 0.7 })}
    ${txt(360, 526, 'GLINDA SMILES THINNER', { anchor:'middle', size: 8, ls: 2, opacity: 0.6, style:'italic' })}
    ${cornerSeal(110, 110, secondary, 'OVRFL')}
    ${sceneFooter({ ink, accent, line1: 'PRISM OVERWHELMED', line2: 'SCATTER · MULTI-DIRECTIONAL', code: 'RO-07' })}
  `},
  { title: 'Crystal Transcendence', cue: 'lens swallows the auditor', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'TERMINAL LENS — INVERSION EVENT' })}
    ${[200,160,120,80,40].map((r,i)=>polygon(`360,${280-r} ${360+r*0.866},${280-r/2} ${360+r*0.866},${280+r/2} 360,${280+r} ${360-r*0.866},${280+r/2} ${360-r*0.866},${280-r/2}`, { sw: 1.5+(4-i)*0.4, fill: accent, fillOpacity: 0.15+i*0.08 })).join('')}
    ${path('M360,80 L360,480', { sw: 0.5, opacity: 0.4, dash:'3 3' })}
    ${path('M188,180 L532,380', { sw: 0.5, opacity: 0.4, dash:'3 3' })}
    ${path('M188,380 L532,180', { sw: 0.5, opacity: 0.4, dash:'3 3' })}
    ${path('M340,260 Q360,250 380,260 Q360,290 340,260 Z', { sw: 0.75, fill: ink, opacity: 0.8 })}
    ${[80,160,240].map((r,i)=>{
      const op = 1 - i*0.3;
      return path(`M360,${280-r} Q${360+r*0.3},${280-r*0.6} ${360+r*0.5},${280}`, { sw: 0.5, stroke: accent, opacity: op*0.5 });
    }).join('')}
    ${rect(140, 480, 440, 60, { sw: 1.5, fill: bone })}
    ${txt(360, 502, 'INVERSION COMPLETE', { anchor:'middle', size: 12, weight:'bold', ls: 3 })}
    ${txt(360, 524, 'AUDITOR INSIDE THE LENS', { anchor:'middle', size: 9, ls: 2, opacity: 0.7, style:'italic' })}
    ${cornerSeal(620, 110, accent, 'TRNS')}
    ${cornerSeal(120, 540, accent, 'OZ')}
    ${sceneFooter({ ink, accent, line1: 'CRYSTAL · TERMINAL STATE', line2: 'NO RETURN PATH FILED', code: 'CT-08' })}
  `},
];

// ═══════════════════════════════════════════════════════════
// WITCH WEST — MALICE ORACLE (Obsidian Matron)
// ═══════════════════════════════════════════════════════════
const witch_west = [
  { title: 'The Single Eye', cue: 'telescope · always watching', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'OPTIC INSTRUMENT — SOLE LENS' })}
    ${circle(360, 280, 130, { sw: 3, fill: ink })}
    ${circle(360, 280, 110, { sw: 2, fill: bone })}
    ${circle(360, 280, 75, { sw: 1.5, fill: accent, fillOpacity: 0.6 })}
    ${circle(360, 280, 38, { sw: 1.5, fill: ink })}
    ${circle(370, 270, 8, { fill: bone, stroke:'none' })}
    ${[0,1,2,3,4,5,6,7].map(i=>{
      const a = i*Math.PI/4;
      return line(360+Math.cos(a)*110, 280+Math.sin(a)*110, 360+Math.cos(a)*135, 280+Math.sin(a)*135, { sw: 1, stroke: ink });
    }).join('')}
    ${path('M120,420 L260,330 L260,400 Z', { sw: 1, fill: ink, opacity: 0.6 })}
    ${path('M600,420 L460,330 L460,400 Z', { sw: 1, fill: ink, opacity: 0.6 })}
    ${rect(140, 460, 440, 90, { sw: 1.5, fill: bone })}
    ${txt(360, 482, 'SUBJECT: NOTED', { anchor:'middle', size: 12, weight:'bold', ls: 3, fill: secondary })}
    ${txt(360, 504, 'MAGNIFICATION · UNREASONABLE', { anchor:'middle', size: 9, ls: 2, opacity: 0.7 })}
    ${txt(360, 526, '— FILE OPENED ON YOU —', { anchor:'middle', size: 8, ls: 2, opacity: 0.7, style:'italic', weight:'bold' })}
    ${cornerSeal(120, 130, secondary, 'WATCH')}
    ${sceneFooter({ ink, accent, line1: 'ONE EYE · GREAT REACH', line2: 'SUMMONS · ISSUED', code: 'TSE-01' })}
  `},
  { title: 'Hooked Smoke', cue: 'malice barbs out of the air', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'AERIAL MALICE — BARB CLOUD' })}
    ${path('M120,260 Q200,180 280,240 Q360,180 440,240 Q520,180 600,260 Q540,300 460,280 Q380,300 300,280 Q220,300 120,260 Z', { sw: 2, fill: ink, fillOpacity: 0.7 })}
    ${[[200,260],[280,250],[360,250],[440,250],[520,260]].map(([x,y])=>
      path(`M${x},${y+5} L${x},${y+40} Q${x+8},${y+35} ${x+4},${y+25}`, { sw: 1.5, stroke: secondary }) +
      path(`M${x},${y+5} L${x},${y+30} Q${x-8},${y+25} ${x-4},${y+15}`, { sw: 1.5, stroke: secondary })
    ).join('')}
    ${[[180,310],[280,330],[380,320],[480,330],[560,310]].map(([x,y])=>
      circle(x, y, 4, { fill: secondary, stroke:'none', opacity: 0.7 })
    ).join('')}
    ${path('M280,400 Q300,380 320,400 Q340,420 320,440 Z', { sw: 1.5, fill: secondary, fillOpacity: 0.6 })}
    ${path('M380,400 Q400,380 420,400 Q440,420 420,440 Z', { sw: 1.5, fill: secondary, fillOpacity: 0.6 })}
    ${path('M340,440 Q380,460 400,440', { sw: 1.5 })}
    ${rect(140, 460, 440, 80, { sw: 1.5, fill: bone })}
    ${txt(360, 482, 'INTENT: HOSTILE', { anchor:'middle', size: 12, weight:'bold', ls: 3, fill: secondary })}
    ${txt(360, 504, 'BARBS · DESCENDING', { anchor:'middle', size: 9, ls: 2, opacity: 0.7 })}
    ${txt(360, 524, 'NO COVER FILED', { anchor:'middle', size: 8, ls: 2, opacity: 0.6, style:'italic' })}
    ${cornerSeal(620, 110, secondary, 'BARB')}
    ${sceneFooter({ ink, accent, line1: 'AIR INVENTORIED · HOSTILE', line2: 'DESCENT VECTOR · MAPPED', code: 'HS-02' })}
  `},
  { title: 'Golden Cap Inventory', cue: 'three wishes · ledgered', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'GOLDEN CAP — WISH ALLOCATION' })}
    ${path('M180,200 Q360,140 540,200 L540,260 L180,260 Z', { sw: 2.5, fill: '#D4A72C', fillOpacity: 0.7 })}
    ${path('M180,260 L160,300 L560,300 L540,260', { sw: 2.5, fill: '#D4A72C', fillOpacity: 0.5 })}
    ${[230,300,360,420,490].map(x=>line(x, 200, x, 260, { sw: 0.75, opacity: 0.5 })).join('')}
    ${path('M250,230 L280,210 M340,200 L340,170 M400,200 L400,170 M460,210 L490,230', { sw: 1, opacity: 0.7, stroke: ink })}
    ${[[200,360,'WISH I',true],[360,360,'WISH II',true],[520,360,'WISH III',false]].map(([x,y,t,used])=>
      rect(x-60, y-30, 120, 80, { sw: 1.5, fill: used?'#D4A72C':'none', fillOpacity: used?0.4:0 }) +
      txt(x, y, t, { anchor:'middle', size: 11, weight:'bold', ls: 2 }) +
      (used ? path(`M${x-50},${y+10} L${x+50},${y+40} M${x+50},${y+10} L${x-50},${y+40}`, { sw: 2.5, stroke: secondary }) : '') +
      txt(x, y+30, used?'EXPENDED':'PENDING', { anchor:'middle', size: 8, ls: 2, opacity: 0.7, weight:'bold' })
    ).join('')}
    ${rect(140, 460, 440, 80, { sw: 1.5, fill: bone })}
    ${txt(360, 482, 'WISHES REMAINING: 1', { anchor:'middle', size: 12, weight:'bold', ls: 3 })}
    ${txt(360, 504, 'CAP TRANSFERRED · LOG SHOWS', { anchor:'middle', size: 9, ls: 2, opacity: 0.7 })}
    ${txt(360, 524, 'EVERY HOLDER · EVERY WISH', { anchor:'middle', size: 8, ls: 2, opacity: 0.6, style:'italic' })}
    ${cornerSeal(120, 110, accent, 'CAP')}
    ${sceneFooter({ ink, accent, line1: 'EXTRACTED · PROPERTY OF MATRON', line2: 'WINGED MONKEYS · ON CALL', code: 'GC-03' })}
  `},
  { title: 'Reading the West', cue: 'compass burned · directionless', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'READING — WESTERN COMPASS BURN' })}
    ${circle(360, 280, 130, { sw: 2 })}
    ${['N','E','S','W'].map((d,i)=>{
      const a = i*Math.PI/2 - Math.PI/2;
      return txt(360 + Math.cos(a)*150, 280 + Math.sin(a)*150 + 4, d, { anchor:'middle', size: 12, weight: d==='W'?'bold':'normal', fill: d==='W'?secondary:ink, opacity: d==='W'?1:0.5 });
    }).join('')}
    ${path('M360,280 L235,280', { sw: 4, stroke: secondary })}
    ${path('M235,280 L255,275 M235,280 L255,285', { sw: 2.5, stroke: secondary })}
    ${[[230,280,40],[230,280,55],[230,280,70]].map(([cx,cy,r])=>
      path(`M${cx-r},${cy} Q${cx},${cy-r*0.7} ${cx+r},${cy} Q${cx},${cy+r*0.7} ${cx-r},${cy} Z`, { sw: 1, stroke: secondary, opacity: 0.4, dash:'3 3' })
    ).join('')}
    ${[[200,260,8],[180,290,6],[210,310,5],[170,320,4]].map(([x,y,r])=>
      path(`M${x-r},${y} Q${x-r/2},${y-r*1.6} ${x},${y} Q${x+r/2},${y-r*1.6} ${x+r},${y} Z`, { sw: 1, stroke: secondary, opacity: 0.5, fill: secondary, fillOpacity: 0.2 })
    ).join('')}
    ${rect(120, 460, 480, 90, { sw: 1.5, fill: bone })}
    ${txt(360, 482, 'WEST ARROW: BURNED IN', { anchor:'middle', size: 11, weight:'bold', ls: 2.5, fill: secondary })}
    ${txt(360, 504, 'COMPASS · BIASED', { anchor:'middle', size: 9, ls: 2, opacity: 0.7 })}
    ${txt(360, 528, 'DIRECTION ALWAYS HER · ALWAYS', { anchor:'middle', size: 8, ls: 2, opacity: 0.6, style:'italic' })}
    ${cornerSeal(620, 110, secondary, 'WEST')}
    ${sceneFooter({ ink, accent, line1: 'NEEDLE FROZEN · WEST', line2: 'NO OTHER READING POSSIBLE', code: 'RW-04' })}
  `},
  { title: 'Castle Audit', cue: 'every room compliant', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'CASTLE FLOOR PLAN — AUDIT MAP' })}
    ${rect(120, 100, 480, 360, { sw: 2.5, fill: ink, fillOpacity: 0.85 })}
    ${rect(140, 120, 200, 100, { sw: 1.5, stroke: bone, fill: secondary, fillOpacity: 0.4 })}
    ${rect(360, 120, 220, 100, { sw: 1.5, stroke: bone, fill: secondary, fillOpacity: 0.4 })}
    ${rect(140, 240, 140, 100, { sw: 1.5, stroke: bone, fill: secondary, fillOpacity: 0.3 })}
    ${rect(300, 240, 280, 100, { sw: 1.5, stroke: bone, fill: secondary, fillOpacity: 0.3 })}
    ${rect(140, 360, 440, 80, { sw: 1.5, stroke: bone, fill: secondary, fillOpacity: 0.5 })}
    ${[
      [240,170,'GUARD'],
      [470,170,'KITCHEN'],
      [210,290,'CELL'],
      [440,290,'WORK FLOOR'],
      [360,400,'AUDIT HALL'],
    ].map(([x,y,t])=>txt(x, y, t, { anchor:'middle', size: 9, fill: bone, ls: 1.5, weight:'bold' })).join('')}
    ${[[240,170],[470,170],[210,290],[440,290],[360,400]].map(([x,y])=>stamp(x, y+18, 12, '✓', { color: bone, fillOpacity: 0, size: 11 })).join('')}
    ${rect(140, 480, 440, 60, { sw: 1.5, fill: bone })}
    ${txt(360, 502, 'ALL ROOMS: COMPLIANT', { anchor:'middle', size: 11, weight:'bold', ls: 2.5 })}
    ${txt(360, 524, 'NO INSTANCE OF JOY DETECTED', { anchor:'middle', size: 9, ls: 2, opacity: 0.7, style:'italic' })}
    ${cornerSeal(620, 110, secondary, 'PLAN')}
    ${sceneFooter({ ink, accent, line1: 'OBSIDIAN · WALKED CORRIDOR', line2: 'TILES TO SCALE · LOGGED', code: 'CA-05' })}
  `},
  { title: 'Water Reversal', cue: 'one bucket · structural failure', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'EVENT REPORT — H₂O DISSOLUTION' })}
    ${path('M280,140 L280,180 Q280,200 360,200 Q440,200 440,180 L440,140 Z', { sw: 2, fill: '#1F7A53', fillOpacity: 0.4 })}
    ${path('M280,140 L300,120 L420,120 L440,140', { sw: 2, fill: '#1F7A53', fillOpacity: 0.6 })}
    ${path('M260,120 Q360,90 460,120', { sw: 2 })}
    ${path('M340,200 Q330,250 340,290', { sw: 2.5, stroke: '#1F7A53' })}
    ${path('M380,200 Q390,250 380,290', { sw: 2.5, stroke: '#1F7A53' })}
    ${[[330,300],[380,300],[345,330],[365,330],[380,360]].map(([x,y])=>
      path(`M${x-5},${y} Q${x-2},${y-8} ${x},${y-12} Q${x+2},${y-8} ${x+5},${y} Q${x},${y+5} ${x-5},${y} Z`, { sw: 1, fill: '#1F7A53', fillOpacity: 0.7 })
    ).join('')}
    ${path('M280,400 Q300,420 320,440 Q340,460 360,470', { sw: 2, stroke: secondary, opacity: 0.7 })}
    ${path('M440,400 Q420,420 400,440 Q380,460 360,470', { sw: 2, stroke: secondary, opacity: 0.7 })}
    ${path('M260,460 L460,460 L420,500 L300,500 Z', { sw: 1.5, fill: secondary, fillOpacity: 0.4 })}
    ${path('M280,475 Q360,495 440,475', { sw: 1, opacity: 0.6 })}
    ${path('M310,490 Q360,500 410,490', { sw: 1, opacity: 0.6 })}
    ${rect(120, 540, 480, 50, { sw: 1.5, fill: bone })}
    ${txt(360, 558, 'STRUCTURAL: FAILED', { anchor:'middle', size: 11, weight:'bold', ls: 2.5, fill: secondary })}
    ${txt(360, 580, 'NEVER RECEIPTED · NEVER FILED', { anchor:'middle', size: 9, ls: 2, opacity: 0.7, style:'italic' })}
    ${cornerSeal(620, 130, '#1F7A53', 'H₂O')}
    ${sceneFooter({ ink, accent, line1: 'PUDDLE · NOT IN INVENTORY', line2: 'CASTLE DEED · STILL FILED', code: 'WR-06' })}
  `},
  { title: 'Surveillance Overload', cue: 'every cell records · everything', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'PANOPTIC ARRAY — TOTAL VIEW' })}
    ${Array.from({length:5},(_,r)=>Array.from({length:7},(_,c)=>{
      const x = 120 + c*70;
      const y = 100 + r*80;
      return rect(x, y, 50, 60, { sw: 1, stroke: ink, fill: ink, fillOpacity: 0.85 }) +
             circle(x+25, y+22, 14, { sw: 1, stroke: bone, fill: secondary, fillOpacity: 0.5 }) +
             circle(x+25, y+22, 5, { fill: ink }) +
             rect(x+10, y+44, 30, 8, { sw: 0.5, stroke: bone, fill: 'none' });
    }).join('')).join('')}
    ${rect(140, 480, 440, 90, { sw: 1.5, fill: bone })}
    ${txt(360, 502, 'CHANNELS: 35', { anchor:'middle', size: 12, weight:'bold', ls: 3 })}
    ${txt(360, 524, 'ALL FEEDS · MATRON', { anchor:'middle', size: 10, ls: 2.5, opacity: 0.75 })}
    ${txt(360, 548, '— SHE IS NOT BLINKING —', { anchor:'middle', size: 8, ls: 2, opacity: 0.7, fill: secondary, style:'italic', weight:'bold' })}
    ${cornerSeal(620, 100, secondary, 'EYE')}
    ${cornerSeal(120, 100, secondary, 'OPEN')}
    ${sceneFooter({ ink, accent, line1: 'PRIVACY · EXTINCT IN AISLE', line2: 'NO BLIND ANGLE FILED', code: 'SO-07' })}
  `},
  { title: 'Melt Catastrophe', cue: 'matron undone · still filing', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'TERMINAL EVENT — DISSOLUTION' })}
    ${path('M280,160 Q280,120 360,120 Q440,120 440,160 Q420,200 380,210 Q380,260 410,300 Q420,360 380,400 L340,400 Q300,360 310,300 Q340,260 340,210 Q300,200 280,160 Z', { sw: 2.5, fill: ink, fillOpacity: 0.85 })}
    ${path('M340,300 Q360,320 380,300', { sw: 1, stroke: bone, opacity: 0.6 })}
    ${path('M320,400 Q330,440 340,470 L360,500 L380,470 Q390,440 400,400', { sw: 2, fill: secondary, fillOpacity: 0.5 })}
    ${path('M300,420 Q280,480 290,520', { sw: 2, stroke: secondary })}
    ${path('M420,420 Q440,480 430,520', { sw: 2, stroke: secondary })}
    ${path('M280,470 Q260,510 270,540', { sw: 1.5, stroke: secondary, opacity: 0.7 })}
    ${path('M440,470 Q460,510 450,540', { sw: 1.5, stroke: secondary, opacity: 0.7 })}
    ${[[300,540],[330,545],[360,540],[390,545],[420,540]].map(([x,y])=>
      path(`M${x-5},${y} Q${x-2},${y-8} ${x},${y-12} Q${x+2},${y-8} ${x+5},${y} Q${x},${y+5} ${x-5},${y} Z`, { sw: 0.75, fill: secondary, fillOpacity: 0.7 })
    ).join('')}
    ${path('M460,160 L520,140', { sw: 2, stroke: ink })}
    ${rect(490, 130, 70, 50, { sw: 1, fill: bone })}
    ${txt(525, 150, 'INCIDENT', { anchor:'middle', size: 7, weight:'bold' })}
    ${txt(525, 162, 'REPORT', { anchor:'middle', size: 7, weight:'bold' })}
    ${path('M495,168 L555,168 M495,175 L555,175', { sw: 0.5, opacity: 0.5 })}
    ${rect(120, 540, 480, 50, { sw: 1.5, fill: bone })}
    ${txt(360, 562, 'DISSOLUTION · IN PROGRESS', { anchor:'middle', size: 11, weight:'bold', ls: 2.5, fill: secondary })}
    ${txt(360, 582, '"I AM MELTING"  — STILL FILED', { anchor:'middle', size: 9, ls: 2, opacity: 0.7, style:'italic' })}
    ${cornerSeal(620, 540, secondary, 'MELT')}
    ${sceneFooter({ ink, accent, line1: 'TERMINAL — RECORDED', line2: 'BUREAU CALLS IT EVENT', code: 'MC-08' })}
  `},
];

// ═══════════════════════════════════════════════════════════
// WITCH EAST — IMPACT ORACLE (Ground Impact Assessor)
// ═══════════════════════════════════════════════════════════
const witch_east = [
  { title: 'Pre-Impact Survey', cue: 'house en route · trajectory logged', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'IMPACT FORECAST — DESCENT VECTOR' })}
    ${path('M180,420 L540,420', { sw: 2, stroke: ink })}
    ${[200,260,320,380,440,500].map(x=>line(x, 420, x, 430, { sw: 1, opacity: 0.6 })).join('')}
    ${rect(320, 380, 80, 40, { sw: 2, fill: ink, fillOpacity: 0.85 })}
    ${path('M320,380 L360,340 L400,380', { sw: 2, fill: ink })}
    ${rect(335, 395, 14, 18, { fill: bone, stroke:'none' })}
    ${rect(371, 395, 14, 18, { fill: bone, stroke:'none' })}
    ${path('M120,140 L320,360', { sw: 2.5, stroke: secondary, dash: '6 4' })}
    ${path('M310,355 L325,360 L320,345', { sw: 2.5, stroke: secondary })}
    ${[[150,180,'TRAJ'],[220,250,'VECTOR']].map(([x,y,t])=>txt(x, y, t, { size: 9, weight:'bold', ls: 2, opacity: 0.7 })).join('')}
    ${path('M120,140 L160,160 L140,180 Z', { sw: 2, fill: secondary, fillOpacity: 0.6 })}
    ${[180,240,300,360,420,480].map(x=>line(x, 440, x+8, 460, { sw: 1, opacity: 0.6 })).join('')}
    ${rect(140, 480, 440, 80, { sw: 1.5, fill: bone })}
    ${txt(360, 502, 'IMPACT IMMINENT', { anchor:'middle', size: 12, weight:'bold', ls: 3, fill: secondary })}
    ${txt(360, 524, 'CASUALTY · 1 (FORECAST)', { anchor:'middle', size: 9, ls: 2, opacity: 0.7 })}
    ${txt(360, 546, 'INTENT · INCIDENTAL', { anchor:'middle', size: 8, ls: 2, opacity: 0.6, style:'italic' })}
    ${cornerSeal(620, 110, secondary, 'FORE')}
    ${sceneFooter({ ink, accent, line1: 'DEPARTED · KANSAS', line2: 'EXPECTED · MUNCHKIN COUNTRY', code: 'PIS-01' })}
  `},
  { title: 'Compression Sigil', cue: 'mass × velocity = bureau form', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'COMPRESSION SIGIL — KE EQUATION' })}
    ${circle(360, 280, 140, { sw: 2 })}
    ${[0,1,2,3,4,5,6,7].map(i=>{
      const a = i*Math.PI/4;
      return path(`M${360+Math.cos(a)*140},${280+Math.sin(a)*140} L${360+Math.cos(a)*40},${280+Math.sin(a)*40}`, { sw: 1.5, stroke: secondary, opacity: 0.7 });
    }).join('')}
    ${path('M260,200 L360,140 L460,200', { sw: 2.5, fill: ink, fillOpacity: 0.85 })}
    ${rect(280, 290, 160, 110, { sw: 2, fill: bone })}
    ${rect(280, 290, 160, 22, { fill: ink, stroke:'none' })}
    ${txt(360, 307, 'KE = ½mv²', { anchor:'middle', size: 10, fill: bone, ls: 2, weight:'bold' })}
    ${txt(295, 332, 'MASS:', { size: 9, ls: 1.5 })}
    ${txt(425, 332, '4,200 KG', { size: 9, ls: 1.5, anchor:'end' })}
    ${txt(295, 352, 'VELOCITY:', { size: 9, ls: 1.5 })}
    ${txt(425, 352, '12.4 M/S', { size: 9, ls: 1.5, anchor:'end' })}
    ${line(295, 360, 425, 360, { sw: 0.5, opacity: 0.5 })}
    ${txt(295, 380, 'KE TOTAL:', { size: 9, ls: 1.5, weight:'bold' })}
    ${txt(425, 380, '323 kJ', { size: 9, ls: 1.5, anchor:'end', weight:'bold', fill: secondary })}
    ${rect(140, 460, 440, 90, { sw: 1.5, fill: bone })}
    ${txt(360, 482, 'SIGIL: SEALED', { anchor:'middle', size: 11, weight:'bold', ls: 2.5 })}
    ${txt(360, 504, 'BUREAU FORM E-9 · COMPLETE', { anchor:'middle', size: 9, ls: 2, opacity: 0.7 })}
    ${txt(360, 526, 'OUTCOME · PRE-DECIDED', { anchor:'middle', size: 8, ls: 2, opacity: 0.6, style:'italic' })}
    ${cornerSeal(620, 110, accent, 'CALC')}
    ${sceneFooter({ ink, accent, line1: 'VARIABLES ENTERED · LOCKED', line2: 'EQUATION CLOSED · STAMPED', code: 'CS-02' })}
  `},
  { title: 'Boot Extraction', cue: 'silver shoes · removed', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'EXTRACTION — SILVER SHOES (PAIR)' })}
    ${rect(120, 100, 200, 200, { sw: 2, fill: bone })}
    ${rect(120, 100, 200, 22, { fill: ink, stroke:'none' })}
    ${txt(220, 117, 'EVIDENCE', { anchor:'middle', size: 10, fill: bone, ls: 3, weight:'bold' })}
    ${path('M150,220 Q170,170 200,180 Q260,190 290,200 L290,250 Q260,270 200,260 Q170,260 150,250 Z', { sw: 2, fill: '#B7BDC7', fillOpacity: 0.5 })}
    ${path('M150,250 Q170,270 200,265 Q260,260 290,250', { sw: 1, opacity: 0.6 })}
    ${rect(400, 100, 200, 200, { sw: 2, fill: bone })}
    ${rect(400, 100, 200, 22, { fill: ink, stroke:'none' })}
    ${txt(500, 117, 'EVIDENCE', { anchor:'middle', size: 10, fill: bone, ls: 3, weight:'bold' })}
    ${path('M430,220 Q450,170 480,180 Q540,190 570,200 L570,250 Q540,270 480,260 Q450,260 430,250 Z', { sw: 2, fill: '#B7BDC7', fillOpacity: 0.5 })}
    ${path('M430,250 Q450,270 480,265 Q540,260 570,250', { sw: 1, opacity: 0.6 })}
    ${path('M280,360 L300,330 L320,360 L380,360 L420,330 L440,360 L380,400 L320,400 Z', { sw: 1.5, opacity: 0.5, dash:'3 2' })}
    ${path('M280,360 L260,420 L320,400 M440,360 L460,420 L400,400', { sw: 1, opacity: 0.4 })}
    ${rect(140, 460, 440, 90, { sw: 1.5, fill: bone })}
    ${txt(360, 482, 'PROPERTY: TRANSFERRED', { anchor:'middle', size: 11, weight:'bold', ls: 2.5 })}
    ${txt(360, 504, 'HANDED TO UNIT 04 (DOROTHY)', { anchor:'middle', size: 9, ls: 2, opacity: 0.7 })}
    ${txt(360, 526, 'PER GLINDA · NORTH BUREAU', { anchor:'middle', size: 8, ls: 2, opacity: 0.6, style:'italic' })}
    ${cornerSeal(620, 110, accent, 'EVID')}
    ${cornerSeal(120, 540, secondary, 'XFER')}
    ${sceneFooter({ ink, accent, line1: 'TWO SHOES · FROM UNDER HOUSE', line2: 'CHAIN OF CUSTODY · RECORDED', code: 'BE-03' })}
  `},
  { title: 'Reading the Crater', cue: 'shape · perfectly hat', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'CRATER GEOMETRY — HAT IMPRESSION' })}
    ${path('M120,300 L600,300', { sw: 2 })}
    ${path('M180,300 Q220,280 260,300 L260,380 Q220,420 180,400 Z', { sw: 1, dash: '4 3', opacity: 0.6 })}
    ${path('M180,400 L120,420 L600,420 L540,400', { sw: 0.5, opacity: 0.4 })}
    ${path('M260,300 Q360,200 460,300 L460,400 Q360,420 260,400 Z', { sw: 2.5, fill: ink, fillOpacity: 0.85 })}
    ${path('M280,310 Q360,220 440,310', { sw: 1, stroke: bone, opacity: 0.5 })}
    ${path('M460,300 L500,290 Q540,300 540,310 L540,380 Q500,400 460,390 Z', { sw: 1, dash: '4 3', opacity: 0.6 })}
    ${path('M280,200 L300,180 L320,200', { sw: 1.5 })}
    ${path('M400,200 L420,180 L440,200', { sw: 1.5 })}
    ${path('M340,180 L360,160 L380,180', { sw: 1.5 })}
    ${[200,250,310,360,420,480,530].map(x=>line(x, 300, x-3, 296, { sw: 1, opacity: 0.6 })).join('')}
    ${rect(140, 460, 440, 90, { sw: 1.5, fill: bone })}
    ${txt(360, 482, 'IMPRESSION: HAT-SHAPED', { anchor:'middle', size: 11, weight:'bold', ls: 2.5 })}
    ${txt(360, 504, 'WIDTH 200 CM · DEPTH 80 CM', { anchor:'middle', size: 9, ls: 2, opacity: 0.7 })}
    ${txt(360, 526, 'OWNER PRESUMED · UNDERNEATH', { anchor:'middle', size: 8, ls: 2, opacity: 0.6, style:'italic' })}
    ${cornerSeal(620, 110, accent, 'READ')}
    ${sceneFooter({ ink, accent, line1: 'GEOMETRY · UNAMBIGUOUS', line2: 'CRATER CATALOGUED', code: 'RC-04' })}
  `},
  { title: 'Munchkin Compliance', cue: 'population · cooperative', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'CONSULTATION — LEAD MUNCHKIN' })}
    ${rect(80, 200, 70, 180, { sw: 2, fill: '#1F7A53', fillOpacity: 0.4 })}
    ${rect(80, 200, 70, 30, { fill: ink, stroke:'none' })}
    ${circle(115, 215, 10, { fill: bone, stroke:'none' })}
    ${rect(180, 220, 70, 160, { sw: 2, fill: '#1F7A53', fillOpacity: 0.4 })}
    ${rect(180, 220, 70, 30, { fill: ink, stroke:'none' })}
    ${circle(215, 235, 10, { fill: bone, stroke:'none' })}
    ${rect(280, 240, 70, 140, { sw: 2, fill: '#1F7A53', fillOpacity: 0.4 })}
    ${rect(280, 240, 70, 30, { fill: ink, stroke:'none' })}
    ${circle(315, 255, 10, { fill: bone, stroke:'none' })}
    ${rect(420, 180, 100, 200, { sw: 2.5, fill: ink, fillOpacity: 0.85 })}
    ${rect(420, 180, 100, 32, { fill: secondary, stroke:'none' })}
    ${circle(470, 198, 12, { fill: bone, stroke:'none' })}
    ${txt(470, 240, 'ASSESSOR', { anchor:'middle', size: 9, fill: bone, weight:'bold', ls: 2 })}
    ${path('M540,260 L600,260 L600,300 L540,300', { sw: 1.5, dash: '3 3' })}
    ${rect(560, 270, 30, 20, { sw: 1, fill: bone })}
    ${txt(575, 285, 'RPT', { anchor:'middle', size: 7, weight:'bold' })}
    ${path('M150,400 Q360,420 600,400', { sw: 0.75, dash: '3 3', opacity: 0.6 })}
    ${rect(140, 460, 440, 90, { sw: 1.5, fill: bone })}
    ${txt(360, 482, 'CONSENT: REGISTERED', { anchor:'middle', size: 11, weight:'bold', ls: 2.5 })}
    ${txt(360, 504, 'POPULATION COOPERATIVE', { anchor:'middle', size: 9, ls: 2, opacity: 0.7 })}
    ${txt(360, 526, 'BLUE COATS · LARGE THANK-YOUS', { anchor:'middle', size: 8, ls: 2, opacity: 0.6, style:'italic' })}
    ${cornerSeal(620, 110, '#1F7A53', 'OK')}
    ${sceneFooter({ ink, accent, line1: 'AFTERMATH · UNREMARKABLE', line2: 'AUDIT FILED · NORTH BUREAU', code: 'MC-05' })}
  `},
  { title: 'Reverberation', cue: 'tremor under munchkin country', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'POST-IMPACT WAVE — SEISMIC' })}
    ${[60,100,140,180,220,260].map((r,i)=>circle(360, 280, r, { sw: 1+(6-i)*0.3, opacity: 0.7-i*0.1, stroke: secondary, dash: i>2?'3 3':null })).join('')}
    ${path('M360,140 L355,170 L365,170 Z', { fill: secondary, sw: 1.5 })}
    ${path('M360,420 L355,400 L365,400 Z', { fill: secondary, sw: 1.5 })}
    ${path('M220,280 L240,275 L240,285 Z', { fill: secondary, sw: 1.5 })}
    ${path('M500,280 L480,275 L480,285 Z', { fill: secondary, sw: 1.5 })}
    ${path('M120,90 L150,110 M150,90 L120,110 M120,470 L150,450 M150,470 L120,450 M570,90 L600,110 M600,90 L570,110 M570,470 L600,450 M600,470 L570,450', { sw: 1.5, opacity: 0.7 })}
    ${rect(140, 460, 440, 90, { sw: 1.5, fill: bone })}
    ${txt(360, 482, 'SECONDARY: DETECTED', { anchor:'middle', size: 11, weight:'bold', ls: 2.5, fill: secondary })}
    ${txt(360, 504, 'CONFIRMS · ORIGINAL READING', { anchor:'middle', size: 9, ls: 2, opacity: 0.7 })}
    ${txt(360, 526, 'WAVES PROPAGATE · BUREAU NOTES', { anchor:'middle', size: 8, ls: 2, opacity: 0.6, style:'italic' })}
    ${cornerSeal(620, 110, secondary, 'WAVE')}
    ${sceneFooter({ ink, accent, line1: 'CONCENTRIC · INTENSIFYING', line2: 'NEXT IMPACT · IMMINENT', code: 'RV-06' })}
  `},
  { title: 'Crush Aggregate', cue: 'scale exceeds singular', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'AGGREGATE CRUSH MAP — REGION' })}
    ${rect(120, 100, 480, 360, { sw: 1.5 })}
    ${Array.from({length:7},(_,r)=>Array.from({length:9},(_,c)=>{
      const x = 130 + c*54;
      const y = 110 + r*50;
      const crushed = (r+c)%3===0;
      return polygon(`${x},${y+30} ${x+15},${y} ${x+30},${y+30}`, { sw: 1, fill: crushed?secondary:'none', fillOpacity: crushed?0.5:0, stroke: ink });
    }).join('')).join('')}
    ${[180,300,420,520].map(x=>{
      const y = 100 + 30 + ((x*0.5)|0)%200;
      return circle(x, y, 16, { sw: 2, fill: ink, fillOpacity: 0.85 }) +
             path(`M${x-12},${y+12} L${x+12},${y-12} M${x-12},${y-12} L${x+12},${y+12}`, { sw: 1.5, stroke: bone });
    }).join('')}
    ${rect(140, 480, 440, 80, { sw: 1.5, fill: bone })}
    ${txt(360, 502, 'CRUSH COUNT: 27', { anchor:'middle', size: 11, weight:'bold', ls: 3 })}
    ${txt(360, 524, 'AGGREGATE EXCEEDS SINGULAR', { anchor:'middle', size: 9, ls: 2, opacity: 0.7 })}
    ${txt(360, 546, 'EAST · NO LONGER A WITCH', { anchor:'middle', size: 8, ls: 2, opacity: 0.6, style:'italic', fill: secondary })}
    ${cornerSeal(620, 110, secondary, 'AGG')}
    ${sceneFooter({ ink, accent, line1: 'GRID OVERLAID · MAPPED', line2: 'EVERY HAT-SHAPED HOLLOW', code: 'CA-07' })}
  `},
  { title: 'Final Footnote', cue: 'absorbed into ground footnote', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'FOOTNOTE — UNIT EAST · CLOSED' })}
    ${rect(80, 100, 560, 280, { sw: 2.5, fill: bone })}
    ${rect(80, 100, 560, 26, { fill: ink, stroke:'none' })}
    ${txt(360, 119, 'GREAT BOOK · PAGE 1', { anchor:'middle', size: 11, fill: bone, ls: 3, weight:'bold' })}
    ${Array.from({length:8},(_,i)=>{
      const y = 150 + i*22;
      return line(100, y, 620, y, { sw: 0.4, opacity: 0.4 }) +
             txt(110, y-2, '——————————————————————————————————————————', { size: 9, opacity: 0.6, ls: 0.5 });
    }).join('')}
    ${line(100, 360, 620, 360, { sw: 1.5 })}
    ${txt(110, 380, '¹ See also: WITCH OF THE EAST. Unit ceased', { size: 11, weight:'bold', ls: 1.5 })}
    ${txt(110, 398, '  04/12/PRE-OZ. Death by descending residential', { size: 11, ls: 1.5 })}
    ${txt(110, 416, '  structure. No marker. Property transferred', { size: 11, ls: 1.5 })}
    ${txt(110, 434, '  to bearer (silver shoes, q.v.). Case closed.', { size: 11, ls: 1.5 })}
    ${txt(110, 452, '  Tradition has erased the original ground.', { size: 11, ls: 1.5, fill: secondary, weight:'bold' })}
    ${cornerSeal(580, 130, secondary, 'CLOSED')}
    ${cornerSeal(610, 460, accent, '¹')}
    ${sceneFooter({ ink, accent, line1: 'ENTRY DEMOTED · TO FOOTNOTE', line2: 'NO HEADSTONE · NO PROCESSION', code: 'FF-08' })}
  `},
];

// ═══════════════════════════════════════════════════════════
// WIZARD — PROJECTION ORACLE (Humbug Surgeon)
// ═══════════════════════════════════════════════════════════
const wizard = [
  { title: 'The Projection Curtain', cue: 'image > apparatus', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'STAGE APPARATUS — CURTAIN MASK' })}
    ${[80,140,200,260,320,380,440,500,560,620].map(x=>path(`M${x},80 Q${x+8},250 ${x},420`, { sw: 1.5, stroke: ink })).join('')}
    ${[110,170,230,290,350,410,470,530,590].map(x=>path(`M${x},80 Q${x-6},250 ${x},420`, { sw: 0.75, opacity: 0.6 })).join('')}
    ${rect(120, 100, 480, 320, { sw: 0.75, dash: '4 3', opacity: 0.5 })}
    ${path('M260,180 Q360,140 460,180 Q480,260 460,320 Q360,360 260,320 Q240,260 260,180 Z', { sw: 2.5, fill: accent, fillOpacity: 0.4 })}
    ${circle(310, 240, 6, { fill: ink })}
    ${circle(410, 240, 6, { fill: ink })}
    ${path('M290,290 Q360,330 430,290', { sw: 2 })}
    ${path('M260,180 L240,140 M460,180 L480,140', { sw: 2 })}
    ${rect(280, 360, 160, 60, { sw: 1.5, fill: ink })}
    ${txt(360, 385, 'I AM OZ', { anchor:'middle', size: 14, fill: bone, ls: 4, weight:'bold' })}
    ${txt(360, 405, 'GREAT AND TERRIBLE', { anchor:'middle', size: 9, fill: bone, ls: 3 })}
    ${path('M140,80 L580,80', { sw: 4, stroke: ink })}
    ${rect(150, 70, 20, 16, { fill: accent, fillOpacity: 0.7 })}
    ${rect(550, 70, 20, 16, { fill: accent, fillOpacity: 0.7 })}
    ${rect(140, 460, 440, 80, { sw: 1.5, fill: bone })}
    ${txt(360, 482, 'PROJECTION: ACTIVE', { anchor:'middle', size: 11, weight:'bold', ls: 2.5 })}
    ${txt(360, 504, 'SOURCE · UNDISCLOSED', { anchor:'middle', size: 9, ls: 2, opacity: 0.7 })}
    ${txt(360, 526, '— DO NOT LOOK BEHIND THE CURTAIN —', { anchor:'middle', size: 8, ls: 2, opacity: 0.65, style:'italic', fill: secondary })}
    ${cornerSeal(620, 110, accent, 'OZ')}
    ${sceneFooter({ ink, accent, line1: 'AUDIENCE · UNIT', line2: 'BELIEF · MANUFACTURED', code: 'PC-01' })}
  `},
  { title: 'Lever Map', cue: 'small motion · large effect', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'CONTROL DIAGRAM — LEVER ARRAY' })}
    ${rect(120, 140, 480, 280, { sw: 2, fill: bone })}
    ${[180,260,340,420,500,580].map((x,i)=>{
      const r = i*18;
      return rect(x-30, 240, 60, 100, { sw: 1.5, fill: bone }) +
             rect(x-25, 250, 50, 8, { sw: 1, fill: accent, fillOpacity: 0.5 }) +
             `<g transform="rotate(${i*8-20} ${x} ${300})">${rect(x-3, 250, 6, 90, { fill: ink, stroke: 'none' })}${circle(x, 250, 8, { fill: secondary, stroke: ink, sw: 1 })}</g>` +
             txt(x, 360, `L${i+1}`, { anchor:'middle', size: 9, weight:'bold', ls: 2 });
    }).join('')}
    ${[
      ['L1','VOICE'], ['L2','SMOKE'], ['L3','FIRE'],
      ['L4','HEAD'], ['L5','VOLUME'], ['L6','CURTAIN'],
    ].map(([l,e],i)=>{
      const x = 180 + i*80;
      return txt(x, 380, e, { anchor:'middle', size: 7, ls: 1.5, opacity: 0.7 });
    }).join('')}
    ${path('M140,180 L360,160 L580,180', { sw: 1, dash: '3 3', stroke: secondary })}
    ${txt(360, 200, 'OUTPUT BAND', { anchor:'middle', size: 10, weight:'bold', ls: 3, opacity: 0.7 })}
    ${rect(140, 440, 440, 100, { sw: 1.5, fill: bone })}
    ${txt(360, 462, 'CONTROL AUTHORITY: HIDDEN', { anchor:'middle', size: 11, weight:'bold', ls: 2.5 })}
    ${txt(360, 484, 'ALL MOTION — TRACED TO LEVERS', { anchor:'middle', size: 9, ls: 2, opacity: 0.7 })}
    ${txt(360, 506, '· WIZARD INSIDE · BENT FORWARD ·', { anchor:'middle', size: 8, ls: 2, opacity: 0.6, style:'italic' })}
    ${txt(360, 526, 'OPERATOR ID: HUMBUG-01', { anchor:'middle', size: 8, ls: 2, opacity: 0.55 })}
    ${cornerSeal(620, 110, accent, 'CTRL')}
    ${sceneFooter({ ink, accent, line1: 'MECHANICAL ADVANTAGE · 12:1', line2: 'EVERY ROAR · CHEAP', code: 'LM-02' })}
  `},
  { title: 'Smoke Extraction', cue: 'fog from accounting cabinet', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'FOG SOURCE — CABINET ANALYSIS' })}
    ${rect(220, 200, 280, 220, { sw: 2.5, fill: ink, fillOpacity: 0.85 })}
    ${rect(230, 210, 130, 60, { sw: 1, fill: bone })}
    ${rect(370, 210, 130, 60, { sw: 1, fill: bone })}
    ${rect(230, 280, 130, 60, { sw: 1, fill: bone })}
    ${rect(370, 280, 130, 60, { sw: 1, fill: bone })}
    ${rect(230, 350, 270, 60, { sw: 1, fill: bone })}
    ${[295,435,295,435].map((cx,i)=>{
      const cy = i<2 ? 240 : 310;
      return circle(cx, cy, 4, { fill: ink });
    }).join('')}
    ${txt(295, 245, 'FILE 1', { anchor:'middle', size: 8, weight:'bold' })}
    ${txt(435, 245, 'FILE 2', { anchor:'middle', size: 8, weight:'bold' })}
    ${txt(295, 315, 'FILE 3', { anchor:'middle', size: 8, weight:'bold' })}
    ${txt(435, 315, 'FILE 4', { anchor:'middle', size: 8, weight:'bold' })}
    ${txt(360, 386, 'FOG GENERATOR', { anchor:'middle', size: 9, weight:'bold', ls: 2 })}
    ${[260,300,360,420,460].map((x,i)=>
      path(`M${x},200 Q${x-10+i*5},160 ${x+5},120 Q${x-5+i*3},80 ${x+10-i*4},60`, { sw: 1.5, opacity: 0.4+i*0.1, stroke: ink, dash: '4 3' })
    ).join('')}
    ${[180,280,440,540].map(x=>circle(x, 110, 4+Math.random()*4, { fill: '#8E8A83', stroke:'none', opacity: 0.3 })).join('')}
    ${rect(140, 460, 440, 80, { sw: 1.5, fill: bone })}
    ${txt(360, 482, 'SMOKE: ACCOUNTING-DERIVED', { anchor:'middle', size: 11, weight:'bold', ls: 2.5 })}
    ${txt(360, 504, 'PAPER COMBUSTION · CONTROLLED', { anchor:'middle', size: 9, ls: 2, opacity: 0.7 })}
    ${txt(360, 526, 'EFFECT > SOURCE', { anchor:'middle', size: 8, ls: 2, opacity: 0.6, style:'italic' })}
    ${cornerSeal(620, 110, accent, 'FOG')}
    ${sceneFooter({ ink, accent, line1: 'FILES BURNED · GAUGED', line2: 'AUDIT TRAIL: PARTIAL', code: 'SE-03' })}
  `},
  { title: 'Reading the Reading', cue: 'oracle interprets oracle', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'NESTED ORACLE — READS-A-READING' })}
    ${[400,300,200,100].map((s,i)=>rect(360-s/2, 280-s/2, s, s, { sw: 2-i*0.3, fill: i%2 ? accent : bone, fillOpacity: i%2 ? 0.2 : 1 })).join('')}
    ${[
      'ORACLE · LAYER A',
      'ORACLE · LAYER B',
      'ORACLE · LAYER C',
      'ORACLE · LAYER D',
    ].map((t,i)=>txt(360, 100+i*50, t, { anchor:'middle', size: 10-i, ls: 2, weight:'bold', opacity: 0.85-i*0.15 })).join('')}
    ${path('M210,180 L260,180 M460,180 L510,180', { sw: 1, opacity: 0.5 })}
    ${path('M210,380 L260,380 M460,380 L510,380', { sw: 1, opacity: 0.5 })}
    ${[210,260,310,460,510].map(x=>line(x, 280, x+20, 280, { sw: 0.5, opacity: 0.4 })).join('')}
    ${rect(330, 260, 60, 40, { sw: 1.5, fill: ink })}
    ${txt(360, 285, '?', { anchor:'middle', size: 24, fill: bone, weight:'bold' })}
    ${rect(140, 460, 440, 90, { sw: 1.5, fill: bone })}
    ${txt(360, 482, 'INTERPRETATION: ITERATING', { anchor:'middle', size: 11, weight:'bold', ls: 2.5 })}
    ${txt(360, 504, 'EACH ORACLE · INTERPRETS NEXT', { anchor:'middle', size: 9, ls: 2, opacity: 0.7 })}
    ${txt(360, 526, 'NO TERMINAL READING REACHED', { anchor:'middle', size: 8, ls: 2, opacity: 0.6, style:'italic' })}
    ${cornerSeal(620, 110, secondary, 'NEST')}
    ${sceneFooter({ ink, accent, line1: 'PROJECTION OF PROJECTION', line2: 'NEST: 4 LAYERS · COUNTING', code: 'RR-04' })}
  `},
  { title: 'False Crown Issued', cue: 'badge: "BRAINS" · paper', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'CEREMONIAL ISSUANCE — PAPER REGALIA' })}
    ${path('M160,180 L220,140 L300,180 L360,140 L420,180 L500,140 L560,180 L560,260 L160,260 Z', { sw: 2.5, fill: accent, fillOpacity: 0.5 })}
    ${path('M160,180 L160,260 L560,260 L560,180', { sw: 2 })}
    ${[200,280,340,400,440,520].map(x=>circle(x, 165, 4, { fill: ink })).join('')}
    ${txt(360, 220, 'BRAINS', { anchor:'middle', size: 22, weight:'bold', ls: 5 })}
    ${rect(220, 320, 280, 80, { sw: 1.5, fill: bone })}
    ${rect(220, 320, 280, 18, { fill: ink, stroke:'none' })}
    ${txt(360, 334, 'CERTIFICATE', { anchor:'middle', size: 9, fill: bone, ls: 3, weight:'bold' })}
    ${txt(360, 358, 'THIS UNIT IS A DOCTOR', { anchor:'middle', size: 11, weight:'bold', ls: 2 })}
    ${txt(360, 376, 'OF THINKOLOGY', { anchor:'middle', size: 11, ls: 2 })}
    ${txt(360, 392, '— THE WIZARD ESQ. —', { anchor:'middle', size: 8, ls: 2, opacity: 0.7, style:'italic' })}
    ${rect(140, 440, 440, 100, { sw: 1.5, fill: bone })}
    ${txt(360, 462, 'CONTAINS: NO ACTUAL BRAIN', { anchor:'middle', size: 11, weight:'bold', ls: 2.5 })}
    ${txt(360, 484, 'PAPER PINS · CONFIDENCE BAND', { anchor:'middle', size: 9, ls: 2, opacity: 0.7 })}
    ${txt(360, 506, 'COMPLIANCE → SHARPENED', { anchor:'middle', size: 9, ls: 2, opacity: 0.7 })}
    ${txt(360, 528, 'UNIT ACCEPTS · UNIT CONTINUES', { anchor:'middle', size: 8, ls: 2, opacity: 0.6, style:'italic' })}
    ${cornerSeal(120, 130, accent, 'ISSUE')}
    ${cornerSeal(620, 530, secondary, 'PAPR')}
    ${sceneFooter({ ink, accent, line1: 'CROWN: PRESENTED · ACCEPTED', line2: 'BRAIN: NEVER DISTRIBUTED', code: 'FCI-05' })}
  `},
  { title: 'Curtain Pulled', cue: 'small man · big silence', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'EXPOSURE EVENT — CURTAIN OPEN' })}
    ${path('M120,80 L120,500 L300,500 L300,80 Z', { sw: 2.5, fill: accent, fillOpacity: 0.4 })}
    ${[140,170,200,230,260,290].map(x=>line(x, 80, x, 500, { sw: 0.75, opacity: 0.5 })).join('')}
    ${path('M300,80 L600,80 L600,500 L420,500 L420,80', { sw: 2.5, fill: accent, fillOpacity: 0.4 })}
    ${[440,470,500,530,560,590].map(x=>line(x, 80, x, 500, { sw: 0.75, opacity: 0.5 })).join('')}
    ${rect(310, 80, 110, 420, { sw: 1, opacity: 0.5 })}
    ${rect(330, 220, 70, 100, { sw: 2, fill: ink, fillOpacity: 0.85 })}
    ${rect(345, 230, 40, 25, { sw: 1, fill: bone })}
    ${path('M345,255 Q365,265 385,255', { sw: 1, opacity: 0.7 })}
    ${rect(360, 270, 8, 40, { fill: ink })}
    ${rect(345, 320, 40, 30, { sw: 1.5, fill: bone })}
    ${path('M345,335 L385,335 M345,345 L385,345', { sw: 0.5, opacity: 0.5 })}
    ${rect(330, 370, 70, 20, { sw: 1.5, fill: bone })}
    ${[345,360,375,390].map(x=>line(x, 370, x, 390, { sw: 0.75, opacity: 0.6 })).join('')}
    ${path('M340,395 Q360,420 380,395', { sw: 1.5 })}
    ${path('M380,260 L420,250 M420,250 L460,260 L470,290 L460,330 L440,360', { sw: 1.5, opacity: 0.7 })}
    ${rect(420, 230, 60, 30, { sw: 1, fill: bone })}
    ${txt(450, 250, 'MIC', { anchor:'middle', size: 8, weight:'bold' })}
    ${rect(140, 460, 440, 90, { sw: 1.5, fill: bone })}
    ${txt(360, 482, 'OPERATOR · REVEALED', { anchor:'middle', size: 11, weight:'bold', ls: 2.5, fill: secondary })}
    ${txt(360, 504, 'NO MAGIC · NO MAGIC', { anchor:'middle', size: 9, ls: 2, opacity: 0.7 })}
    ${txt(360, 526, '— A LITTLE OLD MAN —', { anchor:'middle', size: 8, ls: 2, opacity: 0.6, style:'italic' })}
    ${cornerSeal(620, 540, secondary, 'OPEN')}
    ${sceneFooter({ ink, accent, line1: 'BUREAU TAKES NO ACTION', line2: 'CURTAIN STILL HUNG · DAILY', code: 'CP-06' })}
  `},
  { title: 'Balloon Default', cue: 'wizard departs · paperwork stays', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'EXIT EVENT — UNAUTHORIZED ASCENT' })}
    ${circle(360, 220, 90, { sw: 2.5, fill: accent, fillOpacity: 0.5 })}
    ${[270,300,330,360,390,420,450].map(x=>path(`M${x},${220-Math.sqrt(8100-(x-360)*(x-360))} Q${x},${220} ${x},${220+Math.sqrt(8100-(x-360)*(x-360))}`, { sw: 0.75, opacity: 0.6 })).join('')}
    ${path('M275,260 L320,400', { sw: 1, opacity: 0.7 })}
    ${path('M325,290 L350,400', { sw: 1, opacity: 0.7 })}
    ${path('M395,290 L370,400', { sw: 1, opacity: 0.7 })}
    ${path('M445,260 L400,400', { sw: 1, opacity: 0.7 })}
    ${rect(310, 400, 100, 60, { sw: 2, fill: ink, fillOpacity: 0.85 })}
    ${[320,340,360,380,400].map(x=>line(x, 400, x, 460, { sw: 0.5, stroke: bone, opacity: 0.5 })).join('')}
    ${path('M340,440 L380,440', { sw: 2, stroke: bone })}
    ${path('M120,460 L150,455 L180,465 L210,460 L240,470 L290,465', { sw: 1.5, opacity: 0.7 })}
    ${path('M430,460 L460,455 L490,465 L520,460 L550,470 L600,465', { sw: 1.5, opacity: 0.7 })}
    ${path('M440,400 Q480,440 460,500', { sw: 1, dash: '3 3', stroke: secondary, opacity: 0.7 })}
    ${path('M460,500 L520,520', { sw: 1, stroke: secondary, opacity: 0.7 })}
    ${rect(500, 510, 80, 50, { sw: 1, fill: bone })}
    ${txt(540, 530, 'FORMS', { anchor:'middle', size: 9, weight:'bold' })}
    ${txt(540, 545, 'LEFT', { anchor:'middle', size: 9 })}
    ${cornerSeal(110, 110, secondary, 'GONE')}
    ${sceneFooter({ ink, accent, line1: 'WIZARD ASCENDS · BY ACCIDENT', line2: 'NO RETURN ADDRESS', code: 'BD-07' })}
  `},
  { title: 'Final Humbug', cue: 'unit promoted to wizard', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'TERMINAL TRANSFER — TITLE OF WIZARD' })}
    ${rect(120, 120, 480, 320, { sw: 2.5, fill: bone })}
    ${rect(120, 120, 480, 32, { fill: ink, stroke:'none' })}
    ${txt(360, 142, 'CERTIFICATE OF SUCCESSION', { anchor:'middle', size: 11, fill: bone, ls: 3, weight:'bold' })}
    ${txt(360, 200, 'THE TITLE OF', { anchor:'middle', size: 12, ls: 3 })}
    ${txt(360, 240, 'WIZARD', { anchor:'middle', size: 36, weight:'bold', ls: 6 })}
    ${txt(360, 270, 'OF OZ (UNCONFIRMED)', { anchor:'middle', size: 10, ls: 3, opacity: 0.7 })}
    ${line(180, 290, 540, 290, { sw: 0.5, opacity: 0.4 })}
    ${txt(360, 320, 'IS HEREBY DELEGATED TO', { anchor:'middle', size: 11, ls: 2 })}
    ${txt(360, 342, '— UNIT [_____________] —', { anchor:'middle', size: 13, weight:'bold', ls: 3, fill: accent })}
    ${txt(360, 362, '(SCARECROW · CURRENTLY ON FILE)', { anchor:'middle', size: 8, ls: 2, opacity: 0.6, style:'italic' })}
    ${line(180, 390, 540, 390, { sw: 0.5, opacity: 0.4 })}
    ${txt(360, 420, 'DUTIES: PERFORM PROJECTION', { anchor:'middle', size: 9, ls: 2 })}
    ${cornerSeal(580, 410, accent, 'OZ')}
    ${cornerSeal(150, 410, accent, 'OK')}
    ${sceneFooter({ ink, accent, line1: 'POSITION FILLED · CONTINUITY', line2: 'NO ONE EVER HOLDS THE POSITION', code: 'FH-08' })}
  `},
];

// ═══════════════════════════════════════════════════════════
// MUNCHKINS — AGRICULTURAL AUDIT (Lead Munchkin)
// ═══════════════════════════════════════════════════════════
const munchkins = [
  { title: 'Welcome Cohort', cue: 'thirty-seven small unit greeting', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'COHORT FORMATION — WELCOME LINE' })}
    ${Array.from({length:9},(_,i)=>{
      const x = 120 + i*60;
      const h = 80 + (i%3)*10;
      return rect(x, 320-h, 30, h, { sw: 1.5, fill: accent, fillOpacity: 0.4 }) +
             circle(x+15, 320-h-12, 12, { sw: 1.5, fill: bone }) +
             circle(x+11, 320-h-13, 1.5, { fill: ink }) +
             circle(x+19, 320-h-13, 1.5, { fill: ink }) +
             path(`M${x+10},${320-h-7} Q${x+15},${320-h-4} ${x+20},${320-h-7}`, { sw: 0.75 });
    }).join('')}
    ${path('M100,330 L660,330', { sw: 2 })}
    ${[140,200,260,320,380,440,500,560,620].map(x=>line(x, 330, x, 340, { sw: 1, opacity: 0.6 })).join('')}
    ${path('M180,200 Q280,170 380,200 Q480,170 580,200', { sw: 1, dash: '4 3', opacity: 0.5 })}
    ${txt(380, 195, 'WELCOME', { anchor:'middle', size: 10, weight:'bold', ls: 3, opacity: 0.8 })}
    ${rect(120, 360, 480, 90, { sw: 1.5, fill: bone })}
    ${txt(360, 385, 'COHORT: 37 UNITS · ASSEMBLED', { anchor:'middle', size: 11, weight:'bold', ls: 2 })}
    ${txt(360, 405, 'GREETING ISSUED · IN UNISON', { anchor:'middle', size: 9, ls: 2, opacity: 0.7 })}
    ${txt(360, 427, 'BLUE COATS · NEW BUTTONS', { anchor:'middle', size: 8, ls: 2, opacity: 0.6, style:'italic' })}
    ${cornerSeal(620, 110, accent, 'WLCM')}
    ${sceneFooter({ ink, accent, line1: 'POPULATION · COMPLIANT', line2: 'LEAD MUNCHKIN AUTHORIZES', code: 'WC-01' })}
  `},
  { title: 'Field Inspection', cue: 'every furrow · audited', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'CROP ROW SURVEY — Q4 INSPECTION' })}
    ${rect(80, 100, 560, 360, { sw: 1.5 })}
    ${Array.from({length:14},(_,i)=>{
      const y = 110 + i*26;
      return path(`M100,${y} Q360,${y+4} 620,${y}`, { sw: 1.5, stroke: '#1F7A53' }) +
             [120,200,280,360,440,520,600].map(x=>circle(x, y-1, 2, { fill: '#1F7A53', stroke: 'none' })).join('');
    }).join('')}
    ${[[180,150,'OK'],[400,200,'OK'],[260,260,'WILT'],[500,300,'OK'],[300,360,'OK'],[480,400,'WILT']].map(([x,y,t])=>
      rect(x-22, y-12, 44, 20, { sw: 1, fill: t==='OK'?accent:secondary, fillOpacity: 0.5 }) +
      txt(x, y+2, t, { anchor:'middle', size: 9, weight:'bold', ls: 1.5 })
    ).join('')}
    ${rect(140, 480, 440, 80, { sw: 1.5, fill: bone })}
    ${txt(360, 502, 'YIELD ESTIMATE: 88.4%', { anchor:'middle', size: 11, weight:'bold', ls: 2.5 })}
    ${txt(360, 524, 'WILT REPORTS: 2 (LOGGED)', { anchor:'middle', size: 9, ls: 2, opacity: 0.7 })}
    ${txt(360, 546, 'STAKES · NEED RECOUNT', { anchor:'middle', size: 8, ls: 2, opacity: 0.6, style:'italic' })}
    ${cornerSeal(620, 110, accent, 'INSP')}
    ${sceneFooter({ ink, accent, line1: 'ROWS WALKED · NORTH→SOUTH', line2: 'EAST·WEST · TOMORROW', code: 'FI-02' })}
  `},
  { title: 'Tax Tithe', cue: 'one third → bureau bins', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'TITHE PROCESSING — Q4' })}
    ${[
      [150,200,'WHEAT'],[280,200,'CORN'],[410,200,'BEET'],[540,200,'HAY'],
    ].map(([x,y,t])=>{
      return path(`M${x-30},${y+80} Q${x-30},${y} ${x},${y-10} Q${x+30},${y} ${x+30},${y+80} Z`, { sw: 1.5, fill: accent, fillOpacity: 0.5 }) +
             rect(x-30, y+50, 60, 30, { fill: secondary, fillOpacity: 0.4 }) +
             txt(x, y+72, t, { anchor:'middle', size: 9, weight:'bold', ls: 1.5 });
    }).join('')}
    ${path('M120,320 L600,320', { sw: 2 })}
    ${[180,310,440,570].map((x,i)=>{
      return path(`M${x},340 L${x},380 L${x-30},420 L${x+30},420 Z`, { sw: 1.5, fill: ink, fillOpacity: 0.85 }) +
             txt(x, 405, '⅓', { anchor:'middle', size: 14, fill: bone, weight:'bold' });
    }).join('')}
    ${[180,310,440,570].map((x,i)=>{
      return path(`M${x},305 L${x-3},315 L${x+3},315 Z`, { sw: 1, fill: ink });
    }).join('')}
    ${rect(140, 460, 440, 90, { sw: 1.5, fill: bone })}
    ${txt(360, 482, 'TITHE · 33.4% EXTRACTED', { anchor:'middle', size: 11, weight:'bold', ls: 2.5 })}
    ${txt(360, 504, 'ROUTED · NORTH BUREAU BINS', { anchor:'middle', size: 9, ls: 2, opacity: 0.7 })}
    ${txt(360, 526, 'BALANCE LEFT · "FAIR SHARE"', { anchor:'middle', size: 8, ls: 2, opacity: 0.6, style:'italic' })}
    ${cornerSeal(620, 110, secondary, 'TAX')}
    ${sceneFooter({ ink, accent, line1: 'BARGE WAITS · DOCK 4', line2: 'WEIGHTS RECORDED · LOG-04', code: 'TT-03' })}
  `},
  { title: 'Reading the Soil', cue: 'pH normal · Bureau · normal', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'SOIL PANEL — STANDARD READOUT' })}
    ${rect(120, 100, 480, 280, { sw: 2, fill: '#5C4033', fillOpacity: 0.3 })}
    ${[120,170,220,260,300,340,380].map(y=>path(`M120,${y} Q360,${y+8} 600,${y}`, { sw: 0.5, opacity: 0.4 })).join('')}
    ${[200,360,520].map((cx,i)=>{
      const labels = ['pH','MOIST','NPK'];
      const vals = ['7.0','42%','OK'];
      return circle(cx, 240, 50, { sw: 2, fill: bone }) +
             circle(cx, 240, 50, { sw: 0.75, dash: '2 3', opacity: 0.5 }) +
             txt(cx, 232, labels[i], { anchor:'middle', size: 9, weight:'bold', ls: 2 }) +
             txt(cx, 254, vals[i], { anchor:'middle', size: 14, weight:'bold' });
    }).join('')}
    ${[[200,310],[360,310],[520,310]].map(([x,y])=>stamp(x, y, 18, 'NORMAL', { color: accent, size: 8, fillOpacity: 0.1, fill: accent })).join('')}
    ${rect(140, 400, 440, 130, { sw: 1.5, fill: bone })}
    ${txt(360, 422, 'ALL VALUES: NORMAL', { anchor:'middle', size: 12, weight:'bold', ls: 3 })}
    ${txt(360, 446, 'NORMAL = "WITHIN BUREAU"', { anchor:'middle', size: 9, ls: 2, opacity: 0.7 })}
    ${txt(360, 468, '(NORMAL DEFINED INTERNALLY)', { anchor:'middle', size: 8, ls: 2, opacity: 0.6, style:'italic' })}
    ${txt(360, 490, 'NEXT INSPECTION: SAME DAY', { anchor:'middle', size: 8, ls: 2, opacity: 0.55 })}
    ${txt(360, 512, 'NEXT READING: SAME', { anchor:'middle', size: 8, ls: 2, opacity: 0.55 })}
    ${cornerSeal(620, 110, accent, 'NORM')}
    ${sceneFooter({ ink, accent, line1: 'CORE · TAKEN · STANDARD', line2: 'LOG ENTRY · APPENDED', code: 'RS-04' })}
  `},
  { title: 'Yellow Brick Permit', cue: 'right of way · paid in advance', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'TRANSIT PERMIT — YELLOW BRICK ROAD' })}
    ${rect(80, 250, 560, 80, { sw: 2, fill: '#D4A72C', fillOpacity: 0.6 })}
    ${Array.from({length:14},(_,i)=>line(80+i*40, 250, 80+i*40, 330, { sw: 1, opacity: 0.5 })).join('')}
    ${[80,160,240,320,400,480,560].map(x=>line(x, 290, x+40, 290, { sw: 1, opacity: 0.4 })).join('')}
    ${rect(180, 130, 360, 100, { sw: 2, fill: bone })}
    ${rect(180, 130, 360, 22, { fill: ink, stroke:'none' })}
    ${txt(360, 147, 'PERMIT YBR-04', { anchor:'middle', size: 10, fill: bone, ls: 3, weight:'bold' })}
    ${txt(200, 175, 'BEARER:', { size: 9, weight:'bold', ls: 2 })}
    ${txt(360, 175, 'UNIT 04 (DOROTHY)', { size: 9, ls: 2 })}
    ${txt(200, 195, 'COVERAGE:', { size: 9, weight:'bold', ls: 2 })}
    ${txt(360, 195, 'RIGHT OF WAY · ROAD', { size: 9, ls: 2 })}
    ${txt(200, 215, 'FEE:', { size: 9, weight:'bold', ls: 2 })}
    ${txt(360, 215, 'PAID (TITHE Q4)', { size: 9, ls: 2 })}
    ${path('M120,360 L600,400', { sw: 1, dash: '4 3', opacity: 0.5 })}
    ${rect(140, 460, 440, 80, { sw: 1.5, fill: bone })}
    ${txt(360, 482, 'TRANSIT: AUTHORIZED', { anchor:'middle', size: 11, weight:'bold', ls: 2.5 })}
    ${txt(360, 504, 'BRICKS · INVENTORIED', { anchor:'middle', size: 9, ls: 2, opacity: 0.7 })}
    ${txt(360, 526, 'STEP COUNT WILL BE LOGGED', { anchor:'middle', size: 8, ls: 2, opacity: 0.6, style:'italic' })}
    ${cornerSeal(620, 110, accent, 'PASS')}
    ${sceneFooter({ ink, accent, line1: 'ROAD MAINTAINED · BY TITHE', line2: 'EXIT BUREAU · NORTH', code: 'YBP-05' })}
  `},
  { title: 'Mass Reluctance', cue: 'cohort · suddenly silent', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'PROTOCOL DEVIATION — SILENCE EVENT' })}
    ${Array.from({length:9},(_,i)=>{
      const x = 120 + i*60;
      const h = 80 + (i%3)*10;
      return rect(x, 320-h, 30, h, { sw: 1.5, fill: accent, fillOpacity: 0.3 }) +
             circle(x+15, 320-h-12, 12, { sw: 1.5, fill: bone }) +
             circle(x+11, 320-h-13, 1.5, { fill: ink }) +
             circle(x+19, 320-h-13, 1.5, { fill: ink }) +
             path(`M${x+10},${320-h-5} L${x+20},${320-h-5}`, { sw: 1.5, stroke: secondary });
    }).join('')}
    ${path('M100,330 L660,330', { sw: 2 })}
    ${[160,260,360,460,560].map(x=>txt(x, 380, '— ', { anchor:'middle', size: 18, weight:'bold', ls: 4, fill: secondary })).join('')}
    ${path('M180,210 Q280,200 380,210 Q480,200 580,210', { sw: 1, opacity: 0.4, dash:'3 3' })}
    ${txt(380, 200, '— UNANNOUNCED SILENCE —', { anchor:'middle', size: 10, weight:'bold', ls: 3, fill: secondary, style:'italic' })}
    ${rect(140, 410, 440, 130, { sw: 1.5, fill: bone })}
    ${txt(360, 432, 'SILENCE DURATION: 4.2s', { anchor:'middle', size: 11, weight:'bold', ls: 2.5, fill: secondary })}
    ${txt(360, 454, 'NO PROTOCOL FOR THIS', { anchor:'middle', size: 9, ls: 2, opacity: 0.7 })}
    ${txt(360, 476, 'LEAD MUNCHKIN · UNRESPONSIVE', { anchor:'middle', size: 9, ls: 2, opacity: 0.7 })}
    ${txt(360, 498, 'COHORT · RECONVENES NORMAL', { anchor:'middle', size: 9, ls: 2, opacity: 0.7 })}
    ${txt(360, 520, 'BUT THE SILENCE WAS LOGGED', { anchor:'middle', size: 8, ls: 2, opacity: 0.7, style:'italic', weight:'bold' })}
    ${cornerSeal(620, 110, secondary, 'SILEN')}
    ${sceneFooter({ ink, accent, line1: 'EVENT REPORTED · INVESTIGATING', line2: 'NEXT GATHERING · UNCERTAIN', code: 'MR-06' })}
  `},
  { title: 'Crop Failure Cascade', cue: 'rows topple · in formation', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'CASCADE EVENT — CROP COLLAPSE' })}
    ${rect(80, 100, 560, 360, { sw: 1.5 })}
    ${Array.from({length:14},(_,i)=>{
      const y = 110 + i*26;
      const angle = Math.min(70, i*5);
      return `<g transform="rotate(${angle} 360 ${y})">${path(`M120,${y} Q360,${y+4} 600,${y}`, { sw: 1.5, stroke: secondary })}${[180,260,340,420,500].map(x=>circle(x, y-1, 2, { fill: secondary, stroke:'none' })).join('')}</g>`;
    }).join('')}
    ${[[200,180],[400,250],[300,330]].map(([x,y])=>
      polygon(`${x},${y-12} ${x+10},${y+10} ${x-10},${y+10}`, { sw: 1.5, fill: secondary, fillOpacity: 0.7 }) +
      txt(x, y+5, '!', { anchor:'middle', size: 14, fill: bone, weight:'bold' })
    ).join('')}
    ${rect(140, 480, 440, 80, { sw: 1.5, fill: bone })}
    ${txt(360, 502, 'YIELD ESTIMATE: 21%', { anchor:'middle', size: 12, weight:'bold', ls: 3, fill: secondary })}
    ${txt(360, 524, 'CASCADE EVENT · LOGGED', { anchor:'middle', size: 9, ls: 2, opacity: 0.7 })}
    ${txt(360, 546, 'TITHE EXPECTATION · UNCHANGED', { anchor:'middle', size: 8, ls: 2, opacity: 0.6, style:'italic' })}
    ${cornerSeal(620, 110, secondary, 'FAIL')}
    ${sceneFooter({ ink, accent, line1: 'AUDIT WALK INTERRUPTED', line2: 'NEW REPORT FILED · SAME WORDS', code: 'CFC-07' })}
  `},
  { title: 'Final Harvest', cue: 'cohort archived · whole', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'TERMINAL HARVEST — COHORT ARCHIVE' })}
    ${rect(120, 130, 480, 240, { sw: 2.5, fill: ink, fillOpacity: 0.85 })}
    ${Array.from({length:8},(_,i)=>{
      const x = 150 + i*55;
      return rect(x, 160, 40, 200, { sw: 1, stroke: bone, fill: bone, fillOpacity: 0.1 }) +
             rect(x+8, 175, 24, 18, { fill: bone, fillOpacity: 0.5 }) +
             rect(x+8, 200, 24, 18, { fill: bone, fillOpacity: 0.5 }) +
             rect(x+8, 225, 24, 18, { fill: bone, fillOpacity: 0.5 }) +
             rect(x+8, 250, 24, 18, { fill: bone, fillOpacity: 0.5 }) +
             rect(x+8, 275, 24, 18, { fill: bone, fillOpacity: 0.5 }) +
             rect(x+8, 300, 24, 18, { fill: bone, fillOpacity: 0.5 }) +
             rect(x+8, 325, 24, 18, { fill: bone, fillOpacity: 0.5 }) +
             txt(x+20, 153, `R${i+1}`, { anchor:'middle', size: 7, fill: bone, weight:'bold' });
    }).join('')}
    ${txt(360, 122, 'COHORT ARCHIVE · NORTH STORAGE', { anchor:'middle', size: 11, weight:'bold', ls: 3 })}
    ${rect(140, 400, 440, 140, { sw: 1.5, fill: bone })}
    ${txt(360, 422, 'ARCHIVED: 56 UNITS', { anchor:'middle', size: 12, weight:'bold', ls: 3 })}
    ${txt(360, 446, 'CATALOGUED · WITH BUTTONS', { anchor:'middle', size: 9, ls: 2, opacity: 0.7 })}
    ${txt(360, 468, 'BLUE COATS PRESERVED', { anchor:'middle', size: 9, ls: 2, opacity: 0.7 })}
    ${txt(360, 490, 'FILED UNDER "AGRICULTURAL"', { anchor:'middle', size: 9, ls: 2, opacity: 0.7 })}
    ${txt(360, 514, 'NEW COHORT · BEING TRAINED', { anchor:'middle', size: 8, ls: 2, opacity: 0.6, style:'italic' })}
    ${cornerSeal(620, 110, accent, 'ARCH')}
    ${sceneFooter({ ink, accent, line1: 'NORTH STORAGE · DRAWERS 1–8', line2: 'CATALOG MAINTAINED · FOREVER', code: 'FH-08' })}
  `},
];

// ═══════════════════════════════════════════════════════════
// WINGED MONKEYS — KINETIC HARVEST (Wing Captain)
// ═══════════════════════════════════════════════════════════
const winged_monkeys = [
  { title: 'Three Wishes Cap', cue: 'cap rotates · monkey rises', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'GOLDEN CAP — DEPLOYMENT TRIGGER' })}
    ${path('M180,180 Q360,120 540,180 L540,240 L180,240 Z', { sw: 2.5, fill: '#D4A72C', fillOpacity: 0.7 })}
    ${path('M180,240 L160,280 L560,280 L540,240', { sw: 2.5, fill: '#D4A72C', fillOpacity: 0.5 })}
    ${[230,300,360,420,490].map(x=>line(x, 180, x, 240, { sw: 0.75, opacity: 0.5 })).join('')}
    ${[[200,310,'I'],[300,310,'II'],[400,310,'III']].map(([x,y,t])=>
      circle(x, y, 14, { sw: 1.5, fill: '#D4A72C', fillOpacity: 0.5 }) +
      txt(x, y+4, t, { anchor:'middle', size: 10, weight:'bold' })
    ).join('')}
    ${path('M450,290 Q510,280 560,300', { sw: 2, dash: '4 3', stroke: secondary })}
    ${path('M540,290 L560,300 L555,285 Z', { sw: 1, fill: secondary })}
    ${path('M520,360 Q540,330 580,330 Q620,330 600,360 Q610,400 580,400 Q540,400 520,360 Z', { sw: 1.5, fill: ink, fillOpacity: 0.85 })}
    ${path('M500,330 Q510,300 540,290', { sw: 2, fill: '#B7BDC7', fillOpacity: 0.7 })}
    ${path('M620,330 Q610,300 580,290', { sw: 2, fill: '#B7BDC7', fillOpacity: 0.7 })}
    ${path('M530,400 L535,440 L545,440', { sw: 1.5 })}
    ${path('M580,400 L585,440 L595,440', { sw: 1.5 })}
    ${rect(140, 460, 440, 90, { sw: 1.5, fill: bone })}
    ${txt(360, 482, 'CAP ROTATIONS: 3', { anchor:'middle', size: 11, weight:'bold', ls: 2.5 })}
    ${txt(360, 504, 'CALL DEPLOYED · WING UP', { anchor:'middle', size: 9, ls: 2, opacity: 0.7 })}
    ${txt(360, 526, '— MUST OBEY · ALWAYS —', { anchor:'middle', size: 8, ls: 2, opacity: 0.7, style:'italic', fill: secondary })}
    ${cornerSeal(620, 110, accent, 'CAP')}
    ${sceneFooter({ ink, accent, line1: 'BEARER ISSUES · ORDER', line2: 'COMPLIANCE · NON-NEGOTIABLE', code: 'TWC-01' })}
  `},
  { title: 'Talon Strike', cue: 'precision · institutional', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'STRIKE GEOMETRY — TALON DESCENT' })}
    ${path('M120,120 Q300,100 360,140 Q420,100 600,120 Q540,180 460,160 Q400,200 360,180 Q320,200 260,160 Q180,180 120,120 Z', { sw: 2, fill: ink, fillOpacity: 0.7 })}
    ${path('M150,140 L130,200 L150,210 Z', { sw: 1, fill: ink, opacity: 0.6 })}
    ${path('M570,140 L590,200 L570,210 Z', { sw: 1, fill: ink, opacity: 0.6 })}
    ${path('M250,260 L240,310 L260,310', { sw: 2 })}
    ${path('M270,290 L260,340 L280,340', { sw: 2 })}
    ${path('M290,300 L280,350 L300,350', { sw: 2 })}
    ${path('M350,310 L340,370 L360,370', { sw: 2.5 })}
    ${path('M370,300 L360,360 L380,360', { sw: 2 })}
    ${path('M390,290 L380,340 L400,340', { sw: 2 })}
    ${path('M450,290 L440,340 L460,340', { sw: 2 })}
    ${path('M470,280 L460,330 L480,330', { sw: 2 })}
    ${[260,300,360,420,470].map(x=>circle(x, 200, 3, { fill: secondary, stroke:'none' })).join('')}
    ${path('M340,420 Q360,440 380,420', { sw: 1.5 })}
    ${path('M340,440 Q360,460 380,440', { sw: 1.5 })}
    ${path('M180,260 Q200,240 220,260 Q240,280 220,300 Q200,320 180,300 Z', { sw: 1, dash:'2 2', opacity: 0.5 })}
    ${path('M500,260 Q520,240 540,260 Q560,280 540,300 Q520,320 500,300 Z', { sw: 1, dash:'2 2', opacity: 0.5 })}
    ${rect(140, 480, 440, 80, { sw: 1.5, fill: bone })}
    ${txt(360, 502, 'TALONS: SIX (DEPLOYED)', { anchor:'middle', size: 11, weight:'bold', ls: 2.5 })}
    ${txt(360, 524, 'TARGETS: PRESELECTED', { anchor:'middle', size: 9, ls: 2, opacity: 0.7 })}
    ${txt(360, 544, 'ZERO CASUALTY VARIANCE', { anchor:'middle', size: 8, ls: 2, opacity: 0.6, style:'italic' })}
    ${cornerSeal(620, 110, secondary, 'KILL')}
    ${sceneFooter({ ink, accent, line1: 'STRIKE: AUDITED · APPROVED', line2: 'CAPTAIN OBSERVES · MARKS', code: 'TS-02' })}
  `},
  { title: 'Carry Order', cue: 'unit lifted · destination filed', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'EXTRACTION FLIGHT — CARRY ORDER' })}
    ${path('M180,140 Q300,100 360,160 Q420,100 540,140 L540,180 L180,180 Z', { sw: 2, fill: '#B7BDC7', fillOpacity: 0.7 })}
    ${path('M340,180 Q330,220 340,260 L380,260 Q390,220 380,180 Z', { sw: 2, fill: ink, fillOpacity: 0.85 })}
    ${path('M340,260 L320,290 L330,290 M380,260 L400,290 L390,290', { sw: 1.5, stroke: ink })}
    ${path('M280,200 L340,240 M380,240 L440,200', { sw: 1.5 })}
    ${rect(280, 320, 160, 100, { sw: 2.5, fill: ink, fillOpacity: 0.85 })}
    ${rect(290, 330, 50, 30, { sw: 1, fill: bone })}
    ${rect(380, 330, 50, 30, { sw: 1, fill: bone })}
    ${path('M340,360 Q360,370 380,360', { sw: 1, opacity: 0.6 })}
    ${rect(290, 380, 140, 30, { sw: 1, fill: bone })}
    ${path('M295,395 L425,395', { sw: 0.5, opacity: 0.4 })}
    ${path('M340,260 L340,320 M380,260 L380,320', { sw: 2.5, stroke: secondary, dash: '3 2' })}
    ${path('M120,440 L160,460 L200,440 L240,460 L280,440 L320,460 L360,440 L400,460 L440,440 L480,460 L520,440 L560,460 L600,440', { sw: 0.5, opacity: 0.5 })}
    ${rect(140, 480, 440, 80, { sw: 1.5, fill: bone })}
    ${txt(360, 502, 'CARGO: UNIT × 1', { anchor:'middle', size: 11, weight:'bold', ls: 2.5 })}
    ${txt(360, 524, 'DESTINATION · WEST CASTLE', { anchor:'middle', size: 9, ls: 2, opacity: 0.7 })}
    ${txt(360, 544, 'ETA · LOGGED · PROVISIONAL', { anchor:'middle', size: 8, ls: 2, opacity: 0.6, style:'italic' })}
    ${cornerSeal(620, 110, secondary, 'LIFT')}
    ${sceneFooter({ ink, accent, line1: 'EXTRACTION ORDER · WC-04', line2: 'BEARER REGISTERED · ACTIVE', code: 'CO-03' })}
  `},
  { title: 'Reading the Wind', cue: 'thermals · ledger entries', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'AERIAL CHART — THERMAL READING' })}
    ${rect(80, 100, 560, 360, { sw: 1.5 })}
    ${Array.from({length:6},(_,i)=>{
      const y = 130 + i*55;
      const dir = i%2 ? 1 : -1;
      return path(`M100,${y} Q360,${y+dir*20} 620,${y}`, { sw: 1.5, stroke: '#B7BDC7' }) +
             [180,300,420,540].map((x,j)=>{
               const ang = dir>0 ? -10 : 10;
               return `<g transform="translate(${x} ${y+(dir>0?-10:10)*Math.sin(j)}) rotate(${ang*dir})">${path('M0,0 L24,0 M18,-4 L24,0 L18,4', { sw: 1.5, stroke: ink })}</g>`;
             }).join('');
    }).join('')}
    ${[[150,180,'T+1'],[280,250,'T-3'],[450,330,'T+5'],[540,180,'T+2']].map(([x,y,t])=>
      circle(x, y, 18, { sw: 1, fill: bone, opacity: 0.9, dash:'2 2' }) +
      txt(x, y+3, t, { anchor:'middle', size: 9, weight:'bold' })
    ).join('')}
    ${rect(140, 480, 440, 80, { sw: 1.5, fill: bone })}
    ${txt(360, 502, 'THERMAL: T+5 (FAVORABLE)', { anchor:'middle', size: 11, weight:'bold', ls: 2.5 })}
    ${txt(360, 524, 'GLIDE PATH · LOGGED', { anchor:'middle', size: 9, ls: 2, opacity: 0.7 })}
    ${txt(360, 544, 'NO TURBULENCE FILED', { anchor:'middle', size: 8, ls: 2, opacity: 0.6, style:'italic' })}
    ${cornerSeal(620, 110, accent, 'WND')}
    ${sceneFooter({ ink, accent, line1: 'WIND CALCULATED · CHARTED', line2: 'EVERY GUST · SIGNED', code: 'RW-04' })}
  `},
  { title: 'Roost Compliance', cue: 'rows of cages · perfect rest', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'BARRACKS · ROOST INSPECTION' })}
    ${rect(120, 110, 480, 360, { sw: 2, fill: ink, fillOpacity: 0.85 })}
    ${Array.from({length:5},(_,r)=>Array.from({length:6},(_,c)=>{
      const x = 140 + c*75;
      const y = 130 + r*68;
      return rect(x, y, 60, 55, { sw: 1, stroke: bone, fill: bone, fillOpacity: 0.1 }) +
             [x+10,x+30,x+50].map(xx=>line(xx, y, xx, y+55, { sw: 0.5, opacity: 0.5, stroke: bone })).join('') +
             path(`M${x+15},${y+30} Q${x+30},${y+25} ${x+45},${y+30} Q${x+30},${y+45} ${x+15},${y+30} Z`, { sw: 0.75, fill: '#B7BDC7', fillOpacity: 0.4, stroke: bone });
    }).join('')).join('')}
    ${rect(140, 480, 440, 80, { sw: 1.5, fill: bone })}
    ${txt(360, 502, 'ROOSTS: 30 / 30 OCCUPIED', { anchor:'middle', size: 11, weight:'bold', ls: 2.5 })}
    ${txt(360, 524, 'ALL UNITS STILL · COMPLIANT', { anchor:'middle', size: 9, ls: 2, opacity: 0.7 })}
    ${txt(360, 544, 'CAPTAIN PATROLS · SILENT', { anchor:'middle', size: 8, ls: 2, opacity: 0.6, style:'italic' })}
    ${cornerSeal(620, 110, accent, 'ROST')}
    ${sceneFooter({ ink, accent, line1: 'NIGHT WATCH · UNDISTURBED', line2: 'SHIFT CHANGE · 0400', code: 'RC-05' })}
  `},
  { title: 'Bridle Failure', cue: 'cap loses three wishes', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'CONTROL FAILURE — CAP DEPLETED' })}
    ${path('M180,180 Q360,120 540,180 L540,240 L180,240 Z', { sw: 2.5, fill: '#D4A72C', fillOpacity: 0.4 })}
    ${path('M180,240 L160,280 L560,280 L540,240', { sw: 2.5, fill: '#D4A72C', fillOpacity: 0.3 })}
    ${[[200,310,'I'],[300,310,'II'],[400,310,'III']].map(([x,y,t])=>
      circle(x, y, 14, { sw: 1.5, fill: secondary, fillOpacity: 0.5 }) +
      path(`M${x-10},${y-10} L${x+10},${y+10} M${x+10},${y-10} L${x-10},${y+10}`, { sw: 2, stroke: ink })
    ).join('')}
    ${path('M460,300 Q500,310 540,330', { sw: 2, stroke: secondary, dash:'4 3' })}
    ${path('M540,330 L535,320 L530,335 Z', { fill: secondary })}
    ${path('M540,360 Q580,340 600,310 Q620,360 580,400 Q540,400 540,360 Z', { sw: 2, fill: ink, fillOpacity: 0.6 })}
    ${path('M580,360 Q600,330 620,300', { sw: 2, stroke: secondary })}
    ${path('M540,400 L530,440 L545,440', { sw: 1.5 })}
    ${path('M590,400 L595,440 L605,440', { sw: 1.5 })}
    ${rect(140, 460, 440, 90, { sw: 1.5, fill: bone })}
    ${txt(360, 482, 'CAP: DEPLETED · 0/3', { anchor:'middle', size: 11, weight:'bold', ls: 2.5, fill: secondary })}
    ${txt(360, 504, 'BRIDLE INTACT · WILL OF MONKEY: FREE', { anchor:'middle', size: 9, ls: 2, opacity: 0.7 })}
    ${txt(360, 526, 'NEW MASTER UNDESIGNATED', { anchor:'middle', size: 8, ls: 2, opacity: 0.6, style:'italic' })}
    ${cornerSeal(620, 110, secondary, 'EMPTY')}
    ${sceneFooter({ ink, accent, line1: 'WISH-COUNT · ZERO', line2: 'CAP IS ARTIFACT NOT WEAPON', code: 'BF-06' })}
  `},
  { title: 'Flock Overload', cue: 'too many wings · sky logged', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'AERIAL CONGESTION — FLOCK COUNT' })}
    ${[[140,140],[180,180],[220,150],[260,190],[300,160],[340,200],[380,170],[420,200],[460,160],[500,190],[540,150],[580,180],[620,160],[160,240],[200,260],[240,250],[280,270],[320,260],[360,280],[400,260],[440,280],[480,260],[520,280],[560,260],[600,280],[120,330],[170,350],[220,330],[270,360],[320,340],[370,370],[420,340],[470,370],[520,340],[570,360]].map(([x,y])=>
      path(`M${x-10},${y} Q${x-5},${y-8} ${x},${y} Q${x+5},${y-8} ${x+10},${y} Q${x+5},${y+5} ${x-5},${y+5} Q${x-10},${y} Z`, { sw: 0.75, fill: '#B7BDC7', fillOpacity: 0.7 })
    ).join('')}
    ${rect(140, 410, 440, 130, { sw: 1.5, fill: bone })}
    ${txt(360, 432, 'COUNT: 35+ (UNCONFIRMED)', { anchor:'middle', size: 11, weight:'bold', ls: 2.5 })}
    ${txt(360, 454, 'AIRSPACE · OVERSUBSCRIBED', { anchor:'middle', size: 9, ls: 2, opacity: 0.7 })}
    ${txt(360, 476, 'COLLISIONS · INEVITABLE', { anchor:'middle', size: 9, ls: 2, opacity: 0.7 })}
    ${txt(360, 498, 'BUREAU FORM A-AIR · ACTIVATED', { anchor:'middle', size: 9, ls: 2, opacity: 0.7 })}
    ${txt(360, 520, 'CAPTAIN HAS LOST AUTHORITY', { anchor:'middle', size: 8, ls: 2, opacity: 0.7, style:'italic', weight:'bold', fill: secondary })}
    ${cornerSeal(620, 110, secondary, 'FLOCK')}
    ${sceneFooter({ ink, accent, line1: 'GROUND OBSERVES · BLOTTED OUT', line2: 'CHARTS PREVIOUSLY: EMPTY', code: 'FO-07' })}
  `},
  { title: 'Free Wing', cue: 'monkey unbinds · escape path', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'BINDING DISSOLVED — FREE FLIGHT' })}
    ${path('M260,180 Q280,150 320,160 Q340,140 380,150 Q420,140 440,160 L440,260 Q420,280 380,290 Q340,290 320,280 Q280,290 260,260 Z', { sw: 2.5, fill: ink, fillOpacity: 0.85 })}
    ${path('M280,200 Q300,210 320,200', { sw: 1, stroke: bone })}
    ${circle(310, 195, 2, { fill: bone })}
    ${circle(370, 195, 2, { fill: bone })}
    ${path('M260,200 Q200,220 140,180 Q160,260 240,260 Z', { sw: 2, fill: '#B7BDC7', fillOpacity: 0.7 })}
    ${path('M440,200 Q500,220 560,180 Q540,260 460,260 Z', { sw: 2, fill: '#B7BDC7', fillOpacity: 0.7 })}
    ${path('M150,200 L210,210 M170,230 L220,235', { sw: 1, opacity: 0.6 })}
    ${path('M510,200 L550,210 M500,230 L530,235', { sw: 1, opacity: 0.6 })}
    ${path('M280,310 L290,360 L300,360 M380,310 L390,360 L380,360', { sw: 1.5 })}
    ${path('M180,140 Q280,80 360,90 Q440,80 540,140', { sw: 1.5, dash: '4 3', stroke: accent })}
    ${path('M540,140 L550,135 L555,150 Z', { fill: accent })}
    ${rect(140, 460, 440, 90, { sw: 1.5, fill: bone })}
    ${txt(360, 482, 'BINDING: BROKEN', { anchor:'middle', size: 12, weight:'bold', ls: 3 })}
    ${txt(360, 504, 'CAP DESTROYED · IN FIRE', { anchor:'middle', size: 9, ls: 2, opacity: 0.7 })}
    ${txt(360, 526, 'FLIGHT NORTH · OWN VOLITION', { anchor:'middle', size: 8, ls: 2, opacity: 0.6, style:'italic' })}
    ${cornerSeal(620, 540, accent, 'FREE')}
    ${sceneFooter({ ink, accent, line1: 'NO BUREAU JURISDICTION', line2: 'ESCAPE · UNAUTHORIZED · FILED', code: 'FW-08' })}
  `},
];

// ═══════════════════════════════════════════════════════════
// KALIDAH — MERGE ORACLE (Merge Coordinator)
// ═══════════════════════════════════════════════════════════
const kalidah = [
  { title: 'Bear-Tiger Approach', cue: 'composite predator detected', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'MERGED FORM — BEAR/TIGER COMPOSITE' })}
    ${path('M180,200 Q200,160 280,160 Q340,160 360,200 L360,300 Q340,340 280,340 Q200,340 180,300 Z', { sw: 2.5, fill: ink, fillOpacity: 0.85 })}
    ${[200,220,240,260,280,300,320,340].map((x,i)=>line(x, 220+(i%2)*8, x+4, 240+(i%2)*8, { sw: 1, stroke: bone })).join('')}
    ${path('M360,200 Q380,160 440,160 Q520,160 540,200 L540,300 Q520,340 440,340 Q380,340 360,300 Z', { sw: 2.5, fill: ink, fillOpacity: 0.85 })}
    ${[380,420,460,500,520].map((x,i)=>line(x, 220, x, 240, { sw: 2, stroke: secondary, opacity: 0.7 })).join('')}
    ${[380,420,460,500,520].map((x,i)=>line(x, 280, x, 300, { sw: 2, stroke: secondary, opacity: 0.7 })).join('')}
    ${circle(240, 220, 4, { fill: bone })}
    ${circle(260, 220, 2.5, { fill: bone })}
    ${circle(440, 220, 4, { fill: bone })}
    ${circle(420, 220, 2.5, { fill: bone })}
    ${path('M260,260 L300,280 L260,290 Z', { sw: 1, fill: bone })}
    ${path('M440,260 L460,280 L440,290 Z', { sw: 1, fill: bone })}
    ${path('M250,295 L260,315 L270,295', { sw: 1.5, stroke: bone })}
    ${path('M280,295 L290,315 L300,295', { sw: 1.5, stroke: bone })}
    ${path('M420,295 L430,315 L440,295', { sw: 1.5, stroke: bone })}
    ${path('M450,295 L460,315 L470,295', { sw: 1.5, stroke: bone })}
    ${path('M180,400 L200,440 L220,440 L210,460', { sw: 2 })}
    ${path('M280,420 L290,470 L300,470', { sw: 2 })}
    ${path('M420,420 L430,470 L420,470', { sw: 2 })}
    ${path('M540,400 L520,440 L500,440 L510,460', { sw: 2 })}
    ${rect(140, 480, 440, 80, { sw: 1.5, fill: bone })}
    ${txt(360, 502, 'COMPOSITE THREAT: KALIDAH', { anchor:'middle', size: 11, weight:'bold', ls: 2.5, fill: secondary })}
    ${txt(360, 524, 'MERGE INTEGRITY: STABLE', { anchor:'middle', size: 9, ls: 2, opacity: 0.7 })}
    ${txt(360, 546, 'EXIT ROUTE: REVISE', { anchor:'middle', size: 8, ls: 2, opacity: 0.6, style:'italic' })}
    ${cornerSeal(620, 110, secondary, 'MERGE')}
    ${sceneFooter({ ink, accent, line1: 'TWO PARTIES · ONE BODY', line2: 'COORDINATOR LOGGING · CALMLY', code: 'BTA-01' })}
  `},
  { title: 'Parasitic Cord', cue: 'feed line · still attached', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'CORD ANATOMY — FEEDER MAP' })}
    ${path('M200,200 Q220,160 280,160 Q340,160 360,200 L360,260 Q340,300 280,300 Q220,300 200,260 Z', { sw: 2, fill: ink, fillOpacity: 0.85 })}
    ${path('M460,140 Q500,140 540,160 L520,200 Q480,180 460,200 Z', { sw: 2.5, fill: secondary, fillOpacity: 0.6 })}
    ${path('M360,260 Q380,300 420,310 Q460,310 480,290 Q520,270 540,240', { sw: 4, stroke: secondary })}
    ${path('M360,260 Q380,300 420,310 Q460,310 480,290 Q520,270 540,240', { sw: 2, stroke: ink, dash:'4 3' })}
    ${[[400,295],[440,310],[480,295],[520,270]].map(([x,y])=>circle(x,y,5,{fill:secondary,stroke:ink,sw:0.75})).join('')}
    ${circle(280, 220, 4, { fill: bone })}
    ${circle(280, 220, 2, { fill: ink })}
    ${path('M250,260 L290,275 L250,285', { sw: 1, fill: bone, opacity: 0.7 })}
    ${path('M180,360 Q220,380 260,360 Q300,380 340,360', { sw: 1.5, opacity: 0.6, dash:'4 3' })}
    ${rect(140, 460, 440, 100, { sw: 1.5, fill: bone })}
    ${txt(360, 482, 'CORD: ACTIVE · BIDIRECTIONAL', { anchor:'middle', size: 11, weight:'bold', ls: 2.5 })}
    ${txt(360, 504, 'ENERGY · NUTRIENT · IDENTITY', { anchor:'middle', size: 9, ls: 2, opacity: 0.7 })}
    ${txt(360, 526, 'ATTACHMENT TIME: UNKNOWN', { anchor:'middle', size: 9, ls: 2, opacity: 0.7 })}
    ${txt(360, 546, 'BOTH PARTIES NOW DEPENDENT', { anchor:'middle', size: 8, ls: 2, opacity: 0.7, style:'italic', weight:'bold' })}
    ${cornerSeal(620, 110, secondary, 'CORD')}
    ${sceneFooter({ ink, accent, line1: 'FEED LINE STRESSED · STABLE', line2: 'EITHER PULL · BOTH FALL', code: 'PC-02' })}
  `},
  { title: 'Skull Fusion Schematic', cue: 'two minds · one cavity', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'CRANIAL FUSION — JOINT CAVITY' })}
    ${path('M200,180 Q200,140 280,140 Q360,140 360,180 Q360,260 280,300 Q200,260 200,180 Z', { sw: 2.5, fill: bone })}
    ${path('M360,180 Q360,140 440,140 Q520,140 520,180 Q520,260 440,300 Q360,260 360,180 Z', { sw: 2.5, fill: bone })}
    ${line(360, 140, 360, 300, { sw: 1.5, dash: '6 3', stroke: secondary })}
    ${circle(260, 200, 8, { fill: ink })}
    ${circle(280, 195, 4, { fill: ink })}
    ${circle(440, 195, 4, { fill: ink })}
    ${circle(460, 200, 8, { fill: ink })}
    ${path('M240,250 L280,265 L240,270', { sw: 1, fill: ink, opacity: 0.7 })}
    ${path('M480,250 L440,265 L480,270', { sw: 1, fill: ink, opacity: 0.7 })}
    ${path('M260,290 L280,310 L260,310 Z', { sw: 1, fill: bone })}
    ${path('M460,290 L440,310 L460,310 Z', { sw: 1, fill: bone })}
    ${rect(180, 360, 360, 100, { sw: 2, fill: bone })}
    ${rect(180, 360, 360, 22, { fill: ink, stroke:'none' })}
    ${txt(360, 377, 'JOINT CAVITY · DIAGRAM', { anchor:'middle', size: 10, fill: bone, ls: 3, weight:'bold' })}
    ${txt(200, 405, 'BEAR-MIND', { size: 10, weight:'bold', ls: 2 })}
    ${txt(520, 405, 'TIGER-MIND', { size: 10, weight:'bold', ls: 2, anchor:'end' })}
    ${path('M280,420 Q360,400 440,420', { sw: 1.5, stroke: secondary })}
    ${txt(360, 405, 'SHARED', { anchor:'middle', size: 9, ls: 2, fill: secondary, weight:'bold' })}
    ${txt(360, 440, 'CONSENSUS REACHED · OFTEN', { anchor:'middle', size: 8, ls: 2, opacity: 0.7, style:'italic' })}
    ${cornerSeal(620, 110, secondary, 'JOIN')}
    ${sceneFooter({ ink, accent, line1: 'NEUROCONJUGATE · STABLE', line2: 'DECISION-CYCLE · 4ms', code: 'SF-03' })}
  `},
  { title: 'Reading the Fang', cue: 'tooth · prophetic', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'EXTRACTED FANG — DIVINATION' })}
    ${path('M340,140 L360,120 L380,140 L370,360 L350,360 Z', { sw: 2.5, fill: bone })}
    ${path('M340,140 L380,140', { sw: 2 })}
    ${path('M345,180 L375,180 M345,220 L375,220 M345,260 L375,260 M345,300 L375,300 M345,340 L375,340', { sw: 0.5, opacity: 0.5 })}
    ${path('M360,360 Q360,380 360,400', { sw: 2 })}
    ${[[200,220,'BLOOD'],[180,300,'IRON'],[220,380,'TEETH']].map(([x,y,t])=>
      circle(x, y, 30, { sw: 1, dash: '3 3', fill: secondary, fillOpacity: 0.3 }) +
      txt(x, y+3, t, { anchor:'middle', size: 9, weight:'bold', ls: 1.5 })
    ).join('')}
    ${[[520,220,'PATH'],[540,300,'ARRIVE'],[500,380,'WAIT']].map(([x,y,t])=>
      circle(x, y, 30, { sw: 1, dash: '3 3', fill: accent, fillOpacity: 0.3 }) +
      txt(x, y+3, t, { anchor:'middle', size: 9, weight:'bold', ls: 1.5 })
    ).join('')}
    ${[[230,235],[210,310],[245,375]].map(([x,y])=>line(x, y, 340, 280, { sw: 0.75, opacity: 0.5 })).join('')}
    ${[[490,235],[510,310],[470,375]].map(([x,y])=>line(x, y, 380, 280, { sw: 0.75, opacity: 0.5 })).join('')}
    ${rect(140, 460, 440, 90, { sw: 1.5, fill: bone })}
    ${txt(360, 482, 'READING: SPLIT', { anchor:'middle', size: 11, weight:'bold', ls: 2.5 })}
    ${txt(360, 504, 'BLOOD/PATH · IRON/ARRIVE', { anchor:'middle', size: 9, ls: 2, opacity: 0.7 })}
    ${txt(360, 526, 'TEETH/WAIT', { anchor:'middle', size: 9, ls: 2, opacity: 0.7 })}
    ${cornerSeal(620, 110, secondary, 'FANG')}
    ${sceneFooter({ ink, accent, line1: 'FANG REMOVED · WITH CONSENT', line2: 'COORDINATOR INTERPRETS', code: 'RF-04' })}
  `},
  { title: 'Pack Compliance', cue: 'kalidahs queue · for forms', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'PACK ASSEMBLY — COMPLIANCE LINE' })}
    ${[120,220,320,420,520].map((x,i)=>{
      return path(`M${x},220 Q${x+10},190 ${x+30},190 Q${x+50},190 ${x+60},220 L${x+60},290 Q${x+50},310 ${x+30},310 Q${x+10},310 ${x},290 Z`, { sw: 2, fill: ink, fillOpacity: 0.85 }) +
             circle(x+15, 230, 3, { fill: bone }) +
             circle(x+45, 230, 3, { fill: bone }) +
             path(`M${x+18},260 L${x+30},275 L${x+18},275`, { sw: 1, fill: bone }) +
             path(`M${x+42},260 L${x+30},275 L${x+42},275`, { sw: 1, fill: bone }) +
             path(`M${x+15},300 L${x+10},340 L${x+20},340`, { sw: 1.5 }) +
             path(`M${x+45},300 L${x+50},340 L${x+40},340`, { sw: 1.5 });
    }).join('')}
    ${path('M80,360 L640,360', { sw: 1 })}
    ${path('M80,360 L100,360 M620,360 L640,360', { sw: 2 })}
    ${[150,250,350,450,550].map(x=>{
      return rect(x, 130, 30, 30, { sw: 1, fill: bone }) +
             path(`M${x+5},145 L${x+25},145 M${x+5},152 L${x+25},152`, { sw: 0.5, opacity: 0.5 }) +
             path(`M${x+15},170 L${x+15},190`, { sw: 1, opacity: 0.5 }) +
             path(`M${x+10},190 L${x+15},195 L${x+20},190`, { sw: 1 });
    }).join('')}
    ${rect(120, 380, 480, 20, { sw: 1, fill: ink, fillOpacity: 0.7 })}
    ${txt(360, 394, 'INTAKE WINDOW · OPEN', { anchor:'middle', size: 9, fill: bone, ls: 3, weight:'bold' })}
    ${rect(140, 420, 440, 130, { sw: 1.5, fill: bone })}
    ${txt(360, 442, 'PACK SIZE: 5 · QUEUED', { anchor:'middle', size: 11, weight:'bold', ls: 2.5 })}
    ${txt(360, 464, 'EACH HOLDS · OWN PAPERWORK', { anchor:'middle', size: 9, ls: 2, opacity: 0.7 })}
    ${txt(360, 486, 'WAIT TIME · COMPLIANT', { anchor:'middle', size: 9, ls: 2, opacity: 0.7 })}
    ${txt(360, 508, 'COORDINATOR PROCESSES · CALMLY', { anchor:'middle', size: 8, ls: 2, opacity: 0.6, style:'italic' })}
    ${txt(360, 530, 'PREDATORS QUEUED · ALL MORNING', { anchor:'middle', size: 8, ls: 2, opacity: 0.55 })}
    ${cornerSeal(620, 110, accent, 'LINE')}
    ${sceneFooter({ ink, accent, line1: 'INTAKE FORMS · AT WINDOW', line2: 'NEXT WAVE · 1100 HRS', code: 'PC-05' })}
  `},
  { title: 'Cord Severed', cue: 'unmerge · incomplete', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'SEPARATION EVENT — INCOMPLETE' })}
    ${path('M180,200 Q200,160 280,160 Q340,160 360,200 L360,300 Q340,340 280,340 Q200,340 180,300 Z', { sw: 2.5, fill: ink, fillOpacity: 0.85 })}
    ${path('M460,200 Q480,160 540,160 Q580,160 580,200 L580,300 Q580,340 540,340 Q480,340 460,300 Z', { sw: 2.5, fill: ink, fillOpacity: 0.85 })}
    ${path('M360,260 L380,265 L390,255 L400,270 L410,260 L420,275 L430,265 L440,275 L460,260', { sw: 4, stroke: secondary })}
    ${[[380,265],[400,270],[420,275],[440,275]].map(([x,y])=>circle(x, y, 3, { fill: secondary, stroke:'none' })).join('')}
    ${path('M360,260 L355,290 L380,295 L370,310', { sw: 1.5, stroke: secondary })}
    ${path('M460,260 L465,290 L440,295 L450,310', { sw: 1.5, stroke: secondary })}
    ${[[370,330,5],[400,340,4],[430,340,5],[450,330,4]].map(([x,y,r])=>
      path(`M${x-r},${y} Q${x-r/2},${y-r*1.6} ${x},${y-r*1.6} Q${x+r/2},${y-r*1.6} ${x+r},${y} Q${x},${y+r/2} ${x-r},${y} Z`, { sw: 0.75, fill: secondary, fillOpacity: 0.7 })
    ).join('')}
    ${rect(140, 460, 440, 90, { sw: 1.5, fill: bone })}
    ${txt(360, 482, 'CORD: SEVERED', { anchor:'middle', size: 12, weight:'bold', ls: 3, fill: secondary })}
    ${txt(360, 504, 'NEITHER PARTY · WHOLE', { anchor:'middle', size: 9, ls: 2, opacity: 0.7 })}
    ${txt(360, 526, 'BOTH SURVIVE · WITH SHADOWS', { anchor:'middle', size: 8, ls: 2, opacity: 0.6, style:'italic' })}
    ${cornerSeal(620, 110, secondary, 'CUT')}
    ${sceneFooter({ ink, accent, line1: 'COORDINATOR · WAS ABSENT', line2: 'INCIDENT REPORT · OUTSTANDING', code: 'CS-06' })}
  `},
  { title: 'Frenzy Overload', cue: 'merger collapses · all minds on fire', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'MERGE FAILURE — FRENZY STATE' })}
    ${path('M180,180 Q220,120 360,140 Q500,120 540,180 Q560,260 500,340 Q360,400 220,340 Q160,260 180,180 Z', { sw: 2.5, fill: ink, fillOpacity: 0.85 })}
    ${[[240,200,4],[280,180,3],[320,200,4],[360,170,3.5],[400,200,4],[440,180,3],[480,200,4]].map(([x,y,r])=>circle(x, y, r, { fill: bone })).join('')}
    ${[[240,260,2],[280,270,2.5],[320,250,2],[360,280,2.5],[400,250,2],[440,270,2.5],[480,260,2]].map(([x,y,r])=>circle(x, y, r, { fill: bone })).join('')}
    ${path('M210,300 Q230,330 250,310 L260,330 L270,310 Q300,340 320,310 Q340,340 360,310 Q380,340 400,310 Q420,340 440,310 Q460,340 480,310 L490,330 L500,310 Q520,330 540,300', { sw: 2, stroke: secondary })}
    ${[[200,140],[280,120],[360,110],[440,120],[520,140],[160,200],[180,300],[540,300],[560,200]].map(([x,y])=>{
      const dx = (Math.random()-.5)*30;
      const dy = (Math.random()-.5)*30;
      return line(x, y, x+dx, y-30, { sw: 1.5, stroke: secondary, opacity: 0.7 });
    }).join('')}
    ${path('M180,400 L220,440 M260,420 L280,460 M340,420 L360,460 M420,420 L440,460 M500,400 L540,440', { sw: 2 })}
    ${rect(140, 460, 440, 90, { sw: 1.5, fill: bone })}
    ${txt(360, 482, 'FRENZY: ESCALATING', { anchor:'middle', size: 12, weight:'bold', ls: 3, fill: secondary })}
    ${txt(360, 504, 'ALL MINDS · ALL AT ONCE', { anchor:'middle', size: 9, ls: 2, opacity: 0.7 })}
    ${txt(360, 526, 'CORD INTEGRITY · COMPROMISED', { anchor:'middle', size: 8, ls: 2, opacity: 0.6, style:'italic' })}
    ${cornerSeal(620, 110, secondary, 'BURN')}
    ${sceneFooter({ ink, accent, line1: 'COORDINATOR ATTEMPTS REGRADE', line2: 'TOO LATE · TOO MANY', code: 'FO-07' })}
  `},
  { title: 'Mass Merge', cue: 'two pasts · one becoming', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'TERMINAL MERGE — NEW SPECIES' })}
    ${path('M200,140 Q280,120 360,140 Q440,120 520,140 L540,200 Q520,280 460,330 Q360,400 260,330 Q200,280 180,200 Z', { sw: 2.5, fill: secondary, fillOpacity: 0.4 })}
    ${path('M250,200 Q280,180 310,200 Q300,240 260,250 Q220,240 250,200 Z', { sw: 1.5, fill: ink, fillOpacity: 0.85 })}
    ${circle(265, 215, 4, { fill: bone })}
    ${circle(295, 215, 4, { fill: bone })}
    ${path('M270,235 L290,245', { sw: 1, stroke: bone })}
    ${path('M410,200 Q440,180 470,200 Q460,240 420,250 Q380,240 410,200 Z', { sw: 1.5, fill: ink, fillOpacity: 0.85 })}
    ${circle(425, 215, 4, { fill: bone })}
    ${circle(455, 215, 4, { fill: bone })}
    ${path('M430,235 L450,245', { sw: 1, stroke: bone })}
    ${[300,330,360,390,420].map(x=>line(x, 280, x, 320, { sw: 2, stroke: secondary, opacity: 0.85 })).join('')}
    ${path('M280,340 Q360,360 440,340', { sw: 1.5 })}
    ${path('M260,400 L240,440 L255,440', { sw: 2 })}
    ${path('M460,400 L480,440 L465,440', { sw: 2 })}
    ${path('M340,420 L330,460 L350,460', { sw: 2 })}
    ${path('M380,420 L390,460 L370,460', { sw: 2 })}
    ${rect(140, 480, 440, 80, { sw: 1.5, fill: bone })}
    ${txt(360, 502, 'NEW SPECIES: REGISTERED', { anchor:'middle', size: 11, weight:'bold', ls: 2.5 })}
    ${txt(360, 524, 'BUREAU CATALOG · UPDATED', { anchor:'middle', size: 9, ls: 2, opacity: 0.7 })}
    ${txt(360, 544, 'NAME: KALIDAH-2 (PROVISIONAL)', { anchor:'middle', size: 8, ls: 2, opacity: 0.6, style:'italic' })}
    ${cornerSeal(620, 110, secondary, 'BORN')}
    ${cornerSeal(120, 540, accent, 'ARCH')}
    ${sceneFooter({ ink, accent, line1: 'TWO ORIGINS · ONE FILE', line2: 'BIRTH RECORDED · POST-FACTO', code: 'MM-08' })}
  `},
];

// ═══════════════════════════════════════════════════════════
// POPPY FIELD — PHARMACEUTICAL ORACLE (Field Pharmacist)
// ═══════════════════════════════════════════════════════════
const poppy_field = [
  { title: 'Field Approach', cue: 'red horizon · known sedative', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'POPPY FIELD — APPROACH MAP' })}
    ${rect(80, 100, 560, 360, { sw: 1.5 })}
    ${path('M80,260 L640,260', { sw: 1, stroke: secondary, opacity: 0.7, dash:'4 3' })}
    ${[[120,200,12],[180,210,14],[240,200,11],[300,215,13],[360,205,12],[420,210,14],[480,200,11],[540,215,13],[600,200,12]].map(([x,y,r])=>
      path(`M${x-r},${y} Q${x-r/2},${y-r*1.6} ${x},${y-r*1.6} Q${x+r/2},${y-r*1.6} ${x+r},${y} Q${x},${y+r/2} ${x-r},${y} Z`, { sw: 1, fill: secondary, fillOpacity: 0.6 }) +
      circle(x, y-r*0.7, 2, { fill: ink, stroke:'none' })
    ).join('')}
    ${[[100,290,8],[150,310,9],[200,295,7],[260,320,9],[320,300,8],[380,315,9],[440,300,8],[500,315,9],[560,300,8],[610,310,8]].map(([x,y,r])=>
      path(`M${x-r},${y} Q${x-r/2},${y-r*1.6} ${x},${y-r*1.6} Q${x+r/2},${y-r*1.6} ${x+r},${y} Q${x},${y+r/2} ${x-r},${y} Z`, { sw: 0.75, fill: secondary, fillOpacity: 0.5 })
    ).join('')}
    ${path('M280,420 Q360,400 440,420', { sw: 1.5, dash:'4 3', stroke: accent })}
    ${path('M280,420 L290,415 L295,425 Z', { sw: 1, fill: accent })}
    ${rect(140, 470, 440, 90, { sw: 1.5, fill: bone })}
    ${txt(360, 492, 'FIELD WIDTH: ~600 M', { anchor:'middle', size: 11, weight:'bold', ls: 2.5 })}
    ${txt(360, 514, 'KNOWN ALKALOID FIELD · LOGGED', { anchor:'middle', size: 9, ls: 2, opacity: 0.7 })}
    ${txt(360, 536, 'CROSSING NOT RECOMMENDED', { anchor:'middle', size: 8, ls: 2, opacity: 0.6, style:'italic' })}
    ${cornerSeal(620, 110, secondary, 'POPPY')}
    ${sceneFooter({ ink, accent, line1: 'WIND CARRIES · POLLEN', line2: 'PHARMACIST WAITS · IN ROW 4', code: 'FA-01' })}
  `},
  { title: 'IV Stem', cue: 'stem · vein · drip', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'BOTANICAL ANATOMY — IV PATHWAY' })}
    ${path('M340,160 Q330,200 350,260 Q360,300 340,360 Q330,400 350,440', { sw: 4, stroke: '#1F7A53' })}
    ${path('M340,160 Q330,200 350,260 Q360,300 340,360 Q330,400 350,440', { sw: 1.5, stroke: ink, dash:'3 3' })}
    ${[[345,200,12,'L'],[345,260,14,'R'],[345,320,12,'L'],[345,380,13,'R']].map(([x,y,r,d])=>
      path(`M${x},${y} Q${d==='L'?x-30:x+30},${y-15} ${d==='L'?x-50:x+50},${y+10} Q${d==='L'?x-30:x+30},${y+25} ${x},${y+5}`, { sw: 1.5, fill: '#1F7A53', fillOpacity: 0.5 }) +
      [4,8,12,16].map(i=>line(d==='L'?x-i:x+i, y, d==='L'?x-i-3:x+i+3, y+10, { sw: 0.5, opacity: 0.6 })).join('')
    ).join('')}
    ${path('M310,140 Q340,110 370,140 Q380,170 360,180 L320,180 Q310,170 310,140 Z', { sw: 2, fill: secondary, fillOpacity: 0.6 })}
    ${circle(340, 150, 5, { fill: ink })}
    ${path('M260,160 L300,150', { sw: 1.5, stroke: secondary })}
    ${path('M380,150 L420,160', { sw: 1.5, stroke: secondary })}
    ${path('M260,170 L290,170', { sw: 1.5, stroke: secondary, opacity: 0.7 })}
    ${path('M390,170 L420,170', { sw: 1.5, stroke: secondary, opacity: 0.7 })}
    ${path('M340,440 L340,470 L320,490 L360,490 Z', { sw: 1, fill: ink })}
    ${path('M460,200 L500,180 L540,200 L520,250 L480,260 Z', { sw: 1.5, fill: bone })}
    ${rect(465, 200, 70, 40, { sw: 1, fill: bone })}
    ${path('M470,210 L530,210 M470,220 L530,220 M470,230 L530,230', { sw: 0.5, opacity: 0.5 })}
    ${path('M540,220 L460,300', { sw: 1.5, stroke: secondary })}
    ${rect(140, 480, 440, 80, { sw: 1.5, fill: bone })}
    ${txt(360, 502, 'IV PATHWAY: ESTABLISHED', { anchor:'middle', size: 11, weight:'bold', ls: 2.5 })}
    ${txt(360, 524, 'DRIP RATE · 1 PER 4S', { anchor:'middle', size: 9, ls: 2, opacity: 0.7 })}
    ${txt(360, 546, 'NO INFORMED CONSENT FILED', { anchor:'middle', size: 8, ls: 2, opacity: 0.6, style:'italic' })}
    ${cornerSeal(620, 110, '#1F7A53', 'IV')}
    ${sceneFooter({ ink, accent, line1: 'STEM CHANNEL · OPEN', line2: 'BLOSSOM PRESCRIBES', code: 'IVS-02' })}
  `},
  { title: 'Seed Pod Harvest', cue: 'extraction · methodical', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'POD COLLECTION — HARVEST QUOTA' })}
    ${[[140,200],[220,180],[300,210],[380,190],[460,200],[540,180]].map(([x,y])=>{
      return path(`M${x},${y} L${x+10},${y-20} L${x},${y-30} L${x-10},${y-20} Z`, { sw: 1, fill: '#1F7A53', fillOpacity: 0.5 }) +
             circle(x, y-15, 5, { sw: 1, fill: secondary, fillOpacity: 0.4 }) +
             [3,6,9,12].map(r=>circle(x, y-15, r, { sw: 0.4, opacity: 0.4 })).join('') +
             line(x, y, x, y+30, { sw: 2, stroke: '#1F7A53' });
    }).join('')}
    ${rect(120, 260, 480, 120, { sw: 2, fill: bone })}
    ${rect(120, 260, 480, 24, { fill: ink, stroke:'none' })}
    ${txt(360, 278, 'BUREAU PHARMACY · STORE', { anchor:'middle', size: 10, fill: bone, ls: 3, weight:'bold' })}
    ${[150,210,270,330,390,450,510].map((x,i)=>
      circle(x, 320, 14, { sw: 1, fill: secondary, fillOpacity: 0.4 }) +
      txt(x, 323, 'P', { anchor:'middle', size: 9, weight:'bold' })
    ).join('')}
    ${[150,210,270,330,390,450,510].map(x=>line(x, 350, x, 370, { sw: 0.5, opacity: 0.5 })).join('')}
    ${rect(140, 410, 440, 130, { sw: 1.5, fill: bone })}
    ${txt(360, 432, 'PODS HARVESTED: 7 / 12 (Q4)', { anchor:'middle', size: 11, weight:'bold', ls: 2.5 })}
    ${txt(360, 454, 'QUOTA STATUS · UNDER', { anchor:'middle', size: 9, ls: 2, opacity: 0.7 })}
    ${txt(360, 476, 'PHARMACY · STOCKED', { anchor:'middle', size: 9, ls: 2, opacity: 0.7 })}
    ${txt(360, 498, 'OUTSTANDING: PODS 8–12', { anchor:'middle', size: 9, ls: 2, opacity: 0.7 })}
    ${txt(360, 520, 'PHARMACIST RETURNS · AT DUSK', { anchor:'middle', size: 8, ls: 2, opacity: 0.6, style:'italic' })}
    ${cornerSeal(620, 110, accent, 'POD')}
    ${sceneFooter({ ink, accent, line1: 'SEEDS WEIGHED · LOGGED', line2: 'NO LEAF DISCARDED', code: 'SPH-03' })}
  `},
  { title: 'Reading the Pollen', cue: 'spore-pattern · diagnostic', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'POLLEN ANALYSIS — SPORE PATTERN' })}
    ${rect(120, 100, 480, 320, { sw: 2, fill: bone })}
    ${rect(120, 100, 480, 22, { fill: ink, stroke:'none' })}
    ${txt(360, 117, 'POLLEN GRID · 12 × 8', { anchor:'middle', size: 10, fill: bone, ls: 3, weight:'bold' })}
    ${Array.from({length:8},(_,r)=>Array.from({length:12},(_,c)=>{
      const x = 140 + c*38;
      const y = 140 + r*32;
      const has = Math.random() > 0.35;
      return rect(x, y, 30, 24, { sw: 0.5, opacity: 0.4 }) +
             (has ? circle(x+15, y+12, 3+(c+r)%4, { fill: secondary, fillOpacity: 0.6, stroke:'none' }) : '') +
             (has && (c+r)%5===0 ? circle(x+15, y+12, 7, { sw: 0.5, dash:'2 2', stroke: ink, opacity: 0.6 }) : '');
    }).join('')).join('')}
    ${rect(140, 440, 440, 100, { sw: 1.5, fill: bone })}
    ${txt(360, 462, 'PATTERN: SOPORIFIC', { anchor:'middle', size: 11, weight:'bold', ls: 2.5 })}
    ${txt(360, 484, 'CONCENTRATION ELEVATED · SE QUAD', { anchor:'middle', size: 9, ls: 2, opacity: 0.7 })}
    ${txt(360, 506, 'OUTCOME PROBABILITY · SLEEP', { anchor:'middle', size: 9, ls: 2, opacity: 0.7 })}
    ${txt(360, 528, 'ESTIMATED ONSET · 3–4 STEPS', { anchor:'middle', size: 8, ls: 2, opacity: 0.6, style:'italic' })}
    ${cornerSeal(620, 110, accent, 'GRID')}
    ${sceneFooter({ ink, accent, line1: 'SAMPLE TAKEN · PER M²', line2: 'PHARMACIST · CONFIRMS', code: 'RP-04' })}
  `},
  { title: 'Pharmaceutical Compliance', cue: 'sleep · scheduled', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'PRESCRIPTION FORM 9-PHA' })}
    ${rect(80, 100, 560, 380, { sw: 2, fill: bone })}
    ${rect(80, 100, 560, 26, { fill: ink, stroke:'none' })}
    ${txt(360, 119, 'FORM 9-PHA · PRESCRIPTION', { anchor:'middle', size: 11, fill: bone, ls: 3, weight:'bold' })}
    ${[
      ['UNIT',         'UNIT 04 (DOROTHY)'],
      ['MEDICATION',   'POPPY ALKALOID-A'],
      ['DOSAGE',       'AMBIENT (FIELD)'],
      ['DURATION',     'UNTIL RESCUED'],
      ['PROVIDER',     'FIELD PHARMACIST'],
      ['INDICATION',   'TRANSIT DELAY'],
      ['SIDE EFFECTS', 'SLEEP · DREAMS · DEATH'],
      ['CONSENT',      '— BLANK —'],
    ].map(([k,v], i) => {
      const y = 160 + i*38;
      return txt(100, y, k+':', { size: 10, weight:'bold', ls: 2 }) +
             rect(240, y-14, 360, 22, { sw: 0.75, fill:'none' }) +
             txt(252, y, v, { size: 10, ls: 2, fill: i===6||i===7 ? secondary : ink, weight: i===7 ? 'bold' : 'normal' });
    }).join('')}
    ${cornerSeal(580, 440, accent, 'RX')}
    ${cornerSeal(120, 440, secondary, 'NO·SIG')}
    ${sceneFooter({ ink, accent, line1: 'RX ISSUED · STAMPED', line2: 'NO COUNTERSIGNATURE REQUIRED', code: 'PC-05' })}
  `},
  { title: 'Snowfall Reversal', cue: 'antidote · airborne', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'COUNTERAGENT — SNOWFALL EVENT' })}
    ${[[140,140],[200,160],[260,140],[320,170],[380,140],[440,170],[500,140],[560,160],[620,140],[170,210],[230,230],[290,210],[350,240],[410,210],[470,240],[530,210],[590,230],[150,290],[210,310],[270,290],[330,320],[390,290],[450,320],[510,290],[570,310],[630,290],[180,370],[240,390],[300,370],[360,400],[420,370],[480,400],[540,370],[600,390]].map(([x,y])=>{
      return path(`M${x},${y-6} L${x+2},${y-1} L${x+6},${y} L${x+2},${y+1} L${x},${y+6} L${x-2},${y+1} L${x-6},${y} L${x-2},${y-1} Z`, { sw: 0.5, fill: bone, stroke: '#B7BDC7' });
    }).join('')}
    ${[[150,420,8],[220,440,9],[300,420,8],[380,450,9],[460,420,8],[540,450,9],[610,420,8]].map(([x,y,r])=>
      path(`M${x-r},${y} Q${x-r/2},${y-r*1.6} ${x},${y-r*1.6} Q${x+r/2},${y-r*1.6} ${x+r},${y} Q${x},${y+r/2} ${x-r},${y} Z`, { sw: 0.75, fill: secondary, fillOpacity: 0.4 })
    ).join('')}
    ${path('M120,420 L640,420', { sw: 1, opacity: 0.5 })}
    ${rect(140, 460, 440, 90, { sw: 1.5, fill: bone })}
    ${txt(360, 482, 'SNOW DEPLOYED · COMPLIANT', { anchor:'middle', size: 11, weight:'bold', ls: 2.5 })}
    ${txt(360, 504, 'POPPIES SUPPRESSED · TEMPORARILY', { anchor:'middle', size: 9, ls: 2, opacity: 0.7 })}
    ${txt(360, 526, 'SOURCE · NORTH BUREAU (GLINDA)', { anchor:'middle', size: 8, ls: 2, opacity: 0.6, style:'italic' })}
    ${cornerSeal(620, 110, accent, 'SNOW')}
    ${sceneFooter({ ink, accent, line1: 'COUNTERAGENT · DELIVERED', line2: 'WAKE-PROBABILITY · RESTORED', code: 'SR-06' })}
  `},
  { title: 'Overdose Field', cue: 'no rescue this time', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'CRITICAL EVENT — DOSAGE EXCEEDS' })}
    ${rect(80, 100, 560, 360, { sw: 1.5 })}
    ${Array.from({length:60},(_,i)=>{
      const x = 100 + (i%12)*45;
      const y = 130 + Math.floor(i/12)*60;
      const r = 14;
      return path(`M${x-r},${y} Q${x-r/2},${y-r*1.6} ${x},${y-r*1.6} Q${x+r/2},${y-r*1.6} ${x+r},${y} Q${x},${y+r/2} ${x-r},${y} Z`, { sw: 0.5, fill: secondary, fillOpacity: 0.7 });
    }).join('')}
    ${[[180,200],[300,260],[440,220],[520,300],[200,380],[400,400]].map(([x,y])=>
      circle(x, y, 12, { sw: 1.5, fill: ink, fillOpacity: 0.85 }) +
      path(`M${x-6},${y-6} L${x+6},${y+6} M${x+6},${y-6} L${x-6},${y+6}`, { sw: 1.5, stroke: bone })
    ).join('')}
    ${rect(140, 480, 440, 80, { sw: 1.5, fill: bone })}
    ${txt(360, 502, 'COUNTERAGENT: DELAYED', { anchor:'middle', size: 11, weight:'bold', ls: 2.5, fill: secondary })}
    ${txt(360, 524, 'CASUALTY COUNT · ESTIMATED 6', { anchor:'middle', size: 9, ls: 2, opacity: 0.7 })}
    ${txt(360, 546, 'PHARMACIST · NOT REACHABLE', { anchor:'middle', size: 8, ls: 2, opacity: 0.6, style:'italic' })}
    ${cornerSeal(620, 110, secondary, 'OD')}
    ${sceneFooter({ ink, accent, line1: 'NO SECOND SNOWFALL FILED', line2: 'EXPECTED OUTCOME · TERMINAL', code: 'OF-07' })}
  `},
  { title: 'Eternal Bloom', cue: 'field expands · across map', scene: ({accent, ink, bone, secondary}) => `
    ${sceneFrame({ ink, bone, accent, label: 'PERMANENT POPPY · MAP UPDATE' })}
    ${rect(80, 100, 560, 360, { sw: 2, fill: bone })}
    ${rect(80, 100, 560, 22, { fill: ink, stroke:'none' })}
    ${txt(360, 117, 'OZ · QUADRANT MAP (REV.04)', { anchor:'middle', size: 10, fill: bone, ls: 3, weight:'bold' })}
    ${path('M80,290 L640,290', { sw: 0.75, opacity: 0.4, dash: '3 3' })}
    ${path('M360,140 L360,460', { sw: 0.75, opacity: 0.4, dash: '3 3' })}
    ${[[150,200],[200,250],[250,170],[300,230],[180,180],[230,210]].map(([x,y])=>circle(x, y, 8, { sw: 1, fill: secondary, fillOpacity: 0.5 })).join('')}
    ${[[400,160],[460,200],[520,180],[580,220],[420,260],[470,160],[510,250],[560,170],[600,200]].map(([x,y])=>circle(x, y, 8, { sw: 1, fill: secondary, fillOpacity: 0.6 })).join('')}
    ${[[120,340],[180,370],[240,340],[300,380],[360,340],[420,370],[480,340],[540,380],[600,340],[150,420],[210,440],[270,420],[330,440],[390,420],[450,440],[510,420],[570,440]].map(([x,y])=>{
      const r = 12;
      return path(`M${x-r},${y} Q${x-r/2},${y-r*1.6} ${x},${y-r*1.6} Q${x+r/2},${y-r*1.6} ${x+r},${y} Q${x},${y+r/2} ${x-r},${y} Z`, { sw: 0.75, fill: secondary, fillOpacity: 0.7 });
    }).join('')}
    ${[100,180,260,340,420,500,580].map(x=>line(x, 290, x, 295, { sw: 0.5, opacity: 0.5 })).join('')}
    ${rect(140, 480, 440, 80, { sw: 1.5, fill: bone })}
    ${txt(360, 502, 'POPPY COVERAGE: 87%', { anchor:'middle', size: 11, weight:'bold', ls: 2.5, fill: secondary })}
    ${txt(360, 524, 'QUADRANTS REASSIGNED · S+E', { anchor:'middle', size: 9, ls: 2, opacity: 0.7 })}
    ${txt(360, 544, 'OZ · PHARMACOLOGICAL PROVINCE', { anchor:'middle', size: 8, ls: 2, opacity: 0.6, style:'italic' })}
    ${cornerSeal(620, 110, secondary, 'PERM')}
    ${cornerSeal(120, 540, accent, 'BURE')}
    ${sceneFooter({ ink, accent, line1: 'BLOOM · NOW ETERNAL', line2: 'NO REVERSAL FILED', code: 'EB-08' })}
  `},
];

// Export all decks
export const allDecks2 = { glinda, witch_west, witch_east, wizard, munchkins, winged_monkeys, kalidah, poppy_field };
