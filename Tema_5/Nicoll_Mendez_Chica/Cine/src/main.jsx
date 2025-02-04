import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router";
import MovieInfo from "./components/Movie/movieinfo.jsx"
import MoviePrint from './components/Movie/movieprint.jsx';

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Pelicula/:index",
    element: <MoviePrint />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={Router} />
  </StrictMode>,
)
