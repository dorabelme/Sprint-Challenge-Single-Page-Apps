import React, { useEffect, useState } from 'react';
import LocationCard from "./LocationCard";
import axios from 'axios';
import SearchForm from "./SearchForm";

export default function LocationList() {
    // TODO: Add useState to track data from useEffect
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        // TODO: Add AJAX/API Request here - must run in `useEffect`
        //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
        axios
            .get(`https://rickandmortyapi.com/api/location/`)
            .then(response => {
                setLocations(response.data.results);
            })
            .catch(error => {
                console.error(error);
            });
    }, [])

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
            <section className='character-list grid-view'>
                {/* <h2> */}
                {locations.map(location => <LocationCard key={location.id} {...location} />)}
                {/* // TODO: `array.map()` over your state here! */}
                {/* </h2> */}
            </section>
        </div>
    )
}