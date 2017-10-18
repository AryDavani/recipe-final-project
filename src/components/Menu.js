import React, {Component} from 'react';
import MenuList from './MenuList';

export default class Menu extends Component {
  constructor() {
    super();
  }

  render(){
    console.log('menu component', this.props.menuItems);
    let menulist = this.props.menuItems.map((item, index) => {
      return <MenuList key={ index } item={ item } />
    });

    return (
      <div className="container">
        <h1>Menu</h1>
        <br/>
        { menulist }
      </div>
    )
  }
}
