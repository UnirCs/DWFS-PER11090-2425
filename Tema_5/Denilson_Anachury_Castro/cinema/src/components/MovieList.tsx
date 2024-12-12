import { listOfMovies } from '../data'
import Movie from './Movie.tsx'

function MovieList() {

  const movies = listOfMovies()

  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Movie List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {
          movies.map((movie) => (<Movie key={movie.title} {...movie}/>))
        }
      </div>
    </>
  )
}

export default MovieList;
