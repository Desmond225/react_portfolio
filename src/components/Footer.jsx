import React from "react";

const Footer = () => (
  <footer>
    <div className="social-links">
      <a
        href="https://www.linkedin.com/in/desmond-van-zurk-6b366424/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i id="one" className="fa fa-linkedin-square" aria-hidden="true" />
      </a>
      <a
        href="https://github.com/Desmond225/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i id="two" className="fa fa-github-square" aria-hidden="true" />
      </a>

      <a
        href="https://www.freecodecamp.org/desmond225"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i id="three" className="fa fa-free-code-camp" aria-hidden="true" />
      </a>
      <a
        href="https://www.youtube.com/terefs"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i id="four" className="fa fa-youtube-square" aria-hidden="true" />
      </a>
    </div>
  </footer>
);

export default Footer;
