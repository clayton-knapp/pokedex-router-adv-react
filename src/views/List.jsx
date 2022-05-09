import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Item from '../components/Item';
import styles from '../App.css';

export default function List() {

  // state
  const [pokedex, setPokedex] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const PER_PAGE = 20;
  // const [currentPage, setCurrentPage] = useState(params.page ? parseInt(params.page) : 1);
  const [currentPage, setCurrentPage] = useState(1);

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

  // console.log('pokedex', pokedex)
  



  return (
    <div className={styles['list-page']}>
      <h2>Pokemon List:</h2>
      <h3>Page: {currentPage}</h3>
      <div className={styles['button-container']}>
        <button
          disabled={currentPage === 1}
          onClick={()=> setCurrentPage(currentPage - 1)}
        >Prev Page</button>
        <button
          disabled={pokedex.length < PER_PAGE}
          onClick={()=> setCurrentPage(currentPage + 1)}
        >Next Page</button>
      </div>
      <div className={styles['list-container']}>
        {isLoading
          ? <p>Loading Pokedex...</p>
          : pokedex.map((pokemon) => 
            <Link
              key={pokemon.id}
              to={`/pokemon/${pokemon._id}`}
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
