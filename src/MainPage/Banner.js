import React from 'react';


function Banner() {
    return (
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
                        <button className="banner-button">Start</button>
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
    );
}

export default Banner;