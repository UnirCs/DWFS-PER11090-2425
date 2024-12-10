import MovieList from './components/MovieList.tsx'
import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'

function App() {
  return (
    <main className="container mx-auto">
      <Header/>
      <MovieList/>
      <Footer/>
    </main>
  )
}

export default App
