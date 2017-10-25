import React, {Component} from 'react';
import CrudItems from './CrudItems';

export default class CrudList extends Component {
  constructor() {
    super();
  }

  _handleDelete = (item) => {
    this.props.handleDelete(item);
  }

  _handleEdit = (item) => {
    this.props.handleEditPost(item);
  }

  _newMenuItem = () => {
    this.props.newMenuItem();
  }

  render(){

    let crudlist = this.props.menuItems.map((item, index) => {
      return <CrudItems key={ index } item={ item } handleDelete={ this._handleDelete } handleEdit={ this._handleEdit }/>
    });

    return (
      <div className="">
        <div className="add-recipe">
          <button className="btn btn-primary" onClick={ this._newMenuItem }>New Menu Item</button>
        </div>
        { this.props.menuItems.length ?
          <table className="crud-table table table-striped">
            <thead>
              <tr>
                <th scope="col" className="col-md-2 center-text">Action</th>
                <th scope="col" className="col-md-2 center-text">Title</th>
                <th scope="col" className="col-md-7">Description</th>
                <th scope="col" className="col-md-1 center-text">Calories</th>
              </tr>
            </thead>
            <tbody>
              { crudlist }
            </tbody>
          </table>
           :
          <div className="empty-message">
            <h4>There's nothing here. Click "New Menu Item" to begin.</h4>
          </div>
        }
      </div>

    )
  }
}
