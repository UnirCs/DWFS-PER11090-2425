export const Movie = ({ title, image, synopsis, duration, genre, rating }) => {
  return (
      <>
        <div className="movie-card">
          <img src={image} alt={title} className="movie-image" />
          <div className="movie-info">
            <h2 className="movie-title">{title}</h2>
            <p className="movie-synopsis">{synopsis}</p>
            <div className="movie-details">
              <span>Duración: {duration} min</span>
              <span>Género: {genre}</span>
            </div>
            <div className="movie-rating">
              <span>★ {rating}/10</span>
            </div>
            <button className="select-seats-btn">
              Seleccionar asientos
            </button>
          </div>
        </div>
      </>
  )
}