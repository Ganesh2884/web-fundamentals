import './App.css';
import AddUser from './Components/AddUser/AddUser';
// import AddButton from './Components/AddButton';
// import Header from './Components/Header/Header';
import 'antd/dist/antd.css';
import UserList from './Components/UserList/UserList';
import React ,{ PureComponent } from 'react';
class App extends PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      userList:[]
    };
  }

  updateUser = (user)=>{
    console.log("Clicked user " + user.firstName + user.lastName + user.Phone + user.weight);

let clonedUserList = Object.assign([],this.state.userList);
clonedUserList.push(user);

    this.setState({

      userList: clonedUserList
    });
    
  }


  render(){
  return (
    <div className="App">
      {/* <AddButton /> */}
       <AddUser updateUser={this.updateUser}/>
       {/* <AddUser updateUser={}/> */}
       <UserList userList={this.state.userList}/>
      {/* {
        this.state.userList.map((user)=>{
            return <UserList user={user}/>
        
        })
      } */}

    </div>  
    
  );
}
}

export default App;


