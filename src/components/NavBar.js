import React, {Component} from 'react';
import { NavLink, Link } from 'react-router-dom';

export default class NavBar extends Component {
  constructor(){
    super();
  }

  render(){
    console.log('navbar', this);
    return (
      <div className='navbar'>
        <NavLink to='/add'>Add</NavLink>
        <NavLink to='/menu'>My Menu</NavLink>
        <NavLink to='/' onClick={() => {localStorage.clear()}}>Sign Out</NavLink>
      </div>
    )
  }
}
