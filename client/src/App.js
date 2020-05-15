import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './styles/Main.css';
import './fontello/css/fontello.css';
import ImgsViewer from 'react-images-viewer';
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
    this.setState({ photoIndex: this.state.photoIndex - 1 });
  };

  gotoNext = () => {
    this.setState({ photoIndex: this.state.photoIndex + 1 });
  };

  closeViewer = () => {
    this.setState({ isOpen: false });
  };

  openGallery = projectNumber => {
    this.setState({
      isOpen: true,
      galleryPhotos: paths[projectNumber],
    });
  };

  render() {
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
        <ImgsViewer
          imgs={this.state.galleryPhotos}
          currImg={this.state.photoIndex}
          isOpen={this.state.isOpen}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          onClose={this.closeViewer}
        />
      </Fragment>
    );
  }
}
