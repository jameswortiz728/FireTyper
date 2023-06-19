import React from 'react';
import { startLogout } from './../firebase/firebase';

export const Header = () => {

    return (
        <header className="header">
            <div className="content-container__header">
                <div className="header__content">
                    <h1 className="header__title">🔥Firetyper</h1>
                    <button className="button button--header" onClick={startLogout}>Logout</button>
                </div>
            </div>
        </header>
    )
};

export default Header;