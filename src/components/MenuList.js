import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import PROJECT_URI from '../utility';


export default class MenuList extends Component {
  constructor() {
    super();
  }
  render(){
    return(
      <div className="container">
        <div className="menu-items">
          <div className="menu-heading">
            <NavLink to={ PROJECT_URI + '/menu/' + this.props.item.objectId}><h2>{ this.props.item.name }</h2></NavLink>
            <h2>{ this.props.item.calories.toFixed([0]) }</h2>
          </div>
          <div className="menu-description">
            <h4>{ this.props.item.description }</h4>
          </div>
        </div>
      </div>
    )
  }
}
