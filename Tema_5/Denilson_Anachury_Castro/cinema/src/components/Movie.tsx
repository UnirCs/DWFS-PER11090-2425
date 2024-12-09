import { Movie as MovieData } from '../data/movies'

function Movie({ title }: MovieData) {
  return (
    <div className="flex border-2 shadow-2xl">
      {title}
    </div>
  )
}

export default Movie
