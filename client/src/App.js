import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './styles/Main.css';
import './fontello/css/fontello.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
      projectsRef: null,
      aboutmeRef: null,
      contactRef: null,
    };
  }

  setProjectsRef = (ref) => this.setState({ projectsRef: ref });
  setAboutmeRef = (ref) => this.setState({ aboutmeRef: ref });
  setContactRef = (ref) => this.setState({ contactRef: ref });

  getAboutmeRef = () => this.state.aboutmeRef;
  getProjectsRef = () => this.state.projectsRef;
  getContactRef = () => this.state.contactRef;

  render() {
    return (
      <div className="Website">
        <Header projectsRef={this.getProjectsRef} aboutmeRef={this.getAboutmeRef} contactRef={this.getContactRef}/>
        <main>
          <Projects setRef={this.setProjectsRef}/>
          <About setRef={this.setAboutmeRef}/>
          <Contact setRef={this.setContactRef}/>
        </main>
        <footer>
          &copy; Bartłomiej Orawiec 2020 <a href="https://github.com/Orawko">Github</a>
        </footer>
      </div>
    );
  }
}
