import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, [])

  function onSearch(query) {
    console.log(query)
      axios
        .get(`https://rickandmortyapi.com/api/character/?name=${query.name}`)
        .then(response => {
          setCharacters(response.data.results);
        })
        .catch(error => {
          console.error(error);
        });
  }

  return (
    <div>
      <SearchForm onSearch={onSearch} />
      <section className='character-list grid-view'>
        {/* <h2> */}
        {characters.map(character => <CharacterCard key={character.id} character={character} />)}
        {/* // TODO: `array.map()` over your state here! */}
        {/* </h2> */}
      </section>
      </div>
  );
}
