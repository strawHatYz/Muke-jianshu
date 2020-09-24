import React,{Component} from 'react'
import PropTypes from 'prop-types'
 
class TodoItem extends Component {
  constructor(props) {
    super(props)
    // 当父组件的render执行时，子组件render会重新执行一次
    this.handleClick = this.handleClick.bind(this)
  }
  // 当组件离得state或props发生改变,render函数就会重新执行
  render () {
    let {content} = this.props
    return (
      <div onClick={this.handleClick.bind(this)}>
        {content}
      </div>
    )
  }
  handleClick(){
    const {deleteItem,index} = this.props
    deleteItem(index)
    
  }
  // 当一个组件要从父组件接收参数，只要父组件单render被执行，子组件的声明周期就会被执行。
  // 如果这个组件第一次存在父组件中，不会执行 
  // 如果这个组件之前已经存在父组件中，才会执行
  componentWillReceiveProps(){
    console.log('child componentWillReceiveProps','当一个组件要从父组件接收参数，只要父组件单render被执行，子组件的声明周期就会被执行。')
  }
  // 当组件即将被从页面中剔除的时候，会被执行
  componentWillUnmount(){
    console.log('child componentWillUnmount 在组件被移除前的一瞬间这个组件将会执行')
  }
}
// Prop Types 作为类型验证，验证父组件传值类型是否正确。
TodoItem.propTypes = {
  content :PropTypes.string,
  deleteItem: PropTypes.func,
  index:PropTypes.number.isRequired // isRequired 代表必须传递
}
TodoItem.defaultProps = {
  content:'你好'
}
export default TodoItem
