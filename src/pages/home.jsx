import '../styles/css/home.css';

import useDocTitle from '../hooks/useDocTitle';

import NavBar from '../components/NavBar';
import GridList from '../components/GridList';

const Home = () => {
    // eslint-disable-next-line no-unused-vars
    const [docTitle, setDocTitle] = useDocTitle("Home");

    return (
        <>
            <NavBar />
            <div className="grid-container">
                <GridList />
            </div>
            <h1>Home</h1>
        </>
    );
}

export default Home;