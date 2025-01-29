import React from 'react'
import Movie, { MovieData } from './Movie'

function MovieList() {
  const movieList: MovieData[] = [
    {
      "titulo": "La La Land",
      "imagen": "/movies_img/m3.jpeg",
      "sinopsis": "Un pianista de jazz y una aspirante a actriz se enamoran en Los Ángeles, mientras persiguen sus sueños.",
      "duracion": 128,
      "genero": "Musical, Romance",
      "puntuacion": 8.1
    },
    {
      "titulo": "Interstellar",
      "imagen": "/movies_img/m4.jpeg",
      "sinopsis": "Un grupo de exploradores viaja a través de un agujero de gusano para encontrar un nuevo hogar para la humanidad.",
      "duracion": 169,
      "genero": "Ciencia ficción",
      "puntuacion": 8.6
    },
    {
      "titulo": "El Señor de los Anillos: La Comunidad del Anillo",
      "imagen": "/movies_img/m5.jpeg",
      "sinopsis": "Un hobbit se embarca en una peligrosa misión para destruir el Anillo Único y salvar la Tierra Media.",
      "duracion": 201,
      "genero": "Fantasía, Aventura",
      "puntuacion": 8.8
    },
    {
      "titulo": "Parasite",
      "imagen": "/movies_img/m6.jpeg",
      "sinopsis": "Una familia pobre se infiltra en la vida de una rica familia, exponiendo las desigualdades sociales.",
      "duracion": 132,
      "genero": "Drama, Thriller",
      "puntuacion": 8.6,
    },
    {
      "titulo": "Inception",
      "imagen": "/movies_img/m7.jpeg",
      "sinopsis": "Un ladrón especializado en el robo de secretos corporativos ingresa al subconsciente de sus objetivos.",
      "duracion": 148,
      "genero": "Ciencia ficción, Acción",
      "puntuacion": 8.8
    },
    {
      "titulo": "Oppenheimer",
      "imagen": "/movies_img/m1.jpeg",
      "sinopsis": "Un científico realiza el proyecto más importante.",
      "duracion": 148,
      "genero": "Ciencia ficción, Acción",
      "puntuacion": 8.8
    },
    {
      "titulo": "Niezche, Ecche Homo",
      "imagen": "/movies_img/m2.jpeg",
      "sinopsis": "El filósofo del martillo muestra su vida y su sufrimiento.",
      "duracion": 148,
      "genero": "Filosofía, relatos de la vida",
      "puntuacion": 8.8
    }
  ]
  return (
    <div>
      <h1 className="movielist__title">Movie List</h1>
      <div className="movielist__list">
        {movieList.map((movie:MovieData,i:number)=>{
          return <div key={i}>
            <Movie movie={movie} />
          </div>
        })}
      </div>
    </div>
  )
}

export default MovieList