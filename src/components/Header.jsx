import styles from "../App.module.css";

const Header = () => {

    return (
        <header className={`${styles.pgHeader} flx flx-maj-even flx-min-center pd-md`}>
            <p className="txt-lg txt-500 txt-primary txt-ucase">rick and morty</p>
            <button className="btn-txt pd-s flx flx-center">
                <span className="material-icons icon-primary">
                    light_mode
                </span>
            </button>
        </header>
    );
};

export default Header;