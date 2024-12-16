import React from 'react';
import Movie from '../components/Movie'; 
import gladiator from './gladiator.jpg';
import torrente from './Torrente.jpg';
import vidaBella from './vidaBella.jpg';
import terminator from './terminator.jpg';
import anillos from './anillos.jpg';
import mortadelo from './mortadelo.jpg';


const MovieList = () => {
  const movies = [
    {
      title: 'Torrente',
      image: torrente,
      synopsis: 'Torrente es un policía español, racista, alcohólico y del Atleti. Tiene un vecino llamado Rafi, al que le gustan las peliculas de acción y las pistolas. Juntos intentarán luchar contra el crimen.',
      duration: 148,
      genre: 'Comedia',
      rating: 8.8,
    },
    {
      title: 'Gladiator',
      image: gladiator,
      synopsis: 'El general romano Máximo Décimo Meridio es traicionado por Cómodo, el ambicioso hijo del emperador. Forzado a convertirse en esclavo, renace como gladiador.',
      duration: 152,
      genre: 'Acción',
      rating: 9.0,
    },
    {
      title: 'La vida es bella',
      image: vidaBella,
      synopsis: 'En 1939, a punto de estallar la Segunda Guerra Mundial, el extravagante Guido llega a Arezzo, en la Toscana, con la intención de abrir una librería.',
      duration: 169,
      genre: 'Drama',
      rating: 8.6,
    },
    {
        title: 'terminator',
        image: terminator,
        synopsis: 'Es un robot asesino del futuro que viaja al pasado para matar a Sarah Connor, la madre de John Connor, el líder de la resistencia humana en el futuro.',
        duration: 145,
        genre: 'Acción',
        rating: 9.0,
      },
      {
        title: 'El señor de los anillos',
        image: anillos,
        synopsis: 'En la Tierra Media, el Señor Oscuro Saurón creó los Grandes Anillos de Poder, forjados por los herreros Elfos. Tres para los reyes Elfos, siete para los Señores Enanos, y nueve para los Hombres Mortales.',
        duration: 201,
        genre: 'Fantasía',
        rating: 9.2,
      },
      {
        title: 'Mortadelo y Filemón',
        image: mortadelo,
        synopsis: 'Mortadelo y Filemón son dos agentes de la TIA, una agencia de espionaje supersecreta. Mortadelo es alto, delgado, con bigote y lleva un sombrero de bombín. Filemón es bajo, regordete, con bigote y lleva un sombrero de copa.',
        duration: 88,
        genre: 'Comedia',
        rating: 8.0,
      },
  ];

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <Movie {...movie} />
      ))}
    </div>
  );
};

export default MovieList;
