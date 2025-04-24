import React, { useState } from 'react';
import Codecrafts from '../codecrafts.png';


export default function NavbarNew() {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  const toggleMegaMenu = () => {
    setIsMegaMenuOpen(!isMegaMenuOpen);
  };

  return (
    <header>
      <nav>
        <div className='grid-card-1'>
          <div className='Toggle' onClick={toggleMegaMenu}>
            <div className={`bar ${isMegaMenuOpen ? 'bar-active' : ''}`}></div>
            <div className={`bar ${isMegaMenuOpen ? 'bar-active' : ''}`}></div>
            <div className={`bar ${isMegaMenuOpen ? 'bar-active' : ''}`}></div>
          </div>
          
          <div>
            <a href="#">Design</a>
            <a href="#">Template</a>
          </div>
        </div>

        <div className='grid-card-2'>
          <div className='Logo'>
            <img src={Codecrafts} alt="CodeCrafts Logo" />
          </div>
        </div>

        <div className='grid-card-3'>
          <div>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </nav>

      {isMegaMenuOpen && (
        <div className="mega-menu">
          <div className="mega-menu-container">
            <div className="mega-menu-column">
              <h3>Design Resources</h3>
              <ul>
                <li><a href="#">UI Components</a></li>
                <li><a href="#">Color Palettes</a></li>
                <li><a href="#">Typography</a></li>
                <li><a href="#">Icon Libraries</a></li>
              </ul>
            </div>
            <div className="mega-menu-column">
              <h3>Templates</h3>
              <ul>
                <li><a href="#">Landing Pages</a></li>
                <li><a href="#">Admin Dashboards</a></li>
                <li><a href="#">E-commerce</a></li>
                <li><a href="#">Portfolio</a></li>
              </ul>
            </div>
            <div className="mega-menu-column">
              <h3>Resources</h3>
              <ul>
                <li><a href="#">Tutorials</a></li>
                <li><a href="#">Documentation</a></li>
                <li><a href="#">Community</a></li>
                <li><a href="#">Support</a></li>
              </ul>
            </div>
            <div className="mega-menu-column">
              <h3>Featured</h3>
              <div className="featured-item">
                <h4>New Course</h4>
                <p>React Design Patterns for Modern Applications</p>
                <a href="#" className="featured-link">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}