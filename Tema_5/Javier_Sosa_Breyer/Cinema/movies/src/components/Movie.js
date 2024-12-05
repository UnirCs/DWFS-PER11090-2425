import React from "react";

export const Movie = ({movie}) => {
    return (
        <div className="card mb-4 rounded-3 shadow-sm">
            <img src={movie.thumbnail} className="card-img-top" alt={movie.title}/>
            <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">
                    <small className="text-body-secondary">
                        {movie.genre} | {movie.duration} | {movie.score}
                    </small>
                </p>
                <p className="card-text">{movie.synopsis}</p>
            </div>
            <div className="card-footer text-center">
                <button className="btn btn-primary">Elegir asientos</button>
            </div>
        </div>
    );
}
