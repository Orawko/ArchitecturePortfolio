import React, { useContext, useRef } from 'react';
import { LanguageContext } from '../providers/LanguageProvider';
import dataENG from '../data/eng.json';
import dataPL from '../data/pl.json';
import '../styles/About.css';

function About({ setRef }) {
  const aboutmeRef = useRef();
  const language = useContext(LanguageContext);
  const data = language === 'eng' ? dataENG : dataPL;

  React.useEffect(() => {
    setRef(aboutmeRef);
  }, [setRef]);

  return (
    <div className="container disable-select" ref={aboutmeRef}>
      <h2 className="sectionHeader">{data.headers.aboutMe}</h2>
      <div className="aboutMe">
        <div className="aboutMePhoto">
          <img src={require('../img/mainPage/aboutMePhoto.jpg')} alt="Me"/>
        </div>
        <div className="aboutMeText">
          <p>{data.aboutMe.description}</p>
        </div>
      </div>
    </div>
  );
}

export default About;