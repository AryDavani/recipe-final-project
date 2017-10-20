import React, {Component} from 'react';

export default class CrudItems extends Component {
  constructor() {
    super();
  }


  _handleDelete = () => {
    let itemId = this.props.item.objectId;
    console.log('Delete clicked on', itemId);
    this.props.handleDelete(itemId)
  }
  render(){
    console.log('CrudItems props', this.props);
    return(
      <tr>
        <td scope="row" className="edit-delete-buttons">
          <button className="btn btn-warning">Edit</button>
          <button className="btn btn-danger" onClick={ this._handleDelete }>Delete</button>
        </td>
        <td>{ this.props.item.name }</td>
        <td>{ this.props.item.description }</td>
        <td>{ this.props.item.calories.toFixed([0]) }</td>
      </tr>
    )
  }
}
