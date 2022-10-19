import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../utils/getMovies';

import css from './Reviews.module.css';

export const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        getMovieReviews(`movie/${movieId}/reviews`)
            .then(responce => responce.json())
            .then(data => {
                setReviews(data.results);
            })
            .catch(error => console.log(error));
    }, [movieId]);

    if (!reviews) {
        return;
    }

    return (
        <ul>
            {!reviews.length
                ? <p className={css.message}> We don't have any reviews for this movie</p>
                : reviews.map(({ author, content, id }) => (
                <li key={id}>
                    <h2 className={css.title}>Author: {author}</h2>
                    <p className={css.text}>{content}</p>
                </li>))}
        </ul>
    )
}