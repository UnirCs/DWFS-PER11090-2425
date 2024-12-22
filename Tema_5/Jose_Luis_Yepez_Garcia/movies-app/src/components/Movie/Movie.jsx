import { useState } from "react"
import "./Movie.css"

export const Movie = ({ movie }) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="movie">
      <div className="movie__img__container" onClick={() => alert('comming soon')}>
        {!loaded &&
          <img
            className="movie__placeholder__img"
            src="/placeholder_600x.webp"
            alt="placeholder"
          />}
        <img
          className="movie__img"
          src={movie.image}
          alt={movie.title}
          onLoad={() => setLoaded(true)}
        />
      </div>
      <div className="movie__info">
        <h3 className="movie__title">{movie.title}</h3>
        <p className="movie__year__rate">
          {movie.year}
          <span className="movie__rate">
            {movie.rate}⭐
          </span>
        </p>
        <p>{movie.director}</p>
        <p>{movie.duration}</p>
        <p>{movie.genre.join(", ")}</p>
        <h4>Sinopsis</h4>
        <p>{movie.sinopsis}</p>
      </div>
    </div>
  )
}
