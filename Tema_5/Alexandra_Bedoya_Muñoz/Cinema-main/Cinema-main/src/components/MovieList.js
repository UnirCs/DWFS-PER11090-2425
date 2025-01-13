import React from "react";
import Movie from "./Movie";
import '../styles/MovieList.css';

const moviesData = [
  {
    id: 1,
    title: "Bajo la Misma Estrella",
    image:"https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2020/04/20/15873878906879.jpg",
    synopsis:"Hazel y Gus, dos adolescentes con cáncer, se embarcan en un viaje para conocer a su autor favorito, mientras lidian con el amor y la mortalidad.",
    duration: "2h 6m",
    genre: "Drama, Romance",
    rating: 7.7,
  },
  {
    id: 2,
    title: "El Caballero de la Noche",
    image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    synopsis: "Batman enfrenta al Joker, un criminal caótico que pone a prueba su moral y su capacidad para proteger Gotham.",
    duration: "2h 32m",
    genre: "Acción, Crimen, Drama",
    rating: 9.0,
  },
  {
    id: 3,
    title: "HELLRAISER",
    image:"https://i.pinimg.com/736x/f6/eb/57/f6eb5797c2ffbe5aec2c66843fda8c7b.jpg",
    synopsis:"Un hombre accidentalmente abre un portal al infierno al resolver un rompecabezas, liberando horrores inimaginables.",
    duration: "1h 33m",
    genre: "Terror",
    rating: 8.6,
  },
  {
    id: 4,
    title: "Avatar",
    image:"https://i.pinimg.com/originals/df/65/62/df656260d3ee08fb38e550b160467d7a.jpg",
    synopsis: "En un planeta alienígena, un exmarine se encuentra dividido entre los intereses humanos y los de los nativos Na'vi.",
    duration: "2h 42m",
    genre: "Aventura, Ciencia Ficción",
    rating: 7.9,
  },
  {
    id: 5,
    title: "Avengers: Endgame",
    image: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    synopsis:"Después de los eventos devastadores de Infinity War, los Vengadores se reúnen para deshacer las acciones de Thanos.",
    duration: "3h 1m",
    genre: "Acción, Aventura",
    rating: 8.4,
  },
  {
    id: 6,
    title: "Monsters INC",
    image:"https://i.pinimg.com/736x/59/10/23/59102333312c8ceae749027c5193539d.jpg",
    synopsis:"2 monstruos trabajan en la planta de energía con gritos de niñosy una niña humana entra a su mundo.",
    duration: "1h 32m",
    genre: "Animación, Comedia, Familia",
    rating: 8.7,
  },
  {
    id: 7,
    title: "Yo antes de ti",
    image:"https://i.pinimg.com/236x/bf/36/9d/bf369d6b56a636d6c77597cb923513e1.jpg",
    synopsis:"Una joven se convierte en la cuidadora de un hombre paralizado y ambos encuentran formas de ver la vida.",
    duration: "1h 50m",
    genre: "Drama, Romance",
    rating: 8.8,
  },
  {
    id: 8,
    title: "Joker",
    image: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    synopsis:"Un comediante con problemas mentales comienza un descenso que lo lleva a convertirse en un villano icónico.",
    duration: "2h 2m",
    genre: "Drama",
    rating: 8.4,
  },
  {
    id: 9,
    title: "Arrástrame al Infierno",
    image:"https://www.elcolombiano.com/blogs/cinefagos/wp-content/uploads/2009/10/arrastrame_al_infierno.jpg",
    synopsis: "Una joven es maldecida después de rechazar la petición de una anciana y lucha por salvar su alma.",
    duration: "1h 39m",
    genre: "Terror, Suspenso",
    rating: 8.0,
  },
];

const MovieList = () => {
    return (
      <div className="movie-list">
        <h2 >Películas Disponibles</h2>
        <div className="movie-list-grid">
          {moviesData.map((movie) => (
            <Movie key={movie.id} {...movie} />
          ))}
        </div>
      </div>
    );
  };
  
  export default MovieList;
