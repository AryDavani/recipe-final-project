import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default class BaseLayout extends Component {

  render(){
    console.log('BASELAYOUT', this);
    return (
      <div>
        <Navbar/>
        { this.props.children }
        <Footer/>
      </div>
    )
  }
}
