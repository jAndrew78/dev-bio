import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';


export const NavbarStatic = props => {
    return (

        <nav className="navbar navbar-static navbar-expand-md navbar-dark">
            <div className="container-fluid ">
                <span className="d-flex navbar-brand mb-0 h1">
                    <Link to="/">
                        <img className="navbar-picture" src="/images/headshot.png" alt="Headshot"/>
                        <div className="navbar-brand ms-2 p-0 navbar-name">Andrew Traywick</div>
                    </Link>
                    <a className="github" 
                        href="https://github.com/jandrew78" 
                        target="_blank" 
                        rel="noreferrer"
                        onMouseOver={(e) => e.preventDefault()}
                    >
                        <img src="/images/github.png" alt="Github" className="github-icon icon" />
                    </a>
                    <a className="linkedin" 
                        href="https://linkedin.com/in/andrewtraywick" 
                        target="_blank" 
                        rel="noreferrer"
                        onMouseOver={(e) => e.preventDefault()}
                    >
                        <img src="/images/linkedin.png" alt="Github" className="linkedin-icon icon ms-2" />
                    </a>
                </span>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to ="/dev-profile">
                            <div className="nav-link"
                                 active={window.location.pathname === '/dev-profile' ? 'true' : 'false'}
                            >
                                Profile
                            </div>
                        </Link>
                        <Link to ="/projects">
                            <div className="nav-link"
                                 active={window.location.pathname === '/projects' ? 'true' : 'false'}
                            >
                                Projects
                            </div>
                        </Link>
                        <Link to ="/about-me">
                            <div className="nav-link"
                                 active={window.location.pathname === '/about-me' ? 'true' : 'false'}
                            >
                                About Me
                            </div>
                        </Link>
                        <Link to ="/contact">
                            <div className="nav-link"
                                 active={window.location.pathname === '/contact' ? 'true' : 'false'}
                            >
                                Contact
                            </div>
                        </Link>
                    </div>
                </div>

            </div>
        </nav>
        
            
            
        
    );
}
