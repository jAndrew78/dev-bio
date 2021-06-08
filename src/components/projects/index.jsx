import React from 'react';
import { NavbarStatic, BgStatic } from '../'
import './styles.scss';


export const Projects = (props, direction) => {

    return (
        <>
            <NavbarStatic />
            <BgStatic />

            <div className="container-fluid projects-container">
                <div className="projects-page-bg">
                    
                    {/* PAGE HEADING */}
                    <div className="row header-row">
                        <div className="projects-section-heading col-12">
                            <h1 className="projects-section-heading-text">Dev_Projects</h1>
                        </div>
                    </div>

                    <div className="row projects-row">

                        {/* CANDIDATE PORTAL */}
                        <div className="col-12 project-item">

                            {/* IMAGE AND LINKS, INCLUDES TITLE ON COL VIEW */}
                            <div className="project-item-img">

                                {/* TITLE - VISiBLE ON COL VIEW */}
                                <h3 className="display-on-col-view">
                                    Innovate Birmingham
                                    <br className="show-less-than-600" /> Candidate Portal
                                </h3>
                                
                                {/* PROJECT SCREENSHOT */}
                                <a href="https://quiet-basin-68498.herokuapp.com/" target="_blank" rel="noreferrer">
                                    <img src="/images/innovate.png" alt="project thumb" />
                                </a>

                                {/* PROJECT LINKS */}
                                <div className="project-item-links">
                                    <a href="https://quiet-basin-68498.herokuapp.com/" 
                                        target="_blank" 
                                        rel="noreferrer"
                                    >
                                    <span className="no-show-less-than-600 space-after">Heroku </span>
                                    Link 
                                    </a>
                                    |
                                    <a href="https://github.com/sage-productions/innovate-bham-candidate-portal" 
                                        target="_blank" 
                                        rel="noreferrer"
                                    >
                                    <span className="no-show-less-than-600 space-after">Project </span> 
                                    Github 
                                    </a>
                                </div>

                            </div>

                            {/* DESCRIPTION - INCLUDES TITLE ON ROW VIEW */}
                            <div className="project-info">

                                {/* TITLE - VISIBLE ON ROW VIEW */}
                                <h3 className="display-on-row-view">Innovate Birmingham Candidate Portal</h3>
                                
                                {/* DESCRIPTION */}
                                <p>
                                    This was a group project I worked on as a student. I helped organize 
                                    the project from start to finish, worked with the back end crew to 
                                    design our SQL database and focused primarily on front end 
                                    functionality, UI/UX and design. 
                                </p>

                                {/* EXTRA INFO */}
                                <p className="mb-0">
                                    Login auth <span className="no-show-less-than-600 space-after">is</span>
                                    <span className="space-after">currently disabled.</span> 
                                    <br className="show-less-than-650" />No credentials neccessary. 
                                </p>
                                    <div className="show-less-than-650 sm-line-break" />
                                <p>
                                    Please be patient. Landing 
                                    <br className="show-less-than-650" /> page loads slowly on Heroku.
                                </p>
                            </div>
                        </div>

                        {/* NOTFLIX */}
                        <div className="col-12 project-item">
                            
                            {/* IMAGE AND LINKS, INCLUDES TITLE ON COL VIEW */}
                            <div className="project-item-img">

                                {/* TITLE VISIBLE ON COL VIEW */}
                                <h3 className="display-on-col-view">
                                    Notflix 
                                    <span className="no-show-less-than-600 space-before" >
                                        - 
                                    </span>
                                    <br className="show-less-than-600" /> A Netflix Clone
                                </h3>
                                
                                {/* PROJECT SCREENSHOT */}
                                <a href="https://jandrew78-netflix.netlify.app" target="_blank" rel="noreferrer">
                                    <img src="/images/netflix.png" alt="project thumb" />
                                </a>

                                {/* PROJECT LINKS */}
                                <div className="project-item-links">
                                    <a href="https://jandrew78-netflix.netlify.app" 
                                        target="_blank" 
                                        rel="noreferrer"
                                    >
                                        <span className="no-show-less-than-600 space-after">Netlify </span>
                                        Link 
                                    </a>
                                    |
                                    <a href="https://github.com/jAndrew78/netflix" 
                                        target="_blank" 
                                        rel="noreferrer"
                                    >
                                        <span className="no-show-less-than-600 space-after">Project </span> 
                                        Github 
                                    </a>
                                </div>
                            </div>

                            {/* PROJECT DESCRIPTION, INCLUDES TITLE ON ROW VIEW */}
                            <div className="project-info">

                                {/* TITLE - VISIBLE ON ROW VIEW */}
                                <h3 className="display-on-row-view">Notflix - A Netflix Clone</h3>
                                
                                {/* DESCRIPTION */}
                                <p>
                                    Functional clone of Netflix including: Styled Components, Custom Hooks, 
                                    Context, Firebase DB and Authentication on all pages, Protected Routes with
                                    Auth Listeners, Live Search, Video Player and More.
                                </p>

                                {/* EXTRA INFO */}
                                <p className="mb-0">
                                    Create your own account,
                                    <br className="show-less-than-600" /> or login with the following:   
                                </p>
                                <div className="show-less-than-600 sm-line-break" />
                                <p>    
                                    Email: test@test.com <span className="no-show-less-than-600">/</span> 
                                    <br className="show-less-than-600" /> Password: testaccount123
                                </p>
                            </div>
                        </div>

                        {/* AMAZON */}
                        <div className="col-12 project-item">

                            {/* IMAGE AND LINKS, INCLUDES TITLE ON COL VIEW */}
                            <div className="project-item-img">

                                {/* TITLE - VISIBLE ON COL VIEW */}
                                <h3 className="display-on-col-view">
                                    nozamA 
                                    <span className="no-show-less-than-600 space-before" >
                                        - 
                                    </span>
                                    <br className="show-less-than-600" /> An Amazon Clone
                                </h3>
                                
                                {/* PROJECT SCREENSHOT */}
                                <a href="https://fs-c9c42.web.app/" target="_blank" rel="noreferrer">
                                    <img src="/images/amazon2.png" alt="project thumb" />
                                </a>

                                {/* PROJECT LINKS */}
                                <div className="project-item-links">
                                    <a href="https://fs-c9c42.web.app/" 
                                        target="_blank" 
                                        rel="noreferrer"
                                    >
                                        <span className="no-show-less-than-600 space-after">Firebase </span>
                                        Link 
                                    </a>
                                    |
                                    <a href="https://github.com/jAndrew78/amazon" 
                                        target="_blank" 
                                        rel="noreferrer"
                                    >
                                        <span className="no-show-less-than-600 space-after">Project </span>
                                        Github 
                                    </a>
                                </div>
                            </div>

                            {/* PROJECT DESCRIPTION, INCLUDES TITLE ON ROW VIEW */}
                            <div className="project-info">

                                {/* TITLE - VISIBLE ON ROW VIEW */}
                                <h3 className="display-on-row-view">nozamA - An Amazon Clone</h3>

                                {/* DESCRIPTION */}
                                <p>
                                    Functional clone of Amazon with Stripe payment processing. Uses Firebase for
                                    Authentication, Database, Functions and Hosting. Also includes Axios API,
                                    React Context and Custom Hooks.
                                </p>

                                {/* EXTRA INFO */}
                                <p className="mb-0">
                                    Create your own account,
                                    <br className="show-less-than-600" /> or login with the following:   
                                </p>
                                <div className="show-less-than-600 sm-line-break" />
                                <p>
                                    Email: test@test.com <span className="no-show-less-than-600">/</span> 
                                    <br className="show-less-than-600" /> Password: testaccount123
                                </p>
                            </div>
                        </div>

                        {/* ALIEN INVASION */}
                        <div className="col-12 project-item">

                            {/* IMAGE AND LINKS, INCLUDES TITLE ON COL VIEW */}
                            <div className="project-item-img">

                                {/* TITLE - VISIBLE ON COL VIEW */}
                                <h3 className="display-on-col-view">
                                    Alien Invasion 
                                    <span className="no-show-less-than-600 space-before" >
                                        - 
                                    </span>
                                    <br className="show-less-than-600" /> Python Project
                                </h3>
                                
                                {/* PROJECT SCREENSHOT */}
                                <a href="https://github.com/jAndrew78/alien-invasion" target="_blank" rel="noreferrer">
                                    <img src="/images/alien-invasion.png" alt="project thumb" />
                                </a>

                                {/* PROJECT LINKS */}
                                <div className="project-item-links">                              
                                    <a href="https://github.com/jAndrew78/alien-invasion" 
                                        target="_blank" 
                                        rel="noreferrer"
                                    >
                                        Project Github 
                                    </a>
                                </div>
                            </div>

                            {/* PROJECT DESCRIPTION, INCLUDES TITLE ON ROW VIEW */}
                            <div className="project-info">

                                {/* TITLE - VISIBLE ON ROW VIEW */}
                                <h3 className="display-on-row-view">Alien Invasion - Python Project</h3>

                                {/* DESCRIPTION */}
                                <p>
                                    My first real Python project, this is a simple version of Galaga
                                    I put together in 2019. It runs on Pygame, which I believe 
                                    you have to have installed in order to play once you have cloned 
                                    the project from Github. Spaceships and aliens... fun for hours.
                                </p>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}