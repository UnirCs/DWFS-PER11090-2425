import React from "react";
import './../styles/Header.css';

export const Header = () => {
    return (
        <header className="header-footer">
            <div className="header-head">
                <img src="assets/logo.png" alt="Logo Cinema Unir" className="header-logo" />
                <h2 className="header-footer-text">Cinema Unir - Julio Sarauz</h2>
            </div>
            <nav className="header-nav">
            <ul>
                <li><a href="#home">Inicio</a></li>
                <li><a href="#about">Nosotros</a></li>
                <li><a href="#services">Servicios</a></li>
                <li><a href="#contact">Contactos</a></li>
            </ul>
            </nav>            
        </header>
    );
}