import React from 'react';
import {MovieType} from "./MovieType";

type MovieProps = MovieType;

const Movie: React.FC<MovieProps> = ({ title, image, synopsis, duration, gender, score }) => {
    return (
        <div>
            <h2>{title}</h2>
            <img src={image} alt={title} className="movie-image"  />
            <p>Synopsis: {synopsis}</p>
            <p>Duration: {duration}</p>
            <p>Gender: {gender}</p>
            <p>Score: {score}</p>
            <button>Reservar</button>
        </div>
    );
};

export default Movie;
