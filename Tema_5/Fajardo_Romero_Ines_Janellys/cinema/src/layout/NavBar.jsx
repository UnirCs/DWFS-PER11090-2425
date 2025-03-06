
import { Link } from "react-router-dom";

function NavBar (){
    return (
        <nav className="navbar navbar-expand-lg sticky-top bg-dark" data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand nav-cinema" to="/home">
                    <img src="/img/cinema.webp" alt="Logo" className="d-inline-block align-text-top logo-cinema"/>
                    <div>UNIR - CINEMA</div>
                </Link>
                <div className="collapse navbar-collapse" id="navbar_Nav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link  className="nav-link active font-color" aria-current="page" to="/">HOME</Link >
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;