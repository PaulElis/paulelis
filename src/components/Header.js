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

  openHamburger(){
    console.log('in hamburger')
    document.getElementById('hamburger-list').style.height='250px';
    // document.getElementById('hamburger').style.marginLeft='250px';
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

        <MediaQuery query="(min-width: 577px)">
          <div id='header-list'>
            <a href="#" onClick={this.closeHamburger} />
            <a className='links' onClick={() => this.scrollToAbout()} >About</a>
            <a className='links' onClick={() => this.scrollToSkills()} >Skills</a>
            <a className='links' onClick={() => this.scrollToProjects()} >Projects</a>
          </div>
        </MediaQuery>
      </div>
        <MediaQuery query="(max-width: 576px)">
          <div id='hamburger-list-container'>
            <ul id="hamburger-list">
              <a className='links' onClick={() => this.scrollToAbout()} ><li>About</li></a>
              <a className='links' onClick={() => this.scrollToSkills()} ><li>Skills</li></a>
              <a className='links' onClick={() => this.scrollToProjects()} ><li>Projects</li></a>
            </ul>
          </div>
        </MediaQuery>
      </div>
    );
  }
}

export default Header;
