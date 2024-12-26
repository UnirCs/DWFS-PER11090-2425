import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Landing } from '../views/Landing';
import { NotFound } from '../views/NotFound';
import { MovieDetail } from '../views/MovieDetail';
import { MovieList } from '../components/MovieList';
import '../styles/styles.css'; 
 
function GlobalRouter() {
  return (
    <BrowserRouter>
      <div>
        <aside>
          <MovieList />
        </aside>
        <main>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default GlobalRouter;





{/*import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Header} from '../components/Header';
import {Footer} from '../components/Footer';
import {Landing} from '../views/Landing';
import {NotFound} from '../views/NotFound';

function GlobalRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </BrowserRouter>
    );
}


const Layout = ({children}) => (
  <>
    {Header}
    {children}
    {Footer}
  </>
);


export default GlobalRouter;
*/}