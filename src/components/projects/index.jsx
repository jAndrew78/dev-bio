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
                    <div className="row header-row">

                        <div className="projects-section-heading col-12">
                            <h1 className="projects-section-heading-text">Dev_Projects</h1>
                        </div>

                        <div className="row projects-row">
                            <div className="col-12 project-item">

                                <div className="project-item-img">
                                    <a href="https://quiet-basin-68498.herokuapp.com/" target="_blank" rel="noreferrer">
                                        <img src="/images/innovate.png" alt="project thumb" />
                                    </a>
                                </div>

                                <div className="project-info">
                                    <h3>Innovate Birmingham Candidate Portal</h3>
                                    <p>
                                        This was a group project I worked on as a student. I helped organize the project from start to finish and 
                                        worked primarily on front end functionality, UI/UX and design. I also worked with the back
                                        end crew to design our SQL database. 
                                        {/* built our landing, home and profile pages along 
                                        with the header, footer, and modals throughout.  */}
                                        <br /> <br /> 
                                        Login auth is currently disabled... no credentials neccessary. 
                                        <br />
                                        Please be patient as the landing page may load slowly on Heroku.
                                        <br /> <br />
                                        
                                        <div className="project-item-links">
                                            <a href="https://quiet-basin-68498.herokuapp.com/" 
                                               target="_blank" 
                                               rel="noreferrer"
                                            >
                                                Heroku Link 
                                            </a>
                                            |
                                            <a href="https://github.com/sage-productions/innovate-bham-candidate-portal" 
                                               target="_blank" 
                                               rel="noreferrer"
                                            >
                                                Project Github 
                                            </a>
                                        </div>
                                    </p>
                                </div>

                            </div>
                            <div className="col-12 project-item">
                                <div className="project-item-img">
                                    <a href="https://jandrew78-netflix.netlify.app" target="_blank" rel="noreferrer">
                                        <img src="/images/netflix.png" alt="project thumb" />
                                    </a>
                                </div>

                                <div className="project-info">
                                    <h3>Notflix - A Netflix Clone</h3>
                                    <p>
                                        Functional clone of Netflix including: Styled Components, Custom Hooks, 
                                        Context, Firebase DB and Authentication on all pages, Protected Routes with
                                        Auth Listeners, Live Search on the Browse Page, Video Player and More.
                                        <br /> <br /> 
                                        Create your own account or login with the following:   
                                        <br />
                                        Email: test@test.com and Password: testaccount123
                                        <br /> <br />
                                        
                                        <div className="project-item-links">
                                            <a href="https://quiet-basin-68498.herokuapp.com/" 
                                               target="_blank" 
                                               rel="noreferrer"
                                            >
                                                Heroku Link 
                                            </a>
                                            |
                                            <a href="https://github.com/sage-productions/innovate-bham-candidate-portal" 
                                               target="_blank" 
                                               rel="noreferrer"
                                            >
                                                Project Github 
                                            </a>
                                        </div>
                                    </p>
                                </div>
                            </div>
                            <div className="col-12 project-item">
                                <img src="/images/amazon.png" alt="project thumb" />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
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
            </div>
        </>
    )
}