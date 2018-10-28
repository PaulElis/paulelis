import React, { Component } from 'react';
import '../styles/header.css';
import { scroller } from 'react-scroll'
import hamburger from '../images/hamburger.png'
import exit from '../images/exit.png'
import MediaQuery from 'react-responsive';

class Header extends Component {

  state={
    toggled: false
  }

  scrollToAbout = () => {
    scroller.scrollTo(`scroll-to-about`, {
      duration: 1200,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
    this.setState({ toggled: !this.state.toggled })
  }
  scrollToSkills = () => {
    scroller.scrollTo(`scroll-to-skills`, {
      duration: 1200,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
    this.setState({ toggled: !this.state.toggled })
  }
  scrollToProjects = () => {
    scroller.scrollTo(`scroll-to-projects`, {
      duration: 1200,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
    this.setState({ toggled: !this.state.toggled })
  }

  toggleHamburger = () => {
    this.setState({ toggled: !this.state.toggled })
    // document.getElementById('hamburger-list').style.height='200px';
    // document.getElementById('hamburger-list').style.width='150px';
    // document.getElementById('app-container').style.marginTop='200px';
  }

  render() {
    let { toggled } = this.state

    return (
      <div>
      <div id='header-container'>
        <div id='header-title'>
          Paul Elis
        </div>
        <MediaQuery query="(max-width: 576px)">
          {/* <img id='hamburger' src={toggled ? exit : hamburger} alt='oh no!' onClick={this.openHamburger}/> */}
          <img id={toggled ? "exit" : "hamburger"} src={toggled ? exit : hamburger} alt='oh no!' onClick={this.toggleHamburger} /*onMouseLeave={this.toggleHamburger}*/ />
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
            <div id='hamburger-container' >
              {this.state.toggled ?
                <div id={toggled ? "hamburger-list" : "no-list"} >
                  <a className='links' onClick={this.scrollToAbout} >About</a>
                  <a className='links' onClick={this.scrollToSkills} >Skills</a>
                  <a className='links' onClick={this.scrollToProjects} >Projects</a>
                </div> : "" }
            </div>
        </MediaQuery>
      </div>
    );
  }
}

export default Header;
