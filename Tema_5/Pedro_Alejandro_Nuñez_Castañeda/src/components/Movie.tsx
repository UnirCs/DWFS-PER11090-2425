import React from 'react'

export interface MovieData {
  titulo:string
  imagen:string
  sinopsis:string
  duracion:number
  genero:string
  puntuacion:number
}
function Movie({movie}:{movie:MovieData}) {
  return (
    <div className="movie__container">
      <p className="movie__titulo">Título: {movie.titulo}</p>
      <div className="movie__sinimg">
        <img className="movie__img" src={movie.imagen} alt="img movie" />
        <div className="movie__attrs">
          <p className="movie__sinopsis">Sinopsis: {movie.sinopsis}</p>
          <p className="movie__genero">Género: {movie.genero}</p>
          <p className="movie__duracion">Duración (h): {movie.duracion}</p>
          <p className="movie__puntuacion">Puntuación: {movie.puntuacion}</p>
        </div>
      </div>
      <button className="movie__button">Seleccionar asientos</button>
    </div>
  )
}

export default Movie