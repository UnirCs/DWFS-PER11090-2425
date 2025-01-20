import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BookDetailsCard from "../components/MovieDetailsCard";
import "./styles/Movie.css";

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch("/data/cinema.json");
        if (!response.ok) {
          throw new Error("Error al cargar el archivo JSON");
        }
        const data = await response.json();
        const foundMovie = data.find((item) => item.id === parseInt(id, 10));
        if (!foundMovie) throw new Error("Película no encontrada.");
        setMovie(foundMovie);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [id]);

  const handleBackToStore = () => {
    navigate("/home");
  };

  if (loading) {
    return <p className="movie__loading">Cargando detalles de la película...</p>;
  }

  if (error) {
    return <p className="movie__error">Error: {error}</p>;
  }

  return (
    <div className="movie-details">
      {movie ? (
        <BookDetailsCard
          movie={movie} 
          onBackToStore={handleBackToStore}
        />
      ) : (
        <p className="movie__not-found">Película no encontrada.</p>
      )}
    </div>
  );
};

export default MovieDetails;