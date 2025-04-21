import React from 'react';

export default function Slogen() {
  return (
    <div className="slogen-container">
      <div className="slogen">
        <div className="slogen-content1">
          <h1>More than a website builder</h1>
        </div>
        <div className="slogen-content2">
          <h1 className="animated-slogen">Your site should do more than look good</h1>
        </div>
        <div className="slogen-content3">
          <div className="slogen-content3-items">
            <p>As the first-ever website experience platform, CodeCrafts lets marketers, designers, and developers
              come together to build, manage, and optimize web experiences that get results.</p>
          </div>
          
          <div className="slogen-content3-buttons">
            <div className="slogen-content3-items">
              <a href="/build" className="cta-button">Start building</a>
            </div>
            <div className="slogen-content3-items2">
              <a href="/contact" className="cta-button secondary">Contact US</a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Video Section */}
      <div className="video-container">
        <video 
          src="https://dhygzobemt712.cloudfront.net/Web/home/2024-wxp/hero/hero-compress5.mp4" 
          controls 
          autoPlay 
          muted 
          loop 
          className="autoplay-video">
        </video>
      </div>
    </div>
  );
}