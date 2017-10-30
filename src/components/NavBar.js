import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import PROJECT_URI from "../utility";

export default class Navbar extends Component {
  constructor() {
    super();
  }

  render() {
    console.log("navbar props", this.props.user.username);
    return (
      <div className="navigation">
        <div className="user">
          <h4 className="lastname">Welcome {this.props.user.firstname}!</h4>
        </div>
        <div className="navbar1">
          <NavLink to={PROJECT_URI + "/home"} activeStyle={{ color: "#dfb500" }}>Dashboard</NavLink>
          <NavLink to={PROJECT_URI + "/menu"} activeStyle={{ color: "#dfb500" }}>Menu</NavLink>
        </div>
        <div className="nav-options">
          <NavLink to={PROJECT_URI + "/"}>Home</NavLink>
          <NavLink
            to={PROJECT_URI + "/"}
            onClick={() => {
              localStorage.clear();
            }}
          >
            Sign Out
          </NavLink>
        </div>
      </div>
    );
  }
}
