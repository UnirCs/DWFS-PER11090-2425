import React from "react";
import '../styles/Movie.css';
const Movie = ({ title, image, synopsis, duration, genre, rating }) => {
  return (
    <div className="peliculas-list">
      <img src={image} alt={title}  />
      <h3>{title}</h3>
      <p><strong>Sinopsis:</strong> {synopsis}</p>
      <p><strong>Duración:</strong> {duration}</p>
      <p><strong>Género:</strong> {genre}</p>
      <p><strong>Puntuación:</strong> {rating}/10</p>
      <button className= "peliculas-button">
        Seleccionar Asientos
      </button>
    </div>
  );
};

export default Movie;
