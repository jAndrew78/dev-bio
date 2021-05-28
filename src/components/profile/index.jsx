import React from 'react';
import './styles.scss';

import { Navbar, BgFade } from '../'


export const Profile = props => {

    const bio = 'I never saw myself as a computer guy, but after taking a break from the mortgage industry to refinish a house, I picked up a book on Python and fell in love.\nFrom there I enrolled in the web development program with Innovate Birmingham. The program exceeded '

    return (
        <>
            <Navbar />
            <BgFade />

            <div className="container-fluid profile-container">
                <div className="profile-page-bg">
                    <div className="row profile-row">
                        <div className="profile-bullets col-lg-6 col-sm-12 d-flex flex-row ps-5">
                            <ul>
                                <h3>Career</h3>
                                <li>
                                    Promising Junior Developer 
                                    <br/>Currently seeking an entry level position
                                </li>
                                <li>Innovate Birmingham Web Development Program 
                                    <br/>Fall 2020 - Top of my class
                                </li>
                                <li>Certified entry level Python programmer 
                                    <br/>Intermediate Skill Level
                                </li>
                                <li>Making a career change 
                                    <br/>after a successful career in the mortgage industry
                                </li>

                                <br/>    
                                <h3>Tech Skills</h3>
                                <li>
                                    Well versed in React, Python, SQL, Bootstrap, CSS/SCSS
                                </li>
                                <li>
                                    Additional experience with Angular, C#, JQuery, APIs, Heroku, Firebase, Typescript, 
                                    Node and Express
                                </li>
                            </ul>
                        </div>

                        <div className="profile-bio col-lg-6 col-sm-12 px-5">
                            {bio?.split('\n').map((para, index) => (
                                <p key={`bio-para-${index}`}>{para}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
