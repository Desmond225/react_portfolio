import React, { Component } from 'react';
import Intro from '../components/Intro';
import About from '../components/About';
import Work from '../components/Work';

class HomePage extends Component {
  render() {
    return (
      <div>
        <Intro />
        <About />
        <Work />
        {/* <HobbyProjects />
        <CallToAction /> */}
      </div>
  );
  }
}

export default HomePage
