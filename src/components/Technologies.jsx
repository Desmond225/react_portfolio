import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Technologies = () => {
  return (
    <section className="technologies">
      <Container fluid>
        <div className="technologies__grid">
          <div className="technologies__item">
            <h3 className="technologies__item--title">Front end</h3>
            <p className="technologies__item--description">Ranging from fully responsive, mobile first webshops to progressive web apps and single page applications.
            </p>
            <hr className="technologies__item--hr" />
            <div className="my-3 technologies__item--libraries">
              <h6 className="technologies__item--title">
                Languages and libraries
              </h6>

              <p>
                HTML5, (S)CSS, Javascript, TypeScript, React, Redux, NextJS,
                Twig
              </p>
            </div>

            <h6 className="technologies__item--title">Tools</h6>
          <Row style={{fontSize: '12px'}}>
              <Col sm={6}>
                <ul>
                  <li>Amazon Web Services</li>
                  <li>Bitbucket</li>
                  <li>Bootstrap</li>
                  <li>CI/CD</li>
                  <li>Enzyme</li>
                  <li>Figma</li>
                  <li>Github</li>
             
                </ul>
              </Col>
              <Col sm={6}>
                <ul>
                  <li>Jest</li>
                  <li>NPM/Yarn</li>
                  <li>Progressive web apps</li>
                  <li>Tower</li>
                  <li>Visual Studio Code</li>
                  <li>Webpack</li>
                  <li>ZSH</li>
                </ul>
              </Col>
            </Row>
          </div>

          <div className="technologies__item">
            <h3 className="technologies__item--title">Back end</h3>
            <p className="technologies__item--description">Functionalities for your websites like interactive maps, sales quotations and marketing automation. 
            </p>
            <hr className="technologies__item--hr" />
            <div className="my-3 technologies__item--libraries">
              <h6 className="technologies__item--title">
                Languages and libraries
              </h6>
              <p>
                PHP, Laravel, MySQL, Postgres, Javascript, Node, Express,
                Python, Django
              </p>
            </div>

            <h6 className="technologies__item--title">Tools</h6>
            <Row style={{fontSize: '12px'}}>
              <Col sm={6}>
                <ul>
                  <li>ActiveCampaign</li>
                  <li>Deployer</li>
                  <li>Docker</li>
                  <li>Kubernetes</li>
                  <li>OctoberCMS</li>
            
                </ul>
              </Col>
              <Col sm={6}>
                <ul>
                  <li>Postman</li>
                  <li>Redis</li>
                  <li>Psequel</li>
                  <li>Sentry</li>
                  <li>Sequel pro</li>
                </ul>
              </Col>
            </Row>
          </div>

          <div className="technologies__item">
                 <h3 className="technologies__item--title">Native apps</h3>
                  <p className="technologies__item--description">White labeled or standalone Android and iOS apps, built in a purely native manner.</p>
                  <hr className="technologies__item--hr" />
                  <div className="my-3 technologies__item--libraries">
                <h6 className="technologies__item--title">Languages and libraries</h6>
                <p>
                  React native, MobX, Redux
                </p>
                </div>
              
                <h6 className="technologies__item--title">Tools</h6>
                <Row style={{fontSize: '12px'}}>
                  <Col sm={12}>
                    <ul>
                      <li>Ignite CLI</li>
                      <li>Expo</li>
                      <li>Android studio</li>
                      <li>Xcode</li>
                    </ul>
                  </Col>
                  <Col sm={6}>
                  </Col>
                </Row>
            </div>

            <div className="technologies__item">
                 <h3 className="technologies__item--title">Custom CMS</h3>
                  <p className="technologies__item--description">High-performing, secure and user-friendly content management systems, all custom built to get the most out of your website.</p>
                  <hr className="technologies__item--hr" />
                  <div className="my-3 technologies__item--libraries">
                <h6 className="technologies__item--title">Languages and libraries</h6>
                <p>
                  React, NextJS, Laravel, PHP, Twig
                </p>
                </div>
              
                <h6 className="technologies__item--title">Tools</h6>
                <Row style={{fontSize: '12px'}}>
                  <Col sm={12}>
                    <ul>
                      <li>OctoberCMS</li>
                      <li>GatsbyJS</li>
                      <li>Headless CMS</li>
                      <li>Wordpress</li>
                    </ul>
                  </Col>
                  <Col sm={6}>
                  </Col>
                </Row>
            </div>

        </div>
      </Container>
    </section>
  );
};

export default Technologies;
