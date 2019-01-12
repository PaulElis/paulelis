import React, { Component } from 'react';
import '../styles/header.css';
import { scroller } from 'react-scroll'
import hamburger from '../images/hamburger.png'
import exit from '../images/exit.png'
import MediaQuery from 'react-responsive';

class Header extends Component {

  state= { toggled: false }

  scrollTo = (e) => {
    const location = e.target.innerText
    scroller.scrollTo(`scroll-to-${location}`, {
      duration: 1200,
      delay: 0,
      smooth: 'easeInOutQuart' })
    this.setState({ toggled: !this.state.toggled })
  }

  toggleHamburger = () => { this.setState({ toggled: !this.state.toggled }) }

  render() {
    let { toggled } = this.state
    return (
      <div>
      <div id='header-container'>
        <div id='header-title'>
          Paul Elis
        </div>
        <MediaQuery query="(max-width: 576px)">
          <img id={toggled ? "exit" : "hamburger"} src={toggled ? exit : hamburger} alt='oh no!' onClick={this.toggleHamburger} /*onMouseLeave={this.toggleHamburger}*/ />
        </MediaQuery>

        {/* Web Menu */}
        <MediaQuery query="(min-width: 577px)">
          <div id='header-list'>
            <a className='links' onClick={this.scrollTo}>About</a>
            <a className='links' onClick={this.scrollTo}>Skills</a>
            <a className='links' onClick={this.scrollTo}>Projects</a>
          </div>
        </MediaQuery>
      </div>

        {/* Mobile Menu */}
        <MediaQuery query="(max-width: 576px)">
            <div id='hamburger-container' >
              {this.state.toggled ?
                <div id={toggled ? "hamburger-list" : "no-list"} >
                  <a className='links' onClick={this.scrollTo}>About</a>
                  <a className='links' onClick={this.scrollTo}>Skills</a>
                  <a className='links' onClick={this.scrollTo}>Projects</a>
                </div> : "" }
            </div>
        </MediaQuery>
      </div>
    );
  }
}

export default Header;
