import React from 'react';
import { startLogin } from '../firebase/firebase';
import handleScrollTo from '../functions/handleScrollTo';

const WelcomePage = () => {

    return (
        <div id="login" className="spacer spacer--topPage">
            <div className="content-container">
                <div className="section">
                    <h1 className="page-header__big">🔥Firetyper</h1> 
                    <div className="content-container__split">                
                        <div className="box-layout__box">
                            <h1 className="box-layout__title">Login</h1>
                            <p>Login below to proceed.</p> 
                            <button onClick={startLogin} className="button">Login with Google</button>
                        </div>
                        <p>-or-</p>
                        <button onClick={() => handleScrollTo('typingtest')} className="button button--welcome">Use without logging in</button>
                        <p>(Features limited)</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default WelcomePage;