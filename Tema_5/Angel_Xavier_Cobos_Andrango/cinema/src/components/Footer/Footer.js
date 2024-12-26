import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
            <p className="text-footer">&copy; 2023 Unir Cinema. All rights reserved.</p>
            <p className="text-footer">1234 Movie Lane, Film City, EC 56789</p>
            <p className="text-footer">Contáctenos: <a href="mailto:support@unircinema.com">support@unircinema.com</a></p>
        </div>
    </footer>
  );
}

export default Footer;