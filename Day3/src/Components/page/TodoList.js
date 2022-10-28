// import { Header } from 'antd/lib/layout/layout'
import React, {useState, Fragment } from 'react'
import './TodoList.css';


export default function TodoList({allTodos}) {
  const [todosData, setTodosData] = useState('');

  console.log("------------",allTodos);
  // const todosRows = data.map((todo)=>{
  //   return(
  //     <tr>
  //       <td>{todo.id}</td>
  //       <td>{todo.title}</td>
  //       <td>{todo.description}</td>
  //     </tr>
  //   );
  // })

  const prods = [
    {id: 1, title: 'product1', description: 100},
    {id: 2, title: 'product2', description: 200},
    {id: 3, title: 'product3', description: 300},
];

  const addTodos = ()=>{
    //console.log(data.description);
    // const totalTodos = todosData.length;
    // data.id = totalTodos+1;
    // const updateTodosData = [...todosData];
    // updateTodosData.push(data);
    // setTodosData(updateTodosData);
  }
  // props.func(addTodos);
  return (
    <Fragment>
      <header className='todolist'>
        <table >
            <tr className='cnt'>
              <td>ID</td>
              <td>Title</td>
              <td>Description</td>
              <td>Actions</td>
            </tr>
          
          {
        allTodos.map((todo)=>{
          return (
            <tr className='cnt'>
            <td key={todo.toString()}>{todo.id}</td>
            <td>{todo.title}</td>
            <td>{todo.description}</td>
          </tr>
          );
         
        })
      }
        </table> 
      </header>
    </Fragment>
  )
}
