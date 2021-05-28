import React from 'react';
import './styles.scss';

import { Navbar, BgFade } from '../'


export const Profile = props => {

    // const bio = `
    //     I am\nme
    // `

    return (
        <>
            <BgFade />
            <Navbar />

            <div className="container-fluid profile-container">
                <div className="page-bg">
                <div className="row profile-row">
                        <div className="profile-col col-md-6 col-sm-12 d-flex flex-row ps-5">
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
                                    Skilled in React, Python, SQL, Bootstrap, CSS/SCSS
                                </li>
                                <li>
                                    Have also worked with Angular, C#, JQuery, Heroku, Firebase, Typescript, 
                                    Node & Express
                                </li>
                            </ul>
                        </div>

                        {/* <div className="profile-bio col-md-6 col-sm-12 px-5">
                            {bio?.split('\n').map((para, index) => (
                                <p key={`bio-para-${index}`}>{para}</p>
                            ))}
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );
}
