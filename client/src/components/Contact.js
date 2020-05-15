import React, { useRef } from 'react';
import '../styles/Contact.css';

function Contact({ setRef }) {
  const contactRef = useRef();
  setRef(contactRef);
  return (
    <div className="container" ref={contactRef}>
      <h2 className="sectionHeader">CONTACT</h2>
      <div className="contact">
        <div>
          <i className="icon-mail contactIcon"/>
          <h3 className="contactValue"><a href="mailto:edyta@gmail.com">edyta@gmail.com</a></h3>
        </div>
        <div>
          <i className="icon-phone contactIcon"/>
          <h3 className="contactValue"><a href="tel:+48 999 999 000">+48 999 999 000</a></h3>
        </div>
      </div>
    </div>
  );
}

export default Contact;