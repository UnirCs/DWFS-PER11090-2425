import React from "react";
import { Movie } from "./Movie";
import './../styles/MovieList.css';

export const MovieList = () => {
    const peliculas = [
        { titulo: "El laberinto del fauno", rutaimg: "assets/fauno.jpg", sinopsis: "En la España de 1944, la joven Ofelia y su madre enferma llegan al lugar en el que se encuentra el nuevo esposo de su madre, un sádico oficial del Ejército que intenta aplastar el levantamiento de una guerrilla. Mientras explora un antiguo laberinto, Ofelia conoce al fauno Pan, quien le dice que ella es una legendaria princesa perdida y debe completar tres peligrosas tareas para obtener la inmortalidad.",duracion:"1h 58m",genero:"Fantasía/Bélico",puntuacion:"8.2/10" },
        { titulo: "El Hombre Araña 3", rutaimg: "assets/spiderman.jpg", sinopsis: "Peter Parker sufre una terrible transformación cuando su traje de Hombre Araña se vuelve negro y libera una personalidad oscura y vengativa.",duracion:"2h 19m",genero:"Acción/Ciencia Ficción",puntuacion:"6.3/10" },
        { titulo: "Terrifier", rutaimg: "assets/terry.jpg", sinopsis: "En la noche de Halloween, tras una fiesta, Tara y Dawn entran en una pizzería. Tras ellas llega un payaso inquietante y grotesco que hiela la sangre a Tara. Las chicas no tardan en descubrir que es un psicópata sádico que pretende matarlas.",duracion:"1h 32m",genero:"Terrror/Slasher",puntuacion:"5.2/10" },
        { titulo: "Proyecto X", rutaimg: "assets/x.jpg", sinopsis: "Tres estudiantes de secundaria deciden organizar una fiesta salvaje en casa de uno de ellos, aprovechando que sus padres no están. Quieren hacer que la fiesta sea inolvidable, así que deciden grabarlo todo. Parece que la fiesta es todo un éxito: todo el mundo está bebiendo y los ánimos están por los aires. Sin embargo, una serie de complicaciones imprevistas harán que la fiesta se descontrole.",duracion:"1h 28m",genero:"Comedia/Crimen",puntuacion:"6.7/10" },
        { titulo: "Step Up: El año del baile", rutaimg: "assets/step.jpg", sinopsis: "Jóvenes de diferentes clases sociales en China aprenden lo que significa ser una familia cuando se unen para formar un equipo de baile.",duracion:"1h 40m",genero:"Música/Drama",puntuacion:"3.7/10" },
        { titulo: "A tus espaldas", rutaimg: "assets/espalda.jpg", sinopsis: "Un acomplejado empleado de banco busca esconder sus orígenes humildes y su realidad racial por medio del dinero, poder y aceptación de la clase media.",duracion:"1h 16m",genero:"Comedia/Drama",puntuacion:"4.8/10" }
    ];

    return (
        <div className="movie-grid">
            {peliculas.map((pelicula, index) => (
                <Movie
                    key={index}
                    indice={index + 1}
                    titulo={pelicula.titulo}
                    rutaimg={pelicula.rutaimg}
                    sinopsis={pelicula.sinopsis}
                    duracion={pelicula.duracion}
                    genero={pelicula.genero}
                    puntuacion={pelicula.puntuacion}
                />
            ))}
        </div>
    );
    
}