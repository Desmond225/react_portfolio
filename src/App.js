import React, { Component } from 'react';
import './App.css';
import Main from './components/Main'
import Header from './components/Navbar';

const App = () => {
  return (
    <div className="">
      <Header />
      <div className="page-content" />
      <Main />


    </div>
  );
}

export default App;
