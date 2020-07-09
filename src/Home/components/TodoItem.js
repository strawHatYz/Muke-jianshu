import React,{Component} from 'react'
 
class TodoItem extends Component {
  render () {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClcick.bind()
  }
  return <div onClick={this.handleClick.bind(this)}>{this.props.content}</div>
  }
  handleClick(){
    alert(this.props.index)
  }
}
export default TodoItem
