import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/NotFound.css";

function NotFound() {

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 50000);

    return () => clearTimeout(timer);
  }, [navigate]);

  const handleBackToCinema = () => {
    navigate("/Home");
  };

  return (
    <div className="not-found">
      <div className="not-found__header">
        <button className="not-found__back-button" onClick={handleBackToCinema}>
          <i className="fas fa-home"></i> Regresar a la Sala de Cine
        </button>
      </div>
      <div className="not-found__content">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__text">
          Bienvenido a nuestra sala de cine virtual.
          <br />
          Lamentablemente, la página que buscas no se encuentra disponible.
        </p>
      </div>
    </div>
  );
}

export default NotFound;