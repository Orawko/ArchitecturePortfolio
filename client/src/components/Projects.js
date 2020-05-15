import React, { useRef } from 'react';
import '../styles/Projects.css';
import Project from '../components/Project';
import data from '../data/projects.json';

function Projects({ setRef }) {
  const projectsRef = useRef();

  React.useEffect(() => {
    setRef(projectsRef);
  }, []);

  return (
    <div className="container" ref={projectsRef}>
      <h2 className="sectionHeader">PROJECTS</h2>
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