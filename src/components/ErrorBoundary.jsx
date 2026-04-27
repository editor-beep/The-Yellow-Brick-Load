import { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, info) {
    console.error('[YBL] Render error:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="passage-error">
          <p>[ RENDER ERROR ]</p>
          <p>[ SIGNAL CORRUPTED ]</p>
          <button
            className="choice-button choice-button--restart"
            onClick={() => this.setState({ hasError: false, error: null })}
          >
            <span className="choice-arrow">↺</span>
            Attempt recovery
          </button>
        </div>
      )
    }
    return this.props.children
  }
}
