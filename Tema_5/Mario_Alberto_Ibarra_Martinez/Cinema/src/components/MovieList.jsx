import "../styles/Movie.css";
import "../styles/MovieList.css";
import PropTypes from 'prop-types';
import Movie from "./Movie";


const MovieList = ({ title = "", movies = "" }) => {
  return (
    <div className="movie-list">
      {title ? <h2>{title}</h2> : null}
      <div className="movies-wrapper">
        {movies.map((movie) => (
          <Movie key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
};


MovieList.propTypes = {
    title: PropTypes.string,
    movies: PropTypes.array,
};

export default MovieList;