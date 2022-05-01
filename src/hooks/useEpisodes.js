import axios from "axios";
import { useState, useEffect } from "react";

/**
 * this hook is to fetch the episodes of a character for modal view.
 * @param {Object} - character
 * @return {Array} - array of episode names
 */
export const useEpisodes = (character) => {
    const [episodes, setEpisodes] = useState([]);


    useEffect(() => {
        (async () => {
            try {
                const episodeNames = await Promise.allSettled(character.episode.map(async (ep) => {
                    const response = await axios.get(ep);
                    return response.data.name;
                }));
                setEpisodes(episodeNames?.map(ep => ep.value));
            } catch (e) {
                console.log(e);
            }
        })();
    }, []);

    return [episodes]
};