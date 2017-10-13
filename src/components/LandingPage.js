import React, {Component} from 'react';
import LandingPageNavbar from './LandingPageNavbar';

export default class LandingPage extends Component {
  render(){
    return(
      <div className="background">
        <LandingPageNavbar />
        { this.props.children }
      </div>
    )
  }
}
