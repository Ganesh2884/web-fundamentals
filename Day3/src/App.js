// import './App.css';
// import AddUser from './Components/AddUser/AddUser';
// // import AddButton from './Components/AddButton';
// import Header from './Components/Header/Header';
// import 'antd/dist/antd.min.css';
// // import UserList from './Components/UserList/UserList';
// import React ,{ PureComponent } from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';

// // import { Header } from 'antd/lib/layout/layout';

// class App extends PureComponent {


//   render(){
//   return (
//     <div className="App">
//        {/* <AddUser updateUser={this.updateUser}/> 

//        <UserList userList={this.state.userList}/> 
//        { 
//         this.state.userList.map((user)=>{
//             return <UserList user={user}/>
        
//         })
//       } */}

       

//        <BrowserRouter>
//           <Routes>
//               <Route path="/header" element={<Header />} />
//               <Route path="/AddUser" element={ <AddUser updateUser={this.props.updateUser}/> } />
//               {/* <Route path="/UserList" element={<UserList userList={this.state.userList}/> } /> */}

//           </Routes>
//         </BrowserRouter>

//        {/* <UserList /> */}
//       {/* <AddTodo /> */}
//     </div>  


    
//   );
// }
// }


// export default App;


import React, { Component, Fragment } from 'react';
import NavBar from './Components/NavBar/NavBar';
import { Routes,Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import Users from './Components/page/Users';
import Todo from './Components/page/Todo';

export default class App extends Component {
  
  render() {
    return (
      <Fragment>
          <NavBar />
           <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/users' element= {<Users/>}></Route>
            <Route path='/todo' element={<Todo/>}></Route>
        </Routes>
      </Fragment>
      
    )
  }
}
