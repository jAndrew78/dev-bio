import React from 'react';
import { NavbarStatic, BgStatic } from '../../';
import './styles.scss';


export const Profile = props => {

    return (
        <>
            <NavbarStatic />
            <BgStatic />

            <div className="container-fluid profile-container">
                <div className="profile-page-bg">
                    <div className="row profile-row">

                        <div className="profile-section-heading col-lg-3 col-md-12">
                            {/* <img src="/images/heading-bg.png" alt="heading" /> */}
                            <h1 className="profile-section-heading-text">Dev_Profile</h1>
                        </div>

                        <div className="col-xl-1 col-lg-none"></div>

                        <div className="profile-career col-xl-4 col-lg-5 col-md-12">
                            <ul>
                                <h3>Career Info</h3>
                                <li>Certified Entry Level 
                                    <br />Python Programmer 
                                    {/* <br/>Intermediate Skill Level */}
                                </li>
                                <li>Innovate Birmingham
                                    <br/>Web Development Program 
                                    <br/>Fall 2020 - Top of my Class
                                </li>
                                <li>Making a Career Change
                                    <br/>From the Mortgage Industry
                                </li>
                                <li>
                                    Currently Seeking an 
                                    <br /> Entry/Mid Level Position
                                </li>
                            </ul>
                        </div>
                                
                        <div className="profile-skills col-xl-4 col-lg-5 d-lg-block d-none">
                            <ul>
                                <h3>Tech Skills</h3>
                                <li>
                                    Well versed in React, React Native, Python, SQL, Bootstrap, CSS/SCSS,
                                    Styled Components
                                </li>
                                <li>
                                    Experience with Jest, React Testing Library, Angular, C#, JQuery, 
                                    APIs, Heroku, Firebase, Typescript, Node and Express
                                </li>
                                <li>
                                    Front End Focused
                                    <br/>Open to Working Full Stack
                                </li>
                            </ul>
                        </div>

                        <div className="profile-skills-sm d-lg-none col-12">
                            <ul>
                                <h3>Tech Skills</h3>
                                <li>
                                    Well versed in 
                                    <br /> React, React Native, Python, 
                                    <br /> SQL, Bootstrap, CSS/SCSS,
                                    <br /> Styled Components
                                </li>
                                <li>
                                    Experience with 
                                    <br /> Jest, React Testing Library, 
                                    <br /> Angular, C#, JQuery, APIs,  
                                    <br /> Heroku, Firebase, Typescript, 
                                    <br /> Node and Express
                                </li>
                                <li>
                                    Front End Focused
                                    <br/>Open to Working Full Stack
                                </li>
                            </ul>
                        </div>        

                    </div>
                </div>
            </div>
        </>
    );
}
