import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import { connect } from 'react-redux'
import { createAddUserActions } from './../redux/actions/user';

class User extends Component {
  addUser = ()=>{
    this.props.addUser({id:nanoid(),name:'jery'})
  }
  render() {
    
    return (
      <div>
        <button onClick={this.addUser}>添加一个用户</button>
        <p>当前求和为：{this.props.count}</p>
        <ul>
          {this.props.userList.map(item=><li key={item.id}>{item.name}</li>)}
        </ul>
      </div>
    )
  }
}


export default connect(
  state => ({userList:state.user,count:state.count}),
  {
    addUser:createAddUserActions
  }
)(User)