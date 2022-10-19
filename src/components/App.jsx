import { Route, Routes } from "react-router-dom";

import { AppBar } from "./AppBar/AppBar";
import { Home } from "../pages/Home/Home";
import { Movies } from "../pages/Movies/Movies";
import { MovieDetails } from "../pages/MovieDetails/MovieDetails";
import { Cast } from "./Cast/Cast";
import { Reviews } from "./Reviews/Reviews";
import { PageNotFound } from "../pages/PageNotFound/PageNotFound";

export const App = () => {
    return (
        <>
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
        </>
    )
}