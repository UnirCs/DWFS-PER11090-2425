import Movie from "./Movie";

const MovieList = ({ movies }) => { 
    return (
        <div className="d-flex flex-wrap justify-content-center">
            {movies.map((movie) => (
                <div className="m-3" key={movie.id}>
                    <Movie movie={movie} />
                </div>
            ))}
        </div>
    );
}

export default MovieList;