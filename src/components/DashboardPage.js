import React from 'react';
import handleScrollTo from '../functions/handleScrollTo';

const DashboardPage = () => {
    return (
        <div id="dashboard" className="spacer spacer--welcome">
            <div className="content-container">
                <div className="section">
                    <h1 className="page-header__big page-header__big--welcome">Welcome!</h1> 
                    <div className="content-container__split content-container__split--background">                
                        <p className="text__indent">Hi! My name is James Ortiz, and this is my personal website. You can learn more about me, explore projects I've worked on, and get in contact with me.</p>
                        <p>You can navigate by scrolling, using the above header, or the button below to learn more about me.</p>
                        <button onClick={() => handleScrollTo('aboutMe')} className="button button--welcome">Next Section: About me</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default DashboardPage;