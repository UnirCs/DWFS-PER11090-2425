import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { MovieList } from "./views/MovieList";
import { Header } from './components/Header';
import { Footer } from './components/Footer';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header/>
    <MovieList />
    <Footer/>
  </React.StrictMode>
);
