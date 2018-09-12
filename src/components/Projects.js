import React, { Component } from 'react';
import freestyle from '../images/freestyle.png'
import eatr from '../images/eatr.png'
import '../styles/projects.css';

class Projects extends Component {
  render() {
    return (
      <div id='project-container'>
        <a name="projects" />
        <div id='project-title'>
          Projects
        </div>
        <div id='project-images'>

          <a href="https://freestyle-e1af9.firebaseapp.com/login" target="_blank" rel="noopener noreferrer">
          <img alt='oh no!' src={freestyle} /></a>

          <a href="https://eatr-4b804.firebaseapp.com/" target="_blank" rel="noopener noreferrer">
          <img alt='oh no!' src={eatr} /></a>

        </div>
      </div>
    );
  }
}

export default Projects;
