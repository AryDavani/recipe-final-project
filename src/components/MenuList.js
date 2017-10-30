import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import PROJECT_URI from "../utility";

export default class MenuList extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="">
        <div className="menu-items">
          <div className="menu-heading">
            <NavLink to={PROJECT_URI + "/menu/" + this.props.item.objectId}>
              {this.props.item.name}
            </NavLink>
            <h4>{this.props.item.calories.toFixed([0])} calories</h4>
          </div>
          <div className="menu-description">
            <p>{this.props.item.description}</p>
          </div>
        </div>
      </div>
    );
  }
}
