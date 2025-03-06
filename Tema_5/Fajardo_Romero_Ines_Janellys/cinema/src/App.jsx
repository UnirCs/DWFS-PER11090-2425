import './App.css';
import NavBar from "./layout/NavBar";
import Footer from "./layout/Footer";
import {Outlet} from "react-router-dom";

function App() {
  return (
      <div className="App">
          <NavBar/>
          <div className="container-fluid body-content">
              <Outlet />
              <Footer/>
          </div>

      </div>
  );
}

export default App;
