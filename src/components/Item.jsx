import React from 'react';
import styles from '../App.css';

export default function Item({ pokemon }) {
  return (
    <div
      className={styles['item']}
      style={{ backgroundColor: pokemon.color_1 }}
    >
      <h2>{pokemon.pokemon}</h2>
      <img src={pokemon.url_image} alt={`Image of ${pokemon.pokemon}`} />
      <p>Type 1: {pokemon.type_1}</p>
      <p>Type 2: {pokemon.type_2}</p>
    </div>
  )
}
