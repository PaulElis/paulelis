import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {

  render() {
    return (
      <div className='footer-list'>
        <p className='footer-titles'>Connect</p>
        <p >hello@paulelis.com</p>
        <a href="https://www.linkedin.com/in/paulelis/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/PaulElis" target="_blank" rel="noopener noreferrer">Github</a>
      </div>
    );
  }
}

export default Footer;
