import React from 'react';
import '../styles/Popup.css'; // Asegúrate de crear el archivo CSS con los estilos

const Popup = ({ show, onClose, children }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="popup-overlay">
            <div className="popup">
                <button className="popup-close" onClick={onClose}>X</button>
                <div className="popup-content">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Popup;
