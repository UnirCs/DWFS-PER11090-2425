import "./Movie.css";

export const Movie = ({ title, image, synopsis, duration, genre, rating }) => {
  return (
    <div className="movie">
      <div className="movie__details">
        <h3 className="movie__title">{title}</h3>
        <p className="movie__synopsis">{synopsis}</p>
        <ul>
          <li>
            <strong>Duración:</strong> {duration}
          </li>
          <li>
            <strong>Género:</strong> {genre}
          </li>
          <li>
            <strong>Rating:</strong> {rating}
          </li>
        </ul>
      </div>

      <img className="movie__image" src={image} alt={`${title} poster image`} />

      <button
        className="btn btn-primary"
        onClick={() => {
          alert("Funcionalidad pendiente");
        }}
      >
        Seleccionar asientos
      </button>
    </div>
  );
};
