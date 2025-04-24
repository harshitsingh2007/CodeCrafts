import React from 'react'

export default function BuyDomain() {
  return (
    <div className="make-webside-container">
      <div className="make-webside-items">
        <h1>Make your website official with your own domain name</h1>
      </div>
      <div className="make-webside-items">
        <div className="search-container">
          <div className="search-box">
            <input type="text" className="search-input" placeholder="e.g. futurep"/>
            <button className="search-button">
              Search <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </div>
      <div className="make-webside-items">
        <p>Get a
          <a href=""> Custom domain</a> free for one year with the initial purchase of an annual <a href="">Premium Plan</a></p>
      </div>
    </div>
  )
}