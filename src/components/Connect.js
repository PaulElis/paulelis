import React, { Component } from 'react';
import gmail from '../images/gmail.png'
import linkedin from '../images/linkedin.png'
import github from '../images/github.png'
// import { Grid, Image } from 'semantic-ui-react'
import '../styles/connect.css';


class Connect extends Component {
  render() {
    return (
      <div id='connect-container'>
        <div id='connect-title'>
          <a name="connect">
            Connect
          </a>
          <a href="#aboutme">
            AboutMe
          </a>
        </div>
        <div id='connect-list'>
          <a href="mailto:hello@paulelis.com?subject=Greetings%20from%20PaulElis.com">
          Email</a>

          <a href="https://www.linkedin.com/in/paulelis/" target="_blank" rel="noopener noreferrer">
          LinkedIn</a>

          <a href="https://github.com/PaulElis" target="_blank" rel="noopener noreferrer">
          Github</a>
        </div>
      </div>
    );
  }
}

export default Connect;
