import React, {Component} from 'react';
import Modal from 'react-modal';
import {loginModalStyle} from '../styles/modal';
import {NavLink} from 'react-router-dom';
import { PARSE_URL, PARSE_HEADERS } from '../parse';


export default class SignUp extends Component {
  constructor() {
    super();
  }

  _handleSignUp = (e) => {
    e.preventDefault();

    let object = {};

    object['firstname'] = e.target.firstname.value;
    object['lastname'] = e.target.lastname.value;
    object['email'] = e.target.email.value;
    object['password'] = e.target.password.value;

    console.log('signup submitted', object);

    fetch(`${PARSE_URL}/users`, {
      method: "POST",
      body: object,
      headers: PARSE_HEADERS
    })
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log('result', result);
      localStorage.setItem('user', JSON.stringify(result));
    })
    .catch((err) => {
      console.log(err);
    })
  }

  render(){
    return (
      <div className="background2">
        <Modal isOpen={ this.props.location.pathname === '/signup' } style={ loginModalStyle }>
          <h1>Sign Up!</h1>
          <br/>
          <div>
            <form onSubmit={ this._handleSignUp }>
              <div className="row">
                <div className="form-group col-md-6">
                  <label>First name</label>
                  <input type="text" className="form-control" name="firstname" placeholder="First name" />
                </div>
                <div className="form-group col-md-6">
                  <label>Last name</label>
                  <input type="text" className="form-control" name="lastname" placeholder="Last name" />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-12">
                  <label>Email address</label>
                  <input type="email" className="form-control" name="email" placeholder="Enter email" />
                </div>
                <div className="form-group col-md-12">
                  <label>Password</label>
                  <input type="password" className="form-control" name="password" placeholder="Password" />
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
