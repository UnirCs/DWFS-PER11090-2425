import {Movie} from "./Movie.jsx";

export const MovieList = () => {
  const movies = [
    {
      title: "Duro de Matar",
      image: "https://image.tmdb.org/t/p/original/yFihWxQcmqcaBR31QM6Y8gT6aYV.jpg",
      synopsis: "Un policía combate terroristas en un rascacielos de Los Ángeles durante Navidad.",
      duration: 132,
      genre: "Acción",
      rating: 8.2
    },
    {
      title: "Mad Max",
      image: "https://image.tmdb.org/t/p/original/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg",
      synopsis: "En un mundo post-apocalíptico, una guerrera y un sobreviviente huyen de un tirano.",
      duration: 120,
      genre: "Ciencia Ficción",
      rating: 8.1
    },
    {
      title: "Batman Dark Night",
      image: "https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      synopsis: "Batman se enfrenta al Joker para salvar Gotham City del caos.",
      duration: 152,
      genre: "Acción/Drama",
      rating: 9.0
    },
    {
      title: "Misión Imposible",
      image: "https://image.tmdb.org/t/p/original/AkJQpZp9WoNdj7pLYSj1L0RcMMN.jpg",
      synopsis: "Ethan Hunt y su equipo intentan evitar un desastre nuclear global.",
      duration: 147,
      genre: "Acción",
      rating: 8.4
    },
    {
      title: "John Wick",
      image: "https://image.tmdb.org/t/p/original/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg",
      synopsis: "Un ex asesino busca venganza contra quienes mataron a su perro y robaron su auto.",
      duration: 101,
      genre: "Acción",
      rating: 7.4
    },
    {
      title: "The Matrix",
      image: "https://image.tmdb.org/t/p/original/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
      synopsis: "Un programador descubre que vive en una simulación y se une a la resistencia.",
      duration: 136,
      genre: "Ciencia Ficción",
      rating: 8.7
    }
  ];

  return (
      <>
        <div className="movie-list">
          {movies.map((movie, index) => (
              <Movie key={index} {...movie} />
          ))}
        </div>
      </>
  )
}
