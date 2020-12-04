import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import PageLayoutContainer from './layouts/PageLayoutContainer'
import HeroListPage from './pages/HeroListPage'
import HeroProfilePage from './pages/HeroProfilePage'
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
                <HeroProfilePage />
              </Route>
            </PageLayoutContainer>
          )
        }}
      />

    </Switch>
  </BrowserRouter>
)
export default Routes
