import React from 'react';
import HeaderNav from './HeaderNav';

function Header({ projectsRef, aboutmeRef, contactRef }) {
  return (
    <header className="headercontainer">
      <HeaderNav projectsRef={projectsRef} aboutmeRef={aboutmeRef} contactRef={contactRef}/>
      <div className="headerBackground">
        <img src={require('../img/header.jpg')} alt="Architecture building"/>
      </div>
      <div className="contentOffset">
      </div>
    </header>
  );
}

export default Header;