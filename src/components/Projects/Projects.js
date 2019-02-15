import React, { Component } from 'react';
import jam from '../../images/jam/jam.jpg'
import jamXL from '../../images/jam/jamXL.jpg'
import jamXXL from '../../images/jam/jamXXL.png'
import freestyle from '../../images/freestyle/freestyle.jpg'
import freestyleXL from '../../images/freestyle/freestyleXL.jpg'
import freestyleXXL from '../../images/freestyle/freestyleXXL.png'
import eatr from '../../images/eatr/eatr.jpg'
import eatrXL from '../../images/eatr/eatrXL.jpg'
import eatrXXL from '../../images/eatr/eatrXXL.png'
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
                  <source srcSet={jamXXL} media="(min-width: 1200px)" />
                  <source srcSet={jamXL} media="(min-width: 576px)" />
                  <img src={jam} id='main' alt='oh no!' className='project-image fade-in' />
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
                  <source srcSet={freestyleXXL} media="(min-width: 1200px)" />
                  <source srcSet={freestyleXL} media="(min-width: 576px)" />
                  <img src={freestyle} id='main' alt='oh no!' className='project-image fade-in' />
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
                  <source srcSet={eatrXXL} media="(min-width: 1200px)" />
                  <source srcSet={eatrXL} media="(min-width: 576px)" />
                  <img src={eatr} id='main' alt='oh no!' className='project-image fade-in' />
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
