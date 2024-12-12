import React from 'react';
import '../styles/movieList.css';
import { Movie } from './Movie';

export const MovieList = () => {
    const movies = [
        {   titulo: "Interstellar" ,
            imagen: "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_.jpg",
            sinopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            duracion: "2 horas y 49 minutos",
            genero: "Ciencia ficción",
            puntuacion: "8.7"
        },
        {
            titulo: "Inception",
            imagen: "https://pics.filmaffinity.com/Origen-652954101-large.jpg",
            sinopsis: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
            duracion: "2 horas y 28 minutos",
            genero: "Acción, Ciencia ficción",
            puntuacion: "8.8"
        },
        {
            titulo: "El caballero oscuro",
            imagen: "https://pics.filmaffinity.com/El_caballero_oscuro-102763119-large.jpg",
            sinopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            duracion: "2 horas y 32 minutos",
            genero: "Acción, Crimen, Drama",
            puntuacion: "9.0"
        },
        {
            titulo: "Matrix",
            imagen: "https://pics.filmaffinity.com/Matrix-155050517-large.jpg",
            sinopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            duracion: "2 horas y 16 minutos",
            genero: "Acción, Ciencia ficción",
            puntuacion: "8.7"
        }
    ]

    return(
        <div className='movie-list'>
            {movies.map((movie) =>(
                <Movie
                    titulo={movie.titulo}
                    imagen={movie.imagen}
                    sinopsis={movie.sinopsis}
                    duracion={movie.duracion}
                    genero={movie.genero}
                    puntuacion={movie.puntuacion}
                />
            ))}
        </div>
    );
};
