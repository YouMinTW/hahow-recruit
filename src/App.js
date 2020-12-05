import { Suspense } from 'react'
import './App.css'
import Routes from './Routes'
import { RecoilRoot } from 'recoil'
import LoadingPage from './pages/LoadingPage'

function App() {
  return (
    <RecoilRoot>
      <Suspense fallback={<LoadingPage />}>
        <Routes />
      </Suspense>
    </RecoilRoot>
  )
}

export default App
