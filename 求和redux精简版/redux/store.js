// 引入createStore,创建store对象
import {createStore} from 'redux'
// 引入reducers
import countReducers from './count_reducers'

// 创建store对象
const store = createStore(countReducers)

export default store