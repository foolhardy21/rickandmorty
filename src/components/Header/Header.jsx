import styles from "./header.module.css";

const Header = () => {

    return (
        <header className={`${styles.pgHeader} flx flx-maj-even flx-min-center pd-md`}>
            <p className="txt-lg txt-500 txt-primary txt-ucase">rick and morty</p>
        </header>
    );
};

export default Header;