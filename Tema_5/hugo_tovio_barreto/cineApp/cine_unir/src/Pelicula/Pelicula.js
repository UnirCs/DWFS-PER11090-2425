// src/Movie.js
import React from 'react';
import './Pelicula.css'; 

/**
 * Componente que representa una película en la lista de películas.
 *
 * El componente recibe una película como parámetro y la renderiza en una
 * tarjeta que muestra la imagen de la película, su título, sinopsis, duración,
 * género y puntuación. También muestra un botón que permite seleccionar
 * asientos para la película.
 *
 
 */
function Movie({ pelicula }) {
  return (
    <div className="movie">
      <img src={pelicula.imagen} alt={pelicula.titulo} className="movie-image" />
      <h3>{pelicula.titulo}</h3>
      <p><strong>Sinopsis:</strong> {pelicula.sinopsis}</p>
      <p><strong>Duración:</strong> {pelicula.duracion}</p>
      <p><strong>Género:</strong> {pelicula.genero}</p>
      <p><strong>Puntuación:</strong> {pelicula.puntuacion}</p>
      <button className="btn-seleccionar">Seleccionar Asientos</button>
    </div>
  );
}

export default Movie;
