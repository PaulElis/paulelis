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
        <div id='footer-grid'>
          <div className='footer-section'>
            <div className='footer-titles'>Connect</div>
              <div className='footer-list'>
                <a href="mailto:hello@paulelis.com?subject=Greetings%20from%20PaulElis.com">Email</a>
                <a href="https://www.linkedin.com/in/paulelis/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/PaulElis" target="_blank" rel="noopener noreferrer">Github</a>
              </div>
          </div>
          <div className='footer-section'>
            <div className='footer-titles'>Info</div>
              <div className='footer-list'>
                <a className='links' onClick={() => this.scrollToAbout()} >About</a>
                <a className='links' onClick={() => this.scrollToSkills()} >Skills</a>
                <a className='links' onClick={() => this.scrollToProjects()} >Projects</a>

                {/* <a href="#about">About</a> */}
                {/* <a href="#skills">Skills</a> */}
                {/* <a href="#projects">Projects</a> */}
              </div>
          </div>
        </div>
    );
  }
}

export default Footer;
