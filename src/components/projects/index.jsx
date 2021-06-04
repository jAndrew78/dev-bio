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

                                <div className="project-item-img">

                                    <h3 className="display-on-col-view">Innovate Birmingham Candidate Portal</h3>
                                    
                                    <a href="https://quiet-basin-68498.herokuapp.com/" target="_blank" rel="noreferrer">
                                        <img src="/images/innovate.png" alt="project thumb" />
                                    </a>

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

                                <div className="project-info">
                                    <h3 className="display-on-row-view">Innovate Birmingham Candidate Portal</h3>
                                    <p>
                                        This was a group project I worked on as a student. I helped organize 
                                        the project from start to finish, worked with the back end crew to 
                                        design our SQL database and focused primarily on front end 
                                        functionality, UI/UX and design. 
                                    </p>
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
                                
                                <div className="project-item-img">

                                    <h3 className="display-on-col-view">Notflix - A Netflix Clone</h3>
                                    
                                    <a href="https://jandrew78-netflix.netlify.app" target="_blank" rel="noreferrer">
                                        <img src="/images/netflix.png" alt="project thumb" />
                                    </a>

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

                                <div className="project-info">
                                    <h3 className="display-on-row-view">Notflix - A Netflix Clone</h3>
                                    <p>
                                        Functional clone of Netflix including: Styled Components, Custom Hooks, 
                                        Context, Firebase DB and Authentication on all pages, Protected Routes with
                                        Auth Listeners, Live Search, Video Player and More.
                                    </p>
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

                                <div className="project-item-img">

                                    <h3 className="display-on-col-view">nozamA - An Amazon Clone</h3>
                                    
                                    <a href="https://fs-c9c42.web.app/" target="_blank" rel="noreferrer">
                                        <img src="/images/amazon2.png" alt="project thumb" />
                                    </a>

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

                                <div className="project-info">
                                    <h3 className="display-on-row-view">nozamA - An Amazon Clone</h3>
                                    <p>
                                        Functional clone of Amazon with Stripe payment processing. Uses Firebase for
                                        Authentication, Database, Functions and Hosting. Also includes Axios API,
                                        React Context and Custom Hooks.
                                    </p>
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
                                <img src="/images/github.png" alt="project thumb" />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                            {/* <div className="col-6">
                            </div> */}
                        </div>





                </div>
            </div>
        </>
    )
}