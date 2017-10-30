import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import AuthLayout from "./AuthLayout";
import PROJECT_URI from "../utility";

export default class LoginForm extends Component {
  constructor() {
    super();
  }

  _handleLoginForm = e => {
    e.preventDefault();

    let un = e.target.email.value;
    let pw = e.target.password.value;
    let qs = "username=" + encodeURIComponent(un) + "&password=" + pw;

    this.props.handleLoginForm(qs);
    e.target.reset();
  };

  render() {
    return (
      <AuthLayout>
        <div className="center-flex">
          <div className="auth-forms">
            <h1>Log In!</h1>
            {this.props.errorMsg ? (
              <p className="red">{this.props.errorMsg}</p>
            ) : (
              <br />
            )}
            <div>
              <form onSubmit={this._handleLoginForm}>
                <div className="row">
                  <div className="form-group col-md-12">
                    <label>Email address</label>
                    <input
                      required
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Enter email"
                    />
                  </div>
                  <div className="form-group col-md-12">
                    <label>Password</label>
                    <input
                      required
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <br />
                <button type="submit" className="btn btn-primary btn-block">
                  Login
                </button>
              </form>
              <br />
              <div>
                <span>
                  Don't have an account?{" "}
                  <NavLink to={PROJECT_URI + "/signup"}>Sign Up</NavLink>
                </span>
              </div>
            </div>
          </div>
        </div>
      </AuthLayout>
    );
  }
}
