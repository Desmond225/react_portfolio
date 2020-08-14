import React from 'react';
import Contacts from './pages/Contacts';
import HomePage from './pages/HomePage';
import { Switch, Route } from 'react-router-dom';
import MyWork from './pages/MyWork';

const Main = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/Contacts" component={Contacts} />
    <Route path="/MyWork" component={MyWork} />
  </Switch>
)

export default Main
