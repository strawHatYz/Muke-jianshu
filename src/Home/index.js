import React, { Component, Fragment } from 'react'
import TodoItem from './components/TodoItem'
import './index.css'

class TodoList extends Component {
  // 最优先执行constyroctor
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: [],
    }
    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
  }
  render() {
    return (
      <Fragment>
        <div>
          {/* 多行注释 */}
          <label htmlFor="inserArea">输入内容</label>
          <input id="inserArea" className="input" value={this.state.inputValue} onChange={this.handleInputChange} />
          <button onClick={this.handleButtonClick}>提交</button>
        </div>
        <ul>
          {this.getDodoItem()}
        </ul>
      </Fragment>
    )
  }
  getDodoItem() {
    return this.state.list.map((item, index) => {
      return (
        <div key={index}>
          <TodoItem content={item} index={index} deleteItem={this.handleItemDelete} />
          {/* return <li key={index} dangerouslySetInnerHTML={{__html:item}} onClick={this.handleItemDelete.bind(this,index)}></li> */}
        </div>
      )
    })
  }
  handleInputChange(e) {
    // 使用serState改变
    // this.setState({
    //   inputValue: e.target.value
    // }) // 新版不推荐变更，推荐使用函数,变成异步数据设置
    const value = e.target.value
    this.setState(() => ({ // es6返回对象直接写小括号
      inputValue: value
    }))
  }
  handleButtonClick() {

    this.setState((prevState) => ({ // pervState等价于this.State
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }))
  }
  handleItemDelete(index) {
    // state 不允许我们做任何改变
    this.setState((prevState) => {
      const list = [...prevState.list]
      list.splice(index, 1)
      return {
        list
      }
    })
  }
}

const Home = () => {
  return (
    // 最外层包囊元素并且不被显示 可以使用Fragmenrt占位符（React16）
    <TodoList />
  )
}
export default Home;