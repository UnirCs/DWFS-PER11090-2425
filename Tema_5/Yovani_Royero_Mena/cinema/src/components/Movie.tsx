import React from 'react';
import './movie.css';

export interface MovieProps {
    titulo: string;
    imagen: string;
    sinopsis: string;
    duracion: string;
    genero: string;
    puntuacion: number;
}

export const Movie: React.FC<MovieProps> = ({ titulo, imagen, sinopsis, duracion,genero, puntuacion } : MovieProps) => {
    return (
        <div className="movie-card">
            <img src={imagen} alt={titulo} className="movie-image" />
            <div className="movie-details">
                <h2 className="movie-title">{titulo}</h2>
                <div><p className="movie-synopsis">{sinopsis}</p></div>
                <div><p className="movie-duration"><b>Duracion:</b> {duracion}</p></div>
                <div><p className="movie-genre"><b>Genero:</b> {genero}</p></div>
                <div><p className="movie-rating"><b>Rating:</b> {puntuacion}/10</p></div>
                <div><button className="seat-selection-button">Seleccionar Asientos</button></div>
            </div>
        </div>
    );
};

