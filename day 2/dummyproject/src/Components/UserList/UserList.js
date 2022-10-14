import React, { PureComponent } from 'react'
import './UserList.css'
 class UserList extends PureComponent {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
          {this.props.userList.map(user=>
          <ul>
              <li>{user.firstName} </li>
              <li>{user.lastName}</li>
              <li>{user.Phone}</li>
              <li>{user.Email}</li>
              <li>{user.weight}</li>
          </ul>

             
            )}
            {/* <li>First Name</li>
            <li>Last Name</li>
            <li>Phone</li>
            <li>DOB</li>
            <li>Weight</li> */}

            {/* <li>{this.props.user.firstName}</li> */}
            {/* <li>{this.props.user.lastName}</li>
            <li>{this.props.user.Email}</li>
            <li>{this.props.user.Phone}</li>
            <li>{this.props.user.weight}</li> */}
      </div>
    )
  }
}

export default UserList;