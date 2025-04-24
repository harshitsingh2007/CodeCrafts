import React from 'react';


export default function TipsForWeb() {
  return (
    <div className="tips-container">
      <div className="tips-items">
        <div className="tips-items-child">
          <h2>How to create a website for free</h2>
        </div>
        <div className="tips-items-child">
          <p>Follow these 7 simple steps to create a website today.</p>
        </div>
        <div className="tips-items-child">
          <span>
            <a href="" className="tips-get-started">Get Started
              <span className="arrow">→</span>
            </a>
          </span>
          <a href="" className="tips-learn-more">Learn more →</a>
        </div>
      </div>

      <div className="tips-items2">
        <div className="tips-list">
          <ul>
            <li>
              <span>
                <span className="list-bold">Pick a platform. </span>
                <span>Sign up for a secure and reliable free website builder like CODECRAFTS</span>
              </span>
            </li>
            <li>
              <span>
                <span className="list-bold">Plan out your website.</span>
                <span> Map out your goals, site structure and who your audience is.</span>
              </span>
            </li>
            <li>
              <span>
                <span className="list-bold">Start creating. </span>
                <span>Choose from 900+ free templates or use the AI website builder.</span>
              </span>
            </li>
            <li>
              <span>
                <span className="list-bold">Customize your website. </span>
                <span>Use the drag and drop editor and tailor your site to fit your brand.</span>
              </span>
            </li>
            <li>
              <span>
                <span className="list-bold">Optimize for search engines.</span>
                <span>Increase your site's visibility with a suite of built-in SEO tools.</span>
              </span>
            </li>
            <li>
              <span>
                <span className="list-bold">Publish your website.</span>
                <span> Register and connect a custom domain name and go live.</span>
              </span>
            </li>
            <li>
              <span>
                <span className="list-bold">Promote and drive traffic.</span>
                <span> Use built-in marketing tools to grow and expand your reach.</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}