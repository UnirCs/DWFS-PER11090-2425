import React from 'react';
import '../styles/App.css';

export const Movie = ({ titulo, imagen, sinopsis, duracion, genero, puntuacion }) => {
  return (
    <div className="movie">
      <img src={imagen} alt={titulo} className="movie-img" />
      <h3 className="movie-title">{titulo}</h3>
      <p className="movie-sinopsis">{sinopsis}</p>
      <p className="movie-duracion">{duracion}</p>
      <p className="movie-genero">{genero}</p>
      <p className="movie-puntuacion">{puntuacion}</p>
      <button className="movie-boton">Reservar asientos</button>
    </div>
  );
};