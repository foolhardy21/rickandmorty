import axios from "axios";
import { useState, useEffect } from "react";
import { useModal } from "contexts";
import styles from './character.module.css'

const CharacterModal = ({ character }) => {
    const [origin, setOrigin] = useState({});
    const [location, setLocation] = useState({});
    const [episodes, setEpisodes] = useState([]);
    const { setModal } = useModal()

    useEffect(() => {
        (async () => {
            if (character.origin.url) {
                const response = await axios.get(character.origin.url);
                setOrigin(response.data);
            }
        })();
    }, []);

    useEffect(() => {
        (async () => {
            if (character.location.url) {
                const response = await axios.get(character.location.url);
                setLocation(response.data);
            }
        })();
    }, [])

    useEffect(() => {
        (async () => {
            const episodeNames = await Promise.allSettled(character.episode.map(async (ep) => {
                const response = await axios.get(ep);
                return response.data.name;
            }));
            setEpisodes(episodeNames?.map(ep => ep.value));
        })();
    }, []);

    const handleCloseClick = () => {
        setModal(m => ({ ...m, visible: false, value: {} }))
    }

    return (
        <section className="flx flx-center modal-container pos-fixed tl-0 z-5">
            <article className={` ${styles.charModal} pd-lg bg-primary flx pos-relative`}>
                <button onClick={handleCloseClick} className="btn-txt flx flx-center pd-xs pos-absolute tr-1">
                    <span className="material-icons icon-primary">
                        close
                    </span>
                </button>
                <img srcSet={character?.image} alt={character?.name} className={styles.charModalImg} />
                <div className="flx flx-column mg-left-s">
                    <p className="txt-md txt-500 txt-primary txt-cap">{`${character?.name} (${character?.gender})`}</p>
                    <div className="flx flx-min-center mg-top-s">
                        <div className={`badge-size-xs ${character?.status === "Alive" ? "bg-success" : character?.status === "Dead" ? "bg-err" : "bg-off-primary"}  brd-full`}>
                        </div>
                        <p className="txt-md txt-primary txt-cap mg-left-xs">{character?.status}</p>
                        <p className="txt-md txt-primary txt-cap mg-left-xs">{`- ${character?.species}`}</p>
                    </div>
                    <div className="flx flx-column mg-top-s">
                        <p className="txt-md txt-300 txt-off-primary txt-cap mg-btm-xs">location</p>
                        <p className="txt-md txt-primary txt-cap">{`${location?.name ?? ''} (${location?.type ?? 'unknown'})`}</p>
                        <p className="txt-md txt-primary txt-cap">{location?.dimension ?? ''}</p>
                        <p className="txt-md txt-primary txt-cap">{`${location?.residents?.length ?? 'unkown'} residents`}</p>
                    </div>
                    <div className="flx flx-column mg-top-s">
                        <p className="txt-md txt-300 txt-off-primary txt-cap mg-btm-xs">origin</p>
                        <p className="txt-md txt-primary txt-cap">{`${origin?.name ?? ''} (${origin?.type ?? 'unknown'})`}</p>
                        <p className="txt-md txt-primary txt-cap">{origin?.dimension ?? ''}</p>
                        <p className="txt-md txt-primary txt-cap">{`${origin?.residents?.length ?? 'unkown'} residents`}</p>
                    </div>
                    <div className={`${styles.episodeList} mg-top-s`}>
                        <ul className="mg-btm-s">
                            <p className="txt-md txt-300 txt-off-primary txt-cap mg-btm-xs">episodes</p>
                            {
                                episodes?.map(ep => <li key={ep}>{ep}</li>)
                            }
                        </ul>
                    </div>
                </div>

            </article>
        </section>
    )
}

export default CharacterModal