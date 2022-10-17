import React, { Fragment } from 'react'
import { Input } from 'antd';
import './Inputfields.css';
import TodoList from '../TodoList/TodoList';
import axios from 'axios';

//  function InputFields() {
    // const [items, setItems] = useState("task 1");
//     const handleAddTask = (e)=>{
//         console.log(e.target.value);
//         setItems(e.target.value);
//     }

//     const handleTaskSubmit = (e)=>{
//         e.preventDefault();
//         console.log(e);
//         if (items.length === 0) {
//             return;
//           }

//         // const newItem = {
//         //     text: items.text,
//         //     id:Date.now()
//         // }

//         // setItems(state=>{
//         //     items:state.items.concat(newItem)
//         // })
//     }   
//   return (
//     <Fragment>
//         <div className='inputfields'>
//             <Form onSubmit={handleTaskSubmit}>
//                 <Form.Item>
//                     <Input className='input' value={items} placeholder='Enter the todo Task' onChange={handleAddTask}/>
//                 </Form.Item>
//               <Form.Item><Button className='btn' htmlType='submit'>Add Task</Button></Form.Item>
//             </Form>
//             <TodoList items={items}/>
//         </div>  
//     </Fragment>
//   )
// }





class InputFields extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: [], text: '' };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.delete = this.delete.bind(this);
      // this.getAllUsers = this.getAllUsers.bind(this);
    }


    // getAllUsers(){
    //   axios.get('/user').then(res=>{
    //     console.log(res.data);
    //   })
    // }

    
    handleChange(e) {
        this.setState({ text: e.target.value });
      }
    
      handleSubmit(e) {
        // axios.post("http://localhost:8080/todos",POST{
        //   headers:"Body"
        // }).then(response=>response.json());
        let newTask1 = {
          "id" : 1,
          "body" : this.state.text
        }
        e.preventDefault();
        axios.post("/tasks",newTask1).then(res=>{
          console.log("Result from api",res.data)
        }).catch((ex)=>{
          console.log(ex,"*********")
        })
        
       
        if (this.state.text.length === 0) {
          return;
        }
        const newTask = {
          text: this.state.text,
          id: Date.now()
        };
        this.setState(state => ({
          items: state.items.concat(newTask),
          text: ''
        }));
        // getAllUsers()
      }
     
    // delete(id){ // How that function knows id of item that need to delete and how to delete item?
    // this.setState(this.item.id)
    // }

    delete(id){
        console.log(id);
        this.setState(prevState => ({
            items: prevState.items.filter(el => el.id !== id )
        }));

        // axios.delete(`http://localhost:8080/todos/${id}')
        axios.delete(`/user/${id}`)  
        .then(res => {  
          console.log(res);  
          console.log(res.data);  
    
        })  
      } 
    render() {
      return (
        <Fragment>
      
        <div className='inputfields'>
          <form onSubmit={this.handleSubmit}>
            <Input
                className='input'
              id="new-todo"
              onChange={this.handleChange}
              value={this.state.text}
            />
            <button className='btn'>
              Add Task
            </button>
          </form>
          
        </div>
        <TodoList items={this.state.items} _handleDelete={this.delete.bind(this)}/>
              
        </Fragment>
      );
    }
  
  }


  export default InputFields;