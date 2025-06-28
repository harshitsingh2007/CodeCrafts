import React, { useState, useEffect } from 'react';
import styles from './Navbar2.module.css';
import CodeCrafts from '../codecrafts.png';
import { Link } from 'react-router-dom';

export default function Navbar2() {
  const [open, setOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleMenu = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setOpen(!open);
    }
  };

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 400); // Match this with your transition duration
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  return (
    <>
      {/* Backdrop for better UX */}
      <div 
        className={`${styles['navbar-backdrop']} ${open ? 'active' : ''}`} 
        onClick={toggleMenu}
      />

      {/* Expanded menu */}
      <section className={`bg-black text-white  fixed w-full z-20 ${open ? styles.open : styles.close}`}>
        <header className={styles.navbar2}>
          <div>
            <img src={CodeCrafts} alt="CodeCrafts Logo" className='w-[100px] h-[30px]'/>
          </div>
          <div className="flex flex-wrap justify-center ">
            <Link to='/' className={styles.Links} >Home</Link>
            <Link to='/about' className={styles.Links}>About</Link>
            <Link to='/contact' className={styles.Links}>Contact</Link>
            <Link to='/signup' className={styles.Links} >SignUp</Link>
          </div>
          <div>
            <button 
              className='font-bold text-[18px] py-2 px-4 rounded-[25px] hover:text-white hover:bg-blue-500 transition-colors'
              onClick={toggleMenu}
            >
              Close
            </button>
          </div>
        </header>
      </section>

      {/* Collapsed menu */}
      <section className='w-full fixed z-10 bg-white'>
        <header className={`${open ? styles.openClose : styles.navbar2}`}>
          <div>
            <img src={CodeCrafts} alt="CodeCrafts Logo" className='w-[100px] h-[30px]'/>
          </div>
          <div>
            <button 
              className='font-bold text-[18px] hover:bg-black py-2 px-4 rounded-[25px] hover:text-white transition-colors'
              onClick={toggleMenu}
            >
              Menu
            </button>
          </div>
        </header>
      </section>
    </>
  );
}