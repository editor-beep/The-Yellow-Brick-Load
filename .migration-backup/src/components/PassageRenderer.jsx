import { useEffect, useRef } from 'react'
import { useGameStore } from '../engine/store.js'
import { applyEffects, resolveText, interpolate, isChoiceAvailable } from '../engine/interpreter.js'
import { getPassage } from '../passages/index.js'

export default function PassageRenderer() {
  const {
    currentNode,
    overrender,
    smudge,
    compliance,
    load,
    desync,
    reset_count,
    character,
    goTo,
  } = useGameStore()

  const passage = getPassage(currentNode)
  const contentRef = useRef(null)

  // Fire onEnter effects when passage loads.
  // Intentionally depends only on currentNode; passage is derived from it.
  useEffect(() => {
    if (passage?.onEnter?.length) {
      applyEffects(passage.onEnter)
    }
  }, [currentNode]) // eslint-disable-line react-hooks/exhaustive-deps

  // Scroll to top on passage change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentNode])

  if (!passage) {
    return (
      <div className="passage-error">
        <p>[ NODE NOT FOUND: {currentNode} ]</p>
        <p>[ SIGNAL LOST ]</p>
      </div>
    )
  }

  const state = { load, desync, smudge, compliance, reset_count, overrender, character }
  const rawText = resolveText(passage, overrender)
  const text = interpolate(rawText, state)

  const availableChoices = passage.choices.filter(c => isChoiceAvailable(c, state))

  function handleChoice(choice) {
    // When passage.fake is true, all choices collapse to the first valid target
    const target = passage.fake && availableChoices.length > 0
      ? availableChoices[0].target
      : choice.target
    applyEffects(choice.effects)
    goTo(target)
  }

  return (
    <div className="passage-wrapper">
      {/* Smudge overlay */}
      {smudge >= 1 && (
        <div
          className="smudge-overlay"
          style={{ opacity: smudge * 0.15 }}
          aria-hidden="true"
        />
      )}

      {/* Load bar — never reaches 100 */}
      <div className="load-bar-wrapper" aria-label={`Load: ${load}%`}>
        <div className="load-bar-fill" style={{ width: `${load}%` }} />
        <span className="load-bar-label">LOAD: {load}%</span>
      </div>

      {/* Passage content */}
      <div
        ref={contentRef}
        className={`passage-content ${passage.stub ? 'passage-stub' : ''} ${passage.isGhostSignal ? 'ghost-signal' : ''}`}
      >
        {text.split('\n').map((line, i) => {
          if (line.trim() === '') return <br key={i} />
          // System log lines
          if (line.startsWith('[') && line.endsWith(']')) {
            return <p key={i} className="system-log">{line}</p>
          }
          // Section headers (ALL CAPS lines)
          if (line === line.toUpperCase() && line.trim().length > 3 && !line.startsWith('[')) {
            return <p key={i} className="passage-header">{line}</p>
          }
          return <p key={i}>{line}</p>
        })}
      </div>

      {/* Choices */}
      {!passage.isEnding && availableChoices.length > 0 && (
        <nav className="choices-wrapper" aria-label="Available choices">
          {availableChoices.map((choice, i) => (
            <button
              key={i}
              className="choice-button"
              onClick={() => handleChoice(choice)}
            >
              <span className="choice-arrow">▸</span>
              {choice.label}
            </button>
          ))}
        </nav>
      )}

      {/* Ending state */}
      {passage.isEnding && (
        <div className="ending-footer">
          {passage.endingId && passage.endingName && (
            <p className="ending-id">
              {passage.endingId} — {passage.endingName}
            </p>
          )}
          {passage.isGhostSignal ? (
            <button
              className="choice-button choice-button--restart"
              onClick={() => useGameStore.getState().hardReset()}
            >
              <span className="choice-arrow">↺</span>
              [ TERMINATE SESSION ]
            </button>
          ) : (
            <button
              className="choice-button choice-button--restart"
              onClick={() => useGameStore.getState().hardReset()}
            >
              <span className="choice-arrow">↺</span>
              Begin new session
            </button>
          )}
        </div>
      )}

      {/* Desync flicker indicator */}
      {desync >= 2 && (
        <div className="desync-indicator" aria-hidden="true">
          [ DESYNC: {desync} ]
        </div>
      )}
    </div>
  )
}
