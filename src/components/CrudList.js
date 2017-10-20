import React, {Component} from 'react';
import CrudItems from './CrudItems';

export default class CrudList extends Component {
  constructor() {
    super();

  }

  _handleDelete = (item) => {
    console.log('handle delete called', item);
    this.props.handleDelete(item);
  }

  _newMenuItem = () => {
    console.log('new menu item clicked');
  }

  render(){

    console.log('CrudList props', this.props);

    let crudlist = this.props.menuItems.map((item, index) => {
      return <CrudItems key={ index } item={ item } handleDelete={ this._handleDelete }/>
    });

    return (
      <div className="">
        <div className="row">
          <div className="">
            <h1 className="center-text">Dashboard</h1>
          </div>
        </div>
        <div className="add-recipe">
          <button className="btn btn-primary" onClick={ this._newMenuItem }>New Menu Item</button>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col" className="col-md-2">Action</th>
              <th scope="col" className="col-md-2">Item</th>
              <th scope="col" className="col-md-7">Description</th>
              <th scope="col" className="col-md-1">Calories</th>
            </tr>
          </thead>
          <tbody>
            { crudlist }
          </tbody>
        </table>
        { this.props.menuItems.length ? null :
          <div className="empty-message">
            <h4>There's nothing here. Click "New Menu Item" to begin.</h4>
          </div>
        }
      </div>

    )
  }
}
