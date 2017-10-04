import React, {Component} from 'react';
import {NavLink, Link} from 'react-router-dom';

export default class NavBar extends Component {
  render(){
    return (
      <div>
        <nav className='navbar'>
          <NavLink to='/help'>How It Works</NavLink>
          <NavLink to='/form'>Add</NavLink>
          <NavLink to='/nutrition'>My Menu</NavLink>
        </nav>
        { this.props.children }
      </div>
    )
  }
}
