import React, { Component } from "react";
import MenuList from "./MenuList";

export default class Menu extends Component {
  constructor() {
    super();

    this.state = {
      sort: ""
    };
  }

  _handleChange = e => {
    console.log("onchange", e.target.value);
  };

  render() {
    let menulist = this.props.menuItems.map((item, index) => {
      return <MenuList key={index} item={item} />;
    });

    return (
      <div className="container menu">
        {this.props.menuItems.length ? null : (
          <div>
            <h4 className="empty-message">
              There are no menu items to display.
            </h4>
          </div>
        )}
        <br />
        {menulist}
      </div>
    );
  }
}
