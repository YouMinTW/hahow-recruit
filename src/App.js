import { Suspense } from 'react'
import './App.css'
import Routes from './Routes'
import { RecoilRoot } from 'recoil'
import LoadingPage from './pages/LoadingPage'
import ErrorBoundary from './main/ErrorBoundary'

function App() {
  return (
    <ErrorBoundary>
      <RecoilRoot>
        <Suspense fallback={<LoadingPage />}>
          <Routes />
        </Suspense>
      </RecoilRoot>
    </ErrorBoundary>
  )
}

export default App
