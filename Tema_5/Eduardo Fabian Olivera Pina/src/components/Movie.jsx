import React from 'react';
import '../styles/styles.css'

export const Movie = ({titulo, img, sinopsis, duracion, genero, puntuacion}) => {
  return <div>
      <p><b>Título:</b> {titulo}</p>
      <img src={img} alt={`${titulo} (foto)`} />
      <p><b>Sinopsis:</b> {sinopsis}</p>
      <p><b>Duración:</b> {duracion}</p>
      <p><b>Género:</b> {genero}</p>
      <p><b>Puntuación:</b> {puntuacion}</p>
      <button>Seleccionar asientos</button>
  </div>
}