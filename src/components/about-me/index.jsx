import React from 'react';
import { NavbarStatic, BgStatic } from '../'
import './styles.scss';



export const AboutMe = props => {

    const bio = "I never saw myself as a computer person, but after taking a break from my career to refinish a house, I picked up a book on Python, sat down at my computer and fell in love.\n From there I enrolled in a web development program with Innovate Birmingham, which well exceeded my expectations, and here I am today, looking forward to a career in the local tech industry."
    // const other = "When I'm not programming, you might find me trekking through Oak Mtn on a bike or on my own two legs depending on my mood. \n I love to cook, do a little abstract painting on the side and am facinated by both psychology and philosophy. \n On the other hand, I'm a grammar nerd who loves math and science (especially physics and biology). I enjoy a good puzzle, love a good book and am an amatuer DM (mostly for my kids)."
    const other = "When I'm not programming, you'll likely find me hiking or mountain biking around Oak Mountain. I ike to cook, do a little abstract painting on the side and am interested in psychology and philosophy. \n On the other hand, I'm a grammar nerd who loves math and science. I enjoy a good logic puzzle, love a good book and am an amatuer DM (mostly for my kids)."

    return (
        <>
            <NavbarStatic />
            <BgStatic />

            <div className="container-fluid about-me-container">
                <div className="about-me-page-bg">
                    <div className="row about-me-row">

                        <div className="about-me-section-heading col-lg-3 col-md-12">
                            <h1 className="about-me-section-heading-text">About_Me</h1>
                        </div>

                        {/* <div className="col-xl-1 col-lg-none"></div> */}

                        {/* <div className="about-me-bio col-xl-7 col-lg-12 px-5">
                        </div> */}

                        <div className="about-me-bio col-xl-4 col-lg-4 col-md-12">
                            <h3>Developer Bio</h3>
                            {bio?.split('\n').map((para, index) => (
                                <p key={`bio-para-${index}`}>{para}</p>
                            ))}
                        </div>
                                
                        <div className="about-me-other col-xl-4 col-lg-4 d-lg-block d-none">
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


