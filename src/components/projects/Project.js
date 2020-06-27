import React from 'react';

const Project = ({ id, name }) => (
    <div className='project-item'>
        <div 
            className="image"
        />
            <div className="project-footer">
                <span className="name">{name}</span>
            </div>
        </div>
)

export default Project;