import React from 'react'
import Header from '../components/HeaderComponent';
import Footer from '../components/FooterComponent';
import MovieList from '../components/MovieList';
import { PELICULAS } from '../shared/peliculas';


const movies = () => {
  return (
    <div>
      <Header />
      <h2 className="text-center">Películas</h2>
      <div className="container">
        <div className="row">
          {PELICULAS.map((pelicula, index) => (
            <div className="col-4 mb-4">
              <MovieList
                key={index}
                titulo={pelicula.titulo}
                imagen={pelicula.imagen}
                sinopsis={pelicula.sinopsis}
                duracion={pelicula.duracion}
                genero={pelicula.genero}
                puntuacion={pelicula.puntuacion}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default movies
