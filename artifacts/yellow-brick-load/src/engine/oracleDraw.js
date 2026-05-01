// YELLOW BRICK LOAD — Oracle Draw Engine
// Stat-bucketed card selection: reads the character's current wetware state,
// identifies the dominant bucket, and samples up to N cards from that pool.

import { oracleDecks } from '../data/oracleDecks.js'

// ── Bucket priority lists per character ─────────────────────────────────────
// Evaluated in order — first matching check wins. 'archive' always matches.
const BUCKET_PRIORITIES = {
  lion: [
    { bucket: 'signal-bleed', check: (s) => s.desync >= 5 },
    { bucket: 'kinetic',      check: (s) => s.vibration >= 7 },
    { bucket: 'compliance',   check: (s) => s.load >= 20 },
    { bucket: 'archive',      check: () => true },
  ],
  tin_man: [
    { bucket: 'signal-bleed', check: (s) => s.desync >= 5 },
    { bucket: 'corrosion',    check: (s) => s.corrosion >= 8 },
    { bucket: 'hydraulic',    check: (s) => s.lubrication >= 5 },
    { bucket: 'archive',      check: () => true },
  ],
  scarecrow: [
    { bucket: 'signal-bleed', check: (s) => s.desync >= 5 },
    { bucket: 'scatter',      check: (s) => s.scatter >= 5 },
    { bucket: 'indexed',      check: (s) => s.compliance === 'high' },
    { bucket: 'archive',      check: () => true },
  ],
  dorothy: [
    { bucket: 'signal-bleed', check: (s) => s.desync >= 5 },
    { bucket: 'friction',     check: (s) => s.rubyFriction >= 5 || s.displacement >= 5 },
    { bucket: 'signal',       check: (s) => s.signalStrength >= 3 },
    { bucket: 'archive',      check: () => true },
  ],
}

// ── Public API ───────────────────────────────────────────────────────────────

export function getActiveBucket(character, state) {
  const priorities = BUCKET_PRIORITIES[character]
  if (!priorities) return 'archive'
  for (const { bucket, check } of priorities) {
    if (check(state)) return bucket
  }
  return 'archive'
}

export function sampleOracleCards(character, state, n = 5) {
  const deck = oracleDecks[character]
  if (!deck?.cards?.length) return []
  const bucket = getActiveBucket(character, state)
  const pool = deck.cards.filter((c) => c.category === bucket)
  // Fall back to full deck if the bucket has fewer than n cards
  const source = pool.length >= n ? pool : deck.cards
  return shuffled(source).slice(0, n)
}

// Derives the outcome passage ID from a card ID.
// 'lion_09' → 'LION_ORACLE_9', 'tin_man_02' → 'TIN_MAN_ORACLE_2'
export function passageIdFromCardId(cardId) {
  const match = cardId.match(/^(.+)_(\d+)$/)
  if (!match) return null
  const [, deckKey, num] = match
  return `${deckKey.toUpperCase()}_ORACLE_${parseInt(num, 10)}`
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function shuffled(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}
