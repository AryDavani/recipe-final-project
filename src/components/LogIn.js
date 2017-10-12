import React, {Component} from 'react';
import Modal from 'react-modal';
import {loginModalStyle} from '../styles/modal';
import {NavLink} from 'react-router-dom';
import { PARSE_URL, PARSE_HEADERS } from '../parse';

let $ = window.$;


export default class LogIn extends Component {
  constructor() {
    super();
  }

  _handleLogin = (e) => {
    e.preventDefault();

    let un = e.target.email.value;
    let pw = e.target.password.value;
    let qs = 'username=' + encodeURIComponent(un) + '&password=' + pw;

    console.log('login submitted', qs);

    fetch(`${PARSE_URL}/login?${qs}`, { headers: PARSE_HEADERS })
    .then((response) => {
      return response.json();
    })
    .then((user) => {
      localStorage.setItem('user', JSON.stringify(user));
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
