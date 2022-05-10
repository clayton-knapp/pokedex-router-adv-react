import React, { useState } from 'react';
import { signUpUser, signInUser } from '../utils/user';
import { useHistory } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import styles from '../App.css';

export default function Login() {
  // state
  const context = useUser();
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // if (context.user) {
  //   history.replace('/pokemon')
  // }


  async function handleSignInClick(e) {
    try {
      e.preventDefault();
      const user = await signInUser({ email, password, });
      
      // console.log('user', user); 

      if (user) {
        context.setUser(user);
        history.replace('/pokemon');
      }

      
    } catch (error) {
      setError(error.message);
    }
  }

  async function handleSignUpClick(e) {
    try {
      e.preventDefault();
      const user = await signUpUser({ email, password, });
      
      // console.log('user', user);
      
      if (user) {
        context.setUser(user);
        history.replace('/pokemon');
      }

    } catch (error) {
      setError(error.message);
    }
  }


  return (
    <div className={styles['sign-in-page']}>
      <h2>Sign In / Sign Up</h2>
      <form action="email" className={styles['sign-in-form']}>
        <label htmlFor="email">Email:
          <input
            required
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label htmlFor="password">Password:
          <input
            required
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button
          // type="submit"
          aria-label="Sign In"
          onClick={handleSignInClick}
        >Sign In</button>
        <button
          aria-label="Sign Up"
          onClick={handleSignUpClick}
        >Sign Up</button>
      </form>
      <p>{error}</p>
    </div>
  )
};
