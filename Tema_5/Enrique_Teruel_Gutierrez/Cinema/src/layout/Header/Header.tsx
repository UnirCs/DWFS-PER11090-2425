import React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();
  return (
    <header className='header'>
      <h3 onClick={()=> navigate('')} className='header__logo' >Cine React</h3>
      <img className='header__menu' src="/icons/menu.svg" alt="menu" />
    </header>
  );
};

export default Header;