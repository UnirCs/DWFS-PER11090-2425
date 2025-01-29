import React from "react";

const Movie = ({ movie }) => {
  return (
    <div className="movieView">
      <h2>{movie.title}</h2>
      <img src={movie.image} alt={movie.title}/>
      <p><strong>Sinopsis:</strong> {movie.synopsis}</p>
      <p><strong>Duración:</strong> {movie.duration} minutos</p>
      <p><strong>Género:</strong> {movie.genre}</p>
      <p><strong>Puntuación:</strong> {movie.rating}/10</p>
      <button>Seleccionar Asientos</button>
    </div>
  );
};

export default Movie;
