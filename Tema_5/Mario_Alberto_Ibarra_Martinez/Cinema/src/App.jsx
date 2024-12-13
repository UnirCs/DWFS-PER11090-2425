import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import MovieList from "./components/MovieList";

import movies from "./data/movies";



function App() {
  return (
    <>
      <Header />
        <MovieList title="Películas Clásicas" movies={movies} />
      <Footer />
    </>
  );
}

export default App;
