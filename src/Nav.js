import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'




function Nav() {


    return (
        <div className="nav-bar">
            <div className="nav-top">
                <h2 >Kelsea McAllister</h2>
                <br />
                <br />
                <p>Fullstack Developer</p><br />
            </div>
            <div className="nav-icons">
                <a href="https://github.com/kelseamc" target="_blank" rel="noreferrer noopener" ><i className="fab fa-github-square"></i></a>
                <a href="https://www.linkedin.com/in/kelsea-mcallister/" target="_blank" rel="noreferrer noopener"><i className="fab fa-linkedin"></i></a>
                <a href="https://kelsea-mcall.medium.com/" target="_blank" rel="noreferrer noopener"><i className="fab fab fa-medium"></i></a>
                
            </div>
            <div className="nav-links">
                <li><Link to="/" className="link"> About </Link></li>
                <li><Link to="/projects" className="link"> Projects </Link></li>
                <li><Link to="/skills" className="link"> Skills </Link></li>
                <li><a className="link"  target="_blank" rel="noreferrer noopener"href="https://drive.google.com/file/d/1sIncjud3dEDcXfKbipIqPyoLaoh13UmJ/view?usp=sharing">Resume</a></li>
                {/* <li><Link to="/contact" className="link"> Contact </Link></li> */}

            </div>
            <div className="nav-footer">
            <Footer />
            </div>
        </div>
    )
}

export default Nav
