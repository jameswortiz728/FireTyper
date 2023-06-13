import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import handleScrollTo from '../functions/handleScrollTo';
import RedirectModal from './../components/RedirectModal';
import NotFoundPage from './../components/NotFoundPage';

const ProjectItemPage = () => {
    const location = useLocation();
    const project = location.state;

    const [liveOpen, setLiveOpen] = useState(false);
    const [sourceOpen, setSourceOpen] = useState(false);

    const openLiveModal = () => {
      setLiveOpen(true);
    }
    
    const openSourceModal = () => {
        setSourceOpen(true);
    }
    
    const closeModal = () => {
        setSourceOpen(false);
        setLiveOpen(false);
    }

    if(project === null) {
        return (
            <NotFoundPage/>
        )
    }
    
    return (
        <div>
            <div className="content-container">
                <div className="section section--project">
                    <div className="content-container__split">
                        <h1 className="page-header__big page-header__big--projectpage">{project.name}</h1>
                        <div> 
                            <div className="button__group">
                                <button className="button" onClick={openLiveModal}>Live Site</button>
                                <button className="button button--source" onClick={openSourceModal}>Source Code</button>
                                <Link to="/" state = {{ id: "projects" }}><button className="button button--secondary" onClick={() => handleScrollTo('projects')}>Go back</button></Link>
                            </div>
                            <div className="content-container__split content-container__split--projectbackground">
                                <p className="text__indent">{project.pageDescription}</p>
                            </div>   
                        </div> 
                    </div>
                    <div className="content-container__split">                
                        <img src={`/images/${project.title}.png`}/>
                    </div>
                </div>
            </div>
            <RedirectModal open={liveOpen} closeModal={closeModal} url={project.liveSite}/>
            <RedirectModal open={sourceOpen} closeModal={closeModal} url={project.sourceCode}/>  
        </div>
    )
};

export default ProjectItemPage;