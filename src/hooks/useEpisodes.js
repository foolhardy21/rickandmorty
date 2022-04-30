import axios from "axios";
import { useState, useEffect } from "react";

export const useEpisodes = (character) => {
    const [episodes, setEpisodes] = useState([]);


    useEffect(() => {
        (async () => {
            const episodeNames = await Promise.allSettled(character.episode.map(async (ep) => {
                const response = await axios.get(ep);
                return response.data.name;
            }));
            setEpisodes(episodeNames?.map(ep => ep.value));
        })();
    }, []);

    return [episodes]
};