import React from 'react';
import '../styles/movies.css';
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import {MovieList} from "../components/MovieList";



export const Movies = () => {
    return (
        <div className="movies">
            <Header /> {/* Encabezado */}
            <main className="main-content">
                <MovieList /> {/* Lista de películas */}
            </main>
            <Footer /> {/* Pie de página */}
        </div>
    );
};