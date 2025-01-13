import React from 'react';
import './Footer.css';  // Si deseas añadir estilos personalizados

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p>&copy; 2024 Cartelera de Cine. Todos los derechos reservados.</p>
        </div>
        <div className="footer-center">
          <ul>
            <li><a href="#politica-privacidad">Política de Privacidad</a></li>
            <li><a href="#terminos">Términos y Condiciones</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>
        <div className="footer-right">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
