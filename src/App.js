import React, { Component } from 'react';
import './scss/App.scss';
import Main from './Main'
import Header from './components/Navbar';

const App = () => {
  return (
    <div id="App">
      <Header />
      <Main />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
