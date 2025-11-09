import React from 'react'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    // eslint-disable-next-line no-console
    console.error('3D asset error:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-50 to-teal-50">
          <div className="text-center">
            <div className="mx-auto mb-3 h-10 w-10 rounded-full bg-indigo-600/10 animate-pulse" />
            <p className="text-xs text-gray-500">Visual 3D tidak dapat dimuat</p>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
