import React from 'react';
import './App.css';
import { Header } from './components/Header';
import MovieList from './components/MovieList';
import { Footer } from './components/Footer';
import peliculas from './mocks/mocks';

function App() {
  return (
   <>
   <Header/>
      <MovieList movies={peliculas}/>
   <Footer/>
   </>
  );
}

export default App;
