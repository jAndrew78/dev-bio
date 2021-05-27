import React from 'react';
import './styles.scss';

import { Navbar } from '../navbar/index.jsx'


export const Profile = props => {
    return (
        <>
            <Navbar />

            <div className="container-fluid profile-container">
                <div className="profile-bg" />
                <div className="profile-bg-fade" />

                <div className="row profile-row">
                    <div className="col-md-12 col-sm-none profile-col-wide d-flex justify-content-center">
                        <div className="profile-link">
                            <div className="profile-picture">
                                <img src="/images/headshot.png" alt="Headshot"/>
                            </div>
                        </div>
                        <div className="profile-link">
                            <div className="profile-picture">
                                <img src="/images/headshot.png" alt="Headshot"/>
                            </div>
                        </div>
                        <div className="profile-link">
                            <div className="profile-picture">
                                <img src="/images/headshot.png" alt="Headshot"/>
                            </div>
                        </div>
                        <div className="profile-link">
                            <div className="profile-picture">
                                <img src="/images/headshot.png" alt="Headshot"/>
                            </div>
                        </div>
                    </div>
                </div>
                
                


            </div>
        </>
    );
}
