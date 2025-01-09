import "./styles/Footer.css";

function Footer() {
  
  return (
    <footer className="footer">
      <div className="footer__content container">
        <p className="footer__text">
          &copy; {new Date().getFullYear()} Cinema Gio. Todos los derechos reservados.
        </p>
        <div className="footer__social">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-link"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-link"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-link"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;