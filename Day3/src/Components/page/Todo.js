import { Button, Input, Modal,Form } from 'antd';
import React, { Fragment } from 'react';
import './Todo.css';
import { useState } from 'react';
// import Users from './Users';
// import TodoList from './TodoList';



export default function Todo() {
	const [isModelOpen, setisModelOpen] = useState(false);
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [todos, setTodos] = useState([]);


	let id  =0;

	const showModel = ()=>{
		setisModelOpen(true);
	}

	const closeModel = ()=>{
		setisModelOpen(false)
	}
	
	const handleTitle =(e)=>{
		setTitle(e.target.value);
		//console.log(e.target.value);
	}

	const handleDescription =(e)=>{
		//console.log(e.target.value)
		setDescription(e.target.value);
	}

	// const data = {
	// 	title:title,
	// 	description: description
	// };

	const deleteHandler= (id)=>{
		console.log(id)
		console.log("Deleted")
		// setTodos(todos.filter((el)=>{el.id!== todosid}))
		// todos.filter(todo=>todo.id !== id)
	}

	const handleSubmit = (e)=>{
		// e.preventDefault();
		console.log("Inside handle Click");
		
		// const title = e.title;
		// const content = e.description;
		// console.log(title, content);
		let todoList  = {
			id:id+1,
			title:title,
			description:description
		}
		console.log("one todo",todoList)
		setTodos([...todos, todoList])
		console.log("todos",todos)
		clearInput();
		setisModelOpen(false);
	}
	const clearInput =()=>{
		setTitle('');
		setDescription('');
	}
	
	return (
		<Fragment>
				<div>
					<Button type='primary' className='todo-app' onClick={showModel}>
						<span>Add Todo</span>
					</Button>	
				</div>
				<Modal title="Add tasks as many you want" centered width={400} zIndex={999}
								open={isModelOpen} 
								closable={false}
								okButtonProps={{ style: { display: 'none' } }}
								cancelButtonProps={{ style: { display: 'none' } }}
								>

					<Form onFinish={(e)=>{handleSubmit(e)}}>
						<Form.Item label="Title" name="Title">
							<Input placeholder="Add Titile" className='input-fields' value= {title} onChange={handleTitle}/>
						</Form.Item>
						<Form.Item label="Description" name="Decription">
							<Input className='input-fields' placeholder='Add Description' value={description} onChange={handleDescription}/>	
						</Form.Item>
						<div className='btn'>
							<Form.Item>	
								<Button  block type='primary'danger htmlType='submit' >Submit</Button>	
							</Form.Item>
							<Form.Item>	
								<Button block type='primary' onClick={closeModel} danger  >Cancel</Button>	
							</Form.Item>
						</div>
					</Form>
				</Modal>
				<div className='todolist'>
					<div>
					<table >
            <tr className='cnt'>
              <td>ID</td>
              <td>Title</td>
              <td>Description</td>
              <td>Actions</td>
            </tr>


          
          { todos.map((todo,i)=>{
          	return [
            	<tr key ={i} className='cnt'>
            	<td >{todo.id}</td>
            	<td>{todo.title}</td>
           	 	<td>{todo.description}</td>
				<div >
					<td><Button onClick={showModel}>Edit</Button></td>
					<td><Button onClick={deleteHandler()}>Delete</Button></td>
				</div>
          		</tr>
			];
			})
         }
        </table> 

		</div>
      </div>
	</Fragment>
	)
}

