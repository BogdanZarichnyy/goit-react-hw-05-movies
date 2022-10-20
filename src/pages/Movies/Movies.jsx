import { useEffect, useState } from 'react';
import { Outlet, useSearchParams } from "react-router-dom";
import { getSearchMovies } from '../../utils/getMovies';
import { FilmsList } from '../../components/FilmsList/FilmsList';

import css from './Movies.module.css';

const Movies = () => {
    const [searchFilms, setSearchFilms] = useState([]);
    const [fistrMount, setFistrMount] = useState(true);
    const [ , setSearchParams] = useSearchParams();

    const handleSubmit = (event) => {
        event.preventDefault();

        const { value } = event.target.elements.search;

        if (!value) {
            return;
        }

        setSearchParams({ query: value });

        getSearchMovies('search/movie', value)
            .then(responce => responce.json())
            .then(data => { 
                if (!data.results.length) {
                    setFistrMount(false);
                } else {
                    setFistrMount(true);
                }
                setSearchFilms(data.results);
            })
            .catch(error => console.log(error));

        event.target.reset();
    }

    useEffect(() => {
        const searchItem = window.location.search.split('=')[1];

        if (!searchItem) {
            return;
        }

        getSearchMovies('search/movie', searchItem)
            .then(responce => responce.json())
            .then(data => { 
                if (!data.results.length) {
                    setFistrMount(false);
                } else {
                    setFistrMount(true);
                }
                setSearchFilms(data.results);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label className={css.label} htmlFor="search" >Enter data</label>
                <input className={css.input} id="search" type="text" name="search" placeholder="Enter data"/>
                <button className={css.button} type='submit'>Search</button>
            </form>

            <FilmsList filmsList={searchFilms} fistrMount={fistrMount} />

            <Outlet />
        </>
    )
}

export default Movies;