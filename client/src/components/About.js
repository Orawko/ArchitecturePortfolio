import React, { useRef } from 'react';
import about from '../data/about.json';
import '../styles/About.css';

function About({ setRef }) {
  const aboutmeRef = useRef();

  React.useEffect(() => {
    setRef(aboutmeRef);
  }, [setRef]);

  return (
    <div className="container" ref={aboutmeRef}>
      <h2 className="sectionHeader">ABOUT ME</h2>
      <div className="aboutMe">
        <div className="aboutMePhoto">
          <img src={require('../img/aboutMePhoto.png')} alt="Me"/>
        </div>
        <div className="aboutMeText">
          <p>{about.description}</p>
        </div>
      </div>
    </div>
  );
}

export default About;