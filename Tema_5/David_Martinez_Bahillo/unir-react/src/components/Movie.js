import React from 'react';
import './movies.css'; 

const Movie = ({ title, image, synopsis, duration, genre, rating }) => (
  <div className="movie">
    <div className="movie-image">
      <img src={image} alt={title} className="movie-image" />
    </div>
    <h2 className="movie-title">{title}</h2>
    <p>{synopsis}</p>
    <p>
      <strong>Duración:</strong> {duration} min<br />
      <strong>Género:</strong> {genre}<br />
      <strong>Puntuación:</strong> {rating}/10
    </p>
    <button className="movie-button" onClick={() => alert('Ir a selección de asientos')}>
      Seleccionar asientos
    </button>
  </div>
);

export default Movie;
