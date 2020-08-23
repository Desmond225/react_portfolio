import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Technologies = () => {
    return (
        <section className="technologies">
            <Container>
                <div className="technologies__grid">

                <div className="technologies__item">
              <h2>Front end</h2>
              <div>bla</div>
              <h5>Languages and libraries</h5>
                <div>
                  HTML5, (S)CSS, Javascript, TypeScript, React, Redux, NextJS
                </div>
                <h5>Tools</h5>
                <Row>
                  <Col sm={6}>

                    <ul>
                      <li>Amazon Web Services (AWS)</li>
                      <li>Bitbucket</li>
                      <li>Bootstrap</li>
                      <li>CI/CD</li>
                      <li>Enzyme</li>
                      <li>Figma</li>
                      <li>Github</li>
                      <li>Jest</li>
                    </ul>

                  </Col>
                  <Col sm={6}>

                    <ul>

                      <li>NPM/Yarn</li>
                      <li>Progressive web apps (PWA)</li>
                      <li>Tower</li>
                      <li>Visual Studio Code</li>
                      <li>Webpack</li>
                      <li>Wordpress</li>
                      <li>ZSH</li>
                    </ul>

                  </Col>
                </Row>
                </div>



                 <div className="technologies__item">
                 <h2>Back end</h2>
              <div>bla</div>
                <h5>Languages and libraries</h5>
                <div>
                  PHP, Laravel, MySQL, Postgres, Javascript, Node, Express,
                  Python, Django
                </div>
                <h5>Tools</h5>
                <Row>
                  <Col sm={6}>
                    <ul>
                      <li>Docker</li>
                      <li>Kubernetes</li>
                      <li>OctoberCMS</li>
                      <li>Postman</li>
                    </ul>
                  </Col>
                  <Col sm={6}>
                      <ul>
                        <li>Redis</li>
                        <li>Psequel</li>
                        <li>Sentry</li>
                        <li>Sequel pro</li>
                      </ul>
                  </Col>
                </Row>
            </div>

            </div>
            </Container>
        </section>
    );
};

export default Technologies;