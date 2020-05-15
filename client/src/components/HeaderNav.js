import React from 'react';

function HeaderNav({ projectsRef, aboutmeRef, contactRef }) {

  const handleScrollToProjects = () => {
    window.scrollTo({
      top: projectsRef().current.offsetTop,
      behavior: 'smooth',
    });
  };

  const handleScrollToAboutme = () => {
    window.scrollTo({
      top: aboutmeRef().current.offsetTop,
      behavior: 'smooth',
    });
  };

  const handleScrollToContact = () => {
    window.scrollTo({
      top: contactRef().current.offsetTop,
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
          PROJECTS
        </div>
        <div onClick={handleScrollToAboutme}>
          ABOUT ME
        </div>
        <div onClick={handleScrollToContact}>
          CONTACT
        </div>
      </nav>
    </div>
  );
}

export default HeaderNav;