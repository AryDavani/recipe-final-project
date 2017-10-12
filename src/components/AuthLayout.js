import React, { Component } from 'react';

export default class AuthLayout extends Component {
  render(){
    return (
      <div className="background2">
        {this.props.children}
      </div>
    )
  }
}
