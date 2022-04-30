import { usePage } from "contexts";
import styles from './nav.module.css'

let pgNumbers = []
for (let i = 1; i <= 42; i++) {
    pgNumbers[i] = i
}

const PaginationNav = () => {
    const { pgNumber, setPgNumber } = usePage()

    const handlePrevClick = () => {
        setPgNumber(p => p - 1)
    }

    const handleNextClick = () => {
        setPgNumber(p => p + 1)
    }

    const handlePgNumClick = (e) => {
        setPgNumber(Number(e.target.value))
    }

    return (
        <div className="flx flx-center">
            <nav className={`${styles.pgNav} flx flx-center mg-top-md mg-btm-md`}>
                {
                    pgNumber > 1 &&
                    <button onClick={handlePrevClick} className="btn-outlined b-solid b-primary txt-md txt-primary pd-xs mg-right-xs">
                        prev
                    </button>
                }
                {
                    pgNumbers.map(num => (num > pgNumber + 5 || num < pgNumber - 5) ? '' : <button key={num} value={num} onClick={handlePgNumClick} className={`${num === pgNumber ? 'btn-solid bg-secondary txt-secondary' : 'btn-outlined b-solid b-primary txt-primary bg-primary'}  txt-md pd-xs mg-right-xs`}>
                        {num}
                    </button>)
                }
                {
                    pgNumber < 42 &&
                    <p className="txt-primary txt-md mg-right-xs">....</p>
                }
                {
                    pgNumber < 42 &&
                    <button onClick={handleNextClick} className="btn-outlined b-solid b-primary txt-md txt-primary pd-xs">
                        next
                    </button>
                }
            </nav>
        </div>
    );
};

export default PaginationNav;