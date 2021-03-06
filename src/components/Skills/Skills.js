import React, { Component } from 'react';
import './skills.css';

class Skills extends Component {
  render() {
    return (
      <div id='skills-component'>
        <div id='skills-grid'>

          <div className='skills-section'>
            <div className='skills-title'>Languages</div>
            <div className='skills-list'>
              Javascript, Ruby, Typescript, HTML, CSS, SQL
            </div>
          </div>

          <div className='skills-section'>
            <div className='skills-title' id='skills-title-spacing'>Frameworks + Libraries</div>
            <div className='skills-list'>
              React, Node, Ruby on Rails, Express, Redux, React Native, Mongoose, Web3
            </div>
          </div>

          <div className='skills-section'>
            <div className='skills-title' id='skills-title-spacing'>Databases</div>
            <div className='skills-list'>
              MongoDB, PostgreSQL, SQLite
            </div>
          </div>

        </div>

      </div>
    );
  }
}

export default Skills;
