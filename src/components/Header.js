import React, { Component } from 'react';
import '../styles/header.css';
import { scroller } from 'react-scroll'
import hamburger from '../images/hamburger.png'
// import exit from '../images/exit.png'
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

  openHamburger(){
    console.log('in hamburger')
    document.getElementById('hamburger-list').style.height='200px';
    // document.getElementById('hamburger').src='../images/exit.png';
    document.getElementById('app-container').style.marginTop='200px';
  }

  render() {
    return (
      <div>
      <div id='header-container'>
        <div id='header-title'>
          Paul Elis
        </div>
        <MediaQuery query="(max-width: 576px)">
          <img id='hamburger' src={hamburger} alt='oh no!' onClick={this.openHamburger}/>
        </MediaQuery>

        {/* Web Menu */}
        <MediaQuery query="(min-width: 577px)">
          <div id='header-list'>
            <a className='links' onClick={this.scrollToAbout} >About</a>
            <a className='links' onClick={this.scrollToSkills} >Skills</a>
            <a className='links' onClick={this.scrollToProjects} >Projects</a>
          </div>
        </MediaQuery>
      </div>

        {/* Mobile Menu */}
        <MediaQuery query="(max-width: 576px)">
            <div id="hamburger-list">
              <a id='close-hamburger' onClick={this.closeHamburger}>X</a>
              <a className='links' onClick={this.scrollToAbout} >About</a>
              <a className='links' onClick={this.scrollToSkills} >Skills</a>
              <a className='links' onClick={this.scrollToProjects} >Projects</a>
            </div>
        </MediaQuery>
      </div>
    );
  }
}

export default Header;
