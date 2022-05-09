import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Item from '../components/Item';
import styles from '../App.css';
import { useHistory, useLocation } from 'react-router-dom';

export default function List() {

  // state
  const history = useHistory();
  const location = useLocation();
  const [pokedex, setPokedex] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const PER_PAGE = 20;
  // const [currentPage, setCurrentPage] = useState(params.page ? parseInt(params.page) : 1);
  const page = new URLSearchParams(location.search).get('page') ?? 1;
  // const [currentPage, setCurrentPage] = useState(page || 1);

  console.log('page', page)

  console.log('history', history);
  console.log('location', location);

  //api call in useEffect
  useEffect(() => {

    async function fetchAndSetPokedex() {
      // setIsLoading(true);
      const page = new URLSearchParams(location.search).get('page') ?? 1;
      const response = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex?page=${page}`);
      const parsedData = await response.json();
      // console.log('parsedData', parsedData)
      setPokedex(parsedData.results);
      setIsLoading(false);
    }
    fetchAndSetPokedex();
  }, [location.search]);

  // console.log('pokedex', pokedex)

  function handlePrevPage() {
    // setCurrentPage(currentPage - 1);
    history.push(`/pokemon/?page=${Number(page) - 1 }`);
  }

  function handleNextPage() {
    // setCurrentPage(currentPage + 1);
    history.push(`/pokemon/?page=${Number(page) + 1}`);
  }
  



  return (
    <div className={styles['list-page']}>
      <h2>Pokemon List:</h2>
      <h3>Page: {page}</h3>
      <div className={styles['button-container']}>
        <button
          disabled={page === 1}
          onClick={handlePrevPage}
        >Prev Page</button>
        <button
          disabled={pokedex.length < PER_PAGE}
          onClick={handleNextPage}
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
