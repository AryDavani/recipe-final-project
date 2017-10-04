import React, { Component } from 'react';
import BaseLayout from './BaseLayout';
import NavBar from './NavBar';

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <NavBar /> */}
        <BaseLayout />
      </div>
    );
  }
}
