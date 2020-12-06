import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import PageLayoutContainer from './layouts/PageLayoutContainer'
import HeroListPage from './pages/HeroListPage'
import HeroProfilePageLoadable from './pages/HeroProfilePage'
import NotFoundPage from './pages/NotFoundPage'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/'>
        <Redirect to='/heroes' />
      </Route>

      <Route
        path='/heroes'
        render={({ match }) => {
          const path = match.path
          return (
            <PageLayoutContainer>
              <Route path={path}>
                <HeroListPage />
              </Route>
              <Route path={`${path}/:heroID`}>
                <HeroProfilePageLoadable />
              </Route>
            </PageLayoutContainer>
          )
        }}
      />
      {/* Client 搜尋不到的路由，類似於後端回傳 404，但不傳遞 error prop （預設行為可以返回上一頁） */}
      <Route component={() => <NotFoundPage message='Not Found' />} />
    </Switch>
  </BrowserRouter>
)
export default Routes
