import React, {Component} from 'react';
import Info from './Info';
import { NavLink } from 'react-router-dom';
import Footer from './Footer';
import PROJECT_URI from '../utility';

export default class LandingPage extends Component {
  render(){
    return(
      <div>
        <div className="background3">
          <div className="">
            <h1 className="header">BiteSize</h1>
            <i>Calculate your menu items!</i>
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
