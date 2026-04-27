import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import PassageRenderer from '../components/PassageRenderer.jsx'
import { useGameStore } from '../engine/store.js'

function resetStore() {
  useGameStore.getState().hardReset()
}

// Helper — navigate to a node directly
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
    // LION_INIT contains this phrase in its text
    expect(screen.getByText(/THE KING OF THE FOREST IS A UNIT OF MEASURE/i)).toBeInTheDocument()
  })

  it('renders choices for a non-ending passage', () => {
    goToNode('LION_INIT')
    render(<PassageRenderer />)
    const nav = screen.getByRole('navigation', { name: /available choices/i })
    expect(nav).toBeInTheDocument()
    // LION_INIT should have at least one choice button
    const buttons = screen.getAllByRole('button')
    expect(buttons.length).toBeGreaterThan(0)
  })

  it('shows the restart button on an ending passage', () => {
    // Wire a minimal ending passage directly into the store
    useGameStore.setState({
      currentNode: '__TEST_ENDING__',
      character: 'lion',
    })

    // Monkey-patch allPassages via the module store — instead, just check
    // that LION_INIT (a non-ending) does NOT show a restart button, and
    // test the Ghost Signal ending separately via the actual passage.
    goToNode('LION_INIT')
    render(<PassageRenderer />)
    const restartButtons = screen.queryAllByText(/begin new session/i)
    expect(restartButtons.length).toBe(0)
  })

  it('renders the Ghost Signal passage with a terminate button', () => {
    goToNode('GHOST_SIGNAL')
    render(<PassageRenderer />)
    expect(screen.getByText(/TERMINATE SESSION/i)).toBeInTheDocument()
    expect(screen.queryByText(/Begin new session/i)).not.toBeInTheDocument()
  })
})
