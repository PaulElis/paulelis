import React, { Component } from 'react';
// import gmail from '../images/gmail.png'
// import linkedin from '../images/linkedin.png'
// import github from '../images/github.png'
// import { Grid, Image } from 'semantic-ui-react'
import '../styles/footer.css';


class Footer extends Component {
  render() {
    return (
      <div id='footer-container'>
        <div id='footer-grid'>

          <div id='footer-section'>
            <div id='footer-titles'>
              Connect
            </div>
              <div id='footer-list'>
                <a href="mailto:hello@paulelis.com?subject=Greetings%20from%20PaulElis.com">
                Email</a>

                <a href="https://www.linkedin.com/in/paulelis/" target="_blank" rel="noopener noreferrer">
                LinkedIn</a>

                <a href="https://github.com/PaulElis" target="_blank" rel="noopener noreferrer">
                Github</a>
              </div>
          </div>

          <div id='footer-section'>
            <div id='footer-titles'>
                Info
            </div>
              <div id='footer-list'>
                <a href="#about">
                  About
                </a>
                <a href="#skills">
                  Skills
                </a>
                <a href="#projects">
                  Projects
                </a>
              </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Footer;
