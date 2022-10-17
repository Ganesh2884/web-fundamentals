import React, { PureComponent } from 'react'
import { Button } from 'antd';
import './TodoList.css';
 class TodoList extends PureComponent {
    _handleDelete(id){
        this.props._handleDelete(id);
    }
    render(){
  return (
    <div className='todolist'>
    
    <h4>List of Tasks shown below</h4>
    <div>
    <ul className='orderitems'>
     <li >  {this.props.items.map(item => (
          <li className='listitems' key={item.id}>{item.text} 
          <Button className='btn' onClick={this._handleDelete.bind(this,item.id)}>Delete</Button></li>
        ))} 
    </li> 
    </ul>
    </div>     
    </div>
  )
 }
}

export default TodoList;