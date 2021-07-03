import '../styles/css/GridList.css';

const GridList = () => {
    return (
        <section className="gridlist-container">
            <div className="top-section">
                <p>Home / Product</p>
                <h2>Shop</h2>
                <div className="results-and-filter">
                    <p>Showing 1-12 of 36 results</p>
                    <div className="filter">
                        <p>Default sorting</p>
                        <img
                            src="/"
                            alt="filter"
                        />
                    </div>
                </div>
            </div>
            <div className="items-container">
                <div className="left-warning"></div>
                <div className="items"></div>
                <div className="right-warning"></div>
            </div>
        </section>
    );
}

export default GridList;