import React, { Component } from 'react'
import Count from './containers/Count'
import User from './containers/User'

export default class App extends Component {
  render() {
    return (
      <div>
        <Count />
        <div style={{width:"10px",height:"10px"}}></div>
        <User />
      </div>
    )
  }
}
