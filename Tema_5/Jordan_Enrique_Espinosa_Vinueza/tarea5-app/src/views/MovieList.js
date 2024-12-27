import React from 'react';
import '../styles/styles.css';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Movie } from '../components/Movie';

export const MovieList = () => {
    const movielist = [
        {
            name: 'The Shawshank ',
            image: 'https://images.squarespace-cdn.com/content/5c75dfa97d0c9166551f52b1/1639184505697-PU99E09B8ZDV3RHUHZAC/9964546b0ba1f6e14a6045e34b341f8ca2a3569752c5afed95b89682fcde1a68._RI_V_TTW_.jpg?format=1500w&content-type=image%2Fjpeg',
            synopsis: 'Two imprisoned men bond over a number of years...',
            duration: 142,
            genre: 'Drama',
            rating: 9.3
        },
        {
            name: 'The Godfather',
            image: 'https://m.media-amazon.com/images/M/MV5BYTJkNGQyZDgtZDQ0NC00MDM0LWEzZWQtYzUzZDEwMDljZWNjXkEyXkFqcGc@._V1_.jpg',
            synopsis: 'The aging patriarch of an organized crime dynasty...',
            duration: 175,
            genre: 'Crime, Drama',
            rating: 9.2
        },
        {
            name: 'The Godfather: Part II',
            image: 'https://m.media-amazon.com/images/M/MV5BNzc1OWY5MjktZDllMi00ZDEzLWEwMGItYjk1YmRhYjBjNTVlXkEyXkFqcGc@._V1_.jpg',
            synopsis: 'The early life and career of Vito Corleone in 1920s New York...',
            duration: 202,
            genre: 'Crime, Drama',
            rating: 9.0
        },
        {
            name: 'The Dark Knight',
            image: 'https://i.scdn.co/image/ab67616d0000b2739ca20352ead0cc8dccdf7951',
            synopsis: 'When the menace known as the Joker emerges from his mysterious past...',
            duration: 152,
            genre: 'Action, Crime, Drama',
            rating: 9.0
        },
        {
            name: 'Pulp Fiction',
            image: 'https://atthemoviesshop.com/cdn/shop/files/0008811110314-1200px-001_1024x1024.jpg?v=1693462391',
            synopsis: 'The lives of two mob hitmen, a boxer, a gangster and his wife...',
            duration: 154,
            genre: 'Crime, Drama',
            rating: 8.9
        },
        {
            name: 'Schindler\'s List',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYHQsi_h94_DKKhonY9EVFFHNscJwgHzVdIA&s',
            synopsis: 'In German-occupied Poland during World War II...',
            duration: 195,
            genre: 'Biography, Drama, History',
            rating: 8.9
        },
    ];    

    return (
        <div>
            <Header />
            <h2>Top 6 Peliculas</h2>
            <div className="movie-list">
                {movielist.map((movie, index) => (
                    <Movie
                        key={index}
                        name={movie.name}
                        image={movie.image}
                        synopsis={movie.synopsis}
                        duration={movie.duration}
                        genre={movie.genre}
                        rating={movie.rating}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
};