import React from "react";
import { moviesList } from "../components/MovieList";
import "../styles/Movies.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Movie } from "../components/Movie";

export const Overview = () => {

    return (
        <div>
            <Header />
            <h2 className="title">Movies</h2>
            <div className="movies__container">
                {moviesList.map((movie, index) => (
                    <Movie
                        key={index}
                        title={movie.title}
                        img={movie.img}
                        duration={movie.duration}
                        genre={movie.genre}
                        score={movie.score}
                    />
                ))}
            </div>
            <Footer />
        </div>
    )
}