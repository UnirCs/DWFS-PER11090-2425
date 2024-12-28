import React from 'react';
import '../styles/styles.css';
import {Cinema} from "../Components/Cinema";
import {Header} from "../Components/Header";
import {Footer} from "../Components/Footer";

export const MovieList = () => {
    const peliculas = [
        { titulo: "Batman", imagen: "assets/batman.jpg", sinopsis: "La venganza de principe de la noche.", duracion: "1h 30m", genero:"Accion", puntuacion:5 },
        { titulo: "Rocky I", imagen: "assets/rocky.jpg", sinopsis: "El inicio del exito de un hombre que inicia desde cero.", duracion: "1h 30m", genero:"Accion", puntuacion:6 },
        { titulo: "Avatar", imagen: "assets/avatar.jpg", sinopsis: "conquista de un nuevo mundo.", duracion: "1h 30m", genero:"Accion", puntuacion:5.5 },
        { titulo: "Comando", imagen: "assets/comando.jpg",sinopsis: "Rescantando rehenes en tiempos dificiles.", duracion: "1h 30m", genero:"Accion", puntuacion:5.7 },
        { titulo: "Vengadores", imagen: "assets/vengadores.jpg", sinopsis: "El cuidado de nuestro planeta.", duracion: "1h 30m", genero:"Accion", puntuacion:7 },
        { titulo: "Troya", imagen: "assets/troya.jpg", sinopsis: "Una pelicula epica.", duracion: "1h 30m", genero:"Epica", puntuacion:5 },
    ];

    return (
        <div>
            <Header />
            <h2 className="center-text">Peliculas Disponibles</h2>
            <div className="cinema-container">
                {peliculas.map((pelicula, index) => (
                    <Cinema
                        key={index}
                        titulo={pelicula.titulo}
                        imagen={pelicula.imagen}
                        sinopsis={pelicula.sinopsis}
                        duracion={pelicula.duracion}
                        genero={pelicula.genero}
                        puntuacion={pelicula.puntuacion}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
}