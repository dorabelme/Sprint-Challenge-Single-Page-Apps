import React, { useEffect, useState } from 'react';
import EpisodeCard from "./EpisodeCard";
import axios from 'axios';
import SearchForm from "./SearchForm";
import ButtonExampleShorthand from "./Button";

export default function EpisodeList() {
    // TODO: Add useState to track data from useEffect
    const [episodes, setEpisodes] = useState([]);
    const [page, setPage] = useState("https://rickandmortyapi.com/api/episode/?page1");
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
                setEpisodes(res.data.results);
            })
            .catch(error => {
                console.log("The API is currently down, try again later ", error);
            });
    }, [page]);

    const visitPrevious = () => previous !== "" ? setPage(previous) : 0;
    const visitNext = () => next !== "" ? setPage(next) : 0;

    function onSearch(query) {
        axios
            .get(`https://rickandmortyapi.com/api/episode/?name=${query.name}`)
            .then(response => {
                setEpisodes(response.data.results);
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
                {episodes.map(episode => <EpisodeCard key={episode.id} {...episode} />)}
                {/* // TODO: `array.map()` over your state here! */}
                {/* </h2> */}
            </section>
        </div>
    );
}