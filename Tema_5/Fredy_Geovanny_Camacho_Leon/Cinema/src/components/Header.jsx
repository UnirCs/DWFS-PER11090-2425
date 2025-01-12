import { Link } from "react-router-dom";
import "./styles/Header.css";

function Header() {
  
  return (
    <header className="header">
      <div className="header__content container">
        <Link to="/" className="header__logo">
          <i className="fas fa-book"></i> Cinema Gio
        </Link>
      </div>
    </header>
  );
}

export default Header;