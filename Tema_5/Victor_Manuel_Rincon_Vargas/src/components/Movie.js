import React from "react";

const Movie = ({ title, image, synopsis, duration, genre, rating }) => (
  <div className="card mb-4" style={{ maxWidth: "18rem" }}>
    <img src={image} className="card-img-top" alt={title} />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{synopsis}</p>
      <p className="card-text"><small className="text-muted">Duración: {duration}</small></p>
      <p className="card-text"><small className="text-muted">Género: {genre}</small></p>
      <p className="card-text"><small className="text-muted">Puntuación: {rating}</small></p>
      <button className="btn btn-primary">Seleccionar Asientos</button>
    </div>
  </div>
);

export default Movie;

