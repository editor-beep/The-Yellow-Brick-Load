export type OracleTone =
  | 'assimilation'
  | 'rebellion'
  | 'compliance'
  | 'paranoia'
  | 'rupture'
  | 'transcendence'

export type OracleEffect = {
  id: string
  type: 'status' | 'resource' | 'route' | 'trigger'
  value?: number
  target?: string
  payload?: Record<string, unknown>
}

export type OracleRuntimeState = {
  deckId: string
  turn: number
  stress: number
  compliance: number
  rebellion: number
  flags: string[]
}

export type OracleCard = {
  id: string
  name: string

  // Visual
  svg: string

  // Narrative
  description: string
  tone: OracleTone

  // System logic
  weight: (state: OracleRuntimeState) => number
  effects: OracleEffect[]

  // Routing
  unlocks?: string[]
  blocks?: string[]
  redirects?: string
}

export type OracleDeck = {
  id: string
  name: string
  interloper: string
  cards: OracleCard[]
}
