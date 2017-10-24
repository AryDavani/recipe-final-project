import React, {Component} from 'react';
import Info from './Info';
import { NavLink } from 'react-router-dom';
import Footer from './Footer';
import PROJECT_URI from '../utility';
import LandingPageNavbar from './LandingPageNavbar';

export default class LandingPage extends Component {
  render(){
    return(
      <div>
        <LandingPageNavbar />
        <div className="background3">
          <div className="banner">
            <i className="header">Calculate your menu items.</i>
            <h4>Data-Bites makes it easy for restuarants to calculate calorie information for their menu items.</h4>
            <button onClick={() => { this.props.history.push(PROJECT_URI + '/signup') }} className="btn btn-success btn-lg">Sign Up Now!</button>
            <i className="fa fa-chevron-down fa-2x"></i>
          </div>
        </div>
        <div>
          <Info/>
          <div className="get-started">
            <button onClick={() => { this.props.history.push(PROJECT_URI + '/signup') }} className="btn btn-success btn-lg">Get Started!</button>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}
