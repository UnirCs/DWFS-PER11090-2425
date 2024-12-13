import React from 'react';
import '../styles/styles.css';
import { Movie } from '../components/Movie';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const MovieList = () => {

    const movies = [
        { title: 'El Padrino', image: 'https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg', synopsis: 'El Padrino es una película de 1972 dirigida por Francis Ford Coppola', duration: 175, type: 'Drama', score: 9.2 },
        { title: 'El Padrino III', image: 'https://upload.wikimedia.org/wikipedia/en/5/55/GodfatherIII2.jpg', synopsis: 'El Padrino III es una película de 1990 dirigida por Francis Ford Coppola', duration: 162, type: 'Drama', score: 7.6 },
        { title: 'Shrek 2', image: 'https://upload.wikimedia.org/wikipedia/en/b/b9/Shrek_2_poster.jpg', synopsis: 'Shrek 2 es una película de 2004 dirigida por Andrew Adamson', duration: 95, type: 'Animación', score: 7.5 }
    ];

    return (
        <div>
            <Header/>
            <div className="movie-list">
                {movies.map((movie, index) => (
                    <Movie
                        key={index}
                        title={movie.title}
                        image={movie.image}
                        synopsis={movie.synopsis}
                        duration={movie.duration}
                        type={movie.type}
                        score={movie.score}
                    />
                ))}
            </div>
            <Footer/>
        </div>
    );
}