import React from "react";
import './../styles/Footer.css';

export const Footer = () => {
    return (
        <footer className="footer-head">
            <div className="footer-content">
                <label className="footer-text"><b>Cine UNIR-CINEMA</b></label>
                <label className="footer-text"><b>Dirección:</b> Calle Avenida de la Paz, 137. Logroño</label>
                <label className="footer-text"><b>Teléfono:</b> 941209743</label>
                <label className="footer-text"><b>Email:</b> cinefullstack@unircinema.com</label>
            </div>
        </footer>
    );
}