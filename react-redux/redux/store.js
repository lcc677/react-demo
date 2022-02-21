// 引入createStore,创建store对象
import {createStore,applyMiddleware} from 'redux'
// 引入reducers
import countReducers from './count_reducers'
// 引入异步action相关包

import thunk from 'redux-thunk'

// 创建store对象
const store = createStore(countReducers,applyMiddleware(thunk))

export default store