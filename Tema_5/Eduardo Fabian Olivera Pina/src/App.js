import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import GlobalRouter from './components/GlobalRouter';

function App() {
  return (
    <>
      <Header/>
      <GlobalRouter/>
      <Footer/>
    </>
  );
}

export default App;
