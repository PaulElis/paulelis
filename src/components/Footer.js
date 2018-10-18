import React, { Component } from 'react';
import '../styles/footer.css';
import { scroller } from 'react-scroll'


class Footer extends Component {

  scrollToAbout() {
    scroller.scrollTo(`scroll-to-about`, {
      duration: 1200,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }
  scrollToSkills() {
    scroller.scrollTo(`scroll-to-skills`, {
      duration: 1200,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }
  scrollToProjects() {
    scroller.scrollTo(`scroll-to-projects`, {
      duration: 1200,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }

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
