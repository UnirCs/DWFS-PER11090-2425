import React from "react";

export const MovieList = ({titulo,imagen}) => {
    return (
        <div className="card">
            <h3>{titulo}</h3>
            <img src={`img/${imagen}`} alt="imagen de la pelicula" className="movie-photo"/>
            <button className="btn btn-danger">Ver más</button>
        </div>
    );
}