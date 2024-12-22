import { Link, useParams } from "react-router-dom";
import { useMockFetch } from "../../hooks/useMockFetch";
import "./Movie.css";

const Movie: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: movies, loading, error } = useMockFetch();

  if (loading) {
    return (
      <div className="loader">
        <p>Cargando detalles de la película...</p>;
      </div>
    );
  }

  if (error) {
    return (
      <div className="loader">
        <p>{error}</p>
      </div>
    );
  }

  const movie = movies.find((movie) => movie.id === id || "");

  if (!movie) {
    return (
      <div className="loader">
        <p>Película no encontrada.</p>
      </div>
    );
  }

  return (
    <div className="movie-banner">
      <div className="movie-banner__header">
        <img
          className="movie-banner__image"
          src={movie.image}
          alt={movie.title}
        />
        <h2 className="movie-banner__title">{movie.title}</h2>
      </div>
      <div className="movie-banner__details">
        <p className="movie-banner__detail">
          <strong>Sinopsis:</strong> {movie.synopsis}
        </p>
        <p className="movie-banner__detail">
          <strong>Duración:</strong> {movie.duration}
        </p>
        <p className="movie-banner__detail">
          <strong>Género:</strong> {movie.genre}
        </p>
        <p className="movie-banner__detail">
          <strong>Puntuación:</strong> ⭐ {movie.rating.toFixed(1)}/10
        </p>
      </div>
      <Link to="/" className="movie-banner__button">
        Volver al listado
      </Link>
    </div>
  );
};

export default Movie;
