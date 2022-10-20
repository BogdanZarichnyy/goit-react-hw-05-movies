import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovies } from '../../utils/getMovies';
import placeholderImage from './images/music.jpg';

import css from './Cast.module.css';

const Cast = () => {
    const [cast, setCast] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        getMovies(`movie/${movieId}/credits`)
            .then(responce => responce.json())
            .then(data => {
                setCast(data.cast);
            })
            .catch(error => console.log(error));
    }, [movieId]);

    if (!cast) {
        return;
    }

    return (
        <ul className={css.list}>
            {cast.map(({ cast_id, character, original_name, profile_path }) => (
                <li key={cast_id}>
                    <img className={css.image} src={!profile_path ? placeholderImage : `https://image.tmdb.org/t/p/w500${profile_path}`} alt={original_name} />
                    <h2 className={css.title}>Author: {original_name}</h2>
                    <p className={css.text}>{character}</p>
                </li>))}
        </ul>
    )
}

export default Cast;