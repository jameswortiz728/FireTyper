import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import handleScrollTo from '../functions/handleScrollTo';
import WelcomePage from './WelcomePage';
import TypingTestPage from './../components/TypingTestPage';

const LandingPage = () => {
    const location = useLocation();

    useEffect(() => {
        if(location.state) {
            setTimeout(() => handleScrollTo(location.state.id), 50);
        } else {
            setTimeout(() => window.scrollTo(0, 0) , 50);
        }
    }); 

    return (
        <div>
            <WelcomePage/>
            <TypingTestPage/>
        </div>
    )
};

export default LandingPage;