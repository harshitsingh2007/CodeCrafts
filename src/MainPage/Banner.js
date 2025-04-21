import React from 'react'

function Banner(){
    return(
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
                    <p>Learn the basics of web development to build your own website.</p>
                </div>

                <div className="banner-items">
                    <p id="banner-items-child">Includes <strong>HTML</strong>,<strong>CSS</strong>,<strong>Responsive
                            Design</strong>,<strong>Flexbox</strong>,<strong>CSS Transitions</strong>,<strong>GitHub
                            Pages</strong>, and more.</p>
                </div>

                <div className="banner-items">
                    <span>
                        To start this Skill Path, upgrade your plan.</span>
                </div>

                <div>
                    <button className="banner-button">Start</button>
                </div>
            </div>

            <div className="banner-content2">
                <div className="banner-items2">
                    <span>This skill path includes</span>
                    <ul>
                        <li>
                            <img src="images/AI-codecrafts.png" alt=""/>
                            <button>AI assistance for guided coding help</button>
                        </li>
                        <li>
                            <img src="images/puzzle-codecrafts.png" alt=""/>
                            <button>Projects to apply new skills</button>
                        </li>
                        <li>
                            <img src="images/checklist-codecrafts.png" alt=""/>
                            <button>Quizzes to test your knowledge</button>
                        </li>
                        <li>
                            <img src="images/certificate-codecrafts.png" alt=""/>
                            <button>A certificate of completion</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    );
}
export default Banner;