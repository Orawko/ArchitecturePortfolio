import React from 'react';
import about from '../data/about.json';
import '../styles/About.css';

function About() {
  return (
    <div className="container">
      <h1 className="sectionHeader">ABOUT ME</h1>
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