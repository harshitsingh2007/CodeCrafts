import React from 'react';
import '../About-us/AboutUs.css';
import NavbarNew from '../MainPage/NavbarNew';
import Footer from '../MainPage/Footer';

export default function AboutUs() {
  return (
    <>
    <NavbarNew/>
    <section className="about-us">
      <div className="container">
        {/* Hero Section */}
        <div className="about-hero">
          <h1>Building Digital Success Stories</h1>
          <p className="lead">
            We transform business visions into high-performing websites that drive results.
          </p>
        </div>

        {/* Our Story */}
        <div className="about-section">
          <h2>Our Story</h2>
          <div className="story-content">
            <p>
              Founded in 2025, Began by a single Developer <strong>Harshit Singh</strong> of passionate developer 
              who believed every business deserves an exceptional online presence. Today, we've grown into 
              a full-service web development agency serving clients across multiple industries.
            </p>
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-number">150+</span>
                <span className="stat-label">Websites Delivered</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">98%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">1</span>
                <span className="stat-label">Years Experience</span>
              </div>
            </div>
          </div>
        </div>

        {/* Our Approach */}
        <div className="about-section approach-section">
          <h2>Our Development Process</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Discovery</h3>
              <p>We analyze your business needs and target audience to create the perfect strategy.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Design</h3>
              <p>Custom designs that reflect your brand identity and engage your customers.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Development</h3>
              <p>Clean, efficient code built with modern technologies for optimal performance.</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Launch & Support</h3>
              <p>We handle deployment and provide ongoing maintenance and updates.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-section">
          <h2>Ready to Build Your Website?</h2>
          <p>
            We're currently accepting new projects for {new Date().getFullYear()}. 
            Let's discuss how we can help grow your business online.
          </p>
          <button className="cta-button">Get a Free Consultation</button>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
}