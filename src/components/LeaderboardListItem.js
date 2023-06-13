import React from 'react';
import { Link } from 'react-router-dom';

const ProjectListItem = ({ project }) => {

  return (
    <Link 
      className="list-item" 
      to={{ pathname: `/projects/${project.title}`}} 
      state = { project }
    >
      <div>
        <h3 className="text__coloritemheader">{project.name}</h3>
        <p>{project.listDescription}</p>
      </div>
    </Link> 
  )
};

export { ProjectListItem as default };