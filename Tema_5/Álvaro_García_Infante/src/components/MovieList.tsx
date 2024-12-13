import React from 'react';
import Movie from './Movie';
import {MovieType} from "./MovieType";

type MovielistProps = {
    movies: MovieType[];
};

const Movielist: React.FC<MovielistProps> = ({ movies }) => {
    if (!movies || movies.length === 0) {
        return <p>No movies available</p>;
    }

    return (
        <div className="movie-list-container">
            <h1 className="movie-list-title">Movies</h1>
            <ul className="movie-list">
                {movies.map((movie, index) => (
                    <li key={index} className="movie-item">
                        <Movie
                            title={movie.title}
                            image={movie.image}
                            synopsis={movie.synopsis}
                            duration={movie.duration}
                            gender={movie.gender}
                            score={movie.score}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Movielist;
