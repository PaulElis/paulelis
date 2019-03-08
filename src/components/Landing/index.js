import React, { Component } from 'react';
import './index.css';
import main from '../../images/main/main.jpg'
import mainWebp from '../../images/main/main.webp'
import main1200px from '../../images/main/main1200px.jpg'
import main1200pxWebp  from '../../images/main/main1200px.webp'

class Landing extends Component {

  render() {
    // <div id='app-content'>
    //   <h2 id='app-title'>Developer.</h2>
    //   <h5 id='app-description'>Interested in creating rich user experiences upon a solid foundation of code.</h5>
    // </div>
    return (
      <div id='app-greeting-container'>
        <picture>
            <a  href="https://www.google.com/maps/place/Geirangerfjord/@62.1047779,6.9351325,11z/data=!3m1!4b1!4m5!3m4!1s0x46169d427b268c51:0xb8c99540dcc397fe!8m2!3d62.101506!4d7.0940817" 
                target="_blank" rel="noopener noreferrer" id='app-greeting-text'
            >
                Geirangerfjord, Norway
            </a>
          <source srcSet={main1200pxWebp} media="(min-width: 992px)" type="image/webp" />
          <source srcSet={mainWebp} type="image/webp" />
          <source srcSet={main1200px} media="(min-width: 992px)" />
          <img src={main} id='main' alt='oh no!' className='fade-in' />
        </picture>
      </div>
    );
  }
}

export default Landing;
