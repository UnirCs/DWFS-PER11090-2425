import React from "react";

export const Movie = ({Titulo, Imagen, Sinopsis, Duracion, Genero, Puntuacion}) => {
    return (
        <div className="card">
            <img src={Imagen} alt={Sinopsis} width="150px"/>
            <div className="card_title">
                <h2>{Titulo}</h2>
                <div className="card_data">
                    <p>Duracion: {Duracion}</p>
                    <p>Genero: {Genero}</p>
                    <p>Calificacion: {Puntuacion}</p>
                </div>
                <p className="sinopsis">Sinopsis: {Sinopsis}</p>
                <button>Reservar Asientos</button>
            </div>
        </div>
    );
}