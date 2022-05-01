import { useModal } from "contexts";
import styles from "./character.module.css";

const CharacterCard = ({ character }) => {
    const { setModal } = useModal()

    const handleMoreClick = () => {
        setModal(m => ({ ...m, visible: true, value: character }))
    }

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
                </div>
                <div className="flx flx-column">
                    <p className="txt-md txt-300 txt-off-primary txt-cap mg-btm-xs">origins</p>
                    <p className="txt-md txt-primary txt-cap">{character?.origin?.name}</p>
                </div>
            </div>
            <div className="flx flx-maj-end mg-top-s">
                <button onClick={handleMoreClick} className="btn-solid bg-secondary txt-secondary txt-md txt-cap pd-xs">more</button>
            </div>
        </article>
    );
};

export default CharacterCard;