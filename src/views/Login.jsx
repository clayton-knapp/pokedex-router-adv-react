import React, { useState } from 'react';

export default function Login() {
  // state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  async function handleSignInClick(e) {
    try {
      
      
    } catch (error) {
      setError(error.message);
    }
  }


  return (
    <div>
      <h2>Sign In / Sign Up</h2>
      <form action="email">
        <label htmlFor="email">Email:
          <input
            type="email"
            name="email"
            id=""
            placeholder="Email"
            // onChange=
          />
        </label>
        <label htmlFor="password">Password:
          <input
            type="password"
            name="password"
            id=""
            placeholder="Password"
            // onChange=
          />
        </label>
        <button
          // type="submit"
          aria-label="Sign In"
          // onClick=
        >Sign In</button>
        <button
          aria-label="Sign Up"
          // onClick=
        >Sign Up</button>
      </form>
      <p>{error}</p>
    </div>
  )
};
