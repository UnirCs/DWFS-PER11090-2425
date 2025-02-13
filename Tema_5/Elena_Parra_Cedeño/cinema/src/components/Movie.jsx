import React from "react";


function Move({ title, imagen, sinopsis, duracion, genero, puntuacion }) {
    return (
        <div className="card card-constum col">
            <img src={imagen} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{sinopsis}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{duracion}</li>
                <li className="list-group-item">{genero}</li>
                <li className="list-group-item">{puntuacion}</li>
            </ul>
            <div className="card-body">
                <a href="#" className="card-link">Comprar</a>
            </div>
        </div>
    );
}

export default Move;