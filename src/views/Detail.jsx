import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from '../App.css';

export default function Detail() {
  //state
  const [pokemon, setPokemon] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  // console.log('params', params);

  // API fetch for specific pokemon based on id in params
  useEffect(() => {
    async function setAndFetchPokemon() {
      const response = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex/${params.id}`);
      const parsedData = await response.json();
      // console.log('parsedData', parsedData);
      setPokemon(parsedData);
      setIsLoading(false);
    }
    setAndFetchPokemon();
  }, []);

  // console.log('pokemon', pokemon)
  


  return (
  <>
      {isLoading
        ? <p>Loading Pokemon...</p>
        :
        <div
        className={styles['detail']}
        style={{ backgroundColor: pokemon.color_1
        }}
        >
          <h2>{pokemon.pokemon}</h2>
          <img src={pokemon.url_image} alt={`Image of ${pokemon.pokemon}`} />
          <h3>Type 1: {pokemon.type_1}</h3>
          <h3>Type 2: {pokemon.type_2}</h3>
          <h4>Attack: {pokemon.attack}</h4>
          <h4>Defense: {pokemon.defense}</h4>
          <h4>HP: {pokemon.hp}</h4>
          <h4>Special Attack: {pokemon.special_attack}</h4>
          <h4>Special Defense: {pokemon.special_defense}</h4>
          <h4>Speed: {pokemon.speed}</h4>
          <h5>Shape: {pokemon.shape}</h5>
        </div>
        }
    </>
  )
};
