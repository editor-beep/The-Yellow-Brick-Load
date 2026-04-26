import './styles/global.css'
import { useGameStore } from './engine/store.js'
import TitleScreen from './components/TitleScreen.jsx'
import PassageRenderer from './components/PassageRenderer.jsx'

export default function App() {
  const { character, currentNode } = useGameStore()

  if (!character || !currentNode) {
    return <TitleScreen />
  }

  return <PassageRenderer />
}
