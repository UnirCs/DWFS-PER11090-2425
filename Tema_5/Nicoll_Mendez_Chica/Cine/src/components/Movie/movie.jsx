import "./movie.css";
import MovieList from "../MovieList/MovieList";
import { Link } from "react-router";

const Movies = () => {

    const movies = MovieList;
    
    
    return (
        <div>
            <div className="movie-content">
                {movies.map((movie, index) => (
                    <div className="card">
                        <h2>{movie.titulo}</h2>
                        <Link to={`/Pelicula/${index}`}>
                            <>
                                <img src={movie.imagen} alt={movie.titulo} />
                            </>
                        </Link> 
                        <p></p>
                        <button>Escoger asientos</button>
                    </div>
                ))}
            </div>
        </div >
    );
}

export default Movies;