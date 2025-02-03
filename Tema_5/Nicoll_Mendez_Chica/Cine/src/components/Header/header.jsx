import './header.css';
import './searchbar.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="search-content">
            <nav className="search">
                <Link to="/">
                    <h1 className="search-logo">CINEMA</h1>
                </Link>
                <div class="search-bar">
                    <form action="" method="">
                        <input type="search" placeholder="Escribe aqui..."></input>
                        <Link to="/">
                            <button>Buscar</button>
                        </Link>
                    </form>
                </div>
            </nav>
        </div>
    );  
}

export default Header;