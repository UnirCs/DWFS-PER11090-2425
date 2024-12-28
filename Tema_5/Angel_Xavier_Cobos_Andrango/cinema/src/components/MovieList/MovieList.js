import React from 'react';
import './MovieList.css';
import Movie from '../Movie/Movie';
import Pelis from '../../movies.json';

const MovieList = () => {
    return (     
        <div className="movie-list">
        {Pelis.map((movie, index) => (
            console.log(movie),
          <Movie
            key={index}
            title={movie.title}
            image={movie.image}
            sinopsis={movie.sinopsis}
            duracion={movie.duracion}
            genero={movie.genero}
            puntuacion={movie.puntuacion}
          />
        ))}
      </div>

    );
};

export default MovieList;