import React, {Component} from 'react';
import { NavLink, Link } from 'react-router-dom';

export default class LandingPageNavbar extends Component {

  render(){
    return (
      <div className='navbar'>
        <NavLink to='/signup'>Get Started</NavLink>
      </div>
    )
  }
}
