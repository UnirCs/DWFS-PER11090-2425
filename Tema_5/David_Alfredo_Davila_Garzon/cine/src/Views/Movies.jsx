import {Header} from "../components/Header.jsx";
import {MovieList} from "../components/MovieList.jsx";
import {Footer} from "../components/Footer.jsx";

export const Movies = () => {
  return (
      <div className="movies-container">
        <div className="content-wrapper">
          <Header/>
          <main className="main-content">
            <MovieList/>
          </main>
        </div>
        <Footer/>
      </div>
  )
}
