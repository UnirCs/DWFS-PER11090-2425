import React from 'react';
import '../styles/styles.css';
import {Movie} from "../Component/Movie";
import {Header} from "../Component/Header";
import {Footer} from "../Component/Footer";

export const MovieList = () => {
    const getImagen = (index) => require(`../imagenes/imagen${index}.PNG`);
    const peliculas = [
        {
            "titulo": "Inception",
            imagen: getImagen(1),
            "sinopsis": "Un ladrón que roba secretos corporativos a través del uso de la tecnología de sueños inversos es encargado de implantar una idea en la mente de un CEO.",
            "duracion": "148 min",
            "genero": "Ciencia Ficción, Acción",
            "puntuacion": 8.8
        },
        {
            "titulo": "The Dark Knight",
            imagen: getImagen(10),
            "sinopsis": "Cuando la amenaza conocida como el Joker emerge, Batman debe encontrar una manera de detener el caos que desata en Gotham City.",
            "duracion": "152 min",
            "genero": "Acción, Crimen, Drama",
            "puntuacion": 9.0
        },
        {
            "titulo": "Interstellar",
            imagen: getImagen(2),
            "sinopsis": "Un grupo de astronautas viaja a través de un agujero de gusano en busca de un nuevo hogar para la humanidad.",
            "duracion": "169 min",
            "genero": "Ciencia Ficción, Drama",
            "puntuacion": 8.6
        },
        {
            "titulo": "Pulp Fiction",
            imagen: getImagen(3),
            "sinopsis": "Varias historias de crimen y violencia se entrelazan en Los Ángeles.",
            "duracion": "154 min",
            "genero": "Crimen, Drama",
            "puntuacion": 8.9
        },
        {
            "titulo": "The Matrix",
            imagen: getImagen(4),
            "sinopsis": "Un hacker descubre la verdad sobre la realidad en la que vive y se une a una rebelión contra sus creadores.",
            "duracion": "136 min",
            "genero": "Ciencia Ficción, Acción",
            "puntuacion": 8.7
        },
        {
            "titulo": "Fight Club",
            imagen: getImagen(5),
            "sinopsis": "Un oficinista desencantado forma un club de pelea clandestino con un vendedor de jabón carismático.",
            "duracion": "139 min",
            "genero": "Drama",
            "puntuacion": 8.8
        },
        {
            "titulo": "Forrest Gump",
            imagen: getImagen(6),
            "sinopsis": "Un hombre con un coeficiente intelectual bajo pero con un gran corazón experimenta eventos históricos de EE.UU. de una manera única.",
            "duracion": "142 min",
            "genero": "Drama, Romance",
            "puntuacion": 8.8
        },
        {
            "titulo": "The Shawshank Redemption",
            imagen: getImagen(7),
            "sinopsis": "Un hombre injustamente encarcelado encuentra formas de darle sentido a su vida en prisión.",
            "duracion": "142 min",
            "genero": "Drama",
            "puntuacion": 9.3
        },
        {
            "titulo": "Gladiator",
            imagen: getImagen(8),
            "sinopsis": "Un general romano caído en desgracia busca venganza contra el emperador corrupto que mató a su familia.",
            "duracion": "155 min",
            "genero": "Acción, Drama, Historia",
            "puntuacion": 8.5
        },
        {
            "titulo": "The Godfather",
            imagen: getImagen(9),
            "sinopsis": "La historia de la familia mafiosa Corleone y su lucha por el poder.",
            "duracion": "175 min",
            "genero": "Crimen, Drama",
            "puntuacion": 9.2
        }
    ];
    return (
        <div>
            <Header/>
            <h2 className="center-text">Restaurantes Disponibles</h2>
            <div className="container">
                {peliculas.map((pelicula, index) => (
                    <Movie
                        key={index}
                        titulo={pelicula.titulo}
                        sinopsis={pelicula.sinopsis}
                       duracion={pelicula.duracion}
                        genero={pelicula.genero}
                        puntuacion={pelicula.puntuacion}
                        imagen={pelicula.imagen}


                    />
                ))}
            </div>
            <Footer/>
        </div>
    );
}

