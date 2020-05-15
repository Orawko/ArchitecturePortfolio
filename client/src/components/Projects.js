import React, { useRef } from 'react';
import '../styles/Projects.css';
import Project from '../components/Project';
import data from '../data/projects.json';

function Projects({ setRef, openGallery }) {
  const projectsRef = useRef();

  React.useEffect(() => {
    setRef(projectsRef);
  }, [setRef]);

  return (
    <div className="container" ref={projectsRef}>
      <h2 className="sectionHeader">PROJECTS</h2>
      <div className="projects">
        <Project data={data.sport_centre} openGallery={openGallery} number={0}/>
        <Project data={data.sport_centre} openGallery={openGallery} number={1}/>
        <Project data={data.sport_centre} openGallery={openGallery} number={2}/>
        <Project data={data.sport_centre} openGallery={openGallery} number={3}/>
      </div>
    </div>
  );
}

export default Projects;