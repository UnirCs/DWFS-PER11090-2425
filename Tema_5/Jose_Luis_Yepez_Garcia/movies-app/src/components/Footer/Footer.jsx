import FacebookIcon from '../../assets/Facebook';
import InstagramIcon from '../../assets/Instagram';
import TiktokIcon from '../../assets/Tiktok';
import XIcon from '../../assets/X';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className='footer__content__contact'>
          <p>Cine Unir</p>
          <p>Dirección: Calle Falsa 123, Ciudad, País</p>
          <p>Teléfono: +123 456 7890</p>
        </div>
        <div className="footer__content__social__links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FacebookIcon /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><XIcon /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><InstagramIcon /></a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"><TiktokIcon /></a>
        </div>
      </div>
      <p>&copy; 2024 Cine Unir. Todos los derechos reservados.</p>
    </footer>
  )
}
