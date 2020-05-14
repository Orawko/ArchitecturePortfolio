import React from 'react';
import '../styles/Projects.css';
import Project from '../components/Project';
import data from '../data/projects.json';

function Projects() {
  return (
    <div className="container">
      <h1 className="sectionHeader">PROJECTS</h1>
      <div className="projects">
        <Project data={data.sport_centre}/>
        <Project data={data.sport_centre}/>
        <Project data={data.sport_centre}/>
        <Project data={data.sport_centre}/>
      </div>
    </div>
  );
}

export default Projects;