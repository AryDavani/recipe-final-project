import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import PROJECT_URI from '../utility';

export default class AuthLayout extends Component {
  render(){
    return (
      <div className="background2">
        <div className="nav-options">
          <NavLink to={ PROJECT_URI + '/' }><i className="fa fa-home fa-2x"></i></NavLink>
        </div>
        {this.props.children}
      </div>
    )
  }
}
