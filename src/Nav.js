import React from 'react'
import { Link } from 'react-router-dom'




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
                <a href="https://github.com/kelseamc" target="_blank" ><i className="fab fa-github-square"></i></a>
                <a href="https://www.linkedin.com/in/kelsea-mcallister-900479205/" target="_blank"><i className="fab fa-linkedin"></i></a>
                <a href="https://kelsea-mcall.medium.com/" target="_blank"><i className="fab fab fa-medium"></i></a>
                
            </div>
            <div className="nav-links">
                <li><Link to="/" className="link"> About </Link></li>
                <li><Link to="/projects" className="link"> Projects </Link></li>
                <li><Link to="/skills" className="link"> Skills </Link></li>
                <li><Link className="link"> Resume </Link></li>

            </div>
            
        </div>
    )
}

export default Nav
