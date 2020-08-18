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
