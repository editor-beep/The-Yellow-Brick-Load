import { useEffect, useMemo, useRef } from 'react'
import { useGameStore } from '../engine/store.js'
import { applyEffects, resolveText, interpolate, isChoiceAvailable } from '../engine/interpreter.js'
import { getPassage } from '../passages/index.js'
import OracleCard from './OracleCard.jsx'
import { getNodeMeta } from '../data/nodeMetadata.js'

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

  const mapLayout = useMemo(() => {
    const baseY = 110
    const stepX = 110
    const choiceOffsetX = 120
    const choiceStepY = 65
    const nodes = []

    const visited = [...new Set([...history.slice(-6), currentNode])]
    visited.forEach((id, idx) => {
      nodes.push({ id, x: 40 + idx * stepX, y: baseY, isVisited: true })
    })

    const currentX = 40 + (visited.length - 1) * stepX
    const choiceCount = availableChoices.length
    availableChoices.forEach((choice, idx) => {
      if (nodes.find(n => n.id === choice.target)) return
      const totalSpread = (choiceCount - 1) * choiceStepY
      const choiceY = baseY - totalSpread / 2 + idx * choiceStepY
      nodes.push({ id: choice.target, x: currentX + choiceOffsetX, y: choiceY, isFuture: true })
    })

    const padding = 30
    const xs = nodes.map(n => n.x)
    const ys = nodes.map(n => n.y)
    const vbX = Math.min(...xs) - padding
    const vbY = Math.min(...ys) - padding
    const vbW = Math.max(...xs) - vbX + padding + 20
    const vbH = Math.max(...ys) - vbY + padding + 20

    return { nodes, viewBox: `${vbX} ${vbY} ${vbW} ${vbH}` }
  }, [history, currentNode, availableChoices])

  function getMapNodeClass(id, p) {
    if (!p) return ''
    if (p.isGhostSignal) return 'map-node--ghost'
    if (p.isEnding) return 'map-node--ending'
    if (id.includes('ORACLE')) return 'map-node--oracle'
    if (p.fake) return 'map-node--fake'
    if (p.stub) return 'map-node--stub'
    return ''
  }

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
        <svg className="state-card__frame" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <rect x="1" y="1" width="98" height="98" className="state-card__frame-outer" />
          <path d="M 1 16 L 1 1 L 16 1" className="state-card__frame-bracket" />
          <path d="M 84 1 L 99 1 L 99 16" className="state-card__frame-bracket" />
          <path d="M 1 84 L 1 99 L 16 99" className="state-card__frame-bracket" />
          <path d="M 84 99 L 99 99 L 99 84" className="state-card__frame-bracket" />
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

      <svg className="constellation-map" viewBox={mapLayout.viewBox} role="img" aria-label="Node route map">
        {mapLayout.nodes.filter(n => n.isVisited).map((node, idx, arr) => {
          const next = arr[idx + 1]
          if (!next) return null
          return <line key={`${node.id}-${next.id}`} x1={node.x} y1={node.y} x2={next.x} y2={next.y} className="map-edge" />
        })}
        {mapLayout.nodes.filter(n => n.isFuture).map(node => {
          const curr = mapLayout.nodes.find(n => n.id === currentNode)
          if (!curr) return null
          return <line key={`curr-${node.id}`} x1={curr.x} y1={curr.y} x2={node.x} y2={node.y} className="map-edge map-edge--future" />
        })}
        {mapLayout.nodes.map((node) => {
          const p = getPassage(node.id)
          const typeClass = getMapNodeClass(node.id, p)
          const activeClass = node.id === currentNode ? 'map-node--active' : ''
          const futureClass = node.isFuture ? 'map-node--future' : ''
          const r = node.id === currentNode ? 10 : 6
          return (
            <g key={node.id}>
              <circle cx={node.x} cy={node.y} r={r} className={`map-node ${typeClass} ${activeClass} ${futureClass}`} />
            </g>
          )
        })}
      </svg>

      <div className="load-bar-wrapper" aria-label={`Load: ${load}%`}><div className="load-bar-fill" style={{ width: `${load}%` }} /><span className="load-bar-label">LOAD: {load}%</span></div>

      {!passage.isEnding && availableChoices.length > 0 && <nav className="choices-wrapper" aria-label="Available choices">{availableChoices.map((choice, i) => <button key={i} className="choice-button" onClick={() => handleChoice(choice)}><span className="choice-arrow">▸</span>{choice.label}</button>)}</nav>}

      {passage.isEnding && <div className="ending-footer"><button className="choice-button choice-button--restart" onClick={() => useGameStore.getState().hardReset()}><span className="choice-arrow">↺</span>{passage.isGhostSignal ? '[ TERMINATE SESSION ]' : 'Begin new session'}</button></div>}
      {desync >= 2 && <div className="desync-indicator" aria-hidden="true">[ DESYNC: {desync} ]</div>}
    </div>
  )
}
