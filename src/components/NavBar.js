import React, {Component} from 'react';
import { NavLink, Link } from 'react-router-dom';
import PROJECT_URI from '../utility';


export default class Navbar extends Component {
  constructor(){
    super();
  }

  render(){
    console.log('navbar props', this.props.user.username);
    return (
      <div className="navigation">
        <div className="user">
          <NavLink to={ PROJECT_URI + '/'}><i className="fa fa-home fa-lg"></i></NavLink>
        </div>
        <div className='navbar1'>
          <NavLink to={ PROJECT_URI + '/home' }>Dashboard</NavLink>
          <NavLink to={ PROJECT_URI + '/menu' }>Menu</NavLink>
        </div>
        <div className='nav-options'>
          <h4 className="to-gray">{this.props.user.lastname}</h4>
          <NavLink to={ PROJECT_URI + '/' } onClick={() => {localStorage.clear()}}>Sign Out</NavLink>
        </div>
      </div>
    )
  }
}
