import React from 'react';

function Project({ data }) {
  return (
    <div className="project">
      <div className="projectSpecs">
        <h1 className="projectTitle">{data.title}</h1>
        <p className="projectDescription">
          {data.description}
        </p>
        <div className="projectDetails">
          <div>
            <i className="icon-warehouse detailIcon"/>
            <h3 className="detailValue">{data.details.type}</h3>
          </div>
          <div>
            <i className="icon-location detailIcon"/>
            <h3 className="detailValue">{data.details.location}</h3>
          </div>
          <div>
            <i className="icon-calendar detailIcon"/>
            <h3 className="detailValue">{data.details.date}</h3>
          </div>
          <div>
            <i className="icon-pencil detailIcon"/>
            <h3 className="detailValue">{data.details.tools}</h3>
          </div>
        </div>
      </div>
      <div className="projectPhoto">
        <img src={require(`../img/${data.img}`)} alt="Architecture building"/>
      </div>
    </div>
  );
}

export default Project;