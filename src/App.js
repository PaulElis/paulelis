import React, { Component } from 'react';
import Header from '../src/components/Header'
import About from '../src/components/About'
import Skills from '../src/components/Skills'
import Projects from '../src/components/Projects'
import Footer from '../src/components/Footer'
import main from './images/main/main.jpg'
import mainWebp from './images/main/main.webp'
import main992px from './images/main/main992px.jpg'
import main992pxWebp from './images/main/main992px.webp'
import main1200px from './images/main/main1200px.jpg'
import main1200pxWebp  from './images/main/main1200px.webp'
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
              <source srcSet={main1200pxWebp} media="(min-width: 1200px)" type="image/webp" />
              <source srcSet={main992pxWebp} media="(min-width: 992px)" type="image/webp" />
              <source srcSet={mainWebp} type="image/webp" />
              <source srcSet={main1200px} media="(min-width: 1200px)" />
              <source srcSet={main992px} media="(min-width: 992px)" />
              <img src={main} id='main' alt='oh no!'/>
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
