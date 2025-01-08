import React from "react";
import '../styles/index.css';

export const Movie = ({ title, image, synopsis, duration, genre, rating }) => {
    return <div className="movie-card">
        <img src={image} alt={title} width="150px" />
        <div className="movie-title">
            <h2 className="title">{title}</h2>

            <div className="movie-data">
                <p>🎭 {genre}</p>
                <p>⏱ {duration}</p>
                <p>⭐ {rating}</p>
            </div>

            <p className="synopsis">{synopsis}</p>

            <button>Reservar Asientos</button>
        </div>
    </div>
}