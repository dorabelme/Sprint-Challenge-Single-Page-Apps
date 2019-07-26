import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
import ButtonExampleShorthand from "./Button";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState("https://rickandmortyapi.com/api/character/?page1");
  const [previous, setPrevious] = useState("");
  const [next, setNext] = useState("");

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get(page)
      .then(res => {
        res.data.info.next === null ? setNext("") : setNext(res.data.info.next);

        res.data.info.prev === null ? setPrevious("") : setPrevious(res.data.info.prev);
        console.log(previous, next)
        setCharacters(res.data.results);
      })
      .catch(error => {
        console.log("The API is currently down, try again later ", error);
      });
  }, [page])

  const visitPrevious = () => previous !== "" ? setPage(previous) : 0;
  const visitNext = () => next !== "" ? setPage(next) : 0;

  function onSearch(query) {
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
      <div className="buttonDiv">
        <ButtonExampleShorthand onClick={visitPrevious} content="Previous"></ButtonExampleShorthand>
        <ButtonExampleShorthand onClick={visitNext} content="Next"></ButtonExampleShorthand>
      </div>
      <section className='character-list grid-view'>
        {/* <h2> */}
        {characters.map(character => <CharacterCard key={character.id} character={character} />)}
        {/* // TODO: `array.map()` over your state here! */}
        {/* </h2> */}
      </section>
      </div>
  );
}
