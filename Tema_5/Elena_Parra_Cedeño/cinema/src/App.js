import logo from './logo.svg';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import MoveList from "./components/MoveList";

function App() {
  return (
      <div className="App">
        <Header />
        <main className='content container text-center'>
        <MoveList/>
        </main>
        <Footer/>
      </div>

  );
}

export default App;
