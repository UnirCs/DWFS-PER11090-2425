import React from 'react';

const Movie = ({ image, title, sinopsis, duracion, genero, puntuacion }) => {
    const handleButtonClick = () => {
        console.log(title);
    };
    return (
        <div className="movie">
            <img src={image} alt={title} className="movie-image" />
            <div className="movie-info">
                <h2 className="movie-title">{title}</h2>
                <p className="movie-sinopsis">{sinopsis}</p>
                <p className="movie-duracion">Duración: {duracion}</p>
                <p className="movie-genero">Género: {genero}</p>
                <p className="movie-puntuacion">Puntuación: {puntuacion}</p>
                <button onClick={handleButtonClick}>Imprimir Nombre</button>
            </div>
        </div>
    );
};

export default Movie;