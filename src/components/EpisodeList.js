import React, { useEffect, useState } from 'react';
import EpisodeCard from "./EpisodeCard";
import axios from 'axios';

export default function EpisodeList() {
    // TODO: Add useState to track data from useEffect
    const [episodes, setEpisodes] = useState([]);
    console.log("running");
    useEffect(() => {
        // TODO: Add AJAX/API Request here - must run in `useEffect`
        //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
        axios
            .get(`https://rickandmortyapi.com/api/episode/`)
            .then(response => {
                setEpisodes(response.data.results);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (<section className='character-list grid-view'>
        {/* <h2> */}
        {episodes.map(episode => <EpisodeCard key={episode.id} {...episode} />)}
        {/* // TODO: `array.map()` over your state here! */}
        {/* </h2> */}
    </section>
    );
}