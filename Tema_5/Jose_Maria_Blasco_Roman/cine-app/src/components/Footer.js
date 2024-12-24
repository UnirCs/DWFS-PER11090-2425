import React from 'react';
import '../styles/Footer.css'; // Importa los estilos

export const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Cines UNIR App. Todos los derechos reservados.</p>
        </footer>
    );
};
