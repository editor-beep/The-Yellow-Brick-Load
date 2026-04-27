import { describe, it, expect } from 'vitest'
import { interpolate, resolveText, isChoiceAvailable, applyEffects } from '../engine/interpreter.js'

// ── interpolate ──────────────────────────────────────────────────────────────
describe('interpolate', () => {
  const baseState = {
    load: 42,
    desync: 2,
    compliance: 'med',
    character: 'lion',
    reset_count: 1,
    smudge: 1,
    flags: { quest_done: true, name: 'unit-77' },
  }

  it('replaces {{load}}', () => {
    expect(interpolate('Load: {{load}}', baseState)).toBe('Load: 42')
  })

  it('replaces {{desync}}', () => {
    expect(interpolate('Desync: {{desync}}', baseState)).toBe('Desync: 2')
  })

  it('replaces {{compliance}}', () => {
    expect(interpolate('Status: {{compliance}}', baseState)).toBe('Status: med')
  })

  it('replaces {{character}}', () => {
    expect(interpolate('Unit: {{character}}', baseState)).toBe('Unit: lion')
  })

  it('falls back to "unit" when character is null', () => {
    expect(interpolate('Unit: {{character}}', { ...baseState, character: null })).toBe('Unit: unit')
  })

  it('replaces {{reset_count}}', () => {
    expect(interpolate('Resets: {{reset_count}}', baseState)).toBe('Resets: 1')
  })

  it('replaces {{smudge}}', () => {
    expect(interpolate('Smudge: {{smudge}}', baseState)).toBe('Smudge: 1')
  })

  it('replaces {{flags.KEY}} with flag value', () => {
    expect(interpolate('Name: {{flags.name}}', baseState)).toBe('Name: unit-77')
  })

  it('replaces {{flags.KEY}} with empty string when flag is unset', () => {
    expect(interpolate('Value: {{flags.missing}}', baseState)).toBe('Value: ')
  })

  it('replaces {{flags.KEY}} with empty string when flags object is absent', () => {
    const stateNoFlags = { ...baseState, flags: undefined }
    expect(interpolate('Value: {{flags.key}}', stateNoFlags)).toBe('Value: ')
  })

  it('replaces multiple tokens in one string', () => {
    expect(interpolate('{{load}} / {{desync}}', baseState)).toBe('42 / 2')
  })
})

// ── resolveText ──────────────────────────────────────────────────────────────
describe('resolveText', () => {
  const passage = {
    text: [
      { minOverrender: 0, content: 'Normal text.' },
      { minOverrender: 3, content: 'Decayed text.' },
      { minOverrender: 5, content: 'Max decay text.' },
    ],
  }

  it('returns the base block when overrender is 0', () => {
    expect(resolveText(passage, 0)).toBe('Normal text.')
  })

  it('returns the base block when overrender is between thresholds', () => {
    expect(resolveText(passage, 2)).toBe('Normal text.')
  })

  it('returns a higher threshold block when overrender meets it', () => {
    expect(resolveText(passage, 3)).toBe('Decayed text.')
  })

  it('returns the highest matching block', () => {
    expect(resolveText(passage, 5)).toBe('Max decay text.')
  })

  it('returns empty string when no blocks match', () => {
    expect(resolveText({ text: [] }, 0)).toBe('')
  })
})

// ── isChoiceAvailable ────────────────────────────────────────────────────────
describe('isChoiceAvailable', () => {
  const state = { load: 50, compliance: 'high' }

  it('returns true when condition is null', () => {
    expect(isChoiceAvailable({ condition: null }, state)).toBe(true)
  })

  it('returns true when condition function returns true', () => {
    expect(isChoiceAvailable({ condition: (s) => s.load > 40 }, state)).toBe(true)
  })

  it('returns false when condition function returns false', () => {
    expect(isChoiceAvailable({ condition: (s) => s.load > 60 }, state)).toBe(false)
  })
})

// ── applyEffects (smoke) ─────────────────────────────────────────────────────
describe('applyEffects', () => {
  it('handles null without throwing', () => {
    expect(() => applyEffects(null)).not.toThrow()
  })

  it('handles an empty array without throwing', () => {
    expect(() => applyEffects([])).not.toThrow()
  })

  it('logs a warning for unknown effect types without throwing', () => {
    expect(() => applyEffects([{ type: '__unknown__' }])).not.toThrow()
  })
})
