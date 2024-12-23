import React from 'react';
import ReactDOM from 'react-dom/client';
import { MovieList } from './views/MovieList';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MovieList />
  </React.StrictMode>
);

