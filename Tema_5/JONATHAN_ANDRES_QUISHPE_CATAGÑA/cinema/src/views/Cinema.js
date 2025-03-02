import Footer from '../components/Footer';
import Header from '../components/Header';
import MovieList from '../components/MovieList';
import './Cinema.css';

const Cinema = () => {
  return (
    <div className='cinema'>
      <Header />
      <div className='cinema__content'>
        <MovieList />
      </div>
      <Footer />
    </div>
  );
}


export default Cinema;
