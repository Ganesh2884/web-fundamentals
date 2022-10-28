import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';

import './NavBar.css';
 function NavBar() {
  return (
    <Fragment >
      <div className='navbar'>
       
        <Link to='/' className='home'><h1>Home</h1></Link>
        <Link to='users' className='home'><h1>Users</h1></Link>
        <Link to='todo' className='home'><h1>Todo App</h1></Link>
      </div>
    </Fragment>
  )
}

export default NavBar;