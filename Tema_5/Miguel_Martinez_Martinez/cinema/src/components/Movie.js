import React from "react";
import "../styles/MovieCard.css";

export const Movie = ({ title, img, synopsis, duration, genre, score }) => {
    return (
        <div className="movie_card">
            <img src={img} alt={title} />
            <div className="movie_card_content">
                <h3>{title}</h3>
                <p>Duration: {duration}</p>
                <p>Genre: {genre}</p>
                <p>Score: {score}</p>
            </div>
        </div>
    );
}