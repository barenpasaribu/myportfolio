import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'

export default class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className='landing-grid'>
          <Cell col={12}>
            <img
              src="https://i.ya-webdesign.com/images/avatar-png-icon-6.png"
              alt="avatar"
              className="avatar-img"
            />
            <div className="banner-text">
              <h1>Full Stack Developer</h1>

              <hr />

              <p>HTML/CSS | Bootstrap | JavaScript | React | React Native | NodeJs | Express | MonggoDB & Sequelize</p>

              <div className="social-links">
                {/* Linkedin */}
                <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                </a>
                {/* Github */}
                <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-github-square" aria-hidden="true"></i>
                </a>
                {/* Freecodecamp */}
                <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-free-code-camp" aria-hidden="true"></i>
                </a>
                {/* Youtube */}
                <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-youtube-square" aria-hidden="true"></i>
                </a>
              </div>

            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}
