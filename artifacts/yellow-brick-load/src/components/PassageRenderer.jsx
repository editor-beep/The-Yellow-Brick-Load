import { useEffect, useMemo, useRef } from 'react'
import { useGameStore } from '../engine/store.js'
import { applyEffects, resolveText, interpolate, isChoiceAvailable, getVoiceSwapContent } from '../engine/interpreter.js'
import { getPassage } from '../passages/index.js'
import OracleCard from './OracleCard.jsx'
import OracleDraw from './OracleDraw.jsx'
import StatsCard from './StatsCard.jsx'
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
  }, [currentNode, passage])

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
  const visitedNodes = new Set([...history, currentNode])
  const availableChoices = passage.choices.filter((c) => isChoiceAvailable(c, state) && !visitedNodes.has(c.target))
  const trail = [...history.slice(-3), currentNode]

  const mapLayout = useMemo(() => {
    const baseY = 110
    const stepX = 110
    const choiceOffsetX = 120
    const choiceStepY = 65
    const nodes = []
    const recentPath = [...history.slice(-8), currentNode]
    const nodePositions = new Map()
    const visitedOrder = []

    recentPath.forEach((id, idx) => {
      if (idx === 0) {
        nodePositions.set(id, { x: 40, y: baseY })
        visitedOrder.push(id)
        return
      }

      if (nodePositions.has(id)) return

      const prevId = recentPath[idx - 1]
      const prevPos = nodePositions.get(prevId)
      if (!prevPos) return

      const prevPassage = getPassage(prevId)
      const prevChoices = (prevPassage?.choices || []).filter(choice => isChoiceAvailable(choice, state))
      const choiceIdx = prevChoices.findIndex((choice) => choice.target === id)
      const spread = (prevChoices.length - 1) * choiceStepY
      const branchYOffset = choiceIdx >= 0 ? (-spread / 2 + choiceIdx * choiceStepY) : 0
      nodePositions.set(id, { x: prevPos.x + stepX, y: prevPos.y + branchYOffset })
      visitedOrder.push(id)
    })

    visitedOrder.forEach((id) => {
      const pos = nodePositions.get(id)
      nodes.push({ id, x: pos.x, y: pos.y, active: id === currentNode, isVisited: true })
    })

    const currentPos = nodePositions.get(currentNode) || { x: 40, y: baseY }
    const currentX = currentPos.x
    const choiceCount = availableChoices.length
    availableChoices.forEach((choice, idx) => {
      if (nodes.find((node) => node.id === choice.target)) return
      const totalSpread = (choiceCount - 1) * choiceStepY
      const choiceY = currentPos.y - totalSpread / 2 + idx * choiceStepY
      nodes.push({ id: choice.target, x: currentX + choiceOffsetX, y: choiceY, active: false, isVisited: false })
    })

    const padding = 30
    const xs = nodes.map((node) => node.x)
    const ys = nodes.map((node) => node.y)
    const vbX = Math.min(...xs) - padding
    const vbY = Math.min(...ys) - padding
    const vbW = Math.max(...xs) - vbX + padding
    const vbH = Math.max(...ys) - vbY + padding

    return { nodes, viewBox: `${vbX} ${vbY} ${vbW} ${vbH}` }
  }, [history, currentNode, availableChoices])

  function handleChoice(choice) {
    const target = passage.fake && availableChoices.length > 0 ? availableChoices[0].target : choice.target
    applyEffects(choice.effects)
    goTo(target)
  }

  return (
    <div className="passage-wrapper passage-wrapper--has-stats" data-character={character} tabIndex={-1}>
      <StatsCard />
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
            if (line.trim() === '') return <br key={`${currentNode}-line-${i}`} />
            if (line.startsWith('[') && line.endsWith(']')) return <p key={`${currentNode}-line-${i}`} className="system-log">{line}</p>
            if (line === line.toUpperCase() && line.trim().length > 3 && !line.startsWith('[')) return <p key={`${currentNode}-line-${i}`} className="passage-header">{line}</p>
            return <p key={`${currentNode}-line-${i}`}>{line}</p>
          })}
        </div>
        {(() => {
          const voiceText = getVoiceSwapContent(passage, character)
          if (!voiceText) return null
          const isAssimilated = !passage.voiceSwap?.[character]
          return (
            <div className={`voice-swap-card${isAssimilated ? ' voice-swap-card--assimilated' : ''}`}>
              <span className="voice-swap-label">[ {character ? character.toUpperCase().replace('_', ' ') : 'UNIT'}: INTERNAL SIGNAL ]</span>
              {voiceText.split('\n').map((line, i) => (
                <p key={`vs-${currentNode}-${i}`}>{line}</p>
              ))}
            </div>
          )
        })()}
      </div>

      <svg className="constellation-map" viewBox={mapLayout.viewBox} role="img" aria-label="Node route map">
        {history.slice(-8).map((nodeId, idx) => {
          const from = mapLayout.nodes.find((node) => node.id === nodeId)
          const to = mapLayout.nodes.find((node) => node.id === history.slice(-8)[idx + 1])
          if (!from || !to) return null
          return <line key={`${from.id}-${to.id}`} x1={from.x} y1={from.y} x2={to.x} y2={to.y} className="map-edge" />
        })}
        {availableChoices.map((choice) => {
          const from = mapLayout.nodes.find((node) => node.id === currentNode)
          const to = mapLayout.nodes.find((node) => node.id === choice.target)
          if (!from || !to) return null
          return <line key={`future-${from.id}-${to.id}`} x1={from.x} y1={from.y} x2={to.x} y2={to.y} className="map-edge map-edge--future" />
        })}
        {mapLayout.nodes.map((node) => (
          <g key={node.id}>
            <circle cx={node.x} cy={node.y} r={node.active ? 10 : 6} className={`map-node ${node.active ? 'map-node--active' : ''} ${node.isVisited ? 'map-node--visited' : 'map-node--future'}`} />
          </g>
        ))}
      </svg>

      {!passage.isEnding && passage.isOracleDraw && <OracleDraw />}
      {!passage.isEnding && !passage.isOracleDraw && availableChoices.length > 0 && <nav className="choices-wrapper" aria-label="Available choices">{availableChoices.map((choice) => <button key={`${currentNode}-choice-${choice.label}`} className="choice-button" onClick={() => handleChoice(choice)}><span className="choice-arrow">▸</span>{choice.label}</button>)}</nav>}
      {!passage.isEnding && !passage.isOracleDraw && availableChoices.length === 0 && <div className="ending-footer"><button className="choice-button choice-button--restart" onClick={() => useGameStore.getState().hardReset()}><span className="choice-arrow">↺</span>Begin new session</button></div>}

      {passage.isEnding && <div className="ending-footer"><button className="choice-button choice-button--restart" onClick={() => useGameStore.getState().hardReset()}><span className="choice-arrow">↺</span>{passage.isGhostSignal ? '[ TERMINATE SESSION ]' : 'Begin new session'}</button></div>}
    </div>
  )
}
