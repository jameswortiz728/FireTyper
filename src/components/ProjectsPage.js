import React, { useEffect, useReducer } from 'react';
import projectsFixture from './../fixtures/projects';
import projectsReducer from '../reducers/leaderboards';
import ProjectList from './../components/ProjectList';
import ProjectsContext from '../context/projects-context';
import handleScrollTo from '../functions/handleScrollTo';

const ProjectsPage = () => {
    const [projects, dispatch] = useReducer(projectsReducer, []);

    useEffect(() => {
        const projects = projectsFixture;
        dispatch({ type: 'POPULATE_PROJECTS', projects});
    }, []);

    return (
        <ProjectsContext.Provider value={{ projects, dispatch }}>
            <div id="projects" className="spacer">
                <div className="content-container">
                    <div className="section">
                        <div>
                            <h1 className="page-header__big page-header__big--projects">Projects</h1>
                            <p>Click or tap on each box to learn more about each project.</p>
                            <div className="show-for-desktop"><button onClick={() => handleScrollTo('resume')} className="button button--projects">Next Section: Resume</button></div>
                        </div> 
                        <div className="content-container__split">                
                            <ProjectList/>
                            <div className="show-for-mobile"><button onClick={() => handleScrollTo('resume')} className="button button--projects">Next Section: Resume</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </ProjectsContext.Provider>
    )
};

export default ProjectsPage;