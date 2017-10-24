import React, {Component} from 'react';
import { NavLink, Link } from 'react-router-dom';
import PROJECT_URI from '../utility';


export default class LandingPageNavbar extends Component {
  constructor(){
    super();
  }

  render(){
    return (
      <div className="landing-nav">
        <p className="">Bite-Size</p>
        <NavLink to={ PROJECT_URI + '/login' }>Login</NavLink>
      </div>
    )
  }
}
