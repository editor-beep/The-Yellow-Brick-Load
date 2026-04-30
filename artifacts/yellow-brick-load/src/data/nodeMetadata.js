const TAGS_BY_NODE = {
  LION_INIT: ['FEAR', 'CONTROL'],
  LION_STANDARD_AUDIT: ['CONTROL', 'COMPLIANCE'],
  LION_RESIST_GATE: ['RESISTANCE', 'FEAR'],
  LION_ORACLE_ENTRY: ['CONTROL', 'RESISTANCE'],
  LION_ORACLE_DRAW: ['FEAR', 'RESISTANCE'],
  LION_END_COMPLY: ['COMPLIANCE', 'CONTROL'],
  LION_END_REFUSAL: ['RESISTANCE', 'FEAR'],
}

export const NODE_POSITIONS = {
  LION_INIT: { x: 80, y: 140 },
  LION_STANDARD_AUDIT: { x: 220, y: 140 },
  LION_RESIST_GATE: { x: 220, y: 250 },
  LION_ORACLE_ENTRY: { x: 340, y: 140 },
  LION_ORACLE_DRAW: { x: 470, y: 140 },
  LION_END_COMPLY: { x: 620, y: 140 },
  LION_END_REFUSAL: { x: 620, y: 260 },
  TIN_MAN_INIT: { x: 80, y: 340 },
  TIN_MAN_STANDARD_AUDIT: { x: 220, y: 340 },
  TIN_MAN_ORACLE_ENTRY: { x: 340, y: 340 },
  SCARECROW_INIT: { x: 80, y: 540 },
  DOROTHY_INIT: { x: 220, y: 540 },
}

function humanize(id) {
  return id.replaceAll('_', ' ')
}

export function getNodeMeta(nodeId) {
  const title = humanize(nodeId)
  const tags = TAGS_BY_NODE[nodeId] || inferTagsFromId(nodeId)
  return { title, tags }
}

function inferTagsFromId(nodeId) {
  const id = nodeId.toLowerCase()
  const tags = []
  if (id.includes('audit') || id.includes('protocol') || id.includes('oracle')) tags.push('CONTROL')
  if (id.includes('resist') || id.includes('refusal') || id.includes('break')) tags.push('RESISTANCE')
  if (id.includes('end') || id.includes('comply')) tags.push('COMPLIANCE')
  if (tags.length === 0) tags.push('FEAR')
  return [...new Set(tags)].slice(0, 3)
}
