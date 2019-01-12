import React, { Component } from 'react';
import '../styles/about.css';
import '../styles/about.scss';

class About extends Component {
  render() {
    return (
      <div id='about-container'>
        <div id='about-title'>
            Let's Build...
        </div>
        <div id='about-content'>
          Hey I'm Paul. Software Engineer with a background in real estate and lover of nearly anything outdoors.
          My work is a happy blend of functionality and design, thoughtfully created.
          Great, now that you know me how may I help you today?
        </div>
      </div>
    );
  }
}

export default About;
