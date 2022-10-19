import { useState, useRef, useEffect } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovies } from '../../utils/getMovies';

import css from './MovieDetails.module.css';

export const MovieDetails = () => {
    const [details, setDetails] = useState(null);
    const { movieId } = useParams();
    const location = useLocation();
    const prevLinkURL = useRef(location.state?.location);

    useEffect(() => {
        getMovies(`movie/${movieId}`)
            .then(responce => responce.json())
            .then(data => {
                setDetails(data);
            })
            .catch(error => console.log(error));
    }, [movieId]);

    if (!details) {
        return;
    }

    const { backdrop_path, genres, original_title, overview, vote_average, tagline } = details;
    const genre = genres.map(({ name }) => name).join(' ');
    const score = Math.round(vote_average * 10);

    return (
        <>
            <Link className={css.link} to={prevLinkURL.current ?? '/'}>Go back</Link>
            
            <div className={css.box}>

                <img className={css.image} src={'https://image.tmdb.org/t/p/w500' + backdrop_path} alt={tagline} />
                
                <div className={css.info}>

                    <h2 className={css.title}>{original_title}</h2>
                    <p className={css.text}>User Score: {score}%</p>
                    <h3 className={css.ovewview}>Overview</h3>
                    <p className={css.text}>{overview}</p>
                    <h3 className={css.genre}>Genre</h3>
                    <p className={css.text}>{genre}</p>

                </div>

            </div>

            <p className={css.additional}>Additional information</p>

            <ul className={css.list}>
                <li className={css.item}>
                    <Link to="cast">Cast</Link>
                </li>
                <li className={css.item}>
                    <Link to="reviews">Reviews</Link>
                </li>
            </ul>

            <Outlet />
        </>
    )
}