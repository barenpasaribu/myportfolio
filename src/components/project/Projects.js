import React, { Component } from 'react'
import { Tabs, Tab, Grid, Cell, } from 'react-mdl';

import CardReact from './CardReact';
import CardAngular from './CardAngular';
import CardVue from './CardVue';
import CardMongo from './CardMongo';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 }
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          <CardReact name='Project #1' />
          <CardReact name='Project #2' />
          <CardReact name='Project #3' />
          <CardReact name='Project #4' />
        </div>
      )
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          <CardAngular name='Project #1' />
          <CardAngular name='Project #2' />
          <CardAngular name='Project #3' />
          <CardAngular name='Project #3' />
        </div >
      )
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          <CardVue name="Project #1" />
          <CardVue name="Project #2" />
          <CardVue name="Project #3" />
          <CardVue name="Project #4" />
        </div>
      )
    } else if (this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
          <CardMongo name="Project #1" />
          <CardMongo name="Project #2" />
          <CardMongo name="Project #3" />
          <CardMongo name="Project #4" />
        </div>
      )
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>Angular</Tab>
          <Tab>VueJS</Tab>
          <Tab>MongoDB</Tab>
        </Tabs>
        <div>
          <Grid>
            <Cell col={12}>
              <div className="content">
                {this.toggleCategories()}
              </div>
            </Cell>
          </Grid>
        </div>
      </div >
    )
  }
}

export default Projects
