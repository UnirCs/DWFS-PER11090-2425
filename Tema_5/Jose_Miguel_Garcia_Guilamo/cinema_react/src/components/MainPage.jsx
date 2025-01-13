import Header from "./Header";
import Footer from "./Footer";
import MovieList from "./MovieList";
import movies from "../data/Movies";

const MainPage = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <div className="flex-grow-1 mb-5">
        <MovieList movies={movies} />
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
