
import Movie from './Movie';

const MovieList = () => {

    const movies = [
        {
            titulo: "El Padrino",
            imagen: "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg",
            sinopsis: "La saga de la familia mafiosa Corleone, que busca proteger su imperio mientras enfrenta lealtades y traiciones.",
            duracion: "175 minutos",
            genero: "Drama, Crimen",
            puntuacion: "9.2"
        },
        {
            titulo: "E.T., el extraterrestre",
            imagen: "https://upload.wikimedia.org/wikipedia/en/6/66/E_t_the_extra_terrestrial_ver3.jpg",
            sinopsis: "Un niño ayuda a un alienígena perdido a regresar a su hogar mientras desarrolla una amistad única.",
            duracion: "115 minutos",
            genero: "Ciencia ficción, Familiar",
            puntuacion: "7.9"
        },
        {
            titulo: "Forrest Gump",
            imagen: "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg",
            sinopsis: "La vida extraordinaria de un hombre con discapacidad cognitiva que se convierte en testigo de eventos históricos.",
            duracion: "142 minutos",
            genero: "Drama, Comedia",
            puntuacion: "8.8"
        },
        {
            titulo: "Matrix",
            imagen: "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg",
            sinopsis: "Un hacker descubre la verdad sobre su realidad y lidera la lucha contra la opresión de las máquinas.",
            duracion: "136 minutos",
            genero: "Ciencia ficción, Acción",
            puntuacion: "8.7"
        },
        {
            titulo: "La vida es bella",
            imagen: "https://posters.movieposterdb.com/08_05/1997/118799/l_118799_26c03c3f.jpg",
            sinopsis: "Un padre usa el humor y la imaginación para proteger a su hijo de los horrores de un campo de concentración.",
            duracion: "116 minutos",
            genero: "Drama, Comedia",
            puntuacion: "8.6"
        },
        {
            titulo: "Los siete samuráis",
            imagen: "data:image/jpeg;base64,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",
            sinopsis: "En el Japón feudal, siete samuráis son contratados para proteger a un pueblo de campesinos de los ataques de bandidos.",
            duracion: "207 minutos",
            genero: "Aventura, Drama, Acción",
            puntuacion: "8.6"
        }
    ];

    return (

        <div className="movie-list">
            {movies.map((movie) => (
                <Movie titulo={movie.titulo} imagen={movie.imagen} sinopsis={movie.sinopsis} duracion={movie.duracion}
                       genero={movie.genero} puntuacion={movie.duracion}/>
            ))}<br/>
        </div>
    );

}
export default MovieList;
