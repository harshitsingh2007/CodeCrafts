import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import Codecrafts from '../codecrafts.png';

export default function NavbarNew() {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  const toggleMegaMenu = () => {
    setIsMegaMenuOpen(!isMegaMenuOpen);
  };

let username=localStorage.getItem("userdata")
let userdata=JSON.parse(username)


  return (
    <header className={styles.navbar}>
      <nav className={styles.nav}>
        <div className={styles.gridCard1}>
          <div className={styles.toggle} onClick={toggleMegaMenu}>
            <div className={`${styles.bar} ${isMegaMenuOpen ? styles.barActive : ''}`}></div>
            <div className={`${styles.bar} ${isMegaMenuOpen ? styles.barActive : ''}`}></div>
            <div className={`${styles.bar} ${isMegaMenuOpen ? styles.barActive : ''}`}></div>
          </div>
          
          <div>
            <Link to="/design" className={styles.navLink}>Design</Link>
            <Link to="/template" className={styles.navLink}>Template</Link>
          </div>
        </div>

        <div className={styles.gridCard2}>
          <div className={styles.logo}>
            <img src={Codecrafts} alt="CodeCrafts Logo" />
          </div>
        </div>

        <div className={styles.gridCard3}>
          <Link to="/" className={styles.navLink}>Home</Link>
          <Link to="/about" className={styles.navLink}>About</Link>
          <Link to="/contact" className={styles.navLink}>Contact</Link>
          <p>{userdata.uname}</p>
        </div>
      </nav>

      {isMegaMenuOpen && (
        <div className={styles.megaMenu}>
          <div className={styles.megaMenuContainer}>
            <div className={styles.megaMenuColumn}>
              <h3>Design Resources</h3>
              <ul className={styles.megaMenuList}>
                <li><a href="#" className={styles.megaMenuLink}>UI Components</a></li>
                <li><a href="#" className={styles.megaMenuLink}>Color Palettes</a></li>
                <li><a href="#" className={styles.megaMenuLink}>Typography</a></li>
                <li><a href="#" className={styles.megaMenuLink}>Icon Libraries</a></li>
              </ul>
            </div>
            <div className={styles.megaMenuColumn}>
              <h3>Templates</h3>
              <ul className={styles.megaMenuList}>
                <li><a href="#" className={styles.megaMenuLink}>Landing Pages</a></li>
                <li><a href="#" className={styles.megaMenuLink}>Admin Dashboards</a></li>
                <li><a href="#" className={styles.megaMenuLink}>E-commerce</a></li>
                <li><a href="#" className={styles.megaMenuLink}>Portfolio</a></li>
              </ul>
            </div>
            <div className={styles.megaMenuColumn}>
              <h3>Resources</h3>
              <ul className={styles.megaMenuList}>
                <li><a href="#" className={styles.megaMenuLink}>Tutorials</a></li>
                <li><a href="#" className={styles.megaMenuLink}>Documentation</a></li>
                <li><a href="#" className={styles.megaMenuLink}>Community</a></li>
                <li><a href="#" className={styles.megaMenuLink}>Support</a></li>
              </ul>
            </div>
            <div className={styles.megaMenuColumn}>
              <h3>Featured</h3>
              <div className={styles.featuredItem}>
                <h4>New Course</h4>
                <p>React Design Patterns for Modern Applications</p>
                <a href="#" className={styles.featuredLink}>Learn More</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}