import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import frontEndLogo from '../img/logo/code.png';

const TextWithImage = ({ imgLeft, title, description }) => {
  return (
    <section className="textwithimage">
      {imgLeft ? (
        <Container>
          <Row>
            <Col sm={6}>
              <h2>{title}</h2>
              <div>{description}</div>
              <h5>Languages and libraries I use</h5>
                <div>
                  HTML5, (S)CSS, Javascript, TypeScript, React, Redux, NextJS
                </div>
                <h5>Tools I use</h5>
                <Row>
                  <Col sm={6}>
                    <ul>
                      <li>Amazon Web Services (AWS)</li>
                      <li>Bitbucket</li>
                      <li>Bootstrap</li>
                      <li>CI/CD</li>
                      <li>Cookies/JWT</li>
                      <li>Enzyme</li>
                      <li>Figma</li>
                      <li>Github</li>

                    </ul>
                  </Col>
                  <Col sm={6}>
                    <ul>
                        <li>Jest</li>
                      <li>NPM/Yarn</li>
                      <li>Progressive web apps (PWA)</li>
                      <li>Tower</li>
                      <li>Visual Studio Code</li>
                      <li>Wordpress</li>
                      <li>ZSH</li>
                    </ul>
                  </Col>
                </Row>
            </Col>
            <Col sm={2}></Col>
            <Col sm={4}>
              <div className="textwithimage__img">
                <img src={frontEndLogo} alt="" class="w-100"/>
              </div>
            </Col>
          </Row>
        </Container>
      ) : (
        <Container>
          <Row>
            <Col sm={4}>
              <div className="textwithimage__img">
                <h5>Languages and libraries I use</h5>
                <div>
                  PHP, Laravel, MySQL, Postgres, Javascript, Node, Express,
                  Python, Django
                </div>
                <h5>Tools I use</h5>
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
            </Col>
            <Col sm={2}></Col>
            <Col sm={6}>
              <h2>{title}</h2>
              <div>{description}</div>
            </Col>
          </Row>
        </Container>
      )}
    </section>
  );
};

export default TextWithImage;
