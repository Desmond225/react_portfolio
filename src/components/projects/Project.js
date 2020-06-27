import React from 'react';
import { Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl'

const Project = (name) => {
    return (
        <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
            <CardTitle 
                style={{
                    color: '#fff', 
                    height:'176px',
                    background:'url(https://camo.githubusercontent.com/b367332682f8424e6477ae6fde07bc0bd562b48d/68747470733a2f2f692e696d6775722e636f6d2f6a6d4b477036632e6a7067) center/cover'
                }}>
                {name.name}
            </CardTitle>
            <CardText>
            </CardText>
            <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>CodePen</Button>
                <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <IconButton name='share' />
            </CardMenu>
        </Card>
    )
}

export default Project;