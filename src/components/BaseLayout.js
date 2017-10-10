import React, { Component } from 'react';
import NavBar from './NavBar';

export default class BaseLayout extends Component {
  render(){
    return (
      <div className="background">
        <NavBar />
        {this.props.children}
      </div>
    )
  }
}
