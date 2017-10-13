import React, {Component} from 'react';
import Modal from 'react-modal';
import { authModalStyle } from '../styles/modal';
import { NavLink } from 'react-router-dom';
import AuthLayout from './AuthLayout';


export default class LoginForm extends Component {
  constructor() {
    super();

    this.state = {
      isOpen: false
    }
  }

  _handleLoginForm = (e) => {
    e.preventDefault();

    let un = e.target.email.value;
    let pw = e.target.password.value;
    let qs = 'username=' + encodeURIComponent(un) + '&password=' + pw;

    this.props.handleLoginForm(qs);

  }

  render(){
    console.log(this.props);

    return (
      <AuthLayout>
        <div className="center-flex">
          <div className="auth-forms">
            <h1>Log In!</h1>
            <br/>
            <div>
              <form onSubmit={ this._handleLoginForm }>
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
                <button type="submit" className="btn btn-primary btn-block">Log In</button>
              </form>
              <br/>
              <div>
                <span>Don't have an account? <NavLink to='/signup'>Sign Up</NavLink></span>
              </div>
            </div>
          </div>
        </div>
      </AuthLayout>
    )
  }
}
