import {
  Route,
  Switch,
  // Link,
  Redirect
} from 'react-router-dom';
import List from './views/List';
import Detail from './views/Detail';
import Login from './views/Login';
import Header from './components/Header';
import './App.css';
import { UserProvider } from './context/UserContext';

export default function App() {
  return (
    <UserProvider>
      <Header />
      <Switch>

        {/* Route for Detail */}
        <Route path='/pokemon/:id'>
          <Detail />
        </Route>

        {/* Route for List */}
        <Route path='/pokemon'>
          <List />
        </Route>

        {/* Route for Home/Login */}
        <Route path='/'>
          <Login />
        </Route>

      </Switch>
    </UserProvider>
  );
}
