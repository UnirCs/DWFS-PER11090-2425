import { listOfMovies } from '../data'
import Movie from './Movie.tsx'

function MovieList() {

  const movies = listOfMovies()

  return (
    <article className="grid gap-6 md:grid-cols-2">
      {
        movies.map((movie) => (<Movie key={movie.title} {...movie}/>))
      }
    </article>
  )
}

export default MovieList;
