import React, {Component} from 'react';
import CrudItems from './CrudItems';

export default class CrudList extends Component {
  constructor() {
    super();

  }

  _handleDelete = (item) => {
    console.log('handle delete called', item);
  }

  render(){

    console.log('CrudList props', this.props);

    let crudlist = this.props.menuItems.map((item, index) => {
      return <CrudItems key={ index } item={ item } handleDelete={ this._handleDelete }/>
    });

    return (
      <div className="">
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
      </div>

    )
  }
}
