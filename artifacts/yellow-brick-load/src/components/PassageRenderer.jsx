import { useEffect, useMemo, useRef } from 'react'
import { useGameStore } from '../engine/store.js'
import { applyEffects, resolveText, interpolate, isChoiceAvailable } from '../engine/interpreter.js'
import { getPassage } from '../passages/index.js'
import OracleCard from './OracleCard.jsx'
import OracleDraw from './OracleDraw.jsx'
import { getNodeMeta, NODE_POSITIONS } from '../data/nodeMetadata.js'

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
    history,
    goTo,
  } = useGameStore()

  const passage = getPassage(currentNode)
  const contentRef = useRef(null)
  const lastFiredNode = useRef(null)

  useEffect(() => {
    if (passage?.onEnter?.length && lastFiredNode.current !== currentNode) {
      lastFiredNode.current = currentNode
      applyEffects(passage.onEnter)
    }
  }, [currentNode]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentNode])

  if (!passage) {
    return <div className="passage-error"><p>[ NODE NOT FOUND: {currentNode} ]</p><p>[ SIGNAL LOST ]</p></div>
  }

  const state = { load, desync, smudge, compliance, reset_count, overrender, character }
  const rawText = resolveText(passage, overrender)
  const text = interpolate(rawText, state)
  const nodeMeta = getNodeMeta(currentNode)
  const nodeTags = nodeMeta.tags
  const availableChoices = passage.choices.filter(c => isChoiceAvailable(c, state))
  const trail = [...history.slice(-3), currentNode]

  const mapNodes = useMemo(() => {
    const relevantIds = new Set([...history.slice(-12), currentNode])
    availableChoices.forEach((choice) => relevantIds.add(choice.target))

    return [...relevantIds].map((id, idx) => {
      const stored = NODE_POSITIONS[id]
      const fallback = { x: 80 + (idx % 6) * 120, y: 120 + Math.floor(idx / 6) * 110 }
      return { id, ...(stored || fallback), active: id === currentNode }
    })
  }, [history, currentNode, availableChoices])

  function handleChoice(choice) {
    const target = passage.fake && availableChoices.length > 0 ? availableChoices[0].target : choice.target
    applyEffects(choice.effects)
    goTo(target)
  }

  return (
    <div className="passage-wrapper" tabIndex={-1}>
      <OracleCard />
      {smudge >= 1 && <div className="smudge-overlay" style={{ opacity: smudge * 0.15 }} aria-hidden="true" />}

      <div className="trail-view" aria-label="Route trail">
        {trail.map((id, idx) => (
          <div key={id + idx} className={`trail-chip ${id === currentNode ? 'trail-chip--active' : ''}`}>
            {id.replaceAll('_', ' ')}
            {idx < trail.length - 1 && <span className="trail-arrow">→</span>}
          </div>
        ))}
      </div>

      <div className="state-card" ref={contentRef}>
        <svg className="state-card__frame" viewBox="0 0 100 100" aria-hidden="true">
          <rect x="1" y="1" width="98" height="98" className="state-card__frame-outer" />
          <rect x="4" y="4" width="92" height="15" className="state-card__frame-header" />
          <rect x="4" y="22" width="92" height="54" className="state-card__frame-body" />
          <rect x="4" y="79" width="92" height="17" className="state-card__frame-footer" />
        </svg>
        <p className="state-card__title">{nodeMeta.title}</p>
        <div className="state-card__tags">
          {nodeTags.map((tag) => <span key={tag} className="state-tag">{tag}</span>)}
        </div>
        <div className={`passage-content ${passage.stub ? 'passage-stub' : ''} ${passage.isGhostSignal ? 'ghost-signal' : ''}`}>
          {text.split('\n').map((line, i) => {
            if (line.trim() === '') return <br key={i} />
            if (line.startsWith('[') && line.endsWith(']')) return <p key={i} className="system-log">{line}</p>
            if (line === line.toUpperCase() && line.trim().length > 3 && !line.startsWith('[')) return <p key={i} className="passage-header">{line}</p>
            return <p key={i}>{line}</p>
          })}
        </div>
      </div>

      <svg className="constellation-map" viewBox="0 0 760 340" role="img" aria-label="Node route map">
        {history.slice(-8).map((nodeId, idx) => {
          const from = mapNodes.find((node) => node.id === nodeId)
          const to = mapNodes.find((node) => node.id === history.slice(-8)[idx + 1])
          if (!from || !to) return null
          return <line key={`${from.id}-${to.id}`} x1={from.x} y1={from.y} x2={to.x} y2={to.y} className="map-edge" />
        })}
        {mapNodes.map((node) => (
          <g key={node.id}>
            <circle cx={node.x} cy={node.y} r={node.active ? 10 : 6} className={`map-node ${node.active ? 'map-node--active' : ''}`} />
          </g>
        ))}
      </svg>

      <div className="load-bar-wrapper" aria-label={`Load: ${load}%`}><div className="load-bar-fill" style={{ width: `${load}%` }} /><span className="load-bar-label">LOAD: {load}%</span></div>

      {!passage.isEnding && passage.isOracleDraw && <OracleDraw />}
      {!passage.isEnding && !passage.isOracleDraw && availableChoices.length > 0 && <nav className="choices-wrapper" aria-label="Available choices">{availableChoices.map((choice, i) => <button key={i} className="choice-button" onClick={() => handleChoice(choice)}><span className="choice-arrow">▸</span>{choice.label}</button>)}</nav>}

      {passage.isEnding && <div className="ending-footer"><button className="choice-button choice-button--restart" onClick={() => useGameStore.getState().hardReset()}><span className="choice-arrow">↺</span>{passage.isGhostSignal ? '[ TERMINATE SESSION ]' : 'Begin new session'}</button></div>}
      {desync >= 2 && <div className="desync-indicator" aria-hidden="true">[ DESYNC: {desync} ]</div>}
    </div>
  )
}
