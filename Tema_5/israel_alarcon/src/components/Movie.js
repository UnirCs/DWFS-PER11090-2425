import React, {useState} from "react";
import Popup from "./Popup";
import "../styles/Popup.css";
import { useNavigate } from "react-router-dom";


export const Movie = ({ id, nombre, genero, image, sinopsis, puntuacion }) => {
    const [showPopup, setShowPopup] = useState(false);
    let navigate = useNavigate();

    // Función para abrir el popup
    const openPopup = () => {
        setShowPopup(true);
    };

    // Función para cerrar el popup
    const closePopup = () => {
        setShowPopup(false);
    };


    return (
        <div className="about">
            <div className="book-card">
                <h1 className="book-name">{nombre}</h1>
                <img src={image} alt={nombre}/>
                <h2 className="book-autor">Género: {genero}</h2>
                <table align={"center"}>
                    <thead>
                    <td>
                        <button className="cart-button" onClick={openPopup}>Detalle de la Película</button>
                    </td>
                    </thead>
                </table>
            </div>

            {/* Componente Popup con contenido */}
            <Popup show={showPopup} onClose={closePopup}>
                <h2 className="book-name">{nombre}</h2>
                <img src={image} alt={nombre} width={250} height={350}/>
                <p className="book-autor">Genero: {genero}</p>
                <p className="book-sinopsis"><strong>Resumen: </strong>{sinopsis}</p>
                <p className="book-valor">Puntuación: {puntuacion}</p>
               <table align={"center"}>
                   <tr>
                   <td>
                       <button className="cart-button" onClick={() => {
                           navigate("/asientos/");
                       }}>Selección de Asientos</button>
                   </td>
                   <td width={20}></td>
                   <td>
                           <button className="cart-button" onClick={closePopup}>Cerrar</button>
                       </td>
                   </tr>
               </table>
            </Popup>
        </div>
    );
}