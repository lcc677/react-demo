
const initState = 0

function countReducers(preState=initState,action){
  console.log(preState)
  console.log(action)
  const {type,data} = action
  switch(type){
    case 'increment':
      return preState + data
    case 'decrement':
      return preState - data
    default:
      return preState
  }
}

export default countReducers