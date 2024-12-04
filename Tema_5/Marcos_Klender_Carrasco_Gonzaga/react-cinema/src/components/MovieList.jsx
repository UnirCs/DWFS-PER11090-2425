import React from "react";
import { Movie } from "./Movie";
import '../styles/index.css';

export const MovieList = () => {
    const movies = [
        {
            title: "Inception",
            image: "https://pics.filmaffinity.com/inception-652954101-large.jpg",
            synopsis: "Un ladrón que roba secretos corporativos a través del uso de la tecnología de compartir sueños.",
            duration: "148 min",
            genre: "Ciencia ficción",
            rating: "8.8"
        },
        {
            title: "The Dark Knight",
            image: "https://pics.filmaffinity.com/the_dark_knight-102763119-large.jpg",
            synopsis: "Cuando la amenaza conocida como el Joker emerge de su misterioso pasado.",
            duration: "152 min",
            genre: "Acción",
            rating: "9.0"
        },
        {
            title: "Interstellar",
            image: "https://pics.filmaffinity.com/interstellar-366875261-large.jpg",
            synopsis: "Un equipo de exploradores viaja a través de un agujero de gusano en el espacio en un intento de asegurar la supervivencia de la humanidad.",
            duration: "169 min",
            genre: "Aventura",
            rating: "8.6"
        },
        {
            title: "Forrest Gump",
            image: "https://pics.filmaffinity.com/forrest_gump-212765827-large.jpg",
            synopsis: "Las presidencias de Kennedy y Johnson, la guerra de Vietnam y más a través de los ojos de un hombre de Alabama.",
            duration: "142 min",
            genre: "Drama",
            rating: "8.8"
        },
        {
            title: "The Godfather",
            image: "https://m.media-amazon.com/images/M/MV5BYTJkNGQyZDgtZDQ0NC00MDM0LWEzZWQtYzUzZDEwMDljZWNjXkEyXkFqcGc@._V1_.jpg",
            synopsis: "El envejecido patriarca de una dinastía del crimen organizado transfiere el control de su imperio a su reacio hijo.",
            duration: "175 min",
            genre: "Crimen",
            rating: "9.2"
        }
    ];

    return <div className="movie-list">
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
}