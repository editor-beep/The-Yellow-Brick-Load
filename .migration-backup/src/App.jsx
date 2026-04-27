import './styles/global.css'
import { useGameStore } from './engine/store.js'
import TitleScreen from './components/TitleScreen.jsx'
import PassageRenderer from './components/PassageRenderer.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'

export default function App() {
  const { character, currentNode } = useGameStore()

  if (!character || !currentNode) {
    return (
      <ErrorBoundary>
        <TitleScreen />
      </ErrorBoundary>
    )
  }

  return (
    <ErrorBoundary>
      <PassageRenderer />
    </ErrorBoundary>
  )
}
