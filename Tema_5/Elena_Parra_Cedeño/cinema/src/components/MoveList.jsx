import React from "react";
import Movie from "./Movie";


function MoveList() {

    const moviesTotal = [
        {
            "titulo": "The Godfather",
            "imagen": "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg",
            "sinopsis": "The saga of the Corleone family, a powerful Mafia dynasty in 1940s New York.",
            "duracion": "175 min",
            "genero": "Drama, Crime",
            "puntuacion": "9.2"
        },
        {
            "titulo": "Schindler's List",
            "imagen": "https://upload.wikimedia.org/wikipedia/en/3/38/Schindler%27s_List_movie.jpg",
            "sinopsis": "The story of Oskar Schindler, who saved over a thousand Jews during the Holocaust.",
            "duracion": "195 min",
            "genero": "Biography, Drama, History",
            "puntuacion": "9.0"
        },
        {
            "titulo": "Pulp Fiction",
            "imagen": "https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg",
            "sinopsis": "Interwoven stories of crime and redemption in Los Angeles.",
            "duracion": "154 min",
            "genero": "Crime, Drama",
            "puntuacion": "8.9"
        },
        {
            "titulo": "The Dark Knight",
            "imagen": "https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg",
            "sinopsis": "Batman faces the Joker, a criminal who plunges Gotham into chaos.",
            "duracion": "152 min",
            "genero": "Action, Crime, Drama",
            "puntuacion": "9.0"
        },
        {
            "titulo": "Forrest Gump",
            "imagen": "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg",
            "sinopsis": "The life of Forrest Gump, a man with low IQ, witnessing historical events.",
            "duracion": "142 min",
            "genero": "Drama, Romance",
            "puntuacion": "8.8"
        },
        {
            "titulo": "Fight Club",
            "imagen": "https://upload.wikimedia.org/wikipedia/en/f/fc/Fight_Club_poster.jpg",
            "sinopsis": "A man creates an underground fight club as a way to release frustration.",
            "duracion": "139 min",
            "genero": "Drama",
            "puntuacion": "8.8"
        }, {
            "titulo": "Inception",
            "imagen": "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
            "sinopsis": "A thief who steals corporate secrets through dream-sharing technology is given the task of planting an idea into the mind of a CEO.",
            "duracion": "148 min",
            "genero": "Action, Adventure, Sci-Fi",
            "puntuacion": "8.8"
        },
        {
            "titulo": "The Matrix",
            "imagen": "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg",
            "sinopsis": "A computer hacker learns about the true nature of reality and his role in the war against its controllers.",
            "duracion": "136 min",
            "genero": "Action, Sci-Fi",
            "puntuacion": "8.7"
        },
        {
            "titulo": "The Lord of the Rings: The Return of the King",
            "imagen": "https://upload.wikimedia.org/wikipedia/en/4/48/Lord_Rings_Return_King.jpg",
            "sinopsis": "Gandalf and Aragorn lead the world of men against Sauron's army, while Frodo and Sam approach Mount Doom.",
            "duracion": "201 min",
            "genero": "Action, Adventure, Drama",
            "puntuacion": "9.0"
        },
        {
            "titulo": "Interstellar",
            "imagen": "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
            "sinopsis": "A team of explorers travel through a wormhole in space to ensure humanity's survival.",
            "duracion": "169 min",
            "genero": "Adventure, Drama, Sci-Fi",
            "puntuacion": "8.6"
        }
    ];

    let movies = dividirLista(moviesTotal, 5);
    console.log(movies);

    return (
        <div className='movie-list'>
            {movies.map((categoryData, index) => (
                <div className="row" id={index}>
                    {categoryData.map((item) => (
                        <Movie titulo={item.titulo} imagen={item.imagen} sinopsis={item.sinopsis}
                                      duracion={item.duracion} genero={item.genero} puntuacion={item.puntuacion}/>
            ))}
                </div>
            ))}
        </div>
    );
}

function dividirLista(lista, tamanioSublista) {
    let sublistas = [];
    for (let i = 0; i < lista.length; i += tamanioSublista) {
        sublistas.push(lista.slice(i, i + tamanioSublista));
    }
    return sublistas;
}

export default MoveList;