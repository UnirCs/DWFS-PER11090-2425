import React from 'react';
import '../styles/movie.css';

export const Movie = ({titulo, imagen, sinopsis, duracion, genero, puntuacion}) => {
    return (
        <div className='movie'>
            <img className='movie-image' src={imagen} alt={titulo}/>
            <div className='movie-info-1'>
                <p className='movie-title'>{titulo}</p>
                <p className='movie-sinopsis'>{sinopsis}</p>
                <p className='movie-duracion'>Duración: {duracion}</p>
                <p className='movie-genero'>Género: {genero}</p>
            </div>
            <div className='movie-info-2'>
                <p className='movie-puntuacion'>{puntuacion}</p>
                <button className='movie-button'>Elegir asientos</button>
            </div>
        </div>
    );
};