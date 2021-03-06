import React from 'react'
import { useUser } from '../context/UserContext'
import { signOutUser } from '../utils/user';
import styles from '../App.css';

export default function Header() {
  const context = useUser();


  async function handleLogout() {
    await signOutUser();
    context.setUser({});

  }

  return (
    <header className={styles['header']}>
      <h2>Pokedex Router w/ Context and Private Routes</h2>
      {
        context.user.email && (
          <div className={styles['header-container']}>
            <h4>You are logged in as: {context.user.email}</h4>
            <button
              onClick={handleLogout}
            >Log Out</button>
          </div>
        )
      }
    </header>
  )
}
