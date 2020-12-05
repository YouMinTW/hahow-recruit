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

      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
)
export default Routes
