import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import DashboardPage from './../components/DashboardPage';
import AboutMePage from './../components/AboutMePage';
import ContactMePage from './../components/ContactMePage';
import ResumePage from './../components/ResumePage';
import ProjectsPage from './../components/ProjectsPage';
import handleScrollTo from '../functions/handleScrollTo';

const MainPage = () => {
    const location = useLocation();

    useEffect(() => {
        if(location.state) {
            setTimeout(() => handleScrollTo(location.state.id), 50);
        }
    }); 

    return (
        <div>
            <DashboardPage/>
            <AboutMePage/>
            <ProjectsPage/>
            <ResumePage/>
            <ContactMePage/>
        </div>
    )
};

export default MainPage;