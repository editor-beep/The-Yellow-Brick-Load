import { useState, useEffect } from 'react'
import { faqEntries } from '../data/faq.js'

export default function FAQPage({ onClose }) {
  const [openIds, setOpenIds] = useState(new Set())

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [])

  const toggleItem = (id) => {
    setOpenIds(prev => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  return (
    <div className="faq-screen">
      <button
        type="button"
        className="faq-return"
        onClick={onClose}
        aria-label="Return to interface"
      >
        [ ← RETURN TO INTERFACE ]
      </button>

      <header className="faq-header">
        <h1 className="faq-title">FREQUENTLY LOGGED QUERIES</h1>
        <p className="faq-subtitle">Recovered operator documentation. Read at your own discretion.</p>
      </header>

      <div className="faq-accordion">
        {faqEntries.length === 0 && (
          <p className="faq-empty">[ NO ENTRIES INDEXED ]</p>
        )}

        {faqEntries.map(entry => {
          const isOpen = openIds.has(entry.id)
          return (
            <div key={entry.id} className="accordion-item">
              <button
                type="button"
                className={`accordion-header${isOpen ? ' active' : ''}`}
                onClick={() => toggleItem(entry.id)}
                aria-expanded={isOpen}
              >
                <span>{entry.question}</span>
                <span className="accordion-icon" aria-hidden="true">{isOpen ? '−' : '+'}</span>
              </button>

              <div
                className="accordion-content"
                style={{
                  maxHeight: isOpen ? 'none' : '0',
                  overflow: 'hidden',
                  padding: isOpen ? '1rem 0 1.5rem' : '0',
                }}
              >
                {entry.answer.split(/\n\s*\n/).map((para, i) => (
                  <p key={i}>{para.trim()}</p>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      <footer className="faq-footer">
        <p>[ END OF INDEX ]</p>
      </footer>
    </div>
  )
}
