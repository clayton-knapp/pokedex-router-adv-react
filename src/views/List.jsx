import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Item from '../components/Item';

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
      setIsLoading(false);
    }
    fetchAndSetPokedex();
  }, []);

  console.log('pokedex', pokedex)
  



  return (
    <div>
      <h2>Pokemon List:</h2>
      <div className='list-container'>
        {isLoading
          ? <p>Loading Pokedex...</p>
          : pokedex.map((pokemon) => 
            <Link
              key={pokemon.id}
              to={`/pokemon/${pokemon.id}`}
            >
              <Item
                pokemon={pokemon}
              />
            </Link>
          )
        }

      </div>
    </div>
  )
};
