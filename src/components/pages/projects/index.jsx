import React from 'react';
import { NavbarStatic, BgStatic } from '../../';
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
                            <h1 className="projects-section-heading-text">Personal_Projects</h1>
                        </div>
                    </div>

                    <div className="row projects-row">

                        {/* BUZD USER APP */}
                        {/* <div className="col-12 project-item"> */}

                            {/* IMAGE AND LINKS, INCLUDES TITLE ON COL VIEW */}
                            {/* <div className="project-item-img"> */}

                                {/* TITLE - VISiBLE ON COL VIEW */}
                                {/* <h3 className="display-on-col-view">
                                    Buzd Delivery
                                    <br className="show-less-than-600" /> User App
                                </h3> */}
                                
                                {/* PROJECT SCREENSHOT */}
                                {/* <a href="https://quiet-basin-68498.herokuapp.com/" target="_blank" rel="noreferrer">
                                    <img className="project-item-img-thumb" 
                                        src="/images/innovate.png" 
                                        alt="project thumb"
                                    />
                                </a> */}

                                {/* PROJECT LINKS */}
                                {/* <div className="project-item-links">
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

                            </div> */}

                            {/* DESCRIPTION - INCLUDES TITLE ON ROW VIEW */}
                            {/* <div className="project-info"> */}

                                {/* TITLE - VISIBLE ON ROW VIEW */}
                                {/* <h3 className="display-on-row-view">Buzd Delivery User App</h3> */}
                                
                                {/* DESCRIPTION */}
                                {/* <p>
                                    This was the user app for a local delivery startup. I joined the project early on,
                                    soon became a key member of the development team and was eventually
                                    promoted to senior developer. The startup is no longer active, but 
                                    you should still be able to download the app via the App Store or Google Play
                                    to view a decent amount of it's functionality. The project was well maintained
                                    and still going strong when the startup ran out of funding in the summer of 2023.
                                </p> */}

                                {/* EXTRA INFO */}
                                {/* <p className="mb-0">
                                    Login auth <span className="no-show-less-than-600 space-after">is</span>
                                    <span className="space-after">currently disabled.</span> 
                                    <br className="show-less-than-650" />No credentials neccessary. 
                                </p>
                                    <div className="show-less-than-650 sm-line-break" />
                                <p>
                                    Please be patient. Landing 
                                    <br className="show-less-than-650" /> page loads slowly on Heroku.
                                </p> */}
                            {/* </div>
                        </div> */}

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
                                {/* <a href="https://quiet-basin-68498.herokuapp.com/" target="_blank" rel="noreferrer"> */}
                                <a href="https://github.com/sage-productions/innovate-bham-candidate-portal" 
                                    target="_blank" 
                                    rel="noreferrer"
                                >
                                    <img className="project-item-img-thumb" 
                                         src="/images/innovate.png" 
                                         alt="project thumb"
                                    />
                                </a>

                                {/* PROJECT LINKS */}
                                <div className="project-item-links">
                                    {/* <a href="https://quiet-basin-68498.herokuapp.com/" 
                                        target="_blank" 
                                        rel="noreferrer"
                                    >
                                    <span className="no-show-less-than-600 space-after">Heroku </span>
                                    Link 
                                    </a>
                                    | */}
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
                                    design our database and focused primarily on UI/UX and front end 
                                    functionality.
                                </p>
                                
                                <p>
                                    The project is no longer available on Heroku, but you are
                                    <br />welcome to view the project's code via the github link.
                                </p>

                                {/* EXTRA INFO */}
                                {/* <p className="mb-0">
                                    Login auth <span className="no-show-less-than-600 space-after">is</span>
                                    <span className="space-after">currently disabled.</span> 
                                    <br className="show-less-than-650" />No credentials neccessary. 
                                </p>
                                    <div className="show-less-than-650 sm-line-break" />
                                <p>
                                    Please be patient. Landing 
                                    <br className="show-less-than-650" /> page loads slowly on Heroku.
                                </p> */}
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
                                    <img className="project-item-img-thumb" 
                                         src="/images/netflix.png" 
                                         alt="project thumb" />
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

                                <p>
                                    Please note, Google has flagged this one as a deceptive site
                                    because it looks just like Netflix. (Go me!) Use the test login below
                                    if you're cautious (like me), or just use a fake email. Simple as that.
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
                                    <img className="project-item-img-thumb" 
                                         src="/images/amazon2.png" 
                                         alt="project thumb" />
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

                        {/* SOCIAL */}
                        <div className="col-12 project-item">

                            {/* IMAGE AND LINKS, INCLUDES TITLE ON COL VIEW */}
                            <div className="project-item-img">

                                {/* TITLE - VISIBLE ON COL VIEW */}
                                <h3 className="display-on-col-view">
                                    Social 
                                    <span className="no-show-less-than-600 space-before" >
                                        - 
                                    </span>
                                    <br className="show-less-than-600" /> Full Stack Chat App
                                </h3>
                                
                                {/* PROJECT SCREENSHOT */}
                                <a href="https://github.com/jAndrew78/social-app" 
                                    target="_blank" 
                                    rel="noreferrer"
                                >
                                    <div className="project-item-img-app-container">
                                        <img className="project-item-img-app no-show-less-than-600" 
                                            src="/images/social-loading.png" 
                                            alt="project thumb" />
                                        <img className="project-item-img-app" 
                                            src="/images/social-home.png" 
                                            alt="project thumb" />
                                        <img className="project-item-img-app no-show-less-than-400" 
                                            src="/images/social-profile.png" 
                                            alt="project thumb" />
                                    </div>
                                </a>

                                {/* PROJECT LINKS - VISABLE ON COL VIEW*/}
                                <div className="project-item-links display-on-col-view">
                                    <a href="https://github.com/jAndrew78/social-app" 
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
                                <h3 className="display-on-row-view">Social - Full Stack Chat App</h3>

                                {/* DESCRIPTION */}
                                <p>
                                    Full Stack Social Chat Application built with React Native and Firebase.
                                    Styled Components, Custom Text Attributes, Hooks and Context. 
                                    Firebase Auth and FireStore.
                                </p>

                                {/* EXTRA INFO */}
                                <p className="mb-0">
                                    Create your own account,
                                    <br className="show-less-than-600" /> or login with the following:   
                                </p>
                                <div className="show-less-than-600 sm-line-break" />
                                <p>
                                    Email: mel@mel.com <span className="no-show-less-than-600">/</span> 
                                    <br className="show-less-than-600" /> Password: mel123
                                </p>

                                <p>
                                    See Github README for QR link to preview the app
                                </p>

                                {/* PROJECT LINKS - VISABLE ON ROW VIEW*/}
                                <div className="project-item-link-row-view display-on-row-view">
                                    <a href="https://github.com/jAndrew78/social-app" 
                                        target="_blank" 
                                        rel="noreferrer"
                                    >
                                        Project Github 
                                    </a>
                                </div>
                    
                            </div>
                        </div>

                        {/* DEV BIO */}
                        <div className="col-12 project-item">

                            {/* IMAGE AND LINKS, INCLUDES TITLE ON COL VIEW */}
                            <div className="project-item-img">

                                {/* TITLE - VISIBLE ON COL VIEW */}
                                <h3 className="display-on-col-view">Developer Website</h3>
                                
                                {/* PROJECT SCREENSHOT */}
                                <a href="https://github.com/jAndrew78/dev-bio" target="_blank" rel="noreferrer">
                                    <img className="project-item-img-thumb" 
                                         src="/images/dev-bio.png" 
                                         alt="project thumb" />
                                </a>

                                {/* PROJECT LINKS */}
                                <div className="project-item-links">                              
                                    <a href="https://github.com/jAndrew78/dev-bio" 
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
                                <h3 className="display-on-row-view">Developer Website</h3>

                                {/* DESCRIPTION */}
                                <p>
                                    The website you are currently viewing is an original, responsive design
                                    with (mostly) custom animations. I got to use React-Hook-Form, React-Toastify,
                                    EmailJS-Com and iTyped, all of which were new to me at the time. I hope it shows some of 
                                    my skills as well as my willingness to learn,
                                    my unique personality and my passion for developing. 
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
                                    <img className="project-item-img-thumb" 
                                         src="/images/alien-invasion.png" 
                                         alt="project thumb" />
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
                                    My first real Python project, this is a simple Galaga-like game
                                    I put together in 2019. It runs on Pygame, which I believe 
                                    you would need to have installed in order to play after cloning 
                                    the project from Github. 
                                </p>
                                <p>
                                    Spaceships and aliens, though... fun for hours.
                                </p>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}