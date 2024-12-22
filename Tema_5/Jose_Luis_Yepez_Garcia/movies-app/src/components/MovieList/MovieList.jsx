import { Movie } from "../Movie/Movie"
import "./MovieList.css"

const movies = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    year: 1994,
    director: "Frank Darabont",
    duration: "2h 22min",
    genre: ["Crime", "Drama"],
    rate: 9.3,
    image: "/Cadena_perpetua.webp",
    sinopsis: "Un banquero es condenado a cadena perpetua por un crimen que no cometió y encuentra consuelo y redención a través de actos de decencia común."
  },
  {
    id: 2,
    title: "The Godfather",
    year: 1972,
    director: "Francis Ford Coppola",
    duration: "2h 55min",
    genre: ["Crime", "Drama"],
    rate: 9.2,
    image: "/The-Godather.webp",
    sinopsis: "La historia épica de la familia Corleone y su lucha por mantener el poder en el mundo del crimen organizado."
  },
  {
    id: 3,
    title: "The Dark Knight",
    year: 2008,
    director: "Christopher Nolan",
    duration: "2h 32min",
    genre: ["Action", "Crime", "Drama", "Thriller"],
    rate: 9.0,
    image: "/The-Dark-Knight.webp",
    sinopsis: "Batman se enfrenta a su mayor enemigo, el Joker, mientras lucha por salvar Gotham City del caos y la anarquía."
  },
  {
    id: 4,
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
    director: "Peter Jackson",
    duration: "3h 21min",
    genre: ["Action", "Adventure", "Drama", "Fantasy"],
    rate: 8.9,
    image: "/Lord-of-the-Rings-RoTK.webp",
    sinopsis: "La batalla final por la Tierra Media se libra mientras Frodo y Sam se acercan al Monte del Destino para destruir el Anillo Único."
  },
  {
    id: 5,
    title: "Inception",
    year: 2010,
    director: "Christopher Nolan",
    duration: "2h 28min",
    genre: ["Action", "Adventure", "Sci-Fi", "Thriller"],
    rate: 8.8,
    image: "Inception.webp",
    sinopsis: "Un ladrón de sueños es contratado para implantar una idea en la mente de un hombre de negocios mientras lucha por descubrir la verdad sobre su propio pasado y su esposa fallecida."
  },
]

export const MovieList = () => {
  return (
    <div className="movie__list__container">
      <h2>Descubre las mejores películas</h2>
      <div className="movie__list">
        {movies.map((movie) => (<Movie key={movie.id} movie={movie}/>))}
      </div>
    </div>
  )
}
