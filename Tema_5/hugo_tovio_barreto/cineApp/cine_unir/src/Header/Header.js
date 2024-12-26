import React from 'react';
import './Header.css';  // Si quieres aplicar estilos adicionales

function Header() {
  
  return (
    <header className="header">
      <div className="logo">
        <img 
        src='https://cdn.pixabay.com/photo/2015/01/11/18/36/film-596519_640.jpg'
          alt="Cine Logo" 
          className="logo-img"
        />
        <h1>cartelera de cine</h1>
      </div>
      <nav className="nav">
        <ul>
          <li><a href="#home">Inicio</a></li>
          <li><a href="#peliculas">Películas</a></li>
          <li><a href="#estrenos">Estrenos</a></li>
          <li><a href="#contacto">Contacto</a></li>
          <li><a href="#acerca-de">Acerca de</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
