import React from 'react';
import { useState, useEffect } from 'react';

export default function List() {

  // state
  const [pokedex, setPokedex] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //api call in useEffect
  useEffect(() => {
    async function fetchAndSetPokedex() {
      const response = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex');
      const parsedData = await response.json();
      // console.log('parsedData', parsedData)
      setPokedex(parsedData.results);
    }
    fetchAndSetPokedex();
  }, []);

  // console.log('pokedex', pokedex)
  



  return (
    <div>
      <h2>Pokemon List:</h2>
    </div>
  )
};
