import React, { Fragment, PureComponent } from 'react'

import {Button} from "antd";

export default class AddButton extends PureComponent {
    constructor(props){
        super(props)
        this.state ={counter:1};
    }
  render() {
    return (
        <Fragment>
            <p>You clicked {this.state.counter} times</p>
            <Button onClick={()=>{this.setState({counter:this.state.counter+1})}}>Increment me</Button>
            <Button onClick={()=>{this.setState({counter:this.state.counter-1})}}>Decrement me</Button>
        </Fragment>
    )
  }
}
