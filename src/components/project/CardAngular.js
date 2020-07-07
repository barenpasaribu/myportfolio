import React, { Component } from 'react'
import {
  Card, CardText, CardTitle, CardActions,
  Button, IconButton, CardMenu
} from 'react-mdl'

export default class CardAngular extends Component {
  constructor(props) {
    super(props);
    this.props = { name: '' }
  }
  render() {
    return (
      <Card shadow={0} style={{ width: '450', margin: 'auto' }}>
        <CardTitle
          style={{
            color: 'black',
            height: '176px',
            background: 'url(https://cdn.freebiesupply.com/logos/large/2x/angular-icon-1-logo-png-transparent.png) center / cover'
          }}>
          {this.props.name}
        </CardTitle>
        <CardText>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
          </CardText>
        <CardActions border>
          <Button colored>GitHub</Button>
          <Button colored>Codepen</Button>
          <Button colored>LiveDemo</Button>
        </CardActions>
        <CardMenu style={{ color: '#fff' }}>
          <IconButton name="share" />
        </CardMenu>
      </Card>
    )
  }
}


