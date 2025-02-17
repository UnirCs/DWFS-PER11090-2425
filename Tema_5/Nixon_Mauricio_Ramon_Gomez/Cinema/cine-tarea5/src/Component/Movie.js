import React from "react";

export const Movie = ({ titulo, imagen, sinopsis, duracion, genero, puntuacion }) => {
    return (
        <div className="card">
            <img src={imagen}/>
            <h3>{titulo}</h3>

            <p>Sinopsis: {sinopsis}</p>
            <p>Duración: {duracion}</p>
            <p>Genero: {genero}</p>
            <p>Puntuación: {puntuacion}</p>
        </div>
    );
}