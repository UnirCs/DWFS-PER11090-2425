import React from 'react';
import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Movielist from "./components/MovieList";
import {MovieType} from "./components/MovieType";

const movies: MovieType[] = [
    {
        title: "Star Wars: Episodio I - La amenaza fantasma",
        image: "star_wars_1.jpg",
        synopsis: "Dos caballeros jedi escapan de un bloqueo hostil para ir en busca de aliados y conocen a un joven que podría restaurar el equilibrio en la Fuerza. Pero los previamente inactivos sith resurgen para reclamar su antigua gloria.",
        duration: "2h 16m",
        gender: "Science Fiction",
        score: "6.5/10",
    },
    {
        title: "Star Wars: Episodio II - El ataque de los clones",
        image: "star_wars_2.jpg",
        synopsis: "Tras diez años de su primer encuentro, Anakin Skywalker y Padmé Amidala disfrutan de un romance prohibido, mientras Obi-Wan Kenobi investiga el intento de asesinato de un senador y descubre una armada secreta de clones creada por los jedi.",
        duration: "2h 22m",
        gender: "Science Fiction",
        score: "6.6/10",
    },
    {
        title: "Star Wars: Episodio III - La venganza de los sith",
        image: "star_wars_3.jpg",
        synopsis: "Tras tres años de Guerras Clon, los jedi rescatan a Palpatine del Conde Dooku. Mientras Obi-Wan persigue una nueva amenaza, Anakin actúa como agente doble entre el Consejo Jedi y Palpatine, siendo atraído por un siniestro plan.",
        duration: "2h 20m",
        gender: "Science Fiction",
        score: "7.6/10",
    }
];

function App() {
    return (
        <>
            <Header/>
            <Movielist movies={movies}/>
            <Footer/>
        </>
    );
}

export default App;
