import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/searchpage">
          <img className="navbar-logo" src="/logo.jpg" alt="Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/WhoWeArePage">
                Quienes somos
              </Link>
            </li>
          </ul>
        </div>
        <div className="d-flex align-items-center position-relative">
          <span className="me-3 text-white">Hola, Jose</span>
          <button className="btn btn-outline-light position-relative">
            <i className="bi bi-person"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
