import React from 'react';
import '../styles/styles.css'

import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="not-found">
      <img src="/img/notfound.jpg" alt="Not Found" />
      <p>Página no encontrada</p>
      <Link to="/">
        <button>Volver al inicio</button>
      </Link>
    </div>
  );
};
