#!/usr/bin/env node
// YELLOW BRICK LOAD — Oracle Card Generator
// Produces 96 SVG cards under src/assets/cards/<deck>/<deck>-NN-<ladder>.svg

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { wrap, LADDER, DECKS } from './oracle-cards-framework.mjs';
import { allDecks } from './oracle-cards-data.mjs';
import { allDecks2 } from './oracle-cards-data2.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_ROOT = path.resolve(__dirname, '../src/assets/cards');

const decksByKey = { ...allDecks, ...allDecks2 };

const expectedDecks = Object.keys(DECKS);
const missingDecks = expectedDecks.filter(k => !decksByKey[k]);
if (missingDecks.length) {
  console.error('MISSING DECKS:', missingDecks);
  process.exit(1);
}

let totalCards = 0;
let totalBytes = 0;
let warnings = [];

for (const deckKey of expectedDecks) {
  const cards = decksByKey[deckKey];
  if (!Array.isArray(cards) || cards.length !== 8) {
    console.error(`Deck ${deckKey} expected 8 cards, got ${cards?.length}`);
    process.exit(1);
  }
  const dir = path.join(OUT_ROOT, deckKey);
  await fs.mkdir(dir, { recursive: true });

  for (let i = 0; i < 8; i++) {
    const card = cards[i];
    const idx = i + 1;
    const ladder = LADDER[idx];
    const fileSlug = deckKey.replaceAll('_', '-');
    const filename = `${fileSlug}-${String(idx).padStart(2, '0')}-${ladder}.svg`;
    const svg = wrap({
      deckKey,
      idx,
      title: card.title,
      cue: card.cue,
      scene: card.scene,
    });
    await fs.writeFile(path.join(dir, filename), svg);
    totalCards++;
    const bytes = Buffer.byteLength(svg, 'utf8');
    totalBytes += bytes;
    if (bytes > 120 * 1024) {
      warnings.push(`OVERSIZE: ${filename} = ${(bytes/1024).toFixed(1)} KB`);
    }
  }
  console.log(`✓ ${deckKey} — 8 cards`);
}

console.log(`\nTotal: ${totalCards} cards, ${(totalBytes/1024).toFixed(1)} KB total, avg ${(totalBytes/totalCards/1024).toFixed(1)} KB/card`);
if (warnings.length) {
  console.warn('\nWARNINGS:');
  warnings.forEach(w => console.warn('  ' + w));
}
if (totalCards !== 96) {
  console.error(`Expected 96 cards, got ${totalCards}`);
  process.exit(1);
}
console.log('\nDone.');
