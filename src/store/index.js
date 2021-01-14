import { createStore,applyMiddleware,compose} from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'
//redux-thunk对store的Dispatch()做一个升级，使本来只可以接收对象的action可以接收函数 

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(
  applyMiddleware(thunk)
); 
// 创建一个store（创建一个数据公共存储仓库 ）
const store = createStore(reducer,enhancer)
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// 把数据从reducer给到store，store可以从reducer查看数据多少
// 调用applyMiddleware使用thunk中间件
// 浏览器扩展调用REDUX_DEVTOOLS中间件
export default store