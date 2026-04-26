import { useEffect } from 'react'
import { faqEntries } from '../data/faq.js'

export default function FAQPage({ onClose }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [])

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

      <div className="faq-list">
        {faqEntries.length === 0 && (
          <p className="faq-empty">[ NO ENTRIES INDEXED ]</p>
        )}

        {faqEntries.map(entry => (
          <article key={entry.id} className="faq-entry">
            <h2 className="faq-question">{entry.question}</h2>
            <div className="faq-answer">
              {entry.answer.split(/\n\s*\n/).map((para, i) => (
                <p key={i}>{para.trim()}</p>
              ))}
            </div>
          </article>
        ))}
      </div>

      <footer className="faq-footer">
        <p>[ END OF INDEX ]</p>
      </footer>
    </div>
  )
}
