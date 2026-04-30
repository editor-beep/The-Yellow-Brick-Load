// YELLOW BRICK LOAD — Oracle Card SVG Framework
// Shared constants, helpers, deck DNA, sigils, frames, headers, ritual strips.

export const W = 720, H = 1080;
export const SCENE_Y = 162, SCENE_H = 648;
export const STRIP_Y = 810, STRIP_H = 270;

export const C = {
  ink: '#141414',
  bone: '#F2EBDD',
  archive: '#8E8A83',
};

export const ROMAN = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'];
export const LADDER = ['', 'summons','incision','extraction','reading','compliance','reversal','overload','catastrophe'];

export const DECKS = {
  lion:           { name: 'OZ-TAROT',                accent: '#D4A72C', secondary: '#9E1B1B', interloperName: 'BUREAU CROW',           frame: 'arc',     sigil: 'lion' },
  tin_man:        { name: 'SCRAPYARD TAROT',         accent: '#B7BDC7', secondary: '#9E5C2C', interloperName: 'MAINTENANCE AUDITOR',   frame: 'rivet',   sigil: 'tin' },
  scarecrow:      { name: 'STRAW ORACLE',            accent: '#1F7A53', secondary: '#9E5C2C', interloperName: 'STRAW CLERK',           frame: 'stitch',  sigil: 'straw' },
  dorothy:        { name: 'DUST ORACLE',             accent: '#9E1B1B', secondary: '#8E8A83', interloperName: 'DUST CLERK',            frame: 'brick',   sigil: 'shoe' },
  glinda:         { name: 'REFRACTION ORACLE',       accent: '#7A5CC7', secondary: '#B7BDC7', interloperName: 'PORCELAIN AUDITOR',     frame: 'prism',   sigil: 'lens' },
  witch_west:     { name: 'MALICE ORACLE',           accent: '#9E1B1B', secondary: '#141414', interloperName: 'OBSIDIAN MATRON',       frame: 'barb',    sigil: 'orb' },
  witch_east:     { name: 'IMPACT ORACLE',           accent: '#9E1B1B', secondary: '#141414', interloperName: 'GROUND IMPACT ASSESSOR',frame: 'crack',   sigil: 'crush' },
  wizard:         { name: 'PROJECTION ORACLE',       accent: '#D4A72C', secondary: '#1F7A53', interloperName: 'HUMBUG SURGEON',        frame: 'curtain', sigil: 'face' },
  munchkins:      { name: 'AGRICULTURAL AUDIT',      accent: '#1F7A53', secondary: '#D4A72C', interloperName: 'LEAD MUNCHKIN',         frame: 'crop',    sigil: 'three' },
  winged_monkeys: { name: 'KINETIC HARVEST',         accent: '#B7BDC7', secondary: '#9E1B1B', interloperName: 'WING CAPTAIN',          frame: 'wing',    sigil: 'cap' },
  kalidah:        { name: 'MERGE ORACLE',            accent: '#9E1B1B', secondary: '#141414', interloperName: 'MERGE COORDINATOR',     frame: 'fuse',    sigil: 'fused' },
  poppy_field:    { name: 'PHARMACEUTICAL ORACLE',   accent: '#1F7A53', secondary: '#D4A72C', interloperName: 'FIELD PHARMACIST',      frame: 'vein',    sigil: 'poppy' },
};

const escapeXml = (s) => String(s).replace(/[<>&"']/g, ch => ({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;',"'":'&apos;'}[ch]));

// ── Primitive helpers ──────────────────────────────────────
export const txt = (x,y,t,o={}) => {
  const attrs = [
    `x="${x}"`, `y="${y}"`,
    `font-family="${o.font || 'Georgia, serif'}"`,
    `font-size="${o.size || 12}"`,
    `fill="${o.fill || C.ink}"`,
    o.anchor ? `text-anchor="${o.anchor}"` : '',
    o.weight ? `font-weight="${o.weight}"` : '',
    o.ls != null ? `letter-spacing="${o.ls}"` : '',
    o.opacity != null ? `opacity="${o.opacity}"` : '',
    o.style ? `font-style="${o.style}"` : '',
  ].filter(Boolean).join(' ');
  return `<text ${attrs}>${escapeXml(t)}</text>`;
};

export const rect = (x,y,w,h,o={}) => {
  const attrs = [
    `x="${x}"`, `y="${y}"`, `width="${w}"`, `height="${h}"`,
    `fill="${o.fill || 'none'}"`,
    o.fillOpacity != null ? `fill-opacity="${o.fillOpacity}"` : '',
    `stroke="${o.stroke || C.ink}"`,
    `stroke-width="${o.sw != null ? o.sw : 1.5}"`,
    o.dash ? `stroke-dasharray="${o.dash}"` : '',
    o.opacity != null ? `opacity="${o.opacity}"` : '',
    o.rx != null ? `rx="${o.rx}"` : '',
  ].filter(Boolean).join(' ');
  return `<rect ${attrs}/>`;
};

export const line = (x1,y1,x2,y2,o={}) => {
  const attrs = [
    `x1="${x1}"`, `y1="${y1}"`, `x2="${x2}"`, `y2="${y2}"`,
    `stroke="${o.stroke || C.ink}"`,
    `stroke-width="${o.sw != null ? o.sw : 1}"`,
    o.dash ? `stroke-dasharray="${o.dash}"` : '',
    o.opacity != null ? `opacity="${o.opacity}"` : '',
    o.linecap ? `stroke-linecap="${o.linecap}"` : '',
  ].filter(Boolean).join(' ');
  return `<line ${attrs}/>`;
};

export const circle = (cx,cy,r,o={}) => {
  const attrs = [
    `cx="${cx}"`, `cy="${cy}"`, `r="${r}"`,
    `fill="${o.fill || 'none'}"`,
    o.fillOpacity != null ? `fill-opacity="${o.fillOpacity}"` : '',
    `stroke="${o.stroke || C.ink}"`,
    `stroke-width="${o.sw != null ? o.sw : 1.5}"`,
    o.dash ? `stroke-dasharray="${o.dash}"` : '',
    o.opacity != null ? `opacity="${o.opacity}"` : '',
  ].filter(Boolean).join(' ');
  return `<circle ${attrs}/>`;
};

export const path = (d, o={}) => {
  const attrs = [
    `d="${d}"`,
    `fill="${o.fill || 'none'}"`,
    o.fillOpacity != null ? `fill-opacity="${o.fillOpacity}"` : '',
    `stroke="${o.stroke || C.ink}"`,
    `stroke-width="${o.sw != null ? o.sw : 2}"`,
    o.dash ? `stroke-dasharray="${o.dash}"` : '',
    o.opacity != null ? `opacity="${o.opacity}"` : '',
    o.linecap ? `stroke-linecap="${o.linecap}"` : '',
    o.linejoin ? `stroke-linejoin="${o.linejoin}"` : '',
    o.fillRule ? `fill-rule="${o.fillRule}"` : '',
  ].filter(Boolean).join(' ');
  return `<path ${attrs}/>`;
};

export const polygon = (pts, o={}) => {
  const attrs = [
    `points="${pts}"`,
    `fill="${o.fill || 'none'}"`,
    o.fillOpacity != null ? `fill-opacity="${o.fillOpacity}"` : '',
    `stroke="${o.stroke || C.ink}"`,
    `stroke-width="${o.sw != null ? o.sw : 1.5}"`,
    o.opacity != null ? `opacity="${o.opacity}"` : '',
  ].filter(Boolean).join(' ');
  return `<polygon ${attrs}/>`;
};

// ── Composite helpers ─────────────────────────────────────
export const lines = (x,y,w,n,gap=14,o={}) =>
  Array.from({length:n}, (_,i) => line(x, y+i*gap, x+w, y+i*gap, {sw:0.75, opacity:o.opacity ?? 0.5, stroke:o.stroke||C.ink})).join('');

export const stamp = (cx,cy,r,t,o={}) =>
  `<g transform="rotate(${o.rot||0} ${cx} ${cy})">${
    circle(cx,cy,r,{stroke:o.color||C.ink, sw:2, fill:o.fill||'none', fillOpacity:o.fillOpacity})
  }${
    circle(cx,cy,r-4,{stroke:o.color||C.ink, sw:0.75, opacity:0.6})
  }${
    txt(cx, cy+3, t, {anchor:'middle', size:o.size||9, fill:o.color||C.ink, ls:1.5, weight:'bold', font:'Georgia, serif'})
  }</g>`;

export const hatchRect = (x, y, w, h, o={}) => {
  const gap = o.gap || 6;
  const stroke = o.stroke || C.ink;
  const op = o.opacity != null ? o.opacity : 0.3;
  let r = '';
  for (let d = 0; d < w + h; d += gap) {
    const x1 = x + Math.max(0, d - h);
    const y1 = y + Math.min(d, h);
    const x2 = x + Math.min(d, w);
    const y2 = y + Math.max(0, d - w);
    r += line(x1, y1, x2, y2, { sw: 0.75, opacity: op, stroke });
  }
  return r;
};

// Form sheet (paper rectangle with tabs / holes)
export const formSheet = (x, y, w, h, opts={}) => {
  const fill = opts.fill || C.bone;
  const ink = C.ink;
  let s = rect(x, y, w, h, { fill, stroke: ink, sw: 1.5 });
  // file holes on left
  if (opts.holes) {
    s += circle(x+18, y+30, 4, { fill: ink, stroke: 'none' });
    s += circle(x+18, y+h/2, 4, { fill: ink, stroke: 'none' });
    s += circle(x+18, y+h-30, 4, { fill: ink, stroke: 'none' });
  }
  // top header bar
  if (opts.header) {
    s += rect(x, y, w, 28, { fill: ink, stroke: 'none' });
    s += txt(x+w/2, y+19, opts.header, { anchor:'middle', size:11, fill:C.bone, ls:3, weight:'bold' });
  }
  return s;
};

// ── Frames (border grammar per deck) ──────────────────────
const M = 22; // outer margin
const frameBox = (extra='') => rect(M, M, W-2*M, H-2*M, {sw:2, stroke:C.ink}) + rect(M+8, M+8, W-2*(M+8), H-2*(M+8), {sw:0.75, stroke:C.ink, opacity:0.5}) + extra;

const frames = {
  arc: (deck) => {
    // lion: heat-arc corners
    const a = deck.accent;
    const cs = (cx, cy, r) => path(`M${cx-r},${cy} A${r},${r} 0 0 1 ${cx+r},${cy}`, { stroke: a, sw: 2, opacity: 0.85 });
    const tuft = (cx, cy) => `${path(`M${cx-12},${cy} Q${cx-6},${cy-8} ${cx},${cy} Q${cx+6},${cy-8} ${cx+12},${cy}`, { stroke: C.ink, sw: 1.5 })}`;
    return frameBox(
      cs(80, 80, 24) + cs(W-80, 80, 24) +
      `<g transform="rotate(180 80 ${H-80})">${cs(80, 80, 24)}</g>` +
      `<g transform="rotate(180 ${W-80} ${H-80})">${cs(80, 80, 24)}</g>` +
      tuft(W/2, 32) + tuft(W/2, H-32) +
      `<g transform="rotate(90 32 ${H/2})">${tuft(H/2, 32)}</g>` +
      `<g transform="rotate(-90 ${W-32} ${H/2})">${tuft(H/2, 32)}</g>`
    );
  },
  rivet: (deck) => {
    // tin_man: rivets and hinge brackets
    const r = (cx, cy) => circle(cx, cy, 4, { fill: C.ink, stroke:'none' }) + circle(cx, cy, 1.5, { fill: C.bone, stroke:'none' });
    const hinge = (cx, cy, w=24) => `${rect(cx-w, cy-3, 2*w, 6, {fill:C.ink, stroke:'none'})}${circle(cx, cy, 5, {fill:C.bone, stroke:C.ink, sw:1.5})}`;
    let g = frameBox();
    [40, W-40].forEach(x => [40, H-40].forEach(y => g += r(x,y)));
    g += hinge(W/2, 32) + hinge(W/2, H-32);
    g += `<g transform="rotate(90 32 ${H/2})">${hinge(H/2, 32)}</g>`;
    g += `<g transform="rotate(-90 ${W-32} ${H/2})">${hinge(H/2, 32)}</g>`;
    return g;
  },
  stitch: (deck) => {
    // scarecrow: cross-stitch loops
    const x1 = (cx, cy) => `${line(cx-10, cy-10, cx+10, cy+10, {sw:1.5})}${line(cx-10, cy+10, cx+10, cy-10, {sw:1.5})}`;
    let g = frameBox();
    // dashed border line
    g += rect(M+4, M+4, W-2*(M+4), H-2*(M+4), {sw:1, stroke:deck.accent, opacity:0.7, dash:'6 4'});
    [80, W-80].forEach(x => [80, H-80].forEach(y => g += x1(x, y)));
    return g;
  },
  brick: (deck) => {
    // dorothy: brick-trace dashes broken by storm vectors
    let g = frameBox();
    // brick hatching on inner border
    for (let x = M+30; x < W-M; x += 36) {
      g += line(x, M+12, x+24, M+12, { sw:1.5, stroke: deck.accent, opacity:0.7 });
      g += line(x, H-M-12, x+24, H-M-12, { sw:1.5, stroke: deck.accent, opacity:0.7 });
    }
    // storm vector arrows in corners
    const arrow = (x, y, rot) => `<g transform="translate(${x} ${y}) rotate(${rot})">${path('M-12,0 L12,0 M6,-6 L12,0 L6,6', {sw:1.5})}</g>`;
    g += arrow(60, 60, 45) + arrow(W-60, 60, 135) + arrow(60, H-60, -45) + arrow(W-60, H-60, -135);
    return g;
  },
  prism: (deck) => {
    // glinda: prismatic faceted ticks
    let g = frameBox();
    const facet = (cx, cy, s) => polygon(`${cx},${cy-s} ${cx+s},${cy} ${cx},${cy+s} ${cx-s},${cy}`, { fill: deck.accent, fillOpacity: 0.25, sw: 1 });
    [80, W/2, W-80].forEach(x => { g += facet(x, M+10, 6); g += facet(x, H-M-10, 6); });
    [H/2].forEach(y => { g += facet(M+10, y, 6); g += facet(W-M-10, y, 6); });
    return g;
  },
  barb: (deck) => {
    // witch_west: hooked barbs
    let g = frameBox();
    const barb = (x, y, rot) => `<g transform="translate(${x} ${y}) rotate(${rot})">${path('M0,0 L0,-14 Q4,-10 0,-6', { sw: 1.5, stroke: deck.accent })}</g>`;
    for (let x = M+40; x < W-M; x += 60) {
      g += barb(x, M+10, 0);
      g += barb(x, H-M-10, 180);
    }
    for (let y = M+40; y < H-M; y += 60) {
      g += barb(M+10, y, -90);
      g += barb(W-M-10, y, 90);
    }
    return g;
  },
  crack: (deck) => {
    // witch_east: radiating fracture lines from corners
    let g = frameBox();
    const crack = (x, y, rot) => `<g transform="translate(${x} ${y}) rotate(${rot})">${path('M0,0 L40,12 M0,0 L36,-6 M0,0 L24,24', { sw: 1, stroke: deck.accent, opacity: 0.7 })}</g>`;
    g += crack(M+12, M+12, 0) + crack(W-M-12, M+12, 90) + crack(W-M-12, H-M-12, 180) + crack(M+12, H-M-12, 270);
    return g;
  },
  curtain: (deck) => {
    // wizard: theatrical curtain pleats
    let g = frameBox();
    const pleat = (x) => path(`M${x},${M+12} Q${x+6},${M+30} ${x},${M+50}`, { sw: 1.5, stroke: deck.accent, opacity: 0.85 });
    for (let x = M+50; x < W-M; x += 24) g += pleat(x);
    // rope ties at top corners
    g += circle(M+30, M+50, 5, { fill: deck.accent, stroke: C.ink, sw: 1 });
    g += circle(W-M-30, M+50, 5, { fill: deck.accent, stroke: C.ink, sw: 1 });
    return g;
  },
  crop: (deck) => {
    // munchkins: crop-row grid + field stakes
    let g = frameBox();
    for (let x = M+40; x < W-M-20; x += 80) {
      g += rect(x, H-M-18, 8, 14, { fill: deck.accent, fillOpacity: 0.6, sw: 1 });
      g += rect(x, M+4, 8, 14, { fill: deck.accent, fillOpacity: 0.6, sw: 1 });
    }
    for (let y = M+60; y < H-M; y += 80) {
      g += line(M+4, y, M+18, y, { sw: 1, stroke: deck.accent });
      g += line(W-M-18, y, W-M-4, y, { sw: 1, stroke: deck.accent });
    }
    return g;
  },
  wing: (deck) => {
    // winged_monkeys: swept-wing arcs
    let g = frameBox();
    const wing = (x, y, rot) => `<g transform="translate(${x} ${y}) rotate(${rot})">${path('M0,0 Q12,-6 24,0 Q14,4 0,0', { sw: 1, stroke: deck.accent, fill: deck.accent, fillOpacity: 0.3 })}</g>`;
    for (let x = M+60; x < W-M-24; x += 70) {
      g += wing(x, M+12, 0);
      g += wing(x, H-M-12, 180);
    }
    return g;
  },
  fuse: (deck) => {
    // kalidah: mirrored fused-skull motif top/bottom
    let g = frameBox();
    const fused = (cx, cy) => `${circle(cx-10, cy, 7, {sw:1.5, stroke:deck.accent})}${circle(cx+10, cy, 7, {sw:1.5, stroke:deck.accent})}${line(cx, cy-7, cx, cy+7, {sw:1, stroke:deck.accent})}`;
    g += fused(W/2, M+18) + fused(W/2, H-M-18);
    g += fused(M+30, H/2) + fused(W-M-30, H/2);
    return g;
  },
  vein: (deck) => {
    // poppy_field: vein-loop + seed-pod nodes
    let g = frameBox();
    const node = (cx, cy) => `${circle(cx, cy, 4, {fill:deck.accent, stroke:'none'})}${circle(cx, cy, 7, {sw:0.75, stroke:deck.accent, opacity:0.5})}`;
    // wavy line along borders
    g += path(`M${M+30},${M+12} Q${W/4},${M+22} ${W/2},${M+12} Q${3*W/4},${M+2} ${W-M-30},${M+12}`, { sw: 1, stroke: deck.accent, opacity: 0.7 });
    g += path(`M${M+30},${H-M-12} Q${W/4},${H-M-22} ${W/2},${H-M-12} Q${3*W/4},${H-M-2} ${W-M-30},${H-M-12}`, { sw: 1, stroke: deck.accent, opacity: 0.7 });
    [W/4, W/2, 3*W/4].forEach(x => { g += node(x, M+12); g += node(x, H-M-12); });
    return g;
  },
};

export const deckFrame = (deckKey) => frames[DECKS[deckKey].frame](DECKS[deckKey]);

// ── Sigils (60×60 deck icon, drawn at top-left of header) ──
const sigils = {
  // each function takes accent color, returns 60x60 sigil centered in viewBox 60x60
  lion: (a) => `${circle(30,30,24,{sw:2})}${path('M14,32 Q30,18 46,32 Q46,40 30,38 Q14,40 14,32 Z',{sw:1.5,fill:a,fillOpacity:0.4})}${circle(30,28,2,{fill:C.ink,stroke:'none'})}${path('M30,4 L26,12 M30,4 L34,12 M6,30 L14,30 M54,30 L46,30 M30,56 L26,48 M30,56 L34,48 M12,12 L18,18 M48,12 L42,18 M12,48 L18,42 M48,48 L42,42',{sw:1.5})}`,
  tin: (a) => `${path('M30,8 L34,18 L44,18 L36,26 L40,38 L30,32 L20,38 L24,26 L16,18 L26,18 Z',{sw:1.5,fill:a,fillOpacity:0.5})}${line(8,52,52,8,{sw:2,stroke:C.ink})}${circle(30,30,3,{fill:C.bone,stroke:C.ink,sw:1})}`,
  straw: (a) => `${path('M8,28 L52,28 L46,20 L14,20 Z',{sw:1.5,fill:a,fillOpacity:0.4})}${line(14,28,14,52,{sw:1.5})}${line(46,28,46,52,{sw:1.5})}${line(8,52,52,52,{sw:1.5})}${line(20,38,40,38,{sw:1.5,stroke:C.ink})}${line(20,42,40,38,{sw:1.5,stroke:C.ink})}${line(40,42,20,38,{sw:1.5,stroke:C.ink})}`,
  shoe: (a) => `${circle(30,30,26,{sw:1,dash:'3 3',stroke:C.ink})}${path('M16,38 Q22,28 30,30 Q42,32 44,38 Q44,44 30,44 Q18,44 16,38 Z',{sw:1.5,fill:a,fillOpacity:0.5})}${line(30,4,30,12,{sw:1.5})}${line(30,48,30,56,{sw:1.5})}${line(4,30,12,30,{sw:1.5})}${line(48,30,56,30,{sw:1.5})}`,
  lens: (a) => `${circle(30,30,22,{sw:2})}${circle(30,30,14,{sw:1,stroke:a})}${path('M16,30 Q30,12 44,30 Q30,48 16,30 Z',{sw:1,fill:a,fillOpacity:0.3})}${path('M30,18 L26,30 L30,42',{sw:1})}`,
  orb: (a) => `${circle(30,30,22,{fill:C.ink,sw:1.5})}${path('M48,12 L26,34',{sw:2,stroke:a,linecap:'round'})}${path('M22,28 Q24,30 26,28',{sw:1,stroke:a})}${circle(34,26,3,{fill:C.bone,stroke:'none'})}`,
  crush: (a) => `${path('M14,42 L30,16 L46,42 Z',{sw:2,fill:a,fillOpacity:0.4})}${line(30,42,30,52,{sw:1.5})}${path('M10,48 L20,42 M50,48 L40,42 M30,48 L30,42',{sw:1,stroke:a})}${line(20,30,40,30,{sw:1,stroke:C.ink,dash:'2 2'})}`,
  face: (a) => `${path('M16,18 Q30,8 44,18 Q44,38 30,42 Q16,38 16,18 Z',{sw:1.5,fill:a,fillOpacity:0.4})}${circle(24,24,2,{fill:C.ink,stroke:'none'})}${circle(36,24,2,{fill:C.ink,stroke:'none'})}${path('M22,32 Q30,36 38,32',{sw:1.5})}${rect(28,46,4,8,{fill:C.ink,stroke:'none'})}`,
  three: (a) => `${rect(8,20,12,32,{sw:1.5,fill:a,fillOpacity:0.4})}${rect(24,16,12,36,{sw:1.5,fill:a,fillOpacity:0.4})}${rect(40,22,12,30,{sw:1.5,fill:a,fillOpacity:0.4})}${path('M4,8 L4,12 L56,12 L56,8',{sw:1.5})}`,
  cap: (a) => `${path('M8,28 Q30,12 52,28 L52,40 L8,40 Z',{sw:1.5,fill:a,fillOpacity:0.5})}${line(16,40,16,48,{sw:1})}${line(30,40,30,48,{sw:1})}${line(44,40,44,48,{sw:1})}${path('M22,20 L24,16 M30,18 L30,12 M38,20 L36,16',{sw:1})}`,
  fused: (a) => `${circle(20,30,14,{sw:2,fill:a,fillOpacity:0.3})}${circle(40,30,14,{sw:2,fill:a,fillOpacity:0.3})}${line(30,16,30,44,{sw:1.5,stroke:C.ink})}${circle(18,28,1.5,{fill:C.ink,stroke:'none'})}${circle(42,28,1.5,{fill:C.ink,stroke:'none'})}${path('M14,38 L20,38 M40,38 L46,38',{sw:1})}`,
  poppy: (a) => `${path('M30,8 Q22,18 24,28 Q14,26 12,36 Q22,40 30,36 Q38,40 48,36 Q46,26 36,28 Q38,18 30,8 Z',{sw:1.5,fill:a,fillOpacity:0.4})}${circle(30,30,3,{fill:C.ink,stroke:'none'})}${path('M30,38 Q26,46 28,54 M30,38 Q34,46 32,54',{sw:1,stroke:a})}`,
};

export const deckSigil = (deckKey) => sigils[DECKS[deckKey].sigil](DECKS[deckKey].accent);

// ── Interloper marks (small stamps in ritual strip) ────────
const interMarks = {
  lion: (a) => `${path('M0,12 L10,4 L20,10 L14,18 Z', {sw:1.5, fill:C.ink, stroke:C.ink})}${path('M14,18 L20,28 M16,16 L24,22', {sw:1.5})}`,
  tin_man: (a) => `${rect(2,8,8,4,{fill:C.ink,stroke:'none'})}${circle(14,10,3,{fill:'none',sw:1.5})}${rect(14,8,4,4,{fill:C.ink,stroke:'none'})}${rect(2,16,16,4,{fill:'none',sw:1.5})}`,
  scarecrow: (a) => `${path('M2,16 Q8,8 14,4 Q20,10 16,18 Q10,22 2,16 Z',{sw:1,fill:a,fillOpacity:0.5})}${line(2,16,16,18,{sw:1})}`,
  dorothy: (a) => `${circle(10,12,8,{sw:1.5})}${path('M2,12 L18,12 M10,4 L10,20',{sw:1,dash:'2 2'})}`,
  glinda: (a) => `${line(2,18,18,2,{sw:1.5})}${circle(18,2,2,{fill:C.ink,stroke:'none'})}${circle(2,18,2,{fill:'none',sw:1.5})}`,
  witch_west: (a) => `${path('M2,18 L18,2 L14,2 M18,2 L18,6',{sw:1.5})}${path('M14,8 Q16,10 14,12',{sw:1})}`,
  witch_east: (a) => `${polygon('10,2 18,18 2,18',{sw:1.5,fill:a,fillOpacity:0.4})}${line(10,8,10,18,{sw:1})}`,
  wizard: (a) => `${polygon('10,2 18,8 16,18 4,18 2,8',{sw:1.5,fill:a,fillOpacity:0.5})}`,
  munchkins: (a) => `${circle(4,10,2.5,{fill:C.ink,stroke:'none'})}${circle(10,10,2.5,{fill:C.ink,stroke:'none'})}${circle(16,10,2.5,{fill:C.ink,stroke:'none'})}${line(2,16,18,16,{sw:1})}`,
  winged_monkeys: (a) => `${path('M2,18 Q4,10 10,4 Q16,10 18,18 Q12,16 10,18 Q8,16 2,18 Z',{sw:1.5,fill:a,fillOpacity:0.4})}`,
  kalidah: (a) => `${path('M2,4 L8,10 L2,16 M18,4 L12,10 L18,16',{sw:1.5})}${line(8,10,12,10,{sw:1.5})}`,
  poppy_field: (a) => `${path('M4,18 Q4,10 10,8 Q16,10 16,18 Z',{sw:1.5,fill:a,fillOpacity:0.4})}${rect(8,2,4,8,{fill:C.ink,stroke:'none'})}`,
};

export const interloperMark = (deckKey) => interMarks[deckKey](DECKS[deckKey].accent);

// ── Card structure: header, ritual strip, wrap ─────────────
export const header = (deckKey, romanIdx) => {
  const deck = DECKS[deckKey];
  return `<g>
    ${rect(0, 0, W, SCENE_Y, { fill: C.bone, stroke: 'none' })}
    ${line(0, SCENE_Y, W, SCENE_Y, { sw: 2, stroke: C.ink })}
    ${line(0, SCENE_Y-6, W, SCENE_Y-6, { sw: 0.75, stroke: C.ink, opacity: 0.5 })}
    <!-- sigil left -->
    <g transform="translate(50, 50)">${deckSigil(deckKey)}</g>
    <!-- deck name center -->
    ${txt(W/2, 70, deck.name, { anchor: 'middle', size: 16, ls: 5, weight: 'bold' })}
    ${txt(W/2, 95, '— ORACLE DRAW —', { anchor: 'middle', size: 9, ls: 3, opacity: 0.55 })}
    <!-- card index right -->
    ${rect(W-110, 30, 60, 80, { sw: 1.5, fill: 'none' })}
    ${rect(W-110, 30, 60, 18, { fill: C.ink, stroke: 'none' })}
    ${txt(W-80, 43, 'IDX', { anchor: 'middle', size: 8, fill: C.bone, ls: 1.5, weight: 'bold' })}
    ${txt(W-80, 90, ROMAN[romanIdx], { anchor: 'middle', size: 32, weight: 'bold' })}
    <!-- minor tick row above scene line -->
    ${Array.from({length: 8}, (_,i) => txt(120 + i*64, 130, ROMAN[i+1], { anchor:'middle', size:9, opacity: i+1===romanIdx ? 1 : 0.3, weight: i+1===romanIdx ? 'bold' : 'normal', fill: i+1===romanIdx ? deck.accent : C.ink })).join('')}
    ${line(108, 138, W-108, 138, { sw: 0.5, opacity: 0.4 })}
  </g>`;
};

export const ritualStrip = (deckKey, title, ladderIdx, cue) => {
  const deck = DECKS[deckKey];
  const ladderName = LADDER[ladderIdx].toUpperCase();
  return `<g transform="translate(0, ${STRIP_Y})">
    ${rect(0, 0, W, STRIP_H, { fill: C.bone, stroke: 'none' })}
    ${line(0, 0, W, 0, { sw: 2, stroke: C.ink })}
    ${line(0, 6, W, 6, { sw: 0.75, stroke: C.ink, opacity: 0.5 })}
    <!-- ladder badge -->
    ${rect(40, 30, 200, 24, { sw: 1, stroke: C.ink, fill: deck.accent, fillOpacity: 0.25 })}
    ${txt(140, 47, `[${ladderName}]`, { anchor: 'middle', size: 11, ls: 3, weight: 'bold' })}
    <!-- title -->
    ${txt(W/2, 110, title.toUpperCase(), { anchor: 'middle', size: 28, weight: 'bold', ls: 2.5, font: 'Georgia, serif' })}
    ${line(W/2-160, 124, W/2+160, 124, { sw: 0.75, opacity: 0.5 })}
    <!-- cue line -->
    ${cue ? txt(W/2, 158, cue.toUpperCase(), { anchor: 'middle', size: 10, ls: 2, opacity: 0.65, style: 'italic' }) : ''}
    <!-- interloper mark + name -->
    <g transform="translate(40, 200)">${interloperMark(deckKey)}</g>
    ${txt(70, 215, deck.interloperName, { size: 9, ls: 2.5, weight: 'bold', opacity: 0.7 })}
    ${txt(W-40, 215, 'STAMPED — COMPLIANT', { anchor: 'end', size: 8, ls: 2, opacity: 0.5, fill: deck.accent })}
    <!-- bottom stamp -->
    ${stamp(W-70, 215, 22, 'OZ', { rot: -12, color: deck.accent, fillOpacity: 0.1, fill: deck.accent })}
    <!-- spec line -->
    ${txt(40, 250, `UNIT REF: ${deckKey.toUpperCase().replace('_','-')}-${String(ladderIdx).padStart(2,'0')}`, { size: 8, ls: 2, opacity: 0.45 })}
    ${txt(W-40, 250, 'CLASSIFICATION: RITUAL', { anchor: 'end', size: 8, ls: 2, opacity: 0.45 })}
  </g>`;
};

export const wrap = ({ deckKey, idx, title, cue, scene }) => {
  const deck = DECKS[deckKey];
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" preserveAspectRatio="xMidYMid meet">
${rect(0, 0, W, H, { fill: C.bone, stroke: 'none' })}
${deckFrame(deckKey)}
${header(deckKey, idx)}
<g transform="translate(0, ${SCENE_Y})">${scene({ accent: deck.accent, secondary: deck.secondary, ink: C.ink, bone: C.bone, archive: C.archive, deckKey, idx })}</g>
${ritualStrip(deckKey, title, idx, cue)}
</svg>`;
};
