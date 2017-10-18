import React, {Component} from 'react';
import { NavLink, Link } from 'react-router-dom';
import PROJECT_URI from '../utility';


export default class Navbar extends Component {
  constructor(){
    super();
  }

  render(){
    return (
      <div className='navbar1'>
        <NavLink to={ PROJECT_URI + '/home' }>Home</NavLink>
        <NavLink to={ PROJECT_URI + '/menu' }>My Menu</NavLink>
        <NavLink to={ PROJECT_URI + '/' } onClick={() => {localStorage.clear()}}>Sign Out</NavLink>
      </div>
    )
  }
}
