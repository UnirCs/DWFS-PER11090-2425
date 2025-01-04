import Header from './components/Header';
import Footer from './components/Footer';
import MovieList from './components/MovieList';

export default () => {
  return (
    <div>
      <Header />
      <main className='container'>
        <MovieList />
      </main>
      <Footer />
    </div>
  );
}
