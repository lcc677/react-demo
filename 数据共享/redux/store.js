// 引入createStore,创建store对象
import {createStore,applyMiddleware,combineReducers} from 'redux'
// 引入reducers
import countReducers from './reducers/count'
import userReducers from './reducers/user'
// 引入异步action相关包

import thunk from 'redux-thunk'

const allReducers = combineReducers({
  count:countReducers,
  user:userReducers
})

// 创建store对象
const store = createStore(allReducers,applyMiddleware(thunk))

export default store