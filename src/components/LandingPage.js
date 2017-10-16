import React, {Component} from 'react';
import Info from './Info';
import { NavLink } from 'react-router-dom';

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
            <button onClick={() => { this.props.history.push('/signup') }} className="btn btn-success btn-lg">Get Started!</button>
          </div>
        </div>
        <div className="footer">
        </div>
      </div>
    )
  }
}
