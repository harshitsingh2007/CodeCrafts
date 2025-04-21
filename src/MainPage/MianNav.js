import React, { useState } from 'react';
import codecrafts from '../codecrafts.png';

function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky-nav">
      <nav>
        <div className="logo">
          <a href="">
            <img src={codecrafts} alt="CodeCrafts Logo"/>
          </a>
        </div>

        <div className={`desktop-menu ${isMenuOpen ? 'active' : ''}`}>
          <div className="nav-links">
            <a href="">
              <p>TEMPLATES</p>
            </a>
            <a href="">
              <p>DESIGNS</p>
            </a>
          </div>

          <div className="search-bar">
            <input type="text" placeholder="Search..."/>
          </div>

          <div className="auth-links">
            <a href="">
              <p>LOGIN</p>
            </a>
            <a href="https://signup-harshitsingh2007s-projects.vercel.app/">
              <p>SIGN UP</p>
            </a>
          </div>
        </div>

        <div className="nav-bar-toggle" onClick={toggleMenu}>
          <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
        </div>

        <button className="dark-light">Light mode</button>
      </nav>
    </header>
  );
}

export default MainNav;