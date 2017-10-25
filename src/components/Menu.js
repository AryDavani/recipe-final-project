import React, {Component} from 'react';
import MenuList from './MenuList';

export default class Menu extends Component {
  constructor() {
    super();

    this.state = {
      sort: ''
    }
  }

  _handleChange = (e) => {
    console.log('onchange', e.target.value);
  }

  render(){
    console.log('menu component', this.props.menuItems.length);
    let menulist = this.props.menuItems.map((item, index) => {
      return <MenuList key={ index } item={ item } />
    });

    return (
      <div className="container menu">
        <div className="row">
          <div>
            {/* <h1 className="your-menu">Your Menu</h1> */}
          </div>
        </div>
        { this.props.menuItems.length ?
          <div className="row">
            <div className="col-md-9">
            </div>
            <div className="col-md-1">
              <h5>Sort By:</h5>
            </div>
            <div className="col-md-2">
              <select className="form-control" onChange={ this._handleChange }>
                <option>Select</option>
                <option>Name</option>
                <option>Calories (highest to lowest)</option>
                <option>Calories (lowest to highest)</option>
              </select>
            </div>
          </div> :
          <h1 className="no-menu-items">There's nothing here</h1>
        }
        <br/>
        { menulist }
      </div>
    )
  }
}
