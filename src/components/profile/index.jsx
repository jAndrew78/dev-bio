import React from 'react';
import { Navbar, BgFade } from '../'
import './styles.scss';


export const Profile = props => {
    return (
        <>
            <Navbar />
            <BgFade />

            <div className="container-fluid profile-container">
                <div className="profile-page-bg">
                    <div className="row profile-row">

                        <div className="profile-bullets col-xl-4 col-lg-5">
                            <ul>
                                <h3>Career</h3>
                                <li>
                                    Promising Junior Developer 
                                    {/* <br/>Currently seeking an entry level position */}
                                </li>
                                <li>Innovate Birmingham 
                                    <br/>Web Development Program 
                                    <br/>Fall 2020 - Top of my Class
                                </li>
                                <li>Certified Entry Level 
                                    <br />Python Programmer 
                                    {/* <br/>Intermediate Skill Level */}
                                </li>
                                <li>Making a Career Change 
                                    <br/>From the Mortgage Industry
                                </li>
                                
                                <div className="d-none d-xl-block mt-4">
                                    <h3>Tech Skills</h3>
                                    <li>
                                        Well versed in React, Python, SQL, Bootstrap, CSS/SCSS
                                    </li>
                                    <li>
                                        Experience with Angular, C#, JQuery, APIs, Heroku, Firebase, Typescript, 
                                        Node and Express
                                    </li>
                                </div>

                            </ul>
                        </div>
                                
                        <div className="profile-bullets col-md-12 col-lg-6 d-xl-none d-lg-block">
                            <h3>Tech Skills</h3>
                            <ul>
                                <li>
                                    Well versed in React, Python, SQL, Bootstrap, CSS/SCSS
                                </li>
                                <li>
                                    Experience with Angular, C#, JQuery, APIs, Heroku, Firebase, Typescript, 
                                    Node and Express
                                </li>
                            </ul>
                        </div>        

                    </div>
                </div>
            </div>
        </>
    );
}
