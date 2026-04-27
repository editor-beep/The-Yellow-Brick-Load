import { useEffect, useState } from 'react'
import './styles/global.css'
import { useGameStore } from './engine/store.js'
import { hasVisited, markVisit } from './engine/store.js'
import TitleScreen from './components/TitleScreen.jsx'
import PassageRenderer from './components/PassageRenderer.jsx'
import FAQPage from './components/FAQPage.jsx'

export default function App() {
  const { character, currentNode } = useGameStore()
  const [view, setView] = useState('title')
  const [returning, setReturning] = useState(false)

  useEffect(() => {
    if (hasVisited()) setReturning(true)
    markVisit()
  }, [])

  if (character && currentNode) {
    return <PassageRenderer />
  }

  if (view === 'faq') {
    return <FAQPage onClose={() => setView('title')} />
  }

  return <TitleScreen onOpenFAQ={() => setView('faq')} returning={returning} />
}
