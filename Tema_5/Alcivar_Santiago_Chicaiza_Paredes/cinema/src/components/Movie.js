import React from 'react';

export const Movie = ({title, image, synopsis, duration, genre, rating}) => {
    return (
        <div className="movie">
            <img src={image} alt={`${title} Poster`} className="movie-image"/>
            <h3>{title}</h3>
            <p><strong>Género:</strong> {genre}</p>
            <p><strong>Duración:</strong> {duration}</p>
            <p><strong>Puntuación:</strong> {rating}/10</p>
            <p>{synopsis}</p>
            <button className="select-button">Selecionar asientos</button>
        </div>
    );
}
