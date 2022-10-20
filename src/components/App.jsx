import { lazy } from 'react';
import { Route, Routes } from "react-router-dom";

import { AppBar } from "./AppBar/AppBar";

const Movies = lazy(() => import('../pages/Movies/Movies'));
const Home = lazy(() => import('../pages/Home/Home'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const PageNotFound = lazy(() => import('../pages/PageNotFound/PageNotFound'));

export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<AppBar />}>
                <Route index element={<Home />}></Route>
                <Route path="movies" element={<Movies />}></Route>
                <Route path="movies/:movieId" element={<MovieDetails />}>
                    <Route path="cast" element={<Cast />}></Route>
                    <Route path="reviews" element={<Reviews />}></Route>
                </Route>
                <Route path="*" element={<PageNotFound />} />
            </Route>
        </Routes>
    )
}