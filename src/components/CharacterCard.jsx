import axios from "axios";
import { useState, useEffect } from "react";

const CharacterCard = () => {
    const [character, setCharacter] = useState({});
    const [origin, setOrigin] = useState({});
    const [location, setLocation] = useState({});
    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await axios.get("https://rickandmortyapi.com/api/character/394");
            setCharacter(response.data);
        })();
    }, []);

    useEffect(() => {
        (async () => {
            if (Object.keys(character).length > 0) {
                const response = await axios.get(`${character.origin.url}`);
                setOrigin(response.data);
                const response2 = await axios.get(`${character.location.url}`);
                setLocation(response2.data);
            }
        })();
    }, [character]);

    useEffect(() => {
        (async () => {
            if (Object.keys(character).length > 0) {
                const episodeNames = await Promise.allSettled(character.episode.map(async (ep) => {
                    const response = await axios.get(ep);
                    return response.data.name;
                }));
                setEpisodes(episodeNames.map(ep => ep.value));
            }
        })();
    }, [character]);

    return (
        <article className="card-dim card-shadow-xs pd-xs">
            <div className="pos-relative">
                <img srcSet={character?.image} alt={character?.name} />
                <p className="txt-md txt-500 bg-primary txt-primary txt-cap pos-absolute tr-1 pd-xs">{character?.name}</p>
            </div>
            <div className="flx flx-min-center mg-top-xs mg-left-xs">
                <div className={`badge-size-xs ${character?.status === "Alive" ? "bg-success" : "bg-err"}  brd-full`}>
                </div>
                <p className="txt-md txt-primary txt-cap mg-left-xs">{character?.status}</p>
                <p className="txt-md txt-primary txt-cap mg-left-xs">{`- ${character?.species}`}</p>
            </div>
            <div className="flx flx-maj-stretch mg-top-xs">
                <div className="flx flx-column">
                    <p className="txt-md txt-300 txt-off-primary txt-cap">last location</p>
                    <p className="txt-md txt-primary txt-cap">{character?.location?.name}{" "}{location?.residents?.length}</p>
                </div>
                <div className="flx flx-column">
                    <p className="txt-md txt-300 txt-off-primary txt-cap">origins</p>
                    <p className="txt-md txt-primary txt-cap">{character?.origin?.name}{" "}{origin?.residents?.length}</p>
                </div>
            </div>
            <div className="flx flx-column mg-top-s">
                <p className="txt-md txt-300 txt-primary txt-cap">
                    episodes
                </p>
                <ul className="flx">
                    {
                        episodes?.map(ep =>
                            <li key={ep} className="txt-primary txt-md pd-xs mg-right-xs">{ep}</li>)
                    }
                </ul>
            </div>
        </article>
    );
};

export default CharacterCard;