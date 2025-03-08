import {
    Route, Routes,
} from "react-router-dom";
import App from "../App";
import NotFound from "../layout/NotFound";
import Butaca from "../components/butaca/Butaca";
import MovieList from "../components/movie/MovieList";
import Movie from "../components/movie/Movie";

function Router(){
    return (
        <Routes>
            <Route path="/" element={<App />} >
                <Route path="/"  element={<MovieList />}/>
                <Route path="/butacas"  element={<Butaca />}/>
                <Route path="/movie/:id"  element={<Movie />}/>
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default Router;