import React from "react";
import Header from "./Componentes/Header";
import Footer from "./Componentes/Footer";
import MovieList from "./Componentes/MovieList";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Header />
      <MovieList />
      <Footer />
    </div>
  );
};


export default App;