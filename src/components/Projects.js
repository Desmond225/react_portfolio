import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu,
  IconButton, CardText } from 'react-mdl'

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {activeTab: 0};
  }

  toggleCategories() {
    if(this.state.activeTab === 0){
      return(
      <div className="projects-grid">
        <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
          <CardTitle style={{color: '#fff', height:'176px',
          background:'url(https://reactjs.org/logo-og.png) center/cover'}}>Robofriends App</CardTitle>
          <CardText style={{height:'100px'}}>
          Robofriends has been my very first app built with React. It includes
          the introduction of basic React elements in order to build an app
          which uses the Robohash API. The result is a dynamic and responsive app
          which lists various robots, which can also be found by name.
          </CardText>
          <CardActions border>
          <Button colored href="https://github.com/Desmond225/robofriends"
          target="_blank" rel="noopener noreferrer">GitHub</Button>
          <Button colored>CodePen</Button>
          <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name='share' />
          </CardMenu>
        </Card>
        <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
          <CardTitle style={{color: '#fff', height:'176px',
          background:'url(https://reactjs.org/logo-og.png) center/cover'}}>Smartbrain</CardTitle>
          <CardText style={{height:'100px'}}>
          Smartbrain is my second built React app which uses the ClariFai API
          to display a face recognition app. The user is able to submit a photo
          on the website, which then returns the same photo with faces that have
          been recognized by the application.
          </CardText>
          <CardActions border>
          <Button colored href="https://github.com/Desmond225/Smartbrain"
          target="_blank" rel="noopener noreferrer">GitHub</Button>
          <Button colored>CodePen</Button>
          <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name='share' />
          </CardMenu>
        </Card>
        <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
          <CardTitle style={{color: '#fff', height:'176px',
          background:'url(https://reactjs.org/logo-og.png) center/cover'}}>Portfolio</CardTitle>
          <CardText style={{height:'100px'}}>
          This React app contains the very app you are looking at right now!
          It does not make use of any APIs, but has been built in order to amp
          up my React skills.
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
        </div>
      )

  } else if(this.state.activeTab === 1){
    return (
      <div className="projects-grid">
        <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
          <CardTitle style={{color: '#fff', height:'176px',
          background:'url(https://pbs.twimg.com/profile_images/76166699/django-logo-negative-box_400x400.png) center/cover'}}>
          Portfolio website</CardTitle>
          <CardText>
          Using my HTML, CSS, Python and Django skills, I was able to create my very
          first website, which I built with the help of a Udemy course. The website
          runs on Python 3.6, and was used as an introduction to my coding journey
          whilst practicing my programming skills.
          </CardText>
          <CardActions border>
          <Button colored href="https://github.com/Desmond225/Portfolio_done"
          target="_blank" rel="noopener noreferrer">GitHub</Button>
          <Button colored>CodePen</Button>
          <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name='share' />
          </CardMenu>
        </Card>
        <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
          <CardTitle style={{color: '#fff', height:'176px',
          background:'url(https://pbs.twimg.com/profile_images/76166699/django-logo-negative-box_400x400.png) center/cover'}}>
          Cake and bake</CardTitle>
          <CardText>
          This website runs on the Django/Python framework and displays a basic
          website about a hobbyist who is into baking desserts. The website itself
          never was polished, since I am planning to rebuild the website using React.
          </CardText>
          <CardActions border>
          <Button colored href="https://github.com/Desmond225/cake-bake"
          target="_blank" rel="noopener noreferrer">GitHub</Button>
          <Button colored>CodePen</Button>
          <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name='share' />
          </CardMenu>
        </Card>

        </div>
    )
  } else if(this.state.activeTab === 2){
    return (
      <div><h1>Oops! No experience yet in Angular</h1></div>
    )
} else if(this.state.activeTab === 3){
  return (
    <div><h1>Oops! No experience yet in PostgreSQL</h1></div>
  )}
}

  render() {
    return (
    <div className="category-tabs">
    <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
    <Tab>React</Tab>
    <Tab>Django</Tab>
    <Tab>Angular</Tab>
    <Tab>PostgreSQL</Tab>
    </Tabs>


    <Grid>
    <Cell col={12}>
      <div className="content">{this.toggleCategories()}</div>
    </Cell>
    </Grid>
    </div>
  );
  }
}

export default Projects
