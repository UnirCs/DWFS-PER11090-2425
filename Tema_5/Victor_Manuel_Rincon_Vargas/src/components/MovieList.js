import React from "react";
import Movie from "./Movie";

const MovieList = () => {
  const movies = [
    {
      title: "Spider-Man: No Way Home",
      image: "/img/spider-man.jpg", 
      synopsis: "El Peter Parker de Tom Holland, que aún lucha por lidiar con las consecuencias de sus acciones en la primera película.",
      duration: "148 min",
      genre: "Acción, Aventura",
      rating: "8.3/10",
    },
    {
      title: "The Matrix Resurrections",
      image: "/img/matrix.jpg", 
      synopsis: "Neo y Trinity regresan a la Matrix en esta cuarta entrega de la famosa franquicia.",
      duration: "148 min",
      genre: "Ciencia Ficción, Acción",
      rating: "6.7/10",
    },
    {
      title: "Dune",
      image: "/img/dune.jpg", 
      synopsis: "Un joven con un destino trascendental debe recorrer el universo para salvar a su familia y a su gente.",
      duration: "155 min",
      genre: "Ciencia Ficción, Aventura",
      rating: "8.0/10",
    },
    {
      title: "No Time to Die",
      image: "/img/no-time-to-die.jpg",
      synopsis: "James Bond se ve obligado a salir de su retiro para enfrentarse a un misterioso villano armado con una nueva tecnología peligrosa.",
      duration: "163 min",
      genre: "Acción, Aventura",
      rating: "7.4/10",
    },
    
    {
        title: "Black Widow",
        image: "/img/black-widow.jpg",
        synopsis: "Natasha Romanoff, alias Black Widow, se enfrenta a las partes más oscuras de su historia cuando surge una peligrosa conspiración.",
        duration: "134 min",
        genre: "Acción, Aventura",
        rating: "6.8/10",

    },
    {
        title: "Shang-Chi and the Legend of the Ten Rings",
        image: "/img/shang-chi.jpg",
        synopsis: "Shang-Chi debe enfrentarse al pasado que pensó que había dejado atrás cuando se ve envuelto en la red de la misteriosa organización de los Diez Anillos.",
        duration: "132 min",
        genre: "Acción, Aventura",
        rating: "7.6/10",

    },
    {
        title: "Eternals",
        image: "/img/eternals.jpg",
        synopsis: "Los Eternos, una raza de seres inmortales con superpoderes que han vivido en la Tierra en secreto durante miles de años, salen de las sombras para enfrentarse a los Deviantes.",
        duration: "156 min",
        genre: "Acción, Aventura",
        rating: "6.6/10",
        
    }
  ];

  return (
    <div className="container">
      <div className="row">
        {movies.map((movie, index) => (
          <div className="col-md-3" key={index}>
            <Movie
              title={movie.title}
              image={movie.image}
              synopsis={movie.synopsis}
              duration={movie.duration}
              genre={movie.genre}
              rating={movie.rating}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
