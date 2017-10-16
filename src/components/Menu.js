import React, {Component} from 'react';

export default class Menu extends Component {
  constructor() {
    super();
  }

  render(){
    console.log('menu componenet', this.props.menuItems);
    return (
      <div className="menu">
      </div>
    )
  }
}
