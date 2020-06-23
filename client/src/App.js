import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './styles/Main.css';
import './fontello/css/fontello.css';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import imagePaths from './data/projectImgPaths';
import { LanguageContext } from './providers/LanguageProvider';
import ScrollUpButton from 'react-scroll-up-button';

const browserLanguage = window.navigator.userLanguage || window.navigator.language;

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
      projectsRef: null,
      aboutmeRef: null,
      contactRef: null,
      galleryPhotos: null,
      language: browserLanguage === 'pl-PL' ? 'pl' : 'eng',
    };
  }

  setProjectsRef = (ref) => this.setState({ projectsRef: ref });
  setAboutMeRef = (ref) => this.setState({ aboutmeRef: ref });
  setContactRef = (ref) => this.setState({ contactRef: ref });

  getAboutMeRef = () => this.state.aboutmeRef;
  getProjectsRef = () => this.state.projectsRef;
  getContactRef = () => this.state.contactRef;

  gotoPrevious = () => {
    const { photoIndex, galleryPhotos } = this.state;
    this.setState({ photoIndex: (photoIndex + galleryPhotos.length - 1) % galleryPhotos.length });
  };

  gotoNext = () => {
    const { photoIndex, galleryPhotos } = this.state;
    this.setState({ photoIndex: (photoIndex + 1) % galleryPhotos.length });
  };

  closeViewer = () => {
    this.setState({ isOpen: false, photoIndex: 0 });
  };

  openGallery = projectNumber => {
    this.setState({
      isOpen: true,
      galleryPhotos: imagePaths[projectNumber],
    });
  };

  switchLanguage = () => {
    this.state.language === 'eng' ? this.setState({ language: 'pl' }) : this.setState({ language: 'eng' });
  };

  render() {
    const { photoIndex, isOpen, galleryPhotos } = this.state;

    return (
      <LanguageContext.Provider value={this.state.language}>
        <div className="Website">
          <Header
            refs={{ projects: this.getProjectsRef, aboutMe: this.getAboutMeRef, contact: this.getContactRef }}
            switchLanguage={this.switchLanguage}
          />
          <main>
            <Projects setRef={this.setProjectsRef} openGallery={this.openGallery}/>
            <About setRef={this.setAboutMeRef}/>
            <Contact setRef={this.setContactRef}/>
          </main>
          <footer className="disable-select">
            &copy; {` Bartłomiej Orawiec 2020 `}
            <a href="https://github.com/Orawko" target="_blank" rel="noopener noreferrer">Github</a>
          </footer>
          <ScrollUpButton
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              borderRadius: '10px',
            }}
          />
        </div>

        {isOpen && (
          <Lightbox
            mainSrc={galleryPhotos[photoIndex]}
            nextSrc={galleryPhotos[(photoIndex + 1) % galleryPhotos.length]}
            prevSrc={galleryPhotos[(photoIndex + galleryPhotos.length - 1) % galleryPhotos.length]}
            onCloseRequest={() => this.closeViewer()}
            onMovePrevRequest={() => this.gotoPrevious()}
            onMoveNextRequest={() => this.gotoNext()}
          />
        )}
      </LanguageContext.Provider>
    );
  }
}
