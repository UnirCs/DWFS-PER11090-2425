export const Footer = () => {
  return (
      <>
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-section">
              <h3>CineMax UNIR</h3>
              <p>Dirección: Av. República Argentina, 24</p>
              <p>Email: info@cineplex-unir.com</p>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2024 Cinemax UNIR - Todos los derechos reservados</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <img src="/facebook.png" alt="Facebook"/>
              </a>
              <a href="#" aria-label="Twitter">
                <img src="/twitter.png" alt="Twitter"/>
              </a>
              <a href="#" aria-label="Instagram">
                <img src="/instagram.png" alt="Instagram"/>
              </a>
              <a href="#" aria-label="YouTube">
                <img src="/youtube.png" alt="YouTube"/>
              </a>
            </div>
          </div>
        </footer>
      </>
  )
}
