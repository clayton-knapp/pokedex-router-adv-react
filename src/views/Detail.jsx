import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Detail() {
  //state
  const [pokemon, setPokemon] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  console.log('params', params);

  // API fetch for specific pokemon based on id in params
  useEffect(() => {
    async function setAndFetchPokemon() {
      const response = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex/${params.id}`);
      const parsedData = await response.json();
      console.log('parsedData', parsedData);
      setPokemon(parsedData);
    }
    setAndFetchPokemon();
  }, []);

  console.log('pokemon', pokemon)
  


  return (
    <div>
      <h2>{pokemon.pokemon}</h2>
    </div>
  )
};
