import React from 'react';
import styles from './AboutUs.module.css';
import NavbarNew from '../MainPage/NavbarNew';
import Footer from '../MainPage/Footer';

export default function AboutUs() {
  return (
    <>
      <NavbarNew />
      <section className={styles.aboutUs}>
        <div className={styles.container}>
          {/* Hero Section */}
          <div className={styles.aboutHero}>
            <h1>Building Digital Success Stories</h1>
            <p className={styles.lead}>
              We transform business visions into high-performing websites that drive results.
            </p>
          </div>

          {/* Our Story */}
          <div className={styles.aboutSection}>
            <h2>Our Story</h2>
            <div className={styles.storyContent}>
              <p>
                Founded in 2025, Began by a single Developer <strong>Harshit Singh</strong> of passionate developer 
                who believed every business deserves an exceptional online presence. Today, we've grown into 
                a full-service web development agency serving clients across multiple industries.
              </p>
              <div className={styles.statsGrid}>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>150+</span>
                  <span className={styles.statLabel}>Websites Delivered</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>98%</span>
                  <span className={styles.statLabel}>Client Satisfaction</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>1</span>
                  <span className={styles.statLabel}>Years Experience</span>
                </div>
              </div>
            </div>
          </div>

          {/* Our Approach */}
          <div className={`${styles.aboutSection} ${styles.approachSection}`}>
            <h2>Our Development Process</h2>
            <div className={styles.processSteps}>
              <div className={styles.step}>
                <div className={styles.stepNumber}>1</div>
                <h3>Discovery</h3>
                <p>We analyze your business needs and target audience to create the perfect strategy.</p>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>2</div>
                <h3>Design</h3>
                <p>Custom designs that reflect your brand identity and engage your customers.</p>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>3</div>
                <h3>Development</h3>
                <p>Clean, efficient code built with modern technologies for optimal performance.</p>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>4</div>
                <h3>Launch & Support</h3>
                <p>We handle deployment and provide ongoing maintenance and updates.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className={styles.ctaSection}>
            <h2>Ready to Build Your Website?</h2>
            <p>
              We're currently accepting new projects for {new Date().getFullYear()}. 
              Let's discuss how we can help grow your business online.
            </p>
            <button className={styles.ctaButton}>Get a Free Consultation</button>
          </div>
        </div>
      </section>
      <Footer />    
    </>
  );
}