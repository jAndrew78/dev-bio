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
                <h2 className="profile-section-heading-text">Dev_Profile</h2>
              </div>

              <div className="col-xl-1 col-lg-none"></div>

              <div className="profile-career col-xl-4 col-lg-5 col-md-12">
                {/* <h3>Education</h3>
                            <div>Python Institute</div>
                            <div>PCEP Certified Entry-Level</div>
                            <div>Python Programmer</div>
                            <div className="mt-3">Innovate Birmingham</div>
                            <div>Full Stack Program</div>
                            <div>Web Development</div>
                            
                            <h3 className="mt-4">Work History</h3>
                            <div>Buzd Delivery</div>
                            <div className="row justify-evenly">
                                <div className="col">Senior Developer</div>
                                <div className="small-text">Sept 2022 - June 2023</div>
                            </div>
                            <div>App / Web Developer</div>
                            <div>Feb 2022 - Sept 2022</div> */}

                <ul>
                  <h3>Career Info</h3>
                  <li>
                    Currently Interested
                    <br /> in New Opportunities
                  </li>
                  <li>
                    AI Technician
                    <br />
                    Data Annotation Tech
                    <br />
                    Sept 2023 - Aug 2024
                  </li>
                  <li>
                    App / Web Developer
                    <br />
                    Buzd Delivery
                    <br />
                    Feb 2022 - June 2023
                  </li>
                  <li>
                    Innovate Birmingham
                    <br />
                    Web Development Program
                    <br />
                    Fall 2020
                  </li>
                  <li>
                    Python Institute
                    <br /> PCEP Certified Entry Level
                    <br /> Python Programmer
                    <br /> Jan 2020
                  </li>
                </ul>
              </div>

              <div className="profile-skills col-xl-4 col-lg-5 d-lg-block d-none">
                <ul>
                  <h3>Skills</h3>
                  <li>
                    Primary Tech
                    <br /> React, React Native, Firebase
                  </li>
                  <li>
                    Experience With
                    {/* <br /> Ruby, Python, NextJS, SQL, APIs, Jest, Styled
                    Components, Google Cloud Platform, React Testing Library */}
                    <br /> Python, Rest APIs, Google Cloud Platform
                  </li>
                  <li>
                    Soft Skills
                    <br /> Written & Oral Communication
                    <br /> Good Listening & Discussion Skills
                    <br /> Creative & Logical Problem Solver
                    <br /> Works Well With a Team or Solo
                    <br /> Mature & Adaptable Professional
                    <br /> Honest, Dependable & Organized
                    <br /> Positive Leadership Experience
                    <br /> Healthy Growth Mindset
                    <br /> Attention to Detail
                    <br /> Multitasking
                  </li>
                  {/* <li>
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
                                </li> */}
                </ul>
              </div>

              <div className="profile-skills-sm d-lg-none col-12">
                <ul>
                  <h3>Skills</h3>
                  <li>
                    Primary Tech
                    <br /> React, React Native, Firebase
                    {/* <br /> SQL, Bootstrap, CSS/SCSS,
                                    <br /> Styled Components */}
                  </li>
                  <li>
                    Experience With
                    <br /> Ruby, Python, NextJS,
                    <br /> SQL, Jest, APIs,
                    <br /> Styled Components,
                    <br /> Google Cloud Platform,
                    <br /> React Testing Library
                  </li>
                  <li>
                    Soft Skills
                    <br /> Written & Oral Communication
                    <br /> Good Listening & Discussion Skills
                    <br /> Creative & Logical Problem Solver
                    <br /> Works Well With a Team or Solo
                    <br /> Mature & Adaptable Professional
                    <br /> Honest, Dependable & Organized
                    <br /> Positive Leadership Experience
                    <br /> Healthy Growth Mindset
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
