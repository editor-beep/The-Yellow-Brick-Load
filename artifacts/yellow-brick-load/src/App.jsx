import { useState } from 'react'
import './styles/global.css'
import { useGameStore } from './engine/store.js'
import { hasVisited, markVisit } from './engine/store.js'
import TitleScreen from './components/TitleScreen.jsx'
import PassageRenderer from './components/PassageRenderer.jsx'
import FAQPage from './components/FAQPage.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'

export default function App() {
  const { character, currentNode } = useGameStore()
  const [view, setView] = useState('title')
  // Initialise from localStorage before the first render to avoid a flash
  const [returning] = useState(() => {
    const was = hasVisited()
    markVisit()
    return was
  })

  if (character && currentNode) {
    return (
      <ErrorBoundary>
        <PassageRenderer />
      </ErrorBoundary>
    )
  }

  if (view === 'faq') {
    return (
      <ErrorBoundary>
        <FAQPage onClose={() => setView('title')} />
      </ErrorBoundary>
    )
  }

  return (
    <ErrorBoundary>
      <TitleScreen onOpenFAQ={() => setView('faq')} returning={returning} />
    </ErrorBoundary>
  )
}
