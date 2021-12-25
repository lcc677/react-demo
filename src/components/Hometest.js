import React, { Component } from 'react'

export default class Hometest extends Component {
  constructor(props){
    super(props)
    this.state = {
      name:"react"
    }
  }
  handle = ()=>{
    this.setState({name:'react??'})
  }
  render() {
    const {name} = this.state
    const {item} = this.props
    return (
      <div>
        <span>{name},我的父是:{item.fathName}</span>
        <button onClick={this.handle}>点击</button>
      </div>
    )
  }
}
