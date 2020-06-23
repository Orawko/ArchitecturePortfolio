import React, { useContext } from 'react';
import { LanguageContext } from '../providers/LanguageProvider';
import dataENG from '../data/eng.json';
import dataPL from '../data/pl.json';


function HeaderNav({ refs, switchLanguage }) {
  const language = useContext(LanguageContext);
  const data = language === 'eng' ? dataENG : dataPL;

  const handleScrollToProjects = () => {
    window.scrollTo({
      top: refs.projects().current.offsetTop,
      behavior: 'smooth',
    });
  };

  const handleScrollToAboutme = () => {
    window.scrollTo({
      top: refs.aboutMe().current.offsetTop,
      behavior: 'smooth',
    });
  };

  const handleScrollToContact = () => {
    window.scrollTo({
      top: refs.contact().current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <div className="headerNav">
      <h1 className="title">
        EDYTA
        <br/>
        MAKOWIEC
      </h1>
      <nav>
        <div onClick={handleScrollToProjects}>
          {data.headers.projects}
        </div>
        <div onClick={handleScrollToAboutme}>
          {data.headers.aboutMe}
        </div>
        <div onClick={handleScrollToContact}>
          {data.headers.contact}
        </div>
        <div className="flagIconContainer" onClick={() => switchLanguage()}>
          {language === 'eng'
            ? <img src={require('../img/flagIcon/pl.svg')} alt="Zmień język na Polski"/>
            : <img src={require('../img/flagIcon/eng.svg')} alt="Change language to English"/>}
        </div>
      </nav>
    </div>
  );
}

export default HeaderNav;