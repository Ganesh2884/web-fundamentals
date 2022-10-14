// import { Button } from 'antd';
import React, { Component, Fragment } from 'react'
import './InputFields.css'
export default class InputFields extends Component {
//     constructor(){
//         super();
//     }
//     submitUser = (e) => {
//         e.preventDefault();
//         console.log("clicked")
//         // console.log(e.target.value);
//   }
  render() {
    return (
      <Fragment>
        <div className='inputDetails'>
            <form >
            <label> First Name</label>
                <input  type="text" placeholder='Enter Text'></input>
            <label> Last Name</label>
                <input type="text" placeholder='Enter Text'></input>
                <label> Email</label>
                <input type="text" placeholder='Enter Text'></input>
            <label> Phone No.</label>
                <input type="number" ></input>
                <label> Blood Group</label>
                <input type="text" placeholder='Enter Text'></input>
            </form>
            </div>      
      </Fragment>
    )
  }
}
