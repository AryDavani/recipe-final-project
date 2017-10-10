import React, {Component} from 'react';
import Modal from 'react-modal';
import {loginModalStyle} from '../styles/modal';
import {NavLink} from 'react-router-dom';

export default class LogIn extends Component {
  constructor() {
    super();
  }

  render(){
    return (
      <div className="">
        <Modal isOpen={ true } style={ loginModalStyle }>
          <h1>Log In!</h1>
          <br/>
          <div>
            <form>
              <div className="row">
                <div className="form-group col-md-12">
                  <label>Email address</label>
                  <input type="email" className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group col-md-12">
                  <label>Password</label>
                  <input type="password" className="form-control" placeholder="Password" />
                </div>
              </div>
              <br/>
              <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
            </form>
            <br/>
            <div>
              <span>Don't have an account? <NavLink to='/signup'>Sign Up</NavLink></span>
            </div>
          </div>
        </Modal>
      </div>
    )
  }
}
