import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/Home.css";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("/data/cinema.json");
        if (!response.ok) {
          throw new Error("Error al cargar el archivo JSON");
        }
        const data = await response.json();
        setMovies(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const handleViewDetails = (movieID) => {
    navigate(`/movie/${movieID}`);
  };

  if (loading) {
    return <p className="home__loading">Cargando películas...</p>;
  }

  if (error) {
    return <p className="home__error">Error: {error}</p>;
  }

  return (
    <div className="home">
      <div className="home__grid">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div className="home__card" key={movie.id}>
              <img
                src={movie.imagen}
                alt={movie.nombre}
                className="home__image"
              />
              <div className="home__info">
                <h6 className="home__nombre">{movie.nombre}</h6>
                <div className="home__category">
                  <i className="fas fa-bookmark"></i> {movie.categoria}
                </div>
              </div>
              <div className="home__buttons">
                <button
                  className="home__button home__button--details"
                  onClick={() => handleViewDetails(movie.id)}
                >
                  <i className="fas fa-info-circle p-2"></i> Ver Detalles
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="home__no-movies">No hay películas disponibles</p>
        )}
      </div>
    </div>
  );
};

export default Home;
