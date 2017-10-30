import React, {Component} from 'react';

export default class CrudItems extends Component {
  constructor() {
    super();
  }

  _handleDelete = () => {
    let itemId = this.props.item.objectId;
    this.props.handleDelete(itemId)
  }

  _handleEdit = () => {
    let item = this.props.item;
    this.props.handleEdit(item);
  }

  render(){
    return(
      <tr>
        <td scope="row" className="edit-delete-buttons">
          <button className="btn btn-primary" onClick={ this._handleDelete }>View</button>          
          <button className="btn btn-warning" onClick={ this._handleEdit }>Edit</button>
          <button className="btn btn-danger" onClick={ this._handleDelete }>Delete</button>
        </td>
        <td className="center-text">{ this.props.item.name }</td>
        <td className="">{ this.props.item.description }</td>
        <td className="center-text">{ this.props.item.servings }</td>
        <td className="center-text">{ this.props.item.calories.toFixed([0]) }</td>
      </tr>
    )
  }
}
