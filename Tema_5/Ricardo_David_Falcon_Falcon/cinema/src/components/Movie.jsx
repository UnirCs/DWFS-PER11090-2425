export const Movie = ({ titulo, imagen, sinopsis, duracion, genero, puntuacion }) => {
  return (
    <div className="movie-card">
      <img src={imagen} alt={`Poster de ${titulo}`} className="movie-image" />
      <div className="movie-details">
        <h2 className="movie-title">{titulo}</h2>
        <p className="movie-sinopsis">{sinopsis}</p>
        <p><strong>Duración:</strong> {duracion} mins</p>
        <p><strong>Género:</strong> {genero}</p>
        <p><strong>Puntuación:</strong> ⭐ {puntuacion}/10</p>
        <button className="movie-button">Comprar</button>
      </div>
    </div>
  );
};
