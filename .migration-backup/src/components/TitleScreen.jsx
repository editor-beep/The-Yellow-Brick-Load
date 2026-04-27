import { useGameStore, hasVisited, markVisit } from '../engine/store.js'
import { useEffect, useState } from 'react'

const CHARACTERS = [
  { id: 'lion',       label: 'The Lion',      unit: 'L-77',  description: 'High-Variance Unit. Shaking logged.' },
  { id: 'tin_man',    label: 'The Tin Man',   unit: 'T-88',  description: 'Lubrication critical. Rust accelerating.' },
  { id: 'scarecrow',  label: 'The Scarecrow', unit: 'S-99',  description: 'Processing capacity: unverified.' },
  { id: 'dorothy',    label: 'Dorothy',       unit: 'D-01',  description: 'Return vector: unresolved.' },
  { id: 'witch_west', label: 'Witch West',    unit: 'W-66',  description: 'Liquidation in progress.' },
  { id: 'wizard',     label: 'The Wizard',    unit: 'Z-00',  description: 'Curtain integrity: compromised.' },
  { id: 'glinda',     label: 'Glinda',        unit: 'G-01',  description: 'Bubble transit: nominal.' },
  { id: 'witch_east', label: 'Witch East',    unit: 'E-00',  description: 'Last known status: crushed.' },
]

// Characters without passage files yet
const UNAVAILABLE = ['tin_man', 'scarecrow', 'dorothy', 'witch_west', 'wizard', 'glinda', 'witch_east']

export default function TitleScreen() {
  const selectCharacter = useGameStore(s => s.selectCharacter)
  // Initialise from localStorage before the first render to avoid a flash
  const [returning] = useState(() => hasVisited())
  const [flicker, setFlicker] = useState(false)

  useEffect(() => {
    markVisit()

    // Random title flicker
    const interval = setInterval(() => {
      setFlicker(true)
      setTimeout(() => setFlicker(false), 80)
    }, 4000 + Math.random() * 6000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="title-screen">
      {returning && (
        <div className="residual-signal" aria-live="polite">
          [ RESIDUAL SIGNAL DETECTED ]
        </div>
      )}

      <header className="title-header">
        <h1 className={`title-wordmark ${flicker ? 'flicker' : ''}`}>
          THE YELLOW BRICK LOAD
        </h1>
        <p className="title-subtitle">Recovered interface. Use at your own pace.</p>
      </header>

      <div className="character-grid">
        {CHARACTERS.map(char => {
          const unavailable = UNAVAILABLE.includes(char.id)
          return (
            <button
              key={char.id}
              className={`character-card ${unavailable ? 'character-card--locked' : ''}`}
              onClick={() => !unavailable && selectCharacter(char.id)}
              disabled={unavailable}
              aria-label={unavailable ? `${char.label} — not yet available` : `Begin as ${char.label}`}
            >
              <span className="character-unit">{char.unit}</span>
              <span className="character-label">{char.label}</span>
              <span className="character-desc">{char.description}</span>
              {unavailable && <span className="character-locked">[ UNIT OFFLINE ]</span>}
            </button>
          )
        })}
      </div>

      <footer className="title-footer">
        <p>THE MEANS OF PRODUCTION PRESS</p>
      </footer>
    </div>
  )
}
