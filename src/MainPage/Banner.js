import React, { useState } from 'react';

function Banner() {
    const [show, hide] = useState(false)
    return (
        <>
        {/* enqire now form */}
    <div className={`enquire-now-hide ${show? 'enquire-now':''}`}>
      <div className="enquire-now-container">
        <button onClick={()=>hide(!show)} className='cross-toggle-button'>
        <div className='cross-toggle'></div>
        </button>
        <h1>Enquire Now</h1>
        <p>Fill out the form below and we'll get back to you</p>
        
      
        <form className="enquire-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="3" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
    {/* enquire now form end */}
        <div className="banner-container">
            <div className="banner">
                <div className="banner-content">
                    <div className="banner-items">
                        <span>Skill Path</span>
                    </div>

                    <div className="banner-items">
                        <h1>Build a Website with HTML, CSS, and GitHub Pages</h1>
                    </div>

                    <div className="banner-items">
                        <p>Web developer that  build your own website.</p>
                    </div>

                    <div className="banner-items">
                        <p id="banner-items-child">
                            Includes <strong>HTML</strong>, <strong>CSS</strong>, <strong>Responsive Design</strong>,
                            <strong>Flexbox</strong>, <strong>CSS Transitions</strong>, <strong>GitHub Pages</strong>, and more.
                        </p>
                    </div>

                    <div className="banner-items">
                        <span>To start YOUR WEBSIDE MAKING, upgrade your plan.</span>
                    </div>

                    <div>
                        <button className="banner-button" onClick={()=>hide(!show)}>Start</button>
                    </div>
                </div>

                <div className="banner-content2">
                    <div className="banner-items2">
                        <span>We offer feature like :-</span>
                        <ul>
                            <li>

                                <button>AI assistance for good template</button>
                            </li>
                            <li>

                                <button>2000+ Web developer for you assistence</button>
                            </li>
                            <li>

                                <button>900+ design of creativity</button>
                            </li>
                            <li>

                                <button>Ready webside in the minutes</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Banner;