import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './layout.css';

const Layout: React.FC = () => {
  return (
    <div className='layout'>
      <Header />
      <main className='layout__content'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;