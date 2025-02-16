import React from 'react';
import MovieList from "../MovieList/MovieList";
import { useParams } from "react-router-dom";
import Footer from '../Footer/footer';
import Header from '../Header/header';

const MoviePrint = () => {

    const movies = MovieList;
    const { index } = useParams();
    const movieIndex = parseInt(index);

    const movie = movies[movieIndex];
    console.log(movies);

    if (!movie) {
        return <div>Pelicula no encontrada</div>;
    }

    return (
        <>
            <Header />
            <div className="movie-content">
                <img src={movie.imagen} alt={movie.titulo} />
                <h3>{movie.titulo}</h3>
                <p>Sinopsis: {movie.sinopsis}</p>
                <p>Duración: {movie.duracion}</p>
                <p>Género: {movie.genero}</p>
                <p>Puntuación: {movie.puntuacion}</p>
            </div>
            <Footer />
        </>
    );

}

export default MoviePrint;