import React from 'react'
import { Link } from 'react-router-dom';
import linkedin from '../assets/linkedin-icon-header.png'
import github from '../assets/github-icon-header.png'
import myPhoto from '../assets/my-photo.png'

function WelcomePage() {
    return (
        <>
       <header>
           <div id="filter">
               <div id="header-elements">
                    <h1 id="header-title">PORTFOLIO:</h1>      
                    <div id="header-job-title">
                        <h2>Kelsea McAllister</h2>    
                        <h5>Fullstack Developer</h5>                   
                    </div>
                    <div id="social-media-icons-header">
                      <a href="https://www.linkedin.com/in/kelsea-mcallister-900479205/"> <img src={linkedin} alt="Linked In icon" /></a>
                      <a href="https://github.com/kelseamc"  ><img src={github} alt="Github icon" /></a>
                    </div>
                    <img className="my-photo" src={myPhoto} alt="Kelsea"></img>
                </div>
                <div id="header-nav">
                        <Link className="nav-link" to="/projects">Projects</Link> 
                        <Link className="nav-link" to="/skills">Skills</Link>
                        <Link className="nav-link">Resume</Link>
                </div>
           </div>
       </header>
        <div className="summary-section">
            <p>
            <span className="summary-red-line"></span>
            <span className="summary-red-dot"></span> 
            Hey there! I'm Kelsea — Fullstack Web Developer. I took my first steps into Web Development, designing websites for small business owners. With a curiosity about 
            what was happening under the hood, I dived into the world of Programming. I quickly discovered my preference for coding and fell in love with debugging and cracking problems. 
            I like my code functional and structured and continue to dig deeper into more tools and technologies to further my frontend and backend knowledge. 
            </p>
        </div>
       </>
    )
}

export default WelcomePage
