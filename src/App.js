import React, { Component } from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/Main'
import { Link } from 'react-router-dom';
import Particles from 'react-particles-js';

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800,
      }
    }
  }
}

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
      <Particles className="particles"
      params={particlesOptions}
      />
          <Layout>
              <Header className="header-color" title=" " scroll>
                  <Navigation>
                      <Link to="/">Home</Link>
                      <Link to="/Resume">Resume</Link>
                      <Link to="/AboutMe">About Me</Link>
                      <Link to="/Projects">Projects</Link>
                      <Link to="/Contacts">Contacts</Link>
                  </Navigation>
              </Header>
              <Drawer title="Title">
                  <Navigation>
                  <Link to="/">Home</Link>
                  <Link to="/Resume">Resume</Link>
                  <Link to="/AboutMe">About Me</Link>
                  <Link to="/Projects">Projects</Link>
                  <Link to="/Contacts">Contacts</Link>
                  </Navigation>
              </Drawer>
              <Content>
                  <div className="page-content" />
                  <Main/>
              </Content>
          </Layout>
      </div>
    );
  }
}

export default App;
