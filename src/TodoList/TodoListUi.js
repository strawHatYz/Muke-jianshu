import React,{ Component } from "react";
import { Input, Button, List } from 'antd'

class TodoListUi extends Component {
  render(){
    return (
      <div style={{ padding: '10px ' }}>
      <div>
        <div>
          <Input value={this.props.inputValue}  placeholder='输入' style={{ width: '300px', marginRight: '10px' }}  onChange={this.props.handleInputChange}/>
          <Button type="primary" onClick={this.props.handleButtonClick}>提交</Button>
        </div> 
        <List
        style = {{marginTop:'10px',width:'300px'}}
          size="small"
          header={<div>Header</div>}
          footer={<div>Footer</div>}
          bordered
          dataSource={this.props.list}
          renderItem={(item,index) => <List.Item onClick={()=>{this.props.handleItemDelect(index)}}>{item}</List.Item>}
    />
      </div>
    </div>
    )
  }
}
export default TodoListUi