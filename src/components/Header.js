import React, { Component } from 'react';
import '../styles/header.css';
import { scroller } from 'react-scroll'

class Header extends Component {

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
      <div id='header-container'>
        <div id='header-title'>
          Paul Elis
        </div>
        <div className='header-list'>
          <a className='links' onClick={() => this.scrollToAbout()} >About</a>
          <a className='links' onClick={() => this.scrollToSkills()} >Skills</a>
          <a className='links' onClick={() => this.scrollToProjects()} >Projects</a>
        </div>
      </div>
    );
  }
}

export default Header;
