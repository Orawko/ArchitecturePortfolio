import React, { useContext, useRef } from 'react';
import { LanguageContext } from '../providers/LanguageProvider';
import dataENG from '../data/eng.json';
import dataPL from '../data/pl.json';
import '../styles/Projects.css';
import Project from '../components/Project';

function Projects({ setRef, openGallery }) {
  const language = useContext(LanguageContext);
  const projectsRef = useRef();
  const data = language === 'eng' ? dataENG : dataPL;

  React.useEffect(() => {
    setRef(projectsRef);
  }, [setRef]);

  return (
    <div className="container disable-select" ref={projectsRef}>
      <h2 className="sectionHeader">{data.headers.projects}</h2>
      <div className="projects">
        <Project data={data.projects.source_of_inspiration} openGallery={openGallery}/>
        <Project data={data.projects.sport_centre} openGallery={openGallery}/>
        <Project data={data.projects.regietow} openGallery={openGallery}/>
        <Project data={data.projects.bagry} openGallery={openGallery}/>
      </div>
    </div>
  );
}

export default Projects;