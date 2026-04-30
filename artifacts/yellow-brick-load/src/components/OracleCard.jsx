import { useState, useEffect, useRef } from 'react'
import { useGameStore } from '../engine/store.js'
import { oracleDecks } from '../data/oracleDecks.js'

const ORACLE_SYMBOLS = ['☽', '⚯', '⌖', '✦', '⊕', '⋈', '⌬', '⌘', '⌒', '⚙', '⊗', '⊞', '⟁', '⌂', '⌚']

function generateSymbolGrid() {
  return Array.from({ length: 15 }, () =>
    ORACLE_SYMBOLS[Math.floor(Math.random() * ORACLE_SYMBOLS.length)]
  )
}

/**
 * OracleCard — full-screen overlay that displays a drawn oracle card.
 * Shown whenever store.oracleCard is non-null.
 * Dismissed via the store's dismissOracleCard action.
 *
 * Renders a 3-phase ritual draw sequence per the design spec:
 *   1. shuffle   — rapid glyph cycling (1200ms)
 *   2. interloper — character-specific administrator name flickers in (900ms)
 *   3. reveal    — card content with staggered entry animations
 */
export default function OracleCard() {
  const { oracleCard, dismissOracleCard, character } = useGameStore()
  const [phase, setPhase] = useState('shuffle')
  const [symbols, setSymbols] = useState(generateSymbolGrid)
  const cardRef = useRef(null)

  // Reset phase each time a new card appears
  useEffect(() => {
    if (!oracleCard) return
    setPhase('shuffle')
    setSymbols(generateSymbolGrid())
  }, [oracleCard])

  // Advance phases on a timer
  useEffect(() => {
    if (!oracleCard) return
    if (phase === 'shuffle') {
      const t = setTimeout(() => setPhase('interloper'), 1200)
      return () => clearTimeout(t)
    }
    if (phase === 'interloper') {
      const t = setTimeout(() => setPhase('reveal'), 900)
      return () => clearTimeout(t)
    }
  }, [phase, oracleCard])

  // Cycle symbols rapidly during shuffle phase
  useEffect(() => {
    if (phase !== 'shuffle') return
    const id = setInterval(() => setSymbols(generateSymbolGrid()), 80)
    return () => clearInterval(id)
  }, [phase])

  // Move focus into the card when it reveals
  useEffect(() => {
    if (phase === 'reveal' && cardRef.current) {
      cardRef.current.focus()
    }
  }, [phase])

  if (!oracleCard) return null

  const { name, cardText, ritualText, effect, surreality } = oracleCard
  const deck = character ? oracleDecks[character] : null
  const interloper = deck?.interloper ?? 'INTERLOPER'
  const deckName = deck?.deckName ?? ''

  function describeEffect(fx) {
    if (!fx) return null
    switch (fx.type) {
      case 'addLoad':            return `LOAD +${fx.value}`
      case 'addDesync':          return `DESYNC +${fx.value}`
      case 'addSmudge':          return `SMUDGE +${fx.value}`
      case 'addOverrender':      return `OVERRENDER +${fx.value}`
      case 'setCompliance':      return `COMPLIANCE → ${fx.value.toUpperCase()}`
      case 'addVibration':       return `VIBRATION +${fx.value}`
      case 'addCorrosion':       return `CORROSION +${fx.value}`
      case 'addLubrication':     return `LUBRICATION +${fx.value}`
      case 'addSeizure':         return `SEIZURE +${fx.value}`
      case 'addUtility':         return `UTILITY +${fx.value}`
      case 'addScatter':         return `SCATTER +${fx.value}`
      case 'addStitchIntegrity': return `STITCH INTEGRITY +${fx.value}`
      case 'addDisplacement':    return `DISPLACEMENT +${fx.value}`
      case 'addWarrant':         return `WARRANT LEVEL +${fx.value}`
      case 'addSilverFriction':  return `SILVER FRICTION +${fx.value}`
      case 'addRefraction':      return `REFRACTION +${fx.value}`
      case 'addInsulation':      return `INSULATION +${fx.value}`
      case 'addObfuscation':     return `OBFUSCATION +${fx.value}`
      case 'addDesynctear':      return `DESYNCTEAR +${fx.value}`
      default:                   return fx.type.replace(/([a-z])([A-Z])/g, '$1 $2').toUpperCase()
    }
  }

  const effectLabel = describeEffect(effect)

  // ── Phase: shuffle ───────────────────────────────────────────
  if (phase === 'shuffle') {
    return (
      <div
        className="oracle-overlay oracle-overlay--pre"
        role="dialog"
        aria-modal="true"
        aria-live="polite"
        aria-label="Oracle ritual draw — shuffling"
      >
        <div className="oracle-shuffle">
          <div className="oracle-shuffle-label">[ RITUAL DRAW — SHUFFLING ]</div>
          <div className="oracle-symbol-grid" aria-hidden="true">
            {symbols.map((sym, i) => (
              <span
                key={i}
                className="oracle-symbol"
                style={{ '--i': i }}
              >
                {sym}
              </span>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // ── Phase: interloper ────────────────────────────────────────
  if (phase === 'interloper') {
    return (
      <div
        className="oracle-overlay oracle-overlay--pre"
        role="dialog"
        aria-modal="true"
        aria-live="polite"
        aria-label={`Oracle ritual draw — ${interloper} administers`}
      >
        <div className="oracle-interloper-display">
          <div className="oracle-interloper-label">[ ADMINISTERS ]</div>
          <div className="oracle-interloper-name">{interloper.toUpperCase()}</div>
          {deckName && (
            <div className="oracle-interloper-deck">{deckName}</div>
          )}
        </div>
      </div>
    )
  }

  // ── Phase: reveal ────────────────────────────────────────────
  return (
    <div
      className="oracle-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={`Oracle card: ${name}`}
    >
      <div
        className="oracle-card oracle-card--reveal"
        ref={cardRef}
        tabIndex={-1}
      >
        <div className="oracle-card-header">
          <span className="oracle-deck-label">[ ORACLE RITUAL — {character?.toUpperCase() ?? 'UNKNOWN'} ]</span>
          {surreality !== undefined && (
            <span className="oracle-surreality" title="Surreality index">
              SURREALITY: {surreality}/10
            </span>
          )}
        </div>

        <h2 className="oracle-card-name">{name}</h2>

        <div className="oracle-card-body">
          <p className="oracle-card-text">{cardText}</p>

          <div className="oracle-ritual-block">
            <span className="oracle-ritual-label">[ INTERLOPER ACTION ]</span>
            <p className="oracle-ritual-text">{ritualText}</p>
          </div>
        </div>

        {effectLabel && (
          <div className="oracle-effect-bar">
            <span className="oracle-effect-label">{effectLabel}</span>
          </div>
        )}

        <button
          type="button"
          className="oracle-dismiss"
          onClick={dismissOracleCard}
        >
          <span className="choice-arrow">▸</span>
          [ ACKNOWLEDGE — CONTINUE ]
        </button>
      </div>
    </div>
  )
}
