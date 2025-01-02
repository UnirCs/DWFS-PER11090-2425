import React from 'react';
import '../styles/MovieList.css'; // Importa los estilos
import { Movie } from "./Movie"; // Importa el componente Movie

export const MovieList = () => {
    const movies = [


        {
            title: "Avengers: Endgame",
            image: "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SY679_.jpg",
            synopsis: "Los Vengadores restantes luchan por revertir el daño causado por Thanos.",
            duration: "3h 2m",
            genre: "Acción, Ciencia ficción",
            rating: 8.4,
        },
        { title: "El Señor de los Anillos: La Comunidad del Anillo",
            image: "https://m.media-amazon.com/images/I/81yvGPXTbgL._AC_UY327_FMwebp_QL65_.jpg",
            synopsis: "Un hobbit llamado Frodo Baggins hereda un anillo poderoso y debe emprender un viaje para destruirlo antes de que caiga en manos del malvado Sauron.",
            duration: "2h 58m",
            genre: "Fantasía",
            rating: 4.8
        },
        { title: "Star Wars Ep VI: El retorno del Jedi",
            image: "https://m.media-amazon.com/images/I/41IbPXvjgsL._SX300_SY300_QL70_ML2_.jpg",
            synopsis: "Un hobbit llamado Frodo Baggins hereda un anillo poderoso y debe emprender un viaje para destruirlo antes de que caiga en manos del malvado Sauron.",
            duration: "2h 58m",
            genre: "Fantasía",
            rating: 4.8
        },
        {
            title: "El caballero de la noche",
            image: "https://m.media-amazon.com/images/I/91nMDRp9MKL._AC_UL480_FMwebp_QL65_.jpg",
            synopsis: "Batman lucha contra el Joker, un genio criminal que causa caos en Gotham City.",
            duration: "2h 32m",
            genre: "Acción, Crimen, Drama",
            rating: 9.0,
        },
    ];

    return (
        <div className="movie-list">
            {movies.map((movie, index) => (
                <Movie
                    key={index}
                    title={movie.title}
                    image={movie.image}
                    synopsis={movie.synopsis}
                    duration={movie.duration}
                    genre={movie.genre}
                    rating={movie.rating}
                />
            ))}
        </div>
    );
};
