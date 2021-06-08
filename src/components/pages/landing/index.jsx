import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { BgFade, ITyped } from '../../';
import './styles.scss';


export const Landing = props => {
    const history = useHistory();
    const [animation, setAnimation] = useState('false');

    function fadeAndLink() {
        setAnimation('true');
        setTimeout(() => history.push('/dev-profile'), 1250)
    }

    return (
        <>
            <BgFade />
            
            <div className="landing-container" animation={animation}>

                <div className="landing-picture">
                    <img src="/images/headshot.png" alt="Headshot"/>
                </div>

                <div className="landing-name">Andrew Traywick</div>
                <div className="landing-title">
                    <ITyped />
                    <span className="landing-space-before">Developer</span>
                </div>
                
                <button className="landing-btn" onClick={() => fadeAndLink()}>
                    View Profile
                </button>

            </div>
        </>
    );
}
