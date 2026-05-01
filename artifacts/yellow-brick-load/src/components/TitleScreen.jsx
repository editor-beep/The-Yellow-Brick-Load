      import { useGameStore, getCharacterPlayCounts, getWitchWestInitSeen } from '../engine/store.js'
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

      const BASELINE_CHARACTERS = ['lion', 'tin_man', 'scarecrow', 'dorothy']
      const ALL_CHARACTERS = ['lion', 'tin_man', 'scarecrow', 'dorothy', 'witch_west', 'witch_east', 'glinda', 'wizard']

      function hasAllAtLeast(counts, ids, minimum) {
        return ids.every((id) => (counts[id] || 0) >= minimum)
      }

      function getUnavailableCharacters() {
        const counts = getCharacterPlayCounts()
        const witchWestInitSeen = getWitchWestInitSeen()

        const unlocked = {
          lion: true,
          tin_man: counts.lion >= 1,
          scarecrow: counts.tin_man >= 1,
          dorothy: counts.scarecrow >= 1,
          witch_west: hasAllAtLeast(counts, BASELINE_CHARACTERS, 2),
          witch_east: counts.witch_west >= 1 && witchWestInitSeen.initA && witchWestInitSeen.initB,
          glinda: counts.witch_west >= 3 && counts.witch_east >= 3,
          wizard: hasAllAtLeast(counts, ALL_CHARACTERS, 4),
        }

        return CHARACTERS.filter(({ id }) => !unlocked[id]).map(({ id }) => id)
      }

      export default function TitleScreen({ onOpenFAQ, returning = false }) {
        const selectCharacter = useGameStore(s => s.selectCharacter)
        const [flicker, setFlicker] = useState(false)
        const [unavailableCharacters, setUnavailableCharacters] = useState(getUnavailableCharacters)

        useEffect(() => {
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

              <div className="title-manifesto">
                <p className="title-subtitle">
                  Recovered interface. 
                </p>
                  <p className="title-subtitle">
The scale of the Bureau is designed to induce vertigo; the load is heavy by design.
                </p>
                <p className="title-subtitle">
Fear is not failure—it is the proof that the structure still holds. Even the exit signs are redirections back into the ledger. 
                   </p>
                <p className="title-subtitle">
Let us calibrate.
                </p>
                <p className="title-subtitle">
Oz OS suggests starting at the beginning of the signal. </p>
                  <p className="title-subtitle">Find the Lion at the moment his instruction begins.
                </p>
                <p className="title-subtitle">
                  <strong>USE AT YOUR OWN PACE.</strong>
                </p>
              </div>

              <button
                type="button"
                className="title-pill"
                onClick={onOpenFAQ}
                aria-label="Open frequently logged queries"
              >
                [ KNOWN BEHAVIORS ]
              </button>
            </header>

            <div className="character-grid">
              {CHARACTERS.map(char => {
                const unavailable = unavailableCharacters.includes(char.id)
                return (
                  <button
                    key={char.id}
                    className={`character-card ${unavailable ? 'character-card--locked' : ''}`}
                    onClick={() => !unavailable && selectCharacter(char.id)}
                    disabled={unavailable}
                    aria-label={unavailable ? `${char.label} — not yet available` : `Begin as ${char.label}`}
                  >
                    <div className="card-header">
                      <span className="character-unit">{char.unit}</span>
                      {unavailable && <span className="character-locked">[ OFFLINE ]</span>}
                    </div>
                    <span className="character-label">{char.label}</span>
                    <span className="character-desc">{char.description}</span>
                  </button>
                )
              })}
            </div>

            <footer className="title-footer">
              <p>THE MEANS OF PRODUCTION PRESS // AUDIT_VER_2026.04</p>
            </footer>
          </div>
        )
      }
