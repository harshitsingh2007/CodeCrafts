import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from './Banner';
import Slogen from './Slogen';
import Collaboration from './Collaboration';
import BuyDomain from './BuyDomain';
import TipsForWeb from './TipsForWeb';
import './Main.module.css';
import BuildWebside from './BuildWebside';

export const MainPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 's' && !e.ctrlKey && !e.metaKey && !e.altKey) {
        e.preventDefault();
        navigate('/signup');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate]);

  return (
    <>
      <div tabIndex={0} className='bg-black' >
        <Slogen/>
        <Collaboration/>
        <BuyDomain/>
        <Banner/>
        <BuildWebside/>
        <TipsForWeb/>
      </div>
    </>
  );
};