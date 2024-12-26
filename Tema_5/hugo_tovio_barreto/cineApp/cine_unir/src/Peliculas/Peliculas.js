// src/movies.js
import React from 'react';
import Header from '../Header/Header';
import ListaPelis from '../ListaPelis/ListaPelis';
import Footer from '../Footer/Footer';

function Movies() {
  return (
    <div>
      <Header state={false} />
      <ListaPelis />
      <Footer />
    </div>
  );
}

export default Movies;
