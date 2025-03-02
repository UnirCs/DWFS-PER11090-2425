import React from "react";
import Movie from "./Movie"
import "../styles/Movielist.css"//Importamos la hoja de estilo

const movies = [
  {
    id: 1,
    title: "Interstellar",
    image: "https://image.tmdb.org/t/p/w1280/9kmFzQjRdEjSpjVQeGlvmHAzaPw.jpg",
    synopsis: "Un grupo de astronautas viaja a través de un agujero de gusano en busca de un nuevo hogar para la humanidad.",
    duration: "169 min",
    genre: "Ciencia Ficción",
    rating: 8.6,
  },
  {
    id: 2,
    title: "Running Point",
    image: "https://image.tmdb.org/t/p/w1280/xHpfi2dBdsgnFIx7DzfMd0DwTXo.jpg",
    synopsis: "Una fiestera reformada debe demostrar que es una buena empresaria cuando, sin esperarlo, acaba a cargo del equipo de baloncesto profesional de su familia.",
    duration: "148 min",
    genre: "Acción, Ciencia Ficción",
    rating: 8.8,
  },
  {
    id: 3,
    title: "The Dark Knight",
    image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    synopsis: "Batman enfrenta a su mayor enemigo, el Joker, quien siembra el caos en Gotham.",
    duration: "152 min",
    genre: "Acción, Crimen",
    rating: 9.0,
  },
  {
    id: 4,
    title: "Avengers: Endgame",
    image: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    synopsis: "Después del chasquido de Thanos, los Vengadores restantes intentan revertir la catástrofe y restaurar el equilibrio del universo.",
    duration: "181 min",
    genre: "Acción, Aventura",
    rating: 8.4,
  },
  {
    id: 5,
    title: "Parasite",
    image: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    synopsis: "Una familia de bajos recursos se infiltra en la vida de una familia rica, desencadenando una serie de eventos inesperados.",
    duration: "132 min",
    genre: "Drama, Thriller",
    rating: 8.6,
  },
  {
    id: 6,
    title: "Joker",
    image: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    synopsis: "Un comediante con problemas mentales se convierte en el infame villano Joker de Gotham.",
    duration: "122 min",
    genre: "Drama, Crimen",
    rating: 8.5,
  },
  {
    id: 7,
    title: "The Matrix",
    image: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    synopsis: "Un hacker descubre la verdad sobre su realidad y se une a la lucha contra las máquinas que dominan la humanidad.",
    duration: "136 min",
    genre: "Ciencia Ficción, Acción",
    rating: 8.7,
  },
  {
    id: 8,
    title: "Spider-Man: No Way Home",
    image: "https://image.tmdb.org/t/p/w1280/y3m8fNP6WnGemSPpEXRLyAaTSA1.jpg",
    synopsis: "Peter Parker debe enfrentar las consecuencias de que el mundo conozca su identidad, mientras abre las puertas del multiverso.",
    duration: "148 min",
    genre: "Acción, Aventura",
    rating: 8.2,
  }
];

const Movielist = () => {
  return (
    <div className="movie-list-container">
      <h2 className="movie-list-title">Cartelera</h2>
      <div className="movie-list">
        {movies.map((movie) => (
          <Movie key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
};

export default Movielist;
