
import { Header } from '../components/Header';
import { Footer} from "../components/Footer";
import MovieList from "../components/MovieList";
import '../styles/style.css';
function Movies() {
    return (
        <div className="movies">
            <Header/>
            <br/><br/><br/><br/>
            <h2>Peliculas disponibles</h2>
            <MovieList/>
            <Footer/>
        </div>
    );
}

export default Movies;