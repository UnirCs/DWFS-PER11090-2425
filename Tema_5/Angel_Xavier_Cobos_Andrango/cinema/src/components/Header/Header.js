import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="/assets/images/cinema.png" alt="Cine Logo" className="logo" />
        <h1 className="title">CINEMA UNIR</h1>
      </div>
      <nav className="navigation">
        <ul>
          <li><a href="#now-showing">En cartelera</a></li>
          <li><a href="#coming-soon">Próximamente</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
