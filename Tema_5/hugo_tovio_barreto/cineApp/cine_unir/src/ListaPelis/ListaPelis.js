
import React from 'react';
import Pelicula from '../Pelicula/Pelicula';
import './ListaPelis.css';



function MovieList() {

  const peliculas = [
    {
      id: 1,
      titulo: 'VIKINGOS',
      imagen: 'https://media.themoviedb.org/t/p/w220_and_h330_face/87goLbbqrJqAxqDS5cBsik1zKT.jpg',
      sinopsis: 'La continuación épica de la historia de Pandora, con nuevos mundos y aventuras.',
      duracion: '3h 12m',
      genero: 'Ciencia Ficción',
      puntuacion: '8.5/10',
    },
    {
      id: 2,
      titulo: 'VENON',
      imagen: 'https://media.themoviedb.org/t/p/w220_and_h330_face/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg',
      sinopsis: 'La historia de J. Robert Oppenheimer y la creación de la bomba atómica.',
      duracion: '2h 30m',
      genero: 'Drama Histórico',
      puntuacion: '9/10',
    },
    {
      id: 3,
      titulo: 'LIONESS',
      imagen: 'https://media.themoviedb.org/t/p/w220_and_h330_face/ajaXSmdAlYYhnvx1EIsvpfN949y.jpg',
      sinopsis: 'Spider-Man enfrenta las consecuencias de su identidad revelada mientras lucha contra nuevos villanos.',
      duracion: '2h 28m',
      genero: 'Acción, Aventura',
      puntuacion: '8.7/10',
    },
  ];

  return (
    <div className="movie-list">
      {peliculas.map((pelicula) => (
        
        <Pelicula key={pelicula.id} pelicula={pelicula} />
      ))}
    </div>
  );
}

export default MovieList;
