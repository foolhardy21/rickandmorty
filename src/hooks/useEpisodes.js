import axios from "axios";
import { useEpisodeNames } from "contexts/episodes.context";
import { useState, useEffect } from "react";

/**
 * this hook is to fetch the episodes of a character for modal view.
 * @param {Object} - character
 * @return {Array} - array of episode names
 */
export const useEpisodes = (character) => {
    const [episodes, setEpisodes] = useState([]);
    const { allEpisodes, setAllEpisodes } = useEpisodeNames()

    useEffect(() => {
        (async () => {
            try {
                const charEpisodesIds = character.episode.map(url => Number(url.replace('https://rickandmortyapi.com/api/episode/', '')))
                const uniqueEpisodesIds = charEpisodesIds.filter(id => !allEpisodes.some(epObj => epObj.id === id))

                if (uniqueEpisodesIds.length > 0) {
                    const response = await axios.get(`https://rickandmortyapi.com/api/episode/${uniqueEpisodesIds}`)

                    const newAllEpisodes = [...allEpisodes, ...response.data.map(responseEpisode => ({ id: responseEpisode.id, name: responseEpisode.name }))]

                    setEpisodes(newAllEpisodes.filter(epObj => charEpisodesIds.some(charEpId => charEpId === epObj.id)).map(ep => ep.name))

                    setAllEpisodes(newAllEpisodes)
                } else {
                    setEpisodes(allEpisodes.filter(epObj => charEpisodesIds.some(charEpId => charEpId === epObj.id)).map(ep => ep.name))
                }

            } catch (e) {
                console.log(e);
            }
        })();
    }, []);

    return [episodes]
};