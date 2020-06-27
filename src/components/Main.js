import React from 'react';
import AboutMe from './AboutMe';
import Contacts from './Contacts';
import LandingPage from './LandingPage';
import Resume from './Resume';
import { Switch, Route } from 'react-router-dom';
import MyWork from './projects/MyWork';

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/AboutMe" component={AboutMe} />
    <Route path="/Contacts" component={Contacts} />
    <Route path="/MyWork" component={MyWork} />
    <Route path="/Resume" component={Resume} />

  </Switch>
)

export default Main
