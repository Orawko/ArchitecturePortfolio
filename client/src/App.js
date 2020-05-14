import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './styles/Main.css';
import './fontello/css/fontello.css';

export default function App() {
  return (
    <div className="Website">
      <main>
        <Header/>
        <Projects/>
        <About/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  );
}
