import React, { useContext, useRef } from 'react';
import '../styles/Contact.css';
import { LanguageContext } from '../providers/LanguageProvider';
import dataENG from '../data/eng.json';
import dataPL from '../data/pl.json';

function Contact({ setRef }) {
  const contactRef = useRef();
  const language = useContext(LanguageContext);
  const data = language === 'eng' ? dataENG : dataPL;

  React.useEffect(() => {
    setRef(contactRef);
  }, [setRef]);

  return (
    <div className="container" ref={contactRef}>
      <h2 className="sectionHeader disable-select">{data.headers.contact}</h2>
      <div className="contact">
        <div>
          <i className="icon-mail contactIcon"/>
          <h3 className="contactValue"><a href="mailto:edytamakowiec@gmail.com">edytamakowiec@gmail.com</a></h3>
        </div>
        <div>
          <i className="icon-phone contactIcon"/>
          <h3 className="contactValue">
            <a href="tel:+48507501862">+48 507 501 862</a>
          </h3>
        </div>
        <div>
          <i className="icon-instagram contactIcon"/>
          <h3 className="contactValue">
            <a href="https://www.instagram.com/world.of.watercolor/"
               target="_blank"
               rel="noopener noreferrer">
              Instagram</a>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Contact;