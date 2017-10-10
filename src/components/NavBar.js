import React, {Component} from 'react';
import {NavLink, Link} from 'react-router-dom';

export default class NavBar extends Component {

  render(){
    return (
      <div className='navbar'>
        <NavLink to='/info'>How It Works</NavLink>
        <NavLink to='/add'>Add</NavLink>
        <NavLink to='/menu'>My Menu</NavLink>
      </div>
    )
  }
}
