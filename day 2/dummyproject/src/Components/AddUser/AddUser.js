import { Button, Drawer,Input } from 'antd'
import React, { Component, Fragment } from 'react';
// import InputFields from '../InputFieds/InputFields';
import './AddUser.css';


export default class AddUser extends Component {
    constructor(props){
        super(props);
        this.state ={
            open:false,
            firstName:"",
            lastName:"",
            Phone:"",
            Email:"",
            weight:""
        };
    }
     showDrawer =() => {
        this.setState({open:true})
        console.log("clicked")
      };
      onClose =() =>{
        this.setState({open:false})
      };

      setFirstName = (e) =>{
        let firstName = e.target.value;
        this.setState({firstName});
      }

      setLastName = (e) =>{
        let lastName = e.target.value;
        this.setState({lastName});
      }

      setEmail = (e)=>{
        let Email = e.target.value;
        this.setState({Email});
      }

      setPhone= (e)=>{
        let Phone = e.target.value;
        this.setState({Phone});
      }

      setWeight = (e)=>{
        let weight = e.target.value;
        this.setState({weight});
      }

        // handleChange = (e) =>{
        //     console.log(e);
        // }
      submitUser = (e) => {
        console.log(this.state)
            e.preventDefault();
            console.log("Clicked");
            // console.log(e.target.value);
      }

  render() {
    return (
      <Fragment>
        {/* <InputFields/> */}
        {/* <form onSubmit={this.submitUser}> */}
            {/* <Button danger  type='primary' className='addUser' onChange={this.submitUser} >ADD User</Button> */}
        {/* </form> */}
        {/* <Button onChange={this.submitUser} className='addUser'>Submit User</Button> */}
        {/* <Button danger  type='primary' className='addUser' >Submit</Button> */}

        <Button danger onClick={this.showDrawer} type='primary' className='addUser'>ADD User</Button>
        <Drawer title="User Details" onClose={this.onClose} placement="right" open={this.state.open}>
            <div className='userDetails'>
            <label> First Name</label>
                <Input value={this.state.firstName} onChange={(e)=>{this.setFirstName(e)}} type="text" placeholder='Enter Text'></Input>
            <label> Last Name</label>
                <Input value={this.state.lastName} type="text" placeholder='Enter Text' onChange={(e)=>{this.setLastName(e)}}></Input>
                <label> Email</label>
                <Input value={this.state.Email} type="text" placeholder='Enter Text' onChange={(e)=>{this.setEmail(e)}}></Input>
            <label> Phone No.</label>
                <Input value={this.state.Phone} type="number" placeholder='Phone' onChange={(e)=>{this.setPhone(e)}}></Input>
                <label> Weight</label>
                <Input value={this.state.weight} type="text" placeholder='Enter Text' onChange={(e)=>{this.setWeight(e)}}></Input>
            </div>  
            <Button onClick={() => {
                //this.submitUser;
                let dummyUser =  {
                    firstName : this.state.firstName,
                    lastName : this.state.lastName,
                    Email : this.state.Email,
                    Phone : this.state.Phone,
                    weight : this.state.weight
                }
                this.onClose();
                this.props.updateUser(dummyUser);
            }}
                >Submit User</Button>
        </Drawer>
      </Fragment>
    )
  }
}
