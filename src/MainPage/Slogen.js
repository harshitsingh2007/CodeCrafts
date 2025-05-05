import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Main.module.css';

export default function Slogen() {
  return (
    <div className={styles.slogenContainer}>
      <div className={styles.slogen}>
        <div className={styles.slogenContent1}>
          <h1>More than a website builder</h1>
        </div>
        <div className={styles.slogenContent2}>
          <h1 className={styles.animatedSlogen}>Your site should do more than look good</h1>
        </div>
        <div className={styles.slogenContent3}>
          <div className={styles.slogenContent3Items}>
            <p>As the first-ever website experience platform, CodeCrafts lets marketers, designers, and developers
              come together to build, manage, and optimize web experiences that get results.</p>
          </div>
          
          <div className={styles.slogenContent3Buttons}>
            <div className={styles.slogenContent3Items}>
               <Link to={'/signup'} className={styles.ctaButton}>Start building</Link> 
            </div>
            <div className={styles.slogenContent3Items2}>
              <Link to={'/contact'} className={styles.ctaButton}>Learn More</Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Video Section */}
      <div className={styles.videoContainer}>
        <video 
          src="https://dhygzobemt712.cloudfront.net/Web/home/2024-wxp/hero/hero-compress5.mp4" 
          controls 
          autoPlay 
          muted 
          loop 
          className={styles.autoplayVideo}>
        </video>
      </div>
    </div>
  );
}