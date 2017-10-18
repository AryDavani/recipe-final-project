import React, {Component} from 'react';

export default class MenuList extends Component {
  constructor() {
    super();
  }
  render(){
    console.log('menu list', this.props);
    return(
      <div className="menu container">
        <div className="menu-items">
          <div className="menu-heading">
            <h3>{ this.props.item.name }</h3>
            <h3>{ this.props.item.calories.toFixed([0]) }</h3>
          </div>
          <div className="menu-description">
            <p>{ this.props.item.description }</p>
          </div>
        </div>
      </div>
    )
  }
}
