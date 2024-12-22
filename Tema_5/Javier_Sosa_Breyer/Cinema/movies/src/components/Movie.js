import React from "react";

export const Movie = ({movie}) => {
    return (
        <div className="card h-100 mb-4 rounded-3 shadow-sm">
            <img src={movie.thumbnail} className="card-img-top" alt={movie.title}/>
            <div className="card-body">
                <h5 className="card-title text-warning"><b>{movie.title}</b></h5>
                <p className="card-text">
                    <small className="text-body-secondary">
                        {movie.genre} | {movie.duration} | {movie.score}
                    </small>
                </p>
                <p className="card-text">{movie.synopsis}</p>
            </div>
            <div className="card-footer text-center">
                <button className="btn btn-warning">Elegir asientos</button>
            </div>
        </div>
    );
}
