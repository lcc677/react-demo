import React, { Component } from 'react'

export default class Count extends Component {

  state = {
    count:0
  }

  increment = () => {
    const {value} = this.selectNumber
    const {count} = this.state
    this.setState({
      count:count+value*1
    })
  }
  decrement = () => {
    const { value } = this.selectNumber
    const { count } = this.state
    this.setState({
      count:count - value*1
    })
  }
  incrementIfodd = () => {
    const { value } = this.selectNumber
    const { count } = this.state
    if(value % 2 !== 0 ){
      this.setState({
        count:count + value * 1
      })
    }
  }
  incrementAsync = () => {
    setTimeout(() => {
      const { value } = this.selectNumber
      const { count } = this.state
      this.setState({
        count:count + value * 1
      })
    }, 2000);
  }
  

  render() {
    const { count } = this.state
    return (
      <div>
        <h1>当前求和为:{ count }</h1>
        <select ref={c => this.selectNumber = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select> &nbsp;&nbsp;
        <button onClick={this.increment}>加</button>&nbsp;
        <button onClick={this.decrement}>减</button>&nbsp;
        <button onClick={this.incrementIfodd}>奇数加</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>&nbsp;
      </div>
    )
  }
}
