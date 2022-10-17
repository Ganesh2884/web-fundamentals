// import React,{useState,useEffect} from 'react'
// import './UserList.css'
//  const UserList =() =>{

//      const [users, setUsers] = useState([]);
//     const url = 'https://dummyjson.com/users';
//     const fetchData = async ()=>{
//          await fetch(url)
//                             .then(response => {
//                             return response.json()})
//                             .then(data=>setUsers(data))

//     } 
//     useEffect(() => {
//         fetchData();

//     }, []);
    
//     return (
//       <div>
//           {users.map(user=>
//           <ul>
//               <li>{user.firstName} </li>
//               <li>{user.lastName}</li>
//               <li>{user.Phone}</li>
//               <li>{user.Email}</li>
//               <li>{user.weight}</li>
//           </ul>

             
//             )}
//             {/* <li>First Name</li>
//             <li>Last Name</li>
//             <li>Phone</li>
//             <li>DOB</li>
//             <li>Weight</li> */}

//             {/* <li>{this.props.user.firstName}</li> */}
//             {/* <li>{this.props.user.lastName}</li>
//             <li>{this.props.user.Email}</li>
//             <li>{this.props.user.Phone}</li>
//             <li>{this.props.user.weight}</li> */}
//       </div>
//     )
//   }

// export default UserList;

import axios from 'axios';
import './UserList.css'
import React, { useEffect, useState } from "react"
// import NotFound from './components/page/NotFound'

const UserList = () => {
  const [usersData, setUsers] = useState([])

//   const fetchData = () => {
//     fetch("https://dummyjson.com/users")
//       .then(response => {
//         return response.json()
//       })
//       .then(data => {
//         setUsers(data)
//       })
//   }

const fetchData = () => axios.get("http://localhost:8080/userlist")
.then(res=>{
    const result = res.data.users;
    console.log(result);
    const pushedData = usersData.push(result);
    setUsers(pushedData);
})

// fetchData()
//   useEffect(() => {
//     axios.get('https://dummyjson.com/users').then(response => {
//         console.log(response);
//       setUsers(response.data);
//     });
//   }, [usersData]);

  console.log(usersData)

//   console.log(usersData.users.length);
  useEffect(() => {
    fetchData()
  }, [])
// fetchData();

  return (
    <div>
      <ul>
        <li>firstName</li>
        <li>lastName</li>
        <li>Phone</li>
        <li>Email</li>
        <li>weight</li>
      </ul>
      {usersData.length === 0 ? (
        <ul>
          {usersData.users.map(user => (
            <table>
           
            <li className='usersData'>
              <th>FirsName</th>
                <li key={user.id}>{user.firstName}</li>
                <th>LastName</th>
                <li key={user.id}>{user.lastName}</li>
                <th>Phone</th>
                <li key={user.id}>{user.Phone}</li>
                <th>Email</th>
                <li key={user.id}>{user.Email}</li>
                <th>Weight</th>
                <li key={user.id}>{user.weight}</li>
            </li>  
            </table>
          ))}
        </ul>
      ) :<h1>users not found</h1>} 
    </div>
  )
}

export default UserList;
