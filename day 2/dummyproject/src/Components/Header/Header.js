import React, { Fragment, PureComponent } from 'react'
import './Header.css';
import InputField from './InputField';

export default class Header extends PureComponent {
  render() {
    return (
        <Fragment >
            <div className='header1' >
              <InputField/>
            </div>
        </Fragment>
    )
  }
}
