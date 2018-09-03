import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';

class LandingPage extends Component {
  render() {
    return (
    <div style={{width:'100%', margin: 'auto'}}>
    <Grid className='landing-grid'>
      <Cell col={12}>
        <img
        src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
        alt="avatar"
        className="avatar-image"
        />
        <div className="banner-text">
          <h1>Desmond van Zurk</h1>
          <hr/>
          <p>Front end web developer (HTML | CSS | Bootstrap | JavaScript | React)</p>
          <div className="social-links">
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/desmond-van-zurk-6b366424/" target="_blank" rel="noopener noreferrer">
            <i id="one" className="fa fa-linkedin-square" aria-hidden="true" />
          </a>
          {/* GitHub*/}
          <a href="https://github.com/Desmond225/" target="_blank" rel="noopener noreferrer">
            <i id="two" className="fa fa-github-square" aria-hidden="true" />
          </a>
          {/* FreeCodeCamp */}
          <a href="https://www.freecodecamp.org/desmond225" target="_blank" rel="noopener noreferrer">
            <i id="three" className="fa fa-free-code-camp" aria-hidden="true" />
          </a>
          {/* YouTube */}
          <a href="https://www.youtube.com/terefs" target="_blank" rel="noopener noreferrer">
            <i id="four" className="fa fa-youtube-square" aria-hidden="true" />
          </a>

          </div>
        </div>
      </Cell>
    </Grid>
    </div>
  );
  }
}

export default LandingPage
