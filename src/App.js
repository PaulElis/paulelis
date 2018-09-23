import React, { Component } from 'react';
import Header from '../src/components/Header'
import About from '../src/components/About'
import Skills from '../src/components/Skills'
import Projects from '../src/components/Projects'
import Footer from '../src/components/Footer'
import hero from './images/hero.JPG'

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
              <img src={hero} alt='oh no!'/>
              {/* <div id='app-greeting-title'>
                Developer.
              </div>
              <div id='app-greeting-description'>
                Interested in creating rich user experiences upon a solid foundation of code.
              </div> */}
              <div id='app-content'>
                <h2 id='app-title'>Developer.</h2>
                <h5 id='app-description'>Interested in creating rich user experiences upon a solid foundation of code.</h5>
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
