import '@testing-library/jest-dom'
import { vi } from 'vitest'

// jsdom does not implement these browser APIs that the app relies on.
// Provide lightweight polyfills so component tests can render.
if (typeof window !== 'undefined') {
  window.scrollTo = vi.fn()

  if (!('ResizeObserver' in window)) {
    window.ResizeObserver = class {
      observe() {}
      unobserve() {}
      disconnect() {}
    }
  }
}

if (typeof globalThis !== 'undefined' && !('ResizeObserver' in globalThis)) {
  globalThis.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
}
