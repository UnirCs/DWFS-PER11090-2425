import React from 'react'; 
import Header from './components/Header';
import Footer from './components/Footer';
import MovieList from './data/MovieList';
import './components/movies.css';

const App = () => (
  <div className="movies-container">
    <Header />
    <main className="main-content">
      < MovieList />
    </main>
    <Footer />
  </div>
);

export default App;
