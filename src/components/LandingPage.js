import React, {Component} from 'react';
import LandingPageNavbar from './LandingPageNavbar';
import Info from './Info';
import { NavLink } from 'react-router-dom';

export default class LandingPage extends Component {
  render(){
    return(
      <div>
        {/* <LandingPageNavbar /> */}
        {/* { this.props.children } */}
        <div className="background3">
          <div className="">
            <h1 className="header">BiteSize</h1>
            <i>Calculate your menu items!</i>
          </div>
        </div>
        <div>
          <Info/>
        </div>
        <div className="footer">

        </div>
      </div>
    )
  }
}
