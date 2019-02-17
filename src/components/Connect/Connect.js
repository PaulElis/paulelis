import React, { Component } from 'react';
import './connect.css';

class Connect extends Component {
  render() {
    return (
      <div id='connect-component'>
        <div id='connect-list'>
          <div id='connect-title'>Connect</div>
          <a href="https://github.com/PaulElis" target="_blank" rel="noopener noreferrer">Github</a><br />
          <a href="https://www.linkedin.com/in/paulelis/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <div>hello@paulelis.com</div>
        </div>
      </div>
    );
  }
}

export default Connect;
