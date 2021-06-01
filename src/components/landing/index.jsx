import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { BgFade } from '../';
import './styles.scss';


export const Landing = props => {
    const history = useHistory();
    const [animation, setAnimation] = useState('false');

    function fadeAndLink(e) {

        setAnimation('true');
        setTimeout(() => history.push('/dev-profile'), 1500)
    }


    return (
        <>
            <BgFade />
            <div className="landing-container" animation={animation}>

                <div className="landing-picture" animation={animation}>
                    <img src="/images/headshot.png" alt="Headshot"/>
                </div>

                <div className="landing-name">Andrew Traywick</div>
                <div className="landing-title">Professional Developer</div>
                
                {/* <Link to='/dev-profile'> */}


                    <button className="landing-btn"
                            onClick={() => fadeAndLink()}
                    >
                        View Profile
                    </button>


                {/* </Link> */}
            </div>
        </>
    );
}
