import { lazy, Suspense, useState } from 'react'
import './styles/global.css'
import { useGameStore } from './engine/store.js'
import { hasVisited, markVisit } from './engine/store.js'
import TitleScreen from './components/TitleScreen.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'

// Split the heavy in-game surfaces (passage content, oracle, interpreter) out
// of the initial bundle. First-time visitors land on the title screen and never
// need this code until they actually start playing.
const PassageRenderer = lazy(() => import('./components/PassageRenderer.jsx'))
const FAQPage = lazy(() => import('./components/FAQPage.jsx'))

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
        <Suspense fallback={null}>
          <PassageRenderer />
        </Suspense>
      </ErrorBoundary>
    )
  }

  if (view === 'faq') {
    return (
      <ErrorBoundary>
        <Suspense fallback={null}>
          <FAQPage onClose={() => setView('title')} />
        </Suspense>
      </ErrorBoundary>
    )
  }

  return (
    <ErrorBoundary>
      <TitleScreen onOpenFAQ={() => setView('faq')} returning={returning} />
    </ErrorBoundary>
  )
}
