import React from "react";
import '../styles/styles.css'
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import {Movie} from "../components/Movie";

export const MovieList = () => {
    const movies = [
        {
            Titulo: "Inception",
            Imagen: "https://posters.movieposterdb.com/10_06/2010/1375666/l_1375666_07030c72.jpg", // :contentReference[oaicite:0]{index=0}
            Sinopsis: "Un ladrón que roba secretos corporativos a través del uso de la tecnología de compartir sueños es encargado de implantar una idea en la mente de un director ejecutivo.",
            Duracion: "2h 28min",
            Genero: "Ciencia Ficción, Acción",
            Puntuacion: "8.8"
        },
        {
            Titulo: "The Godfather",
            Imagen: "https://posters.movieposterdb.com/22_07/1972/68646/l_68646_8c811dec.jpg", // :contentReference[oaicite:1]{index=1}
            Sinopsis: "El envejecido patriarca de una dinastía criminal organizada en la ciudad de Nueva York posterior a la guerra transfiere el control de su imperio clandestino a su hijo menor, reacio a asumir el rol.",
            Duracion: "2h 55min",
            Genero: "Crimen, Drama",
            Puntuacion: "9.2"
        },
        {
            Titulo: "The Dark Knight",
            Imagen: "https://posters.movieposterdb.com/08_06/2008/468569/l_468569_fe24b125.jpg",
            Sinopsis: "Batman se enfrenta a su mayor desafío cuando el Joker desata el caos en Gotham City.",
            Duracion: "2h 32min",
            Genero: "Acción, Crimen, Drama",
            Puntuacion: "9.0"
        },
        {
            Titulo: "Forrest Gump",
            Imagen: "https://posters.movieposterdb.com/12_04/1994/109830/l_109830_58524cd6.jpg",
            Sinopsis: "La vida de un hombre simple pero amable que, sin quererlo, está presente en eventos históricos significativos.",
            Duracion: "2h 22min",
            Genero: "Drama, Romance",
            Puntuacion: "8.8"
        },
        {
            Titulo: "Pulp Fiction",
            Imagen: "https://posters.movieposterdb.com/20_10/1994/110912/l_110912_40e7dce0.jpg",
            Sinopsis: "Las vidas de dos asesinos a sueldo, un boxeador, la esposa de un gánster y dos ladrones se entrelazan en cuatro relatos de violencia y redención.",
            Duracion: "2h 34min",
            Genero: "Crimen, Drama",
            Puntuacion: "8.9"
        },
        {
            Titulo: "The Shawshank Redemption",
            Imagen: "https://posters.movieposterdb.com/05_03/1994/0111161/l_8494_0111161_3bb8e662.jpg",
            Sinopsis: "Dos hombres encarcelados forjan un vínculo mientras encuentran consuelo y redención a través de actos de decencia común.",
            Duracion: "2h 22min",
            Genero: "Drama",
            Puntuacion: "9.3"
        }
    ];

    return (
        <>
            <Header />
            <h2 className="center-text">Peliculas Disponibles</h2>
            <div className="movie-container">
                {movies.map((movie, index) => (
                    <Movie
                        key={index}
                        Titulo={movie.Titulo}
                        Imagen = {movie.Imagen}
                        Sinopsis  = {movie.Sinopsis}
                        Duracion = {movie.Duracion}
                        Genero  = {movie.Genero}
                        Puntuacion = {movie.Puntuacion}
                    />
                ))}
            </div>
            <Footer />
        </>
    );
}