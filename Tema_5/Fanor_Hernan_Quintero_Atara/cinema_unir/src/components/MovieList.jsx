import React from 'react';
import Movie from './Movie';
import '../styles/MovieList.css';

export default () => {
    const movies = [
        {
            "title": "The Godfather",
            "cover": "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg",
            "synopsis": "The saga of the Corleone family, a powerful Mafia dynasty in 1940s New York.",
            "duration": "175 min",
            "genre": "Drama, Crime",
            "rating": "9.2"
        },
        {
            "title": "Schindler's List",
            "cover": "https://upload.wikimedia.org/wikipedia/en/3/38/Schindler%27s_List_movie.jpg",
            "synopsis": "The story of Oskar Schindler, who saved over a thousand Jews during the Holocaust.",
            "duration": "195 min",
            "genre": "Biography, Drama, History",
            "rating": "9.0"
        },
        {
            "title": "Pulp Fiction",
            "cover": "https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg",
            "synopsis": "Interwoven stories of crime and redemption in Los Angeles.",
            "duration": "154 min",
            "genre": "Crime, Drama",
            "rating": "8.9"
        },
        {
            "title": "The Dark Knight",
            "cover": "https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg",
            "synopsis": "Batman faces the Joker, a criminal who plunges Gotham into chaos.",
            "duration": "152 min",
            "genre": "Action, Crime, Drama",
            "rating": "9.0"
        },
        {
            "title": "Forrest Gump",
            "cover": "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg",
            "synopsis": "The life of Forrest Gump, a man with low IQ, witnessing historical events.",
            "duration": "142 min",
            "genre": "Drama, Romance",
            "rating": "8.8"
        },
        {
            "title": "Fight Club",
            "cover": "https://upload.wikimedia.org/wikipedia/en/f/fc/Fight_Club_poster.jpg",
            "synopsis": "A man creates an underground fight club as a way to release frustration.",
            "duration": "139 min",
            "genre": "Drama",
            "rating": "8.8"
        }, {
            "title": "Inception",
            "cover": "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
            "synopsis": "A thief who steals corporate secrets through dream-sharing technology is given the task of planting an idea into the mind of a CEO.",
            "duration": "148 min",
            "genre": "Action, Adventure, Sci-Fi",
            "rating": "8.8"
        },
        {
            "title": "The Matrix",
            "cover": "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg",
            "synopsis": "A computer hacker learns about the true nature of reality and his role in the war against its controllers.",
            "duration": "136 min",
            "genre": "Action, Sci-Fi",
            "rating": "8.7"
        },
        {
            "title": "The Lord of the Rings: The Return of the King",
            "cover": "https://upload.wikimedia.org/wikipedia/en/4/48/Lord_Rings_Return_King.jpg",
            "synopsis": "Gandalf and Aragorn lead the world of men against Sauron's army, while Frodo and Sam approach Mount Doom.",
            "duration": "201 min",
            "genre": "Action, Adventure, Drama",
            "rating": "9.0"
        },
        {
            "title": "Interstellar",
            "cover": "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
            "synopsis": "A team of explorers travel through a wormhole in space to ensure humanity's survival.",
            "duration": "169 min",
            "genre": "Adventure, Drama, Sci-Fi",
            "rating": "8.6"
        }
    ];

    return (
        <div className='movie-list'>
            {movies.map((movie) => (
                <Movie
                    title={movie.title}
                    cover={movie.cover}
                    synopsis={movie.synopsis}
                    duration={movie.duration}
                    genre={movie.genre}
                    rating={movie.rating} />
            ))}
        </div>
    );
};