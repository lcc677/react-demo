import { ADDUSER } from "../constant";

const initUserList = [
  { id:1, name:'张三' },
  { id: 2, name: '李四' },
  { id: 3, name: '王五'}
]

function userReducer(state=initUserList,action){
  const {type,data} = action
  switch(type){
    case ADDUSER:
      return [...state,data]
    default:
      return state
  }
}

export default userReducer