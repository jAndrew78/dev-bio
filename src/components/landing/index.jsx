import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BgFade } from '../';
import './styles.scss';


export const Landing = props => {
    const [animation, setAnimation] = useState('false');

    return (
        <>
            <BgFade />
            <div className="landing-container">

                <div className="landing-picture" animation={animation}>
                    <img src="/images/headshot.png" alt="Headshot"/>
                </div>

                <div className="landing-name">Andrew Traywick</div>
                <div className="landing-title">Professional Developer</div>
                
                <Link to='/dev-profile'>
                    <button className="landing-btn"
                            onClick={() => setAnimation('true')}
                    >
                        View Profile
                    </button>
                </Link>
            </div>
        </>
    );
}
