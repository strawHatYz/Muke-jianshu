import React, { Component } from 'react'
import 'antd/dist/antd.css'

import store from './../store'
import {getInputChangeAction,getAddItemAction,getDeleteItemAction} from './../store/actionCreators'
import TodoListUi from './TodoListUi'
class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.hanleStoreChange = this.hanleStoreChange.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.handleItemDelect = this.handleItemDelect(this)
    // stroe.subscrib 只要发生改变,函数会自动执行内部环境
    store.subscribe(this.hanleStoreChange)
  }
  render() {
    return <TodoListUi 
    inputValue={this.state.inputValue}
    list={this.state.list}
    handleInputChange={this.handleInputChange}
    handleButtonClick={this.handleButtonClick}
    handleItemDelect={this.handleItemDelect}
    />
  }
  handleInputChange (params) {
    const action = getInputChangeAction(params.target.value)
    store.dispatch(action)
  }
  hanleStoreChange () {
    // 当感知stroe发生改变，会从store重新取一次数据，会替换当前的数据
    this.setState(store.getState())
  }
  handleButtonClick () {
    const action = getAddItemAction()
    // 把action传递给reducer
    store.dispatch(action)
  }
  handleItemDelect(index) {
    const action = getDeleteItemAction(index);
    store.dispatch(action)
  }
}

export default TodoList