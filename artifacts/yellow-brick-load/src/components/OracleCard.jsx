import { useGameStore } from '../engine/store.js'

/**
 * OracleCard — full-screen overlay that displays a drawn oracle card.
 * Shown whenever store.oracleCard is non-null.
 * Dismissed via the store's dismissOracleCard action.
 */
export default function OracleCard() {
  const { oracleCard, dismissOracleCard, character } = useGameStore()

  if (!oracleCard) return null

  const { name, cardText, ritualText, effect, surreality } = oracleCard

  // Human-readable effect label
  function describeEffect(fx) {
    if (!fx) return null
    switch (fx.type) {
      case 'addLoad':           return `LOAD +${fx.value}`
      case 'addDesync':         return `DESYNC +${fx.value}`
      case 'addSmudge':         return `SMUDGE +${fx.value}`
      case 'addOverrender':     return `OVERRENDER +${fx.value}`
      case 'setCompliance':     return `COMPLIANCE → ${fx.value.toUpperCase()}`
      case 'addVibration':      return `VIBRATION +${fx.value}`
      case 'addCorrosion':      return `CORROSION +${fx.value}`
      case 'addLubrication':    return `LUBRICATION +${fx.value}`
      case 'addSeizure':        return `SEIZURE +${fx.value}`
      case 'addUtility':        return `UTILITY +${fx.value}`
      case 'addScatter':        return `SCATTER +${fx.value}`
      case 'addStitchIntegrity':return `STITCH INTEGRITY +${fx.value}`
      case 'addDisplacement':   return `DISPLACEMENT +${fx.value}`
      case 'addWarrant':        return `WARRANT LEVEL +${fx.value}`
      case 'addRubyFriction':   return `RUBY FRICTION +${fx.value}`
      case 'addRefraction':     return `REFRACTION +${fx.value}`
      case 'addInsulation':     return `INSULATION +${fx.value}`
      case 'addObfuscation':    return `OBFUSCATION +${fx.value}`
      case 'addDesynctear':     return `DESYNCTEAR +${fx.value}`
      default:                  return fx.type.toUpperCase().replace(/([A-Z])/g, ' $1').trim()
    }
  }

  const effectLabel = describeEffect(effect)

  return (
    <div className="oracle-overlay" role="dialog" aria-modal="true" aria-label={`Oracle card: ${name}`}>
      <div className="oracle-card">
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
