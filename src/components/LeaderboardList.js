import React, { useContext } from 'react';
import ProjectListItem from './LeaderboardListItem';
import ProjectsContext from '../context/wordListContext';

const ProjectList = () => {
    const { projects } = useContext(ProjectsContext);

    return projects.map((project)=> (
        <ProjectListItem key={project.title} project={project}/>
    ))
};

export { ProjectList as default };