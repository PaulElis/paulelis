import React, { Component } from 'react';
import '../styles/footer.css';
// import { scroller } from 'react-scroll'


class Footer extends Component {

  render() {
    return (
      <div className='footer-list'>
        <p className='footer-titles'>Connect</p>
        <a href="mailto:hello@paulelis.com?subject=Greetings%20from%20PaulElis.com">Email</a>
        <a href="https://www.linkedin.com/in/paulelis/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/PaulElis" target="_blank" rel="noopener noreferrer">Github</a>
      </div>
    );
  }
}

export default Footer;
