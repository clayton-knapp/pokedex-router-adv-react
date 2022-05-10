import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { useLocation } from 'react-router-dom';

export default function PrivateRoute({ children, ...rest }) {
  const { user } = useUser();
  const location = useLocation();

  // console.log('context', context)
  
  return (
    <Route {...rest}>
      {user.email
        ? children
        : <Redirect
            to='/'
            // to={{
            //   pathname: '/',
            //   state: { from: location }
            // }}
          />
      }
    </Route>
  );
}
