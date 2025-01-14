import { Movie } from "../components/Movie";
import './../styles/MovieList.css';
import './../styles/Movie.css';

export const MovieList = () => {
  // Array de películas (quemado)
  const movies = [
    {
      titulo: "Batman",
      imagen: "https://m.media-amazon.com/images/M/MV5BMmU5NGJlMzAtMGNmOC00YjJjLTgyMzUtNjAyYmE4Njg5YWMyXkEyXkFqcGc@._V1_.jpg",
      sinopsis:
        "Cuando un asesino comienza a atacar a figuras clave en Gotham, Batman debe investigar la corrupción oculta en la ciudad.",
      duracion: 176,
      genero: "Acción, Crimen, Drama",
      puntuacion: 8.2,
    },
    {
      titulo: "El origen",
      imagen: "https://pics.filmaffinity.com/inception-652954101-large.jpg",
      sinopsis:
        "Un ladrón que roba secretos corporativos a través del uso de la tecnología de sueños compartidos debe realizar una tarea casi imposible.",
      duracion: 148,
      genero: "Ciencia ficción, Acción",
      puntuacion: 8.8,
    },
    {
      titulo: "Interestelar",
      imagen: "https://pics.filmaffinity.com/interstellar-366875261-large.jpg",
      sinopsis:
        "Un equipo de exploradores viaja más allá de esta galaxia para descubrir si la humanidad tiene un futuro entre las estrellas.",
      duracion: 169,
      genero: "Ciencia ficción, Aventura",
      puntuacion: 8.6,
    },
    {
      titulo: "Gladiador",
      imagen: "https://pics.filmaffinity.com/gladiator-851958258-large.jpg",
      sinopsis:
        "Un exgeneral romano busca venganza contra un emperador corrupto que asesinó a su familia y lo envió a la esclavitud.",
      duracion: 155,
      genero: "Acción, Drama, Aventura",
      puntuacion: 8.5,
    },
  ];

  return (
    <div className="movie-list">
      {movies.map((movie, index) => (
        <Movie
          key={index}
          titulo={movie.titulo}
          imagen={movie.imagen}
          sinopsis={movie.sinopsis}
          duracion={movie.duracion}
          genero={movie.genero}
          puntuacion={movie.puntuacion}
        />
      ))}
    </div>
  );
};
