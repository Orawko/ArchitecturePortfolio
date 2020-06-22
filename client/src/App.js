import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './styles/Main.css';
import './fontello/css/fontello.css';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import paths from './data/projectImgPaths';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
      projectsRef: null,
      aboutmeRef: null,
      contactRef: null,
      galleryPhotos: paths[0],
    };
  }

  setProjectsRef = (ref) => this.setState({ projectsRef: ref });
  setAboutmeRef = (ref) => this.setState({ aboutmeRef: ref });
  setContactRef = (ref) => this.setState({ contactRef: ref });

  getAboutmeRef = () => this.state.aboutmeRef;
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
      galleryPhotos: paths[projectNumber],
    });
  };

  render() {
    const { photoIndex, isOpen, galleryPhotos } = this.state;

    return (
      <Fragment>
        <div className="Website">
          <Header projectsRef={this.getProjectsRef} aboutmeRef={this.getAboutmeRef} contactRef={this.getContactRef}/>
          <main>
            <Projects setRef={this.setProjectsRef} openGallery={this.openGallery}/>
            <About setRef={this.setAboutmeRef}/>
            <Contact setRef={this.setContactRef}/>
          </main>
          <footer>
            &copy; Bartłomiej Orawiec 2020 <a href="https://github.com/Orawko">Github</a>
          </footer>
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
      </Fragment>
    );
  }
}
