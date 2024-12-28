import "./MovieList.css";

import { Movie } from "@/components/Movie/Movie";

export const MovieList = ({ title = "", movies = "" }) => {
  return (
    <div className="movie-list">
      {title ? <h2>{title}</h2> : null}
      <div className="movies-wrapper">
        {movies.map((movie) => (
          <Movie key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
};
