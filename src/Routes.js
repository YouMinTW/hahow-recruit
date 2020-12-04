import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import HeroListPage from './pages/HeroListPage'
const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/'>
        <Redirect to='/heroes' />
      </Route>
      <Route path='/heroes' component={HeroListPage} />
    </Switch>
  </BrowserRouter>
)
export default Routes
