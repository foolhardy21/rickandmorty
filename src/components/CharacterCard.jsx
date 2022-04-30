import axios from "axios";
import { useState, useEffect } from "react";
import styles from '../App.module.css'

const CharacterCard = ({ character }) => {
    const [origin, setOrigin] = useState({});
    const [location, setLocation] = useState({});
    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        (async () => {
            if (Object.keys(character).length > 0) {
                const response = await axios.get(character.origin.url);
                setOrigin(response.data);
            }
        })();
    }, [character]);

    useEffect(() => {
        (async () => {
            if (Object.keys(character).length > 0) {
                const response = await axios.get(character.location.url);
                setLocation(response.data);
            }
        })();
    }, [character])

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
        <article className={` ${styles.characterCard} card-shadow-xs pd-xs`}>
            <div className="pos-relative">
                <img srcSet={character?.image} alt={character?.name} className={styles.charImage} />
                <p className="txt-md txt-500 bg-primary txt-primary txt-cap pos-absolute tr-1 pd-xs">{character?.name}</p>
            </div>
            <div className="flx flx-min-center mg-top-xs mg-left-xs mg-btm-s">
                <div className={`badge-size-xs ${character?.status === "Alive" ? "bg-success" : character?.status === "Dead" ? "bg-err" : "bg-off-primary"}  brd-full`}>
                </div>
                <p className="txt-md txt-primary txt-cap mg-left-xs">{character?.status}</p>
                <p className="txt-md txt-primary txt-cap mg-left-xs">{`- ${character?.species}`}</p>
            </div>
            <div className="flx flx-maj-stretch mg-top-xs">
                <div className="flx flx-column">
                    <p className="txt-md txt-300 txt-off-primary txt-cap mg-btm-xs">last location</p>
                    <p className="txt-md txt-primary txt-cap">{character?.location?.name}</p>
                    <p className="txt-md txt-primary txt-cap">{location?.residents?.length} residents</p>
                </div>
                <div className="flx flx-column">
                    <p className="txt-md txt-300 txt-off-primary txt-cap mg-btm-xs">origins</p>
                    <p className="txt-md txt-primary txt-cap">{character?.origin?.name}</p>
                    <p className="txt-md txt-primary txt-cap">{origin?.residents?.length} residents</p>
                </div>
            </div>
            <div className="flx flx-column mg-top-s">
                <p className="txt-md txt-300 txt-off-primary txt-cap mg-btm-xs">
                    {`${character.name}'s first episode`}
                </p>
                <p className="txt-md txt-primary txt-cap">{episodes[0]}</p>
            </div>
        </article>
    );
};

export default CharacterCard;