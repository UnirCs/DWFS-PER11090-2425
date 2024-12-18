import React from "react";

export const Movie = ({ titulo, imagen, sinopsis, duracion, genero, puntuacion }) => {
    return (
        <div className="movie">
            <h2>{titulo}</h2>
            <img src={imagen} alt={titulo} />
            <p>Sinopsis: {sinopsis}</p>
            <p>Duración: {duracion}</p>
            <p>Genero: {genero}</p>
            <p>Valoración: {puntuacion}</p>
            <button>Comprar asientos</button>
        </div>
    );
}

export default Movie;