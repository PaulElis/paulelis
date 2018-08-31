import React, { Component } from 'react';
import '../styles/skills.css';
import react from '../images/react.png'
import javascript from '../images/javascript.jpg'
import rails from '../images/rails.png'
import css from '../images/css.png'
import html from '../images/html.png'
import ruby from '../images/ruby.png'
import { Grid, Image } from 'semantic-ui-react'

class Skills extends Component {
  render() {
    return (
      <div id='skills-container'>
        Skills
        <div id='skills-list'>
          <Grid columns={3} >
            <Grid.Row>
              <Grid.Column>
                <Image src={react} size='small' />
              </Grid.Column>
              <Grid.Column>
                <Image src={javascript} size='small' />
              </Grid.Column>
              <Grid.Column>
                <Image src={rails} size='small' />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column>
                <Image src={ruby} size='small' />
              </Grid.Column>
              <Grid.Column>
                <Image src={html} size='small' />
              </Grid.Column>
              <Grid.Column>
                <Image src={css} size='small' />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Skills;
