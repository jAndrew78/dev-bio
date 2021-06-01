import React from 'react';
import { Navbar, BgStatic } from '../'
import './styles.scss';


export const Profile = props => {
    const heading = 'Dev_Profile'

    return (
        <>
            <Navbar />
            <BgStatic />

            

            <div className="container-fluid profile-container">
                <div className="profile-page-bg">
                    <div className="row profile-row">

                        <div className="section-heading col-lg-3 col-md-12">
                            {/* <img src="/images/heading-bg.png" alt="heading" /> */}
                            <h1 className="section-heading-text">{ heading }</h1>
                        </div>

                        <div className="col-xl-1 col-lg-none"></div>

                        <div className="profile-career col-xl-4 col-lg-5 col-md-12">
                            <ul>
                                <h3>Career Info</h3>
                                {/* <li>
                                    Promising Junior Developer 
                                    <br/>Currently seeking an entry level position
                                </li> */}
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
                            </ul>
                        </div>
                                
                        <div className="profile-skills col-xl-4 col-lg-5 d-lg-block d-none">
                            <ul>
                                <h3>Tech Skills</h3>
                                <li>
                                    Well versed in React, Python, SQL, Bootstrap, CSS/SCSS
                                </li>
                                <li>
                                    Experience with Angular, C#, JQuery, APIs, Heroku, Firebase, Typescript, 
                                    Node and Express
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
                                    <br /> React, Python, SQL, Bootstrap, CSS/SCSS
                                </li>
                                <li>
                                    Experience with 
                                    <br /> Angular, C#, JQuery, APIs, Heroku, 
                                    <br /> Firebase, Typescript, 
                                    Node and Express
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
