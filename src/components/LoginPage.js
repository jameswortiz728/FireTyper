import React from 'react';
import { startLogin } from './../firebase/firebase';

const LoginPage = () => {

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
                        <p>Click here to proceed without logging in (leaderboards disabled)</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default LoginPage;