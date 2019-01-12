import React, { Component } from 'react';
import '../styles/skills.css';

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
            <div className='skills-title' id='skills-title-spacing'>Frameworks + Libraries</div>
            <div className='skills-list'>
              React, React Native, Ruby on Rails, Redux
            </div>
        </div>

        <div className='skills-section'>
            <div className='skills-title' id='skills-title-spacing'>Databases</div>
            <div className='skills-list'>
              PostgreSQL, SQLite
            </div>
        </div>

        </div>

      </div>
    );
  }
}

export default Skills;
