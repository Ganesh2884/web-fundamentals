import { Button } from 'antd';
import React, { PureComponent, Fragment } from 'react'
import './InputField.css';
export default class InputField extends PureComponent {
  render() {
    return (
     <Fragment >
      <input  type="text" className='inputfield'></input>
      <Button ghost className='add'>ADD TASK</Button>
     </Fragment>
    )
  }
}
