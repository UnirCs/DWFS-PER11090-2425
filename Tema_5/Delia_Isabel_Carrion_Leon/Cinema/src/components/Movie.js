import React from "react";
import "../styles/Movie.css"; // Importamos la hoja de estilos

const Movie = ({ title, image, synopsis, duration, genre, rating }) => {
  return (
    <div className="movie-card">
      <img src={image} alt={title} />
      <h3 className="movie-title">{title}</h3>
      <p className="movie-info"><strong>Género:</strong> {genre}</p>
      <p className="movie-info"><strong>Duración:</strong> {duration}</p>
      <p className="movie-info"><strong>Puntuación:</strong> ⭐ {rating}</p>
      <p className="movie-info">{synopsis}</p>
      <button className="movie-button">Seleccionar Asientos</button>
    </div>
  );
};

export default Movie;
