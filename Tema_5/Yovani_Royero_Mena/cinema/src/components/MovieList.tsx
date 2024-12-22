import React from 'react';
import { Movie, MovieProps } from './Movie';
import './list.css';



interface MovieListProps {
    movies: MovieProps[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {

    return (
        <div className='movie-list'>
           {movies.length > 0 ? (movies.map((movie) => 
           <Movie key={movie.titulo}
           duracion={movie.duracion}
            genero={movie.genero}
            imagen={movie.imagen}
            puntuacion={movie.puntuacion}
            sinopsis={movie.sinopsis}
            titulo={movie.titulo}
            />)) : (<p>No movies disponibles</p>)}
        </div>
    );
};

export default MovieList;