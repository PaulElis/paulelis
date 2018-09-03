import React, { Component } from 'react';
import Header from '../src/components/Header'
import AboutMe from '../src/components/AboutMe'
import Skills from '../src/components/Skills'
import Projects from '../src/components/Projects'
import Connect from '../src/components/Connect'

import {  } from 'semantic-ui-react'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header>
          <Header />
        </header>

        <div id='app-container'>
          <div id='app-greeting-container'>
            <div id='app-greeting-title'>
              Developer.<br />
            </div>
            <div id='app-greeting-description'>
              Interested in creating rich user experiences upon a solid foundation of code.
            </div>
          </div>
        </div>

          {/* <AboutMe /> */}

          <Skills />

          <Projects />

          <Connect />

      </div>
    );
  }
}

export default App;
