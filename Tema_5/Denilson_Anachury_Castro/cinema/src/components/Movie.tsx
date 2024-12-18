import { Movie as MovieData } from '../data/movies'

function Movie(movie: MovieData) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <img
        src={movie.image}
        alt={movie.title}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="mt-4">
        <h2 className="text-lg font-semibold">{movie.title}</h2>
        <p className="text-sm text-gray-600 mt-2">{movie.synopsis}</p>
        <div className="flex items-center justify-between mt-4">
                <span className="text-sm font-medium text-gray-700">
                  {movie.genre}
                </span>
          <span className="text-sm font-bold text-blue-500">
                  ⭐ {movie.score}
                </span>
        </div>
        <p className="text-sm text-gray-500 mt-2">
          Duration: {movie.duration} mins
        </p>
      </div>
    </div>
  )
}

export default Movie
