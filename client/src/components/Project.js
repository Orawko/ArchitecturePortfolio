import React from 'react';

function Project({ data, openGallery }) {
  return (
    <div className="project">
      <article className="projectSpecs">
        <h3 className="projectTitle">{data.title}</h3>
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
            <h3>
              <a href={`https://www.google.com/maps/@${data.details.lat},${data.details.lng},${data.details.zoom}z`}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="detailValue">{data.details.location}</a>
            </h3>
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
      </article>
      <div className="projectPhoto" onClick={() => openGallery(data.index)}>
        <img src={require(`../img/mainPage/${data.img}`)} alt={data.alt}/>
      </div>
    </div>
  );
}

export default Project;