import React from "react";
import { Link } from "react-router-dom";
import { movies } from "./MoviesData";
import "../styles/styles.css"; // Importar los estilos

export const MovieList = () => {
  return (
    <nav>
      <ul className="movie-list">
        {movies.map((movie) => (
          <li key={movie.id} className="movie-list__item">
            <Link to={`/movie/${movie.id}`} className="movie-list__link">
              {movie.titulo}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
