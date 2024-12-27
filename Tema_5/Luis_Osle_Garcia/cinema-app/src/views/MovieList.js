import React from "react";
import styles from "../styles/styles.css";
import Movie from "../components/Movie";
import Footer from "../components/Footer";
import Header from "../components/Header";


//Importar imagenes
import gladiadorImg from "../img/gladiator.jpg";
import origenImg from "../img/origen.jpg";
import caballeroOscuroImg from "../img/caballero_oscuro.jpg";
import interestelarImg from "../img/interestelar.jpg";
import matrixImg from "../img/matrix.jpg";
import pulpFictionImg from "../img/pulp_fiction.jpg";
import lotrComunidadImg from "../img/comunidad_anillo.jpg";
import lotrDosTorresImg from "../img/dos_torres.jpg";
import lotrRetornoImg from "../img/retorno_rey.jpg";

export const MovieList =  () => {
    const movies = [
        { titulo: "Gladiador", imagen: gladiadorImg, sinopsis: "Un general romano busca venganza contra el emperador corrupto que asesinó a su familia y lo condenó a la esclavitud. En su lucha, se convierte en un héroe popular y desafía al imperio en la arena del Coliseo.", duracion: "2h 35m", genero: "Acción", puntuacion: 4.5 },
        { titulo: "Origen", imagen: origenImg, sinopsis: "Un ladrón que roba secretos corporativos a través del uso de la tecnología de sueños compartidos es dado la tarea inversa de plantar una idea en la mente de un CEO.", duracion: "2h 28m", genero: "Ciencia Ficción", puntuacion: 4.8 },
        { titulo: "El Caballero Oscuro", imagen: caballeroOscuroImg, sinopsis: "Cuando el Joker emerge como una nueva amenaza, Batman debe aceptar uno de los mayores desafíos psicológicos y físicos para luchar contra la anarquía que desata en Gotham City.", duracion: "2h 32m", genero: "Acción", puntuacion: 4.9 },
        { titulo: "Interestelar", imagen: interestelarImg, sinopsis: "Un grupo de exploradores viaja a través de un agujero de gusano en el espacio en un intento de asegurar la supervivencia de la humanidad.", duracion: "2h 49m", genero: "Ciencia Ficción", puntuacion: 4.7 },
        { titulo: "Matrix", imagen: matrixImg, sinopsis: "Un hacker descubre la verdadera naturaleza de su realidad y su papel en la guerra contra sus controladores.", duracion: "2h 16m", genero: "Ciencia Ficción", puntuacion: 4.6 },
        { titulo: "Pulp Fiction", imagen: pulpFictionImg, sinopsis: "Las vidas de dos sicarios, un boxeador, la esposa de un gánster y dos bandidos se entrelazan en cuatro historias de violencia y redención.", duracion: "2h 34m", genero: "Crimen", puntuacion: 4.7 },
        { titulo: "El Señor de los Anillos: La Comunidad del Anillo", imagen: lotrComunidadImg, sinopsis: "Un hobbit llamado Frodo Baggins hereda un anillo poderoso y debe emprender un viaje para destruirlo antes de que caiga en manos del malvado Sauron.", duracion: "2h 58m", genero: "Fantasía", puntuacion: 4.8 },
        { titulo: "El Señor de los Anillos: Las Dos Torres", imagen: lotrDosTorresImg, sinopsis: "Frodo y Sam continúan su viaje hacia Mordor para destruir el Anillo Único, mientras que sus amigos luchan para proteger la Tierra Media de las fuerzas de Sauron.", duracion: "2h 59m", genero: "Fantasía", puntuacion: 4.7 },
        { titulo: "El Señor de los Anillos: El Retorno del Rey", imagen: lotrRetornoImg, sinopsis: "La batalla final por la Tierra Media comienza, y Frodo y Sam llegan a Mordor en su misión para destruir el Anillo Único.", duracion: "3h 21m", genero: "Fantasía", puntuacion: 4.9 }
    ];


    return (
        <div>
            <Header />
            <h2 className="center-text titulo-principal" > Cartelera</h2>
            <div className="movie-container">
                {movies.map((movie, index) => (
                    <Movie
                        key={index}
                        titulo={movie.titulo}
                        imagen={movie.imagen}
                        sinopsis={movie.sinopsis}
                        duracion={movie.duracion}
                        genero={movie.genero}
                        puntuacion={movie.puntuacion}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
    };