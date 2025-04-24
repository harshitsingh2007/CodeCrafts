import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <h2>Learning</h2>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        
        <div className="footer-content">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Digital Content</a></li>
            <li><a href="#">Micro Blogs</a></li>
            <li><a href="#">Train Your Employee</a></li>
          </ul>
        </div>
        
        <div className="footer-content">
          <h2>Partners</h2>
          <ul>
            <li><a href="#">W3schools</a></li>
            <li><a href="#">LeetCode</a></li>
            <li><a href="#">HackerBlocks</a></li>
            <li><a href="#">Unstop</a></li>
            <li><a href="#">CodeForces</a></li>
          </ul>
        </div>
        
        <div className="footer-content">
          <h2>Connect</h2>
          <ul>
            <li><a href="tel:+918595024295">+91 8595024295</a></li>
            <li><a href="mailto:harshit971897@gmail.com">harshit971897@gmail.com</a></li>
            <div className="social-icons">
              <a href="#" aria-label="Facebook"><img src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png" alt="" /></a>
              <a href="#" aria-label="Twitter"><img src="https://cdn-icons-png.flaticon.com/128/3670/3670151.png" alt="" /></a>
              <a href="#" aria-label="LinkedIn"><img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" alt="" /></a>
              <a href="#" aria-label="Instagram"><img src="https://cdn-icons-png.flaticon.com/128/15713/15713420.png" alt="" /> </a>
            </div>
          </ul>
        </div>
      </div>
      
      <div className="copyright">
        <p>© {new Date().getFullYear()} CodeCrafts. All Rights Reserved | Design by <a href="https://www.linkedin.com/in/harshit-singh-8b106b323" target="_blank" rel="noopener noreferrer">Harshit Singh</a></p>
      </div>
    </footer>
  );
}