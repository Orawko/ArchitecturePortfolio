import React from 'react';
import HeaderNav from './HeaderNav';

function Header() {
  return (
    <div className="headercontainer">
      <HeaderNav/>
      <div className="headerBackground">
        <img src={require('../img/header.jpg')} alt="Architecture building"/>
      </div>
    </div>
  );
}

export default Header;