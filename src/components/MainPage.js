import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import handleScrollTo from '../functions/handleScrollTo';
import TypingTestPage from './../components/TypingTestPage';

const MainPage = () => {
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
            <TypingTestPage/>
        </div>
    )
};

export default MainPage;