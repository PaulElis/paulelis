import React, { Component } from 'react';
import './index.css';
import pic from '../../images/new/pic.jpg'
import picWebp from '../../images/new/pic.webp'
import pic992px from '../../images/new/pic992px.jpg'
import pic992pxWebp from '../../images/new/pic992px.webp'
import pic1200px from '../../images/new/pic1200px.jpg'
import pic1200pxWebp  from '../../images/new/pic1200px.webp'

class Landing extends Component {

  render() {
    // <div id='app-content'>
    //   <h2 id='app-title'>Developer.</h2>
    //   <h5 id='app-description'>Interested in creating rich user experiences upon a solid foundation of code.</h5>
    // </div>
    return (
      <div id='app-greeting-container'>
        <picture>
          <source srcSet={pic1200pxWebp} media="(min-width: 1200px)" type="image/webp" />
          <source srcSet={pic992pxWebp} media="(min-width: 992px)" type="image/webp" />
          <source srcSet={picWebp} type="image/webp" />
          <source srcSet={pic1200px} media="(min-width: 1200px)" />
          <source srcSet={pic992px} media="(min-width: 992px)" />
          <img src={pic} id='main' alt='oh no!' className='fade-in' />
        </picture>
      </div>
    );
  }
}

export default Landing;
