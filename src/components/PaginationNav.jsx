const PaginationNav = () => {

    return (
        <nav className="flx flx-center mg-top-md mg-btm-md">
            <button className="btn-outlined b-solid b-primary txt-md txt-primary pd-xs mg-right-xs">
                prev
            </button>
            <button className="btn-solid txt-md txt-secondary bg-secondary pd-xs mg-right-xs">
                1
            </button>
            <button className="btn-txt txt-md txt-primary pd-xs mg-right-xs">
                2
            </button>
            <button className="btn-txt txt-md txt-primary pd-s mg-right-xs">
                3
            </button>
            <p className="txt-primary txt-md mg-right-xs">....</p>
            <button className="btn-outlined b-solid b-primary txt-md txt-primary pd-xs mg-right-xs">
                next
            </button>
        </nav>
    );
};

export default PaginationNav;