//render an overview of projects by techniques (collection), then filter through these collections and map accordingly afterwards

import React from 'react';
import Project from './Project';


const ProjectPreview = ({ title, items }) => (
    <div className='project-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items
                .filter((item, index) => index < (4))
                .map(({id, ...otherItemProps}) => (
                    <Project key={id} {...otherItemProps} />
                ))
            }
        </div>
    </div>
)

export default ProjectPreview