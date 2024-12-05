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
  },
  {
    titulo: 'Pelicula 5',
    imagen: process.env.PUBLIC_URL + '/smile2.jpg',
    sinopsis: 'Sinopsis de la pelicula 5',
    duracion: '150 min',
    genero: 'Romance',
    puntuacion: '8.5'
  },
  {
    titulo: 'Pelicula 6',
    imagen: process.env.PUBLIC_URL + '/smile2.jpg',
    sinopsis: 'Sinopsis de la pelicula 6',
    duracion: '160 min',
    genero: 'Acción',
    puntuacion: '7.5'
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
