import React, { Component } from 'react';
import Intro from '../components/Intro';
import About from '../components/About';
import Work from '../components/Work';
import TextWithImage from '../components/TextWithImage';

class HomePage extends Component {
  render() {
    return (
      <div>
        <Intro />
        <TextWithImage 
          imgLeft 
          title={'Front-end web development'}
          description={'Some information about the things I do that are related to front-end web development'}
          />
        <TextWithImage 
          title={'Back-end web development'}
          description={'Some information about the things I do that are related to back-end web development'}
          />
        <About />
        <Work />
        {/* <HobbyProjects />
        <CallToAction /> */}
      </div>
  );
  }
}

export default HomePage
