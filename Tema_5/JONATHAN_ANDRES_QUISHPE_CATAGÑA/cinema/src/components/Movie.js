import './Movie.css';

const Movie = ({ movie }) => {
  return (
    <div className="movie">
      <h2>{movie.title}</h2>
      <img src={movie.image} alt={movie.title} />
      <p>{movie.description}</p>
      <p>{movie.duration}</p>
      <p>{movie.gender}</p>
      <p>{movie.score}</p>
      <button>Seleccionar</button>
    </div>
  )
}

export default Movie;