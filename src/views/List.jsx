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

  // get page from URLSearchParams if none set to 1
  const page = new URLSearchParams(location.search).get('page') ?? 1;

  const [searchInput, setSearchInput] = useState('');
  // get search from URLSearch Params, if none set to ''
  const search = new URLSearchParams(location.search).get('search') ?? '';


  // API call in useEffect
  useEffect(() => {
    async function fetchAndSetPokedex() {
      setIsLoading(true);

      // const page = new URLSearchParams(location.search).get('page') ?? 1;

      // const search = new URLSearchParams(location.search).get('search') ?? '';

      const url =
        search
          ? `https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${search}`
          : `https://pokedex-alchemy.herokuapp.com/api/pokedex?page=${page}&perPage=${PER_PAGE}`;
      
          
      const response = await fetch(url);
      const parsedData = await response.json();
      // console.log('parsedData', parsedData)
      setPokedex(parsedData.results);
      setIsLoading(false);
    }
    fetchAndSetPokedex();
  }, [location.search]); //location.search here covers page and search


  function handlePrevPage() {
    history.push(`/pokemon/?page=${Number(page) - 1 }`);
  }

  function handleNextPage() {
    history.push(`/pokemon/?page=${Number(page) + 1}`);
  }

  function handleSearchSubmit(e) {
    e.preventDefault();
    history.push(`/pokemon/?search=${searchInput}`);
    setSearchInput('');
  }
  



  return (
    <div className={styles['list-page']}>
      <h2>Pokemon List:</h2>
      <h3>Page: {page}</h3>
      <div className={styles['button-container']}>
        <button
          disabled={Number(page) === 1}
          onClick={handlePrevPage}
        >Prev Page</button>
        <button
          disabled={pokedex.length < PER_PAGE}
          onClick={handleNextPage}
        >Next Page</button>
      </div>
      <form action=""
        onSubmit={handleSearchSubmit}
      >
        <label htmlFor="search">
          Search:
          <input
            type="text"
            name="search"
            value={searchInput}
            onChange={(e) => {setSearchInput(e.target.value)}}
          />
          <button type="submit">
            Submit Search
          </button>
        </label>
      </form>
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
