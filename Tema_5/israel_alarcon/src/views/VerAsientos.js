import React from 'react';
import '../styles/carrito.css';
import {useNavigate} from "react-router-dom";

export const VerAsientos = () => {

    const navigate = useNavigate();

    const goToMovies = () => {
        navigate("/"); // Navegar a la página del carrito
    };


    return (
        <>
            <div className="contenedor">
                <div>
                    <span className="titulo_catalogo">Selección de Butacas</span>
                </div>
                <div className="linea"></div>

                <p></p>
                <div>
                    <button className="cart-button" onClick={goToMovies}>Seguir viendo cartelera</button>
                </div>

            </div>
        </>
    );
}


