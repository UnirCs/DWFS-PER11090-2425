import './App.css';
import './styles/styles.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList />
      <Footer />
    </div>
  );
}

export default App;
