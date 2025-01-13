import React from "react";
import '../styles/styles.css';
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Movie } from "../components/Movie";

export const MovieList = () => {
    const movies = [
        {
            Titulo: "The Shawshank Redemption",
            Imagen: "https://posters.movieposterdb.com/05_03/1994/0111161/l_8494_0111161_3bb8e662.jpg",
            Sinopsis: "En la década de 1940, un banquero llamado Andy Dufresne es condenado por el asesinato de su esposa y su amante, un crimen que no cometió. Mientras cumple su sentencia en la prisión de Shawshank, forja una amistad con Ellis ‘Red’ Redding, un hombre con una vasta experiencia en el sistema penitenciario. Juntos, encuentran una forma de soportar la vida en prisión, mientras Andy demuestra su talento para las finanzas, ayudando a los administradores de la prisión a ocultar dinero ilegal. Con el paso de los años, su deseo de libertad sigue intacto, y finalmente, su astucia le permite escapar, dejando atrás un legado de esperanza y redención.",
            Duracion: "2h 22min",
            Genero: "Drama",
            Puntuacion: "9.3"
        },
        {
            Titulo: "Pulp Fiction",
            Imagen: "https://posters.movieposterdb.com/20_10/1994/110912/l_110912_40e7dce0.jpg",
            Sinopsis: "La película cuenta varias historias entrelazadas, donde los personajes principales son un par de asesinos a sueldo, Vincent Vega y Jules Winnfield, cuya rutina se ve interrumpida por situaciones imprevistas. También sigue la vida de un boxeador, Butch Coolidge, quien se ve envuelto en un acuerdo traicionero. A lo largo de la película, las vidas de los personajes se cruzan de formas inesperadas, y la violencia, el crimen y la redención juegan un papel central. La narrativa no lineal y los diálogos memorables definen a este clásico del cine contemporáneo.",
            Duracion: "2h 34min",
            Genero: "Crimen, Drama",
            Puntuacion: "8.9"
        },
        {
                        Titulo: "Forrest Gump",
            Imagen: "https://posters.movieposterdb.com/12_04/1994/109830/l_109830_58524cd6.jpg",
            Sinopsis: "Forrest Gump, un hombre con un coeficiente intelectual por debajo del promedio pero con un corazón puro, relata su vida en una serie de eventos históricos en los que se encuentra por pura casualidad. Desde servir en la Guerra de Vietnam hasta correr a través de los Estados Unidos, pasando por ser un exitoso empresario de camarones, Forrest es testigo de momentos históricos mientras sigue su amor incondicional por Jenny, su amiga de la infancia. La película, llena de momentos conmovedores y humorísticos, ilustra la importancia de la perseverancia y la bondad en un mundo complicado.",
            Duracion: "2h 22min",
            Genero: "Drama, Romance",
            Puntuacion: "8.8"
        },
        {
            Titulo: "The Dark Knight",
            Imagen: "https://posters.movieposterdb.com/08_06/2008/468569/l_468569_fe24b125.jpg",
            Sinopsis: "En Gotham City, el crimen y la corrupción están fuera de control. El Caballero Oscuro, Batman, se enfrenta a su enemigo más peligroso: el Joker, un villano psicópata cuyo único objetivo es sembrar el caos en la ciudad. Mientras Batman trata de proteger a los ciudadanos y hacer justicia, el Joker manipula a los personajes principales, incluido el fiscal de distrito Harvey Dent, y pone en riesgo la moralidad de Gotham. La película explora la lucha entre el orden y el caos, y la delgada línea entre los héroes y los villanos, convirtiéndose en un clásico moderno del cine de superhéroes.",
            Duracion: "2h 32min",
            Genero: "Acción, Crimen, Drama",
            Puntuacion: "9.0"
        },
        {
            Titulo: "The Godfather",
            Imagen: "https://posters.movieposterdb.com/22_07/1972/68646/l_68646_8c811dec.jpg",
            Sinopsis: "La historia de la familia Corleone, una poderosa dinastía criminal en Nueva York, narra la lucha de poder dentro de la familia y su transición en tiempos cambiantes. Don Vito Corleone, el patriarca de la familia, es un hombre respetado pero despiadado en su dominio del crimen organizado. Cuando su salud comienza a declinar, su hijo Michael, inicialmente reacio a involucrarse en los negocios familiares, se ve arrastrado por las circunstancias y se convierte en el nuevo jefe de la familia. La película muestra las complejidades del amor familiar, la lealtad y la traición en el contexto de un mundo violento y moralmente ambiguo.",
            Duracion: "2h 55min",
            Genero: "Crimen, Drama",
            Puntuacion: "9.2"
        },
        {
            Titulo: "Inception",
            Imagen: "https://posters.movieposterdb.com/10_06/2010/1375666/l_1375666_07030c72.jpg",
            Sinopsis: "Dom Cobb es un experto ladrón que roba secretos valiosos de la mente de las personas a través de la tecnología de los sueños compartidos. Este proceso, conocido como ‘extracción’, le permite robar información de los subconscientes de las personas mientras duermen. Cobb se enfrenta a su mayor reto cuando es contratado para realizar una ‘incepción’: implantar una idea en la mente de un individuo sin que este se dé cuenta. A medida que Cobb y su equipo profundizan en los sueños, las fronteras entre la realidad y la fantasía se vuelven cada vez más difusas, y el costo emocional de su misión amenaza con destruirlo todo.",
            Duracion: "2h 28min",
            Genero: "Ciencia Ficción, Acción",
            Puntuacion: "8.8"
        }
    ];

    return (
        <>
            <Header />
            <h2 className="center-text">Peliculas Disponibles</h2>
            <div className="movie-container">
                {movies.map((movie, index) => (
                    <Movie
                        key={index}
                        Titulo={movie.Titulo}
                        Imagen={movie.Imagen}
                        Sinopsis={movie.Sinopsis}
                        Duracion={movie.Duracion}
                        Genero={movie.Genero}
                        Puntuacion={movie.Puntuacion}
                    />
                ))}
            </div>
            <Footer />
        </>
    );
}
