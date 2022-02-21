import React, { Component } from "react";
import { connect } from "react-redux";

import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction
} from "../redux/actions/count";

class Count extends Component {
  increment = () => {
    const { value } = this.selectNumber;
    this.props.add(value * 1);
  };
  decrement = () => {
    const { value } = this.selectNumber;
    this.props.cut(value * 1);
  };
  incrementIfodd = () => {
    const { value } = this.selectNumber;
    const count = this.props.count;
    if (count % 2 !== 0) {
      this.props.add(value * 1);
    }
  };
  incrementAsync = () => {
    const { value } = this.selectNumber;
    this.props.asyncAdd(value * 1, 500);
    // setTimeout(() => {
    //   const { value } = this.selectNumber
    //   store.dispatch(createIncrementAction(value*1))
    // }, 2000);
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>当前求和为:{this.props.count}</h1>
        <h1>当用户个数:{this.props.userList.length}</h1>
        <select ref={(c) => (this.selectNumber = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>{" "}
        &nbsp;&nbsp;
        <button onClick={this.increment}>加</button>&nbsp;
        <button onClick={this.decrement}>减</button>&nbsp;
        <button onClick={this.incrementIfodd}>奇数加</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>&nbsp;
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ count: state.count,userList:state.user });

// const mapDispatchToProps = (dispatch) => ({
//   add: (value) => dispatch(createIncrementAction(value)),
//   cut: (value) => dispatch(createDecrementAction(value)),
//   asyncAdd: (value, time) => dispatch(createIncrementAsyncAction(value, time))
// });
// 也可以使用 key 对应一个action方法的对象
// react-redux可以自动转化
const mapDispatchToProps = {
  add:createIncrementAction,
  cut:createDecrementAction,
  asyncAdd:createIncrementAsyncAction
};


export default connect(mapStateToProps, mapDispatchToProps)(Count);
