import { Component } from 'react'
import NotFoundPage from '../pages/NotFoundPage'
class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    // can send hero app error to server here
    console.error(error)
  }

  render() {
    const { hasError, error } = this.state

    if (hasError) {
      if (error.message.includes('Network Error')) {
        return <NotFoundPage message='Network Error' error={error} />
      }
      return <NotFoundPage error={error} />
    }

    return this.props.children
  }
}

export default ErrorBoundary
