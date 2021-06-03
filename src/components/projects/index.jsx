import React from 'react';
import { NavbarStatic, BgStatic } from '../'
import './styles.scss';


export const Projects = (props, direction) => {

    return (
        <>
            <NavbarStatic />
            <BgStatic />

            <div className="container-fluid projects-container">
                <div className="projects-page-bg">
                    <div className="row header-row">

                        <div className="projects-section-heading col-12">
                            <h1 className="projects-section-heading-text">Dev_Projects</h1>
                        </div>

                        <div className="row projects-row">
                            <div className="col-12 project-item">
                                <img src="/images/innovate.png" alt="project thumb" />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                            <div className="col-12 project-item">
                                <img src="/images/netflix.png" alt="project thumb" />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                            <div className="col-12 project-item">
                                <img src="/images/amazon.png" alt="project thumb" />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                            <div className="col-12 project-item">
                                <img src="/images/github.png" alt="project thumb" />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                            {/* <div className="col-6">
                            </div> */}
                        </div>




                    </div>
                </div>
            </div>
        </>
    )
}