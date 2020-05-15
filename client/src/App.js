import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './styles/Main.css';
import './fontello/css/fontello.css';

export default function App() {
  let [projectsRef, aboutmeRef, contactRef] = useState(0);

  const setProjectsRef = (ref) => projectsRef = ref;
  const setAboutmeRef = (ref) => aboutmeRef = ref;
  const setContactRef = (ref) => contactRef = ref;

  const getContactRef = () => contactRef;
  const getAboutmeRef = () => aboutmeRef;
  const getProjectsRef = () => projectsRef;

  return (
    <div className="Website">
      <Header projectsRef={getProjectsRef} aboutmeRef={getAboutmeRef} contactRef={getContactRef}/>
      <main>
        <Projects setRef={setProjectsRef.bind(this)}/>
        <About setRef={setAboutmeRef.bind(this)}/>
        <Contact setRef={setContactRef.bind(this)}/>
      </main>
      <footer>
        &copy; Bartłomiej Orawiec 2020 <a href="https://github.com/Orawko">Github</a>
      </footer>
    </div>
  );
}
