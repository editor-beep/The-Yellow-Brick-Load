import { useEffect, useMemo, useRef, useState } from 'react'
import { useGameStore } from '../engine/store.js'
import { cardSvgs } from '../assets/cards/index.js'
import { interloperFor } from '../data/oracleInterlopers.js'

/**
 * OracleCard — full-screen overlay that displays a drawn oracle card with
 * a three-beat ritual reveal:
 *
 *   1. shuffle  — a brief deck-flutter (~380ms)
 *   2. flicker  — static / glyph noise over the card silhouette (~350ms)
 *   3. revealed — canonical SVG art + interloper stamp + body copy
 *
 * The reveal is fully driven by the existing `oracleCard` store flag —
 * no new persistent state. Per-draw cosmetic variance (stamp placement,
 * jitter phase, ink-bleed strength, flicker timing) is computed once
 * per card and applied as inline style; it never alters card geometry
 * or semantics.
 *
 * Honors `prefers-reduced-motion: reduce` by skipping straight to the
 * revealed phase with no animations.
 *
 * Missing-asset cards play the same ritual and resolve to a placeholder
 * "REDACTED" face so the overlay never errors out on unknown ids.
 */
export default function OracleCard() {
  const { oracleCard, dismissOracleCard, character } = useGameStore()

  const reduceMotion = useMemo(prefersReducedMotion, [])
  const [phase, setPhase] = useState(reduceMotion ? 'revealed' : 'shuffle')
  const variance = useMemo(makeVariance, [oracleCard?.id])
  const dismissRef = useRef(null)

  // Drive the reveal sequence whenever a new card arrives.
  useEffect(() => {
    if (!oracleCard) {
      setPhase(reduceMotion ? 'revealed' : 'shuffle')
      return undefined
    }
    if (reduceMotion) {
      setPhase('revealed')
      return undefined
    }
    setPhase('shuffle')
    const t1 = setTimeout(() => setPhase('flicker'), 380)
    const t2 = setTimeout(() => setPhase('revealed'), 730)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [oracleCard?.id, reduceMotion])

  // Move keyboard focus to the dismiss button as soon as it appears so
  // ritual completion advances accessibility focus rather than stranding
  // it on the underlying passage.
  useEffect(() => {
    if (phase !== 'revealed') return
    const node = dismissRef.current
    if (!node) return
    const id = window.requestAnimationFrame(() => {
      try { node.focus({ preventScroll: true }) } catch { /* noop */ }
    })
    return () => window.cancelAnimationFrame(id)
  }, [phase, oracleCard?.id])

  if (!oracleCard) return null

  const { name, cardText, ritualText, effect, surreality, id } = oracleCard
  const artUrl = cardSvgs[id]
  const interloper = interloperFor(id) || { name: 'Bureau', stamp: 'OZ-RGSTR' }
  const effectLabel = describeEffect(effect)
  const isRevealed = phase === 'revealed'

  return (
    <div
      className="oracle-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={`Oracle card: ${name}`}
      data-phase={phase}
    >
      <OracleSvgFilters />

      <div className="oracle-card">
        <div className="oracle-card-header">
          <span className="oracle-deck-label">
            [ ORACLE RITUAL — {character?.toUpperCase() ?? 'UNKNOWN'} ]
          </span>
          {isRevealed && surreality !== undefined && (
            <span className="oracle-surreality" title="Surreality index">
              SURREALITY: {surreality}/10
            </span>
          )}
        </div>

        <div
          className="oracle-card-art"
          data-phase={phase}
          data-fallback={artUrl ? 'false' : 'true'}
          style={{
            ['--ink-bleed']: variance.inkBleedOpacity,
            ['--card-tilt']: `${variance.cardTilt}deg`,
          }}
          aria-hidden="true"
        >
          {phase === 'shuffle' && <ShuffleBurst />}
          {phase === 'flicker' && (
            <FlickerLayer
              flickerDelay={variance.flickerDelay}
              fallback={!artUrl}
            />
          )}
          {isRevealed && (
            <>
              {artUrl ? (
                <img
                  className="oracle-card-art__image"
                  src={artUrl}
                  alt=""
                  aria-hidden="true"
                />
              ) : (
                <PlaceholderCard interloperName={interloper.name} />
              )}
              <div className="oracle-card-art__bleed" />
              <div
                className="oracle-card-art__stamp"
                style={{
                  ['--stamp-transform']: `translate(${variance.stampOffsetX}px, ${variance.stampOffsetY}px) rotate(${variance.stampRotate}deg)`,
                }}
              >
                <InterloperStamp code={interloper.stamp} />
              </div>
            </>
          )}
        </div>

        {isRevealed && (
          <>
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
              ref={dismissRef}
              type="button"
              className="oracle-dismiss"
              onClick={dismissOracleCard}
            >
              <span className="choice-arrow">▸</span>
              [ ACKNOWLEDGE — CONTINUE ]
            </button>
          </>
        )}
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────────────────
 * Reveal-phase sub-components
 * ──────────────────────────────────────────────────────────────────────── */

function ShuffleBurst() {
  return (
    <div className="oracle-shuffle-burst" aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => (
        <span
          key={i}
          className={`oracle-shuffle-card oracle-shuffle-card--${i}`}
        />
      ))}
    </div>
  )
}

function FlickerLayer({ flickerDelay, fallback }) {
  return (
    <div
      className="oracle-flicker-layer"
      aria-hidden="true"
      data-fallback={fallback ? 'true' : 'false'}
      style={{ ['--flicker-delay']: `${flickerDelay}s` }}
    >
      <div className="oracle-flicker-noise" />
      <div className="oracle-flicker-glyph">
        <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
          <text
            x="50"
            y="62"
            textAnchor="middle"
            fontSize="44"
            fontFamily="Georgia, serif"
            fill="#F2EBDD"
            opacity="0.85"
          >
            ?
          </text>
        </svg>
      </div>
    </div>
  )
}

function InterloperStamp({ code }) {
  return (
    <svg
      className="oracle-card-art__stamp-svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <circle cx="50" cy="50" r="44" fill="none" stroke="#9E1B1B" strokeWidth="2.2" />
      <circle cx="50" cy="50" r="36" fill="none" stroke="#9E1B1B" strokeWidth="0.7" opacity="0.7" />
      <text
        x="50"
        y="48"
        textAnchor="middle"
        fontSize="11"
        fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
        fontWeight="700"
        fill="#9E1B1B"
        letterSpacing="0.08em"
      >
        {code}
      </text>
      <text
        x="50"
        y="62"
        textAnchor="middle"
        fontSize="6"
        fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
        fill="#9E1B1B"
        letterSpacing="0.18em"
        opacity="0.85"
      >
        FILED · OZ
      </text>
    </svg>
  )
}

function PlaceholderCard({ interloperName }) {
  return (
    <svg
      className="oracle-card-art__image"
      viewBox="0 0 720 1080"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <rect width="720" height="1080" fill="#F2EBDD" />
      <rect x="14" y="14" width="692" height="1052" fill="none" stroke="#141414" strokeWidth="2.5" />
      <rect x="40" y="40" width="640" height="120" fill="#141414" />
      <text
        x="360"
        y="118"
        textAnchor="middle"
        fontSize="34"
        fontFamily="Georgia, serif"
        fill="#F2EBDD"
        letterSpacing="0.16em"
      >
        REDACTED
      </text>
      <line x1="40" y1="200" x2="680" y2="200" stroke="#141414" strokeWidth="1.2" opacity="0.4" />
      <text
        x="360"
        y="500"
        textAnchor="middle"
        fontSize="48"
        fontFamily="Georgia, serif"
        fill="#141414"
        letterSpacing="0.12em"
      >
        [ FILE WITHHELD ]
      </text>
      <text
        x="360"
        y="560"
        textAnchor="middle"
        fontSize="22"
        fontFamily="ui-monospace, SFMono-Regular, monospace"
        fill="#8E8A83"
        letterSpacing="0.18em"
      >
        RECORD UNAVAILABLE
      </text>
      <line x1="40" y1="900" x2="680" y2="900" stroke="#141414" strokeWidth="1.2" opacity="0.4" />
      {interloperName && (
        <text
          x="360"
          y="970"
          textAnchor="middle"
          fontSize="18"
          fontFamily="ui-monospace, SFMono-Regular, monospace"
          fill="#8E8A83"
          letterSpacing="0.18em"
        >
          CUSTODY: {interloperName.toUpperCase()}
        </text>
      )}
    </svg>
  )
}

/**
 * Inline SVG filter defs used by the card art for line-jitter.
 * Defined once per overlay so multiple openings don't accumulate.
 */
function OracleSvgFilters() {
  return (
    <svg
      className="oracle-svg-filters"
      width="0"
      height="0"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <filter id="oracle-jitter" x="-2%" y="-2%" width="104%" height="104%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.012 0.018"
            numOctaves="2"
            seed="3"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="1.6"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>
  )
}

/* ─────────────────────────────────────────────────────────────────────────
 * Helpers
 * ──────────────────────────────────────────────────────────────────────── */

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
    default:
      return fx.type.replace(/([a-z])([A-Z])/g, '$1 $2').toUpperCase()
  }
}

function r(min, max) {
  return min + Math.random() * (max - min)
}

function makeVariance() {
  return {
    stampRotate: r(-12, 12),
    stampOffsetX: r(-10, 10),
    stampOffsetY: r(-10, 10),
    inkBleedOpacity: r(0.05, 0.12),
    flickerDelay: r(0, 0.12),
    cardTilt: r(-0.6, 0.6),
  }
}

function prefersReducedMotion() {
  if (typeof window === 'undefined' || !window.matchMedia) return false
  try {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  } catch {
    return false
  }
}
