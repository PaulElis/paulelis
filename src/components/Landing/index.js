import React, { Component } from 'react';
import './index.css';
import main from '../../images/main/main.jpg'
import mainWebp from '../../images/main/main.webp'
import main992px from '../../images/main/main992px.jpg'
import main992pxWebp from '../../images/main/main992px.webp'
import main1200px from '../../images/main/main1200px.jpg'
import main1200pxWebp  from '../../images/main/main1200px.webp'

class Landing extends Component {

  render() {
    return (
      <div id='app-greeting-container'>
        <picture>
          <source srcSet={main1200pxWebp} media="(min-width: 1200px)" type="image/webp" />
          <source srcSet={main992pxWebp} media="(min-width: 992px)" type="image/webp" />
          <source srcSet={mainWebp} type="image/webp" />
          <source srcSet={main1200px} media="(min-width: 1200px)" />
          <source srcSet={main992px} media="(min-width: 992px)" />
          <img src={main} id='main' alt='oh no!' className='fade-in' />
        </picture>
        <div id='app-content'>
          <h2 id='app-title'>Developer.</h2>
          <h5 id='app-description'>Interested in creating rich user experiences upon a solid foundation of code.</h5>
        </div>
      </div>
    );
  }
}

export default Landing;
