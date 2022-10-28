import { Button, Drawer, Form, Input } from 'antd';
import React, { Fragment,useState } from 'react';
import UserList from './UserList';
import './Users.css';
// import { useState } from 'react';


function Users() {
	const [isDrawerOpen, setisDrawerOpen] = useState(false);
	const [firstName, setfirstName] = useState('');
	const [lastName, setlastName] = useState('');
	const [email,setEmail] = useState('');
	// const [password,setPassword] = useState('');
	const [usersList,setUsersList] = useState({});
	
	const showDrawer = ()=>{
		setisDrawerOpen(true)
	}

	const closeDrawer = ()=>{
		setisDrawerOpen(false);
	}

	const handleFirstName = (e)=>{
		setfirstName(e.target.value);
		console.log(e.target.value);
	}

	const handleLastName =(e)=>{
		setlastName(e.target.value);
		console.log(e.target.value);

	}
	const handleEmail = (e)=>{
		setEmail(e.target.value);
		console.log(e.target.value);
	}
	const handleSubmit= (e)=>{
		console.log(e)
		let usersData = {
			firstName:firstName,
			lastName:lastName,
			email:email,
		}
		console.log(usersData);
		setUsersList({
			usersData
		})
		clearInput();
		setisDrawerOpen(false);
	}

	const clearInput = ()=>{
		setfirstName('');
		setlastName('');
		setEmail('');
	}
	return (
		<Fragment>
			
			<Button type='primary' className='users' onClick={showDrawer}>
				<span>Add User</span>
			</Button>
			<Drawer open={isDrawerOpen} title='Add User Details' closeIcon={false} >
				<Form onFinish={handleSubmit}>
					<Form.Item label='FirstName' name='FirstName'> 
						<Input type='text' placeholder='Please enter firstName' onChange={handleFirstName}/>
					</Form.Item>
					<Form.Item label='LastName' name='LastName'>
						<Input placeholder='Please enter lastName' onChange={handleLastName}/>
					</Form.Item>
					<Form.Item label='Email'name='Email'>
						<Input type='email' placeholder='Please enter email' onChange={handleEmail}/>
					</Form.Item>
					<Form.Item label='Password' name='Password'>
						<Input type='password' placeholder='Please enter password' />
					</Form.Item>
					<div className='btn'>
						<Form.Item>
							<Button type='primary' danger htmlType='submit'>Submit</Button>
						</Form.Item>
						<Form.Item>
							<Button type='primary' danger onClick={closeDrawer}>Cancel</Button>
						</Form.Item>
					</div>	
				</Form>
			</Drawer>
			<UserList finalData= {usersList}/>
		</Fragment>
	)
}

export default Users;