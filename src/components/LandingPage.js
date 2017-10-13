import React, {Component} from 'react';
import LandingPageNavbar from './LandingPageNavbar';
import Info from './Info';
import { NavLink } from 'react-router-dom';

export default class LandingPage extends Component {
  render(){
    return(
      <div className="">
        {/* <LandingPageNavbar /> */}
        {/* { this.props.children } */}
        <div className="background3">
          <div className="tint">
            <h1>Kalories</h1>
          </div>
        </div>
        <div>
          <Info/>
          <button onClick={() => { this.props.history.push('/signup') }} className="btn btn-primary btn-lg">Get Started</button>
        </div>
      </div>
    )
  }
}
