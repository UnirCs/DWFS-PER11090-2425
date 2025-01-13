import React from 'react';
import {Header} from "../components/Header";
import {MovieList} from "../components/MovieList";
import {Footer} from "../components/Footer";
import '../styles/styles.css';

export const Movies = () => {
    return (
        <div className="movies">
            <Header/>
            <main className="main-content">
                <MovieList/>
            </main>
            <Footer/>
        </div>
    );
}
