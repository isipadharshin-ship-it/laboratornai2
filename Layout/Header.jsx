import React from 'react';
import Navigation from './Navigation';
import ThemeToggle from '../ThemeToggle';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Автосалон "Premium Cars"</h1>
        <Navigation />
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;