import React, { useContext } from 'react';
import { startLogout, startLogin } from './../firebase/firebase';
import authContext from '../context/authContext';
import handleScrollTo from '../functions/handleScrollTo';

export const Header = () => {

    const {userID, setUserID} = useContext(authContext);
    let isAuthenticated = userID === null ? false : true;

    return (
        <header className="header">
            <div className="content-container__header">
                <div className="header__content">
                    <h1 className="header__title" onClick={() => window.scrollTo(0, 0)}>🔥Firetyper</h1>
                    { isAuthenticated && <button onClick={() => handleScrollTo('testHistory')} className="button__link">Test History</button> }
                    {
                        isAuthenticated ? 
                        <div><button className="button button--header" onClick={startLogout}>Logout</button></div> 
                        : 
                        <button className="button button--header" onClick={startLogin}>Login</button>
                    } 
                </div>
            </div>
        </header>
    )
};

export default Header;