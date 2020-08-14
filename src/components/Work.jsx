import React from 'react';
import PROJECTS_DATA from './projects/ProjectsData';
import { Container, Col, Row } from 'react-bootstrap';

const Work = () => {

    const projects = PROJECTS_DATA.map(project => {
        return (
        <div className={`work__card ` + project.background }>
            <img className="work__card--img" src={project.imageUrl} alt=""/>
            <div className="work__card--description">
                <p>text here</p>
                <button className="btn btn-outline-primary">Visit website</button>
                </div>
        </div>
        )
    })

    return (
    <section className="work">
        <Container>
        <h1>My work</h1>
        <div className="work__grid">
            {projects}
        </div>
        </Container>
    </section>
    )
};

export default Work;