import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';


export const Landing = props => {
    const [animation, setAnimation] = useState('false');

    return (
        <div className="landing-container">
            <div className="landing-bg-fade" />
            <div className="landing-bg" />

            <div className="landing-picture" animation={animation}>
                <img src="/images/headshot.png" alt="Headshot"/>
            </div>

            <div className="landing-name">Andrew Traywick</div>
            <div className="landing-title">Professional Developer</div>
            
            <Link to='/profile'>
                <button className="landing-btn"
                        onClick={() => setAnimation('true')}
                >
                    View Profile
                </button>
            </Link>
        </div>
    );
}
