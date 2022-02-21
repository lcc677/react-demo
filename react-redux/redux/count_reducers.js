import { INCREMENT,DECREMENT } from "./constant"

const initState = 0

function countReducers(preState=initState,action){
  console.log(preState)
  console.log(action)
  const {type,data} = action
  switch(type){
    case INCREMENT:
      return preState + data
    case DECREMENT:
      return preState - data
    default:
      return preState
  }
}

export default countReducers