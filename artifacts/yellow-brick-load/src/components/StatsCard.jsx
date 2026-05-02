import { useEffect, useRef } from 'react'
import { useGameStore } from '../engine/store.js'

const CHAR_CONFIG = {
  lion: {
    unit: 'L-77', name: 'LION',
    stats: [{ key: 'vibration', label: 'VIB', threshold: 7, scale: 10 }],
  },
  tin_man: {
    unit: 'T-88', name: 'TIN MAN',
    stats: [
      { key: 'corrosion', label: 'COR', threshold: 10, scale: 14 },
      { key: 'seizure',   label: 'SZR', threshold: 5,  scale: 8  },
    ],
  },
  scarecrow: {
    unit: 'S-99', name: 'SCARECROW',
    stats: [
      { key: 'scatter',   label: 'SCT', threshold: 5, scale: 8 },
      { key: 'hollowing', label: 'HLW', threshold: 6, scale: 9 },
    ],
  },
  dorothy: {
    unit: 'D-01', name: 'DOROTHY',
    stats: [
      { key: 'displacement', label: 'DSP', threshold: 5, scale: 8 },
      { key: 'warrantLevel', label: 'WNT', threshold: 5, scale: 8 },
    ],
  },
  witch_west: {
    unit: 'W-66', name: 'WITCH WEST',
    stats: [
      { key: 'warrantLevel', label: 'WNT', threshold: 5, scale: 8  },
      { key: 'thermal',      label: 'THM', threshold: 8, scale: 12 },
    ],
  },
  witch_east: {
    unit: 'E-00', name: 'WITCH EAST',
    stats: [{ key: 'displacement', label: 'DSP', threshold: 3, scale: 5 }],
  },
  glinda: {
    unit: 'G-01', name: 'GLINDA',
    stats: [
      { key: 'refraction', label: 'RFR', threshold: 5, scale: 8 },
      { key: 'insulation', label: 'INS', threshold: 5, scale: 8 },
    ],
  },
  wizard: {
    unit: 'Z-00', name: 'WIZARD',
    stats: [{ key: 'obfuscation', label: 'OBF', threshold: 5, scale: 8 }],
  },
}

function StatRow({ value, threshold, scale, label }) {
  const pct     = Math.min(100, (value / scale) * 100)
  const isCrit  = value >= threshold
  const isWarn  = !isCrit && value >= threshold * 0.65
  const threshPct = Math.min(100, (threshold / scale) * 100)
  return (
    <div className="sc-stat">
      <span className="sc-stat__lbl">{label}</span>
      <div className="sc-stat__track">
        <div
          className={`sc-stat__fill${isCrit ? ' sc-stat__fill--crit' : isWarn ? ' sc-stat__fill--warn' : ''}`}
          style={{ width: `${pct}%` }}
        />
        <div className="sc-stat__thresh" style={{ left: `${threshPct}%` }} />
      </div>
      <span className={`sc-stat__val${isCrit ? ' sc-stat__val--crit' : ''}`}>{value}</span>
    </div>
  )
}

// ── Portraits ──────────────────────────────────────────────────────────────
// Each is an eerie bureaucratic document-style illustration in oracle card
// aesthetic: cream bg (#F2EBDD), dark strokes (#141414), amber (#D4A72C),
// danger red (#9E1B1B).

function LionPortrait() {
  return (
    <svg viewBox="0 0 80 100" xmlns="http://www.w3.org/2000/svg" className="sc-portrait__svg" aria-hidden="true">
      <rect width="80" height="100" fill="#F2EBDD"/>
      <rect x="2" y="2" width="76" height="96" fill="none" stroke="#141414" strokeWidth="1"/>
      {/* Mane halo */}
      <circle cx="40" cy="36" r="28" fill="#D4A72C" fillOpacity="0.08" stroke="#D4A72C" strokeWidth="0.75" strokeDasharray="2 3"/>
      {/* Head */}
      <ellipse cx="40" cy="36" rx="20" ry="22" fill="none" stroke="#141414" strokeWidth="1.5"/>
      {/* Hollow sockets */}
      <circle cx="32" cy="30" r="4" fill="#141414" fillOpacity="0.06" stroke="#141414" strokeWidth="1"/>
      <circle cx="48" cy="30" r="4" fill="#141414" fillOpacity="0.06" stroke="#141414" strokeWidth="1"/>
      <circle cx="32" cy="30" r="1.5" fill="#141414"/>
      <circle cx="48" cy="30" r="1.5" fill="#141414"/>
      {/* Open jaw cavity */}
      <path d="M24,44 Q40,58 56,44" fill="#D4A72C" fillOpacity="0.16" stroke="#141414" strokeWidth="1.5"/>
      <path d="M27,47 Q40,55 53,47" fill="none" stroke="#141414" strokeWidth="0.6" opacity="0.45"/>
      {/* Tremor lines */}
      <line x1="6"  y1="33" x2="16" y2="31" stroke="#9E1B1B" strokeWidth="1"    opacity="0.65"/>
      <line x1="6"  y1="38" x2="16" y2="37" stroke="#9E1B1B" strokeWidth="0.75" opacity="0.4"/>
      <line x1="64" y1="33" x2="74" y2="31" stroke="#9E1B1B" strokeWidth="1"    opacity="0.65"/>
      <line x1="64" y1="38" x2="74" y2="37" stroke="#9E1B1B" strokeWidth="0.75" opacity="0.4"/>
      {/* Complaint form stubs */}
      <rect x="22" y="65" width="36" height="5"  fill="none" stroke="#141414" strokeWidth="0.5" opacity="0.4"/>
      <rect x="22" y="73" width="36" height="5"  fill="none" stroke="#141414" strokeWidth="0.5" opacity="0.4"/>
      <text x="40" y="93" fontFamily="Georgia, serif" fontSize="5.5" fill="#141414" textAnchor="middle" letterSpacing="1.5" opacity="0.5">UNIT L-77</text>
    </svg>
  )
}

function TinManPortrait() {
  return (
    <svg viewBox="0 0 80 100" xmlns="http://www.w3.org/2000/svg" className="sc-portrait__svg" aria-hidden="true">
      <rect width="80" height="100" fill="#F2EBDD"/>
      <rect x="2" y="2" width="76" height="96" fill="none" stroke="#141414" strokeWidth="1"/>
      {/* Funnel cap */}
      <path d="M28,4 L52,4 L56,10 L24,10 Z" fill="#141414" opacity="0.8"/>
      {/* Head box */}
      <rect x="26" y="10" width="28" height="22" fill="none" stroke="#141414" strokeWidth="1.5"/>
      {/* Eye slits */}
      <rect x="30" y="16" width="6" height="3" fill="#141414" opacity="0.85"/>
      <rect x="44" y="16" width="6" height="3" fill="#141414" opacity="0.85"/>
      {/* Torso */}
      <rect x="16" y="32" width="48" height="46" fill="none" stroke="#141414" strokeWidth="1.5"/>
      {/* Heart-shaped void */}
      <path d="M40,42 C40,39 36,36 32,38 C28,40 28,46 32,50 L40,58 L48,50 C52,46 52,40 48,38 C44,36 40,39 40,42 Z" fill="#9E1B1B" fillOpacity="0.1" stroke="#9E1B1B" strokeWidth="1"/>
      {/* Corrosion spots */}
      <circle cx="19" cy="50" r="2"   fill="#D4A72C" fillOpacity="0.55"/>
      <circle cx="60" cy="43" r="1.5" fill="#D4A72C" fillOpacity="0.45"/>
      <circle cx="22" cy="38" r="1"   fill="#D4A72C" fillOpacity="0.45"/>
      <path d="M19,52 L17,60" stroke="#D4A72C" strokeWidth="1" opacity="0.5"/>
      {/* Seam line */}
      <line x1="16" y1="55" x2="64" y2="55" stroke="#141414" strokeWidth="0.5" opacity="0.3"/>
      <text x="40" y="93" fontFamily="Georgia, serif" fontSize="5.5" fill="#141414" textAnchor="middle" letterSpacing="1.5" opacity="0.5">UNIT T-88</text>
    </svg>
  )
}

function ScarecrowPortrait() {
  return (
    <svg viewBox="0 0 80 100" xmlns="http://www.w3.org/2000/svg" className="sc-portrait__svg" aria-hidden="true">
      <rect width="80" height="100" fill="#F2EBDD"/>
      <rect x="2" y="2" width="76" height="96" fill="none" stroke="#141414" strokeWidth="1"/>
      {/* Hat brim + cone */}
      <rect x="18" y="18" width="44" height="4" fill="#141414" opacity="0.85"/>
      <path d="M28,18 L30,4 L50,4 L52,18 Z" fill="#141414" opacity="0.8"/>
      {/* Burlap head */}
      <ellipse cx="40" cy="41" rx="20" ry="21" fill="#D4A72C" fillOpacity="0.09" stroke="#141414" strokeWidth="1.5"/>
      {/* X eyes */}
      <line x1="28" y1="33" x2="34" y2="39" stroke="#141414" strokeWidth="1.5"/>
      <line x1="34" y1="33" x2="28" y2="39" stroke="#141414" strokeWidth="1.5"/>
      <line x1="46" y1="33" x2="52" y2="39" stroke="#141414" strokeWidth="1.5"/>
      <line x1="52" y1="33" x2="46" y2="39" stroke="#141414" strokeWidth="1.5"/>
      {/* Stitched mouth */}
      <path d="M32,50 Q40,46 48,50" fill="none" stroke="#141414" strokeWidth="1" strokeDasharray="3 2"/>
      {/* Straw escaping */}
      <line x1="20" y1="34" x2="5"  y2="28" stroke="#D4A72C" strokeWidth="1.5" opacity="0.8"/>
      <line x1="20" y1="41" x2="4"  y2="41" stroke="#D4A72C" strokeWidth="1"   opacity="0.6"/>
      <line x1="20" y1="48" x2="7"  y2="54" stroke="#D4A72C" strokeWidth="1.5" opacity="0.7"/>
      <line x1="60" y1="34" x2="75" y2="28" stroke="#D4A72C" strokeWidth="1.5" opacity="0.8"/>
      <line x1="60" y1="41" x2="76" y2="41" stroke="#D4A72C" strokeWidth="1"   opacity="0.6"/>
      <line x1="60" y1="48" x2="73" y2="54" stroke="#D4A72C" strokeWidth="1.5" opacity="0.7"/>
      {/* Hollow indicator */}
      <line x1="34" y1="60" x2="46" y2="60" stroke="#9E1B1B" strokeWidth="0.75" opacity="0.45"/>
      <text x="40" y="93" fontFamily="Georgia, serif" fontSize="5.5" fill="#141414" textAnchor="middle" letterSpacing="1.5" opacity="0.5">UNIT S-99</text>
    </svg>
  )
}

function DorothyPortrait() {
  return (
    <svg viewBox="0 0 80 100" xmlns="http://www.w3.org/2000/svg" className="sc-portrait__svg" aria-hidden="true">
      <rect width="80" height="100" fill="#F2EBDD"/>
      <rect x="2" y="2" width="76" height="96" fill="none" stroke="#141414" strokeWidth="1"/>
      {/* Head */}
      <ellipse cx="40" cy="20" rx="8" ry="9" fill="none" stroke="#141414" strokeWidth="1.5"/>
      {/* Pigtail stubs */}
      <path d="M32,14 Q28,9 32,12"  fill="none" stroke="#141414" strokeWidth="1"/>
      <path d="M48,14 Q52,9 48,12"  fill="none" stroke="#141414" strokeWidth="1"/>
      {/* Dress body */}
      <path d="M32,29 L26,62 L54,62 L48,29 Z" fill="none" stroke="#141414" strokeWidth="1.5"/>
      <line x1="32" y1="29" x2="48" y2="29" stroke="#141414" strokeWidth="1.5"/>
      {/* Displacement fracture */}
      <line x1="8" y1="65" x2="72" y2="65" stroke="#9E1B1B" strokeWidth="1" strokeDasharray="4 3" opacity="0.75"/>
      {/* Disconnected shoes */}
      <ellipse cx="31" cy="76" rx="7" ry="4" fill="#9E1B1B" fillOpacity="0.18" stroke="#141414" strokeWidth="1"/>
      <ellipse cx="49" cy="76" rx="7" ry="4" fill="#9E1B1B" fillOpacity="0.18" stroke="#141414" strokeWidth="1"/>
      {/* Silver friction signal arcs */}
      <path d="M20,76 Q26,70 31,76" fill="none" stroke="#D4A72C" strokeWidth="0.75" opacity="0.65"/>
      <path d="M49,76 Q55,70 60,76" fill="none" stroke="#D4A72C" strokeWidth="0.75" opacity="0.65"/>
      <text x="40" y="93" fontFamily="Georgia, serif" fontSize="5.5" fill="#141414" textAnchor="middle" letterSpacing="1.5" opacity="0.5">UNIT D-01</text>
    </svg>
  )
}

function WitchWestPortrait() {
  return (
    <svg viewBox="0 0 80 100" xmlns="http://www.w3.org/2000/svg" className="sc-portrait__svg" aria-hidden="true">
      <rect width="80" height="100" fill="#F2EBDD"/>
      <rect x="2" y="2" width="76" height="96" fill="none" stroke="#141414" strokeWidth="1"/>
      {/* Witch hat */}
      <path d="M20,32 L40,4 L60,32 Z" fill="#141414" opacity="0.85"/>
      <rect x="14" y="30" width="52" height="6" fill="#141414" opacity="0.7"/>
      {/* Eye outer */}
      <ellipse cx="40" cy="58" rx="24" ry="15" fill="none" stroke="#141414" strokeWidth="1.5"/>
      {/* Iris */}
      <circle cx="40" cy="58" r="9" fill="none" stroke="#141414" strokeWidth="1"/>
      {/* Pupil */}
      <circle cx="40" cy="58" r="4" fill="#141414" opacity="0.85"/>
      {/* Thermal heat waves above */}
      <path d="M24,40 Q28,34 32,40 Q36,34 40,40 Q44,34 48,40 Q52,34 56,40" fill="none" stroke="#9E1B1B" strokeWidth="1"    opacity="0.65"/>
      <path d="M28,45 Q32,40 36,45 Q40,40 44,45 Q48,40 52,45"               fill="none" stroke="#9E1B1B" strokeWidth="0.75" opacity="0.4"/>
      {/* Melting drips */}
      <path d="M26,72 Q26,80 24,86" stroke="#141414" strokeWidth="1.5" fill="none" opacity="0.55"/>
      <path d="M40,74 Q40,82 40,88" stroke="#141414" strokeWidth="1.5" fill="none" opacity="0.55"/>
      <path d="M54,72 Q54,80 56,86" stroke="#141414" strokeWidth="1.5" fill="none" opacity="0.55"/>
      <text x="40" y="97" fontFamily="Georgia, serif" fontSize="5.5" fill="#141414" textAnchor="middle" letterSpacing="1.5" opacity="0.5">UNIT W-66</text>
    </svg>
  )
}

function WitchEastPortrait() {
  return (
    <svg viewBox="0 0 80 100" xmlns="http://www.w3.org/2000/svg" className="sc-portrait__svg" aria-hidden="true">
      <rect width="80" height="100" fill="#F2EBDD"/>
      <rect x="2" y="2" width="76" height="96" fill="none" stroke="#141414" strokeWidth="1"/>
      {/* House weight pressing down */}
      <path d="M6,16 L40,2 L74,16 Z" fill="#141414" opacity="0.85"/>
      <rect x="10" y="16" width="60" height="38" fill="#141414" opacity="0.8"/>
      {/* Impact cracks */}
      <line x1="10" y1="54" x2="4"  y2="61" stroke="#9E1B1B" strokeWidth="1.5" opacity="0.7"/>
      <line x1="70" y1="54" x2="76" y2="61" stroke="#9E1B1B" strokeWidth="1.5" opacity="0.7"/>
      <line x1="28" y1="54" x2="25" y2="60" stroke="#9E1B1B" strokeWidth="1"   opacity="0.5"/>
      <line x1="52" y1="54" x2="55" y2="60" stroke="#9E1B1B" strokeWidth="1"   opacity="0.5"/>
      {/* Left stocking */}
      <rect x="22" y="60" width="12" height="26" fill="none" stroke="#141414" strokeWidth="1"/>
      <line x1="22" y1="64" x2="34" y2="64" stroke="#141414" strokeWidth="1.5" opacity="0.7"/>
      <line x1="22" y1="68" x2="34" y2="68" stroke="#141414" strokeWidth="0.7" opacity="0.35"/>
      <line x1="22" y1="72" x2="34" y2="72" stroke="#141414" strokeWidth="1.5" opacity="0.7"/>
      <line x1="22" y1="76" x2="34" y2="76" stroke="#141414" strokeWidth="0.7" opacity="0.35"/>
      <line x1="22" y1="80" x2="34" y2="80" stroke="#141414" strokeWidth="1.5" opacity="0.7"/>
      {/* Right stocking */}
      <rect x="46" y="60" width="12" height="26" fill="none" stroke="#141414" strokeWidth="1"/>
      <line x1="46" y1="64" x2="58" y2="64" stroke="#141414" strokeWidth="1.5" opacity="0.7"/>
      <line x1="46" y1="68" x2="58" y2="68" stroke="#141414" strokeWidth="0.7" opacity="0.35"/>
      <line x1="46" y1="72" x2="58" y2="72" stroke="#141414" strokeWidth="1.5" opacity="0.7"/>
      <line x1="46" y1="76" x2="58" y2="76" stroke="#141414" strokeWidth="0.7" opacity="0.35"/>
      <line x1="46" y1="80" x2="58" y2="80" stroke="#141414" strokeWidth="1.5" opacity="0.7"/>
      <text x="40" y="93" fontFamily="Georgia, serif" fontSize="5.5" fill="#141414" textAnchor="middle" letterSpacing="1.5" opacity="0.5">UNIT E-00</text>
    </svg>
  )
}

function GlindaPortrait() {
  return (
    <svg viewBox="0 0 80 100" xmlns="http://www.w3.org/2000/svg" className="sc-portrait__svg" aria-hidden="true">
      <rect width="80" height="100" fill="#F2EBDD"/>
      <rect x="2" y="2" width="76" height="96" fill="none" stroke="#141414" strokeWidth="1"/>
      {/* Crown */}
      <path d="M26,20 L30,10 L34,20 L40,8 L46,20 L50,10 L54,20" fill="none" stroke="#141414" strokeWidth="1"/>
      {/* Bubble outer */}
      <circle cx="40" cy="54" r="30" fill="#D4A72C" fillOpacity="0.05" stroke="#141414" strokeWidth="1.5"/>
      <circle cx="40" cy="54" r="26" fill="none" stroke="#141414" strokeWidth="0.4" opacity="0.28"/>
      {/* Refraction lines */}
      <line x1="40" y1="24" x2="14" y2="68" stroke="#D4A72C" strokeWidth="1"    opacity="0.42"/>
      <line x1="40" y1="24" x2="66" y2="68" stroke="#D4A72C" strokeWidth="1"    opacity="0.42"/>
      <line x1="40" y1="24" x2="40" y2="84" stroke="#D4A72C" strokeWidth="1"    opacity="0.42"/>
      <line x1="10" y1="54" x2="70" y2="54" stroke="#D4A72C" strokeWidth="0.75" opacity="0.32"/>
      {/* Truth node — distorted */}
      <circle cx="40" cy="54" r="3.5" fill="#9E1B1B" fillOpacity="0.32" stroke="#9E1B1B" strokeWidth="0.75"/>
      <text x="40" y="93" fontFamily="Georgia, serif" fontSize="5.5" fill="#141414" textAnchor="middle" letterSpacing="1.5" opacity="0.5">UNIT G-01</text>
    </svg>
  )
}

function WizardPortrait() {
  return (
    <svg viewBox="0 0 80 100" xmlns="http://www.w3.org/2000/svg" className="sc-portrait__svg" aria-hidden="true">
      <rect width="80" height="100" fill="#F2EBDD"/>
      <rect x="2" y="2" width="76" height="96" fill="none" stroke="#141414" strokeWidth="1"/>
      {/* Left curtain */}
      <path d="M2,2 Q20,30 14,88 L2,88 Z" fill="#141414" opacity="0.75"/>
      <line x1="5"  y1="20" x2="12" y2="25" stroke="#D4A72C" strokeWidth="0.5" opacity="0.4"/>
      <line x1="5"  y1="34" x2="12" y2="39" stroke="#D4A72C" strokeWidth="0.5" opacity="0.4"/>
      <line x1="5"  y1="48" x2="12" y2="53" stroke="#D4A72C" strokeWidth="0.5" opacity="0.4"/>
      <line x1="5"  y1="62" x2="12" y2="67" stroke="#D4A72C" strokeWidth="0.5" opacity="0.4"/>
      {/* Right curtain */}
      <path d="M78,2 Q60,30 66,88 L78,88 Z" fill="#141414" opacity="0.75"/>
      <line x1="75" y1="20" x2="68" y2="25" stroke="#D4A72C" strokeWidth="0.5" opacity="0.4"/>
      <line x1="75" y1="34" x2="68" y2="39" stroke="#D4A72C" strokeWidth="0.5" opacity="0.4"/>
      <line x1="75" y1="48" x2="68" y2="53" stroke="#D4A72C" strokeWidth="0.5" opacity="0.4"/>
      <line x1="75" y1="62" x2="68" y2="67" stroke="#D4A72C" strokeWidth="0.5" opacity="0.4"/>
      {/* Smoke in the void */}
      <path d="M36,30 Q44,22 40,30 Q36,38 44,32" fill="none" stroke="#141414" strokeWidth="0.75" opacity="0.42"/>
      <path d="M34,50 Q42,42 38,50 Q34,58 42,52" fill="none" stroke="#141414" strokeWidth="0.75" opacity="0.3"/>
      {/* OZ ghost text */}
      <text x="40" y="54" fontFamily="Georgia, serif" fontSize="14" fill="#D4A72C" textAnchor="middle" fontWeight="bold" opacity="0.26" letterSpacing="2">OZ</text>
      {/* Null marker */}
      <line x1="28" y1="68" x2="52" y2="68" stroke="#9E1B1B" strokeWidth="0.75" opacity="0.42"/>
      <text x="40" y="77" fontFamily="Georgia, serif" fontSize="7" fill="#9E1B1B" textAnchor="middle" opacity="0.42" letterSpacing="1">NULL</text>
      <text x="40" y="93" fontFamily="Georgia, serif" fontSize="5.5" fill="#141414" textAnchor="middle" letterSpacing="1.5" opacity="0.5">UNIT Z-00</text>
    </svg>
  )
}

const PORTRAITS = {
  lion:       LionPortrait,
  tin_man:    TinManPortrait,
  scarecrow:  ScarecrowPortrait,
  dorothy:    DorothyPortrait,
  witch_west: WitchWestPortrait,
  witch_east: WitchEastPortrait,
  glinda:     GlindaPortrait,
  wizard:     WizardPortrait,
}

export default function StatsCard() {
  const {
    character, load, compliance, desync,
    vibration, corrosion, seizure,
    scatter, hollowing,
    displacement, warrantLevel,
    refraction, insulation,
    obfuscation, thermal,
  } = useGameStore()

  const cardRef = useRef(null)

  useEffect(() => {
    if (!cardRef.current) return
    const ro = new ResizeObserver(([entry]) => {
      document.documentElement.style.setProperty(
        '--stats-card-offset',
        `${entry.contentRect.height + 2}px`
      )
    })
    ro.observe(cardRef.current)
    return () => ro.disconnect()
  }, [])

  if (!character) return null
  const config = CHAR_CONFIG[character]
  if (!config) return null

  const Portrait = PORTRAITS[character]
  const statValues = {
    vibration, corrosion, seizure, scatter, hollowing,
    displacement, warrantLevel, refraction, insulation,
    obfuscation, thermal,
  }

  return (
    <div className="stats-card" ref={cardRef} role="region" aria-label="Unit status panel">
      <svg className="stats-card__frame" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <path d="M 0 14 L 0 0 L 14 0"  className="stats-card__frame-bracket" />
        <path d="M 86 0 L 100 0 L 100 14"  className="stats-card__frame-bracket" />
        <path d="M 0 86 L 0 100 L 14 100" className="stats-card__frame-bracket" />
        <path d="M 86 100 L 100 100 L 100 86" className="stats-card__frame-bracket" />
      </svg>

      <div className="stats-card__inner">
        <div className="stats-card__portrait">
          {Portrait && <Portrait />}
        </div>

        <div className="stats-card__body">
          <div className="stats-card__header">
            <span className="stats-card__unit">{config.unit}</span>
            <span className="stats-card__sep">·</span>
            <span className="stats-card__name">{config.name}</span>
            {desync >= 2 && <span className="stats-card__desync">DSY {desync}</span>}
            <span className={`stats-card__cmp stats-card__cmp--${compliance}`}>
              {compliance.toUpperCase()}
            </span>
          </div>

          <div className="stats-card__stats">
            {config.stats.map(s => (
              <StatRow
                key={s.key}
                value={statValues[s.key] ?? 0}
                threshold={s.threshold}
                scale={s.scale}
                label={s.label}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="stats-card__loadbar-row">
        <span className="stats-card__load-lbl">LOAD</span>
        <div className="stats-card__load-track">
          <div
            className={`stats-card__load-fill${load >= 85 ? ' stats-card__load-fill--crit' : load >= 60 ? ' stats-card__load-fill--warn' : ''}`}
            style={{ width: `${load}%` }}
          />
        </div>
        <span className={`stats-card__load-pct${load >= 85 ? ' stats-card__load-pct--crit' : ''}`}>
          {load}%
        </span>
      </div>
    </div>
  )
}
