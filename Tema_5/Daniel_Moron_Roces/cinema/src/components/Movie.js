import React from "react";

export const Movie = ({ title, image, synopsis, duration, type, score }) => {
    return (
        <div className="movie">
            <img className="movie-image" src={image} alt={title} />
            <div className="movie-info">
                <h2 className="movie-title">{title}</h2>
                <p className="movie-synopsis">{synopsis}</p>
                <p className="movie-duration">Duración: {duration} minutos</p>
                <p className="movie-type">Tipo: {type}</p>
                <p className="movie-score">Puntuación: {score}</p>
                <button className="movie-button">Seleccionar asientos</button>
            </div>
        </div>
    );
}