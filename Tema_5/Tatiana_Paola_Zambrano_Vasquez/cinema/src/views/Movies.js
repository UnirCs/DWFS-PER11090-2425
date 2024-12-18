import React from 'react';
import '../styles/styles.css';
import {MovieList} from "../components/MovieList";
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";

export const Movies = () => {
    const movies = [
        {
            titulo:"Nuestro secretito",
            imagen:"nuestrosecretito.webp",
            sinopsis:"Después de descubrir que sus parejas actuales son hermanos, dos exnovios despechados deben pasar Navidad bajo el mismo techo… y ocultar su pasado amoroso.",
            duracion:"120 minutos",
            genero:"Comedias-Romances",
            puntuacion:"10+",
        },
        {
            titulo: "El tren de los niños ",
            imagen : "eltrendelosniños.webp",
            sinopsis:"En la Italia de fines de los cuarenta, una madre toma la difícil decisión de enviar a su hijo al norte del país. Allí, él descubre una vida sin pobreza.",
            duracion: "1H",
            genero:"Dramas",
            puntuacion:"8+",
        },
        {
            titulo: "Aquella navidad",
            imagen : "aquellanavidad.webp",
            sinopsis:"El pequeño pueblo de Wellington del Mar vive una Navidad inolvidable cuando una feroz tormenta de nieve decide arruinar los planes de todos..., incluso los de Santa",
            duracion: "45 minutos",
            genero:"Comedias-Infantiles",
            puntuacion:"7+",
        },
        {
            titulo: "Los niños perdidos",
            imagen : "losninosperdidos.webp",
            sinopsis:"Tras un accidente aéreo, cuatro niños indígenas luchan por su vidas en la selva amazónica usando sabiduría ancestral mientras se lleva a cabo una misión de rescate sin precedentes",
            duracion:"90 minutos",
            genero:"Película-Documentales",
            puntuacion:"13+",
        },
        {
            titulo: "Los indestructibles 4",
            imagen : "indestructibles.webp",
            sinopsis:"Nueva sangre, guerreros curtidos, una misión. Mercenarios de élite se unen para formar un frente sólido ante una amenaza global.",
            duracion: "1H",
            genero:"Acción",
            puntuacion:"16+",
        },
        {
            titulo: "Arcane",
            imagen : "arcane.webp",
            sinopsis:"Mientras la discordia separa las ciudades gemelas de Piltóver y Zaun, dos hermanas se enfrentan en una guerra feroz entre tecnologías mágicas y convicciones opuestas.",
            duracion: "90 minutos",
            genero:"Fantasía",
            puntuacion:"16+",
        },
    ];

    return (
        <div>
            <Header/>
            <h2 className="center-text">Películas Disponibles</h2>
            <div className="movie-container">
                {movies.map((movie, index) => (
                    <MovieList
                        key={index}
                        titulo={movie.titulo}
                        imagen={movie.imagen}
                    />
                ))}
            </div>
            <Footer/>
        </div>
    );
}