import React from 'react';
import HeaderNav from './HeaderNav';
import '../styles/Header.css';

function Header({ refs, switchLanguage }) {
  return (
    <header className="headercontainer disable-select">
      <HeaderNav refs={refs} switchLanguage={switchLanguage}/>
      <div className="headerBackground">
        <img src={require('../img/mainPage/header.jpg')} alt="Architecture building"/>
      </div>
      <div className="contentOffset">
      </div>
    </header>
  );
}

export default Header;