import React, { Component } from 'react';
import '../styles/about.css';

class About extends Component {
  render() {
    return (
      <div id='about-container'>
        <a name="about" />
        <div id='about-title'>
            Let's Build...
        </div>
        <div id='about-content'>
          Hey I'm Paul. Software Engineer with a background in real estate and lover of nearly anything outdoors.
          My work is a happy blend of functionality and design, thoughtfully created.
          Every piece of work can be a work of art. Great, now that you know me, how may I help you today?
        </div>
      </div>
    );
  }
}

export default About;