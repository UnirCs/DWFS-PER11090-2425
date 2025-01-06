import React from 'react';
import '../styles/Movie.css'; // Importa los estilos

export const Movie = ({ title, image, synopsis, duration, genre, rating }) => {
    return (
        <div className="movie">
            <img src={image} alt={title}/>
            <h3>{title}</h3>
            <p><strong>Sinopsis:</strong> {synopsis}</p>
            <p><strong>Duración:</strong> {duration}</p>
            <p><strong>Género:</strong> {genre}</p>
            <p><strong>Calificación:</strong> {rating}</p>
            <button className="select-button">Comprar entradas</button>
        </div>
    );
};
