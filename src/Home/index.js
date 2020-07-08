import React, { Component, Fragment } from 'react'


class TodoList extends Component {
  // 最优先执行constyroctor
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: ['学习英文','学习React'],
    }
  }
  render() {
    return (
    <Fragment>
      <div>
        <input value={this.state.inputValue} onChange={this.handleInputChange.bind(this)}/>
        <button onClick={this.handleButtonClick.bind(this)}>提交</button>
      </div>
      <ul>
        {
          this.state.list.map((item,index) => {
          return <li key={index} onClick={this.handleItemDelete(index).bind(this)}>{(index+1+' ')+item}</li>
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
  handleItemDelete(){
    
  }
}

const Home = () => {
  return (
    // 最外层包囊元素并且不被显示 可以使用Fragmenrt占位符（React16）
      <TodoList />
  )
}
export default Home;