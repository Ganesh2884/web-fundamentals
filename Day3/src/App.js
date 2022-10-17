import './App.css';
import AddUser from './Components/AddUser/AddUser';
// import AddButton from './Components/AddButton';
import Header from './Components/Header/Header';
import 'antd/dist/antd.min.css';
// import UserList from './Components/UserList/UserList';
import React ,{ PureComponent } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import { Header } from 'antd/lib/layout/layout';

class App extends PureComponent {


  render(){
  return (
    <div className="App">
       {/* <AddUser updateUser={this.updateUser}/> 

       <UserList userList={this.state.userList}/> 
       { 
        this.state.userList.map((user)=>{
            return <UserList user={user}/>
        
        })
      } */}

       

       <BrowserRouter>
          <Routes>
              <Route path="/header" element={<Header />} />
              <Route path="/AddUser" element={ <AddUser updateUser={this.props.updateUser}/> } />
              {/* <Route path="/UserList" element={<UserList userList={this.state.userList}/> } /> */}

          </Routes>
        </BrowserRouter>

       {/* <UserList /> */}
      {/* <AddTodo /> */}
    </div>  


    
  );
}
}


export default App;

