import React from "react";
import './../styles/Movie.css';

export const Movie = ({indice,titulo,rutaimg, sinopsis, duracion, genero, puntuacion}) => {
    return (
        <div className="movie-header">
            <div className="movie-htit">
                <h5 className="indice">{indice}</h5>
                <h3 className="movie-titulo">{titulo}</h3>
            </div>            
            <img className="movie-img" alt="imagen-pelicula" src={rutaimg}/>
            <p className="movie-sinopsis">{sinopsis}</p>
            <p className="movie-duracion"><b>Duración: </b>{duracion}</p>
            <p className="movie-genero"><b>Género: </b>{genero}</p>
            <p className="movie-puntuacion"><b>Puntuación: </b>{puntuacion}</p>
            <button className="movie-btn">COMPRAR</button>
        </div>
    );
}