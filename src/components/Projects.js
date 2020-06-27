import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl'
import Project from './projects/Project';
import PROJECTS_DATA from './projects/ProjectsData';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
      projects: PROJECTS_DATA
    };
  }

  toggleCategories() {
    if(this.state.activeTab === 0){
      console.log(this.state.projects[0].items)
      // return(



      // <div className="projects-grid">
      //   <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
      //     <CardTitle style={{color: '#fff', height:'176px',
      //     background:'url(https://camo.githubusercontent.com/b367332682f8424e6477ae6fde07bc0bd562b48d/68747470733a2f2f692e696d6775722e636f6d2f6a6d4b477036632e6a7067) center/cover'}}>Robofriends App</CardTitle>
      //     <CardText>
      //     lorem ips
      //     </CardText>
      //     <CardActions border>
      //     <Button colored>GitHub</Button>
      //     <Button colored>CodePen</Button>
      //     <Button colored>Live Demo</Button>
      //     </CardActions>
      //     <CardMenu style={{color: '#fff'}}>
      //       <IconButton name='share' />
      //     </CardMenu>
      //   </Card>
      //   <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
      //     <CardTitle style={{color: '#fff', height:'176px',
      //     background:'url(https://reactjs.org/logo-og.png) center/cover'}}>Smartbrain</CardTitle>
      //     <CardText>
      //     lorem ips
      //     </CardText>
      //     <CardActions border>
      //     <Button colored>GitHub</Button>
      //     <Button colored>CodePen</Button>
      //     <Button colored>Live Demo</Button>
      //     </CardActions>
      //     <CardMenu style={{color: '#fff'}}>
      //       <IconButton name='share' />
      //     </CardMenu>
      //   </Card>
      //   <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
      //     <CardTitle style={{color: '#fff', height:'176px',
      //     background:'url(https://reactjs.org/logo-og.png) center/cover'}}>React project 1</CardTitle>
      //     <CardText>
      //     lorem ips
      //     </CardText>
      //     <CardActions border>
      //     <Button colored>GitHub</Button>
      //     <Button colored>CodePen</Button>
      //     <Button colored>Live Demo</Button>
      //     </CardActions>
      //     <CardMenu style={{color: '#fff'}}>
      //       <IconButton name='share' />
      //     </CardMenu>
      //   </Card>
      //   </div>
      // )

  } else if(this.state.activeTab === 1){
    return (
      <div><h1>This is Angular</h1></div>
    )
  } else if(this.state.activeTab === 2){
    return (
      <div><h1>This is VueJS</h1></div>
    )
} else if(this.state.activeTab === 3){
  return (
    <div><h1>This is PostgreSQL</h1></div>
  )}
}

  render() {
    return (
    <div className="category-tabs">
    <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
    <Tab>React</Tab>
    <Tab>Angular</Tab>
    <Tab>VueJS</Tab>
    <Tab>PostgreSQL</Tab>
    </Tabs>


    <Grid>
    <Cell col={12}>
      {/* <div className="content">{this.toggleCategories()}</div> */}

      {
        this.state.projects
        .filter((id) => id = (1))
        .map(project => (
          console.log(project.title),
        <Project name={project.name}/>
        )
        )
      }

    </Cell>
    </Grid>
    </div>
  );
  }
}

export default Projects
