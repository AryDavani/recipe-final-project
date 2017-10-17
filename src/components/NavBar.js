import React, {Component} from 'react';
import { NavLink, Link } from 'react-router-dom';

export default class Navbar extends Component {
  constructor(){
    super();
  }

  render(){
    return (
      <div className='navbar1'>
        <NavLink to='/home'>Home</NavLink>
        <NavLink to='/menu'>My Menu</NavLink>
        <NavLink to='/' onClick={() => {localStorage.clear()}}>Sign Out</NavLink>
      </div>
    )
  }
}
