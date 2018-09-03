import React, { Component } from 'react';
import '../styles/skills.css';
import react from '../images/react.png'
import javascript from '../images/javascript.jpg'
import rails from '../images/rails.png'
import css from '../images/css.png'
import html from '../images/html.png'
import ruby from '../images/ruby.png'
import reactnative from '../images/reactnative.png'
import { Grid, Image } from 'semantic-ui-react'

class Skills extends Component {
  render() {
    return (
      <div id='skills-container'>
        <div id='skills-title'>
          Skills
        </div>
        <div id='skills-list'>




          <Grid centered columns={3} >

            <Grid.Row centered columns={3} >
              <Grid.Column>
                <Image src={react} />
              </Grid.Column>
              <Grid.Column>
                <Image src={javascript} />
              </Grid.Column>
              <Grid.Column>
                <Image src={rails} />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row centered columns={3} >
              <Grid.Column>
                <Image src={ruby} />
              </Grid.Column>
              <Grid.Column>
                <Image src={html} />
              </Grid.Column>
              <Grid.Column>
                <Image src={css} />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row centered columns={3} >
              <Grid.Column>
                <Image src={reactnative} />
              </Grid.Column>
            </Grid.Row>

          </Grid>
        </div>
      </div>
    );
  }
}

export default Skills;
