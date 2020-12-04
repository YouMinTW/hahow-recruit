import { Link, useLocation } from 'react-router-dom'
import PageLayoutContainer from '../layouts/PageLayoutContainer'

const NotFoundPage = () => {
  const location = useLocation()
  return (
    <PageLayoutContainer display='flex'>
      <h1>404 Not found</h1>
      <h3>
        您所造訪的路徑 <b>{location.pathname}</b> 並不存在
      </h3>
      <Link to='/'>回首頁</Link>
    </PageLayoutContainer>
  )
}

export default NotFoundPage
