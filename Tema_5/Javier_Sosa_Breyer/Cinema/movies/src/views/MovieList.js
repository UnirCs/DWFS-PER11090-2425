import React from "react";
import {Header} from "../components/Header";
import {Movie} from "../components/Movie";
import {Footer} from "../components/Footer";

export const MovieList = () => {
    const movies = [
        {
            title: "Tenet",
            synopsis: "Armado con tan solo una palabra –Tenet– el protagonista de esta historia deberá pelear por la supervivencia del mundo entero en una misión que le lleva a viajar a través del oscuro mundo del espionaje internacional, y cuya experiencia se desdoblará más allá del tiempo lineal.",
            genre: "Acción",
            duration: "150 min.",
            score: "7.3",
            thumbnail: "/imgs/tenet-432994986-large.jpg"
        }, {
            title: "El Padrino",
            synopsis: "América, años 40. Don Vito Corleone es el respetado y temido jefe de una de las cinco familias de la mafia de Nueva York. Cuando Corleone, en contra de los consejos de 'Il consigliere' Tom Hagen, se niega a participar en el negocio de las drogas, el jefe de otra banda ordena su asesinato. Empieza entonces una violenta y cruenta guerra entre las familias mafiosas.",
            genre: "Drama",
            duration: "175 min.",
            score: "9.2",
            thumbnail: "/imgs/the_godfather-488102675-large.jpg"
        }, {
            title: "2001: Una odisea del espacio",
            synopsis: "Durante una misión de la NASA, HAL 9000, una máquina dotada de inteligencia artificial, se encarga de controlar todos los sistemas de una nave espacial tripulada.",
            genre: "Ciencia ficción",
            duration: "139 min.",
            score: "8.3",
            thumbnail: "/imgs/2001_a_space_odyssey-322989452-large.jpg"
        }, {
            title: "300",
            synopsis: "El objetivo de Jerjes, emperador de Persia, era la conquista de Grecia, lo que desencadenó las Guerras Médicas. Dada la gravedad de la situación, el rey Leónidas de Esparta y 300 espartanos se enfrentaron a un ejército persa que era inmensamente superior.",
            genre: "Acción",
            duration: "117 min.",
            score: "7.6",
            thumbnail: "/imgs/300-177205452-large.jpg"
        }, {
            title: "Interstellar",
            synopsis: "Al ver que la vida en la Tierra está llegando a su fin, un grupo de exploradores dirigidos por el piloto Cooper y la científica Amelia emprende una misión que puede ser la más importante de la historia de la humanidad: viajar más allá de nuestra galaxia para descubrir algún planeta en otra que pueda garantizar el futuro de la raza humana.",
            genre: "Ciencia ficción",
            duration: "169 min.",
            score: "8.7",
            thumbnail: "/imgs/interstellar-366875261-large.jpg"
        }, {
            title: "El señor de los anillos: La comunidad del anillo",
            synopsis: "En la Tierra Media, el Señor Oscuro Sauron forjó el Anillo Único, que tiene el poder de esclavizar toda la Tierra Media. Con la ayuda de sus amigos y de valientes aliados, el joven hobbit Frodo emprende un peligroso viaje con la misión de destruir el Anillo Único.",
            genre: "Fantástico",
            duration: "180 min.",
            score: "8.9",
            thumbnail: "/imgs/the_lord_of_the_rings_the_fellowship_of_the_ring-952398002-large.jpg"
        }, {
            title: "La guerra de las galaxias: El imperio contraataca",
            synopsis: "Tras un ataque sorpresa de las tropas imperiales a las bases camufladas de la alianza rebelde, Luke Skywalker parte hacia el planeta Dagobah en busca de Yoda, el último maestro Jedi, para que le enseñe los secretos de la Fuerza.",
            genre: "Ciencia ficción",
            duration: "124 min.",
            score: "8.7",
            thumbnail: "/imgs/star_wars_episode_v_the_empire_strikes_back-701818523-large.jpg"
        }, {
            title: "El caballero oscuro",
            synopsis: "Con la ayuda del teniente Jim Gordon y del Fiscal del Distrito Harvey Dent, Batman se propone destruir el crimen organizado en la ciudad de Gotham. El triunvirato demuestra su eficacia, pero, de repente, aparece Joker, un nuevo criminal que desencadena el caos y tiene aterrados a los ciudadanos.",
            genre: "Acción",
            duration: "152 min.",
            score: "9.0",
            thumbnail: "/imgs/the_dark_knight-102763119-large.jpg"
        }, {
            title: "El club de la lucha",
            synopsis: "Un joven hastiado de su gris y monótona vida lucha contra el insomnio. En un viaje en avión conoce a un carismático vendedor de jabón que sostiene una teoría muy particular: el perfeccionismo es cosa de gentes débiles; sólo la autodestrucción hace que la vida merezca la pena. Ambos deciden entonces fundar un club secreto de lucha, donde poder descargar sus frustaciones y su ira, que tendrá un éxito arrollador.",
            genre: "Suspense",
            duration: "139 min.",
            score: "8.8",
            thumbnail: "/imgs/fight_club-320750671-large.jpg"
        },
    ];

    const movieList =  movies.map((movie, index)=>
        <div key={index} className="col">
            <Movie movie={movie}/>
        </div>
    );

    return (
        <>
            <Header/>
            <main>
                <section className="py-5 text-center container">
                    <div className="row py-lg-5">
                        <div className="col-lg-6 col-md-8 mx-auto">
                            <h1 className="fw-light text-warning">Cartelera</h1>
                        </div>
                    </div>
                </section>
                <div className="album py-5 bg-body-tertiary">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-md-3 mb-3 g-3">
                            {movieList}
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    );
}
