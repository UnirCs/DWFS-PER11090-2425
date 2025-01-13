import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRoutes from "./components/AppRoutes";

import "./App.css";

function App() {
  return (    
    <BrowserRouter>
      <div className="app">   
        <Header />
        <main className="app__main">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;