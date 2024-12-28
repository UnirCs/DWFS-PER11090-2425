import React from "react";

export const Movie = ({titulo,imagen,sinopsis,duracion,genero,puntuacion}) => {
    return (
        <div className="card">
            <img src={`img/${imagen}`} alt="imagen de la pelicula" className="movie-photo-main"/>
            <h3>{titulo}</h3>
            <p>Duración: {duracion} | Género: {genero} | Puntuación: {puntuacion}</p>
            <div>{sinopsis}</div>
            <button className="btn btn-danger">Ir a la página de selección de asientos</button>
         </div>
    );
}