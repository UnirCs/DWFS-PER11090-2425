import React from 'react';
import Movie from './Movie';

export default function MovieList() {
    // Aquí puedes definir tu lista de películas
    const movies = [
        {
            titulo: 'Película 1',
            sinopsis: 'Sinopsis de la película 1...',
            duracion: '120 min',
            genero: 'Acción',
            puntuacion: 4.5
        },
        {
            titulo: 'Película 2',
            sinopsis: 'Sinopsis de la película 2...',
            duracion: '90 min',
            genero: 'Comedia',
            puntuacion: 3.9
        },
        {
            titulo: 'Película 3',
            sinopsis: 'Sinopsis de la película 3...',
            duracion: '140 min',
            genero: 'Drama',
            puntuacion: 4.7
        }
    ];

    return (
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
            {movies.map((movieItem, index) => (
                <Movie key={index} movieData={movieItem} />
            ))}
        </div>
    );
}