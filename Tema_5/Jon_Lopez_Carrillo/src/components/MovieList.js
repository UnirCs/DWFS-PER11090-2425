import React from 'react';
import '../App.css';

export const MovieList = ({ movieArray }) => {
    if (!Array.isArray(movieArray)) {
        return <div><p>No movies available</p></div>;
    }

    return (
        <div className="MovieList">
            {movieArray.map((movie, index) => (
                <div className='movie' key={index}>
                    <h2>{movie.titulo}</h2>
                    <div className='movie-wrapper'>
                    <div className='movie-img'>
                        <img src={movie.imagen} alt={movie.titulo} />
                    </div>
                    <div className='movie-details'>
                        <p>{movie.sinopsis}</p>
                        <p>{movie.duracion}</p>
                        <p>{movie.genero}</p>
                        <p>{movie.puntuacion}</p>
                        <button className='movie-boton'> Reservar asientos </button>
                    </div>                    
                    </div>                    
                </div>
            ))}
        </div>
    );
};