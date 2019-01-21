import React, { Component } from 'react';
import jam from '../../images/jam/jam.jpg'
import jamXL from '../../images/jam/jamXL.jpg'
import freestyle from '../../images/freestyle/freestyle.jpg'
import freestyleXL from '../../images/freestyle/freestyleXL.jpg'
import eatr from '../../images/eatr/eatr.jpg'
import eatrXL from '../../images/eatr/eatrXL.jpg'
import './projects.css';

class Projects extends Component {
  render() {
    return (
      <div id='project-component'>
          <div id='project-header'>
            Projects
          </div>
        <div id='project-grid'>

          <div className='project-section' id='one'>
            <div className='project-content' id='one'>
              <div className='project-image-container'>
                <a href="https://jam-app-24722.firebaseapp.com" target="_blank" rel="noopener noreferrer">
                <picture>
                  <img alt='oh no!' src={jam} className='project-image fade-in' />
                  <source media="(min-width: 576px)" srcSet={jamXL} />
                </picture>
                </a>
                  <div className='middle'>
                    <a href="https://jam-app-24722.firebaseapp.com" target="_blank" rel="noopener noreferrer">
                    <div className='project-image-text'>Live Demo</div></a>
                  </div>
              </div>
              <div className='project-description'>
                Use Last.fm's API to see top artists of the day, search and save artists + albums to your favorites.
              </div>
            </div>
          </div>

          <div className='project-section'>
            <div className='project-content'>
              <div className='project-image-container'>
                <a href="https://freestyle-e1af9.firebaseapp.com/login" target="_blank" rel="noopener noreferrer">
                <picture>
                  <img alt='oh no!' src={freestyle} className='project-image fade-in' />
                  <source media="(min-width: 576px)" srcSet={freestyleXL} />
                </picture>
                </a>
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
                <picture>
                  <img alt='oh no!' src={eatr} className='project-image fade-in' />
                  <source media="(min-width: 576px)" srcSet={eatrXL} />
                </picture>
                </a>
                  <div className='middle'>
                    <a href="https://eatr-4b804.firebaseapp.com/" target="_blank" rel="noopener noreferrer">
                    <div className='project-image-text'>Live Demo</div></a>
                  </div>
              </div>
              <div className='project-description'>
                A Yelp update with a more visually appetizing interface.
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Projects;
