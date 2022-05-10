import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from './context/UserContext';

render(
  <React.StrictMode>
    <Router>
      <UserProvider>
          <App />
      </UserProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
