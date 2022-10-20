import { useEffect, useState } from 'react';
import { getMovies } from '../../utils/getMovies';
import { FilmsList } from '../../components/FilmsList/FilmsList';

import css from './Home.module.css';

const Home = () => {
    const [filmsToday, setFilmsToday] = useState([]);

    useEffect(() => {
        getMovies('trending/movie/day')
            .then(responce => responce.json())
            .then(data => setFilmsToday(data.results))
            .catch(error => console.log(error));
    }, []);

    return (
        <>
            <h1 className={css.title}>Trending today</h1>

            <FilmsList filmsList={filmsToday} />
        </>
    )
}

export default Home;