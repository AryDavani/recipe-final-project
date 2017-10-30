import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default class BaseLayout extends Component {
  render() {
    return (
      <div>
        <Navbar user={this.props.user} />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
