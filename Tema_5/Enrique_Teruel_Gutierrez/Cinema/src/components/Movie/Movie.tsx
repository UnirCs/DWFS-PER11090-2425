import React from "react";
import type { Movie } from "../../models";
import { Link, useNavigate } from "react-router-dom";
import "./Movie.css";

const Movie: React.FC<Movie> = ({ title, image, id }) => {
  const navigate = useNavigate();
  return (
    <div onClick={()=> navigate(`/movie/${id}`)} className="movie" style={{ backgroundImage: `url(${image})` }}>
      <div className="movie__content">
        <h2 className="movie__title">{title}</h2>
        <Link to={`/movie/${id}`}>
          <p className="movie__button">Ver más</p>
        </Link>
      </div>
    </div>
  );
};

export default Movie;
