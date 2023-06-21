import React from 'react';
import { startLogin } from '../firebase/firebase';
import handleScrollTo from '../functions/handleScrollTo';

const WelcomePage = () => {

    return (
        <div id="welcome" className="spacer">
            <div className="content-container">
                <div className="section">
                    <div>
                        <h1 className="page-header__big">🔥Firetyper</h1>
                    </div> 
                    <div className="content-container__login">                 
                        <div className="box-layout__box">
                            <h1 className="box-layout__title">Login</h1>
                            <p>Login below to proceed.</p> 
                            <button onClick={startLogin} className="button">Login with Google</button>
                        </div>
                        <p>-or-</p>
                        <button onClick={() => handleScrollTo('typingtest')} className="button button--welcome">Use without logging in</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default WelcomePage;