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
 * ink-bleed strength, flicker timing, card tilt) is computed once per
 * card and applied as inline style; it never alters card geometry or
 * semantics.
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
  const cardRef = useRef(null)
  const overlayRef = useRef(null)
  const [artFailed, setArtFailed] = useState(false)
  const [isOverflowing, setIsOverflowing] = useState(false)

  // Tracks the element that held keyboard focus immediately before the
  // overlay opened, so we can hand focus back when the player dismisses
  // the card. Captured synchronously via a zustand subscription (see
  // below) because by the time any React effect fires, the underlying
  // choice button may already have unmounted.
  const previousFocusRef = useRef(null)

  // Subscribe to oracleCard transitions outside of React's commit cycle
  // so we can capture/restore keyboard focus at the right moment:
  //   • opening (null → card): grab document.activeElement *before* any
  //     re-render swaps the passage out from under us, then blur it so
  //     Tab can't continue navigating the hidden passage during the
  //     brief window between this synchronous transition and React
  //     committing the overlay (the modal Tab-trap can't query
  //     focusables until overlayRef is populated).
  //   • closing (card → null): restore focus to the saved node
  //     immediately, *before* React unmounts the dismiss button. This
  //     avoids a one-frame window where activeElement falls back to
  //     document.body — which was previously visible to keyboard users
  //     who dismissed via Escape (the click path is masked because
  //     synthetic clicks already pump a frame). A second pass on the
  //     next animation frame catches the rare case where the saved
  //     node wasn't yet focusable at sync-time (e.g. mid-transition).
  useEffect(() => {
    return useGameStore.subscribe((state, prev) => {
      const opening = !!state.oracleCard && !prev.oracleCard
      const closing = !state.oracleCard && !!prev.oracleCard
      if (opening) {
        const active = typeof document !== 'undefined' ? document.activeElement : null
        previousFocusRef.current = isRestorableElement(active) ? active : null
        if (active && active !== document.body && typeof active.blur === 'function') {
          try { active.blur() } catch { /* noop */ }
        }
      } else if (closing) {
        const node = previousFocusRef.current
        previousFocusRef.current = null
        restoreFocus(node)
        if (typeof window !== 'undefined') {
          window.requestAnimationFrame(() => {
            // Only re-attempt if focus drifted back to body (e.g. the
            // dismiss button unmounted *after* our sync restore and its
            // blur was the most recent focus event).
            if (typeof document !== 'undefined' && document.activeElement === document.body) {
              restoreFocus(node)
            }
          })
        }
      }
    })
  }, [])

  // Reset the runtime-load failure flag whenever a new card is drawn,
  // so a previous draw's broken asset doesn't poison the next ritual.
  useEffect(() => {
    setArtFailed(false)
  }, [oracleCard?.id])

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

  // Modal keyboard contract:
  //   • Escape dismisses the overlay (mirrors the acknowledge button and
  //     therefore the existing focus-restoration behavior).
  //   • Tab / Shift-Tab cycle focus only among focusable descendants of
  //     the overlay so it cannot land on the underlying passage choices,
  //     which remain in the DOM behind the modal.
  //
  // The listener is installed exactly once for the lifetime of the
  // OracleCard component (which itself lives for the lifetime of the
  // app) and consults the store on every keystroke. Installing it via
  // an oracleCard-keyed effect would leave a render-flush window
  // immediately after `setOracleCard` during which the new listener
  // isn't bound yet — so a keypress fired in the same task could
  // escape to the underlying passage. Reading from the store inside
  // the handler closes that race.
  useEffect(() => {
    const handleKeyDown = (event) => {
      const { oracleCard: currentCard, dismissOracleCard: dismiss } =
        useGameStore.getState()
      if (!currentCard) return
      if (event.defaultPrevented) return
      if (event.key === 'Escape' || event.key === 'Esc') {
        event.preventDefault()
        event.stopPropagation()
        dismiss()
        return
      }
      if (event.key !== 'Tab') return
      const overlay = overlayRef.current
      // No overlay rendered yet (race between store update and React
      // commit) or no focusable targets yet (shuffle/flicker phases):
      // swallow Tab outright so focus cannot escape onto the hidden
      // passage.
      if (!overlay) {
        event.preventDefault()
        return
      }
      const focusables = getFocusableElements(overlay)
      if (focusables.length === 0) {
        event.preventDefault()
        return
      }
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      const active = typeof document !== 'undefined' ? document.activeElement : null
      const insideOverlay = !!active && overlay.contains(active)
      if (event.shiftKey) {
        if (!insideOverlay || active === first) {
          event.preventDefault()
          try { last.focus({ preventScroll: true }) } catch { /* noop */ }
        }
      } else if (!insideOverlay || active === last) {
        event.preventDefault()
        try { first.focus({ preventScroll: true }) } catch { /* noop */ }
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Detect whether the card content actually overflows its scroll
  // container. The mobile bottom-fade affordance is only painted when
  // it does — content that fits should not get a phantom shadow.
  // We measure once per reveal and again on viewport resize / font load.
  useEffect(() => {
    if (phase !== 'revealed') {
      setIsOverflowing(false)
      return undefined
    }
    const node = cardRef.current
    if (!node) return undefined

    const measure = () => {
      // 1px tolerance: scrollHeight is occasionally fractional in
      // Safari and we don't want to flicker the fade for sub-pixel
      // overflow.
      setIsOverflowing(node.scrollHeight - node.clientHeight > 1)
    }

    // Defer to after layout so revealed children have measured.
    const rafId = window.requestAnimationFrame(measure)

    let resizeObs = null
    if (typeof ResizeObserver !== 'undefined') {
      resizeObs = new ResizeObserver(measure)
      resizeObs.observe(node)
    } else {
      window.addEventListener('resize', measure)
    }
    return () => {
      window.cancelAnimationFrame(rafId)
      if (resizeObs) resizeObs.disconnect()
      else window.removeEventListener('resize', measure)
    }
  }, [phase, oracleCard?.id])

  if (!oracleCard) return null

  const { name, cardText, ritualText, effect, surreality, id } = oracleCard
  const rawArtUrl = cardSvgs[id]
  const artUrl = artFailed ? null : rawArtUrl
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
      ref={overlayRef}
    >
      <div
        className={`oracle-card${isOverflowing ? ' is-overflowing' : ''}`}
        ref={cardRef}
      >
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
                  onError={() => setArtFailed(true)}
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

/**
 * True if `node` is a real, focusable HTMLElement we can plausibly hand
 * focus back to later. We deliberately reject `document.body` because it
 * is the default activeElement when nothing real is focused — restoring
 * to it would be a no-op that strands keyboard users.
 */
function isRestorableElement(node) {
  return (
    !!node &&
    typeof node === 'object' &&
    node.nodeType === 1 &&
    typeof document !== 'undefined' &&
    node !== document.body &&
    typeof node.focus === 'function'
  )
}

/**
 * Restore keyboard focus after the overlay closes.
 *
 * Tries the originally-focused element first; if it's gone, hidden, or
 * disabled, falls back to the passage container (which carries
 * `tabIndex={-1}` so it can receive programmatic focus). All focus
 * calls use `preventScroll` so we never jump the viewport.
 */
function restoreFocus(node) {
  if (typeof document === 'undefined') return
  const usable =
    node &&
    document.contains(node) &&
    typeof node.focus === 'function' &&
    !node.disabled &&
    typeof node.getClientRects === 'function' &&
    node.getClientRects().length > 0
  if (usable) {
    try { node.focus({ preventScroll: true }) } catch { /* noop */ }
    return
  }
  const fallback = document.querySelector('.passage-wrapper')
  if (fallback && typeof fallback.focus === 'function') {
    try { fallback.focus({ preventScroll: true }) } catch { /* noop */ }
  }
}

/**
 * Collect every element inside `root` that is plausibly focusable via
 * keyboard navigation. Used by the modal Tab-trap to determine the
 * boundaries it should cycle focus between.
 *
 * The selector matches the standard tabbable element types (links,
 * form controls, summary, content-editables, anything with an explicit
 * non-negative tabindex) and the visibility filter rejects elements
 * that are display:none / visibility:hidden / hidden-attr — those can
 * be in the DOM during reveal phase transitions but should never
 * receive focus.
 */
function getFocusableElements(root) {
  if (!root || typeof root.querySelectorAll !== 'function') return []
  const selector = [
    'a[href]',
    'area[href]',
    'button:not([disabled])',
    'input:not([disabled]):not([type="hidden"])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    'summary',
    '[contenteditable=""]',
    '[contenteditable="true"]',
    '[tabindex]:not([tabindex="-1"])',
  ].join(',')
  return Array.from(root.querySelectorAll(selector)).filter((el) => {
    if (el.hasAttribute('disabled')) return false
    if (el.getAttribute('aria-hidden') === 'true') return false
    if (el.hidden) return false
    // getClientRects().length === 0 covers display:none and detached
    // subtrees; offsetParent is null for fixed-position descendants too,
    // so we prefer the rects check.
    if (typeof el.getClientRects === 'function' && el.getClientRects().length === 0) {
      return false
    }
    return true
  })
}

function prefersReducedMotion() {
  if (typeof window === 'undefined' || !window.matchMedia) return false
  try {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  } catch {
    return false
  }
}
