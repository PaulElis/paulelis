import React, { Component } from 'react';
import Header from '../src/components/Header'
import About from '../src/components/About'
import Skills from '../src/components/Skills'
import Projects from '../src/components/Projects'
import Footer from '../src/components/Footer'
import main from './images/main/main1500px.jpg'
import main992 from './images/main/main3000px.jpg'
import mainXL from './images/main/mainXL.jpg'
import { Element } from 'react-scroll'

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="app">
        <header>
          <Header />
        </header>
          <div id='app-greeting-container'>
            <picture>
              <img src={main} id='main' alt='oh no!'/>
              <source media="(min-width: 992px)" srcSet={main992} />
              <source media="(min-width: 1200px)" srcSet={mainXL} />
            </picture>
            <div id='app-content'>
              <h2 id='app-title'>Developer.</h2>
              <h5 id='app-description'>Interested in creating rich user experiences upon a solid foundation of code.</h5>
            </div>
          </div>

        <Element name="scroll-to-About" className="element">
          <About />
        </Element>

        <Element name="scroll-to-Skills" className="element">
          <Skills />
        </Element>

        <Element name="scroll-to-Projects" className="element">
          <Projects />
        </Element>

        <Footer />

      </div>
    );
  }
}

export default App;
