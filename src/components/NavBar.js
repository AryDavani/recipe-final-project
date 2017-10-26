import React, {Component} from 'react';
import { NavLink, Link } from 'react-router-dom';
import PROJECT_URI from '../utility';


export default class Navbar extends Component {
  constructor(){
    super();
  }

  render(){
    return (
      <div className="navigation">
        <div className="user">
          <i className="user-icon fa fa-user fa-lg"></i>
          {/* <NavLink to='#'>{ this.props.user }</NavLink> */}
        </div>
        <div className='navbar1'>
          <NavLink to={ PROJECT_URI + '/home' }>Dashboard</NavLink>
          <NavLink to={ PROJECT_URI + '/menu' }>My Menu</NavLink>
        </div>
        <div className='nav-options'>
          {/* <NavLink to={ PROJECT_URI + '/home/help' }>Help</NavLink> */}
          <NavLink to={ PROJECT_URI + '/' } onClick={() => {localStorage.clear()}}>Sign Out</NavLink>
        </div>
      </div>
    )
  }
}
