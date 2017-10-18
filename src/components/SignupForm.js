import React, {Component} from 'react';
import { authModalStyle } from '../styles/modal';
import { NavLink } from 'react-router-dom';
import AuthLayout from './AuthLayout';


export default class SignupForm extends Component {
  constructor() {
    super();
  }

  _handleSignupForm = (e) => {
    e.preventDefault();

    let user = {};

    user.firstname = e.target.firstname.value;
    user.lastname = e.target.lastname.value;
    user.username = e.target.email.value;
    user.password = e.target.password.value;

    this.props.handleSignupForm(user);
  }

  render(){
    return (
      <AuthLayout>
        <div className="center-flex">
          <div className="auth-forms">
            <h1>Sign Up!</h1>
            <br/>
            <div>
              <form onSubmit={ this._handleSignupForm }>
                <div className="row">
                  <div className="form-group col-md-6">
                    <label>First name</label>
                    <input required type="text" className="form-control" name="firstname" placeholder="First name" />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Last name</label>
                    <input required type="text" className="form-control" name="lastname" placeholder="Last name" />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-12">
                    <label>Email address</label>
                    <input required type="email" className="form-control" name="email" placeholder="Enter email" />
                  </div>
                  <div className="form-group col-md-12">
                    <label>Password</label>
                    <input required type="password" className="form-control" name="password" placeholder="Password" />
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
          </div>
        </div>
      </AuthLayout>
    )
  }
}
