import React, { Component } from 'react';
import Header from '../src/components/Header'
import About from '../src/components/About'
import Skills from '../src/components/Skills'
import Projects from '../src/components/Projects'
import Footer from '../src/components/Footer'

// import {  } from 'semantic-ui-react'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header>
          <Header />
        </header>

        {/* <div id='scrolling-box'> */}

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

          <a name="about" />
            <About />

          <a name="skills" />
          <Skills />

          <a name="projects" />
          <Projects />

          <Footer />

        {/* </div> */}
      </div>
    );
  }
}

export default App;
