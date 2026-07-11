import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import PassageRenderer from '../components/PassageRenderer.jsx'
import { useGameStore } from '../engine/store.js'

function resetStore() {
  useGameStore.getState().hardReset()
}

function goToNode(id) {
  useGameStore.setState({ currentNode: id, character: 'lion' })
}

describe('PassageRenderer', () => {
  beforeEach(resetStore)

  it('shows an error state when the current node is not found', () => {
    goToNode('NON_EXISTENT_NODE')
    render(<PassageRenderer />)
    expect(screen.getByText(/NODE NOT FOUND/i)).toBeInTheDocument()
    expect(screen.getByText(/SIGNAL LOST/i)).toBeInTheDocument()
  })

  it('renders passage text when the node exists', () => {
    goToNode('LION_INIT')
    render(<PassageRenderer />)
    expect(screen.getByText(/you must decide what kind of body you are bringing to it/i)).toBeInTheDocument()
  })

  it('renders choices for a non-ending passage', () => {
    goToNode('LION_INIT')
    render(<PassageRenderer />)
    const nav = screen.getByRole('navigation', { name: /available choices/i })
    expect(nav).toBeInTheDocument()
    const buttons = screen.getAllByRole('button')
    expect(buttons.length).toBeGreaterThan(0)
  })

  it('does not show a restart button on a non-ending passage', () => {
    goToNode('LION_INIT')
    render(<PassageRenderer />)
    expect(screen.queryAllByText(/begin new session/i).length).toBe(0)
  })

  it('renders the Ghost Signal passage with a terminate button', () => {
    goToNode('GHOST_SIGNAL')
    render(<PassageRenderer />)
    expect(screen.getByText(/TERMINATE SESSION/i)).toBeInTheDocument()
    expect(screen.queryByText(/Begin new session/i)).not.toBeInTheDocument()
  })
})
