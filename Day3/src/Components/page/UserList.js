import React, { Fragment } from 'react'
import './UserList.css';
function UserList() {
  return (
    <Fragment>
      <header className='userlist'>
        <div className='cnt'>
           <p>FirstName</p>
           <p>LastName</p>
           <p>Email</p> 
           <p>Actions</p>
        </div>
        <div>
            
        </div>
      </header>
    </Fragment>
  )
}

export default UserList;