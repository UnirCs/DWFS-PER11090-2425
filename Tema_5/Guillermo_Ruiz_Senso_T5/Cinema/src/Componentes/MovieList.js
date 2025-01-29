import React from 'react';
import Movie from './Movie';

function MovieList() {
  const movies = [
    {
      id: 1,
      title: 'Origen',
      image: 'https://www.mubis.es/media/covers/1029/1006/origen-inception-portada-l_cover.jpg',
      synopsis: 'Un ladrón que roba secretos corporativos usando la tecnología del sueño.',
      duration: '148 minutos',
      genre: 'Ciencia ficción',
      rating: '8.8'
    },
    {
      id: 2,
      title: 'El caballero oscuro',
      image: 'https://www.mubis.es/media/releases/5861/76390/el-caballero-oscuro-edicion-exclusiva-blu-ray-l_cover.jpg',
      synopsis: 'Batman enfrenta al Joker, un criminal astuto y caótico.',
      duration: '152 minutos',
      genre: 'Acción',
      rating: '9'
    },
    {
      id: 3,
      title: 'Interstellar',
      image: 'https://m.media-amazon.com/images/S/pv-target-images/79194981293eabf6620ece96eb5a9c1fffa04d3374ae12986e0748800b37b9cf.jpg', 
      synopsis: 'Exploradores viajan a través de un agujero de gusano en el espacio.',
      duration: '169 minutos',
      genre: 'Ciencia ficción',
      rating: '8.6'
    },
    {
      id: 4,
      title: 'Harry Potter y la Piedra Filosofal',
      image: 'https://pics.filmaffinity.com/Harry_Potter_y_la_piedra_filosofal-272216629-large.jpg',
      synopsis: 'Un niño huérfano descubre que es un mago y es enviado a la escuela de magia Hogwarts, donde hace amigos y aprende a dominar sus poderes.',
      duration: '159 minutos',
      genre: 'Fantasía',
      rating: '8.5'
    },
    {
      id: 5,
      title: 'Orgullo y Prejuicio',
      image: 'https://pictures.abebooks.com/isbn/9788466319652-es.jpg',
      synopsis: 'Una joven de la Inglaterra rural se enfrenta a las convenciones sociales y a los prejuicios de clase mientras busca el amor y la independencia.',
      duration: '129 minutos',
      genre: 'Romance',
      rating: '7.8'
    },
      {
      id: 6,
      title: 'Cien años de soledad',
      image: 'https://pics.filmaffinity.com/Cien_aanos_de_soledad_Serie_de_TV-606630216-large.jpg',
      synopsis: 'La historia de la familia Buendía y la fundación del pueblo de Macondo, contada a lo largo de varias generaciones con elementos de realismo mágico.',
      duration: 'Adaptación no disponible',
      genre: 'Realismo mágico',
      rating: '9.5'
    },
    {
      id: 7,
      title: 'Matar a un ruiseñor',
      image: 'https://play-lh.googleusercontent.com/9MKBL_30YZOhjr1abgSmwfxxr-niZmccM8Ja1ABYHOww65Eez-3jRZbHk8hzoXxMC1ax',
      synopsis: 'Un abogado de Alabama defiende a un hombre negro acusado injustamente de un crimen, mientras su hija Scout aprende valiosas lecciones sobre la justicia y la tolerancia.',
      duration: '129 minutos',
      genre: 'Drama',
      rating: '8.9'
    }
  ];

  return (
    <div className="content">
      <div className="List_Movie">
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieList;