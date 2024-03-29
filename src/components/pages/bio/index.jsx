import React from 'react';
import { NavbarStatic, BgStatic } from '../../';
import './styles.scss';



export const Bio = props => {

    const bio = "I never saw myself as a computer person, but after taking a break from the mortgage industry to refinish a house, I picked up a book on Python, sat down at a computer and fell in love.\n During my time in the web development program at Innovate Birmingham (which well exceeded my expectations), I found a community where I belonged and a career path I could enjoy for the rest of my life."
    const other = "When I'm not programming, I enjoy hiking and mountain biking around Oak Mountain. I love to cook, do a little abstract painting on the side and am fascinated by psychology and philosophy. \n On the other hand, I'm a big grammar nerd who loves math and science (mostly biology and physics). I enjoy a good logic puzzle, love a good book and occasionally run a game of D&D for my kids."

    return (
        <>
            <NavbarStatic />
            <BgStatic />

            <div className="container-fluid about-me-container">
                <div className="about-me-page-bg">
                    <div className="row about-me-row">

                        <div className="about-me-section-heading col-xl-3 col-lg-12">
                            <h1 className="about-me-section-heading-text">Dev_Bio</h1>
                        </div>

                        {/* <div className="col-xl-1 col-lg-none"></div> */}

                        <div className="about-me-bio col-xl-4 col-lg-5 col-md-12">
                            <h3>Developer Bio</h3>
                            {bio?.split('\n').map((para, index) => (
                                <p key={`bio-para-${index}`}>{para}</p>
                            ))}
                        </div>
                                
                        <div className="about-me-other col-xl-4 col-lg-5 d-lg-block d-none">
                            <h3>Other Interests</h3>
                            {other?.split('\n').map((para, index) => (
                                <p key={`bio-para-${index}`}>{para}</p>
                            ))}
                        </div>

                        <div className="about-me-other-sm d-lg-none col-12">
                        <h3>Other Interests</h3>
                            {other?.split('\n').map((para, index) => (
                                <p key={`bio-para-${index}`}>{para}</p>
                            ))}
                        </div>        

                    </div>
                </div>
            </div>
        </>
    );
}


