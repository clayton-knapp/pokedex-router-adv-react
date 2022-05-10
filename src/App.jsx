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
import PrivateRoute from './components/PrivateRoute';

export default function App() {
  return (
    <UserProvider>
      <Header />
      <Switch>

        {/* Route for Detail */}
        <PrivateRoute path='/pokemon/:id'>
          <Detail />
        </PrivateRoute>

        {/* Route for List */}
        <PrivateRoute path='/pokemon'>
          <List />
        </PrivateRoute>

        {/* Route for Home/Login */}
        <Route path='/'>
          <Login />
        </Route>

      </Switch>
    </UserProvider>
  );
}
