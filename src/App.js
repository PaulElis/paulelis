import React, { Component } from 'react';
import Header from '../src/components/Header/Header'
import Landing from '../src/components/Landing/'
import About from '../src/components/About/About'
import Skills from '../src/components/Skills/Skills'
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
