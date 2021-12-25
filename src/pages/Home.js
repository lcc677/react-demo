import React, { Component } from 'react'
import Hometest from '../components/Hometest'

export default class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      name:'home'
    }
    this.handle = this.handle.bind(this)
  }
  handle(event){
    console.log("-----",event.target.value)
    this.setState({
      name: event.target.value
    })
  }
  render() {
    const item = {
      fathName:'Home'
    }
    return (
      <div>
        <span>我是home页面</span>
        <Hometest item={item}></Hometest>
        <input value={this.state.name} onChange={this.handle}></input>
      </div>
    )
  }
}
