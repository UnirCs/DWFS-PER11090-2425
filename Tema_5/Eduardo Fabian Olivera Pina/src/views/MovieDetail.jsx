import React from "react";
import { useParams } from "react-router-dom";
import { movies } from "../components/MoviesData";

export const MovieDetail = () => {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === parseInt(id));

  if (!movie) {
    return <p>Película no encontrada</p>;
  }

  return (
    <div class="movie-details">
      <h1>{movie.titulo}</h1>
      <div class="horizontally">
        <img src={movie.img} alt={movie.titulo} />
        <div class="vertically">
          <p><strong>Sinopsis:</strong> {movie.sinopsis}</p>
          <p><strong>Duración:</strong> {movie.duracion}</p>
          <p><strong>Género:</strong> {movie.genero}</p>
          <p><strong>Puntuación:</strong> {movie.puntuacion}</p>
          <button onClick={() => alert("seleccionar asientos")}>Seleccionar asientos</button>
        </div>      
      </div>
    </div>
  );
};
