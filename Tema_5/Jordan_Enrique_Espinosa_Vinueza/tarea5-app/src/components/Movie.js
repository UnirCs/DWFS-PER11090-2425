import React from "react";
import '../styles/styles.css';

export const Movie = ({ name, image, synopsis, duration, genre, rating }) => {
    return (
        <div className="movie">
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <p>{synopsis}</p>
            <div className="movie-details">
                <div>Duracion: {duration} min</div>
                <div>Genero: {genre}</div>
                <div>Calificación: {rating} / 10</div>
            </div>
            <button>Seleccionar asientos</button>
        </div>
    );
};