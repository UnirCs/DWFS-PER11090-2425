import React from "react";
import { useMockFetch } from "../../hooks/useMockFetch";
import Movie from "../Movie/Movie";
import "./Movies.css";

const Movies: React.FC = () => {
  const { data: movies, loading, error } = useMockFetch();

  if (loading) {
    return (
      <div className="loader">
        <p>Cargando películas...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="loader">
        {" "}
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "1rem",
        //max 3 movies per row
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {movies.map((movie) => (
        <Movie key={movie.id} {...movie} />
      ))}
    </div>
  );
};

export default Movies;
