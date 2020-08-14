//render ProjectOverview based on PROJECTS_DATA from this.state by mapping through techniques

import React from 'react';
import PROJECTS_DATA from '../components/projects/ProjectsDataByType';
import ProjectPreview from '../components/projects/ProjectPreview';

class MyWork extends React.Component {
    constructor() {
        super();
        this.state = {
            projects: PROJECTS_DATA
        }
    }

    render() {
        const {projects} = this.state;
        return (
            <div className="projects-page">
                {
                    projects.map(({id, ...otherProjectProps}) => (
                        <ProjectPreview key={id} {...otherProjectProps}/>
                    ))
                }
            </div>
        );
    }
}

export default MyWork