import React, { Component } from 'react';
import Header from '../src/components/Header'
import freestyle from '../src/images/freestyle.png'
import eatr from '../src/images/eatr.png'
import {  } from 'semantic-ui-react'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header>
          <Header />
        </header>
        <div id='app-content-container'>
          <div id='app-content-greeting'>
            Development <br />
            +  <br />
            Design <br />
          </div>
          <div className='app-content-project-images'>
            <img
              alt='oh no!'
              width="300"
              height="150"
              src={freestyle} />
            <img
              alt='oh no!'
              width="300"
              height="150"
              src={eatr} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
