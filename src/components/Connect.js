import React, { Component } from 'react';
import gmail from '../images/gmail.png'
import linkedin from '../images/linkedin.png'
import github from '../images/github.png'
import { Grid, Image } from 'semantic-ui-react'
import '../styles/connect.css';


class Connect extends Component {
  render() {
    return (
      <div id='connect-container'>
        {/* <div id='connect-title'>
          Connect
        </div> */}
        <div id='connect-list'>
          <a href="mailto:hello@paulelis.com?subject=Greetings%20from%20PaulElis.com">
          <img id='connect-image' alt='oh no!' src={gmail} /></a>

          <a href="https://www.linkedin.com/in/paulelis/" target="_blank">
          <img id='connect-image' alt='oh no!' src={linkedin} /></a>

          <a href="https://github.com/PaulElis" target="_blank">
          <img id='connect-image' alt='oh no!' src={github} /></a>
        </div>
      </div>
    );
  }
}

export default Connect;
