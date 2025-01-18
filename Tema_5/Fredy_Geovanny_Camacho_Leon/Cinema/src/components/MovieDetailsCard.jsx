import "./styles/MovieDetailsCard.css";
import PropTypes from "prop-types";

const MovieDetailsCard = ({ movie, onBackToStore }) => {
  const {
    imagen = "",
    nombre = "Sin título",
    categoria = "Sin categoría",
    sinopsis = "No disponible",
    duracion = "No especificada",
    idiomas = [],
  } = movie || {};

  return (
    <div className="movie-details__card border border-success rounded-4">
      <img
        src={imagen}
        alt={nombre}
        className="movie-details__image"
        onError={(e) => (e.target.src = "/placeholder.png")}
      />
      <div className="movie-details__info">
        <h4 className="movie-details__nombre">{nombre}</h4>
        <p className="movie-details__category">
          <i className="fas fa-bookmark"></i>{" "}
          <strong>Categoría: </strong>
          {categoria}
        </p>
        <p className="movie-details__summary">
          <i className="fas fa-info-circle"></i>{" "}
          <strong>Sinopsis: </strong>
          {sinopsis}
        </p>
        <p className="movie-details__duration">
          <i className="fas fa-clock"></i>{" "}
          <strong>Duración: </strong>
          {duracion}
        </p>
        <p className="movie-details__languages">
          <i className="fas fa-language"></i>{" "}
          <strong>Idiomas: </strong>
          {idiomas.length > 0 ? idiomas.join(", ") : "No especificados"}
        </p>
        <div className="movie-details__buttons">
          <button
            className="movie-details__button movie-details__button--back"
            onClick={onBackToStore}>
          <i className="fas fa-arrow-left p-2"></i>Volver a la Sala de Cine
          </button>
        </div>
      </div>
    </div>
  );
};

MovieDetailsCard.propTypes = {
  movie: PropTypes.shape({
    imagen: PropTypes.string,
    nombre: PropTypes.string,
    categoria: PropTypes.string,
    sinopsis: PropTypes.string,
    duracion: PropTypes.string,
    idiomas: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  onBackToStore: PropTypes.func.isRequired,
};

export default MovieDetailsCard;
