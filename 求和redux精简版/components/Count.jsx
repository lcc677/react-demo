import React, { Component } from 'react'
import store from '../redux/store'

export default class Count extends Component {

  // 每一个组件都要订阅一下store
  // componentDidMount(){
  //   store.subscribe(()=>{
  //     console.log('加了')
  //     this.setState({})
  //   })
  // }

  increment = () => {
    const {value} = this.selectNumber
    store.dispatch({
      type:'increment',
      data:value*1
    })
  }
  decrement = () => {
    const { value } = this.selectNumber
    store.dispatch({
      type:'decrement',
      data:value*1
    })
  }
  incrementIfodd = () => {
    const { value } = this.selectNumber
    const count = store.getState()
    if(count % 2 !== 0 ){
      store.dispatch({
        type:'increment',
        data:value*1
      })
    }
  }
  incrementAsync = () => {
    setTimeout(() => {
      const { value } = this.selectNumber
      store.dispatch({
        type:'increment',
        data:value*1
      })
    }, 2000);
  }
  

  render() {
    return (
      <div>
        <h1>当前求和为:{ store.getState() }</h1>
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
