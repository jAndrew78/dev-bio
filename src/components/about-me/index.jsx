import React from 'react';
import { Navbar, BgFade } from '../'
import './styles.scss';



export const AboutMe = props => {

    const bio = "I never saw myself as a computer person, but after taking a break from the mortgage industry to refinish a house, I picked up a book on Python, sat down at my computer and fell in love.\nFrom there I enrolled in a web development program with Innovate Birmingham, and here I am today. I honestly couldn't be happier looking forward to a career in the local tech industry."
    const other = "When I'm not programming, you might find me trekking through Oak Mtn on a bike or on my own two legs depending on my mood. \n I love to cook, do a little abstract painting on the side and am facinated by both psychology and philosophy. \n On the other hand, I'm a grammar nerd who loves math and science (especially physics and biology). I enjoy a good puzzle, love a good book and am an amatuer DM (mostly for my kids)."

    return (
        <>
            <Navbar />
            <BgFade />

            <div className="container-fluid about-me-container">
                <div className="about-me-page-bg">
                    <div className="row about-me-row">

                        <div className="about-me-bio col-xl-7 col-lg-12 px-5">
                            <h3>About Me</h3>
                            {bio?.split('\n').map((para, index) => (
                                <p key={`bio-para-${index}`}>{para}</p>
                            ))}
                            
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


