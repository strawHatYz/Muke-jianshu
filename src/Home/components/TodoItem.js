import React,{Component} from 'react'
 
class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
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
export default TodoItem
