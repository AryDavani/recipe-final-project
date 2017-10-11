import React, {Component} from 'react';
import Modal from 'react-modal';
import {loginModalStyle} from '../styles/modal';
import {NavLink} from 'react-router-dom';

export default class SignUp extends Component {
  constructor() {
    super();
  }

  render(){
    return (
      <div className="background2">
        <Modal isOpen={ this.props.location.pathname === '/signup' } style={ loginModalStyle }>
          <h1>Sign Up!</h1>
          <br/>
          <div>
            <form>
              <div className="row">
                <div className="form-group col-md-6">
                  <label>First name</label>
                  <input type="text" className="form-control" placeholder="First name" />
                </div>
                <div className="form-group col-md-6">
                  <label>Last name</label>
                  <input type="text" className="form-control" placeholder="Last name" />
                </div>
              </div>
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
              <span>Already have an account? <NavLink to='/login'>Log in</NavLink></span>
            </div>
          </div>
        </Modal>
      </div>
    )
  }
}
