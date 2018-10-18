import React, { Component } from 'react';
import Header from '../src/components/Header'
import About from '../src/components/About'
import Skills from '../src/components/Skills'
import Projects from '../src/components/Projects'
import Footer from '../src/components/Footer'
import hero from './images/hero.JPG'
import { Element } from 'react-scroll'

// import {  } from 'semantic-ui-react'
import './App.css';

class App extends Component {

  // carousel = () => {
  //   setTimeout(function(){ console.log("Hello"); }, 3000);
  // }

  render() {
    return (
      <div className="app">
        <header>
          <Header />
        </header>

        {/* <div id='app-container'> */}
          <div id='app-greeting-container'>
              <img src={hero} id='hero' alt='oh no!'/>
              <div id='app-content'>
                <h2 id='app-title'>Developer.</h2>
                <h5 id='app-description'>Interested in creating rich user experiences upon a solid foundation of code.</h5>
              </div>
          </div>
        {/* </div> */}

        <Element name="scroll-to-about" className="element">
          <About />
        </Element>

        <Element name="scroll-to-skills" className="element">
          <Skills />
        </Element>

        <Element name="scroll-to-projects" className="element">
          <Projects />
        </Element>

        <Footer />

      </div>
    );
  }
}

export default App;
