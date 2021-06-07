import React from 'react';
import { NavbarStatic, BgStatic } from '../'
import './styles.scss';


export const Contact = props => {

    return (
        <>
            <NavbarStatic />
            <BgStatic />

            <div className="container-fluid profile-container">
                <div className="profile-page-bg">
                    <div className="row profile-row">

                        <div className="profile-section-heading col-lg-3 col-md-12">
                            <h1 className="profile-section-heading-text">Dev_Contact</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}