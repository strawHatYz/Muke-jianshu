import React, { Component, Fragment } from 'react'
import './index.css'
import TodoItem from './components/TodoItem'

class TodoList extends Component {
  // 最优先执行constyroctor
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list:[],
    }
  }
  render() {
    return (
    <Fragment>
      <div>
        {/* 多行注释 */}
        <label htmlFor="inserArea">输入内容</label>
        <input id="inserArea" className="input" value={this.state.inputValue} onChange={this.handleInputChange.bind(this)}/>
        <button onClick={this.handleButtonClick.bind(this)}>提交</button>
      </div>
      <ul>
        {
          this.state.list.map((item,index) => {
            return (
              <div>
                <TodoItem content={item,index}/>
                 {/* return <li key={index} dangerouslySetInnerHTML={{__html:item}} onClick={this.handleItemDelete.bind(this,index)}></li> */}
              </div>
            )
          })
        }
      </ul>
    </Fragment>
    )
  }
  handleInputChange(e){
    // 使用serState改变
    this.setState({
      inputValue: e.target.value
    })
  }
  handleButtonClick(){
    this.setState({
      list:[...this.state.list, this.state.inputValue],
      inputValue:''
    })
  }
  handleItemDelete(index){
    // immtable 
    // state 不允许我们做任何改变
    const list = [...this.state.list]
    list.splice(index,1)
    this.setState({
      list
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