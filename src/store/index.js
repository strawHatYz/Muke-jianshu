import { createStore} from 'redux'
import reducer from './reducer'
// 创建一个store（创建一个数据公共存储仓库 ）
const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// 把数据从reducer给到store，store可以从reducer查看数据多少
// 浏览器扩展调用REDUX_DEVTOOLS插件
export default store