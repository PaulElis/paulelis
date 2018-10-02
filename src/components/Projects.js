import React, { Component } from 'react';
import freestyle from '../images/freestyle.png'
import eatr from '../images/eatr.png'
import '../styles/projects.css';

class Projects extends Component {
  render() {
    return (
      <div id='project-component'>
          <div id='project-header'>
            Projects
          </div>
        <div id='project-grid'>

          <div className='project-section'>
            <div className='project-content'>
              <div className='project-image-container'>
                <a href="https://freestyle-e1af9.firebaseapp.com/login" target="_blank" rel="noopener noreferrer">
                <img alt='oh no!' src={freestyle} className='project-image' /></a>
                  <div className='middle'>
                    <a href="https://freestyle-e1af9.firebaseapp.com/login" target="_blank" rel="noopener noreferrer">
                    <div className='project-image-text'>Live Demo</div></a>
                  </div>
              </div>
              <div className='project-description'>
                A platform for developers and clients to collaborate on a freelance contract.
              </div>
            </div>
          </div>

          <div className='project-section'>
            <div className='project-content'>
              <div className='project-image-container'>
                <a href="https://eatr-4b804.firebaseapp.com/" target="_blank" rel="noopener noreferrer">
                <img alt='oh no!' src={eatr} className='project-image' /></a>
                  <div className='middle'>
                    <a href="https://eatr-4b804.firebaseapp.com/" target="_blank" rel="noopener noreferrer">
                    <div className='project-image-text'>Live Demo</div></a>
                  </div>
              </div>
              <div className='project-description'>
                An update to a popular app with a more visually appetizing interface.
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Projects;
