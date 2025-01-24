import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MovieList from "./components/MovieList";

const Movies = () => {
  return (
    <div>
      <Header />
      <MovieList />
      <Footer />
    </div>
  );
};

export default Movies;
