import React, {Component} from 'react';

export default class MenuList extends Component {
  constructor() {
    super();
  }
  render(){
    console.log('menu list', this.props);
    return(
      <div className="container">
        <div className="menu-items">
          <div className="menu-heading">
            <h2>{ this.props.item.name }</h2>
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
