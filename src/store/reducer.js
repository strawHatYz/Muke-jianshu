import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_INPUT_VALUE,INIT_LIST_ACTION} from './actionTypes'
// 创建默认仓库数据
const defaultState = {
  inputValue: '',
  list: []
}
// reducer 可以接受state,但是绝不能更改state
// reducer是纯函数文件，纯函数指的是，给固定的输入一定就会有固定的输出,而且不会有任何副作用
export default (state = defaultState,action)=>{
  // state表示所有仓库里面存储的数据
  // action指用户传过来的那句话
  if(action.type===CHANGE_INPUT_VALUE){
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  } 
  if(action.type===ADD_TODO_ITEM){
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }
  if(action.type===DELETE_INPUT_VALUE){
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index,1)
    return newState
  }
  if(action.type===INIT_LIST_ACTION){
    const newState = JSON.parse(JSON.stringify(state))
    newState.list = action.data
    return newState
  }
  return state
}