import React from "react";
import {Header} from "../components/Header";
import {Movie} from "../components/Movie";
import '../styles/styles.css'
import {Footer} from "../components/Footer";

export const MoviesList = () => {
    const movies=[
        {titulo:"Interstellar", imagen:"https://m.media-amazon.com/images/I/71QQ6dE72sL._AC_UF894,1000_QL80_.jpg",
            sinopsis:"Un grupo de científicos y exploradores, encabezados por Cooper, se embarcan en un viaje espacial para encontrar un lugar con las condiciones necesarias para reemplazar a la Tierra y comenzar una nueva vida allí. La Tierra está llegando a su fin y este grupo necesita encontrar un planeta más allá de nuestra galaxia que garantice el futuro de la raza humana.",
            duracion:"2h 49m", genero:"Ciencia ficción/Aventura", puntuacion:"9"},
        {titulo:"Malditos bastardos", imagen:"https://www.aceprensa.com/wp-content/uploads/2009/09/16869-0.jpg",
            sinopsis:"II Guerra Mundial, Francia, Shosanna presencia la ejecución de su familia por orden del coronel nazi Hans Landa. Huye a Paris y adopta una nueva identidad como propietaria de un cine. Mientras el teniente Aldo Raine adiestra a un grupo de soldados judíos. Los hombres de Raine y una actriz alemana que agente doble, deben llevar a cabo una misión que hará caer a los jefes del Tercer Reich. El destino quiere que todos se encuentren bajo la marquesina de un cine donde Shosanna espera para vengarse.",
            duracion:"2h 33m", genero:"Bélico/Acción", puntuacion:"8,8"},
        {titulo:"Shutter Island", imagen:"https://pics.filmaffinity.com/Shutter_Island-814462452-large.jpg",
            sinopsis:"Verano de 1954. Los agentes judiciales Teddy Daniels y Chuck Aule son enviados a una remota isla del puerto de Boston para investigar la desaparición de una peligrosa asesina recluida en el hospital psiquiátrico Ashecliffe, un centro penitenciario para criminales perturbados dirigido por el siniestro doctor John Cawley. Pronto descubrirán que el centro guarda muchos secretos y que la isla esconde algo más peligroso que los pacientes.",
            duracion:"2h 18m", genero:"Terror/Misterio", puntuacion:"9"},
        {titulo:"Avengers: Endgame", imagen:"https://pics.filmaffinity.com/Vengadores_Endgame-135478227-large.jpg",
            sinopsis:"Después de los eventos devastadores de \"Avengers: Infinity War\", el universo está en ruinas debido a las acciones de Thanos, el Titán Loco. Con la ayuda de los aliados que quedaron, los Vengadores deberán reunirse una vez más para intentar detenerlo y restaurar el orden en el universo de una vez por todas.",
            duracion:"3h", genero:"Acción/Ciencia ficción", puntuacion:"7,8"},

    ];

    return (
        <div>
            <Header />
            <div className="div-cards">
                {movies.map((movie, index)=>(
                    <Movie movie={movie} />
                ))}
            </div>
            <Footer />
        </div>
    );
}