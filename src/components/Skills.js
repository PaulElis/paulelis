import React, { Component } from 'react';
import '../styles/skills.css';
// import react from '../images/react.png'
// import javascript from '../images/javascript.jpg'
// import rails from '../images/rails.png'
// import css from '../images/css.png'
// import html from '../images/html.png'
// import ruby from '../images/ruby.png'
// import reactnative from '../images/reactnative.png'

class Skills extends Component {
  render() {
    return (
      <div id='skills-component'>
        <div id='skills-header'>
          {/* Skills */}
        </div>

        <div id='skills-grid'>
          <div className='skills-section'>
            <div className='skills-title'>Languages</div>
            <div className='skills-list'>
              Javascript, Ruby, HTML, CSS, SQL
            </div>
          </div>

        <div className='skills-section'>
            <div className='skills-title' id='skills-title-2'>Frameworks</div>
            <div className='skills-list'>
              React, React Native, Ruby on Rails, Sinatra, Rack
            </div>
        </div>

        </div>

      </div>
    );
  }
}

export default Skills;
