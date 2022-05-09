import {
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom';
import List from './views/List';
import Detail from './views/Detail';

export default function App() {
  return (
    <Switch>

      {/* Route for Detail */}
      <Route path='/pokemon/:id'>
        <Detail />
      </Route>

      {/* Route for List */}
      <Route path='/pokemon'>
        <List />
      </Route>

      {/* Route for Home -> Redirect to List for now */}
      <Route path='/'>
        <Redirect exact from="/" to="/pokemon" />
      </Route>

    </Switch>
  );
}
