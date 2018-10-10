import React, { Component } from 'react';
import '../styles/header.css';
import { scroller } from 'react-scroll'
import hamburger from '../images/hamburger.png'
import MediaQuery from 'react-responsive';

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

  toggleHamburger(){
    console.log('in hamburger')
  }

  render() {
    return (
      <div id='header-container'>
        <div id='header-title'>
          Paul Elis
        </div>
        <MediaQuery query="(max-width: 576px)">
          <img id='hamburger' src={hamburger} onClick={this.toggleHamburger}/>
          <ul class="menulist">
            <li><a className='links' onClick={() => this.scrollToAbout()} >About</a></li>
            <li><a className='links' onClick={() => this.scrollToSkills()} >Skills</a></li>
            <li><a className='links' onClick={() => this.scrollToProjects()} >Projects</a></li>
          </ul>
        </MediaQuery>
        <MediaQuery query="(min-width: 577px)">
          <div className='header-list'>
            <a className='links' onClick={() => this.scrollToAbout()} >About</a>
            <a className='links' onClick={() => this.scrollToSkills()} >Skills</a>
            <a className='links' onClick={() => this.scrollToProjects()} >Projects</a>
          </div>
        </MediaQuery>
      </div>
    );
  }
}

export default Header;
