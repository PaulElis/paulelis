import React, { Component } from 'react';
import Header from '../src/components/Header/Header'
import Landing from '../src/components/Landing/'
import About from '../src/components/About/About'
import Skills from '../src/components/Skills/Skills'
import Connect from '../src/components/Connect/Connect'
import Projects from '../src/components/Projects/Projects'
import Footer from '../src/components/Footer/Footer'
import { Element } from 'react-scroll'
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="app">
        <header>
          <Header />
        </header>
          <Landing />

        <div id='about-skills'>
          <Element name="scroll-to-About" className="element about-skills-connect" id='about-grid-box'>
              <About />
          </Element>

          <Element name="scroll-to-Skills" className="element about-skills-connect" id='skills-grid-box'>
              <Skills />
          </Element>

          <Connect />
        </div>

        <Element name="scroll-to-Projects" className="element">
          <Projects />
        </Element>

        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
