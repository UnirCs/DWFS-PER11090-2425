import React from "react";

export const Movie = ({movie}) => {
    return (
        <div className="card-movie">
            <h2 className="card-text">{movie.titulo}</h2>
            <img className="img-movie" src={movie.imagen} />
            <p className="sinopsis-movie"><b>{movie.sinopsis.substring(0, 80)}...</b></p>
            <div className="movie-details">
                <p className="movie-details-text"><b>{movie.genero}</b></p>
                <p className="movie-details-text"><b>{movie.duracion}</b></p>
                <p className="movie-details-text"><b>Puntuación: {movie.puntuacion}</b></p>
            </div>
            <div className="div-button">
                <button className="button-select-seat">Ir a selección de asientos</button>
            </div>

        </div>
    );
}