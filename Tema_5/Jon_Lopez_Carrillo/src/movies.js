import React from 'react';
import { MovieList } from './components/MovieList';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import './App.css';


export const movies = [
  {
      titulo: 'Pelicula 1',
      imagen: process.env.PUBLIC_URL + '/smile2.jpg',
      sinopsis: 'Sinopsis de la pelicula 1',
      duracion: '120 min',
      genero: 'Acción',
      puntuacion: '8.5'
  },
  {
      titulo: 'Pelicula 2',
      imagen: process.env.PUBLIC_URL + '/smile2.jpg',
      sinopsis: 'Sinopsis de la pelicula 2',
      duracion: '110 min',
      genero: 'Comedia',
      puntuacion: '7.8'
  },
  {
      titulo: 'Pelicula 3',
      imagen: process.env.PUBLIC_URL + '/smile2.jpg',
      sinopsis: 'Sinopsis de la pelicula 3',
      duracion: '130 min',
      genero: 'Terror',
      puntuacion: '9.0'
  },
  {
    titulo: 'Pelicula 4',
    imagen: process.env.PUBLIC_URL + '/smile2.jpg',
    sinopsis: 'Sinopsis de la pelicula 4',
    duracion: '140 min',
    genero: 'Drama',
    puntuacion: '8.0'
  }
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main className="App-content">
        <MovieList movieArray={movies} />
      </main>
      <footer className="App-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
