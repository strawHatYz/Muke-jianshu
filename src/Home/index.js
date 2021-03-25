import React, { Component, Fragment } from 'react'
import TodoItem from './components/TodoItem'
import './index.css'

class TodoList extends Component {
  // 最优先执行constyroctor
  constructor(props) {
    super(props);
    // 当组件的statr或props发生变化的时候，render函数就会重新执  行。
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
  }
  // 首先执行componentWillMount>render>componentDidMount
  // 页面挂在的时候执行
  componentWillMount(){
    console.log('componentWillMount,当组件即将被挂载到页面执行')
  }
  // 当组件离得state或props发生改变,render函数就会重新执行
  render() {
    console.log('render 渲染')
    return (
      <Fragment>
        text
        <div>
          {/* 多行注释 */}
          <label htmlFor="inserArea">输入内容</label>
          <input id="inserArea" className="input" ref={(input)=>{this.input=input}} value={this.state.inputValue} onChange={this.handleInputChange} />
          <button onClick={this.handleButtonClick}>提交</button>
        </div>
        <ul>
          {this.getDodoItem()}
        </ul>
      </Fragment>
    )
  }
  // 组件被加载后自动执行
  componentDidMount(){
    console.log('componentDidMount,组件被加载后自动执行')
  }
  // 组件更新
  shouldComponentUpdate(){
    
    console.log('shouldComponentUpdate,组件更新之前,会被自动执行')
    //shouldComponentUpdate声明周期要求返回Boolean类型的结果，意思是你的组件是否需要更新？如果返回false不会更新组件，页面也就会产生不同的反馈。
    // 如果返回false就不会继续声明周期
    return true // 继续更新组件
  }
  // 组件被更新之前会自动执行。但是他在shouldComponentUpdate之后被执行,如果shouldComponentUpdate返回true执行,如果返回false就不会执行了。
  componentWillUpdate(){
    console.log('componentWillUpdate','组件被更新之前会自动执行。但是他在shouldComponentUpdate之后被执行')
  }
  
  componentDidUpdate(){
    console.log('componentDidUpdate','页面重新渲染后执行')
  }
  // 如果没有props参数，生命周期不会被执行
  componentWillReceiveProps(){
    console.log('componentWillReceiveProps','如果没有props参数，生命周期不会被执行')
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
    // e.target为DOM元素
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