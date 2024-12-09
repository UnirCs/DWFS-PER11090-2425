import React from 'react';
import './Movies.css'; // Opcional, si necesitas estilos.
import Header from '../components/Header'
import MovieList from '../components/MovieList';
import Footer from '../components/Footer';

const Movies = () => {
    return (
        <div>
            <Header /> {/* El Header se muestra en todas las páginas */}
            <MovieList /> {/* Muestra la lista de películas */}
            <Footer /> {/* El Footer se muestra en todas las páginas */}
        </div>
    );
};

export default Movies;