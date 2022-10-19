import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

import css from './FilmsList.module.css';

export const FilmsList = ({ filmsList, fistrMount = true }) => {

    const location = useLocation();

    if (!fistrMount) {
        return (<p className={css.match}>No match found! Enter new data.</p>);
    }

    return (
        <ul className={css.list}>
            {filmsList.map( ({ id, title }) => (
                <li className={css.item} key={id}>
                    <Link to={`${location.pathname === '/' ? `movies/${id}` : id}`} state={{ location }}>{title}</Link>
                </li>
            ))}
        </ul>
    )
}

FilmsList.protoTypes = {
    filmsList: PropTypes.arrayOf({
        backdrop_path: PropTypes.string,
        id: PropTypes.string,
        title: PropTypes.string,
    }),
};