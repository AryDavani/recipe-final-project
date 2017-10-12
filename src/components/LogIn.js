import React, {Component} from 'react';
import Modal from 'react-modal';
import {loginModalStyle} from '../styles/modal';
import {NavLink} from 'react-router-dom';
import { PARSE_URL, PARSE_HEADERS } from '../parse';

let $ = window.$ = require('jquery');


export default class LogIn extends Component {
  constructor() {
    super();
  }

  _handleLogin = (e) => {
    e.preventDefault();

    let object = {};

    object['email'] = e.target.email.value;
    object['password'] = e.target.password.value;

    console.log('login submitted', object);

    fetch(`${PARSE_URL}/login?${$.param(object)}`, { headers: PARSE_HEADERS })
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      localStorage.setItem('user', JSON.stringify(result));
    })
    .catch((err) => {
      console.log(err);
    })
  }

  render(){
    return (
      <div className="background2">
        <Modal isOpen={ true } style={ loginModalStyle }>
          <h1>Log In!</h1>
          <br/>
          <div>
            <form onSubmit={ this._handleLogin }>
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
              <span>Don't have an account? <NavLink to='/signup'>Sign Up</NavLink></span>
            </div>
          </div>
        </Modal>
      </div>
    )
  }
}
