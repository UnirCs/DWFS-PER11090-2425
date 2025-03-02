import React from 'react';
import './Movie.css';

const Movie = ({ image, title, sinopsis, duracion, genero, puntuacion }) => {
    const handleButtonClick = () => {
        console.log(title);
    };
    return (
        <div className="movie">
            <img src={image} alt={title} className="img-movie" />
            <div className="movie-info">
                <h2 className="movie-title movie-text">{title}</h2>
                <p className="movie-sinopsis movie-text">{sinopsis}</p>
                <p className="movie-duracion movie-text"> <strong>Duración:</strong>{duracion}</p>
                <p className="movie-genero movie-text"> <strong>Género:</strong>{genero}</p>
                <p className="movie-puntuacion movie-text"> <strong>Puntuación:</strong>{puntuacion}</p>
                <button onClick={handleButtonClick} className='btn-reservar'>Reservar</button>
            </div>
        </div>
    );
};

export default Movie;