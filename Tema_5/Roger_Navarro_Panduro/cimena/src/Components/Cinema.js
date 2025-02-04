import React from "react";
//import images from "img";
//import ruta from "../img/"; 

export const Cinema = ({ titulo, imagen, sinopsis, duracion, genero, puntuacion }) => {
    return (
        <div className="card">
            <p><img className="imagen" src={imagen} alt="Pelicula"></img></p>
            <h3>{titulo}</h3>
            <p>sinopsis: {sinopsis}</p>
            <p>Duración: {duracion}</p>
            <p>Genero: {genero}</p>
            <p>Puntuación: {puntuacion}</p>
        </div>
    );
}