import "./../styles/Header.css";
export const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">CINE UNIR - RICARDO FALCON</h1>
        <nav className="header-nav">
          <ul>
            <li>
              <a href="#home">Inicio</a>
            </li>
            <li>
              <a href="#cartelera">Cartelera</a>
            </li>
            <li>
              <a href="#contacto">Contacto</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
