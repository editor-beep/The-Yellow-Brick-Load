import { useMemo } from 'react'
import { useGameStore } from '../engine/store.js'
import { sampleOracleCards, passageIdFromCardId, getActiveBucket } from '../engine/oracleDraw.js'

/**
 * OracleDraw — dynamic 5-card oracle selection.
 *
 * Replaces the static 8-choice list in *_ORACLE_DRAW passages for the four
 * main characters. Reads the character's current wetware state, selects the
 * active stat bucket, samples 5 cards from that pool, and presents them as
 * choice buttons. Selecting a card navigates to its outcome passage node.
 *
 * Rendered by PassageRenderer when passage.isOracleDraw === true.
 */
export default function OracleDraw() {
  const store = useGameStore()
  const { character, goTo, currentNode } = store

  const { cards, bucket } = useMemo(() => {
    const state = useGameStore.getState()
    return {
      cards: sampleOracleCards(character, state),
      bucket: getActiveBucket(character, state),
    }
  }, [character, currentNode]) // resamples when draw passage loads or character changes

  function handleSelect(card) {
    const passageId = passageIdFromCardId(card.id)
    if (passageId) goTo(passageId)
  }

  const isSignalBleed = bucket === 'signal-bleed'

  return (
    <nav
      className={`choices-wrapper oracle-draw-choices${isSignalBleed ? ' oracle-draw-choices--bleed' : ''}`}
      aria-label="Oracle draw — select a card"
    >
      {isSignalBleed && (
        <p className="oracle-draw-bleed-header system-log">
          [ SIGNAL BLEED DETECTED — CROSS-ORACLE CONTAMINATION ]
        </p>
      )}
      {cards.map((card, i) => (
        <button
          key={card.id}
          className={`choice-button oracle-draw-choice${card.category === 'signal-bleed' ? ' oracle-draw-choice--bleed' : ''}`}
          onClick={() => handleSelect(card)}
        >
          <span className="choice-arrow">▸</span>
          {i + 1}. {card.name}
          {card.category === 'signal-bleed' && (
            <span className="oracle-draw-bleed-tag"> [ SIGNAL BLEED ]</span>
          )}
        </button>
      ))}
    </nav>
  )
}
