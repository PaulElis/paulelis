import React, { Component } from 'react';
import freestyle from '../images/freestyle.png'
import eatr from '../images/eatr.png'
import '../styles/projects.css';

class Projects extends Component {
  render() {
    return (
      <div className='app-content-project-container'>
        <div className='app-content-project-title'>
          Projects
        </div>
        <a href="https://freestyle-e1af9.firebaseapp.com/login">
        <img
          alt='oh no!'
          src={freestyle}
        /></a>
        <a href="https://eatr-4b804.firebaseapp.com/">
        <img
          alt='oh no!'
          src={eatr} /></a>
      </div>
    );
  }
}

export default Projects;
