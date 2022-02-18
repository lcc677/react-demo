import React from "react";
import ReactDom from "react-dom";
import App from './App'
import store from './redux/store'

ReactDom.render(<App />, document.getElementById('app'))

store.subscribe(()=>{
  ReactDom.render(<App />, document.getElementById('app'))
})