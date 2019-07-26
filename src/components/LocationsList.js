import React, { useEffect, useState } from 'react';
import LocationCard from "./LocationCard";
import axios from 'axios';
import SearchForm from "./SearchForm";
import ButtonExampleShorthand from "./Button";

export default function LocationList() {
    // TODO: Add useState to track data from useEffect
    const [locations, setLocations] = useState([]);
    const [page, setPage] = useState("https://rickandmortyapi.com/api/location/?page1");
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
                setLocations(res.data.results);
            })
            .catch(error => {
                console.log("The API is currently down, try again later ", error);
            });
    }, [page]);

    const visitPrevious = () => previous !== "" ? setPage(previous) : 0;
    const visitNext = () => next !== "" ? setPage(next) : 0;

    function onSearch(query) {
        axios
            .get(`https://rickandmortyapi.com/api/location/?name=${query.name}`)
            .then(response => {
                setLocations(response.data.results);
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
                {locations.map(location => <LocationCard key={location.id} {...location} />)}
                {/* // TODO: `array.map()` over your state here! */}
                {/* </h2> */}
            </section>
        </div>
    )
}